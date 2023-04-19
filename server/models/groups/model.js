import { findAll, deleteById, create, update, findById } from './conllers.js';
import { validateName } from '../../validator/validator.js'


const validator = (req, res) => {
    const body = {
        name: req.body.name,
        type: req.body.type,
    };
    const validMap = {
        name: validateName(body['name']),
        name: validateName(body['type']),
    };

    const falseKeys = Object.entries(validMap)
        .filter(([key, value]) => value !== true)
        .map(([key, value]) => key);

    if (falseKeys.length === 0) {
        return true
    }
    else {
        let message = ''
        Object.entries(validMap).forEach(([key, value]) => {
            if (value === false) {
                message += `${body[key]} is invalid ${key}\n`
            }
        })
        return message
    }
}

export const postDataGroups = (req, res) => {
    const valid = validator(req, res)
    if (valid == true) {
        create(req.body).
            then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    else {
        res.send(valid)
    }
}

export const updateGroups = (req, res) => {
    const valid = validator(req, res)
    if (valid == true) {
        update(req.body, req.params.id).
            then((data) => {
                res.status(200).json({
                    message: "Groups updated successfully",
                    groups: data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    else {
        res.send(valid)
    }
}

export const getByIdGroups = (req, res) => {
    const { id } = req.params;
    findById(id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getAllGroups = (req, res) => {
    findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
            res.send(error);
        });
}

export const deleteByIdGroups = (req, res) => {
    deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Groups deleted successfully",
                Groups: data
            })
        })
        .catch((error) => {
            console.error(error);
        });
}