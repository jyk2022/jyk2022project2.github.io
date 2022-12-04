import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosHome from "../pages/TodosHome";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TodosHome />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
