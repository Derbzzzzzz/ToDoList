
const Project = (() => {

    let projectList = createProjectList()

    function createProjectList(){

        let list = []

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
    }

    function createTodo(ToDoName, project){
        
        let todo = {
            name: ToDoName,
            // desc: description,
            // dueDate: date,
            // priority: prio
        }

        appendTodo(todo, project)
    }

    function appendTodo(todo, project){
        project.todos.push(todo)
    }

    function validateTodoName(projectName, activeProject){
        return activeProject.todos.some(e => e.name === projectName)
    }

    return{
        projectList,
        createProject,
        createTodo,
        validateProjectName,
        validateTodoName
    }

})();

export default Project;