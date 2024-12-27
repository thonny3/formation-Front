import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Contenu from "../../components/admin/Contenu";

export default function AdminLayout() {
  return (
    <>
      <div className="flex">
        <Sidebar/>
        <Contenu/>
      </div>
    </>
  );
}
