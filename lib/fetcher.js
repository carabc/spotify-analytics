export async function fetcher(url, access_token) {
  let data = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: access_token,
  });
  return data;
}
