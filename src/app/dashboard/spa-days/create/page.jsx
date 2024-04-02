"use client";
import React from "react";
import { useState } from "react";
import useImageUpload from "@/lib/hook/useImageUpload";
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
  const { fileList, uploadedImageUrl, uploadFile, onChange, resetFileList } =
    useImageUpload("memberships");
  const { createSpaDay } = useManageSpaDays(); // Destructure the createTreatment function from your hook
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { Title, Text } = Typography;

  const onFinish = async (values) => {
    setIsSubmitting(true); // Indicate the start of form submission
    try {
      const valuesWithTimestamp = {
        ...values,
        createdAt: new Date().toISOString(),
        featuredImage: uploadedImageUrl, // Use the URL from the hook
      };

      const result = await createSpaDay(valuesWithTimestamp);

      // If the API call was successful, show a success notification
      message.success({
        message: "Success",
        description: "Día de Spa creado con éxito.",
        placement: "topRight",
      });
      resetFileList(); // Use the resetFileList function to clear the Upload component
      form.resetFields(); // Resets the form fields after successful submission
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Ha ocurrido un error creando la membresía.",
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

  const uploadProps = {
    name: "file",
    fileList,
    onChange,
    customRequest: uploadFile,
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
                  rules={[
                    {
                      required: true,
                      message: "Por favor subir una imagen para la membresía.",
                    },
                  ]}
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
                  rules={[
                    {
                      required: true,
                      message: "Por favor subir una imagen para la membresía.",
                    },
                  ]}
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
                  label="Image"
                  rules={[
                    {
                      required: true,
                      message: "Por favor subir una imagen para la membresía.",
                    },
                  ]}
                >
                  <Upload {...uploadProps}>
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
