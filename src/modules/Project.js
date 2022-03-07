class Project {
    
    tasks = [];
    id = 0;

    constructor(name, key) {
        this.name = name;
        this.key = key;
    }

    addTask(task) {
        this.tasks.push(task);

        const newTask = document.createElement('div'); 
        newTask.classList.add('task');
        newTask.dataset.key = this.key;
        newTask.dataset.id = this.id;

        const taskTitle = document.createElement('div'); 
        taskTitle.classList.add('task-title');
        taskTitle.textContent = `${task.getTitle()}`;
        newTask.appendChild(taskTitle);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task-btn');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', (e) => this.deleteTask(e));
        newTask.appendChild(deleteButton);

        document.querySelector('.tasks').appendChild(newTask);
        this.id++;
    }
    
    deleteTask(e) {
        const index = e.target.parentNode.dataset.id;
        if(index !== undefined) {
            this.tasks.splice(index, 1); 
        }
        document.querySelector(`.task[data-id="${e.target.parentNode.dataset.id}"]`).remove();
    }

    getProjectName() {
        return this.name;
    }

    getKey() {
        return this.key;
    }

    getTasks() {
        return this.tasks;
    }
}

export default Project;