<script setup lang="ts">

withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary'
    onClick?: () => void
  }>(),
  {
    type: 'primary',
  }
)
</script>

<template>
  <button class="btn" :class="`btn--${type}`" @click="onClick">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--btn-padding);
  border: var(--brdr-thick-md) solid transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
  user-select: none;
  background-color: var(--accent-t);
}

.btn--primary {
  background: var(--primary);
  border-color: var(--accent-t);
  color: var(--secondary-text);
}

.btn--primary:hover {
  background: var(--btn-hover-p);
}

.btn--primary:active {
  background: var(--btn-press-p);
}

.btn--secondary {
  background: var(--secondary);
  border-color: var(--accent-s);
  color: var(--secondary-text);
}

.btn--secondary:hover {
  background: var(--btn-hover-s);
}

.btn--secondary:active {
  background: var(--btn-press-s);
}

.btn:focus-visible {
  outline: 2px solid var(--accent-p);
  outline-offset: 2px;
}
</style>