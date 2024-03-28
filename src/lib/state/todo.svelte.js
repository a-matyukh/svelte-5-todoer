import * as db from '../db'

class Todo {

	// description = $state()
	description = ""
	done = $state(false)

	constructor(description) {
		this.id = crypto.randomUUID()
		this.description = description
	}

	mark() {
		this.done = !this.done
		console.log(this.done)
	}

}

export let todo = $state(new Todo())