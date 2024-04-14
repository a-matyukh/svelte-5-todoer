<script>
import { Hotkey, Command, NewTodo, Todo, TodoList } from "$lib/ui"
</script>

<h2>Storyboard</h2>
<p>Storybook. UI. Components. Views. Карта-раскадровка компонентов. Дизайн-система.</p>
<hr>
<details>
    <summary>Hotkey</summary>
    <div>
        <Hotkey>Shift + N</Hotkey>
        <Hotkey>Ctrl + Y</Hotkey>
    </div>
</details>
<details>
    <summary>Command</summary>
    <div>
        <Command hotkey="Ctrl + 1">Make something</Command>
        <Command hotkey="Ctrl + 2">Say anything</Command>
    </div>
</details>
<details>
    <summary>NewTodo</summary>
    <div>
        <NewTodo mode="select" new_todo_text="" />
        <NewTodo mode="create" new_todo_text="" />
        <NewTodo mode="create" new_todo_text="привет" />
    </div>
</details>
<details>
    <summary>Todo</summary>
    <div>
        <Todo i=1 todo="todo.text" />
        <Todo i=1 todo="todo.text" selected />
        <Todo i=1 todo="todo.text" editing />
        </div>
</details>
<details>
    <summary>TodoList</summary>
    <div>
        <TodoList mode="select" list={[]} selected_index={null} />
        <TodoList mode="select" list={["todo.text"]} selected_index={0} />
        <TodoList mode="select" list={["todo.text", "todo.text", "todo.text", "todo.text"]} selected_index={2} />
    </div>
</details>


<style>
details div {
    padding: 10px 15px;
}
:global(details > div > *) {
    margin-bottom: 10px;
}
</style>