<template>
  <article class="product-detail-wrapper">
    <div class="product-detail">
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
        <p class="product-detail__description">{{ product.description }}</p>
        <p class="product-detail__price">{{ product.price | formatPrice }}</p>
        <p class="product-detail__seller-title">Seller:</p>
        <p class="product-detail__seller">{{ product.seller }}</p>
        <p class="product-detail__social">
          <a
            :href="'https://instagram.com/_u/' + product.instagram"
            class="product-detail__social-link"
          >
            @{{ product.instagram }}
          </a>
        </p>
        <p class="product-detail__social">
          <a
            :href="'https://t.me/' + product.telegram"
            class="product-detail__social-link"
          >
            @{{ product.telegram }}
          </a>
        </p>
      </div>
    </div>
  </article>
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
      title: `${this.product.title} | Knife Shop`
    }
  }
}
</script>

<style lang="scss">
.product-detail {
  display: flex;

  &__gallery {
    width: 50%;
  }

  &__content {
    padding-left: 80px;
    width: 50%;
  }

  &__category {
    font-size: 1.6rem;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  &__category-link {
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  &__title {
    font-size: 3.6rem;
    font-weight: 400;
    margin: 0 0 30px;
  }

  &__description {
    font-size: 2.4rem;
    margin-bottom: 30px;
  }

  &__price {
    font-size: 3.4rem;
    font-weight: 700;
    margin-bottom: 30px;
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
    font-size: 2rem;
    margin-bottom: 10px;
  }

  &__social-link {
    text-decoration: underline;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
}
</style>
