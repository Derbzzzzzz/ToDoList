import Storage from "./storage";

const Project = (() => {

    let projectList = createProjectList()

    function createProjectList(){

        let list = []

        if(localStorage.getItem("projects")){
            list = JSON.parse(localStorage.getItem("projects"))
        }

        console.log(list)

        // console.log(Storage.storageAvailable('localStorage'))
        // console.log(JSON.parse(localStorage.getItem("projects")))

        // let defaultProject = createProject("Default")

        // createTodo("Take Out Trash", defaultProject)
        // createTodo("Make Dinner", defaultProject)

        return list
    }

    function validateProjectName(projectName){
        return projectList.some(e => e.name === projectName)
    }

    function createProject(projectName){
        let project = {
            name: projectName,
            todos: [],
        }

        appendProject(project)

        return project
    }
    
    function appendProject(project){
        projectList.push(project)
        updateStorage()
    }

    function removeProject(project){
        projectList = projectList.filter(function(el) {return el != project})
        updateStorage()

        return projectList
    }

    function createTodo(ToDoName, project){
        
        let todo = {
            name: ToDoName,
            // desc: description,
            // dueDate: date,
            // priority: prio
        }

        appendTodo(todo, project)
        updateStorage()
    }

    function appendTodo(todo, project){
        project.todos.push(todo)
    }

    function validateTodoName(projectName, activeProject){
        return activeProject.todos.some(e => e.name === projectName)
    }

    function updateStorage(){
        if(Storage.storageAvailable('localStorage')){
            localStorage.setItem("projects", JSON.stringify(projectList))
        }
    }

    return{
        projectList,
        createProject,
        removeProject,
        createTodo,
        validateProjectName,
        validateTodoName,
        updateStorage
    }

})();

export default Project;