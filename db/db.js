var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.connect = function(callback) {
    mongoose.connect('mongodb://localhost/todo_dev');
}

exports.disconnect = function(callback) {
    mongoose.disconnect(callback);
}

//定义todo对象模型
var TodoScheme = new Schema({
    title: String,
    name: String,
    time: String
});

//访问todo对象模型
mongoose.model('Todo', TodoScheme);
var Todo = mongoose.model('Todo');

exports.add = function(title, callback) {
    console.log('ok');
    var newTodo = new Todo();
    newTodo.title = title;
    newTodo.name = 'fxptest';
    newTodo.time = '2015-06-23';
    newTodo.save(function (err) {
        console.log(callback + '----' + err);
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}