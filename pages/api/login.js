// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function login(req, res) {
  if (req.method === "GET") {
    const paramString = `response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:3000/home`;
    const searchParams = new URLSearchParams(paramString);
    res.redirect("https://accounts.spotify.com/authorize?" + paramString);
  }
}
