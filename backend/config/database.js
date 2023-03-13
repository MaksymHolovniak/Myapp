import { Sequelize } from 'sequelize';
 
const db = new Sequelize('b406', 'root', 'voteban2000', {
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;
