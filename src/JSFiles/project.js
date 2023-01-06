
const Project = (() => {

    let projectList = createProjectList()

    function createProjectList(){

        let list = []

        let defaultProject = {
            name: 'Default Proj',
            todos: [],
        }

        list.push(defaultProject)
        
        return list

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
    }

})();

export default Project;