import { Avatar, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { IUser } from "../interfaces/user.interface"
import { dumpUser } from "../dumpData"
import AppContainer from "./AppContainer"

export const Brand = () => {
    return (
        <Stack sx={{ cursor: "pointer" }}>
            <img src="/logo-joke.png" alt="brand" style={{ maxWidth: 70 }} />
        </Stack>
    )
}

export const Account = () => {
    const [user, setUser] = useState<IUser | null>(null)

    const currentUser = "Jim HLS"

    useEffect(() => {
        try {
            const getUser = dumpUser.find((u) => u.name === currentUser)

            if (getUser) {
                // console.log(">>> current user", user)
                setUser(getUser)
            }
        } catch (error) {
            console.log(">>> Error get user: ", error)
        }
    }, [currentUser, user])

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
            style={{ cursor: "pointer" }}
        >
            {user && (
                <Stack justifyContent="center" alignItems="flex-end">
                    <Typography sx={{ color: "#b5b5b5", fontSize: 13 }}>
                        Handicrafted by
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}>{user?.name}</Typography>
                </Stack>
            )}

            <Avatar src={user?.avatar} sx={{ width: 60, height: 60 }} />
        </Stack>
    )
}

const AppHeader = () => {
    return (
        <header style={{ background: "#fff" }}>
            <AppContainer>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Brand />
                    <Account />
                </Stack>
            </AppContainer>
        </header>
    )
}

export default AppHeader
