"use client";
import React from "react";
import { useState } from "react";
import useManageWatterCircuits from "@/lib/hook/useManageWatterCircuits";
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

const CreateWatterCircuit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle the loading state
  const { createWatterCircuit } = useManageWatterCircuits(); // Destructure the createWatterCircuit function from your hook
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
      };

      const result = await createWatterCircuit(valuesWithTimestamp);
      // If the API call was successful, show a success notification
      message.success({
        message: "Success",
        description: "Circuito de Agua creado con éxito.",
        placement: "topRight",
      });

      form.resetFields(); // Resets the form fields after successful submission
    } catch (error) {
      // If there was an error, show a failure notification
      message.error({
        message: "Error",
        description: "Error al crear el Circuito de Agua.",
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
      description: "Error al crear el Circuito de Agua.",
      placement: "topRight",
    });
  };

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Wspa Dashboard",
          },
          {
            title: <a href="/dahsboard/watter-circuits">Circuitos de Agua</a>,
          },
          {
            title: <a href="/">Crear nuevo</a>,
          },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
          <Title level={2}>Circuitos de Agua</Title>
          <Text>
            Crea un circuito de agua, el mismo será visible en la plataforma en
            la sección Membresías.
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
                  label="Nombre del Circuito"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el nombre del circuito",
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

              <Col span={12}>
                <Form.Item
                  name="includes"
                  label="Incluye"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese lo que incluye el día de spa",
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

              <Col span={12}>
                <Form.Item
                  name="clientPrice"
                  label="Precio de huéspedes"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el precio para huéspedes",
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
                  name="visitorPrice"
                  label="Precio Visitantes"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el precio para visitantes",
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

              <Col span={24}>
                <Form.Item
                  name="times"
                  label="Horarios"
                >
                  <Input
                    size="middle"
                    placeholder="MARTES DE 11 A 20HS. MIÉRCOLES A DOMINGOS INCLUSIVE DE 10 A 21HS."
                    rules={[
                      {
                        required: true,
                        message: "Ingrese los horarios",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isSubmitting}>
                  Añadir circuito de Agua
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </section>
    </>
  );
};

export default CreateWatterCircuit;
