<script setup lang="ts">
import Text from './Text.vue';


</script>

<template>
    <footer>
        <Text text="Created by BejPastan. All rights reserved." :size="'label'" :textStyle="'secondary'"/>
    </footer>
</template>

<style scoped>
footer {
  width: 100%;
  text-align: center;
  background-color: var(--primary-bg);
  color: var(--primary-text);
}
</style>