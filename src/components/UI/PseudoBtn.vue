<template>
    <button class="pseudoBtn">
        <slot></slot>
    </button>
</template>

<script>

  export default {
    name: 'PseudoBtn'
  }
</script>

<style scoped>
    .pseudoBtn{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 8px;
        /* gap: 10px; */
        border-radius: 8px;
        border: none;
        background: transparent;
        min-width: 220px;
        min-height: 56px;
    }
    .pseudoBtn:hover{
        background: var(--pseudo-hover-color);
    }
</style>
