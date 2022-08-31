<template>
  <FullProductsListPage :load-products="loadProducts" />
</template>

<script>
import FullProductsListPage from '~/components/products-list/FullProductsListPage'
import Product from '~/api/product'

export default {
  components: { FullProductsListPage },
  computed: {
    categoryId () {
      return this.$route.params.category.split('-').slice(-1).pop()
    }
  },
  methods: {
    async loadProducts () {
      const filter = {
        category: this.categoryId
      }
      return await Product.list(filter)
    }
  }
}
</script>
