import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Outlet,
} from "react-router-dom";
import Root from "../pages/Root";
import { AuthProvider } from "../context/userContext";
import Nav from "../components/Nav";

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

      <Route element={<Nav />}>
        <Route path="events" element={<div>svsvnsk</div>}></Route>
      </Route>
    </Route>
  )
);

export default router;
