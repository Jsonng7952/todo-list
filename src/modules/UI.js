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
        addProjectBtn.addEventListener('click', () => this.createProject());
        sidebar.appendChild(addProjectBtn);

        return sidebar;
    }

    // Create the project in the DOM
    static createProject() {
        let project = new Project(`Project ${ToDoList.id}`, `${ToDoList.id}`);
        ToDoList.addProject(project);
        ToDoList.id++;
    }

    static currentProject() {
        const currentProject = document.createElement('div');
        currentProject.classList.add('current-project');

        const currentProjectTitle = document.createElement('div');
        currentProjectTitle.classList.add('current-project-title');
        currentProjectTitle.textContent = 'Current Project Title';
        currentProject.appendChild(currentProjectTitle);
 
        const tasks = document.createElement('div');
        tasks.classList.add('tasks');
        currentProject.appendChild(tasks);

        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task-btn');
        addTaskBtn.textContent = '+ Add Task';
        addTaskBtn.addEventListener('click', () => this.createTask());
        currentProject.appendChild(addTaskBtn);

        return currentProject;
    }

    // Create the task in the DOM
    static createTask() {
        if(ToDoList.selectedProject !== undefined) {
            let task = new Task(`Title`, `Description`, `Duedate`, `Priority`);
            // 1. Keep track of the current selected project to get the reference. 
            // 2. Find the project in the ToDoList Array.
            // 3. Add the task into the project object. 
            const index = ToDoList.projects.findIndex(project => project.id === ToDoList.selectedProject.dataset.key);
            ToDoList.projects[index].addTask(task);           
        }
    }

    static footer() {
        const footer = document.createElement('footer');
        footer.textContent = 'Todo List';

        return footer;
    }

}

export default UI;