import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export function ShareContents() {
  const { shareLink } = useParams<{ hash: string }>();
  const [contents, setContents] = useState([]);

  async function getContent() {
    const response = await axios.get(
      `${BACKEND_URL}/api/v1/brain/share/${shareLink}`
    );
    const data = response.data.content;
    setContents(data);
  }

  useEffect(() => {
    getContent();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }) => (
            <Card title={title} type={type} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
