<!-- src/components/CounterApp.vue -->
<template>
  <div class="counter-app container">
    <div class="card mt-4">
      <div class="card-body text-center">
        <h1 class="counter">{{ counter }}</h1>
        <button @click="increment" class="btn btn-success m-2">Incrementar</button>
        <button @click="decrement" class="btn btn-danger m-2">Decrementar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CounterApp',
  computed: {
    ...mapState(['counter'])
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
};
</script>

<style scoped>
.counter-app {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.counter {
  font-size: 3em;
  color: #5a5a5a;
}

button {
  border-radius: 8px;
}

.btn-success {
  background-color: #a8e6cf;
  border: none;
}

.btn-success:hover {
  background-color: #91e5c3;
}

.btn-danger {
  background-color: #ff8b94;
  border: none;
}

.btn-danger:hover {
  background-color: #ff6f74;
}
</style>
