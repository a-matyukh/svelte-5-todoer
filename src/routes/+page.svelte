<script>
import press from "$lib/kbd"
// effect?
import { onMount } from "svelte"
onMount(() => document.addEventListener("keyup", e => press(e.key)))

import NewTodo from "$lib/ui/NewTodo.svelte"
import TodosList from "$lib/ui/TodosList.svelte"

import { app } from "$lib/state"
</script>

<h3>State</h3>
<p>mode: {app.mode}</p>
<p>screen_state: {app.screen_state}</p>
<p>edited_todo_text: {app.edited_todo_text}</p>
<hr>

<TodosList />
<NewTodo />