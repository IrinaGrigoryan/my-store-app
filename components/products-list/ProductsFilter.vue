<template>
  <nav class="filter">
    <p class="filter__label">
      Категорії:
    </p>
    <ul class="filter__list">
      <li
        class="filter__item"
        :class="{ 'is-active': !$route.params.category }"
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
        :class="{ 'is-active': $route.params.category === `${category.slug}-${category.id}` }"
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
  </nav>
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
  display: flex;
  flex-wrap: wrap;
  font-size: 1.9rem;
  margin-bottom: 30px;
  $this: &;

  &__label {
    font-weight: 700;
    margin: 0 20px 5px 0;
  }

  &__list {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }

  &__item {
    margin: 0 8px 5px;
  }

  &__item--active {
    #{$this}__item-link {
      color: $color-grey;
      text-decoration: underline;
    }
  }

  &__item-link {
    @include trs;

    &:hover,
    &:focus,
    .is-active & {
      color: $color-grey;
      text-decoration: underline;
    }
  }
}
</style>
