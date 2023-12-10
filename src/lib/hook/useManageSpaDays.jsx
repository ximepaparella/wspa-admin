import { message, notification } from "antd";

const useManageSpaDays = () => {
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/spa-days`;

  const createSpaDay = async (spaDayData) => {
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(spaDayData),
      });

      // Log the response or error from the server
      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (!response.ok)
        throw new Error(responseData.message || "Network response was not ok");

      notification.success({
        message: "Success",
        description: "Spa day creado con éxito.",
        placement: "topRight",
      });
      return responseData; // Return the created spa day
    } catch (error) {
      notification.error({
        message: "Error",
        description: error,
        placement: "topRight",
      });
      message.error("Error creating spa day");
      console.error("Error creating spa day:", error);
    }
  };

  const updateSpaDay = async (id, spaDayData) => {
    try {
      // Create a new object to hold only the fields that are provided
      const requestBody = {};
      if (typeof spaDayData.aditionals === "string") {
        requestBody.aditionals = spaDayData.aditionals;
      }
      if (typeof spaDayData.salePrice === "number") {
        requestBody.salePrice = spaDayData.salePrice;
      }

      const response = await fetch(`${apiURL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      notification.success({
        message: "Success",
        description: "Spa day actualizado correctamente",
        placement: "topRight",
      });
      return response.json();
    } catch (error) {
      notification.error({
        message: "Error",
        description: error,
        placement: "topRight",
      });
      console.error("Error updating spa day:", error);
    }
  };

  const deleteSpaDay = async (id) => {
    try {
      const response = await fetch(`${apiURL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Network response was not ok");

      notification.success({
        message: "Success",
        description: "Spa day eliminado correctamente",
        placement: "topRight",
      });
      return response.json();
    } catch (error) {
      notification.error({
        message: "Error",
        description: error,
        placement: "topRight",
      });
      console.error("Error deleting spa day:", error);
    }
  };

  const getAllSpaDays = async () => {
    try {
      const response = await fetch(apiURL);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    } catch (error) {
      console.error("Error fetching spa days:", error);
    }
  };

  return { createSpaDay, updateSpaDay, deleteSpaDay, getAllSpaDays };
};

export default useManageSpaDays;
