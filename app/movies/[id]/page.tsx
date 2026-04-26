import { notFound } from "next/navigation";
import {
  Star,
  Clock,
  Calendar,
  Play,
  Heart,
  Share2,
  Award,
  BarChart3,
  DollarSign,
  Globe,
} from "lucide-react";
import Link from "next/link";
import ReviewForm from "@/components/ReviewForm";
export const dynamic = "force-dynamic";


export default async function MovieDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movies = [
    {
      id: 9,
      title: "The Shawshank Redemption",
      rating: 9.3,
      year: 1994,
      duration: "142 min",
      genre: ["Drama"],
      director: "Frank Darabont",
      description:
        "Two imprisoned men bond over years, finding hope and redemption through friendship and perseverance.",
      image:
        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80",
      backdrop:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmRhMC00ZDIzLWFmNTEtODM1ZmRlYzRhZTkzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
      awards: ["Oscar Nominee", "Golden Globe Nominee"],
      metacriticScore: 82,
      rottenTomatoesScore: 91,
      boxOffice: "$28.3M",
      language: "English",
      productionCompany: "Castle Rock Entertainment",
      releaseDate: "1994-09-23",
      cast: [
        {
          id: 1,
          name: "Tim Robbins",
          role: "Andy Dufresne",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
          bio: "American actor known for dramatic roles",
        },
      ],
    },
    {
      id: 10,
      title: "The Godfather",
      rating: 9.2,
      year: 1972,
      duration: "175 min",
      genre: ["Crime", "Drama"],
      director: "Francis Ford Coppola",
      description:
        "The aging patriarch of a powerful crime family transfers control of his empire to his reluctant son.",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      backdrop:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwMC00ZjQ5LWFmNTEtODM1ZmRlYzRhZTkzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
      awards: ["Oscar Winner", "Golden Globe Winner"],
      metacriticScore: 100,
      rottenTomatoesScore: 97,
      boxOffice: "$250M",
      language: "English",
      productionCompany: "Paramount Pictures",
      releaseDate: "1972-03-24",
      cast: [
        {
          id: 1,
          name: "Marlon Brando",
          role: "Vito Corleone",
          image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
          bio: "Legendary Hollywood actor",
        },
      ],
    },

    {
      id: 11,
      title: "The Dark Knight",
      rating: 9.0,
      year: 2008,
      duration: "152 min",
      genre: ["Action", "Crime", "Drama"],
      director: "Christopher Nolan",
      description:
        "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
      backdrop:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtYzY0Yy00ZDIzLWFmNTEtODM1ZmRlYzRhZTkzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      awards: ["Oscar Winner", "BAFTA Winner"],
      metacriticScore: 84,
      rottenTomatoesScore: 94,
      boxOffice: "$1.006B",
      language: "English",
      productionCompany: "Warner Bros.",
      releaseDate: "2008-07-18",
      cast: [
        {
          id: 1,
          name: "Christian Bale",
          role: "Bruce Wayne / Batman",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
          bio: "Actor known for intense transformations",
        },
      ],
    },
  ];
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return notFound();

  return (
    <div>
      <div className="relative h-[90vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdrop || movie.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
          <div className="grid md:grid-cols-3 gap-8 items-end">
            <div className="hidden md:block">
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded-lg shadow-xl aspect-2/3 object-cover"
              />
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-yellow-500 font-semibold">
                    {movie.rating} Rating
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{movie.duration}</span>
                </div>

                <div className="flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{movie.releaseDate}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {movie.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genre.map((g) => (
                  <span
                    key={g}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {g}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={movie.trailer}
                  target="_blank"
                  className="bg-yellow-500 text-black px-8 py-3 rounded-lg flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Trailer
                </a>

                <button className="bg-gray-800 px-8 py-3 rounded-lg flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Watchlist
                </button>

                <button className="bg-gray-800 px-4 py-3 rounded-lg">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 text-lg">{movie.description}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                Awards & Recognition
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {(movie.awards ?? []).map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg"
                  >
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span>{award}</span>
                  </div>
                ))}

                <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  <span>Metacritic: {movie.metacriticScore}/100</span>
                </div>

                <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-red-500" />
                  <span>Rotten Tomatoes: {movie.rottenTomatoesScore}%</span>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">User Reviews</h2>
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                <ReviewForm movieId={id} />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Top Cast</h2>

              <div className="grid grid-cols-2 gap-6">
                {(movie.cast ?? []).map((actor) => (
                  <div
                    key={actor.id}
                    className="bg-gray-800 p-4 rounded-lg flex gap-4"
                  >
                    <img
                      src={actor.image}
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{actor.name}</h3>
                      <p className="text-gray-400">{actor.role}</p>
                      <p className="text-sm text-gray-400">
                        {actor.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div>
            <div className="sticky top-24 bg-gray-800 p-6 rounded-lg space-y-4">
              <h3 className="font-semibold">Movie Info</h3>

              <p>Director: {movie.director}</p>
              <p>Production: {movie.productionCompany}</p>
              <p>Box Office: {movie.boxOffice}</p>
              <p>Language: {movie.language}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}