<template>
  <main>
    <div class="empty"></div>
    <header v-if="window <= 480">
      <MobileNav />
    </header>
    <header v-if="window > 480">
      <NavBar />
    </header>
    <div v-if="$store.state.showModal">
      <ModalPop :Title="$store.state.modalTitle" :details="$store.state.details" />
    </div>

    <router-view />
    <FooterSection />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Roboto:wght@300;400&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  /* background: #2A154C; */
  background: #7377a3;
  /* position: relative; */
}

#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

.empty {
  height: 20px;
  width: 100%;
  background: #94a1c2;
}
</style>

<script>
import NavBar from "@/components/Nav.vue";
import MobileNav from "@/components/MobileNav.vue";
import ModalPop from "@/components/Modal.vue";

import FooterSection from "@/components/Footer.vue";
export default {
  data() {
    return {
      window,
    };
  },
  mounted() {
    this.window = window.innerWidth;
  },
  components: {
    MobileNav,
    FooterSection,
    NavBar,
    ModalPop,
  },
};
</script>
