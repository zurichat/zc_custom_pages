import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';

function AccessFiles() {
  return (
    <Box>
      <Box
        sx={{
          background: '#f3fffB',
          minHeight: { xs: '60vh', md: '500px' },
          position: 'relative',
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
              paddingTop: '50px',
              paddingLeft: '30px',
              paddingRight: '30px',
            }}
          >
            <Image
              src="/image/accessFilesImage.png"
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
              Advanced search
            </Box>
            <Box
              sx={{
                paddingTop: '15px',
                fontWeight: 800,
                fontSize: '21px',
                width: { md: '70%' },
              }}
            >
              Access Files and Messages in your Workspace Effortlessly
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
              With the search tool, find previously shared messages, files and
              links with ease.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AccessFiles;
