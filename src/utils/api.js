import axios from 'axios';

export const API_URL = 'https://aqt15rrwbl.execute-api.us-east-1.amazonaws.com/posts';

export const getApi = async() => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data.Items);
      return response.data.Items;
      // await axios.get(API_URL).then((response) => {
      //   console.log(response.data.Items);
      //   return response.data.Items;
      // })
    } catch(err) {
      console.log(err)
    } 
  }