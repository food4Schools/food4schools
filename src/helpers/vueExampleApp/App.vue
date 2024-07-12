<template>
  <Title />
</template>

<script lang="ts">
import Title from './components/Title.vue';
import logSomething from './helpers/logSomething';

export default {
  components: {
    Title,
  },
  mounted() {
    logSomething();
  },
};
</script>
