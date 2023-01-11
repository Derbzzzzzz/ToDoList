const Create = (() => {

    function projectWrapperElement(){
        let projectWrapper = document.createElement("div")
        projectWrapper.classList.add('project-wrapper')

        return projectWrapper
    }

    function projectElement(){
        let projectElement = document.createElement("div")
        projectElement.classList.add('project')

        return projectElement
    }

    function projectListElement(){
        let list = document.createElement("span")
        list.classList.add('material-symbols-outlined')
        list.classList.add('list')
        list.textContent = 'list'

        return list
    }

    function projectNameElement(project){
        let projectName = document.createElement("div")
        projectName.classList.add('project-name')
        projectName.textContent = project.name

        return projectName
    }

    function projectXElement(){
        let x = document.createElement("span")
        x.classList.add('material-symbols-outlined')
        x.classList.add('project-x')
        x.textContent = 'x'

        return x
    }

    function taskElement(){
        let task = document.createElement("div")
        task.classList.add("task")

        return task
    }

    function taskCircleElement(){
        let circle = document.createElement("span")
        circle.classList.add('material-symbols-outlined')
        circle.classList.add('task-circle')
        circle.textContent = 'circle'

        return circle
    }

    function taskTextElement(todo){
        let taskText = document.createElement("div")
        taskText.classList.add("task-text")
        taskText.textContent = todo.name

        return taskText
    }

    function taskXElement(){
        let x = document.createElement("span")
        x.classList.add('material-symbols-outlined')
        x.classList.add('task-x')
        x.textContent = 'x'

        return x
    }



    return{
        projectWrapperElement,
        projectElement,
        projectListElement,
        projectNameElement,
        projectXElement,
        taskElement,
        taskCircleElement,
        taskTextElement,
        taskXElement
    }

})();

export default Create;