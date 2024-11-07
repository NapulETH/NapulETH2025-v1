import Link from "next/link";
import { Box, Container, Stack } from "@mui/material";

import HeroSection from "@sections/Hero";
import AttractSpeakers from "@sections/SpeakersAttraction";
import TopSponsors from "@sections/TopSponsors";
import Stats2024 from "@sections/Stats2024";

export default function Home() {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'}>
      <Container maxWidth={false} sx={{ padding: { xs: 1, sm: 1, md: 3 } }}>
        <Stack width={'100%'} spacing={6}>
          <HeroSection />
          <AttractSpeakers />
          <TopSponsors />
          <Stats2024 />
        </Stack>
      </Container>
    </Box>
  );
}
