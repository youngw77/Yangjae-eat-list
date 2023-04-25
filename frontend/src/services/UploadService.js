import axios from "axios";

const url="http://localhost:8080/";
// let url_login = "http://192.168.99.116:8180/";
// let url_api = "http://192.168.99.116:8380/";


const getConfig = () => {
    axios
      .get(url)
      .then((result) => {
        // url_login = result.data.url_login + "/";
        // url_api = result.data.url_api + "/";
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getList = () => {
    return axios.get(`${url}`)
  }

  const getCreate = (projectName) => {
    return axios.get(`${url}/${projectName}`)
  }

  const getStore = (projectName) => {
    return axios.get(`${url}/${projectName}`)
  }


  export{
    getConfig,
    getList,
    getCreate,
    getStore,

  };