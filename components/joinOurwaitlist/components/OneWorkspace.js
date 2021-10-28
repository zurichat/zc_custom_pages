import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SharedButton from '../../shared/shared_button/SharedButton';

function OneWorkspace() {
  return (
    <Box sx={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '50px' }}>
      <Box
        sx={{
          height: '524px',
          background:
            'linear-gradient(271.87deg, #00B87C 6.91%, #00BC7F 23.76%, #00C081 50.46%, #01D892 94.13%)',
          borderRadius: '15px',
          padding: '50px',
          color: 'white',
          display: { md: 'flex' },
          justifyContent: { md: 'space-evenly' },
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}
        >
          <Box
            sx={{
              display: { md: 'flex' },
              flexDirection: { md: 'column' },
              alignSelf: { md: 'center' },
            }}
          >
            <Box
              sx={{
                fontWeight: 800,
                fontSize: { xs: '30px', md: '50px' },
                width: { xs: '100%', md: '70%' },
              }}
            >
              Your all in one workspace
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { md: 'center' },
              }}
            >
              <Box
                sx={{ paddingTop: '20px', width: { xs: '250px', md: '400px' } }}
              >
                <TextField
                  sx={{
                    width: '100%',
                    fontWeight: 400,
                    fontSize: '20px',
                    '& .MuiOutlinedInput-input': {
                      textAlign: 'center',
                      backgroundColor: 'white',
                      borderRadius: '3px',
                    },
                  }}
                  placeholder="Enter your e-mail"
                  variant="outlined"
                />
              </Box>
              <Box
                sx={{
                  paddingTop: '20px',
                  paddingLeft: { md: '20px' },
                  '& .MuiButton-root': {
                    textTransform: 'none',
                    fontSize: '20px',
                    backgroundColor: '#00b87c',
                    boxShadow: 0,
                  },
                  '& :hover': {
                    backgroundColor: '#00b87c',
                  },
                }}
              >
                <SharedButton variant="contained">
                  Join the waitlist
                </SharedButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              paddingTop: '30px',
            }}
          >
            <Image
              src="/image/oneWorkspaceImage.png"
              width="533px"
              height="410px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OneWorkspace;
