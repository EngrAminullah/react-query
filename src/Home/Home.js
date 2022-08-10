import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
const fetchPosts = async () => {
  // let data = await fetc("https://jsonplaceholder.typicode.com/todos/1");
  let data = await axios.get("https://gorest.co.in/public/v2/posts");

  console.log(data.data, "bacha");
  return data.data;
};
const Home = () => {
  let data = useQuery("posts", fetchPosts);

  console.log(data, "jjjjjjjj");
  return <div>Home</div>;
};

export default fetchPosts;
