import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
const fetchPosts = async () => {
  try {
    // let data = await fetc("https://jsonplaceholder.typicode.com/todos/1");
    let { data } = await axios.get("https://gorest.co.in/public/v2/posts", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    console.log(data, "bacha");
    return data;
  } catch (error) {
    throw Error("Unable to fetch posts");
  }
};
const Home = () => {
  // const { data, isLoading, error } = useQuery("posts", fetchPosts);

  // console.log(data, "jjjjjjjj");
  useEffect(() => {
    fetchPosts();
  }, []);
  return <div>Home</div>;
};

export default Home;
