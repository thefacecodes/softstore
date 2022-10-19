<template>
  <div class="modal">
    <h3>{{ Title }}</h3>
    <p>{{ details }}</p>
    <!-- <button @click="$store.state.showModal = false">Dismiss</button> -->
  </div>
</template>

<script>
export default {
  name: "ModalPop",
  props: {
    Title: String,
    details: String,
  },
  mounted() {
    console.log(this.$store.state.showMenu);
    setTimeout(() => (this.$store.state.showModal = false), 2000);
    console.log(this.$store.state.showMenu);
  },
};
</script>

<style scoped>
.modal {
  background: limegreen;
  color: white;
  position: fixed;
  bottom: 10px;
  max-width: 70%;
  right: 10px;
  padding: 10px 15px;
  font-family: Inter;
  border-radius: 10px;
}

.modal::after {
  content: "";
  width: 15px;
  height: 15px;
  position: absolute;
  bottom: 10px;
  right: -4px;
  background: limegreen;
  transform: rotate(45deg);
  /* overflow: hidden; */
}

p {
  font-size: 12px;
  margin-block: 10px;
}

h3 {
  font-size: 15px;
}

button {
  padding: 5px 10px;
  border: none;
  outline: none;
  background: #a30000;
  border-radius: 5px;
  color: white;
}
</style>
