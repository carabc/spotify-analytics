import { BsSpotify } from "react-icons/bs";
export default function Login() {
  const handleLoginClick = async () => {
    await fetch("/api/login");
  };

  return (
    <div className="flex flex-col h-full justify-center items-center bg-zinc-900">
      <div className="flex items-center justify-center gap-3 text-white mb-3">
        <span className="text-[#1DB954]">
          <BsSpotify size={40} />
        </span>
        <h1 className="text-4xl">Spotify Analytics</h1>
      </div>
      <button
        onClick={handleLoginClick}
        className="text-white p-2 rounded-lg border border-[#1DB954] border-solid hover:border-zinc-500 hover:text-zinc-500 transition-all"
      >
        Login with Spotify
      </button>
    </div>
  );
}
