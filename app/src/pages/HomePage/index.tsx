import { useEffect, useState } from "react"
import { Fade, Stack, Typography } from "@mui/material"
import { IJoke } from "../../interfaces/joke.interface"
import { dumpJokes } from "../../dumpData"
import AppContainer from "../../components/AppContainer"
import JokeSection from "./components/JokeSection"
import HeaderSection from "./components/HeaderSection"

const getArrayJokeInCookie = () => {
    const cookie = document.cookie // get cookie
    let arrayJoke: any[] = []
    const arrayCookie = cookie.split("; ") // split each key value

    arrayCookie.forEach((joke) => {
        const splitJoke = joke.split("=") // continue split key and value
        arrayJoke.push(splitJoke[0]) // and get only name key push a array
    })

    return arrayJoke
}

const getRandomJoke = (jokes: IJoke[]): IJoke | null => {
    if (jokes.length === 0) {
        return null
    }

    const randomIndex = Math.floor(Math.random() * jokes.length)
    return jokes[randomIndex]
}

const HomePage = () => {
    const [refetch, setRefetch] = useState(false)
    const [joke, setJoke] = useState<IJoke | null>(null)

    useEffect(() => {
        try {
            const jokeHasSeen = getArrayJokeInCookie() // list jokes has seen, it is saved in cookie
            const jokeNotSeen = dumpJokes.filter(
                (joke) => !jokeHasSeen.includes(joke.id),
            ) // filter to get list jokes not seen
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
                    <Fade in={true} timeout={1200}>
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
                                boxShadow={{
                                    xs: "none",
                                    sm: "0 0 10px 1px rgba(0,0,0,0.2)",
                                }}
                                borderRadius={10}
                                padding="5vw 7vw"
                            >
                                <Typography fontSize={{ sm: 18, xs: 16 }}>
                                    That's all the jokes for today! Come back
                                    another day!
                                </Typography>
                            </Stack>
                        </Stack>
                    </Fade>
                )}
            </AppContainer>
        </>
    )
}

export default HomePage
