import { INTEGER } from 'sequelize';
import { db } from '../../dbConnect.js';
import Groups from '../groups/type.js';
import Students from '../students/type.js';


const StudentGroupRelationship = db.define('studentGroupRelationship', {
    student_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: Students,
            key: 'id'
        }
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


export default StudentGroupRelationship;

