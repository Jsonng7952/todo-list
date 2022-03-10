import UI from "./UI";

class ToDoList {

    static projects = [];
    static key = 0;
    static selectedProject;

    // Add project object into array & DOM
    static addProject(project) {
        this.projects.push(project);

        const newProject = document.createElement('div'); 
        newProject.classList.add('project');
        newProject.dataset.key = this.key;
        newProject.addEventListener('click', (e) => this.selectProject(e));

        const projectTitle = document.createElement('div'); 
        projectTitle.classList.add('project-title');
        projectTitle.textContent = `${project.getProjectName()}`;
        newProject.appendChild(projectTitle);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-project-btn');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', (e) => this.deleteProject(e));
        newProject.appendChild(deleteButton);

        document.querySelector('.projects').appendChild(newProject);
        this.key++;
    }
    
    // Remove project object from array & DOM
    static deleteProject(e) {
        const index = this.projects.findIndex(project => project.key === e.target.parentNode.dataset.key);
        if(index !== -1) {
            // Remove from array using index, remove from localStorage using data-key
            this.projects.splice(index, 1); 
            localStorage.removeItem(`${e.target.parentNode.dataset.key}`);
        }
        // Remove project from sidebar
        document.querySelector(`.project[data-key="${e.target.parentNode.dataset.key}"]`).remove();

        // If the deleted was a selected project, delete all their task from DOM and reset the selected project.
        // Else, if a non selected project was deleted, delete their task. 
        if(e.target.parentNode === this.selectedProject){  
            document.querySelector('.current-project-title').style.display = 'none';
            document.querySelector('.add-task-btn').style.display = 'none';

            const tasks = document.querySelectorAll(`.task[data-key="${e.target.parentNode.dataset.key}"]`);
            tasks.forEach(task => task.remove());

            this.selectedProject = undefined;    
        }
        else {
            const tasks = document.querySelectorAll(`.task[data-key="${e.target.parentNode.dataset.key}"]`);
            tasks.forEach(task => task.remove());
        }
        // If the last project is deleted clear the display
        if(this.projects.length === 0) {
            document.querySelector('.current-project-title').style.display = 'none';
            document.querySelector('.add-task-btn').style.display = 'none';
        }
        console.log(this.selectedProject);
    }

    // Highlights the selected task and display it to the DOM.
    static selectProject(e) {
        // Hide any forms when selecting a different project.
        const taskFormContainer = document.querySelector('.task-form-container');
        const projectFormContainer = document.querySelector('.project-form-container');
        if(taskFormContainer.style.display === 'flex') {
            UI.hideTaskForm();
        }
        else if(projectFormContainer.style.display === 'flex') {
            UI.hideProjectForm();
        }

        if(e.target.textContent === 'Home') {
            // Deselect the previous project and select the home project.
            if(this.selectedProject !== undefined && this.selectedProject.textContent !== 'Home') {
                this.selectedProject.style.fontWeight = 'normal';
                this.selectedProject.style.color = '#808080';

                this.selectedProject = e.target; 
                this.selectedProject.style.fontWeight = 'bold';
                this.selectedProject.style.color = '#ffffff';

                // Display all task
                const currentProjectTitle = document.querySelector('.current-project-title');
                currentProjectTitle.textContent = 'Home';
                currentProjectTitle.style.display = 'block';
                const addTaskBtn = document.querySelector('.add-task-btn');
                addTaskBtn.style.display = 'none';

                const tasks = document.querySelector('.tasks');
                tasks.childNodes.forEach(task => {
                    task.style.display = 'flex';
                });                
            }
            else { // If home project is selected, and there is no selected project.
                this.selectedProject = e.target; 
                this.selectedProject.style.fontWeight = 'bold';
                this.selectedProject.style.color = '#ffffff';

                // Display all task
                const currentProjectTitle = document.querySelector('.current-project-title');
                currentProjectTitle.textContent = 'Home';
                currentProjectTitle.style.display = 'block';
                const addTaskBtn = document.querySelector('.add-task-btn');
                addTaskBtn.style.display = 'none';

                const tasks = document.querySelector('.tasks');
                tasks.childNodes.forEach(task => {
                    task.style.display = 'flex';
                }); 
            }
        }
        else if(e.target.className === 'project-title') {
            if(this.selectedProject === undefined) {
                this.selectedProject = e.target.parentNode; 
                this.selectedProject.style.fontWeight = 'bold';
                this.selectedProject.style.color = '#ffffff';      
                    
                document.querySelector('.current-project-title').style.display = 'block';
                document.querySelector('.add-task-btn').style.display = 'inline-block';
                this.displayTask()
            }
            else {
            this.selectedProject.style.fontWeight = 'normal';
            this.selectedProject.style.color = '#808080';

            this.selectedProject = e.target.parentNode; 
            this.selectedProject.style.fontWeight = 'bold';
            this.selectedProject.style.color = '#ffffff';      
                
            document.querySelector('.current-project-title').style.display = 'block';
            document.querySelector('.add-task-btn').style.display = 'inline-block';
            this.displayTask()                
            }
        }
        else if(e.target.className === 'project'){ 
            if(this.selectedProject === undefined) {
                this.selectedProject = e.target; 
                this.selectedProject.style.fontWeight = 'bold';
                this.selectedProject.style.color = '#ffffff'; 
    
                document.querySelector('.current-project-title').style.display = 'block';
                document.querySelector('.add-task-btn').style.display = 'inline-block';
                this.displayTask()
            }
            else {
                this.selectedProject.style.fontWeight = 'normal';
                this.selectedProject.style.color = '#808080';

                this.selectedProject = e.target; 
                this.selectedProject.style.fontWeight = 'bold';
                this.selectedProject.style.color = '#ffffff'; 

                document.querySelector('.current-project-title').style.display = 'block';
                document.querySelector('.add-task-btn').style.display = 'inline-block';
                this.displayTask()                
            }
        }   
    }

    // Selected project will have their task displayed
    static displayTask() {
        if(this.selectedProject.dataset.key !== undefined) {
            const index = this.projects.findIndex(project => project.key === this.selectedProject.dataset.key);
            // Hide the previous project's task by check if the id matches.
            const currentTasks = document.querySelector('.tasks');
            currentTasks.childNodes.forEach(task => {
                if(task.dataset.key !== this.selectedProject.dataset.key) {
                    task.style.display = 'none';
                }
            });
            // Change the current-project-title to the selected project's title
            const currentProjectTitle = document.querySelector('.current-project-title');
            currentProjectTitle.textContent = `${this.projects[index].getProjectName()}`;
            // Loop through the array(tasks) in the project object and display it onto DOM
            currentTasks.childNodes.forEach(task => {
                if(task.dataset.key === this.selectedProject.dataset.key) {
                    task.style.display = 'flex';
                }
            });            
        }

    }
}

export default ToDoList;