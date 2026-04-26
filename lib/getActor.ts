import { actors } from "@/lib/data";

// ✅ Infer correct type from your data
export type Actor = (typeof actors)[number];

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