import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import cursor from '../../../assests/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses, getCourseLectures } from '../../../redux/action/course';
import {
  addLecture,
  deleteCourse,
  deleteLecture,
} from '../../../redux/action/admin';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const AdminCourses = () => {
  const { courses, lectures } = useSelector(state => state.course);

  const { loading, error, message } = useSelector(state => state.admin);

  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');

  const dispatch = useDispatch(getAllCourses());

  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = (courseId, title) => {
    dispatch(getCourseLectures(courseId));
    onOpen();
    setCourseId(courseId);
    setCourseTitle(title);
  };

  const deleteUserHandler = courseId => {
    console.log(courseId);
    dispatch(deleteCourse(courseId));
  };
  const deleteLectureButtonHandler = async (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
    await dispatch(deleteLecture(courseId, lectureId));
    dispatch(getCourseLectures(courseId));
  };
  const addLectureHandler = async (e, courseId, title, description, video) => {
    e.preventDefault();
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('title', title);
    myForm.append('description', description);

    myForm.append('file', video);

    await dispatch(addLecture(courseId, myForm));

    dispatch(getCourseLectures(courseId));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    dispatch(getAllCourses());
  }, [dispatch, error, message]);

  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX="auto">
        <Heading
          children="All Users"
          textTransform={'uppercase'}
          my="16"
          textAlign={['center', 'Left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All Available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  courseDetailsHandler={courseDetailsHandler}
                  deleteUserHandler={deleteUserHandler}
                  key={item._id}
                  item={item}
                  isLoading={loading}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={courseId}
          courseTitle={courseTitle}
          deleteUserHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
          lectures={lectures}
          isLoading={loading}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

function Row({ item, courseDetailsHandler, deleteUserHandler, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id, item.title)}
            variant={'outline'}
            color="purple.500"
            isLoading={loading}
          >
            View Lecture
          </Button>
          <Button
            onClick={() => deleteUserHandler(item._id)}
            color={'purple.600'}
            isLoading={loading}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;
