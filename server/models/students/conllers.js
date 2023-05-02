import Students from './type.js';


export const findAll = (props) => {
    return Students.findAll(props);
}

export const findById = (id) => {
    return Students.findByPk(id);
}

export const deleteById = (id) => {
    return Students.destroy({ where: { id: id } });
}

export const create = (student) => {
    let newStudent = new Students(student);
    return newStudent.save();
}

export const update = (student, id) => {
    let update = {
        firstName: student.firstName,
        lastName: student.lastName,
        phone: student.phone,
        email: student.email
    };
    return Students.update(update, { where: { id: id } });
}