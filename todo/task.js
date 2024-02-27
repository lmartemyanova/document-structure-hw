const newTask = document.getElementById('task__input');
const btn = document.querySelector('button');
const form = document.forms.tasks__control;
const tasks = document.getElementById('tasks__list');

addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form')
    
    const task = document.createElement('div')
    // if we need to add new tasks before old
    // if (tasks.children.length == 0) {
    tasks.appendChild(task)
    task.classList.add('task')
    // } else {
    //     tasks.insertBefore(task, tasks.children[0])
    // }

    const taskName = document.createElement('div')
    task.appendChild(taskName)
    taskName.classList.add('task__title')
    taskName.innerText = newTask.value

    const removeTask = document.createElement('a')
    task.appendChild(removeTask)
    removeTask.setAttribute('href', '#')
    removeTask.classList.add('task__remove')
    removeTask.innerHTML = '&times;'

    document.querySelector('form').reset()

    removeTask.onclick = () => {
        task.remove()
    }
})
