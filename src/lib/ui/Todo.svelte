<script>
const {
    i, todo, selected, editing, deleting
} = $props()

import Hotkey from "./Hotkey.svelte"
import Command from "./Command.svelte"

let input = $state()
$effect(() => input?.focus())
</script>

<div class:selected class:editing class:deleting>
    {#if !selected && !deleting}
        <Hotkey>{i}</Hotkey>
    {/if}

    {#if editing}
        <input bind:this={input} type="text" bind:value={todo.text}>
    {:else}
        {todo.text}
    {/if}
    
    - {todo.done}
    {#if deleting}
        <strong>Delete this todo?</strong>
        <Command hotkey="Escape">Cancel</Command>
        <Command hotkey="Enter">Save</Command>
    {/if}
</div>

<style>
div {
    padding: 5px;
    background-color: #eee;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.selected {
    padding: 15px;
    outline: 3px solid blueviolet;
}
.editing {
    outline: 3px solid orange;
}
.deleting {
    padding-left: 15px;
    outline: 3px solid orangered;
}
</style>