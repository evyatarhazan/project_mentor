import { INTEGER, STRING } from 'sequelize';
import { db } from '../../dbConnect.js';

const Students = db.define('Studens', {
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
    }
});


export default Students;
