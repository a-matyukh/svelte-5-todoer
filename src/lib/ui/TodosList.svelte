<script>
import { app } from "$lib/state"
import Todo from "./Todo.svelte"
</script>

{#each app.todos as todo, i}
    <Todo {i} {todo} />
{:else}
    nothing
{/each}