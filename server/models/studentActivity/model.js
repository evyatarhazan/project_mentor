import { findAll, deleteById, create, update, findById, findByFk } from './conllers.js';


export const postDataStudentActivity = (req, res) => {
    create(req.body).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
            res.send(error);
        });
}

export const updateStudentActivity = (req, res) => {
        update(req.body, req.params.id).
            then((data) => {
                res.status(200).json({
                    message: "StudentActivity updated successfully",
                    studentActivity: data
                })
            })
            .catch((error) => {
                console.log(error);
                res.send(error);
            });
}

export const getByIdStudentActivity = (req, res) => {
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

export const getAllStudentActivity = (req, res) => {
    findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
            res.send(error);
        });
}

export const deleteByIdStudentActivity = (req, res) => {
    deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "StudentActivity deleted successfully",
                StudentActivity: data
            })
        })
        .catch((error) => {
            console.error(error);
        });
}

export const getByFkStudentActivity = (req, res) => {
    const { student_id } = req.body;
    findByFk(student_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        });
}