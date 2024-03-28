<script>
import { app } from "$lib/state"

let input = $state()
$effect(() => input?.focus())
</script>

{#if app.mode === "create"}
    <hr>
    <h3>New todo</h3>
    <input bind:this={input} type="text" bind:value={app.new_todo_text}>
{/if}
{#if app.show_error === "LIMIT"}
    <hr>
    <h3>LIMIT: restart or delete any todo</h3>
{/if}