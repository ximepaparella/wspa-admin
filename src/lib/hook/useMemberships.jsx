import { useState, useEffect } from "react";
import { Space, Tag, Popconfirm, message } from "antd";
import useManageMemberships from "./useManageMemberships";
import Link from "next/link";

const useMemberships = () => {
    const [memberships, setMemberships] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getAllMemberships, deleteMembership } = useManageMemberships();
  
    useEffect(() => {
      const fetchMemberships = async () => {
        const memberships = await getAllMemberships();
        setMemberships(memberships);
        setLoading(false);
      };
      fetchMemberships();
    }, [getAllMemberships]);
  
    const columns = [
      {
        title: "Nombre",
        dataIndex: "name",
        key: "name",
        render: (text, record) => (
          <Link href={`/dashboard/memberships/edit/${record.id}`}>{text}</Link>
        ),
      },
      {
        title: "Precio",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Acciones",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <Link href={`/dashboard/memberships/edit/${record.id}`}>Editar</Link>
            <Popconfirm
              title="¿Estás seguro que deseas eliminar esta membresía?"
              onConfirm={() => deleteMembership(record.id)}
              onCancel={() => message.info("Cancelado")}
              okText="Sí"
              cancelText="No"
            >
              <a href="#">Eliminar</a>
            </Popconfirm>
          </Space>
        ),
      },
    ];
  
    return { memberships, loading, columns };
  };
  
  export default useMemberships;
  