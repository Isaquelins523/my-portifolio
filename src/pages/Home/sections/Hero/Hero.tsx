import { styled } from "@mui/material/styles"
import Avatar from "../../../../assets/images/avatar-lins.jpeg"
import { Box, Container, Typography } from "@mui/material"
import Grid from "@mui/material/GridLegacy"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/animatedBackgorund/AnimatedBackgorund";
import CV from "../../../../assets/pdf/Isaque-Lins-curriculo-fullstack.pdf";

const Hero = () => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
        position: "relative"
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const handleDownload = () => {
        console.log("download")
        
        const link = document.createElement('a');
        link.href = CV
        link.download = 'Isaque-Lins-Curriculo.pdf';
       
        document.body.appendChild(link);
        
        link.click();
        
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'isaquelins523@gmail.com';
        const subject = 'Subject';
        const body = 'Hello! I saw your portfolio...';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position={"relative"}>
                                <Box position={"absolute"} width={"150%"} top={"-100"} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position={"relative"} textAlign={"center"}>
                                <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                            
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Isaque Lins</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a software engineer</Typography>

                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={()=> handleDownload()}>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>                                </Grid>
                                <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"} >
                                    <StyledButton onClick={()=> handleEmail()}>
                                        <EmailIcon />
                                        <Typography>
                                            Contact Me
                                        </Typography>
                                    </StyledButton>
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
