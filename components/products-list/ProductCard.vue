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
        <p class="product-card__updated">Оновлено {{ timeAgoHandler(product.updated_at) }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import TimeAgo from 'javascript-time-ago'
import uk from 'javascript-time-ago/locale/uk'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    timeAgoHandler(updated_at) {
      TimeAgo.addLocale(uk)
      TimeAgo.setDefaultLocale('uk')

      const timeAgo = new TimeAgo('uk')
      const todayDate = Date.now();
      const updatedDate = new Date(updated_at).getTime()
      return timeAgo.format(todayDate - (todayDate - updatedDate))
    }
  }
}
</script>

<style lang="scss">
.product-card {
  font-size: 2.4rem;
  text-align: center;
  $this: &;

  &__link {
    @include on-event {
      #{$this}__image {
        box-shadow: 0 0 20px 1px rgba($color-black, 0.5);
      }
    }
  }

  &__image {
    @include trs;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 10px 1px rgba($color-black, 0.3);
    display: flex;
    justify-content: center;
    height: 350px;
    padding: 30px;

    @include media-max(767) {
      padding: 15px;
    }

    img {
      height: 100%;
      object-fit: contain;
      width: 100%;
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
    margin-bottom: 20px;
  }

  &__updated {
    font-size: 1.6rem;
  }
}
</style>
