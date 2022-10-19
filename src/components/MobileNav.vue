<template>
  <div class="nav">
    <div class="top">
      <img
        src="../assets/icon-hamburger.svg"
        @click="showMenu"
        class="hamburger"
        alt=""
      />
      <router-link to="/"><h1>Soft</h1></router-link>

      <div class="icons">
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-heart"></i>
        <router-link to="/cart"
          ><i class="fa-solid fa-cart-shopping"
            ><span class="cartNo">{{ this.$store.state.basket.length }}</span></i
          ></router-link
        >
      </div>
    </div>
    <ul>
      <li><a href="#">Women</a></li>
      <li><a href="#">Curve Plus</a></li>
      <li><a href="#">Kids</a></li>
      <li><a href="#">Men</a></li>

      <!-- <li><a href="#"></a></li> -->
    </ul>
    <div class="menu">
      <div class="subnav">
        <a href="#">New in</a>
        <a href="#">Sale</a>
        <a href="#">Clothings</a>
        <a href="#">Tops</a>
        <a href="#">Dresses</a>
        <a href="#">Jeans</a>
        <a href="#">Brands</a>
        <a href="#">Explore</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    showMenu() {
      const Toggle = this.$el.querySelector(".menu").classList;
      Toggle.toggle("show");
      console.log(Toggle);
    },
  },
};
</script>

<style scoped>
.nav {
  padding: 10px 20px;
  text-transform: uppercase;
  /* position: fixed;
    width: 100%;
    background: #7377A3; */
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: row-reverse; */
}

h1 {
  text-transform: uppercase;
  color: #1e1173;
  margin-left: 20px;
}

.menu {
  background: rgba(0, 0, 0, 0.5);
  /* padding: 20px; */
  text-align: center;
  /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

  width: 0;
  height: 0;
  overflow: hidden;
  /* z-index: 1000000; */
  transition: 0.5s ease-in;
}

ul {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-block: 2px solid white;
  margin-top: 10px;
}

ul li {
  display: inline;
  padding: 10px;
}

.show {
  width: 100%;
  position: relative;
  height: 50vh;
  padding: 20px;
}

.subnav a {
  color: white;
  display: block;
  padding: 10px 20px;
}

a {
  text-decoration: none;
}

/* a, */
/* ul li {
  
  text-decoration: none;
  list-style: none;
} */

/* ul li:hover {
  background: #7377a3;
} */

ul li a {
  color: white;
}

.nav .icons {
  background: #7377a3;
  /* padding: 10px 20px; */
  /* margin-block: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
}
.nav .icons a {
  color: white;
  padding: unset;
  margin: unset;
  position: relative;
}

.cartNo {
  font-size: 10px;
  background: red;
  padding: 5px;
  border-radius: 50%;
  position: absolute;
  top: -50%;
  left: 70%;
}

.icons i {
  margin-inline: 10px;
}

a:hover {
  background: #7377a3;
  color: white;
}

select {
  padding: 10px;
  background: transparent;
  color: white;
  border: none;
  font-family: Inter;
  outline: none;
}
</style>
