<template>
  <div class="product-card">
    <img :src="product.avatar" alt="product image">
    <div class="title">
      {{ product.name }}
    </div>
    <div class="abstract">
      {{ product.abstract }}
    </div>
    <div class="price">
      {{ Number(product.price) == 0? 'Gratis' : priceInRP }}
    </div>
  </div>
</template>
<script>
import priceConverter from '../helper/priceConverter'

export default {
  name: "ProductCard",
  props: ['product'],
  data() {
    return {
      priceInRP: priceConverter(String(Number(this.product.price)))
    }
  }
  
}
</script>