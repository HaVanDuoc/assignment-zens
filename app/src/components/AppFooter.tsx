import { Stack, Typography } from "@mui/material"
import AppContainer from "./AppContainer"

const AppFooter = () => {
    return (
        <Stack sx={{ boxShadow: "0 -1px 1px rgba(0,0,0,0.2)" }}>
            <AppContainer>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    gap={2}
                    sx={{
                        padding: "28px 60px",
                    }}
                >
                    <Typography fontSize={13} color="#999">
                        This website is created as part of Hlsolutions program.
                        The materials contained on this website are provided for
                        general information only and do not constitute any form
                        of advice. HLS assumes no responsibility for the
                        accuracy of any particular statement and accepts no
                        liability fo any loss or damage which may arise from
                        reliance on the information contained on this site.
                    </Typography>
                    <Typography fontSize={13} color="ccc">
                        Copyright 2021 HLS
                    </Typography>
                </Stack>
            </AppContainer>
        </Stack>
    )
}

export default AppFooter
