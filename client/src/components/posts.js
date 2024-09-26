import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "./post";

export default function Posts() {
  const { posts, setPosts } = useState();

  useEffect(() => {
    axios
      .get("localhost:3000/api/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {posts.map((post, id) => (
        <Post post={post} key={id} />
      ))}
    </div>
  );
}
