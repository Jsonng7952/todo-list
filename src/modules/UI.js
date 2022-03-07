import ToDoList from "./ToDoList";
import Project from "./Project";
import Task from "./Task";

class UI {

    static header() {
        const header = document.createElement('header');

        const headerTitle = document.createElement('div');
        headerTitle.classList.add('header-title');
        headerTitle.textContent = 'Todo List';

        const showSideBar = document.createElement('button');
        showSideBar.classList.add('show-sidebar');
        showSideBar.textContent = '≡';

        header.appendChild(headerTitle);
        header.appendChild(showSideBar);
        
        return header;
    }

    static content() {
        const content = document.createElement('div');
        content.id = 'content';

        return content;
    }

    static sidebar() {
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');

        const sidebarHeading = document.createElement('div');
        sidebarHeading.classList.add('sidebar-heading');

        const sidebarTitle = document.createElement('div');
        sidebarTitle.classList.add('sidebar-title');
        sidebarTitle.textContent = 'Projects';

        sidebarHeading.appendChild(sidebarTitle);
        sidebar.appendChild(sidebarHeading);

        const projects = document.createElement('div');
        projects.classList.add('projects');
        sidebar.appendChild(projects);

        const addProjectBtn = document.createElement('button');
        addProjectBtn.classList.add('add-project-btn');
        addProjectBtn.textContent = '+ Add Project';
        addProjectBtn.addEventListener('click', () => this.showProjectForm());
        sidebar.appendChild(addProjectBtn);

        const projectFormContainer = document.createElement('div');
        projectFormContainer.classList.add('project-form-container');
        const projectForm = document.createElement('div');
        projectForm.classList.add('project-form');
        const projectInput = document.createElement('input');
        projectInput.type = 'text';
        projectInput.id = 'p-title';
        projectInput.placeholder = 'Project Title';
        projectForm.appendChild(projectInput);
        projectFormContainer.appendChild(projectForm);

        const projectFormBtns = document.createElement('div');
        projectFormBtns.classList.add('project-form-btns');
        const submitBtn = document.createElement('button');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = 'SUBMIT';
        submitBtn.addEventListener('click', () => this.submitProjectForm());
        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'CANCEL';
        cancelBtn.addEventListener('click', () => this.hideProjectForm());
        projectFormBtns.appendChild(submitBtn);
        projectFormBtns.appendChild(cancelBtn);
        projectFormContainer.appendChild(projectFormBtns);

        projectFormContainer.style.display = 'none';

        sidebar.appendChild(projectFormContainer);

        return sidebar;
    }
    
    // Hide add project button and display project form
    static showProjectForm() {
        const addProjectBtn = document.querySelector('.add-project-btn');
        addProjectBtn.style.display = 'none';

        const projectFormContainer = document.querySelector('.project-form-container');
        projectFormContainer.style.display = 'flex';
    }

    // Display add project button and hide project form
    static hideProjectForm() {
        const addProjectBtn = document.querySelector('.add-project-btn');
        addProjectBtn.style.display = 'inline-block';

        const projectFormContainer = document.querySelector('.project-form-container');
        projectFormContainer.style.display = 'none';
    }

    static submitProjectForm() {
        const projectFormValue = document.querySelector('#p-title').value;
        if(projectFormValue !== ''){
            let project = new Project(`${projectFormValue}`, `${ToDoList.key}`);
            ToDoList.addProject(project);

            document.querySelector('#p-title').value = '';
            this.hideProjectForm();            
        }
    }

    static currentProject() {
        const currentProject = document.createElement('div');
        currentProject.classList.add('current-project');

        const currentProjectTitle = document.createElement('div');
        currentProjectTitle.classList.add('current-project-title');
        currentProjectTitle.style.display = 'none';
        currentProject.appendChild(currentProjectTitle);
 
        const tasks = document.createElement('div');
        tasks.classList.add('tasks');
        currentProject.appendChild(tasks);

        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task-btn');
        addTaskBtn.textContent = '+ Add Task';
        addTaskBtn.style.display = 'none';
        addTaskBtn.addEventListener('click', () => this.showTaskForm());
        currentProject.appendChild(addTaskBtn);

        const taskFormContainer = document.createElement('div');
        taskFormContainer.classList.add('task-form-container');
        const taskForm = document.createElement('div');
        taskForm.classList.add('task-form');
        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.id = 't-title';
        taskInput.placeholder = 'Task Title';
        taskForm.appendChild(taskInput);
        taskFormContainer.appendChild(taskForm);

        const taskFormBtns = document.createElement('div');
        taskFormBtns.classList.add('task-form-btns');
        const submitBtn = document.createElement('button');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = 'SUBMIT';
        submitBtn.addEventListener('click', () => this.submitTaskForm());
        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'CANCEL';
        cancelBtn.addEventListener('click', () => this.hideTaskForm());
        taskFormBtns.appendChild(submitBtn);
        taskFormBtns.appendChild(cancelBtn);
        taskFormContainer.appendChild(taskFormBtns);

        taskFormContainer.style.display = 'none';

        currentProject.appendChild(taskFormContainer);

        return currentProject;
    }

    static showTaskForm() {
        const addTaskBtn = document.querySelector('.add-task-btn');
        addTaskBtn.style.display = 'none';

        const taskFormContainer = document.querySelector('.task-form-container');
        taskFormContainer.style.display = 'flex';

    }

    static hideTaskForm() {
        const addTaskBtn = document.querySelector('.add-task-btn');
        addTaskBtn.style.display = 'inline-block';

        const taskFormContainer = document.querySelector('.task-form-container');
        taskFormContainer.style.display = 'none';
    }

    static submitTaskForm() {
        if(ToDoList.selectedProject !== undefined) {
            const index = ToDoList.projects.findIndex(project => project.key === ToDoList.selectedProject.dataset.key);
            const taskFormValue = document.querySelector('#t-title').value;

            let task = new Task(`${taskFormValue}`, `Description`, `Duedate`, `Priority`);
            ToDoList.projects[index].addTask(task);  

            document.querySelector('#t-title').value = '';
            this.hideTaskForm();   
        }
    }

    static footer() {
        const footer = document.createElement('footer');
        footer.textContent = 'Todo List';

        return footer;
    }

}

export default UI;