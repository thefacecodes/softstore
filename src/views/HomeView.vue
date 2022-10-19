<template>
  <main>
    <BannerView />
    <CategorySection />
    <ShopList />
  </main>
</template>

<script>
// @ is an alias to /src
import BannerView from '@/components/Banner.vue'
import CategorySection from '@/components/Category.vue'
import ShopList from '@/components/ShopList'

export default {
  name: 'HomeView',
  components: {
    BannerView,
    CategorySection,
    ShopList
  }
}
</script>

<style>
 @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
</style>
