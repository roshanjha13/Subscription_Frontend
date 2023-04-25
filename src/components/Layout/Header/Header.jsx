import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home' }) => (
  <Link to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = false;

  const user = {
    role: 'admin',
  };

  const logoutHandler = () => {
    console.log('logout');
  };
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width="12"
        height={'12'}
        rounded="full"
        position={'fixed'}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur (3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>Course Bundler</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <LinkButton url="/" title="Home" />
              <LinkButton url="/courses" title="All Courses" />
              <LinkButton url="/request" title="Request a course" />
              <LinkButton url="/contact" title="Contact US" />
              <LinkButton url="/about" title="About US" />
              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>
                        <p></p>
                        <Link to="/logout">
                          <Button
                            colorScheme={'yellow'}
                            onClick={logoutHandler}
                          >
                            <RiLogoutBoxLine />
                            Logout
                          </Button>
                        </Link>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard">
                          <Button colorScheme={'purple'} variant="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboards
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p></p>
                    <Link to="/register">
                      <Button colorScheme={'yellow'}>Sign up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
