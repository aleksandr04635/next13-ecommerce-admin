"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen(); //it makes closing the model impossible without submitting the form in it
    }
  }, [isOpen, onOpen]);

  return null;
  //modal itself comes from layout, this page only triggers it
};

export default SetupPage;
/* import { UserButton } from "@clerk/nextjs";
import { Modal } from "@/components/ui/modal";

export default function Home() {
  return (
    <div className="h-screen">
      <Modal isOpen title="test" description="test des" onClose={() => {}}>
        Children
      </Modal>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
 */
