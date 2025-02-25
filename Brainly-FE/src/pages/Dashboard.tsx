import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../components/icons/PlusIcon";
import { ShareIcon } from "../components/icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);
  return (
    <>
      <div>
        {/* SideBar  */}
        <Sidebar />
        {/* Main Content */}
        <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
          <CreateContentModal
            open={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
          />
          <div className="flex justify-end gap-4">
            <Button
              startIcon={<PlusIcon size="md" />}
              variant="primary"
              text={"Add Content"}
              onClick={() => {
                setModalOpen(true);
              }}
            />

            <Button
              startIcon={<ShareIcon size="md" />}
              variant="secondary"
              text={"Share Brain"}
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/brain/share`,
                  {
                    share: true,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                alert(shareUrl);
              }}
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            {contents.map(({ type, link, title }) => (
              <Card title={title} type={type} link={link} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
