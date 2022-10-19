<template>
  <div class="shop">
    <div class="shop-top">
      <h4>Shop List</h4>

      <div class="filter">
        <div>
          <img src="../assets/Vector.png" alt="" />
          <h5>Sort</h5>
        </div>
        <div>
          <img src="../assets/filter.png" alt="" />
          <h5>Filter</h5>
        </div>
      </div>
    </div>
    <div class="products">
      <ProductPage
        id="1"
        image="alexandra-dementyeva-JGYL6LmIq3Q-unsplash.png"
        title="Smart Suit"
        price="20000"
      />
      <ProductPage id="2" image="Rectangle45.png" title="Yellow Jumpsuit" price="16000" />
      <ProductPage
        id="3"
        image="Rectangle46.png"
        title="Men Brown Jacket"
        price="15000"
      />
      <ProductPage id="4" image="tamara.png" title="Flair Gown" price="10000" />
      <ProductPage id="5" image="Rectangle47.png" title="Puma Jumpsuit" price="5000" />
      <ProductPage id="6" image="Rectangle48.png" title="Brown Shirt" price="7000" />
      <ProductPage id="7" image="Rectangle49b.png" title="White Crop Top" price="5000" />
      <ProductPage id="8" image="Rectangle50.png" title="Short Gown" price="10000" />
      <ProductPage id="9" image="Rectangle51.png" title="Fashion Jean" price="10000" />
      <ProductPage id="10" image="Rectangle52.png" title="Men Suit" price="30000" />
      <ProductPage id="11" image="Rectangle53b.png" title="Leather Gown" price="15000" />
      <ProductPage id="12" image="Rectangle54.png" title="Smart Wear" price="8000" />
    </div>
    <div class="pagination">
      <button>&#60;</button>
      <button>1</button>
      <button class="active">2</button>
      <button>3</button>
      <button>4</button>

      <button>&#62;</button>
    </div>
  </div>
</template>

<script>
import ProductPage from "./Product.vue";
export default {
  name: "ShopLIst",
  components: {
    ProductPage,
  },
};
</script>

<style scoped>
.shop {
  padding: 30px 100px;
}

.shop-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #81839e;
}

.filter {
  display: flex;
  align-items: center;
  gap: 30px;
}

.filter img {
  height: 20px;
}

.products {
  padding-block: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.pagination {
  text-align: center;
  margin-top: 25px;
}

.pagination button {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-inline: 5px;
  border: none;
  outline: none;
  font-family: Inter;
}

button.active {
  background: #1e1173;
  color: white;
}

@media (max-width: 798px) {
  .shop {
    padding: 20px 30px;
  }
}

@media (max-width: 480px) {
  .shop {
    padding: 20px;
  }

  .filter img {
    height: 15px;
  }

  .filter h6 {
    font-size: 8px;
  }
}
</style>
