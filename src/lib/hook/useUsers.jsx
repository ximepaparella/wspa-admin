import { useState, useEffect } from "react";
import { Space, Popconfirm, message } from "antd";
import useManageUsers from "./useManageUsers";
import Link from "next/link";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAllUsers, deleteUser } = useManageUsers();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching water users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    {
      title: "Nombre de usuario",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link href={`/dashboard/users/edit/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Rol",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Creado",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Acciones",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link href={`/dashboard/watter-circuits/edit/${record.id}`}>
            Editar
          </Link>
          <Popconfirm
            title="¿Estás seguro que deseas eliminar este circuito de Agua?"
            onConfirm={() => deleteUser(record.id)}
            onCancel={() => message.info("Cancelado")}
            okText="Eliminar"
            cancelText="Cancelar"
          >
            <a href="#">Eliminar</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return { users, loading, columns };
};

export default useUsers;
