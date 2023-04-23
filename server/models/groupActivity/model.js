import { findAll, deleteById, create, update, findById } from './conllers.js';


export const postDataGroupActivity = (req, res) => {
    create(req.body).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
            res.send(error);
        });
}

export const updateGroupActivity = (req, res) => {
        update(req.body, req.params.id).
            then((data) => {
                res.status(200).json({
                    message: "GroupActivity updated successfully",
                    groupActivity: data
                })
            })
            .catch((error) => {
                console.log(error);
                res.send(error);
            });
}

export const getByIdGroupActivity = (req, res) => {
    const { id } = req.params;
    findById(id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        });
}

export const getAllGroupActivity = (req, res) => {
    findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
            res.send(error);
        });
}

export const deleteByIdGroupActivity = (req, res) => {
    deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "GroupActivity deleted successfully",
                GroupActivity: data
            })
        })
        .catch((error) => {
            console.error(error);
        });
}