export async function getActor(id: string) {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/actors/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("API failed:", res.status);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}