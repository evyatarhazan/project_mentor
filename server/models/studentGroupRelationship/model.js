import { findAll, deleteById, create, findById } from './conllers.js';


export const postDataStudentGroupRelationship = (req, res) => {
    create(req.body).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
            res.send(error);
        });
}

export const getByIdStudentGroupRelationship = (req, res) => {
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

export const getAllStudentGroupRelationship = (req, res) => {
    findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
            res.send(error);
        });
}

export const deleteByIdStudentGroupRelationship = (req, res) => {
    deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "StudentGroupRelationship deleted successfully",
                StudentGroupRelationship: data
            })
        })
        .catch((error) => {
            console.error(error);
        });
}