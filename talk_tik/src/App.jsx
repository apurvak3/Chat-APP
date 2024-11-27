import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/login"));
const Chat = lazy(() => import("./pages/chat"));
const Groups = lazy(() => import("./pages/Groups"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/Groups" element={<Groups />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

