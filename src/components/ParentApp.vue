<!-- src/components/ParentApp.vue -->
<template>
  <div class="parent-app container">
    <div class="card mt-4">
      <div class="card-body">
        <ChildApp @sendText="receiveText" />
        <p class="mt-3 message">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ChildApp from './ChildApp.vue';

export default {
  name: 'ParentApp',
  components: { ChildApp },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    receiveText(text) {
      this.message = text;
    }
  }
};
</script>

<style scoped>
.parent-app {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.message {
  color: #5a5a5a;
  font-size: 1.2em;
}
</style>
