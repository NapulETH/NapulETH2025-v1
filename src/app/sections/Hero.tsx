import { Box, Stack } from "@mui/material";
import theme from "@theme/theme";
import Image from "next/image";

import Scene from '@assets/scene.svg'

import Navbar from "@components/Navbar";

const HeroSection = () => {
    return(
        <Stack bgcolor={theme.palette.ne_lightblue.main} width={'100%'} height={'100vh'} padding={0} borderRadius={'1.4rem'} position={'relative'} overflow={'hidden'}>
            <Stack sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '1.4rem',
                position: 'absolute',
            }}>
                <Scene />
            </Stack>
            <Navbar />
        </Stack>
    )
}

export default HeroSection;