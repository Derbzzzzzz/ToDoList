
const Project = (() => {

    let projectList = createProjectList()

    function createProjectList(){

        let list = []
        let defaultProject = createProject('Default Proj')
        list.push(defaultProject)
        return list

    }

    function createProject(projectName){
        return{
            name: projectName,
            todos: [],
        }
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