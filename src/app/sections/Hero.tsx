import { Box, Stack } from "@mui/material";
import theme from "@theme/theme";
import Image from "next/image";

import scene from '@assets/scene.svg'

const HeroSection = () => {
    return(
        <Stack bgcolor={theme.palette.ne_lightblue.main} width={'100%'} height={'fit-content'} padding={0} borderRadius={'1.4rem'} position={'relative'} overflow={'hidden'}>
            <Image src={scene} alt="napuleth NAPULETH napulETH 2025 Naples Napoli ETH event web3 southern italy" style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1.4rem'
            }}></Image>
        </Stack>
    )
}

export default HeroSection;