import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server } from '../../redux/store';
import { buySubscription } from '../../redux/action/user';
import { toast } from 'react-hot-toast';
import logo from '../../assests/images/logo.png';

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setkey] = useState('');

  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );

  const subscribeHandler = async () => {
    const { data } = await axios.get(`${server}/razorpaykey`);
    setkey(data.key);
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'CourseBundler',
          description: 'Get Access to all premium content',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '',
          },
          notes: {
            address: 'Roshan Jha at Howrah',
          },
          theme: {
            color: '#FFC800',
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [dispatch, error, subscriptionId, user.name, user.email, key]);

  return (
    <Container h="90vh" p="16">
      <Heading children="welcome" my="8" textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
      >
        <Box bg="yellow" p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'} children={`Pro pack - 199.00`} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text children={`Join Pro Pack and get Acess to All Content.`} />
            <Heading size={'md'} children={'199 only'} />
          </VStack>
          <Button
            onClick={subscribeHandler}
            my={'8'}
            w="full"
            colorScheme={'yellow'}
            isLoading={loading}
          >
            Buy Now
          </Button>
        </Box>

        <Box bg="blackAlpha.600" p={'4'} css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading
            color={'white'}
            textTransform="uppercase"
            size={'sm'}
            children={'100% refund at cancelation'}
          />
          <Text
            fontSize={'xs'}
            color="white"
            children={'*Terms & Condition Apply'}
          />
        </Box>
      </VStack>
    </Container>
  );
};
export default Subscribe;
