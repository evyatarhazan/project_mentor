import { findAll, deleteById, create, update, findById } from './conllers.js';
import { validateName, isValidIsraeliID, validatePhoneNumber, validateEmail } from '../../validator/validator.js'


const validator = (req, res) => {
    const body = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id,
        phone: req.body.phone,
        email: req.body.email,
    };
    const validMap = {
        firstName: validateName(body['firstName']),
        lastName: validateName(body['lastName']),
        id: isValidIsraeliID(body['id']),
        phone: validatePhoneNumber(body['phone']),
        email: validateEmail(body['email'])
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

export const postDataStudents = (req, res) => {
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

export const updateStudents = (req, res) => {
    const valid = validator(req, res)
    if (valid == true) {
        update(req.body, req.params.id).
            then((data) => {
                res.status(200).json({
                    message: "Students updated successfully",
                    students: data
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

export const getByIdStudents = (req, res) => {
    const { id } = req.params;
    findById(id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getAllStudents = (req, res) => {
    findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
            res.send(error);
        });
}

export const deleteByIdStudents = (req, res) => {
    deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Students deleted successfully",
                Students: data
            })
        })
        .catch((error) => {
            console.error(error);
        });
}