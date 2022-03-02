class Project {
    
    tasks = [];

    constructor(name) {
        this.name = name;
    }

    addTask(todo) {
        this.tasks.push(todo);
    }
    
    deleteTask(todo) {
        const index = this.tasks.indexOf(todo);
        if(index > -1) {
            this.tasks.splice(index, 1); 
        }
    }
}