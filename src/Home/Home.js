import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
const fetchPosts = async () => {
  try {
    const { data } = await axios.get("https://gorest.co.in/public/v2/posts");
    console.log(data, "bacha");
    return data;
  } catch (error) {
    throw Error("Unable to fetch posts");
  }
};
const Home = () => {
  const { data, isLoading, error } = useQuery("posts", fetchPosts);
  console.log(error, "jjjjjjjj");
  return <div>Home</div>;
};

export default Home;
