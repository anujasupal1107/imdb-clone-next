export async function getActor(id: string) {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/actors/${id}`, {
      cache: "no-store", // 🔥 IMPORTANT
    });

    if (!res.ok) {
      console.error("API error:", res.status);
      return null;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
}