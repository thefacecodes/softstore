<template>
  <div class="cart">
    <h2 v-if="this.$store.state.basket.length === 0">Cart is empty</h2>
    <h2 v-if="this.$store.state.basket.length > 0">
      Cart Summary ({{ this.$store.state.basket.length }})
    </h2>

    <div v-for="item in this.$store.state.basket" :key="item.id">
      <div class="cart-item">
        <img :src="require(`@/assets/${item.image}`)" alt="" />
        <div class="cart-details">
          <h3>{{ item.name }}</h3>
          <h4>N {{ item.price }}</h4>

          <button class="favorite">
            <i class="fa-solid fa-heart"></i> Add to Wishlist
          </button>
          <div class="addNsubstract">
            <button @click="reduceQuantity(item)">-</button>
            <button>{{ item.quantity }}</button>
            <button @click="increaseQuantity(item)">+</button>
          </div>
          <button class="remove" @click="removeItem(item)">Remove Item</button>
        </div>
      </div>
      <hr />
    </div>
    <div class="checkout" v-if="this.$store.state.basket.length > 0">
      <router-link to="/checkout">Checkout (N{{ $store.state.totalAmount }})</router-link>
    </div>

    <div class="youMayLike">
      <h2>You may also like</h2>
      <div class="more">
        <ProductPage
          id="3"
          image="Rectangle46.png"
          title="Men Brown Jacket"
          price="15000"
        />
        <ProductPage id="4" image="tamara.png" title="Flair Gown" price="10000" />
        <ProductPage id="5" image="Rectangle47.png" title="Puma Jumpsuit" price="5000" />
        <ProductPage id="6" image="Rectangle48.png" title="Brown Shirt" price="7000" />
        <ProductPage
          id="7"
          image="Rectangle49b.png"
          title="White Crop Top"
          price="5000"
        />
        <ProductPage id="8" image="Rectangle50.png" title="Short Gown" price="10000" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductPage from "../components/Product.vue";
export default {
  name: "CartPage",

  components: {
    ProductPage,
  },
  methods: {
    // totalAmount(){
    //     const prices = this.$store.state.basket.map(item => item.price * item.quantity)
    //     // console.log(prices);

    //    const total = prices.reduce((amount,price) => amount+parseInt(price), 0)

    // //    console.log(total);
    //     return total
    // },
    increaseQuantity(item) {
      const id = item.id;
      console.log(id);
      this.$store.state.basket.map((product) =>
        product.id === id ? product.quantity++ : ""
      );
      this.$store.commit("totalAmount");
    },
    reduceQuantity(item) {
      const id = item.id;
      console.log(id);
      this.$store.state.basket.map((product) =>
        product.id === id && product.quantity >= 2 ? product.quantity-- : ""
      );
      this.$store.commit("totalAmount");
    },
    removeItem(item) {
      console.log(item);
      const newBasket = this.$store.state.basket.filter(
        (product) => product.id !== item.id
      );
      this.$store.state.basket = newBasket;
      console.log(newBasket);
      this.$store.commit("totalAmount");
      this.$store.state.showModal = true;
      this.$store.state.modalTitle = "Removed from Cart";
      this.$store.state.details = `${item.name} has been removed from your cart successsfully`;
      this.$store.state.bg = "#a30000";
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 50px 100px;
}

h2 {
  margin-bottom: 30px;
}

.cart-item {
  display: flex;
  height: 250px;
  margin-bottom: 10px;
}

hr {
  color: white;
  margin-bottom: 10px;
}

.cart-details {
  padding: 20px;
}

.cart-details button {
  padding: 10px 30px;
  border: none;
  outline: none;
  color: white;
  background: #94a1c2;
  /* border-radius: 5px; */
  font-family: Inter;
}

.addNsubstract button:nth-child(1) {
  border-radius: 15px 0 0 15px;
  padding: 5px 20px;
}

.addNsubstract button:nth-child(3) {
  border-radius: 0 15px 15px 0;
  padding: 5px 20px;
}

.addNsubstract button:nth-child(2) {
  border-inline: 2px solid white;
  padding: 5px 20px;
}

h3,
h4 {
  padding-bottom: 10px;
}

h3 {
  font-size: 20px;
}

h4 {
  font-size: 15px;
}

.addNsubstract {
  display: flex;
  /* gap: 20px; */
  margin-block: 10px;
}

.addNsubstract button {
  padding: 0 30px;
  font-weight: 600;
  font-size: 20px;
}

button.remove {
  background: #a30000;
  color: white;
  border-radius: 7px;
}

.youMayLike {
  padding-block: 30px;
}

button.favorite {
  border: 2px solid #1e1173;
  color: #1e1173;
  background: transparent;
  font-weight: 600;
  border-radius: 7px;
}

.more {
  padding-block: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.checkout {
  text-align: center;
  margin-block: 20px;
}

.checkout a {
  padding: 10px 30px;
  color: white;
  background: #1e1173;
  text-transform: uppercase;
  font-family: Inter;
  font-weight: 600;
  border-radius: 5px;

  border: none;
  outline: none;
  text-decoration: none;
}

.youMayLike {
  background: #81839e;
}

@media (max-width: 480px) {
  .cart {
    padding: 20px;
  }

  h2 {
    font-size: 18px;
  }

  .cart-item {
    height: 200px;
    width: 100%;
  }

  .cart-item img,
  .cart-item div {
    width: 50%;
  }

  .cart-details {
    padding: 10px;
  }

  .cart-details button {
    padding: 10px;
  }

  .youMayLike h2 {
    margin-bottom: 0;
  }

  h3,
  h4 {
    padding-bottom: 5px;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    font-size: 13px;
  }

  .addNsubstract button {
    padding: 0 15px;
  }

  .addNsubstract button:nth-child(1) {
    border-radius: 15px 0 0 15px;
    padding: 5px 15px;
  }

  .addNsubstract button:nth-child(3) {
    border-radius: 0 15px 15px 0;
    padding: 5px 15px;
  }

  .addNsubstract button:nth-child(2) {
    border-inline: 2px solid white;
    padding: 5px 15px;
  }
}
</style>
