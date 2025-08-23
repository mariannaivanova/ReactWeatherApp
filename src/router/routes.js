import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Account from "../pages/Account/Account";

export const privateRoutes = [
    {path: '/main', element: <Main/>},
    {path: '/account', element: <Account/>},
]

export const publicRoutes = [
    {path: '/main', element: <Main/>},
    {path: '/login', element: <Login/>},
]