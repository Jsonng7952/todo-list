class Project {
    
    tasks = [];

    constructor(name) {
        this.name = name;
    }

    addTask(task) {
        this.tasks.push(task);
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
}

export default Project;