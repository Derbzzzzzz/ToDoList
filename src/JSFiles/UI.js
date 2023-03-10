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
    let addTodoButton = document.querySelector('.todo-add')
    let removeTodoButton = document.querySelector('.todo-remove')
    let cancelTodoButton = document.querySelector('.cancel-todo')
    let confirmTodoButton = document.querySelector('.confirm-todo')
    let todoForm = document.querySelector('.todo-form')
    let todoError = document.querySelector('.todo-form-error')
    let todoInput = document.getElementById('todo-input')
    let priority = document.getElementById('priority')

    let homeContainer = document.querySelector('.home-container')
    let workingContainer = document.querySelector('.working-container')
    

    let activeProject = 5;

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
        removeTodoButton.addEventListener('click', removeSelectedTodos)
        addProjectButton.addEventListener('click', openProjectForm)
        cancelProjectButton.addEventListener('click', cancelProjectCreation)
        confirmProjectButton.addEventListener('click', projectFormSubmit)
    }

    function removeSelectedTodos(){
        let circles = document.querySelectorAll('.task-circle')
        circles.forEach(function(circle){
            if(circle.textContent == 'radio_button_checked'){
                circle.nextElementSibling.nextElementSibling.click()
            }
        })
    }

    function emptyProjectContainer(){
        while(projectContainer.firstChild){
            projectContainer.removeChild(projectContainer.firstChild)
        }
    }

    function appendProject(project){
        let projectWrapper = Create.projectWrapperElement()
        let projectElement = Create.projectElement()
        projectClickLogic(projectElement)
        let list = Create.projectListElement()
        let projectName = Create.projectNameElement(project)
        let x = Create.projectXElement()
        x.addEventListener("click", function(){
            removeProjectfromProjectList(project)
            removeProjectfromDOM(projectWrapper)
            if(projectTitle.textContent == project.name && Project.projectList.length == 0){
                homeScreen()
            } else if(projectTitle.textContent == project.name){
                let temp = document.querySelector(".project")
                temp.click()
            }
        })

        projectElement.appendChild(list)
        projectElement.appendChild(projectName)

        projectWrapper.appendChild(projectElement)
        projectWrapper.appendChild(x)

        projectContainer.appendChild(projectWrapper)

    }

    let removeProjectfromProjectList = function(project){
        Project.projectList = Project.removeProject(project)
    }

    let removeProjectfromDOM = function(projectWrapper){
        projectWrapper.parentNode.removeChild(projectWrapper)

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

        activeProject = Project.projectList.find(element => element.name == projectName)

        activeProject.todos.forEach(appendTodo)

        addTodoButton.style.display = "flex"
        removeTodoButton.style.display = "flex"

        workScreen()

    }

    let appendTodo = function(todo){
        let task = Create.taskElement(todo)
        let circle = Create.taskCircleElement(todo)
        let taskText = Create.taskTextElement(todo)
        let x = Create.taskXElement()
        x.addEventListener("click", function(){
            Project.removeTodo(todo, activeProject)
            removeTodoFromDOM(x)
            // console.log(activeProject)
            // console.log(activeProject.todos)
        })

        task.appendChild(circle)
        task.appendChild(taskText)
        task.appendChild(x)

        todoList.appendChild(task)
    }

    // let removeTodoFromProject = function(todo){
    //     activeProject.todos = activeProject.todos.filter(function(el) {return el != todo})
    //     Project.updateStorage()
    //     // console.log( activeProject.todos.filter(function(el) {return el != todo}))
    // }

    let removeTodoFromDOM = function(x){
        let task = x.closest('.task')
        task.parentNode.removeChild(task)
    }

    function emptyToDoList(){
        while(todoList.firstChild){
            todoList.removeChild(todoList.firstChild)
        }
    }

    let openTodoForm = function(){
        addTodoButton.style.display = 'none';
        removeTodoButton.style.display = 'none';
        todoForm.style.display = 'flex';
    }

    let cancelTodoCreation = function(){
        addTodoButton.style.display = 'flex';
        removeTodoButton.style.display = 'flex';
        todoForm.style.display = 'none';
        todoError.style.display = "none"
    }

    let addNewTodo = function(){
        Project.createTodo(todoInput.value, priority.value, activeProject)
        console.log(activeProject)
    }

    let todoFormSubmit = function(e){
        e.preventDefault();
        if(todoInput.value.length > 20 || todoInput.value.length < 1){
            todoError.textContent = "Todo names must be between 1 and 20 characters"
            todoError.style.display = "block"
            return
        }
        if(Project.validateTodoName(todoInput.value, activeProject)){
            todoError.textContent = "Todo names must be unique"
            todoError.style.display = "block"
            return
        }
        addNewTodo();
        cancelTodoCreation();
        appendTodo(activeProject.todos.at(-1))
        todoInput.value= ""
        todoError.style.display = "none"
    }

    function activateTodoButtons(){
        addTodoButton.addEventListener('click', openTodoForm)
        cancelTodoButton.addEventListener('click', cancelTodoCreation)
        confirmTodoButton.addEventListener('click', todoFormSubmit)
    }

    function activateTodoSubmit(event){
        todoForm.addEventListener("submit", todoFormSubmit)
    }

    function homeScreen(){
        homeContainer.style.display = 'flex'
        workingContainer.style.display = 'none'
    }

    function workScreen(){
        homeContainer.style.display = 'none'
        workingContainer.style.display = 'block'
    }

    function PageLoad(){
        activateProjectButtons()
        activateProjectSubmit()
        populateProjects()
        activateTodoButtons()
        activateTodoSubmit() 
    }

    return{
        PageLoad      
    }

})();

export default UI;