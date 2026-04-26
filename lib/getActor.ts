import { actors } from "@/lib/data";

// ✅ Automatically infer correct type from your data
type Actor = (typeof actors)[number];

export async function getActor(id: string): Promise<Actor | null> {
  try {
    const actor = actors.find(
      (a) => String(a.id) === String(id)
    );

    return actor || null;
  } catch (error) {
    console.error("getActor error:", error);
    return null;
  }
}