import localforage from "localforage"
import Todo from "../state/todo.svelte"

export async function getTodos() {
    let arr = []
    try {
        await localforage.iterate((todo) => {
            arr.push(new Todo(todo))
        })
    } catch (error) {
        console.log(error)
    }
    return arr
}

export async function createTodo(new_todo) {
    console.log(new_todo)
    localforage.setItem(new_todo.id, new_todo)
    console.log("createTodo!")
}

export async function saveTodo(todo) {
    localforage.setItem(todo.id, todo)
    console.log("saveTodo!")
}

export function deleteTodo(id) {
    localforage.removeItem(id)
    console.log("deleteTodo!")
}