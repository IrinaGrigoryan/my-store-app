<template>
  <div class="products-list-wrapper">
    <ul class="products-list">
      <li class="products-list__item"
          v-for="product in products"
          :key="product.id"
      >
        <ProductCard :product="product"></ProductCard>
      </li>
    </ul>
  </div>
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
  }
}
</style>
