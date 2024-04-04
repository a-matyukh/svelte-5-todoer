<script>
import { NewTodo, TodoList } from "$lib/ui"
import { todoer } from "$lib/state"
todoer.init()
import press from "$lib/kbd"
$effect(() => document.addEventListener("keyup", e => press(e)))
</script>

<NewTodo 
    mode={todoer.mode}
    new_todo_text={todoer.new_todo_text}
    oninput={e => todoer.new_todo_text = e.target.value}
    error = {todoer.error}
/>
<TodoList
    mode={todoer.mode}
    list={todoer.todos}
    selected_index={todoer.selected_index}
/>