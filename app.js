document.addEventListener('DOMContentLoaded', function() {
    var newTodo = document.querySelector('.new-todo');
    var todoList = document.querySelector('.todo-list');

    newTodo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && newTodo.value.trim() !== '') {
            var todoItem = document.createElement('li');
            todoItem.textContent = newTodo.value.trim();
            todoList.appendChild(todoItem);
            newTodo.value = '';
        }
    });
});
