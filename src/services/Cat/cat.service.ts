import axios from "axios";
import { apiBaseUrl } from "../../shared/app-config";

const CatService = {
  async getCats() {
    try {
      const { data } = await axios.get(
        `${apiBaseUrl}/v1/images/search?limit=50`
      );
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};

export default CatService;
