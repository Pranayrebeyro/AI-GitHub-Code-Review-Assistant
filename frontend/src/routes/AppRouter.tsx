import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppShell from "../components/layout/AppShell";

import Home from "../pages/Home/Home";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;