import './style.css';
import appendGithub from './JSFiles/image.js'

appendGithub()

let addProjectButton = document.querySelector('.project-add')

let projectForm = document.querySelector('.project-form')

let cancelButton = document.querySelector('.cancel-project')


function createProject(projectName){
    return{
        name: projectName,
        todos: [],
    }
}

function appendProject(project){
    projectList.push(project)
}

function createToDo(ToDoName, description, date, ){
    return{
        name: ToDoName,
        desc: description,
        dueDate: date,
        priority: prio
    }
}

function createProjectList(){
    let defaultProject = createProject('Default Proj')

    let projectList = [defaultProject]

    return projectList
}

let cancelProjectCreation = function(){
    addProjectButton.style.display = 'flex';

    projectForm.style.display = 'none';
}

let openProjectForm = function(){
    addProjectButton.style.display = 'none';

    projectForm.style.display = 'flex';
}

let projectList = createProjectList()

addProjectButton.addEventListener('click', openProjectForm)

cancelButton.addEventListener('click', cancelProjectCreation)








