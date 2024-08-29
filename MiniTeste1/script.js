function addTask() {
    const taskInput = document.getElementById('tarefa');
    const taskList = document.getElementById('lista');
    
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function() {
            li.classList.toggle('completed');
        };

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskInput.value));
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
