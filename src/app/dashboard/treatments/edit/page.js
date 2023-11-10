"use client";
import React from "react";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import styles from "../../../page.module.scss";
import { Breadcrumb, Input, Form, Row, Col, Button, Select, InputNumber, Divider, Typography } from "antd";

const EditTreatment = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { Title, Text } = Typography;

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <DashboardLayout>
      <Breadcrumb
        items={[
          {
            title: "Wspa Dashboard",
          },
          {
            title: <a href="/dahsboard/treatments">Tratamientos</a>,
          },
          {
            title: <a href="/">Crear nuevo</a>,
          },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
        <Title level={2} >Tratamientos</Title>
          <Text>Crea un tratamiento nuevo, el mismo será visible en la plataforma en la sección Tratamientos</Text>
          <Divider />
        </div>
        <div className={styles["dashboard-content"]}>
          <Form
            name="treatments"
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
                  label="Nombre del tratamiento"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el nombre del tratamiento",
                    },
                  ]}
                >
                  <Input
                    size="middle"
                    styles={{ width: "100%" }}
                    placeholder="Shock de hidratación"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="duration"
                  label="Duración"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese la duración del tratamiento",
                    },
                  ]}
                >
                  <Input size="middle" placeholder="50'" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="price"
                  label="Precio"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el precio del tratamiento",
                    },
                  ]}
                >
                  <InputNumber
                    size="middle"
                    addonBefore="$"
                    style={{ width: '100%' }}
                    placeholder="$23000"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="salePrice" label="Precio Oferta">
                  <InputNumber
                    size="middle"
                    addonBefore="$"
                    style={{ width: '100%' }}
                    placeholder="$20000"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item name="giftLinkId" label="Gift & Voucher ID">
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
                <Form.Item label="Adicionales" name="aditionals">
                  <Input
                    size="middle"
                    placeholder="Ej: + Infusión + Pastereria"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Categoría" name="category">
                  <Select
                    size="middle"
                    options={[
                      {
                        value: "Tratamientos Faciales",
                        label: "Tratamientos Faciales",
                      },
                      {
                        value: "Tratamientos Corporales",
                        label: "Tratamientos Corporales",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Descripción"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese la descripción del tratamiento",
                    },
                  ]}
                >
                  <TextArea
                    size="middle"
                    placeholder="Nuestro completo tratamiento de hidratación facial ayuda..."
                  />
                </Form.Item>
              </Col>
              <Button type="primary" htmlType="submit">
                Añadir tratamiento
              </Button>
            </Row>
          </Form>
        </div>
      </section>
    </DashboardLayout>
  );
};


export default EditTreatment