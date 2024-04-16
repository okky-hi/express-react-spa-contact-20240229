import { Link } from "react-router-dom";
import { Layout } from "../components/layout";
import { ContactPage } from "../pages/contact-page";
import { Suspense } from "react";

export const routes = [
  {
    element: <Layout />,
    children: [
      // {
      //   path: "",
      //   element: (
      //     <div>
      //       Hello world!<Link to={"/contacts"}>Contacts</Link>
      //     </div>
      //   ),
      // },
      {
        path: "/",
        element:
         <ContactPage />,
      },
    ],
  },
];