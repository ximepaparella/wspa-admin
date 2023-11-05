// useTreatmentData.js
import { useState, useEffect } from "react";
import { Space, Tag } from "antd";

const useTreatmentData = () => {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch treatment data from the API
    console.log(`Full API URL: ${process.env.NEXT_PUBLIC_API_URL}/treatments`);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/treatments`)
      .then((response) => response.json())
      .then((data) => {
        setTreatments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching treatment data:", error);
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: "Tratamiento",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
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
          <a>Editar</a>
          <a>Eliminar</a>
        </Space>
      ),
    },
  ];

  return { treatments, loading, columns };
};

export default useTreatmentData;
