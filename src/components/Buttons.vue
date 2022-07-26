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
import PrimaryBtn from '@/components/UI/PrimaryBtn.vue';
import PseudoBtn from '@/components/UI/PseudoBtn.vue';
import TypeLinkBtn from '@/components/UI/TypeLinkBtn.vue';
import SecondaryBtn from '@/components/UI/SecondaryBtn.vue';



export default {
  name: 'Buttons',
  components: {
    PrimaryBtn,
    PseudoBtn,
    TypeLinkBtn,
    SecondaryBtn,
  }
}
</script>

<style scoped>

</style>
