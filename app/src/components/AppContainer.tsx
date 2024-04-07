import { Container, ContainerProps } from "@mui/material"
import React from "react"

interface IContainer extends ContainerProps {
    children: React.ReactNode
}

const AppContainer: React.FC<IContainer> = ({ children, ...props }) => {
    return (
        <Container {...props} sx={{ maxWidth: `1000px !important` }}>
            {children}
        </Container>
    )
}

export default AppContainer
