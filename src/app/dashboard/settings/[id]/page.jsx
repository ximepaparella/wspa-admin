"use client";
import React, { useState, useEffect, use } from "react";
import useManageInformation from "@/lib/hook/useManageInformation";
import { useRouter } from "next/navigation";
import styles from "../../../page.module.scss";
import {
  notification,
  Form,
  Input,
  Button,
  Breadcrumb,
  Typography,
  Divider,
  Col,
  Row,
} from "antd";

export default function Settings({ params }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { updateInformation, getInformation } = useManageInformation();
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { Title, Text } = Typography;

  useEffect(() => {
    if (params.id) {
      const fetchInformation = async () => {
        try {
          const information = await getInformation(params.id);
          form.setFieldsValue(information[0]); // Set field values into the form
          console.log('Information',information);
        } catch (error) {
          console.error('Error fetching treatment:', error);
        }
      };
      fetchInformation();
    }
  }, [params.id]);

  const onFinish = async (values) => {
    setIsSubmitting(true);
    const information = await updateInformation(params.id, values);
    console.log('Information values',information);
    setIsSubmitting(false);
  };

  const onFinishFailed = (errorInfo) => {
    notification.error({
      message: "Error",
      description:
        "Hubo un error al enviar el formulario. Por favor revise los campos e intente nuevamente.",
      placement: "topRight",
    });
  };

  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Wspa Dashboard",
          },
          {
            title: <a href="/dahsboard/treatments">Información General</a>,
          },
          {
            title: <a href="/">Editar información</a>,
          },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
          <Title level={2}>Información general</Title>
          <Text>
            Realizá los cambios necesarios y hace click en el botón guardar para
            editar la información del sitio.
          </Text>
          <Divider />
        </div>
        <div className={styles["dashboard-content"]}>
          <Form
            name="information"
            form={form} // Ensure that the form object is correctly passed here
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={[16, 0]}>
              <Col span={12}>
                <Form.Item
                  name="address"
                  label="Dirección"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese la dirección del spa",
                    },
                  ]}
                >
                  <Input
                    size="middle"
                    styles={{ width: "100%" }}
                    placeholder="Avenida del puerto 240, Bahía Grande, Nordelta"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="whatsapp"
                  label="Numero de Whatsapp"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el número de whatsapp",
                    },
                  ]}
                >
                  <Input
                    style={{ width: "100%" }}
                    size="middle"
                    placeholder="+5491134209650"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="whatsappText" label="Texto Whatsapp Flotante">
                  <Input
                    size="middle"
                    style={{ width: "100%" }}
                    placeholder="Turnos y consultas por Whatsapp"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="whatsappLink"
                  label="Texto Personalizado de Whatsapp"
                >
                  <Input
                    size="middle"
                    placeholder="Hola, quiero realizar una consulta"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese el mensaje personalizado de Whatsapp",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Horarios de Atención" name="times">
                  <Input
                    size="middle"
                    placeholder="Martes de 11 a 20hs y de Miercóles a domingo de 10 a 21hs"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="copyright"
                  label="Copyright"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el copyright",
                    },
                  ]}
                >
                  <Input
                    size="middle"
                    style={{ width: "100%" }}
                    placeholder="Copyright © Wyndham Spa. Todos los derechos reservados. By Estudio Equis."
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item name="facebookLink" label="Facebook">
                  <Input
                    size="middle"
                    placeholder="https://www.facebook.com/HotelWyndhamNordelta"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Instagram" name="instagramLink">
                  <Input
                    size="middle"
                    placeholder="https://www.instagram.com/hotelwyndhamnordelta/"
                  />
                </Form.Item>
              </Col>

              <Divider />

              <Col span={24}>
                <Title level={4}>Editar Politicas:</Title>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Políticas del Spa"
                  name="policesText"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese las politicas",
                    },
                  ]}
                >
                  <TextArea size="middle" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Reservas"
                  name="bookingsText"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese las politicas",
                    },
                  ]}
                >
                  <TextArea size="middle" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Cancelaciones"
                  name="cancelingText"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese las politicas",
                    },
                  ]}
                >
                  <TextArea size="middle" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Precios"
                  name="pricesText"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese las politicas",
                    },
                  ]}
                >
                  <TextArea size="middle" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Circuito de aguas"
                  name="circuitText"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese las politicas",
                    },
                  ]}
                >
                  <TextArea size="middle" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Formas de pago"
                  name="paymentText"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese las politicas",
                    },
                  ]}
                >
                  <TextArea size="middle" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Regalar experiencias"
                  name="giftText"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese las politicas",
                    },
                  ]}
                >
                  <TextArea size="middle" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Cuidados personales"
                  name="personalCareText"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese las politicas",
                    },
                  ]}
                >
                  <TextArea size="middle" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  label="Recomendaciones para embarazadas"
                  name="pregnantText"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese las politicas",
                    },
                  ]}
                >
                  <TextArea size="middle" />
                </Form.Item>
              </Col>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isSubmitting}>
                  Actualizar Informción General
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </section>
    </div>
  );
}
