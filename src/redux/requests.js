const request = async (path, method, item, authRequired) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  const url = "https://bookmarks-app-server-aryankush.herokuapp.com/";

  const getOptions = {
    method: "get",
    headers: { Authorization: `Bearer ${auth}` },
  };

  const postOptions = {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  };

  if (authRequired === true) {
    postOptions.headers.Authorization = `Bearer ${auth}`;
  }

  let data = fetch(
    url.concat(path),
    method === "get" ? getOptions : postOptions
  );
  let result = await data.then((response) => response.json());
  console.log(result);
  return result;
};

export default request;
