import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Hidden from '@mui/material/Hidden';
import Button from '@mui/material/Button';

function HeadingTextWithImage() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 400,
          fontSize: { md: '20px' },
        }}
      >
        THE FUTURE OF REMOTE WORK IS HERE
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '80%', md: '70%' },
            textAlign: 'center',
            fontWeight: 800,
            fontSize: { xs: '22px', md: '45px' },
            paddingTop: '20px',
          }}
        >
          Network. Collaborate. Educate. Learn Remotely. A fully integrated way
          to connect and interact.
        </Box>
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}
      >
        <Box
          sx={{
            width: { xs: '90%', md: '30%' },
            textAlign: 'center',
            fontWeight: 400,
            fontSize: '20px',
          }}
        >
          We are building the platform that will power remote work in the future
          - and make it feel as good as sitting across the desk from your
          friends. Create your future with us, network, collaborate, educate and
          learn remotely.
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '20px',
              width: '400px',
            }}
          >
            <TextField
              sx={{
                width: { xs: '80%', md: '90%' },
                fontWeight: 400,
                fontSize: '20px',
                '& .MuiOutlinedInput-input': {
                  textAlign: 'center',
                  borderRadius: '3px',
                },
              }}
              placeholder="Enter your e-mail"
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '20px',
              '& .MuiButton-root': {
                textTransform: 'none',
                fontSize: '20px',
                backgroundColor: '#00b87c',
                boxShadow: 0,
              },
            }}
          >
            <Button variant="contained">Join the waitlist</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Hidden mdDown>
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '300px', md: '850px', xl: '950px' },
            }}
          >
            <Image src="/image/laptop.png" width="921px" height="616px" />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              left: { md: '900px', xl: '1200px' },
              top: '920px',
            }}
          >
            <Image src="/image/phone.png" width="462px" height="784px" />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Box
            sx={{
              position: 'absolute',
              left: '4px',
              top: '700px',
            }}
          >
            <Image
              src="/image/laptop.png"
              width="322.15px"
              height="215.46px"
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              left: '240px',
              top: '720px',
            }}
          >
            <Image src="/image/phone.png" width="161px" height="262px" />
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
}

export default HeadingTextWithImage;
