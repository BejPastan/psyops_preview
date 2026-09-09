<script setup lang="ts">
import Btn from '../components/Btn.vue';
import Text from '../components/Text.vue';
import router from '../router';



</script>

<template>
    <div class="content">
        <div class="content-container">
            <Btn :type="'primary'" :onClick="() => { router.push('/') }">
                <Text text="Wróć do strony głównej" :textStyle="'secondary'"/>
            </Btn>
        </div>
    </div>
</template>

<style>
.header {
  height: 110dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
}
.content-container{
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>