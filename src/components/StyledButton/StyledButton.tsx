import { styled } from "@mui/material"
import type React from "react"

interface StyledButtonProps {
    children: React.ReactNode
    onClick?: () => void
}


const StyledButton = ({children, onClick}: StyledButtonProps) => {

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
            <StyledButton onClick={onClick}>{children}</StyledButton>
        </>
    )
}

export default StyledButton
