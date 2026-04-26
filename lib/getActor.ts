export async function getActor(id: string) {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/actors/${id}`, {
      cache: "no-store", // 🔥 disables caching
    });

    if (!res.ok) return null;

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}