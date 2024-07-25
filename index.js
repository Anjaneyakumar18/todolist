document.addEventListener("keypress",function(k){
    if (k.key=="Enter"){
        addTodo()
    }
});
function addTodo() {
    var input = document.getElementById('todo-input');
    var inputValue = input.value.trim();
    if (inputValue === '') {
        alert('Please enter a task');
        return;
    }

    var ul = document.getElementById('todo-list');
    var li = document.createElement('li');
    li.textContent = inputValue;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };
    li.appendChild(deleteButton);

    ul.appendChild(li);
    input.value = '';
}