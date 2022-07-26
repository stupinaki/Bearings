<template>
    <button 
        :class="class"
        :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>

<script>
import styled from '@/components/UI/button/button.css';

  export default {
    name: 'Button',
    data(){
        return {
            styled,
        }
    },
    props: {
        size: {
            type: String,
            default: 'm',
            validator(size){
                return ['s', 'm', 'l'].includes(size);
            }    
        },
        type: {
            type: String,
            require: true,
            validator(type){
                return ['primary', 'secondary', 'pseudo', 'typeLink'].includes(type);
            },
        },
        disabled: Boolean,
    },
    computed: {
        class() {

            const { size, type, disabled} = this.$props;
            // this.$data.styled.btn
            const classes = ['btn'];
            classes.push(`btn-${size}`);
            classes.push(`btn-${type}`);

            if(disabled){
                classes.push(`btn-disabled`);
            }
            return classes.join(' ');
        },
    }
  }
</script>


