import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Outlet,
} from "react-router-dom";
import Root from "../pages/Root";
import EventsPage from "../pages/EventsPage";
import EventDetail from "../pages/EventDetail";
import { AuthProvider } from "../context/userContext";
import Nav from "../components/Nav";
import ProfileEvent from "../pages/ProfileEvent";
import Login from "../pages/Login";

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
      <Route path="/login" element={<Login />}></Route>

      <Route element={<Nav />}>
        <Route path="events" element={<EventsPage />}></Route>
        <Route path="events/:type/:id" element={<EventDetail />}></Route>
        <Route path="profile/events/" element={<ProfileEvent />}></Route>
      </Route>
    </Route>
  )
);

export default router;
