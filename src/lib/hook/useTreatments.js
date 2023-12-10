// useTreatmentData.js
import { useState, useEffect } from "react";
import { Space, Tag, Popconfirm, message} from "antd";
import useManageTreatments from "./useManageTreatments";
import Link from "next/link";

const useTreatmentData = () => {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAllTreatments, deleteTreatment } = useManageTreatments();

  useEffect(() => {
    const fetchTreatments = async () => {
      const treatments = await getAllTreatments();
      setTreatments(treatments);
      setLoading(false);
    };
    fetchTreatments();
  }, [getAllTreatments]);

  const columns = [
    {
      title: "Tratamiento",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <Link href={`/dashboard/treatments/edit/${record.id}`}>{text}</Link>,
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
      title: "Categoría",
      key: "category",
      dataIndex: "category",
      render: (_, { category }) => (
        <>
          <Tag color="green" key={category}>
            {category.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Acciones",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link href={`/dashboard/treatments/edit/${record.id}`}>
            Editar
          </Link>
          <Popconfirm
            title="¿Estás seguro que deseas eliminar este tratamiento?"
            onConfirm={() => deleteTreatment(record.id)}
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

  return { treatments, loading, columns };
};

export default useTreatmentData;
