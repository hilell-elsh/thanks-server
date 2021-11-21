

export async function getAllTodos() {
    const response = await fetch("http://localhost:5114/api/todos",
        {
            method: "GET"
        })
    return await response.json()
}

export async function deleteTodo(todoId) {
    const response = await fetch("http://localhost:5114/api/todos/" + todoId,
        {
            method: "DELETE"
        })
    return await response.json()
}

export async function addTodo(newTodo) {
    const response = await fetch("http://localhost:5114/api/todos",
        {
            method: "POST",
            body: newTodo
        })
    return await response.json()
}

export async function updateTodo(todoId, updateTodo) {
    const response = await fetch("http://localhost:5114/api/todos" + todoId,
        {
            method: "PUT",
            body: updateTodo
        })
    return await response.json()
}