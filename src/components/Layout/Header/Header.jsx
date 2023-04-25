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

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;

  const user = {
    role: 'admin',
  };

  const logoutHandler = () => {
    console.log('logout');
    onClose();
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
              <LinkButton onClick={onClose} url="/" title="Home" />
              <LinkButton
                onClick={onClose}
                url="/courses"
                title="All Courses"
              />
              <LinkButton
                onClick={onClose}
                url="/request"
                title="Request a course"
              />
              <LinkButton onClick={onClose} url="/contact" title="Contact US" />
              <LinkButton onClick={onClose} url="/about" title="About US" />
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
                        <Link onClick={onClose} to="/profile">
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
                        <Link onClick={onClose} to="/admin/dashboard">
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
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p></p>
                    <Link onClick={onClose} to="/register">
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
