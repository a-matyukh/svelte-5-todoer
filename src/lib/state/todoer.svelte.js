import * as db from '../db'
import Todo from "./todo.svelte"

export default class Todoer {
    

    new_todo_text = $state("")
    mode = $state("select") // Mode: select | create | edit | delete
    change_mode(mode) {
        if (mode === "create" && this.todos.length >= this.MAX_TODOS) {
            this.error = "LIMIT"
        } else {
            this.mode = mode
        }
    }
    escape() {
        this.new_todo_text = ""
        this.mode = "select"
    }
    error = $state(null)
    clean_error() {
        this.error = null
    }

    
    selected_index = $state(null)
    selected_todo = $derived(this.todos[this.selected_index])
    select_todo(pointer) {
        if (this.todos.length <= 1) return
        if (pointer === "ArrowUp") {
            this.leaf("up")
        } else if (pointer === "ArrowDown") {
            this.leaf("down")
        } else if (typeof pointer === "number") {
            if (this.todos[pointer]) {
                this.selected_index = pointer
                console.log("select_todo", pointer)
            }
        }
    }
    leaf(direction) {
		const size = this.todos.length - 1
		switch (direction) {
			case "up":
				this.selected_index == 0 ? this.selected_index = size : this.selected_index--
				break
			case "down":
				this.selected_index < size ? this.selected_index++ : this.selected_index = 0
				break
		}		
	}

    todos = $state([])
    MAX_TODOS = 9
    async init() {
        this.todos = await db.getTodos()
        if (this.todos.length > 0) this.selected_index = 0
	}
    create_todo() {
        const new_todo = new Todo(this.new_todo_text)
        this.todos.push(new_todo)
        db.createTodo(new_todo.model)
        if (!this.selected_index) this.selected_index = 0
        this.escape()
    }
    save_todo() {
        db.saveTodo(this.selected_todo.model)
        this.change_mode("select")
    }
    mark_todo() {
        this.selected_todo.mark()
        db.saveTodo(this.selected_todo.model)
    }
    delete_todo() {
        db.deleteTodo(this.selected_todo.id)
        this.todos.splice(this.selected_index, 1)
        if (this.todos.length === 0) {
            this.selected_index = null
        } else {
            this.leaf("up")
        }
        this.change_mode("select")
    }

}