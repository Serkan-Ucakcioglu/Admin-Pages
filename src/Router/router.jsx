import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import LoginPage from "../Pages/LoginPage";
import RequireAuth from "../Components/RequireAuth";
import AdminPage from "../Pages/AdminPage";
import Welcome from "../Components/Admin/Welcome";
import PageCreate from "../Components/Admin/PageCreate";

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
    </Route>
  )
);
