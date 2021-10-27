import React from 'react';
import Box from '@mui/material/Box';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const socialMediaIcons = [
  { id: 1, icon: <FaFacebookF />, fontSize: '27px' },
  { id: 2, icon: <FaTwitter />, fontSize: '30px' },
  { id: 3, icon: <FaInstagram />, fontSize: '30px' },
  { id: 4, icon: <FaLinkedinIn />, fontSize: '30px' },
];

function Footer() {
  return (
    <>
      <Box
        sx={{
          paddingTop: '70px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {socialMediaIcons.map(({ id, icon, fontSize }) => (
          <Box key={id} fontSize={fontSize} sx={{ padding: '15px' }}>
            {icon}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          paddingTop: '30px',
          paddingBottom: '40px',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '20px',
        }}
      >
        {new Date().getFullYear()}
        {' '}
        Zuri Chat. All rights reserved.
      </Box>
    </>
  );
}

export default Footer;
