<script>
const {
    hotkey // string
} = $props()

import Hotkey from "./Hotkey.svelte"
</script>

<div>
    <slot></slot>
    <Hotkey>{hotkey}</Hotkey>
</div>

<style>
div {
    display: inline-block;
    padding: 10px;
    border: 3px solid blue;
}
</style>