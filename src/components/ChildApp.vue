<!-- src/components/ChildApp.vue -->
<template>
  <div class="child-app">
    <div class="input-group mb-3">
      <input v-model="inputText" type="text" class="form-control" placeholder="Escribe algo" />
      <button @click="sendText" class="btn btn-primary">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildApp',
  data() {
    return {
      inputText: ''
    };
  },
  methods: {
    sendText() {
      this.$emit('sendText', this.inputText);
    }
  }
};
</script>

<style scoped>
.child-app .input-group {
  max-width: 400px;
  margin: auto;
}

.child-app input {
  border-radius: 8px;
}

.child-app button {
  border-radius: 8px;
  background-color: #ff9aa2;
  border: none;
  color: white;
}

.child-app button:hover {
  background-color: #ff6f61;
}
</style>
