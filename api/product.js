import { Apisful } from './index'

export default {
  async list() {
    const response = await Apisful.get('products/');
    return response.data.results;
  },
  async get (productId) {
    const response = await Apisful.get(`products/${productId}/`)
    return response.data
  }
}
