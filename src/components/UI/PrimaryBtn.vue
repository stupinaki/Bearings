<template>
    <button class="primaryBtn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'primary-btn'
    }
</script>

<style scoped>
.primaryBtn  {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 8px;
    /* gap: 10px; */
    /* width: 220px; */
    /* height: 56px; */
    background: #4A53F5;
    border-radius: 8px;
}
</style>
