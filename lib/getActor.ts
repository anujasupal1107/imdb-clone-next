export async function getActor(id: string) {
  try {
    const res = await fetch(`/api/actors/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    return res.json();
  } catch {
    return null;
  }
}