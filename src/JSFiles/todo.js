const ToDo = (() => {

    function createToDo(ToDoName, description, date, prio){
        return{
            name: ToDoName,
            desc: description,
            dueDate: date,
            priority: prio
        }
    }

    

    return{
        createToDo,
    }

})();

export default ToDo;