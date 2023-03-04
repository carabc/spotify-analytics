import Image from "next/image";
import GenreItem from "./GenreItem";

export default function ArtistItem({ artist, index }) {
  return (
    // artist container
    <div className="text-white mb-3 border-b-2 border-[#147541] p-2 flex justify-between items-center">
      {/* artist name  and index container*/}
      <div className="flex flex-col ">
        <p>
          {index + 1}. {artist?.name}
        </p>

        <p>
          <GenreItem
            genres={artist?.genres}
            numOfHyphens={artist?.genres.length}
          />
        </p>
      </div>
      <div>
        {/* Artist image container */}
        <Image
          src={artist?.images[0]?.url}
          width={100}
          height={100}
          alt={`Photo of ${artist?.name}`}
        />
      </div>
    </div>
  );
}
