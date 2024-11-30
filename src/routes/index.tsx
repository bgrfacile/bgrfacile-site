import {SiteMapLayout} from "@/layouts/SiteMapLayout.tsx";
import {createBrowserRouter, NonIndexRouteObject} from "react-router";
import HomePage from "@/pages/HomePage.tsx";
import {NotFoundPage} from "@/pages/NotFoundPage.tsx";
import {ProductsPage} from "@/pages/ProductsPage.tsx";
import {AboutPage} from "@/pages/AboutPage.tsx";
import {BlogPage} from "@/pages/BlogPage.tsx";
import {ContactPage} from "@/pages/ContactPage.tsx";

const listRoutes: NonIndexRouteObject[] = [
    {
        id: "main",
        path: "/",
        element: <SiteMapLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: "/products",
                element: <ProductsPage/>,
            },
            {
                path: "/about",
                element: <AboutPage/>,
            },
            {
                path: "/blog",
                element: <BlogPage/>,
            },
            {
                path: "/contact",
                element: <ContactPage/>,
            },
        ]
    },
    {
        id: "notFound",
        path: "*",
        element: <NotFoundPage/>
    }
];

export const Router = createBrowserRouter(listRoutes, {
    basename: "/",
    window,
});

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => Router.dispose());
}
