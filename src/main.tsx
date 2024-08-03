import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute/PublicRoute.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import Error from "./pages/Error/Error.tsx";
import PrivateRoutes from "./routes/PrivateRoutes/PrivateRoutes.tsx";
import SPALLCHome from "./pages/SPALLCHome/SPALLCHome.tsx";
import CMGProjectList from "./pages/CMGProject/CMGProjectList/CMGProjectList.tsx";
import GallagherProjectList from "./pages/GallagherProject/GallagherProjectList/GallagherProjectList.tsx";
import GallagherSite from "./pages/GallagherProject/GallagherSite/GallagherSite.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/spallc",
    element: <PrivateRoutes />,
    errorElement: <Error />,
    children: [
      {
        path: "/spallc",
        element: <SPALLCHome />,
      },
      {
        path: "/spallc/gallagher",
        element: <GallagherProjectList />,
      },
      {
        path: "/spallc/gallagher/:entity_id",
        element: <GallagherSite />,
      },

      {
        path: "/spallc/catholic-mutual",
        element: <CMGProjectList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
