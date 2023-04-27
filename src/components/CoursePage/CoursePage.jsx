import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assests/videos/intro.mp4';

const CoursePage = () => {
  //   const lectureTitle = 'LectureTitle';
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'sasasa',
      title: 'Sample',
      description: 'Sample secfd ndfs fsf asd fads',
      video: {
        url: 'sadsas',
      },
    },
    {
      _id: 'sasasa2',
      title: 'Sample2',
      description: 'Sample secfd ndfs fsf asd fads',
      video: {
        url: 'sadsas',
      },
    },
    {
      _id: 'sasasa3',
      title: 'Sample3',
      description: 'Sample secfd ndfs fsf asd fads',
      video: {
        url: 'sadsas',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          autoPlay
          controls
          controlsList="noautoplay nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m="4" children="Description" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((item, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            style={{
              width: '100%',
              textAlign: 'center',
              padding: '1rem',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
            key={item._id}
          >
            <Text noOfLines={1}>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
