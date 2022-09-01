<template>
  <div class="container">
    <article class="product-detail">
      <div class="product-detail__gallery">
        <product-gallery :product="product" />
      </div>
      <div class="product-detail__content">
        <p class="product-detail__category">
          <NuxtLink
            :to="{
              name: 'categories-category',
              params: { category: `${category.slug}-${category.id}` }
            }"
            class="product-detail__category-link"
          >
            {{ category.title }}
        </NuxtLink>
        </p>
        <h2 class="product-detail__title">{{ product.title }}</h2>
        <p class="product-detail__description" v-if="product.description">{{ product.description }}</p>
        <p class="product-detail__price">{{ product.price | formatPrice }}</p>
        <p class="product-detail__seller-title">Продавець:</p>
        <p class="product-detail__seller">{{ product.seller }}</p>
        <p class="product-detail__social is-instagram" v-if="product.instagram">
          <span class="fab fa-instagram product-detail__social-icon" aria-hidden="true"></span>
          <a
            :href="'https://instagram.com/_u/' + product.instagram"
            class="product-detail__social-link"
            target="_blank"
          >
            {{ product.instagram }}
          </a>
        </p>
        <p class="product-detail__social is-telegram" v-if="product.telegram">
          <span class="fab fa-telegram-plane product-detail__social-icon" aria-hidden="true"></span>
          <a
            :href="'https://t.me/' + product.telegram"
            class="product-detail__social-link"
            target="_blank"
          >
            {{ product.telegram }}
          </a>
        </p>
      </div>
    </article>
  </div>
</template>

<script>
import Product from '~/api/product'
import ProductGallery from '~/components/product-details/ProductGallery'
import { mapState } from "vuex";

export default {
  components: { ProductGallery },
  data () {
    return {
      product: {},
      category: {}
    }
  },
  computed: {
    productId () {
      return this.$route.params.product.split('-').slice(-1).pop()
    },
    ...mapState({
      categories: state => state.filters.categories
    })
  },
  created () {
    this.loadProduct()
    if (!this.categories) {
      this.$store.dispatch('filters/fetchCategories')
    }
  },
  methods: {
    async loadProduct() {
      this.product = await Product.get(this.productId)
      this.category = this.categories.filter((category) => category.id === this.product.category)[0]
    }
  },
  head () {
    return {
      title: `${this.product.title} | Pawn Shop`
    }
  }
}
</script>

<style lang="scss">
.product-detail {
  display: flex;

  @include media-max(1279) {
    flex-direction: column;
  }

  &__gallery {
    width: 50%;

    @include media-max(1279) {
      max-width: 634px;
      width: 100%;
    }
  }

  &__content {
    padding-left: 80px;
    width: 50%;

    @include media-max(1279) {
      padding: 50px 0 0;
      width: 100%;
    }
  }

  &__category {
    font-size: 1.6rem;
    margin-bottom: 15px;
    text-transform: uppercase;

    @include media-max(767) {
      font-size: 1.4rem;
    }
  }

  &__category-link {
    @include on-event {
      text-decoration: underline;
    }
  }

  &__title {
    font-size: 3.6rem;
    font-weight: 400;
    margin: 0 0 30px;

    @include media-max(767) {
      font-size: 2.8rem;
    }
  }

  &__description {
    font-size: 1.8rem;
    line-height: 1.4;
    margin-bottom: 30px;
  }

  &__price {
    font-size: 3.4rem;
    font-weight: 700;
    margin-bottom: 30px;

    @include media-max(767) {
      font-size: 2.6rem;
    }
  }

  &__seller-title {
    font-size: 2.6rem;
    margin-bottom: 20px;
  }

  &__seller {
    font-size: 2.4rem;
    margin-bottom: 15px;
  }

  &__social {
    align-items: center;
    display: flex;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  &__social-icon {
    font-family: $font-awesome-brands-typo;
    font-size: 2.8rem;
    margin-right: 8px;
    min-width: 27px;

    .is-instagram & {
      color: $color-instagram;
    }

    .is-telegram & {
      color: $color-telegram;
    }
  }

  &__social-link {
    text-decoration: underline;

    @include on-event {
      text-decoration: none;
    }
  }
}
</style>
