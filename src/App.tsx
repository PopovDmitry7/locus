import { createBrowserRouter, RouterProvider } from "react-router";
import mainLayout from "./layout/mainLayout";
import Home from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    children: [{
      index: true,
      Component: Home,
    }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
