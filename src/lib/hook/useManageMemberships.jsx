import { message, notification } from "antd";


const useManageMemberships = () => {
    const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/memberships`;
  
    const createMembership = async (membershipData) => {
      try {
        const response = await fetch(apiURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(membershipData),
        });
  
        // Log the response or error from the server
        const responseData = await response.json();
        console.log("Response data:", responseData);
  
        if (!response.ok)
          throw new Error(responseData.message || "Network response was not ok");
  
        notification.success({
          message: "Success",
          description: "Membresía creada con éxito.",
          placement: "topRight",
        });
        return responseData; // Return the created membership
      } catch (error) {
        notification.error({
          message: "Error",
          description: error,
          placement: "topRight",
        });
        message.error("Error creating membership");
        console.error("Error creating membership:", error);
      }
    };
  
    const updateSpaDay = async (id, membershipData) => {
      try {
        // Create a new object to hold only the fields that are provided
        const requestBody = {};
        if (typeof membershipData.aditionals === "string") {
          requestBody.aditionals = membershipData.aditionals;
        }
        if (typeof membershipData.salePrice === "number") {
          requestBody.salePrice = membershipData.salePrice;
        }
  
        const response = await fetch(`${apiURL}/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });
  
        if (!response.ok) throw new Error("Network response was not ok");
  
        notification.success({
          message: "Success",
          description: "Membresía actualizado correctamente",
          placement: "topRight",
        });
        return response.json();
      } catch (error) {
        notification.error({
          message: "Error",
          description: error,
          placement: "topRight",
        });
        console.error("Error updating Membresía:", error);
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
          description: "Membresía eliminada correctamente",
          placement: "topRight",
        });
        return response.json();
      } catch (error) {
        notification.error({
          message: "Error",
          description: error,
          placement: "topRight",
        });
        console.error("Error deleting Membresía:", error);
      }
    };
  
    const getAllMemberships = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      } catch (error) {
        console.error("Error fetching Membresías:", error);
      }
    };
  
    return { createMembership, updateSpaDay, deleteSpaDay, getAllMemberships };
  };
  
  export default useManageMemberships;