angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      ];
 
    todoList.addTodo = function() {
      if(todoList.todoText == "" || todoList.todoText == null)
      {
        alert("Please add your task first!");
      }
      else
      {
        todoList.todos.push({text:todoList.todoText, done:false});
        todoList.todoText = '';
      }
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });