import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./router"
import { Fragment } from "react"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {routes.map((route, index) => {
                        const path = route.path
                        const Layout: any = route.layout || DefaultLayout
                        const Page = route.page || Fragment

                        return (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </>
                                }
                            />
                        )
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
