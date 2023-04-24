import StudentGroupRelationship from './type.js';


export const findAll = (props) => {
    return StudentGroupRelationship.findAll(props);
}

export const findById = (id) => {
    return StudentGroupRelationship.findByPk(id);
}

export const deleteById = (id) => {
    return StudentGroupRelationship.destroy({ where: { id: id } });
}

export const create = (studentGroupRelationship) => {
    let newStudentGroupRelationship = new StudentGroupRelationship(studentGroupRelationship);
    return newStudentGroupRelationship.save();
}

