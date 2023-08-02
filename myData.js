import axios from "axios";

const myData = async (userId) => {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?id=${userId}`
  );
  const rPosts = { posts: posts };
  const total = { ...user, ...rPosts };
  console.log(total);
};

export default myData;
