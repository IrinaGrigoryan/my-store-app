<template>
  <ProductsList :products="products"></ProductsList>
</template>

<script>
import ProductsList from '~/components/products-list/ProductsList';

export default {
  name: 'FullProductsListPage',
  components: { ProductsList },
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
