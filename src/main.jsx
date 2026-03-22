import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";

const router = createBrowserRouter([
  {
     path: "/",
       element: <App />,
       children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/skills", element: <Skills /> },
      {path:"/project/:id" , element:<ProjectDetails/>},
      { path: "/contact", element: <Contact /> },
      {path:"/about" , element:<About/>}
    ]
  }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
);
