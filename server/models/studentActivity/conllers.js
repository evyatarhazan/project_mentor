import StudentActivity from './type.js';


export const findAll = (props) => {
    return StudentActivity.findAll(props);
}

export const findById = (id) => {
    return StudentActivity.findByPk(id);
}

export const deleteById = (id) => {
    return StudentActivity.destroy({ where: { id: id } });
}

export const create = (studentActivity) => {
    let newStudentActivity = new StudentActivity(studentActivity);
    return newStudentActivity.save();
}

export const update = (studentActivity, id) => {
    let update = {
        comment: studentActivity.comment,
        time: studentActivity.time,
        late: studentActivity.late,
        subtraction: studentActivity.subtraction,
    };
    return StudentActivity.update(update, { where: { id: id } });
}

export const findByFk = (studentId) => {
    return StudentActivity.findAll({
        where: {
            student_id: studentId
        }
    });
}