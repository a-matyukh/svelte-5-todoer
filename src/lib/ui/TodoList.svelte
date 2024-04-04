<script>
const { mode, list, selected_index } = $props()
import Todo from "./Todo.svelte"
</script>

<div>
    {#each list as todo, i}
        <Todo
            i={i + 1} todo={list[i]}
            selected={i === selected_index}
            editing={i === selected_index && mode === "edit"}
            deleting={i === selected_index && mode === "delete"}
        />
    {:else}
        nothing
    {/each}
</div>

<style>
div {
    border: 3px solid gray;
    margin-bottom: 20px;
}
</style>