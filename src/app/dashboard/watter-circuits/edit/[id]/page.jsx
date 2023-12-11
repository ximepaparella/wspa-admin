"use client";
import React, { useState, useEffect, use } from "react";
import useManageWatterCircuits from "@/lib/hook/useManageWatterCircuits";
import styles from "../../../../page.module.scss";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import {
  notification,
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Breadcrumb,
  Typography,
  Divider,
  Col,
  Row,
} from "antd";

export default function EditWatterCircuit({ params }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle the loading state
  const { updateWatterCircuit, getWatterCircuit } = useManageWatterCircuits(); // Destructure the updateWatterCircuit function from your hook
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { Title, Text } = Typography;


  useEffect(() => {
    if (params.id) {
      const fetchWatterCircuit = async () => {
        const treatment = await getWatterCircuit(params.id);
        form.setFieldsValue(treatment);
      };
      fetchWatterCircuit();
    }
  }, [params.id]);

  const onFinish = async (values) => {
    setIsSubmitting(true);
    const watterCircuit = await updateWatterCircuit(params.id, values);
    setIsSubmitting(false);
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
                <Form.Item name="times" label="Horarios">
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
                  Guardar circuito de Agua
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </section>
    </>
  );
}
