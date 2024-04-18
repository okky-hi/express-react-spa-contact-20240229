import { Layout } from "../components/layout";
import ContactPage from "../pages/contact-page";
import { Pokemon } from "../pages/pokemon";

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <div>
            Hello world!
          </div>
        ),
      },
      {
        path: "/contacts",
        element:<ContactPage />,
      },
    ],
  },
];