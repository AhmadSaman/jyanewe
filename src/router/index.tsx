import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Outlet,
} from "react-router-dom";
import Root from "../pages/Root";
import { AuthProvider } from "../context/userContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      }
    >
      <Route index element={<Root />}></Route>
      <Route path="events" element={<div>ssss</div>}></Route>
    </Route>
  )
);

export default router;
