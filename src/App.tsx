import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Main from "./layouts/Main";
import UsersTable from "./components/UsersTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<UsersTable />} />
          <Route path="/posts/:id" element={<UsersTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
