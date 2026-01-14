import { styled } from "@mui/material"
import type React from "react"


const StyledButton = ({children}: {children: React.ReactNode}) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        display:"inline-flex",
        justifyContent:"center",
        alignItems:"center",
        gap: "10px",
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },
    }))

    return (
        <>
            <StyledButton>{children}</StyledButton>
        </>
    )
}

export default StyledButton
