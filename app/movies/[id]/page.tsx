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
import WatchlistButton from "@/components/watchlistButton";
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
          <div className="absolute inset-0 bg--to-t from-gray-900 via-gray-900/80" />
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
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-yellow-500 font-semibold">
                    {movie.rating} Rating
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{movie.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
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
                    className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full text-sm"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={movie.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Watch Trailer
                </a>
                <WatchlistButton
                  movie={{
                  id: String(movie.id),
                  title: movie.title,
                 }}
                />
                <button className="bg-gray-800/80 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {movie.description}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Awards & Recognition</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {movie.awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg"
                  >
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span>{award}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  <span>Metacritic: {movie.metacriticScore}/100</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-red-500" />
                  <span>Rotten Tomatoes: {movie.rottenTomatoesScore}%</span>
                </div>
              </div>
            </section>
            <section>
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">User Reviews</h2>

                <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-xl p-6">
                  <ReviewForm movieId={id} />
                </div>
              </section>
              <h2 className="text-2xl font-bold mb-6">Top Cast</h2>
              <div className="grid grid-cols-2 gap-6">
                {movie.cast.map((actors) => (
                  <Link
                    key={actors.id}
                    href={`/en/actor/${actors.id}`}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-700/50 transition-colors flex gap-4"
                  >
                    <img
                      src={actors.image}
                      alt={actors.name}
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {actors.name}
                      </h3>
                      <p className="text-gray-400 mb-2">{actors.role}</p>
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {actors.bio}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <div>
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold mb-4">Movie Info</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-gray-400">Director</dt>
                    <dd>{movie.director}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400">Production Company</dt>
                    <dd>{movie.productionCompany}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <dt className="text-gray-400">Box Office</dt>
                    <dd className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      {movie.boxOffice}
                    </dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <dt className="text-gray-400">Language</dt>
                    <dd className="flex items-center gap-1">
                      <Globe className="w-4 h-4 text-blue-500" />
                      {movie.language}
                    </dd>
                  </div>
                </dl>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};