import { useState, useEffect } from "react";
import { Space, Tag, Popconfirm, message} from "antd";
import useManageWatterCircuits from "./useManageWatterCircuits";
import Link from "next/link";

const useWatterCircuitData = () => {
  const [watterCircuits, setWatterCircuits] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAllWatterCircuits, deleteWatterCircuit } = useManageWatterCircuits();

  useEffect(() => {
    const fetchWatterCircuits = async () => {
      const watterCircuits = await getAllWatterCircuits();
      setWatterCircuits(watterCircuits);
      setLoading(false);
    };
    fetchWatterCircuits();
  }, [getAllWatterCircuits]);

  const columns = [
    {
      title: "Circuito de Agua",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <Link href={`/dashboard/watter-circuits/edit/${record.id}`}>{text}</Link>,
    },
    {
      title: "Precio",
      dataIndex: "clientPrice",
      key: "price",
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
            onConfirm={() => deleteWatterCircuit(record.id)}
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

  return { watterCircuits, loading, columns };
};

export default useWatterCircuitData;
