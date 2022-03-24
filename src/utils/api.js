import axios from 'axios';

export const API_URL = 'https://aqt15rrwbl.execute-api.us-east-1.amazonaws.com/posts';

export const deletePost = async(id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    console.log(`Deleted post: ${id}`);
  } catch(err) {
    console.log(err);
  }
}

export const createPost = async(form) => {
  try {
    await axios.put(API_URL, form);
  } catch (err) {
    console.log(err);
  }
}

export const fetchAllPosts = async() => {
    try {
      const response = await axios.get(API_URL);
      // return all posts
      return response.data.Items;

    } catch(err) {
      console.log(err)
    } 
  }


// return posts that match the entered tag
export const fetchFilteredPosts = async(tag) => {
  try {
    const response = await axios.get(`${API_URL}/filter/${tag}`);
    return response.data.Items;
  } catch (err) {
    console.log(err);
  }
}