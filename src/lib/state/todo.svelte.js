export default class Todo {
	
	text = $state("")
	done = $state(false)

	constructor(initor) {
		if (typeof initor == "string") {			
			this.id = crypto.randomUUID()
			this.text = initor
		} else {
			this.id = initor.id
			this.text = initor.text
			this.done = initor.done
		}
	}
	get model() {
		return {
			id: this.id,
			text: this.text,
			done: this.done,
		}
	}

	mark() {
		this.done = !this.done
		console.log(this.done)
	}

}