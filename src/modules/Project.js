class Project {
    
    tasks = [];

    constructor(name, key) {
        this.name = name;
        this.key = key;
    }

    addTask(task) {
        this.tasks.push(task);

        const newTask = document.createElement('div'); 
        newTask.classList.add('task');
        newTask.dataset.key = this.key;

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
    }

    loadTask(task) {
        const newTask = document.createElement('div'); 
        newTask.classList.add('task');
        newTask.dataset.key = this.key;

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
    }
    
    deleteTask(e) {
        const index = this.tasks.findIndex(task => task.title === e.target.parentNode.children[0].textContent);
        if(index !== -1) {
            this.tasks.splice(index, 1); 
        }
        e.target.parentNode.remove();

        // Find the project in local storage, remove the task from the array, add it back into the local storage.
        const value = localStorage.getItem(e.target.parentNode.dataset.key);
        let getProject = JSON.parse(value);
        const taskIndex = getProject.tasks.findIndex(task => task.title === e.target.parentNode.children[0].textContent);
        getProject.tasks.splice(taskIndex, 1);
        localStorage.setItem(`${e.target.parentNode.dataset.key}`, JSON.stringify(getProject));
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