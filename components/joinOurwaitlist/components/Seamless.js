import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';

function Seamless() {
  return (
    <Box>
      <Box
        sx={{
          background: '#f3fffB',
          minHeight: { xs: '60vh', md: '500px' },
          position: 'relative',
          top: { xs: '220px', md: '600px', xl: '800px' },
          minWidth: '100vw',
          paddingTop: '20px',
          paddingBottom: '100px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-evenly',
          }}
        >
          <Box
            sx={{
              paddingTop: { xs: '50px', md: '60px' },
              paddingLeft: '30px',
              paddingRight: '30px',
            }}
          >
            <Image
              src="/image/seamlessImage.png"
              width="605px"
              height="452px"
            />
          </Box>
          <Box
            sx={{
              paddingLeft: '30px',
              paddingRight: '30px',
              paddingTop: { xs: '20px', md: '50px' },
              alignSelf: 'center',
            }}
          >
            <Box sx={{ fontWeight: 600, fontSize: '16px' }}>
              Seamless collaboration
            </Box>
            <Box
              sx={{
                paddingTop: '15px',
                fontWeight: 800,
                fontSize: '21px',
                width: { md: '70%' },
              }}
            >
              Communicate and collaborate from wherever you are
            </Box>
            <Box
              sx={{
                fontWeight: 500,
                fontSize: '17px',
                paddingTop: '10px',
                paddingBottom: '50px',
                width: '279px',
              }}
            >
              Invite your team to your workspace. Stay connected, stay in sync,
              and explore ideas together from anywhere.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Seamless;
