import { message, notification } from "antd";

const useManageInformation = () => {
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/information/`;

  const getInformation = async (id) => {
    try {
      const response = await fetch(apiURL);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    } catch (error) {
      console.error("Hubo un error al obtener la información:", error);
    }
  };

  const updateInformation = async (id, values) => {
    try {
      const response = await fetch(`${apiURL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      notification.success({
        message: "Success",
        description: "Información actualizada correctamente",
        placement: "topRight",
      });
      return response.json();
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.toString(),
        placement: "topRight",
      });
      console.error("Hubo un error al actualizar la información:", error);
    }
  };

  return { getInformation, updateInformation };
};

export default useManageInformation;