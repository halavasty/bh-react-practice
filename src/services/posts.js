export const getPosts = (id) =>
  fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id).then(
    (response) => response.json()
  );
