<template>
  <div class="filter">
    <p class="filter__label">
      Categories:
    </p>
    <ul class="filter__list">
      <li
        class="filter__item"
        :class="{ 'filter__item--active': !$route.params.category }"
      >
        <NuxtLink
          :to="{ name: 'index' }"
          class="filter__item-link"
        >
          All
        </NuxtLink>
      </li>
      <li
        v-for="category in categories"
        :key="category.id"
        class="filter__item"
        :class="{ 'filter__item--active': $route.params.category === `${category.slug}-${category.id}` }"
      >
        <NuxtLink
          :to="{
            name: 'categories-category',
            params: { category: `${category.slug}-${category.id}` }
          }"
          class="filter__item-link"
        >
          {{ category.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductsListFilter',
  computed: {
    ...mapState({
      categories: state => state.filters.categories
    })
  },
  created () {
    if (!this.categories) {
      this.$store.dispatch('filters/fetchCategories')
    }
  }
}
</script>

<style lang="scss">
.filter {
  align-items: center;
  display: flex;
  font-size: 1.9rem;
  margin-bottom: 30px;
  $this: &;

  &__label {
    font-weight: 700;
    margin-right: 20px;
  }

  &__list {
    align-items: center;
    display: flex;
    margin: 0 -8px;
  }

  &__item {
    margin: 0 8px;
  }

  &__item--active {
    #{$this}__item-link {
      color: #727272;
      text-decoration: underline;
    }
  }
}
</style>
