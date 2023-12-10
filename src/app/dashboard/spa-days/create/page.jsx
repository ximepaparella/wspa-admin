"use client";
import React from "react";
import { useState } from "react";
import useManageSpaDays from "@/lib/hook/useManageSpaDays";
import styles from "../../../page.module.scss";
import { UploadOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Input,
  Form,
  Row,
  Col,
  Button,
  Select,
  InputNumber,
  Divider,
  Typography,
  Upload,
  message,
  Checkbox,
} from "antd";

const CreateSpaDays = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle the loading state
  const [uploadedImage, setUploadedImage] = useState(null); // State to store the uploaded image URL
  const [fileList, setFileList] = useState([]); // State to manage uploaded files
  const { createSpaDay } = useManageSpaDays(); // Destructure the createTreatment function from your hook
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { Title, Text } = Typography;

  const onFinish = async (values) => {
    setIsSubmitting(true); // Indicate the start of form submission
    try {
      // Add the createdAt field with the current date/time to the values object
      const valuesWithTimestamp = {
        ...values,
        createdAt: new Date().toISOString(), // Use ISO string format for the date
        featuredImage: uploadedImage, // Pass the uploaded image URL to the form data
      };

      const result = await createSpaDay(valuesWithTimestamp);
      // If the API call was successful, show a success notification
      message.success({
        message: "Success",
        description: "Día de Spa creado con éxito.",
        placement: "topRight",
      });

      form.resetFields(); // Resets the form fields after successful submission
    } catch (error) {
      // If there was an error, show a failure notification
      message.error({
        message: "Error",
        description: "Error al crear el Día de Spa.",
        placement: "topRight",
      });
      console.error("Error creating treatment:", error);
    } finally {
      setIsSubmitting(false); // Indicate the end of form submission
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    // Show error notification
    message.error({
      message: "Error",
      description: "Error al crear el Día de Spa.",
      placement: "topRight",
    });
  };

  const onChangeCheckbox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChange = (info) => {
    if (info.file.status === "done") {
      // When the upload is successful, extract the URL from the response
      const imageUrl = info.file.response.url; // Assuming the response contains the URL
      message.success(`${info.file.name} file uploaded successfully`);
      
      // Now you can do something with the imageUrl, such as saving it in your component state
      // For example, you can save it in a state variable:
      // setImageUrl(imageUrl);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const uploadFile = async (options) => {
    const { file, onSuccess, onError } = options;
  
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      // Send a POST request to your server to upload the file
      const response = await fetch('YOUR_UPLOAD_API_ENDPOINT', {
        method: 'POST',
        body: formData,
        headers: {
          // Include any required headers here
          Authorization: 'Bearer YOUR_ACCESS_TOKEN',
        },
      });
  
      if (!response.ok) {
        throw new Error('Upload failed');
      }
  
      const responseData = await response.json();
  
      // Extract the image URL from the server response
      const imageUrl = responseData.imageUrl; // Modify this based on your server response
  
      // Call the onSuccess function with the file and image URL
      onSuccess(file, response);
  
      // Now you can do something with the imageUrl, such as saving it in your component state
      // For example, you can save it in a state variable:
      // setImageUrl(imageUrl);
    } catch (error) {
      // Handle any errors that occur during the upload
      console.error('Upload error:', error);
      onError(error);
    }
  };
  

  const props = {
    name: 'file',
    uploadFile,
    onChange,
  };

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Wspa Dashboard",
          },
          {
            title: <a href="/dahsboard/spa-days">Spa Days</a>,
          },
          { 
            title: <a href="/">Crear nuevo</a>,
          },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
          <Title level={2}>Día de Spa</Title>
          <Text>
            Crea un día de spa nuevo, el mismo será visible en la plataforma en
            la sección Circuitos de Spa
          </Text>
          <Divider />
        </div>
        <div className={styles["dashboard-content"]}>
          <Form
            name="spa-days"
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={[16, 0]}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Nombre del Día de Spa"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el nombre del Día de Spa",
                    },
                  ]}
                >
                  <Input
                    size="middle"
                    styles={{ width: "100%" }}
                    placeholder="W Day Spa"
                  />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item
                  name="duration"
                  label="Duración"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese la duración del día de Spa",
                    },
                  ]}
                >
                  <Input
                    style={{ width: "100%" }}
                    size="middle"
                    placeholder="3.30hs"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="featuredHome"
                  label="Destacado en Home"
                  valuePropName="checked"
                >
                  <Checkbox onChange={onChangeCheckbox}>Destacado</Checkbox>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="priceOnly"
                  label="Precio Individual"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el precio para 1 persona",
                    },
                  ]}
                >
                  <InputNumber
                    size="middle"
                    addonBefore="$"
                    style={{ width: "100%" }}
                    placeholder="$33000"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="priceDouble"
                  label="Precio Doble"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el precio para 2 personas",
                    },
                  ]}
                >
                  <InputNumber
                    size="middle"
                    addonBefore="$"
                    style={{ width: "100%" }}
                    placeholder="$40000"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="giftVoucherOnlyId"
                  label="Gift & Voucher ID (1 persona)"
                >
                  <Input
                    size="middle"
                    addonBefore="http://wyndhamnordelta.giftsandvouchers.com/?seccion=detalles&id="
                    placeholder="32"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese el nombre ID",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="giftVoucherDoubleId"
                  label="Gift & Voucher ID (2 personas)"
                >
                  <Input
                    size="middle"
                    addonBefore="http://wyndhamnordelta.giftsandvouchers.com/?seccion=detalles&id="
                    placeholder="32"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese el nombre ID",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Descuento" name="discount">
                  <Input
                    size="middle"
                    placeholder="MARTES Y MIÉRCOLES DE MUJERES 20% OFF"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="featuredImage"
                  label="Imagen"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese la imagen del día de spa",
                    },
                  ]}
                >
                  <Upload {...props} fileList={fileList}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Descripción"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese la descripción del Día de Spa",
                    },
                  ]}
                >
                  <TextArea
                    size="middle"
                    placeholder="Nuestro completo tratamiento de hidratación facial ayuda..."
                  />
                </Form.Item>
              </Col>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isSubmitting}>
                  Añadir día de spa
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </section>
    </>
  );
};

export default CreateSpaDays;
