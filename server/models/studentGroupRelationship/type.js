import { INTEGER } from 'sequelize';
import { db } from '../../dbConnect.js';
import Groups from '../groups/type.js';
import Students from '../students/type.js';


const StudentGroupRelationship = db.define('StudentGroupRelationship', {
    student_id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Students,
            key: 'id'
        },
        unique: 'compositeIndex' 
    },
    group_id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Groups,
            key: 'id'
        },
        unique: 'compositeIndex' 
    }
}, {
    indexes: [
        {
            name: 'compositeIndex',
            unique: true,
            fields: ['student_id', 'group_id']
        }
    ]
});

export default StudentGroupRelationship;

