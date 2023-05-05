import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { navbar } from "../Utils/navbar";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Navigate to={"vsekurs"} />} />
        <Route>
          {navbar.map(({ path, Element, id, hidden, useParams, icon }) => {
            return (
              !useParams &&
              hidden && <Route key={id} path={path} element={Element} />
            );
          })}
        </Route>
        <Route element={<Navbar />}>
          {navbar.map(({ path, Element, id, hidden, useParams }) => {
            return (
              (useParams || !hidden) && (
                <Route key={id} path={path} element={Element} />
              )
            );
          })}
        </Route>
      </Routes> */}
    </>
  );
};

export default Root;
