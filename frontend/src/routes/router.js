import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Terms } from "../pages/Terms";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SearchResults } from "../pages/SearchResults";
import { Contact } from "../pages/Contact";
import { Admin } from "../pages/Admin";

const router = createBrowserRouter([
    {
        path : "",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/terms",
                element : <Terms/>
            },
            {
                path : "/search",
                element : <SearchResults/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/admin",
                element : <Admin/>
            },
            {
                path : "*",
                element : <NotFoundPage/>
            }
        ]
    }
])

export default router;
