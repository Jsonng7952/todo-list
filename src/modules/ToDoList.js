class ToDoList {

    static projects = [];

    addProject(project) {
        this.projects.push(project);
    }
    
    deleteProject(project) {
        const index = this.projects.indexOf(project);
        if(index > -1) {
            this.projects.splice(index, 1); 
        }
    }
}