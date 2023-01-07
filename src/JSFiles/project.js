import ToDo from "./todo";


const Project = (() => {

    let projectList = createProjectList()

    function createProjectList(){

        let list = []

        let defaultProject = {
            name: 'Default',
            todos: [ToDo.createToDo("Take Out Trash", "", "", ""), ToDo.createToDo("Make Dinner", "", "", "")],
        }

        list.push(defaultProject)

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
    }
    
    function appendProject(project){
        projectList.push(project)
    }

    return{
        projectList,
        createProject,
        appendProject,
        validateProjectName
    }

})();

export default Project;