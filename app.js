angular.module("todoApp", []).controller("TodoCtrl", function ($scope) {
  $scope.todos = [
    { text: "Learn Angular", done: true },
    { text: "Build an Angular App", done: false },
  ];

  $scope.addTodo = function () {
    if ($scope.todoText) {
      $scope.todos.push({ text: $scope.todoText, done: false });
      $scope.todoText = "";
    }
  };

  $scope.editTodo = function (todo) {
    todo.editing = !todo.editing;
  };

  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  };

  $scope.remaining = function () {
    var count = 0;
    angular.forEach($scope.todos, function (todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function () {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function (todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
});
