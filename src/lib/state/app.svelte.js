import * as db from '../db'

export default class App {

	mode = $state("view") // view/select | create | edit | delete
	change_mode(new_mode) {
		if (this.mode !== new_mode) {
			this.mode = new_mode
			console.log(new_mode)
		}
	}

	show_error = $state("")

	screen_state = $derived.by(() => {
		switch (this.todos.length) {
			case 0:
				return "empty"
			case 1:
				return "one todo exist"
			default:
				return "some todos exist"
		}
		
	})



	constructor() {
		setTimeout(async () => {
			// this.count = await db.getCounter()
		}, 1000)
		// (async () => {})()
	}

	// userflows, actions, state mutations

	// Todos.List
	MAX_TODOS_LENGTH = 4
	new_todo_text = $state("")
	edited_todo_text = $state("")

	todos = $state([])
	selected_todo_index = $state()
	// todos = $state(["1111", "22222", "33"])
	// selected_todo_index = $state(0)
	// selected_todo = $derived(this.todos[this.selected_todo_index])

	// create
	create_new_todo() {
		if (this.todos.length < this.MAX_TODOS_LENGTH) {
			this.mode = "create"
			if (this.todos.length === 0) this.selected_todo_index = 0
			console.log("new todo")
		} else {
			this.show_error = "LIMIT"
			return
		}
	}
	save_todo() {
		if (this.mode === "create") {
			//todos.add
			if (this.new_todo_text === "") return
			this.todos.push(this.new_todo_text)
			this.mode = "view"
			this.new_todo_text = ""
			console.log("save new todo / finish editing")
		} else if (this.mode === "view") {
			if (this.todos.length === 0) return
			this.mode = "edit"
			console.log("show todo for editing")
		} else if (this.mode === "edit") {
			this.todos[this.selected_todo_index] = this.edited_todo_text
			this.mode = "view"
			console.log("save edited todo:", this.edited_todo_text)
		} else if (this.mode === "delete") {
			this.todos.splice(this.selected_todo_index, 1)
			if (this.selected_todo_index != 0) {
				this.leaf("up")
			}
			console.log(this.selected_todo_index)
			this.mode = "view"
		}
	}
	// select
	select_todo(pointer) {
		if (this.todos.length < 2) return
		if (["up", "down"].includes(pointer)) {
			this.leaf(pointer)
		} else {
			if (+pointer > this.todos.length || +pointer - 1 === this.selected_todo_index) return
			this.selected_todo_index = +pointer - 1
			console.log(`select ${pointer}`)
		}

	}
	leaf(direction) {
		const size = this.todos.length - 1
		switch (direction) {
			case "up":
				this.selected_todo_index == 0 ? this.selected_todo_index = size : this.selected_todo_index--
				break
			case "down":
				this.selected_todo_index < size ? this.selected_todo_index++ : this.selected_todo_index = 0
				break
		}		
		console.log(`select ${direction}`)
	}
	delete_todo() {
		if (this.todos.length === 0) return
		if (this.mode === "view") {
			this.mode = "delete"
			console.log("delete todo?")
		}
	}

}