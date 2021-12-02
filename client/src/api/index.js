import axios from "axios";

const url = "https://mern-memories-app-node.herokuapp.com/posts";

export const fetchPosts = async () => axios.get(url);
export const createPost = async (post) => axios.post(url, post);
export const updatePost = async (id, post) => axios.patch(`${url}/${id}`, post);
export const deletePost = async (id) => axios.delete(`${url}/${id}`);
export const likePost = async (id) => axios.patch(`${url}/${id}/likePost`);
