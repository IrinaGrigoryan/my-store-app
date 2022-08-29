<template>
  <article class="product-detail-wrapper">
    <div class="product-retail">
      <div class="product-detail__gallery">
  <!--      <picture class="product-detail__image">-->
  <!--        <img :src="product.images[0]" :alt="product.title">-->
  <!--      </picture>-->
      </div>
      <div class="product-detail__content">
        <h2 class="product-detail__title">{{ product.title }}</h2>
        <p class="product-detail__description">{{ product.description }}</p>
        <p class="product-detail__price">{{ product.price }}</p>
        <p class="product-detail__seller">{{ product.seller }}</p>
        <p class="product-detail__instagram">{{ product.instagram }}</p>
        <p class="product-detail__telegram">{{ product.telegram }}</p>
      </div>
    </div>
  </article>
</template>

<script>
import Product from '~/api/product'

export default {
  data () {
    return {
      product: {}
    }
  },
  computed: {
    productId () {
      return this.$route.params.product.split('-').slice(-1).pop()
    },
  },
  created () {
    this.loadProduct()
  },
  methods: {
    async loadProduct() {
      this.product = await Product.get(this.productId)
    }
  },
  head () {
    return {
      title: `${this.product.title} | Knife Shop`
    }
  }
}
</script>
