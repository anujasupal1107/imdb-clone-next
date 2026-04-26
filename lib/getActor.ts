export async function getActor(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/actors/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("API failed:", res.status);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
}