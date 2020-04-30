import fetch from "isomorphic-fetch";

export let Accesstoken: string = localStorage.getItem("token") || null;
export let User: any = {
  userid: localStorage.getItem("userid") || null,
  role: localStorage.getItem("role") || null,
};

// Function for api calls, takes in url, method, body;
// Returns res.json of call
export const apiService = async <T = any>(
  url: string,
  method: string = "GET",
  body?: {}
) => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  if (Accesstoken) {
    headers["Authorization"] = `Bearer ${Accesstoken}`;
  }
  try {
    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });
    if (res.ok) {
      return <T>await res.json();
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const setAccessToken = (
  token: string,
  user: {} = { userid: undefined, role: "visitor" }
) => {
  Accesstoken = token;
  User = user;

  localStorage.setItem("token", Accesstoken);
  localStorage.setItem("userid", User.userid);
  localStorage.setItem("role", User.role);
};

export const RemoveAccessToken = () => {
  localStorage.clear();
  Accesstoken = null;
  User = { userid: null, role: null };
};
