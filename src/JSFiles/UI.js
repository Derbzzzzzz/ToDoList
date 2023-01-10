import Project from "./project";
import Create from "./create";

const UI = (() => {

    let addProjectButton = document.querySelector('.project-add')
    let projectForm = document.querySelector('.project-form')
    let projectError = document.querySelector('.project-form-error')
    let cancelProjectButton = document.querySelector('.cancel-project')
    let confirmProjectButton = document.querySelector('.confirm-project')
    let projectInput = document.getElementById('project-input')
    let projectContainer = document.querySelector('.project-container')
    let projectTitle = document.querySelector('.project-title')

    let todoList = document.querySelector(".todo-list")
    let addTodoButton = document.querySelector('.project-add')
    let cancelTodoButton = document.querySelector('.cancel-todo')
    let confirmTodoButton = document.querySelector('.confirm-todo')

    let cancelProjectCreation = function(){
        addProjectButton.style.display = 'flex';
        projectForm.style.display = 'none';
        projectError.style.display = "none"
    }
    
    let openProjectForm = function(){
        addProjectButton.style.display = 'none';
        projectForm.style.display = 'flex';
    }

    let addNewProject = function(){
        Project.createProject(projectInput.value)
    }

    let projectFormSubmit = function(e){
        e.preventDefault();
        if(projectInput.value.length > 10 || projectInput.value.length < 1){
            projectError.textContent = "Project names must be between 1 and 10 characters"
            projectError.style.display = "block"
            return
        }
        if(Project.validateProjectName(projectInput.value)){
            projectError.textContent = "Project names must be unique"
            projectError.style.display = "block"
            return
        }
        addNewProject();
        cancelProjectCreation();
        appendProject(Project.projectList.at(-1))
        projectInput.value= ""
        projectError.style.display = "none"
    }

    function activateProjectButtons(){
        addProjectButton.addEventListener('click', openProjectForm)
        cancelProjectButton.addEventListener('click', cancelProjectCreation)
        confirmProjectButton.addEventListener('click', projectFormSubmit)
    }

    function emptyProjectContainer(){
        while(projectContainer.firstChild){
            projectContainer.removeChild(projectContainer.firstChild)
        }
    }

    function appendProject(project){
        let projectElement = Create.projectElement()
        projectClickLogic(projectElement)
        let list = Create.projectListElement()
        let projectName = Create.projectNameElement(project)

        projectElement.appendChild(list)
        projectElement.appendChild(projectName)

        projectContainer.appendChild(projectElement)

    }

    function populateProjects(){
        emptyProjectContainer()
        Project.projectList.forEach(appendProject)
    }

    function activateProjectSubmit(event){
        projectForm.addEventListener("submit", projectFormSubmit)
    }

    function projectClickLogic(projectElement){
        projectElement.addEventListener("click", activateProject)
        projectElement.addEventListener("click", displayProject)
    }

    let activateProject = function(){
        let projectElements = document.querySelectorAll(".project")
        projectElements.forEach(project => (project.closest('.project')).classList.remove("active"))
        this.classList.add("active")
    }

    let displayProject = function(){
        let projectName = this.querySelector(".project-name").textContent
        projectTitle.textContent = projectName

        emptyToDoList()

        let activeProject = Project.projectList.find(element => element.name == projectName)

        activeProject.todos.forEach(appendTodo)

    }

    let appendTodo = function(todo){
        let task = Create.taskElement()
        let circle = Create.taskCircleElement()
        let taskText = Create.taskTextElement(todo)
        let x = Create.taskXElement()

        task.appendChild(circle)
        task.appendChild(taskText)
        task.appendChild(x)

        todoList.appendChild(task)
    }

    function emptyToDoList(){
        while(todoList.firstChild){
            todoList.removeChild(todoList.firstChild)
        }
    }

    function activateTodoButtons(){
        addTodoButton.addEventListener('click', openProjectForm)
        cancelTodoButton.addEventListener('click', cancelProjectCreation)
        confirmTodoButton.addEventListener('click', projectFormSubmit)
    }

    return{
        activateProjectButtons,
        activateProjectSubmit,
        populateProjects,             
    }

})();

export default UI;