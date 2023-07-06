"use client";

import Modal from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      {/* <UserButton afterSignOutUrl="/" /> */}

      <Modal title="Test" description="Test Desc" isOpen onClose={() => {}}>
        Hello this is a dialog component
      </Modal>
    </div>
  );
};

export default SetupPage;
