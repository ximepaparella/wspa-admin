"use client";
import React from "react";
import { useState, useEffect } from "react";
import useManageUsers from "@/lib/hook/useManageUsers";
import styles from "../../../../page.module.scss";
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


export default function EditUsers ({params}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { updateUser, getUser } = useManageUsers();
  const [form] = Form.useForm();
  const { Title, Text } = Typography;

  useEffect(() => {
    if (params.id) {
      const fetchUser = async () => {
        const user = await getUser(params.id);
        form.setFieldsValue(user);
      };
      fetchUser();
    }
  }, [params.id]);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onFinish = async (values) => {
    setIsSubmitting(true);
    const user = await updateUser(params.id, values);
    console.log(values);
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
              <Select onChange={handleChange}>
                <Select.Option value="administrator">Administrador</Select.Option>
                <Select.Option value="customer">Cliente</Select.Option>
              </Select>
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

