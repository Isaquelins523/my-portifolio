import { Box, Container, Typography, styled } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimatedComponent/AnimatedComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Hotel Dev",
            subtitle: "Fev 2025 ",
            srcImg: "/src/assets/images/hotel-image.jpeg",
            description: "Este projeto é um sistema de gerenciamento de hotéis, onde os usuários podem adicionar, editar e excluir hotéis. Ele foi desenvolvido utilizando React, Node.js e MongoDB.",
            technologies: "Technologies: React.js (usando Vite), Axios para chamadas HTTP, React Router para navegação, Styled-Components para estilização",
            websiteURL: "https://hotel-interface-5pet6c0gp-isaque-lins-projects.vercel.app",
            codeURL: "https://github.com/Isaquelins523/Hotel_interface",
        },
        {
            title: "Dev Blog",
            subtitle: "Fev 2025 ",
            srcImg: "/src/assets/images/blog_Ghlcdge.jpg",
            description: "Este projeto é uma versão do blog da Apiki focada exclusivamente em desenvolvedores. Ele foi desenvolvido como parte de um desafio para a posição de Front-end Developer.",
            technologies: "Technologies: React com Vite,React Router DOM para roteamento,Axios para consumo da API, Styled Components para estilização",
            websiteURL: "https://dev-blog-beige.vercel.app/",
            codeURL: "https://github.com/Isaquelins523/dev-blog",
        },
        {
            title: "Clone do Itaú",
            subtitle: "Fev 2025 ",
            srcImg: "/src/assets/images/Itau-image.jpeg",
            description: "Este projeto é um clone do site do Itaú.",
            technologies: "Technologies: React, JavaScript, styled-components",
            websiteURL: "https://itau-clone-eight.vercel.app/",
            codeURL: "https://github.com/Isaquelins523/itau-clone",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection