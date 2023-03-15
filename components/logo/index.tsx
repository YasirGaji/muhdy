import React from 'react';
import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import { LogoBox } from './styles/logo';


export const Logo = () => {
  const logoImg = `/images/Logo.svg`

  return (
    <Link href="/">
        <LogoBox>
          

          <Text
            color={useColorModeValue('black', 'white')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold" ml={3}
            width="110px"
          >
            Muhdy
          </Text>
        </LogoBox>
    </Link>
  );
};

