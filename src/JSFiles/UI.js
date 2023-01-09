import Project from "./project";

const UI = (() => {

    let addProjectButton = document.querySelector('.project-add')
    let projectForm = document.querySelector('.project-form')
    let projectError = document.querySelector('.project-form-error')
    let cancelButton = document.querySelector('.cancel-project')
    let confirmButton = document.querySelector('.confirm-project')
    let projectInput = document.getElementById('project-input')
    let projectContainer = document.querySelector('.project-container')
    let projectTitle = document.querySelector('.project-title')
    let todoList = document.querySelector(".todo-list")

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
        cancelButton.addEventListener('click', cancelProjectCreation)
        confirmButton.addEventListener('click', projectFormSubmit)
    }

    function emptyProjectContainer(){
        while(projectContainer.firstChild){
            projectContainer.removeChild(projectContainer.firstChild)
        }
    }

    function createProjectElement(){
        let projectElement = document.createElement("div")
        projectElement.classList.add('project')
        projectClickLogic(projectElement)

        return projectElement
    }

    function createProjectListElement(){
        let list = document.createElement("span")
        list.classList.add('material-symbols-outlined')
        list.classList.add('list')
        list.textContent = 'list'

        return list
    }

    function createProjectNameElement(project){
        let projectName = document.createElement("div")
        projectName.classList.add('project-name')
        projectName.textContent = project.name

        return projectName
    }

    function appendProject(project){
        let projectElement = createProjectElement()
        let list = createProjectListElement()
        let projectName = createProjectNameElement(project)

        projectElement.appendChild(list)
        projectElement.appendChild(projectName)

        projectContainer.appendChild(projectElement)

    }

    function populateProjects(){
        emptyProjectContainer()
        console.log("test")
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
        console.log(this)
        this.classList.add("active")
    }

    let displayProject = function(){
        let projectName = this.querySelector(".project-name")
        projectTitle.textContent = projectName.textContent

        emptyToDoList()

    }

    function emptyToDoList(){
        while(todoList.firstChild){
            todoList.removeChild(todoList.firstChild)
        }
    }

    return{
        activateProjectButtons,
        activateProjectSubmit,
        populateProjects,             
    }

})();

export default UI;