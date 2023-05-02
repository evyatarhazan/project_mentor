import { INTEGER, STRING } from 'sequelize';
import { db } from '../../dbConnect.js';


const Students = db.define('Students', {
    firstName: {
        type: STRING,
        allowNull: false
    },
    lastName: {
        type: STRING,
        allowNull: false
    },
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    phone: {
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: true
    }
});


export default Students;
