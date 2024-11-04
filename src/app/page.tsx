import Link from "next/link";
import { Box, Container } from "@mui/material";

import HeroSection from "@sections/Hero";

export default function Home() {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'}>
      <Container maxWidth={false} sx={{ padding: { xs: 1, sm: 1, md: 3 } }}>
        <HeroSection />
      </Container>
    </Box>
  );
}
