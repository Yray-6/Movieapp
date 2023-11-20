import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import HomeError from "./pages/Home/HomeError";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import { contactAction } from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} errorElement={<HomeError />} />
      <Route path="about" element={<About />}>
        <Route
          path="contact"
          element={<Contact />}
          action={contactAction}
          errorElement={<HomeError />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
