import { localeLowerCase } from "lower-case";
import "./styles.css";
import { format, compareAsc } from "date-fns";

let todos;
window.addEventListener("load", () => {
    todos = JSON.parse(localStorage.getItem("todos")) || []; //this set todos as global variable
    const nameInput = document.querySelector("#name");
    const newTodoForm = document.querySelector("#new-todo-form");

    const userName = localStorage.getItem("username") || "";
    nameInput.value = userName;

    nameInput.addEventListener("change", (e) => {
        localStorage.setItem("username", e.target.value);
    });

    newTodoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            createdAt: format(new Date(), "MMM, dd 'at' yyy  H:mm:ss"),
        };
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        e.target.reset();
        displayTodos();
    });
});

function displayTodos() {
    const todoList = document.querySelector(".todo-list");
    todoList.innerHTML = "";
    todos.forEach((todo) => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        const label = document.createElement("label");
        const input = document.createElement("input");
        const span = document.createElement("span");
        const content = document.createElement("div");
        const actions = document.createElement("div");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        input.type = "checkbox";
        input.checked = todo.done;
        span.classList.add("bubble");

        if (todo.category === "personal") {
            span.classList.add("personal");
        } else {
            span.classList.add("business");
        }
        content.classList.add("todo-content");
        actions.classList.add("actions");
        editButton.classList.add("edit");
        deleteButton.classList.add("delete");

        content.innerHTML = `<input type='text' value = '${todo.content}' readonly>`;
        editButton.textContent = "edit";
        deleteButton.textContent = "delete";

        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);

        todoList.appendChild(todoItem);

        if (todo.done) {
            todoItem.classList.add("done");
        }
        input.addEventListener("click", (e) => {
            todo.done = e.target.checked;
            localStorage.setItem("todos", JSON.stringify(todos));
            if (todo.done) {
                todoItem.classList.add("done");
            } else {
                todoItem.classList.remove("done");
            }
            displayTodos();
        });

        editButton.addEventListener("click", (e) => {
            const input = content.querySelector("input");
            input.removeAttribute("readonly");
            input.focus();
            input.addEventListener("blur", (e) => {
                input.setAttribute("readonly", true);
                todo.content = e.target.value;
                localStorage.setItem("todos", JSON.stringify(todos));
                displayTodos();
            });
        });
        deleteButton.addEventListener('click', (e) => {
          todos = todos.filter( t => t != todo);
          localStorage.setItem('todos', JSON.stringify(todos));
          displayTodos();
        })
    });
}
