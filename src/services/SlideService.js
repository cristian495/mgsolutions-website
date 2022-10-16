import axios, { axiosNextAPI } from "vendors/axios";
// import authHeader from '../auth-header';

class SlideService {
  constructor() {
    // this.headers = { headers: authHeader() };
  }

  async deleteSlide(id) {
    const { data } = await axiosNextAPI.post(`/api/v1/admin/slides/delete`, {
      slideId: id,
    });
    console.log(data);
    return data;
  }

  async addSlide(props) {
    const { data } = await axiosNextAPI.post("/api/v1/admin/slides/add", props);
    console.log(data);
    return data;
  }

  async updateSlide(props) {
    const { data } = await axiosNextAPI.put(
      "/api/v1/admin/slides/update",
      props
      //   this.headers
    );
    console.log(data);
    return data;
  }

  async fetchSlides(props = {}) {
    const { data } = await axios.get(
      `/api/v1/slides`
      //   this.headers
    );
    console.log(data);
    return data;
  }

  async fetchSpecificSlide(id) {
    const { data } = await axios.get(
      `/api/v1/slides/${id}`
      //   this.headers
    );
    console.log(data);
    return data;
  }
}

export default new SlideService();
