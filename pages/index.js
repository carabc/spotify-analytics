import { BsSpotify } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <div>
        <h1>Signed in</h1>

        <h2>Signout</h2>

        <button
          onClick={signOut}
          className="text-white p-2 rounded-lg border border-[#1DB954] border-solid hover:border-zinc-500 hover:text-zinc-500 transition-all"
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col h-full justify-center items-center bg-zinc-900">
        <div className="flex items-center justify-center gap-3 text-white mb-3">
          <span className="text-[#1DB954]">
            <BsSpotify size={40} />
          </span>
          <h1 className="text-4xl">Spotify Analytics</h1>
        </div>
        <button
          onClick={signIn}
          className="text-white p-2 rounded-lg border border-[#1DB954] border-solid hover:border-zinc-500 hover:text-zinc-500 transition-all"
        >
          Login with Spotify
        </button>
      </div>
    );
  }
}
