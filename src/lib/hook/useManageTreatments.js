import { message, notification } from 'antd';

const useManageTreatments = () => {
  const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/treatments`;

  const createTreatment = async (treatmentData) => {
    // This log should show the treatment data when the form is submitted
    console.log('Attempting to create treatment with data:', treatmentData);
    
    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(treatmentData),
      });
      
      // Log the response or error from the server
      const responseData = await response.json();
      console.log('Response data:', responseData);
      
      if (!response.ok) throw new Error(responseData.message || 'Network response was not ok');
      
      message.success('Treatment created successfully!');
      notification.success({
        message: 'Success',
        description: 'Tratamiento creado con éxito.',
        placement: 'topRight',
      });
      return responseData; // Return the created treatment
    } catch (error) {
      notification.error({
        message: 'Error',
        description: error,
        placement: 'topRight',
      });
      message.error('Error creating treatment');
      console.error('Error creating treatment:', error);
    }
  };

  const updateTreatment = async (id, treatmentData) => {
  //Update
  };

  const deleteTreatment = async (id) => {
   //Delete
  };

  return { createTreatment, updateTreatment, deleteTreatment };
};

export default useManageTreatments;