<template>
  <main class="site-main">
    <div class="container">
      <ProductsFilter />
      <ProductsList :products="products"></ProductsList>
    </div>
  </main>
</template>

<script>
import ProductsList from '~/components/products-list/ProductsList';
import ProductsFilter from './ProductsFilter'

export default {
  name: 'FullProductsListPage',
  components: { ProductsList, ProductsFilter },
  props: {
    loadProducts: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      products: [],
    }
  },
  async created () {
    this.products = await this.loadProducts()
  }
}
</script>
