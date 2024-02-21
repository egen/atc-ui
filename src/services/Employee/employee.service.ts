import axios from "axios";
import { apiBaseUrl } from "../../shared/app-config";

const EmployeeService = {
  async getEmployees(pageNumber: number, pageSize: number) {
    try {
      const { data } = await axios.get(
        `${apiBaseUrl}/v1/employee?pageNumber=${pageNumber}&pageSize=${pageSize}`,
        {
          headers: {
            Authorization: "abc",
          },
        }
      );
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  async updateEmployees(id: string, body: any) {
    try {
      const { data } = await axios.put(
        `${apiBaseUrl}/v1/employee/${id}`,
        body,
        {
          headers: {
            Authorization: "abc",
          },
        }
      );
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  async deleteEmployees(id: string) {
    try {
      const { data } = await axios.delete(`${apiBaseUrl}/v1/employee/${id}`, {
        headers: {
          Authorization: "abc",
        },
      });

      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};

export default EmployeeService;
