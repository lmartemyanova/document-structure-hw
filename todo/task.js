const newTask = document.getElementById('task__input');
const btn = document.querySelector('button');
const form = document.forms.tasks__control;
const tasks = document.getElementById('tasks__list');

addEventListener('submit', (e) => {
    e.preventDefault();
    
    // if we need to add new tasks before old
    // if (tasks.children.length == 0) {
    // tasks.appendChild(task)
    // task.classList.add('task')
    // } else {
    //     tasks.insertBefore(task, tasks.children[0])
    // }

    if (!newTask.value.trim()) {
        document.querySelector('form').reset()
        return
    }
    const title = newTask.value.trim()

    tasks.insertAdjacentHTML('afterbegin', `
    <div class="task">
    <div class="task__title">
    ${title}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>
    `)

    document.querySelector('form').reset()

    const removes = document.querySelectorAll('.task__remove')
    for (let index = 0; index < removes.length; index++) {
        const task = tasks.children[index];
        
        removes[index].addEventListener('click', (e) => {
            task.remove()
        })
    }
})

