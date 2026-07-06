import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AppLayout from "../layouts/AppLayout";

import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Review from "../pages/Review/Review";
import Chat from "../pages/Chat/Chat";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import RepositoryDetails from "../pages/Repository/RepositoryDetails";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Application Routes */}
        <Route
  element={
    <ProtectedRoute>
      <AppLayout />
    </ProtectedRoute>
  }
>          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/repository/:owner/:repo" element={<RepositoryDetails />} />
          <Route path="/review" element={<Review />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;