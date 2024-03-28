<script>
import { app } from "$lib/state"
const {
    i, todo
} = $props()
const selected = $derived(app.selected_todo_index === i)

let input = $state()
$effect(() => {
    input?.focus()
    app.edited_todo_text = todo
})
</script>

<p class:selected>{i + 1}.
    {#if app.mode == "edit" && selected}
        <input bind:this={input} type="text" value={todo} on:input={(e) => app.edited_todo_text = input.value}>
    {:else if app.mode == "delete" && selected}
        Delete this todo? {todo}
    {:else}
        {todo}
    {/if}
</p>

<style>
.selected {
    background-color: yellow;
}
</style>