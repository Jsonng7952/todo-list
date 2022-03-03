class ToDoList {

    static projects = [];
    static counter = 0;

    static addProject(project) {
        this.projects.push(project);

        const newProject = document.createElement('div'); 
        newProject.classList.add('project');
        newProject.addEventListener('click', () => console.log('test'));

        const projectTitle = document.createElement('div'); 
        projectTitle.classList.add('project-title');
        projectTitle.textContent = `${project.getProjectName()}`;
        newProject.appendChild(projectTitle);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-project-btn');
        deleteButton.textContent = 'X';
        newProject.appendChild(deleteButton);

        document.querySelector('.projects').appendChild(newProject);
    }
    
    static deleteProject(project) {
        const index = this.projects.indexOf(project);
        if(index > -1) {
            this.projects.splice(index, 1); 
        }
    }
}

export default ToDoList;