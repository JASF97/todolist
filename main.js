window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#new-list-form');
    const input = document.querySelector('#new-list-input');
    const newTask = document.querySelector('#tasks');
    const empty = document.querySelector('.empty')
    const emptyImg = document.querySelector('.img-empty')

    let listArrays = []


    empty.innerHTML = "No tienes tareas por hacer"
 

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        

        if (!task) {
            alert("Ingrese una tarea");  
            return
        } else {           
            listTask(task)
        }

        
    })
    
    // function eventListenersStorage () {
    //     document.addEventListener('DOMContentLoaded', () => {
    //         tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    //         listTask()
    //     });
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }
    

    function eventListenersStorage (task) {
        let getLocalStorage = localStorage.getItem("tasks")

        if (getLocalStorage == null) {
            listArrays = []
        } else {
            console.log("Hola")
            listArrays = JSON.parse(getLocalStorage)           
        }
        listArrays.push(task)
        localStorage.setItem("tasks", JSON.stringify(listArrays))

    }
    
    

    function listTask(task) {

        empty.style.display = "none"

        const content = document.createElement('div')
        content.classList.add('content-task')

        const i = document.createElement('input')
        i.classList.add('text-task')
        i.type = "text"
        i.value = task
        i.setAttribute("readonly", "readonly")

            
        const edit = document.createElement('button')
        edit.classList.add('edit')
        edit.innerText = "Editar"

            // const editImg = document.createElement('img')
            // editItem.classList.add('edit')
            // editImg.src = './icons/edit.svg'
            
        const delet = document.createElement('img')
        delet.classList.add('delete')
        delet.src = './icons/delete.svg'
            
        newTask.appendChild(content)
        content.appendChild(i)
        content.appendChild(edit)
        content.appendChild(delet)


        input.value = ""

        
        deleteTask (delet, newTask)
        editTask (i, edit)
        eventListenersStorage(task)
        
    }

    function editTask (i, edit) {
        edit.addEventListener('click', () => {

            if (edit.innerHTML == "Editar") {
                i.removeAttribute('readonly')
                i.focus()
                edit.innerText = "save"
                
            } else {
                i.setAttribute('readonly', 'readonly')
                edit.innerHTML = "Editar"
            }
        })
    }
    
    function deleteTask (delet, newTask) {
        delet.addEventListener('click', (e) => {

            const item = e.target.parentElement
            newTask.removeChild(item)

            if (newTask.innerHTML === "") {
                empty.style.display = "block"
            }

        })
    }

    
    
})


