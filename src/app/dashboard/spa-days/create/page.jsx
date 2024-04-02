"use client";
import React from "react";
import { useState } from "react";
import useManageSpaDays from "@/lib/hook/useManageSpaDays";
import useImageUpload from "@/lib/hook/useImageUpload"; // Import the useImageUpload hook
import styles from "../../../page.module.scss";
import { UploadOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Input,
  Form,
  Row,
  Col,
  Button,
  InputNumber,
  Divider,
  Typography,
  Upload,
  message,
  Checkbox,
} from "antd";

const CreateSpaDays = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createSpaDay } = useManageSpaDays();
  const { fileList, uploadFile, onChange, resetFileList } =
    useImageUpload("spaDays"); // Use "spaDays" for the entityType
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { Title, Text } = Typography;

  const onChangeCheckbox = (e) => {
    console.log(`Checkbox checked: ${e.target.checked}`);
  };

  const onFinish = async (values) => {
    setIsSubmitting(true);
    try {
      const newSpaDay = {
        ...values,
        createdAt: new Date().toISOString(),
        featuredImage:
          fileList.length > 0 ? fileList[0].response.imageUrl : null, // Use the image URL from the upload response
      };

      await createSpaDay(newSpaDay);
      message.success("Día de Spa creado con éxito.");
      form.resetFields();
      resetFileList(); // Reset the file list after successful submission
    } catch (error) {
      message.error("Error al crear el Día de Spa.");
      console.error("Error creating Spa Day:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
    message.error("Error al crear el Día de Spa.");
  };

  const uploadProps = {
    name: "file",
    fileList,
    onChange,
    customRequest: uploadFile, // Use the customRequest from the hook
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
          <Title level={2}>Editar día de Spa</Title>
          <Text>
            Editar un día de spa, el mismo será visible en la plataforma en la
            sección Circuitos de Spa
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
                      message: "Por favor, sube una imagen para el día de spa",
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
