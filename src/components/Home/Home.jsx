import {
  Button,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import './home.css';
import vg from '../../assests/images/bg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdacity } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assests/videos/intro.mp4';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing="8"
          >
            <Heading children="Learn From the Experts" size={'2xl'} />
            <Text
              fontStyle={'2x1'}
              fontFamily="cursive"
              textAlign={['center', 'left']}
              children="Find valueable Content At Reasonable Price"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image className="vector-graphics" boxSize={'md'} src={vg} />
        </Stack>
      </div>
      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow'}
          children="OUR BRANDS"
        />
        <HStack
          className="brandsBannner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <DiAws />
          <SiCoursera />
          <SiUdacity />
        </HStack>
      </Box>
      <div className="container2">
        <video
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
