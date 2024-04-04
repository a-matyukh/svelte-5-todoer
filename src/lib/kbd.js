import { todoer } from "./state"

export default function press(e) {
    
    if (e.key == "n" && e.ctrlKey) todoer.change_mode("create")
    if (e.key == "e" && e.ctrlKey) todoer.change_mode("edit")
    if (e.key == "d" && e.ctrlKey) todoer.change_mode("delete")
    if (e.key == "m" && e.ctrlKey) todoer.mark_todo()

    if (e.key == "Enter") {
        if (todoer.mode == "create") todoer.create_todo()
        if (todoer.error) todoer.clean_error()
        if (todoer.mode == "edit") todoer.save_todo()
        if (todoer.mode == "delete") todoer.delete_todo()
    }
    if (e.key == "Escape") {
        if (todoer.mode != "select") todoer.escape()
    }

    if (e.key == "ArrowDown") todoer.select_todo("ArrowDown")
    if (e.key == "ArrowUp") todoer.select_todo("ArrowUp")
    if (e.key.match(/[1-9]/) && todoer.mode == "select") {
        todoer.select_todo(+e.key-1)
    }
}