import { Layout } from "../components/layout";
import { ContactPage } from "../pages/contact-page";
import { MonthPage } from "../pages/MonthPage";

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
        element: <ContactPage />,
      },
      {
        path: "/month",
        element: <MonthPage />,
      },

      {
        path: "/month/:id",
        element: <MonthPage />,
      },
    ],
  },
];