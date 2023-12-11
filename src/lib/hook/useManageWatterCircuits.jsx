import { message, notification } from "antd";

const useManageWatterCircuits = () => {
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/watter-circuit/`;

  const createWatterCircuit = async (watterCircuitData) => {
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(watterCircuitData),
      });

      // Log the response or error from the server
      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (!response.ok)
        throw new Error(responseData.message || "Network response was not ok");

      notification.success({
        message: "Success",
        description: "Circuito de Agua creado con éxito.",
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

  const updateWatterCircuit = async (id, watterCircuitData) => {
    try {
  
      const response = await fetch(`${apiURL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) throw new Error("Network response was not ok");
  
      notification.success({
        message: "Success",
        description: "Circuito de Agua actualizado correctamente",
        placement: "topRight",
      });
  
      return response.json();
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.toString(),
        placement: "topRight",
      });
  
      console.error("Hubo un error al actualizar el Circuito de Agua:", error);
    }
  };

  const deleteWatterCircuit = async (id) => {
    try {
      const response = await fetch(`${apiURL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Network response was not ok");
      notification.success({
        message: "Success",
        description: "Circuito de Agua eliminado correctamente",
        placement: "topRight",
      });
      return response.json();
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.toString(),
        placement: "topRight",
      });
      console.error("Hubo un error al eliminar el Circuito de Agua:", error);
    }
  };

  const getWatterCircuit = async (id) => {
    try {
      const response = await fetch(`${apiURL}/${id}`);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    } catch (error) {
      console.error("Hubo un error al obtener el Circuito de Agua:", error);
    }
  };

  const getAllWatterCircuits = async () => {
    try {
      const response = await fetch(apiURL);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    } catch (error) {
      console.error("Hubo un error al obtener los Circuito de Aguas:", error);
    }
  };

  return { createWatterCircuit, updateWatterCircuit, deleteWatterCircuit, getWatterCircuit, getAllWatterCircuits };
};

export default useManageWatterCircuits;
