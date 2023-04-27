import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import LoginPage from "../Pages/LoginPage";
import RequireAuth from "../Components/RequireAuth";
import AdminPage from "../Pages/AdminPage";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LoginPage />} />
      <Route element={<RequireAuth />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Route>
  )
);
