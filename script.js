document.addEventListener("DOMContentLoaded", () => {
    const createTodoButton = document.getElementById("createTodo");
    const todoList = document.querySelector(".todo-list");

    createTodoButton.addEventListener("click", () => {
        const title = document.getElementById("todoTitle").value;
        const text = document.getElementById("todoText").value;

        if (title && text) {
            const todoItem = document.createElement("div");
            todoItem.className = "todo-item";

            const todoContent = document.createElement("div");
            todoContent.innerHTML = `<strong>${title}</strong><br>${text}`;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "delete";
            deleteButton.addEventListener("click", () => {
                todoList.removeChild(todoItem);
            });

            todoItem.appendChild(todoContent);
            todoItem.appendChild(deleteButton);

            todoList.appendChild(todoItem);

            document.getElementById("todoTitle").value = "";
            document.getElementById("todoText").value = "";
        } else {
            alert("Please enter both a title and text for the TODO item.");
        }
    });
});
