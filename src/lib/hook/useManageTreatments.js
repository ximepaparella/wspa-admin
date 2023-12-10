import { message, notification } from "antd";

const useManageTreatments = () => {
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/treatments`;

  const createTreatment = async (treatmentData) => {
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(treatmentData),
      });

      // Log the response or error from the server
      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (!response.ok)
        throw new Error(responseData.message || "Network response was not ok");

      message.success("Treatment created successfully!");
      notification.success({
        message: "Success",
        description: "Tratamiento creado con éxito.",
        placement: "topRight",
      });
      return responseData; // Return the created treatment
    } catch (error) {
      notification.error({
        message: "Error",
        description: error,
        placement: "topRight",
      });
      message.error("Error creating treatment");
      console.error("Error creating treatment:", error);
    }
  };

  const updateTreatment = async (id, treatmentData) => {
    try {
      const response = await fetch(`${apiURL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(treatmentData),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      notification.success({
        message: "Success",
        description: "Tratamiento actualizado correctamente",
        placement: "topRight",
      });
      return response.json();
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.toString(),
        placement: "topRight",
      });
      console.error("Hubo un error al actualizar el tratamiento:", error);
    }
  };

  const deleteTreatment = async (id) => {
    try {
      const response = await fetch(`${apiURL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Network response was not ok");
      notification.success({
        message: "Success",
        description: "Tratamiento eliminado correctamente",
        placement: "topRight",
      });
      return response.json();
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.toString(),
        placement: "topRight",
      });
      console.error("Hubo un error al eliminar el tratamiento:", error);
    }
  };

  const getTreatment = async (id) => {
    try {
      const response = await fetch(`${apiURL}/${id}`);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    } catch (error) {
      console.error("Hubo un error al obtener el tratamiento:", error);
    }
  };

  return { createTreatment, updateTreatment, deleteTreatment, getTreatment };
};

export default useManageTreatments;
