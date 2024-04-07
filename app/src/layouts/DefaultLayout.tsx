import React from "react"
import { Stack, styled } from "@mui/material"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

const Layout = styled(Stack)(() => ({}))

interface IDefaultLayout {
    children?: React.ReactNode
}

const DefaultLayout = ({ children }: IDefaultLayout) => {
    return (
        <Layout sx={{ minHeight: "100vh" }}>
            <AppHeader />
            <Stack flex={1}>{children}</Stack>
            <AppFooter />
        </Layout>
    )
}

export default DefaultLayout
