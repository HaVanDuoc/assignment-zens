import chroma from "chroma-js"
import { Button, Divider, Fade, Stack, Typography } from "@mui/material"
import { IJoke } from "../../../interfaces/joke.interface"

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
        <Fade in={true} timeout={1200} key={id}>
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
                            setCookie(id, "Like")
                            setRefetch(!refetch)
                        }}
                    >
                        This is Funny!
                    </Btn>

                    <Btn
                        bgcolor="#29B363"
                        onClick={() => {
                            setCookie(id, "Dislike")
                            setRefetch(!refetch)
                        }}
                    >
                        This is not funny.
                    </Btn>
                </Stack>
            </Stack>
        </Fade>
    )
}

export default JokeSection
