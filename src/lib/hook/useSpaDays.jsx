import { useState, useEffect } from "react";
import { Space, Tag, Popconfirm, message } from "antd";
import useManageSpaDays from "./useManageSpaDays";
import Link from "next/link";

const useSpaDays = () => {
  const [spaDays, setSpaDays] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAllSpaDays, deleteSpaDay } = useManageSpaDays();

  useEffect(() => {
    const fetchSpaDays = async () => {
      const spaDays = await getAllSpaDays();
      setSpaDays(spaDays);
      setLoading(false);
    };
    fetchSpaDays();
  }, [getAllSpaDays]);

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link href={`/dashboard/spadays/edit/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Precio Oferta",
      dataIndex: "salePrice",
      key: "salePrice",
    },
  
    {
      title: "Acciones",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link href={`/dashboard/spadays/edit/${record.id}`}>Editar</Link>
          <Popconfirm
            title="¿Estás seguro que deseas eliminar este tratamiento?"
            onConfirm={() => deleteSpaDay(record.id)}
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

  return { spaDays, loading, columns };
};

export default useSpaDays;
