<template>
  <div class="banner">
    <div class="banner-content">
      <h2>
        Express <br />Confidence with <br />
        Soft Fashion
      </h2>
      <button>Shop the Collection</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerView",
};
</script>

<style scoped>
.banner {
  position: relative;
  background: url("../assets/Rectangle15.png");
  min-height: 100vh;
}

.banner-content {
  /* content: ""; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  /* z-index: -1 */
}

h2 {
  font-size: 60px;
  text-transform: uppercase;
  text-align: center;
}

button {
  background: #65740d;
  padding: 10px 50px;
  font-family: Inter;
  color: white;
  text-transform: uppercase;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 20px;
  font-weight: 600;
}

@media (max-width: 480px) {
  h2 {
    font-size: 40px;
  }

  .banner {
    min-height: 60vh;
    background-position: center;
    background-size: cover;
  }
}
</style>
