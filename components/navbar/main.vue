<template>
  <div class="navbar">
    <h1 class="navbar__logo">
      <NuxtLink to="/" class="navbar__logo-link">
        <span class="navbar__logo-inverted">
          Knife
        </span>
          Shop
      </NuxtLink>
    </h1>
  </div>
</template>

<style lang="scss">
.navbar {
  margin: 0 0 50px;
  padding: 15px 0;

  &__logo {
    font-size: 2.6rem;
  }

  &__logo-inverted {
    background: #000;
    color: #fff;
    display: inline-flex;
    padding: 5px 15px;
  }
}
</style>
