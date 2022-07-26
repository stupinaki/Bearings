<template>
    <button class="typeLinkBtn">
        <slot></slot>
    </button>
</template>

<script>

  export default {
    name: 'typeLinkBtn'
  }
</script>

<style scoped>
    .typeLinkBtn{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-decoration-line: underline;
        /* цвет может быть #4A53F5, #EC5B55, */
        color: #4A53F5;
        border: none;
        background-color: transparent;
    }
    .typeLinkBtn:hover{
        color: #070fac;
    }
</style>
