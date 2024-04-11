import axios from "axios";
const url = "https://tennis-backend-c6oszgtd6a-uw.a.run.app";

const endpoins = {
  allApplications: "/api/getApplications",
  addApplication: "/api/submitApplication",
};

export const addApplication = async (bodyData) => {
    try {
      const res = await axios.post(url + endpoins.addApplication, bodyData);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.error({ err });
    }
  };

  export const getAllApplications = async () => {
    try {
      const res = await axios.get(
        url + endpoins.allApplications
      );
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.error({ err });
    }
  };
  