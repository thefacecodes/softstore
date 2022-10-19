<template>
  <div class="product" :id="id">
    <img :src="require(`@/assets/${image}`)" alt="" />
    <div class="price">
      <h4>{{ title }}</h4>
      <h4>N{{ price }}</h4>
    </div>
    <div class="buttons">
      <button @click="addToCart">Add to Cart</button>
      <button class="favorite"><i class="fa-regular fa-heart"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  data() {
    return {
      total: 0,
    };
  },
  //     computed: {
  //     cartTotal() {
  //         const cart = this.$store.state.basket;

  //         // let total = 0
  //         // cart.reduce((amount, item) => amount+=item.price , 0)

  //         return total
  //     }
  // },
  props: {
    image: String,
    price: Number,
    title: String,
    id: Number,
  },
  // moounted() {
  //     console.log(this.image);
  // },
  methods: {
    addToCart() {
      const product = {
        id: this.id,
        name: this.title,
        price: this.price,
        image: this.image,
        quantity: 1,
      };
      // console.log(product);
      const currentBasket = [...this.$store.state.basket];
      // console.log(currentBasket);
      const there = currentBasket.find((item) => item.id === product.id);
      console.log(there);
      if (there) {
        there.quantity++;
        console.log(there);
      } else {
        const newBasket = [...this.$store.state.basket, product];
        this.$store.state.basket = newBasket;
        this.$store.state.showModal = true;
        this.$store.state.modalTitle = "Added to Cart";
        this.$store.state.details = `${product.name} has been added to the cart successsfully`;
      }

      this.$store.commit("totalAmount");

      // console.log(newBasket);
    },
  },
  // data() {
  //     return {
  //         image
  //     }
  // }
};
</script>

<style scoped>
.price {
  margin-block: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
}

.product {
  width: 360px;
  overflow: hidden;
}

.product img {
  width: 360px;
  height: 300px;
}

button {
  padding: 10px 50px;
  border: none;
  outline: none;
  font-family: Inter;
  border-radius: 5px;
  background: #65740d;
  color: white;
  cursor: pointer;
}

button.favorite {
  padding: 10px;
  background: #94a1c2;
  margin-left: 20px;
}

@media (max-width: 798px) {
  /* .product {
        width: 40vw;
    }

    .product img {
        width: 200px;
        height: 200px;
    } */
}

@media (max-width: 798px) {
  .product {
    width: 45%;
    /* height: 300px; */
    /* border: 2px solid red; */
  }

  .product img {
    width: 100%;
    height: 60%;
  }
}

@media (max-width: 480px) {
  .product {
    width: 45%;
    /* height: 300px; */
    /* border: 2px solid red; */
  }

  .product img {
    width: 100%;
    height: 60%;
  }

  button {
    padding: 10px 20px;
    font-size: 12px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  button.favorite {
    padding: 10px;
    margin-left: unset;
  }

  .price {
    flex-direction: column;
    gap: 5px;
  }

  .price h4 {
    font-size: 13px;
  }
}
</style>
