import './style.css';
import appendGithub from './JSFiles/image.js'

appendGithub()

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

let projectList = createProjectList()

let addProjectButton = document.querySelector('.project-add')

addProjectButton.addEventListener('click', )





