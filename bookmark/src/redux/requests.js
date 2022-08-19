const request = async (path, method, item) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  const url = "https://bookmarks-app-server.herokuapp.com/";

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

  let data = fetch(
    url.concat(path),
    method === "get" ? getOptions : postOptions
  );
  console.log(data);
  let result = await data.then((response) => response.json());
  console.log(result);
  return result;
};

export default request;
