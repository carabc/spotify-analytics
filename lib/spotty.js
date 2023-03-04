const tokenEndpoint = `https://accounts.spotify.com/authorize`;
const playlistsEndpoint = "https://api.spotify.com/v1/me/playlists";
const profileEndpoint = "https://api.spotify.com/v1/me";
const topTracksEndpoint = "https://api.spotify.com/v1/me/top/tracks";
const topArtistsEndpoint = "https://api.spotify.com/v1/me/top/artists";

const fetchAccessToken = async (refreshToken, clientID, clientSecret) => {
  const basic = Buffer.from(
    `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
  ).toString("base64");
  // ?grant_type=client_credentials   <-- bad turkee
  const paramString = `grant_type=refresh_token&refresh_token=${refreshToken}`;
  const searchParams = new URLSearchParams(paramString);
  let res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: searchParams,
  });

  return res.json();
};

export const getUserData = async (refreshToken) => {
  console.log("getUserData line 25");
  const { access_token } = await fetchAccessToken(refreshToken);

  let playlists = await fetch(playlistsEndpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });

  let topTracks = await fetch(topTracksEndpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  let topArtists = await fetch(topArtistsEndpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });

  let playlistData = await playlists.json();
  let topTracksData = await topTracks.json();
  let topArtistsData = await topArtists.json();

  return [playlistData, topTracksData, topArtistsData];
};
