<template>
    <button class="secondaryBtn">
        <slot name="imgLeft"></slot>
        <slot name="text"></slot>
        <slot name="imgRight"></slot>
    </button>
</template>

<script>

  export default {
    name: 'secondaryBtn'
  }
</script>

<style scoped>
    .secondaryBtn{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 8px;
        /* gap: 10px; */

        min-width: 56px;
        min-height: 56px;

        background: #F3F5FF;
        border-radius: 8px;
        border: none;

        /* flex: none;
        order: 3;
        flex-grow: 0; */
    }
    .secondaryBtn:hover{
        background: #d8ddf9;
    }
</style>
