class Project {
    
    tasks = [];
    id = 0;

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    addTask(task) {
        this.tasks.push(task);

        const newTask = document.createElement('div'); 
        newTask.classList.add('task');
        newTask.dataset.key = this.id;

        const taskTitle = document.createElement('div'); 
        taskTitle.classList.add('task-title');
        taskTitle.textContent = `${task.getTitle()}`;
        newTask.appendChild(taskTitle);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task-btn');
        deleteButton.textContent = 'X';
        newTask.appendChild(deleteButton);

        document.querySelector('.tasks').appendChild(newTask);
    }
    
    deleteTask(task) {
        const index = this.tasks.indexOf(task);
        if(index > -1) {
            this.tasks.splice(index, 1); 
        }
    }

    getProjectName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getTasks() {
        return this.tasks;
    }
}

export default Project;