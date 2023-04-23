import { STRING, DATE, INTEGER } from 'sequelize';
import { db } from '../../dbConnect.js';
import Groups from '../groups/type.js';


const GroupActivity = db.define('GroupActivity', {
    comment: {
        type: STRING,
        allowNull: false
    },
    time: {
        type: DATE,
        allowNull: false
    },
    group_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: Groups,
            key: 'id'
        }
    }
});


export default GroupActivity;

