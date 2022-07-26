<template>

    <PrimaryBtn>
        Primary
    </PrimaryBtn>
    <PseudoBtn>
        Pseudo
    </PseudoBtn>
    <TypeLinkBtn>
        TypeLink
    </TypeLinkBtn>
    <SecondaryBtn v-slot:text>  
        если у нас есть текст
    </SecondaryBtn>
        

</template>

<script>

export default {
  name: 'Buttons',
}
</script>

<style scoped>

</style>
