import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../redux/action/course';
import Loader from '../Layout/Loader/loader';
const CoursePage = ({ user }) => {
  //   const lectureTitle = 'LectureTitle';
  const [lectureNumber, setLectureNumber] = useState(0);

  const { lectures, loading } = useSelector(state => state.course);

  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }

  return loading ? (
    <Loader />
  ) : (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      {lectures && lectures.length > 0 ? (
        <>
          <Box>
            <video
              width={'100%'}
              controls
              controlsList="noautoplay nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              src={lectures[lectureNumber].video.url}
            ></video>
            <Heading
              m="4"
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}
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
        </>
      ) : (
        <Heading children="No Lectures" />
      )}
    </Grid>
  );
};

export default CoursePage;
