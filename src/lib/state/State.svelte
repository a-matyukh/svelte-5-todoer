<script>
import { todoer } from "$lib/state"
import { NewTodo, TodoList } from "$lib/ui"
</script>

<h2>Store. App State.</h2>

<h3>Product features, user flows and it's app state (store) mutations (actions)</h3>
<h4>Todo-list management</h4>
<details open>
    <summary>~ create todo</summary>
    <ol>
        <li>
            <button onclick={() => todoer.change_mode("create")}>Ctrl + N</button>
             => mode = "create"
        </li>
        <li>
            <em>print</em> <input type="text" bind:value={todoer.new_todo_text}>
             => new_todo_text = "new todo"
        </li>
        <li>
            <button onclick={() => todoer.create_todo()}>Enter</button>
             => todos.create(), new_todo_text = "", mode = "select"
        </li>
        <li>
            <button onclick={() => todoer.escape()}>Escape</button> => new_todo_text = "", mode = "select"
        </li>
    </ol>
</details>
<details>
    <summary>~ edit todo</summary>
    <ol>
        <li>select todo: 
            <button onclick={() => todoer.select_todo("ArrowUp")}>↑</button>
            <button onclick={() => todoer.select_todo("ArrowDown")}>↓</button>
             or 
            <input
                type="number" min="0" max=9 value=0
                on:change={e => todoer.select_todo(+e.target.value)}>
             => select_todo(pointer)</li>
        <li>change mode: 
            <button onclick={() => todoer.change_mode("edit")}>Ctrl + E</button>  
             => mode = "edit"</li>
        <li>
            <em>print</em>
            {#if todoer.todos.length}
                <!-- <input type="text" bind:value={todoer.todos[todoer.selected_index].text}> -->
                <input type="text" bind:value={todoer.selected_todo.text}>
            {/if}
             => todos[selected_index].text</li>
        <li><button onclick={() => todoer.save_todo()}>Enter</button>
             => db.save(todos[selected_index]), mode = "select"</li>
        <li><button onclick={() => todoer.escape()}>Escape</button></li>
    </ol>
</details>
<details>
    <summary>~ delete todo</summary>
    <ol>
        <li>select todo: arrows or digits => select_todo(pointer)</li>
        <li>change mode: 
            <button onclick={() => todoer.change_mode("delete")}>Ctrl + D</button>
             => mode = "delete"</li>
        <li><button onclick={() => todoer.delete_todo()}>Enter</button>
             => todoer.delete_todo()</li>
        <li><button onclick={() => todoer.escape()}>Escape</button></li>
    </ol>
</details>

<hr>

<p>mode: {JSON.stringify(todoer.mode)}</p>
<div>
    {@render mode_selector("select")}
    {@render mode_selector("create")}
    {@render mode_selector("edit")}
    {@render mode_selector("delete")}
</div>
<p>new_todo_text: {JSON.stringify(todoer.new_todo_text)}</p>
<p>todos: {JSON.stringify(todoer.todos)}</p>
<p>selected_index: {JSON.stringify(todoer.selected_index)}</p>

<hr>



<NewTodo mode={todoer.mode} new_todo_text={todoer.new_todo_text}
    oninput={e => todoer.new_todo_text = e.target.value} />
<TodoList mode={todoer.mode} list={todoer.todos} selected_index={todoer.selected_index} />



{#snippet mode_selector(new_mode)}
    <button
        onclick={() => todoer.change_mode(new_mode)}
        style = "background: {new_mode == todoer.mode ? 'aqua' : 'white'};">
        {new_mode}
    </button>
{/snippet}