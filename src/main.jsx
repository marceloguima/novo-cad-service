import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Inicial from "./routes/inicial.jsx";
import Cadastro from "./routes/Cadastro.jsx";
import Home from "./routes/Home.jsx";
import ServicosDoDia from "./routes/ServicosDoDia.jsx";
import ServicosDaSemana from "./routes/ServicosDaSemana.jsx";
import ServicosDoMes from "./routes/ServicosDoMes.jsx";

import ErrorPage from "./routes/ErrorPage.jsx";

import {
    createBrowserRouter,
    RouterContextProvider,
    Router,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            { 
              path: "/",
              element: <Home /> 

            },
            { 
              path: "inicial", 
              element: <Inicial /> 
            },
            {
                path: "cadastro",
                element: <Cadastro />,
            },
            {
              path: "servicoDia",
              element: <ServicosDoDia />
            },
             {
              path: "servicoSemana",
              element: <ServicosDaSemana/>
            },
            {
              path: "servicoMes",
              element: <ServicosDoMes />
            }
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
