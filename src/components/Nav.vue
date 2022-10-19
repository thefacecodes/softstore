<template>
    <div class="nav">
          <nav>
    <router-link to="/"><h1>Soft</h1></router-link> 
    <ul>
        <li><a href="#">Women</a></li>
        <li><a href="#">Curve Plus</a></li>
        <li><a href="#">Kids</a></li>
        <li><a href="#">Men</a></li>
       
        <!-- <li><a href="#"></a></li> -->
        <select name="" id="">
            <option value="naira">NGN</option>
        </select>
    </ul>
    <div>
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-heart"></i>
        <router-link to="/cart"><i class="fa-solid cart fa-cart-shopping"><span class="cartNo">{{this.$store.state.basket.length}}</span></i></router-link> 
    </div>
  </nav>
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


</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 100px;
}

nav h1 {
    text-transform: uppercase;
    color: #1E1173;
    font-size: 36px;
}

nav ul li {
    display: inline;
    padding: 0 10px;
}

a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
}

i {
    margin-inline: 10px;
}

nav ul select {
    background: transparent;
    color: white;
    border: none;
    outline: none;
    /* height: 100%; */
    font-size: 15px;
    font-family: Inter
}

.subnav {
    display: flex;
    justify-content: space-between;
    padding: 10px 120px;
    font-weight: 600;
    border: 2px solid white;
    font-size: 13px;
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

.cart {
    position: relative;
}
</style>