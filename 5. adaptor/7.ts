const { Sequelize, Model, DataTypes } = require('sequelize'); // 操作数据库的工具
const sequelize = new Sequelize('sqlite::memory:');
//定义表模型 ，它是一个关系型 数据库的的ORM映射工具
class User2 extends Model { }
// init是在定义表的字段名和字段的类型
User2.init({
    username: DataTypes.STRING
}, { sequelize, modelName: 'User2' });

sequelize.sync()
    .then(() => User2.create({
        username: 'zhangyanling'
    }))
    .then(result => {
        console.log(result.toJSON());
    });