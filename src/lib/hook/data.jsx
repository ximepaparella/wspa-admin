export async function fetchFacialTreatments() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/treatments`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  } catch (error) {
    console.error("Hubo un error al obtener los tratamientos:", error);
  }
}

export async function fetchBodyTreatments() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/treatments`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    } catch (error) {
      console.error("Hubo un error al obtener los tratamientos:", error);
    }
  }

export async function fetchMemberships() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/memberships`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  } catch (error) {
    console.error("Error fetching Membresías:", error);
  }
}

export async function fetchWatterCircuits() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/watter-circuit/`);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  } catch (error) {
    console.error("Hubo un error al obtener los Circuito de Aguas:", error);
  }
}

