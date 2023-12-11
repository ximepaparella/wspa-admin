import { message, notification } from "antd";

const useManageUsers = () => {
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/users/`;

  const createUser = async (userData) => {
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      // Log the response or error from the server
      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (!response.ok)
        throw new Error(responseData.message || "Network response was not ok");

      notification.success({
        message: "Success",
        description: "Usuario creado con éxito.",
        placement: "topRight",
      });
      return responseData; // Return the created user
    } catch (error) {
      notification.error({
        message: "Error",
        description: error,
        placement: "topRight",
      });
      message.error("Error creating user");
      console.error("Error creating user:", error);
    }
  };

  const updateUser = async (id, userData) => {
    try {
      // Create a new object to hold only the fields that are provided
      const requestBody = {};
      if (typeof userData.aditionals === 'string') {
        requestBody.aditionals = userData.aditionals;
      }
      if (typeof userData.salePrice === 'number') {
        requestBody.salePrice = userData.salePrice;
      }
  
      const response = await fetch(`${apiURL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) throw new Error("Network response was not ok");
  
      notification.success({
        message: "Success",
        description: "Usuario actualizado correctamente",
        placement: "topRight",
      });
  
      return response.json();
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.toString(),
        placement: "topRight",
      });
  
      console.error("Hubo un error al actualizar el usuario:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${apiURL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Network response was not ok");
      notification.success({
        message: "Success",
        description: "Usuario eliminado correctamente",
        placement: "topRight",
      });
      return response.json();
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.toString(),
        placement: "topRight",
      });
      console.error("Hubo un error al eliminar el usuario:", error);
    }
  };

  const getUser = async (id) => {
    try {
      const response = await fetch(`${apiURL}/${id}`);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    } catch (error) {
      console.error("Hubo un error al obtener el Usuario:", error);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await fetch(apiURL);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    } catch (error) {
      console.error("Hubo un error al obtener los usuarios:", error);
    }
  };

  return { createUser, updateUser, deleteUser, getUser, getAllUsers };
};

export default useManageUsers;
