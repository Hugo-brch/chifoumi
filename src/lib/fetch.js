import { API_BASE_URL } from "./constants";

const oldFetch = window.fetch;

const newFetch = function (url, options = {}) {
  const token = localStorage.getItem("token");

  // Add auto -> Authorization header if token is present
  if (token) {
    options.headers = {
      ...(options.headers ?? {}),
      Authorization: "Bearer " + token,
    };
  }

  // Add auto -> API_BASE_URL if relative path is used
  if (!url.startsWith("http")) {
    url = API_BASE_URL + url;
  }

  return oldFetch(url, options);
};

window.fetch = newFetch;
