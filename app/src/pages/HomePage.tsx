import React, { useEffect, useState } from "react"
import { Button, Divider, Stack, Typography } from "@mui/material"
import { IJoke } from "../interfaces/joke.interface"
import { dumpJokes } from "../dumpData"
import chroma from "chroma-js"
import AppContainer from "../components/AppContainer"

const HeaderSection = () => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ background: "#29B363", color: "#fff", padding: "50px 30px" }}
            gap={1}
        >
            <Typography fontSize={26}>
                A joke a day keeps the doctor away
            </Typography>
            <Typography fontSize={13}>
                if you joke wrong way, your teeth have to pay. (Serious)
            </Typography>
        </Stack>
    )
}

const Btn: React.FC<{
    children: React.ReactNode
    bgcolor?: string
    onClick?: () => void
}> = ({ children, bgcolor = "#2C7EDB", onClick }) => {
    // Use chroma to convert color darker
    const hoverColor = chroma(bgcolor).darken().hex()

    return (
        <Button
            sx={{
                minHeight: 40,
                minWidth: 250,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                borderRadius: 0,
                padding: "5px 20px",
                color: "#fff",
                backgroundColor: bgcolor,
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.2)",
                cursor: "pointer",
                textTransform: "none",

                "&:hover": {
                    backgroundColor: hoverColor,
                },
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

const getArrayJokeInCookie = () => {
    const cookie = document.cookie
    let arrayJoke: any[] = []
    const arrayCookie = cookie.split("; ")

    arrayCookie.forEach((joke) => {
        const splitJoke = joke.split("=")
        arrayJoke.push(splitJoke[0])
    })

    return arrayJoke
}

const setCookie = (joke: string, action: string) => {
    document.cookie = joke + "=" + action + ";"
}

const JokeSection: React.FC<IJoke & { refetch: boolean; setRefetch: any }> = ({
    id,
    content,
    refetch,
    setRefetch,
}) => {
    return (
        <Stack gap={5}>
            {/* Content */}
            <Stack>
                <Typography>{content}</Typography>
            </Stack>

            <Stack paddingLeft="10vw" paddingRight="10vw">
                <Divider />
            </Stack>

            {/* Like or dislike */}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={5}
            >
                <Btn
                    bgcolor="#2C7EDB"
                    onClick={() => {
                        console.log("click like")
                        setCookie(id, "Like")
                        setRefetch(!refetch)
                    }}
                >
                    This is Funny!
                </Btn>
                <Btn
                    bgcolor="#29B363"
                    onClick={() => {
                        console.log("click dislike")
                        setCookie(id, "Dislike")
                        setRefetch(!refetch)
                    }}
                >
                    This is not funny.
                </Btn>
            </Stack>
        </Stack>
    )
}

const HomePage = () => {
    const [refetch, setRefetch] = useState(false)
    const [joke, setJoke] = useState<IJoke | null>(null)

    const getRandomJoke = (jokes: IJoke[]): IJoke | null => {
        if (jokes.length === 0) {
            return null
        }

        const randomIndex = Math.floor(Math.random() * jokes.length)
        return jokes[randomIndex]
    }

    useEffect(() => {
        try {
            const jokeHasSeen = getArrayJokeInCookie() // Joke has seen, it is saved in cookie
            const jokeNotSeen = dumpJokes.filter(
                (joke) => !jokeHasSeen.includes(joke.id),
            ) // filter get list joke not seen
            const joke = getRandomJoke(jokeNotSeen) // Get a random joke in list joke not seen

            if (joke) {
                setJoke(joke)
            } else {
                setJoke(null)
            }
        } catch (error) {
            console.log(">>> error get jokes: ", error)
        }
    }, [joke, refetch])

    return (
        <>
            <HeaderSection />
            <AppContainer
                style={{
                    paddingTop: 30,
                    paddingBottom: 30,
                    flex: 1,
                    position: "relative",
                }}
            >
                {joke ? (
                    <JokeSection
                        id={joke.id}
                        content={joke.content}
                        refetch={refetch}
                        setRefetch={setRefetch}
                    />
                ) : (
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: "100%",
                        }}
                    >
                        <Stack
                            boxShadow="0 0 10px 1px rgba(0,0,0,0.2)"
                            borderRadius={10}
                            padding="80px 7vw"
                        >
                            <Typography fontSize={18}>
                                That's all the jokes for today! Come back
                                another day!
                            </Typography>
                        </Stack>
                    </Stack>
                )}
            </AppContainer>
        </>
    )
}

export default HomePage
