import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import cursor from '../../../assests/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../../redux/action/admin';
import Loader from '../../Layout/Loader/loader';

const Users = () => {
  const { users, loading } = useSelector(state => state.admin);
  const dispatch = useDispatch();

  const updateHandler = userId => {
    console.log(userId);
  };

  const deleteUserHandler = userId => {
    console.log(userId);
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      {loading ? (
        <Loader color="purple.500" />
      ) : (
        <>
          <Box p={['0', '16']} overflowX="auto">
            <Heading
              children="All Users"
              textTransform={'uppercase'}
              my="16"
              textAlign={['center', 'Left']}
            />
            <TableContainer w={['100vw', 'full']}>
              <Table variant={'simple'} size="lg">
                <TableCaption>All Available users in the database</TableCaption>
                <Thead>
                  <Tr>
                    <Th>id</Th>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Role</Th>
                    <Th>Subscription</Th>
                    <Th isNumeric>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {users &&
                    users.map(item => (
                      <Row
                        updateHandler={updateHandler}
                        deleteUserHandler={deleteUserHandler}
                        key={item._id}
                        item={item}
                      />
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </>
      )}
      <Sidebar />
    </Grid>
  );
};

function Row({ item, updateHandler, deleteUserHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item.subscription && item.subscription.status === 'active'
          ? 'Active'
          : 'Not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => updateHandler(item._id)}
            variant={'outline'}
            color="purple.500"
          >
            Change Role
          </Button>
          <Button
            onClick={() => deleteUserHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default Users;
