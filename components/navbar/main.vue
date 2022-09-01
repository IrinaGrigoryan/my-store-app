<template>
  <div class="container">
    <header class="navbar">
        <h1 class="navbar__logo">
          <NuxtLink to="/" class="navbar__logo-link">
            <span class="navbar__logo-inverted">
              Pawn
            </span>
              Shop
          </NuxtLink>
        </h1>
    </header>
  </div>
</template>

<style lang="scss">
.navbar {
  padding: 30px 0 15px;

  &__logo {
    font-size: 2.6rem;
  }

  &__logo-inverted {
    background: $color-black;
    color: $color-white;
    display: inline-flex;
    padding: 5px 15px;
  }
}
</style>
