import { app } from "./state"

const hotkeys = {

    // ToDo
    N: () => app.create_new_todo(),
    "Enter": () => app.save_todo(),
    "Escape": () => app.change_mode("view"),

    // Select
    "digit": (i) => app.select_todo(i),
    "ArrowUp": () => app.select_todo("up"),
    "ArrowDown": () => app.select_todo("down"),

    // E: () => console.log("edit todo"),
    // M: () => console.log("mark todo"),
    // D: () => console.log("delete todo"),
    "Backspace": () => app.delete_todo(),

}

export default function press(key) {
    // console.log(key)
    // if (key !== "Enter") {
        if (hotkeys[key]) hotkeys[key]()
    // } else {
        // if (app.mode !== "view") hotkeys["Enter"]()
        // hotkeys["Enter"]()
    // }

    if (key.match(/[1-9]/)) {
        if (app.mode === "view") hotkeys["digit"](key)
    }
}