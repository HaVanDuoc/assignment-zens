import DefaultLayout from "../layouts/DefaultLayout"
import HomePage from "../pages/HomePage"

interface IRoutes {
    path: string
    layout: React.FC
    page: React.FC
}

export const routes: IRoutes[] = [
    { path: "/", page: HomePage, layout: DefaultLayout },
]
