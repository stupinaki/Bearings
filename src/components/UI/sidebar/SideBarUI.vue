<template>
  <div
    v-if="isMenuOpen"
    :class="styled.opacityBlock"
    @click="closeMenu"
  />
  <Transition
    name="slide"
    :duration="duration"
  >
    <div
      v-if="isMenuOpen"
      :class="styled.sidebarPanel"
    >
      <slot />
    </div>
  </Transition>
</template>

<script>
import styled from "./sidebarUI.module.css";

export default {
  name: "SideBarUI",
  props: {
    duration: {
      type: String,
      required: false,
      default: '1000',
    },
    isMenuOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  emits: ['closeMenu'],
  data() {
    return {
      styled,
    }
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu');
    }
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  opacity: 1;
  transition: all 0.4s ease;
  transform: translateX(0%);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transition: all 400ms ease-in;
  transform: translateX(100%);
}
</style>