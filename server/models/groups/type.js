import { STRING } from 'sequelize';
import { db } from '../../dbConnect.js';


const Groups = db.define('Groups', {
    name: {
        type: STRING,
        allowNull: false
    },
    type: {
        type: STRING,
        allowNull: false
    }
});


export default Groups;
