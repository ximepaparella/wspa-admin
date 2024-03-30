"use client";
import React from "react";
import { useState } from "react";
import useManageMemberships from "@/lib/hook/useManageMemberships";
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
  notification,
} from "antd";

const urlUpload = "http://localhost:3000/api/v1/memberships/upload";

const CreateMembership = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createMembership } = useManageMemberships();
  const { fileList, uploadedImageUrl, uploadFile, onChange, resetFileList } =
    useImageUpload("memberships");
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { Title, Text } = Typography;

  const onFinish = async (values) => {
    setIsSubmitting(true);
    try {
      const valuesWithTimestamp = {
        ...values,
        createdAt: new Date().toISOString(),
        featuredImage: uploadedImageUrl, // Use the URL from the hook
      };

      await createMembership(valuesWithTimestamp);

      resetFileList(); // Use the resetFileList function to clear the Upload component
      form.resetFields(); // Resets the form fields after successful submission
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Ha ocurrido un error creando la membresía.",
        placement: "topRight",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    notification.error({
      message: "Error",
      description: "Ha ocurrido un error creando la membresía.",
      placement: "topRight",
    });
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
          { title: "Wspa Dashboard" },
          { title: <a href="/dashboard/memberships">Memberships</a> },
          { title: <a href="/">Create New</a> },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
          <Title level={2}>Create Membership</Title>
          <Text>Create a new membership to be visible on the platform.</Text>
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
                  label="Nombre de la Membresía"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el nombre de la Membresía",
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
                  name="price"
                  label="Precio"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el precio",
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
                <Form.Item name="giftVoucherLink" label="Gift & Voucher Link">
                  <Input
                    size="middle"
                    placeholder="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847b62931d017b9c68ce3b29cc"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese la url",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Validez" name="validationText">
                  <Input size="middle" placeholder="VÁLIDO DURANTE 30 DÍAS." />
                </Form.Item>
              </Col>

              <Col span={24}>
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

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isSubmitting}>
                  Añadir membresía
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </section>
    </>
  );
};

export default CreateMembership;
