"use client";
import React from "react";
import { useState } from "react";
import useManageUsers from "@/lib/hook/useManageUsers";
import styles from "../../../page.module.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import {
  Breadcrumb,
  Input,
  Form,
  Row,
  Col,
  Button,
  Select,
  Divider,
  Typography,
  notification
} from "antd";

const CreateUsers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle the loading state
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const { createUser } = useManageUsers(); // Destructure the useUsers function from your hook
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

      const result = await createUser(valuesWithTimestamp);
      // If the API call was successful, show a success notification
      notification.success({
        message: "Usuario creado",
        description: "Usuario creado con éxito.",
        placement: "topRight",
      });

      form.resetFields(); // Resets the form fields after successful submission
    } catch (error) {
      // If there was an error, show a failure notification
      notification.success({
        message: "No se pudo crear el usuario",
        description: "Verifique los datos ingresados",
        placement: "topRight",
      });
    } finally {
      setIsSubmitting(false); // Indicate the end of form submission
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    // Show error notification
    notification.success({
      message: "No se pudo crear el usuario",
      description: "Verifique los datos ingresados",
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
            title: <a href="/dahsboard/users">Usuarios</a>,
          },
          {
            title: <a href="/">Crear nuevo</a>,
          },
        ]}
      />

      <section className={styles["dashboard-container"]}>
        <div className={styles["dashboard-title"]}>
          <Title level={2}>Usuarios</Title>
          <Text>
            Crea un usuario nuevo, el mismo tendrá los permisos en la plataforma
            según el rol que se le asigne.
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
                  label="Nombre del usuario"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el nombre del usuario",
                    },
                  ]}
                >
                  <Input
                    size="middle"
                    styles={{ width: "100%" }}
                    placeholder="Juan Perez"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="password"
                  label="Contraseña"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese la contraseña",
                    },
                  ]}
                >
                  <Input.Password
                    style={{ width: "100%" }}
                    size="middle"
                    placeholder="******"
                    autoComplete="off"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Correo electrónico"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese su correo electrónico",
                    },
                  ]}
                >
                  <Input
                    size="middle"
                    style={{ width: "100%" }}
                    placeholder="correo@info.com"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="role" label="Rol">
                  <Select
                    value="administrator"
                    style={{ width: "100%" }}
                    options={[
                      {
                        value: "administrator",
                        label: "Administrador",
                      },
                      {
                        value: "customer",
                        label: "Cliente",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isSubmitting}>
                  Añadir usuario
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </section>
    </>
  );
};

export default CreateUsers;
