const axios = require("axios");

function getUser(id) {
  return axios.get("https://jsonplaceholder.typicode.com/users/" + id);
}

async function main() {
  try {
    const user = await getUser(1);
    // const reuslt = await user.(1);
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}

main();

//   .then((user) => console.log(user))
//   .catch((err) => console.log(err));
