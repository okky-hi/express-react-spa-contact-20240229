import { Link } from "react-router-dom";
import { Layout } from "../components/layout";
import { ContactPage } from "../pages/contact-page";

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <div>
            Hello world!<Link to={"/contacts"}>Contacts</Link>
          </div>
        ),
      },
      {
        path: "contacts",
        element: <ContactPage />,
      },
    ],
  },
];