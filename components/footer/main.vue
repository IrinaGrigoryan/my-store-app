<template>
  <footer class="footer">
    <div class="container">
      <h2 class="footer__title">Territory of freedom</h2>
      <p class="footer__subtitle">"Freedom is not free"</p>
      <p class="footer__copyright">Copyright © <span class="footer__year">{{ yearHandler() }}</span>. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    yearHandler() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer {
  background-color: $color-black;
  color: $color-white;
  padding: 50px 0;
  text-align: center;

  &__title {
    font-size: 2rem;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  &__subtitle {
    font-size: 1.8rem;
    margin-bottom: 25px;
  }

  &__copyright {
    font-size: 1.4rem;
  }
}
</style>
