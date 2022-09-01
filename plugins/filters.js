import Vue from 'vue'

Vue.filter('formatPrice', (value) => {
  if (!value) {
    return value
  }

  return `${value.toFixed(2)} грн`
})
