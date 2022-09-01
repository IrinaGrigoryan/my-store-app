<template>
  <div class="product-gallery">
    <div class="product-gallery__preview">
      <picture class="product-gallery__picture">
        <!-- Use Apisful Image Transformation API https://docs.apisful.com/image-rest-api/ to get the specific image size -->
        <img :src="`${activeImage}?width=540`" :alt="product.title">
      </picture>
    </div>
    <div class="product-gallery__thumbs">
      <div
        v-for="image in product.images"
        :key="image"
        class="product-gallery__thumbs-item"
        @click="showImage(image)"
      >
        <img :src="`${image}?width=54&height=54`" :alt="product.title">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGallery',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selectedImage: ''
    }
  },
  computed: {
    activeImage () {
      if (this.selectedImage) {
        return this.selectedImage
      } else if (this.product.images) {
        return this.product.images[0]
      } else {
        return ''
      }
    }
  },
  methods: {
    showImage (img) {
      this.selectedImage = img
    }
  }
}
</script>

<style lang="scss">
.product-gallery {
  &__preview {
    align-items: center;
    box-shadow: 0 0 10px 1px rgba($color-black, 0.3);
    display: flex;
    justify-content: center;
    min-height: 634px;
    padding: 50px;

    @include media-max(767) {
      min-height: 350px;
      padding: 15px;
    }
  }

  &__picture {
    img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  }

  &__thumbs {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  &__thumbs-item {
    align-items: center;
    box-shadow: 0 0 10px 1px rgba($color-black, 0.3);
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 70px;
    margin: 0 10px 10px 0;
    padding: 8px;
    width: 70px;

    img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  }
}
</style>
