import Groups from './type.js';


export const findAll = (props) => {
    return Groups.findAll(props);
}

export const findById = (id) => {
    return Groups.findByPk(id);
}

export const deleteById = (id) => {
    return Groups.destroy({ where: { id: id } });
}

export const create = (groups) => {
    let newGroups = new Groups(groups);
    return newGroups.save();
}

export const update = (groups, id) => {
    let update = {
        name: groups.name,
        type: groups.type,
    };
    return Groups.update(update, { where: { id: id } });
}