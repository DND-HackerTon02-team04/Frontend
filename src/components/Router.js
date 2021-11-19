import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage";

import CustomPage from "../pages/CustomPage";

import PhotosPage from "../pages/PhotosPage";

import ResultPage from "../pages/ResultPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photos/:roomId" element={<PhotosPage />}></Route>
        <Route path="/custom" element={<CustomPage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
        <Route path="/" exact={true} element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
