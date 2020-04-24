const token = null;

// Function for api calls, takes in url, method, body;
// Returns res.json of call
export const apiService = async <T = any>(
  url: string,
  method: string = "GET",
  body?: {}
) => {
  const headers: IHeader = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
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
      return null;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

interface IHeader {
  [key: string]: string;
}
