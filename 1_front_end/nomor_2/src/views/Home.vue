<template>
  <div class="home">
    <div class="banner-home">
      <img src="../assets/bannerHome.jpg" alt="banner-image">
      <div class="banner-content-container">
        <div class="heading-text text">
          Sekolah Blended Learning Pertama di Indonesia
        </div>
        <div class="main-text text">
          Kartu Prakerja
        </div>
        <div class="main-text text">
          Belajar untuk Siap Bekerja!
        </div>
        <div class="description text">
          Sekolah.mu menjadi simpul kolaborasi ratusan perusahaan dan organisasi yang telah dikurasi untuk berkarya, menyediakan program-program kurikulum yang sesuai kebutuhan.
        </div>
        <div class="banner-button">
          <button class="action-btn yellow">Ikut Pelatihan</button>
          <button class="action-btn white">Info Kartu Prakerja</button>
        </div>
      </div>
    </div>
    <div class="main-content">

      <div class="page-title">
        Produk Kami
      </div>

      <div class="ujianmu-division division">
        <div class="division-title">
          Ujian.mu
        </div>
        <div class="division-card-container">
          <div class="product-list" v-for="product in $store.state.products.ujianmu" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>

      <div class="kelasmu-division division">
        <div class="division-title">
          Kelas.mu
        </div>
        <div class="division-card-container">
          <div class="product-list" v-for="product in $store.state.products.kelasmu" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>

      <div class="kariermu-division division">
        <div class="division-title">
          Karier.mu
        </div>
        <div class="division-card-container">
          <div class="product-list" v-for="product in $store.state.products.kariermu" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  created(){
    this.$store.dispatch('getAllProduct')
  }
}
</script>
