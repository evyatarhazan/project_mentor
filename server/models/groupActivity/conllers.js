import GroupActivity from './type.js';


export const findAll = (props) => {
    return GroupActivity.findAll(props);
}

export const findById = (id) => {
    return GroupActivity.findByPk(id);
}

export const deleteById = (id) => {
    return GroupActivity.destroy({ where: { id: id } });
}

export const create = (groupActivity) => {
    let newGroupActivity = new GroupActivity(groupActivity);
    return newGroupActivity.save();
}

export const update = (groupActivity, id) => {
    let update = {
        comment: groupActivity.comment,
        time: groupActivity.time,
    };
    return GroupActivity.update(update, { where: { id: id } });
}

export const findByFk = (groupId) => {
    return GroupActivity.findAll({
        where: {
            group_id: groupId
        }
    });
}