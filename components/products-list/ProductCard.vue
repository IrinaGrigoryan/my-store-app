<template>
  <div class="product-card">
    <NuxtLink
      :to="{
        name: 'products-product',
        params: { product: `${product.slug}-${product.id}` }
      }"
      class="product-card__link"
    >
      <picture class="product-card__image">
        <img :src="product.images[0]" :alt="product.title">
      </picture>
      <div class="product-card__content">
        <h2 class="product-card__title">{{ product.title }}</h2>
        <p class="product-card__price">{{ product.price | formatPrice }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.product-card {
  font-size: 2.4rem;
  text-align: center;

  &__image {
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    height: 350px;
    padding: 30px;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  &__content {
    padding: 20px;
  }

  &__title {
    font-size: 2.2rem;
    font-weight: 400;
    margin: 0 0 20px;
  }

  &__price {
    font-weight: 700;
  }
}
</style>
