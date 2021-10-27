import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

function Logo() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: { xs: '20px', md: '50px' },
      }}
    >
      <Image src="/image/zuriLogo.svg" width="30%" height="100%" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '20px',
          fontSize: { xs: '25px', md: '30px' },
          fontWeight: 900,
        }}
      >
        ZURI CHAT
      </Box>
    </Box>
  );
}

export default Logo;
