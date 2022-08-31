<template>
  <div class="site-inner">
    <ProductsFilter />
    <ProductsList :products="products"></ProductsList>
  </div>
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
