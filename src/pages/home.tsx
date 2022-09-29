// import { View } from "app-studio";
import React from "react";
import { Form1 } from "../components/forms/form1";
import { Header } from "../components/Header";
import { Vertical } from "../layout/layout";

const HomePage = () => {
  return (
    <Vertical>
      <Header />
      <Form1 />
    </Vertical>
  );
};

export default HomePage;
