import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Root from "../pages/Root";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
);

export default router;