import { Stack, Typography } from "@mui/material"

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

export default HeaderSection
