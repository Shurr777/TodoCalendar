import Login from "../pages/login/Login";
import Event from "../pages/event/Event";


export const RouteNames = {
   Logn: "/login",
   Evnt: "/"
}

export const publicRoutes = [
    {path: RouteNames.Logn, exact: true, component: Login}
]

export const privateRoutes = [
    {path: RouteNames.Evnt, exact: true, component: Event}
]
