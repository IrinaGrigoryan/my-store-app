<template>
  <ul class="products-list">
    <li class="products-list__item"
        v-for="product in products"
        :key="product.id"
    >
      <ProductCard :product="product"></ProductCard>
    </li>
  </ul>
</template>

<script>
import ProductCard from '@/components/products-list/ProductCard';

export default {
  name: 'ProductsList',
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.products-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  &__item {
    margin-bottom: 30px;
    padding: 0 15px;
    width: 25%;

    @include media-max(1279) {
      width: 50%;
    }

    @include media-max(767) {
      margin: 0 auto 30px;
      max-width: 480px;
      width: 100%;
    }
  }
}
</style>
