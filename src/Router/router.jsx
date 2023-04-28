import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import LoginPage from "../Pages/LoginPage";
import AdminPage from "../Pages/AdminPage";
import Welcome from "../Components/Admin/Welcome";
import PageCreate from "../Components/Admin/Create/PageCreate";
import AppPage from "../Pages/AppPage";
import RequireAuth from "../Components/Auth/RequireAuth";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LoginPage />} />
      <Route element={<RequireAuth />}>
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<Welcome />} />
          <Route path="create" element={<PageCreate />} />
        </Route>
      </Route>
      <Route path="/app" element={<AppPage />} />
    </Route>
  )
);
