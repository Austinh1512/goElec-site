import { Button, Fade, Typography, styled } from '@mui/material'
import React from 'react'

const HeroBannerContainer = styled("div")(({ theme }) => ({
    marginTop: 5,
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-banner-img.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    width: "100%",
}))

const HeroBannerHeading = styled("div")({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15
})

const HeroBannerHeadingText = styled(Typography)(({ theme }) => ({
    color: "white",
    fontSize: 72,
    [theme.breakpoints.down("sm")]: {
        fontSize: 56
    }
}))



export default function HeroBanner() {
  return (
    <HeroBannerContainer>
        <HeroBannerHeading>
            <Fade in={true} easing="cubic-bezier(0.64, 0, 0.78, 0)" timeout={1500}>
                <HeroBannerHeadingText variant='h1'>Go Electric</HeroBannerHeadingText>
            </Fade>
            <Fade in={true} easing="cubic-bezier(0.64, 0, 0.78, 0)" timeout={2000}>
                <Button variant='contained'>Shop Now</Button>
            </Fade>
        </HeroBannerHeading>
    </HeroBannerContainer>
  )
}
