import Project from "./project";

const UI = (() => {

    let addProjectButton = document.querySelector('.project-add')
    let projectForm = document.querySelector('.project-form')
    let projectError = document.querySelector('.project-form-error')
    let cancelButton = document.querySelector('.cancel-project')
    let confirmButton = document.querySelector('.confirm-project')
    let projectInput = document.getElementById('project-input')
    let projectContainer = document.querySelector('.project-container')

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
        populateProjects();
        projectInput.value= ""
        projectError.style.display = "none"
    }

    function activateProjectButtons(){
        addProjectButton.addEventListener('click', openProjectForm)
        cancelButton.addEventListener('click', cancelProjectCreation)
        confirmButton.addEventListener('click', projectFormSubmit)
    }

    function emptyProjectContainer(){
        projectContainer.innerHTML = "";
    }

    function appendProject(project){
        let projectElement = document.createElement("div")
        projectElement.classList.add('project')

        let list = document.createElement("span")
        list.classList.add('material-symbols-outlined')
        list.classList.add('list')
        list.textContent = 'list'

        let projectName = document.createElement("div")
        projectName.classList.add('project-name')
        projectName.textContent = project.name

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

    function projectClickLogic(projectParent){
        // Function that makes clicked project active and others unactive
        // Function that populates main content with ToDos
    }

    function activateProject(projectParent){
        Project.projectList.forEach(project => (project.closest('.project')).classList.remove("active"))
        projectParent.classList.add("active")
    }

    return{
        activateProjectButtons,
        activateProjectSubmit,
        populateProjects,             
    }

})();

export default UI;