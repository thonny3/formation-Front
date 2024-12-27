import React from "react";
import SideBar from "../../components/user/SideBar";
import Container from "../../components/user/Container";

function UserLayout() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Container />
      </div>
    </>
  );
}

export default UserLayout;
