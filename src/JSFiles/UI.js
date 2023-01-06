import Project from "./project";

const UI = (() => {

    let addProjectButton = document.querySelector('.project-add')
    let projectForm = document.querySelector('.project-form')
    let cancelButton = document.querySelector('.cancel-project')
    let confirmButton = document.querySelector('.confirm-project')
    let projectInput = document.getElementById('project-input')
    let projectContainer = document.querySelector('.project-container')

    let cancelProjectCreation = function(){
        addProjectButton.style.display = 'flex';
        projectForm.style.display = 'none';
    }
    
    let openProjectForm = function(){
        addProjectButton.style.display = 'none';
        projectForm.style.display = 'flex';
    }

    let addNewProject = function(){
        Project.createProject(projectInput.value)
        
    }

    function activateProjectButtons(){
        addProjectButton.addEventListener('click', openProjectForm)
        cancelButton.addEventListener('click', cancelProjectCreation)
        confirmButton.addEventListener('click', () => {
            addNewProject();
            cancelProjectCreation();
            populateProjects();
            // console.log(Project.projectList)
        })
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

    return{
        activateProjectButtons,                  
    }

})();

export default UI;