import Image from "next/image";

export default function TrackItem({ track, index }) {
  return (
    // track item container. One side needs to be the song title and underneath is the artist, the other side needs to be the image of the album its on
    <div className="text-white flex justify-between mb-3 border-b-2 border-[#147541] p-2 items-center">
      {/* Track title and artist container */}
      <div>
        <p className="m-0 text-sm">
          {index + 1}. {track?.name}
        </p>
        <p className="text-[#525252] text-sm">{track?.artists[0]?.name}</p>
      </div>
      {/* Image of the album */}
      <div className="">
        <Image
          width={64}
          height={64}
          src={track?.album?.images[0]?.url}
          alt={`Album cover for ${track?.name}`}
        />
      </div>
    </div>
  );
}
