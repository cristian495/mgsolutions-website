import axios, { axiosNextAPI } from "vendors/axios";
// import authHeader from '../auth-header';

class ProductService {
  constructor() {
    // this.headers = { headers: authHeader() };
  }
  async addProduct(props) {
    const { data } = await axiosNextAPI.post(
      "/api/v1/admin/products/add",
      props
      //   this.headers
    );
    console.log(data);
    return data;
  }

  async updateProduct(props) {
    const { data } = await axiosNextAPI.put(
      "/api/v1/admin/products/update",
      props
      //   this.headers
    );
    console.log(data);
    return data;
  }

  async fetchProducts(props = {}) {
    console.log("props", props);
    const { limit, page, categoriesArr, q } = props;
    const categories =
      categoriesArr && categoriesArr.length
        ? categoriesArr.reduce((acc, curr) => acc + `categories=${curr}&`, "")
        : "";
   
    const { data } = await axios.get(
      `/api/v1/products?limit=${limit}&page=${page || 1}&${categories}q=${q || ""}`
      //   this.headers
    );
    return data;
  }

  async fetchSpecificProduct(id) {
    const { data } = await axios.get(
      `/api/v1/products/${id}`
      //   this.headers
    );
    return data;
  }

  async fetchRelatedProducts(categories) {
    const { data } = await axios.post(`/api/v1/products/related`, { categories });
    // console.log(data);
    return data;
  }
}

export default new ProductService();
