<script>
import Command from "./Command.svelte"
const { mode, new_todo_text, oninput, error } = $props()
let input = $state()
$effect(() => input?.focus())
</script>

<div>
    {#if !error}
        {#if mode !== "create"}
            <Command hotkey="Ctrl + N">New todo</Command>
        {:else}
            <input type="text"
                bind:this={input}
                placeholder="Enter text for new todo"
                value={new_todo_text}
                {oninput}
            >
            <Command hotkey="Escape">Cancel</Command>
            {#if new_todo_text !== ""}
                <Command hotkey="Enter">Save</Command>
            {/if}
        {/if}
    {:else}
        <Command hotkey="Enter">
            <p>You reach maximum todos length!</p>
            <p>Delete some todos</p>
        </Command>
    {/if}
</div>

<style>
div {
    padding: 10px;
    background-color: #eee;
}
</style>