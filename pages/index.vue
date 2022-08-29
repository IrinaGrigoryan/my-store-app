<template>
  <FullProductsListPage :load-products="loadProducts" />
</template>

<script>
import Product from '~/api/product';
import FullProductsListPage from '~/components/products-list/FullProductsListPage';

export default {
  components: { FullProductsListPage },
  methods: {
    async loadProducts () {
      return await Product.list()
    }
  }
}
</script>
