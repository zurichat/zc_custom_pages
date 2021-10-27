import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';

function RemoteEducation() {
  return (
    <Box>
      <Box
        sx={{
          background: 'white',
          minHeight: { xs: '60vh', md: '500px' },
          minWidth: '100vw',
          paddingTop: { xs: '50px', md: '150px', xl: '300px' },
          paddingBottom: '100px',
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row-reverse' },
              justifyContent: 'space-evenly',
            }}
          >
            <Box
              sx={{
                paddingTop: { xs: '250px', md: '550px' },
                paddingLeft: '30px',
                paddingRight: '30px',
              }}
            >
              <Image
                src="/image/lightGreenImage.png"
                width="605px"
                height="452px"
              />
            </Box>
            <Box
              sx={{
                paddingLeft: '30px',
                paddingRight: '30px',
                paddingTop: { xs: '20px', md: '550px' },
                alignSelf: 'center',
              }}
            >
              <Box sx={{ fontWeight: 600, fontSize: '16px' }}>
                Remote education
              </Box>
              <Box
                sx={{ paddingTop: '15px', fontWeight: 800, fontSize: '21px' }}
              >
                Learn on the go
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
                Take your classroom everywhere, make learning fun, stay engaged
                and inspired with the virtual lounge and games.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RemoteEducation;
