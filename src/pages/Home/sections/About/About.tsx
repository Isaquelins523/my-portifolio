
import { Box, Card, Container, Typography, styled } from "@mui/material"
import Grid from "@mui/material/GridLegacy"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimatedComponent/AnimatedComponent";
const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Python", "Git", "HTML", "CSS", "Django", "Flask", "FastAPI", "Material UI", "Docker", "Fastify", "PostgreSQL", "MongoDB"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">1+ years</Typography>
                                <Typography textAlign="center">Fullstack Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Bachelor's Degree</Typography>
                                <Typography textAlign="center">Software Engineer</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Desenvolvedor fullstack com forte experiência em desenvolvimento backend e cursando
                        Engenharia de Software. Possuo forte domínio em Python e frameworks como Django, Flask e
                        FastAPI, além de trabalhar com bancos de dados PostgreSQL, MySQL e MongoDB.
                        Atuo com Python, TypeScript e Node.js no desenvolvimento de APIs REST e APIs com
                        WebSockets, com conhecimento em DevOps utilizando Docker e Docker-Compose. Também
                        tenho experiência em Front-end com React, buscando constantemente aprimorar minhas
                        habilidades para entregar soluções de alta qualidade.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
