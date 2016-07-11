const mongo = require('mongoose')

// mongo.connect('mongodb://127.0.0.1/zy-tasks')
// const conn = mongo.connection

// conn.on('error', err => {
//     console.error('连接数据库错误', err)
// })

// conn.on('open', () => {
//     console.log('数据库连接成功！')
// })

// exports.Task = mongo.model('tasks', {
//     date: Number,
//     content: String,
//     complete: Boolean,
//     order: Number,
//     createTime: Date,
//     updateTime: Date
// })


/**
 * 导出一个方法以便在多个位置使用
 * 功能是：将模型转换成普通数据对象
 * 并将 _id 变成 id
 * 
 * @param {Model} model 数据模型
 * @returns {Object} 数据模型中的数据
 */
// exports.toObject = function (model) {
//     model = model.toObject()
//     model.id = model._id.toString()
//     delete model._id
//     delete model.__v
//     return model
// }


/**
 * 将模型数组转换成普通数据对象的数组
 * 而且模型中的 _id 会被变成 id
 * 
 * @param models 模型数组
 * @returns 普通数据数组
 */
// exports.toArray = function(models){
//     return models.map(m => exports.toObject(m))
// }
