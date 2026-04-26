import { Instagram, Twitter, Film } from "lucide-react";
import { getActor } from "@/lib/getActor";

export default async function SocialPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // ✅ NO FETCH (fix Vercel error)
  const actor = await getActor(id);

  if (!actor) {
    return <div className="text-gray-400">No social data</div>;
  }

  if (!actor.socialMedia) {
    return <div className="text-gray-400">No social links available</div>;
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {/* INSTAGRAM */}
      {actor.socialMedia?.instagram && (
        <a
          href={actor.socialMedia.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-4 rounded-xl flex items-center gap-4 hover:scale-[1.02] transition"
        >
          <div className="bg-pink-500 p-3 rounded-full">
            <Instagram className="text-white w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">Instagram</p>
            <p className="text-gray-400 text-sm">@{actor.name}</p>
          </div>
        </a>
      )}

      {/* TWITTER */}
      {actor.socialMedia?.twitter && (
        <a
          href={actor.socialMedia.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-4 rounded-xl flex items-center gap-4 hover:scale-[1.02] transition"
        >
          <div className="bg-blue-500 p-3 rounded-full">
            <Twitter className="text-white w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">Twitter</p>
            <p className="text-gray-400 text-sm">@{actor.name}</p>
          </div>
        </a>
      )}

      {/* IMDb */}
      {actor.socialMedia?.imdb && (
        <a
          href={actor.socialMedia.imdb}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-4 rounded-xl flex items-center gap-4 hover:scale-[1.02] transition"
        >
          <div className="bg-yellow-500 p-3 rounded-full">
            <Film className="text-black w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">IMDb</p>
            <p className="text-gray-400 text-sm">{actor.name}</p>
          </div>
        </a>
      )}
    </div>
  );
}