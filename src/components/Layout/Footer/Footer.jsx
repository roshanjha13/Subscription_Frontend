import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']}>
          <Heading children="All Right Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@ roshan kumar jha"
            color={'yellow.400'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="https://www.youtube.com/:" target={'_blank'}>
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.instagram.com/" target={'_blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/roshanjha26" target={'_blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};
export default Footer;
