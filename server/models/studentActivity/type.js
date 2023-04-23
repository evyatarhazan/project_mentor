import { STRING, DATE, BOOLEAN, INTEGER } from 'sequelize';
import { db } from '../../dbConnect.js';
import Students from '../students/type.js';


const StudentActivity = db.define('StudentActivity', {
    comment: {
        type: STRING,
        allowNull: false
    },
    time: {
        type: DATE,
        allowNull: false
    },
    late: {
        type: BOOLEAN,
        allowNull: false
    },
    subtraction: {
        type: BOOLEAN,
        allowNull: false
    },
    student_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: Students,
            key: 'id'
        }
    }
});


export default StudentActivity;

