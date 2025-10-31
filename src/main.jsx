import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Inicial from "./routes/Inicial.jsx";
import Cadastro from "./routes/CadastroUser/index.jsx";
import Login from "./routes/Login/index.jsx"
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
            // serviço do dia será a home
            {
                path: "/",
                element: <ServicosDoDia />,
            },
            {
                path: "inicial",
                element: <Inicial />,
            },
            {
                path: "cadastro",
                element: <Cadastro />,
            },
            {
                path: "login",
                element: <Login />,
            },

            {
                path: "servicoSemana",
                element: <ServicosDaSemana />,
            },
            {
                path: "servicoMes",
                element: <ServicosDoMes />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
