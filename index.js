document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const input = document.getElementById("todo-input");
    const inputValue = input.value.trim();
    if (inputValue === "") {
        alert("Please enter a task.");
        return;
    }

    const ul = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.textContent = inputValue;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerHTML = "&times;";
    deleteButton.onclick = () => ul.removeChild(li);

    li.appendChild(deleteButton);
    ul.appendChild(li);

    input.value = "";
    input.focus();
}
