// useImageUpload.js
import { useState } from "react";
import { message } from "antd";

const useImageUpload = (entityType) => {
  // Map entity types to environment variables
  const uploadUrls = {
    memberships: process.env.NEXT_PUBLIC_UPLOAD_URL_MEMBERSHIPS,
    users: process.env.NEXT_PUBLIC_UPLOAD_URL_USERS,
    spaDays: process.env.NEXT_PUBLIC_UPLOAD_URL_SPADAYS,
  };

  const [fileList, setFileList] = useState([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const resetFileList = () => setFileList([]);

  const uploadUrl = uploadUrls[entityType]; // Select the URL based on the entity type

  const uploadFile = async (options) => {
    const { file, onSuccess, onError } = options;
    const formData = new FormData();
    formData.append("image", file); // Adjust 'image' if your backend expects a different key

    setIsUploading(true);

    try {
      const response = await fetch(uploadUrl, {
        // Use the provided upload URL
        method: "POST",
        body: formData,
        // Include any necessary headers, e.g., for authentication
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const responseData = await response.json();
      const imageUrl = responseData.imageUrl; // Adjust according to your API response

      onSuccess(file, imageUrl);
      setUploadedImageUrl(imageUrl);
      message.success(`Se ha subido el archivo ${file.name}`);
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
      onError(error);
      message.error(`${file.name} no se ha podido subir, intente nuevamente.`);
    } finally {
      setIsUploading(false);
    }
  };

  const onChange = ({ file, fileList: newFileList }) => {
    // Limit the fileList to the last selected file
    const latestFileList = newFileList.slice(-1);

    setFileList(latestFileList);

    if (file.status === "done") {
      message.success(`${file.name} subido correctamente.`);
      // Assuming the file.response is the URL of the uploaded image
      setUploadedImageUrl(file.response);
    } else if (file.status === "error") {
      message.error(`${file.name} no se ha podido subir.`);
    }
  };

  return {
    fileList,
    uploadedImageUrl,
    isUploading,
    uploadFile,
    onChange,
    resetFileList, // Add this line to return the reset function
  };
};

export default useImageUpload;
