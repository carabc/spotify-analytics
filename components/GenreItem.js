export default function GenreItem({ genres, numOfHyphens }) {
  return (
    // genre container
    <div>
      {genres.map((genre, index) => (
        <span key={genre} className="">
          {genre} {index + 1 !== numOfHyphens ? "-" : ""}
        </span>
      ))}
    </div>
  );
}
