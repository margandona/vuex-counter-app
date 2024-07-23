<!-- src/views/HomeView.vue -->
<template>
  <div class="home-view container">
    <h1 class="text-center mt-4">Home Page</h1>
    <CounterApp />
    <ParentApp />
  </div>
</template>

<script>
import CounterApp from '@/components/CounterApp.vue';
import ParentApp from '@/components/ParentApp.vue';

export default {
  name: 'HomeView',
  components: {
    CounterApp,
    ParentApp
  }
};
</script>

<style scoped>
.home-view {
  background-color: #f1f1f1;
  padding: 40px;
  border-radius: 8px;
}

h1 {
  color: #5a5a5a;
  font-size: 2.5em;
}
</style>
