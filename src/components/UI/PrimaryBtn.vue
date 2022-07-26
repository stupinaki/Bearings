<template>
    <button class="primaryBtn">
        <slot></slot>
    </button>
</template>

<script>

  export default {
    name: 'primaryBtn'
  }
</script>

<style scoped>
    .primaryBtn{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 8px;
        /* gap: 10px; */
        min-width: 220px;
        min-height: 56px;
        background: #4A53F5;
        border-radius: 8px;
        border: none;
        color: white;
    }
    .primaryBtn:hover{
        background: #3840e6;
    }
    /* .primaryBtnText{
        width: 184px;
        height: 24px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #FFFFFF;
    } */

</style>
