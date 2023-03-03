const basic = Buffer.from(
  `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
).toString("base64");
const tokenEndpoint = `https://accounts.spotify.com/api/token`;
const playlistsEndpoint = "https://api.spotify.com/v1/me/playlists";

export const getAccessToken = async (refreshToken) => {
  let paramString = `grant_type=refresh_token&refresh_token=${refreshToken}`;
  let searchParams = new URLSearchParams(paramString);

  let res = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      Authroization: `Basic ${basic}`,
      "Content-Type": "application/json",
    },
    body: searchParams,
  });
  return res.json();
};

export const getPlaylistData = async (refreshToken) => {
  const { access_token } = await getAccessToken(refreshToken);

  let res = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      Authroization: `Bearer ${access_token}`,
    },
  });
  return res.json();
};
