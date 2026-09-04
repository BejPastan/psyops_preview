<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    text: string,
    size?: 'title' | 'header' | 'header2' | 'content' | 'label',
    textStyle?: 'primary' | 'secondary'
  }>(),
  {
    size: 'content',
    textStyle: 'primary'
  }
)

</script>

<template>
  <span class="text" :class="`text--${size} text--${textStyle}`">
    {{ text }}
  </span>
</template>

<style scoped>
.text {
  /* ===== Local variables — define before use ===== */
  --text-color: var(--secondary-text);

  color: var(--text-color);
  line-height: 1.4;
}

.text--primary {
  color: var(--text-color);
}
.text--secondary {
  color: var(--accent-p);
}

.text--title {
  font-size: var(--text-title);
  font-weight: 600;
  text-align: center;
}

.text--header {
  font-size: var(--text-header);
  font-weight: 700;
  text-align: center;
}

.text--header2 {
  font-size: var(--text-header2);
  font-weight: 700;
  text-align: center;
}

.text--content {
  font-size: var(--text-content);
  font-weight: 400;
}

.text--label {
  font-size: var(--text-label);
  font-weight: 300;
  letter-spacing: 0.06em;
}
</style>
