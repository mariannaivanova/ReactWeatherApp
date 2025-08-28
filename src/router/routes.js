import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Account from "../pages/Account/Account";

export const privateRoutes = [
    {name: "main", path: '/main', element: <Main/>},
    {name: "account", path: '/account', element: <Account/>},
]

export const publicRoutes = [
    {name: "main", path: '/main', element: <Main/>},
    {name: "login", path: '/login', element: <Login/>},
]