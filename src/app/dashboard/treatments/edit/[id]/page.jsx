"use client";
import React, { useState, useEffect, use } from "react";
import useManageTreatments from "@/lib/hook/useManageTreatments";
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

export default function EditTreatment ({params}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { updateTreatment, getTreatment } = useManageTreatments();
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { Title, Text } = Typography;

  useEffect(() => {
    if (params.id) {
      const fetchTreatment = async () => {
        const treatment = await getTreatment(params.id);
        form.setFieldsValue(treatment);
      };
      fetchTreatment();
    }
  }, [params.id]);


  const onFinish = async (values) => {
    setIsSubmitting(true);
    const treatment = await updateTreatment(params.id, values);
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
            title: <a href="/dahsboard/treatments">Tratamientos</a>,
          },
          {
            title: <a href="/">Editar tratamiento</a>,
          },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
          <Title level={2}>Editar Tratamiento:</Title>
          <Text>
            Realizá los cambios necesarios y hace click en el botón guardar para
            editar el tratamiento.
          </Text>
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
                  <InputNumber
                    style={{ width: "100%" }}
                    size="middle"
                    placeholder="50'"
                  />
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
                    style={{ width: "100%" }}
                    placeholder="$23000"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="salePrice" label="Precio Oferta">
                  <InputNumber
                    size="middle"
                    addonBefore="$"
                    style={{ width: "100%" }}
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
                <Form.Item
                  label="Categoría"
                  name="category"
                  rules={[
                    {
                      required: true,
                      message: "Seleccione una categoría",
                    },
                  ]}
                >
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
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isSubmitting}>
                  Actualizar tratamiento
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </section>
    </div>
  );
};


