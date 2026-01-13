import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar-lins.jpeg"
import { Button, Container, Typography } from "@mui/material"
import Grid from "@mui/material/GridLegacy"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "Black",
        height: "100vh",
    }))
    const Styledimg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Styledimg src={Avatar} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary" variant="h1" textAlign="center">Isaque Lins</Typography>
                            <Typography color="primary" variant="h2" textAlign="center">I'm a software engineer</Typography>

                            <Grid container display={"flex"} justifyContent={"center"}>
                                <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                    <Button>
                                        <DownloadIcon />
                                        Download CV
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                    <Button>
                                        <EmailIcon />
                                        Contact Me
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </StyledHero>

        </>
    )
}

export default Hero
