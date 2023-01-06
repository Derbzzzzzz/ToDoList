import Project from "./project";

const UI = (() => {

    let addProjectButton = document.querySelector('.project-add')
    let projectForm = document.querySelector('.project-form')
    let cancelButton = document.querySelector('.cancel-project')
    let confirmButton = document.querySelector('.confirm-project')
    let inputField = document.querySelector

    let cancelProjectCreation = function(){
        addProjectButton.style.display = 'flex';
        projectForm.style.display = 'none';
    }
    
    let openProjectForm = function(){
        addProjectButton.style.display = 'none';
        projectForm.style.display = 'flex';
    }

    let addNewProject = function(){
        Project.createProject()
    }

    function activateProjectButtons(){
        addProjectButton.addEventListener('click', openProjectForm)
        cancelButton.addEventListener('click', cancelProjectCreation)
        confirmButton.addEventListener('click', () => {

            cancelProjectCreation()
        })
    }

    return{
        activateProjectButtons,                  
    }

})();

export default UI;