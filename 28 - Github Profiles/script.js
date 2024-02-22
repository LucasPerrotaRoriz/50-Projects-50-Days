const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  /*
        axios(APIURL + username)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    */

  try {
    const { data } = await axios(APIURL + username);
    // console.log(data);

   
  } catch (err) {
    if (err.response.status == 404) {
      
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
