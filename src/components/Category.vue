<template>
  <div class="category">
    <h3>Shop by Category</h3>
    <div class="category-list">
      <div>
        <img src="../assets/Rectangle32.png" alt="" />
        <h4>Crop Tops</h4>
      </div>
      <div>
        <img src="../assets/Rectangle33.png" alt="" />
        <h4>Tops</h4>
      </div>
      <div>
        <img src="../assets/Rectangle42.png" alt="" />
        <h4>Body Suits</h4>
      </div>
      <div>
        <img src="../assets/Rectangle35.png" alt="" />
        <h4>Denim</h4>
      </div>
      <div>
        <img src="../assets/Rectangle36.png" alt="" />
        <h4>Dresses</h4>
      </div>
      <div>
        <img src="../assets/Rectangle37.png" alt="" />
        <h4>Trouser</h4>
      </div>
      <div>
        <img src="../assets/Rectangle38.png" alt="" />
        <h4>Sweat shirt</h4>
      </div>
      <div>
        <img src="../assets/Rectangle39.png" alt="" />
        <h4>Hoodie</h4>
      </div>
      <div>
        <img src="../assets/Rectangle40.png" alt="" />
        <h4>Shirts</h4>
      </div>
      <div>
        <img src="../assets/Rectangle43.png" alt="" />
        <h4>Skirts</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySection",
};
</script>

<style scoped>
.category {
  padding: 30px 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.category-list {
  padding-block: 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 100% */
}

.category-list div {
  position: relative;
}

h4 {
  position: absolute;
  left: 0;
  bottom: 0;
  color: white;
  padding: 20px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
}

@media (max-width: 798px) {
  .category {
    padding: 20px 30px;
  }

  .category-list {
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .category {
    padding: 20px;
  }

  .category-list {
    gap: 5px;
    justify-content: center;
  }

  .category-list div {
    width: 20vw;
  }

  .category-list div img {
    width: 100%;
  }

  h4 {
    font-size: 12px;
    padding: 5px;
  }
}
</style>
