const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

const todoData = [

]

const render = () => {
  todoList.innerHTML = ''
  todoCompleted.innerHTML = ''

  todoData.forEach(el => {
    const li = document.createElement('li')
    li.classList.add('todo-item')
    li.innerHTML = `
    <span class="text-todo">${el.text}</span>
    <div class="todo-buttons">
      <button class="todo-remove"></button>
      <button class="todo-complete"></button>
    </div>
    `
    if (el.completed) {
      todoCompleted.append(li)
    } else {
      todoList.append(li)
    }

    const json = JSON.stringify(todoData)
    localStorage.setItem('todo', json)

    li.querySelector('.todo-complete').addEventListener('click', () => {
      el.completed = !el.completed
      render()
    })
    li.querySelector('.todo-remove').addEventListener('click', () => {
      li.remove();
      todoData.splice(todoData.indexOf(li), 1);
      localStorage.setItem('todo', json)
    })
  })

}

todoControl.addEventListener('submit', (e) => {
  e.preventDefault()

  const newTodo = {
    text: headerInput.value,
    completed: false,
  }
  if (headerInput.value.trim() != '') {
    todoData.push(newTodo)
  }

  headerInput.value = ''

  render()
})

