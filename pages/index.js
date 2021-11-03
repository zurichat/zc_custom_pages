import React from 'react';

// Packages
import Image from 'next/image';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

// Components
import { SharedButton } from '../components';

const Index = () => {

  const socialMediaIcons = [
    { id: 1, icon: <FaFacebookF />, fontSize: '27px' },
    { id: 2, icon: <FaTwitter />, fontSize: '30px' },
    { id: 3, icon: <FaInstagram />, fontSize: '30px' },
    { id: 4, icon: <FaLinkedinIn />, fontSize: '30px' },
  ];

  return (
    <>
      <CssBaseline />

      {/* Logo */}
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: { xs: '20px', md: '50px' }, }}>
        <Image src="/assets/zuri-chat/logo.svg" width="30%" height="100%" />
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', fontSize: { xs: '25px', md: '30px' }, fontWeight: 900, }}>
          ZURI CHAT
        </Box>
      </Box>

      {/* Jumbotron CTA */}
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 400, fontSize: { md: '20px' }, }}>
          THE FUTURE OF REMOTE WORK IS HERE
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', }} >
          <Box sx={{ width: { xs: '80%', md: '70%' }, textAlign: 'center', fontWeight: 800, fontSize: { xs: '22px', md: '45px' }, paddingTop: '20px', }}>
            Network. Collaborate.
            <br />
            Educate. Learn Remotely.
            <br />
            <span>A fully integrated way to connect and interact.</span>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <Box sx={{ width: { xs: '90%', md: '30%' }, textAlign: 'center', fontWeight: 400, fontSize: '20px', }}>
            We are building the platform that will power remote work in the future - and make it feel as good as sitting across the desk from your friends. Create your future with us, network, collaborate, educate and learn remotely.
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', width: '400px', }}>
              <TextField
                sx={{ width: { xs: '80%', md: '90%' }, fontWeight: 400, fontSize: '20px', '& .MuiOutlinedInput-input': { textAlign: 'center', borderRadius: '3px', }, }}
                placeholder="Enter your e-mail"
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', '& .MuiButton-root': { textTransform: 'none', fontSize: '20px', backgroundColor: '#00b87c', boxShadow: 0, }, }}>
              <SharedButton variant="contained">Join the waitlist</SharedButton>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Hidden mdDown>
            <Box sx={{ position: 'absolute', top: { xs: '300px', md: '850px', xl: '950px' }, }} >
              <Image src="/assets/pages/landing-page/laptop.png" width="921px" height="616px" />
            </Box>
            <Box sx={{ position: 'absolute', left: { md: '900px', xl: '1200px' }, top: '920px', }} >
              <Image src="/assets/pages/landing-page/phone.png" width="462px" height="784px" />
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Box sx={{ position: 'absolute', left: '4px', top: '700px', }} >
              <Image src="/assets/pages/landing-page/laptop.png" width="322.15px" height="215.46px" />
            </Box>
            <Box sx={{ position: 'absolute', left: '240px', top: '720px', }} >
              <Image src="/assets/pages/landing-page/phone.png" width="161px" height="262px" />
            </Box>
          </Hidden>
        </Box>
      </Box>

      {/* Seamless collaboration */}
      <Box>
        <Box sx={{ background: '#f3fffB', minHeight: { xs: '60vh', md: '500px' }, position: 'relative', top: { xs: '220px', md: '600px', xl: '800px' }, minWidth: '100vw', paddingTop: '20px', paddingBottom: '100px', }} >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly', }} >
            <Box sx={{ paddingTop: { xs: '50px', md: '60px' }, paddingLeft: '30px', paddingRight: '30px', }} >
              <Image src="/assets/pages/landing-page/seamlessImage.png" width="605px" height="452px" />
            </Box>
            <Box sx={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: { xs: '20px', md: '50px' }, alignSelf: 'center', }} >
              <Box sx={{ fontWeight: 600, fontSize: '16px' }}>
                Seamless collaboration
              </Box>
              <Box sx={{ paddingTop: '15px', fontWeight: 800, fontSize: '21px', width: { md: '70%' }, }} >
                Communicate and collaborate from wherever you are
              </Box>
              <Box sx={{ fontWeight: 500, fontSize: '17px', paddingTop: '10px', paddingBottom: '50px', width: '279px', }} >
                Invite your team to your workspace. Stay connected, stay in sync,
                and explore ideas together from anywhere.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Remote education */}
      <Box>
        <Box sx={{ background: 'white', minHeight: { xs: '60vh', md: '500px' }, minWidth: '100vw', paddingTop: { xs: '50px', md: '150px', xl: '300px' }, paddingBottom: '100px', }} >
          <Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, justifyContent: 'space-evenly', }} >
              <Box sx={{ paddingTop: { xs: '250px', md: '550px' }, paddingLeft: '30px', paddingRight: '30px', }} >
                <Image src="/assets/pages/landing-page/lightGreenImage.png" width="605px" height="452px" />
              </Box>
              <Box sx={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: { xs: '20px', md: '550px' }, alignSelf: 'center', }} >
                <Box sx={{ fontWeight: 600, fontSize: '16px' }}>
                  Remote education
                </Box>
                <Box sx={{ paddingTop: '15px', fontWeight: 800, fontSize: '21px' }} >
                  Learn on the go
                </Box>
                <Box sx={{ fontWeight: 500, fontSize: '17px', paddingTop: '10px', paddingBottom: '50px', width: '279px', }} >
                  Take your classroom everywhere, make learning fun, stay engaged
                  and inspired with the virtual lounge and games.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Advanced search */}
      <Box>
        <Box sx={{ background: '#f3fffB', minHeight: { xs: '60vh', md: '500px' }, position: 'relative', minWidth: '100vw', paddingTop: '20px', paddingBottom: '100px', }} >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly', }} >
            <Box sx={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px', }} >
              <Image src="/assets/pages/landing-page/accessFilesImage.png" width="605px" height="452px" />
            </Box>

            <Box sx={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: { xs: '20px', md: '50px' }, alignSelf: 'center', }} >
              <Box sx={{ fontWeight: 600, fontSize: '16px' }}>
                Advanced search
              </Box>
              <Box sx={{ paddingTop: '15px', fontWeight: 800, fontSize: '21px', width: { md: '70%' }, }} >
                Access Files and Messages in your Workspace Effortlessly
              </Box>
              <Box sx={{ fontWeight: 500, fontSize: '17px', paddingTop: '10px', paddingBottom: '50px', width: '279px', }} >
                With the search tool, find previously shared messages, files and
                links with ease.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Your all in one workspace */}
      <Box>
        <Box sx={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '50px' }}>
          <Box sx={{ height: '524px', background: 'linear-gradient(271.87deg, #00B87C 6.91%, #00BC7F 23.76%, #00C081 50.46%, #01D892 94.13%)', borderRadius: '15px', padding: '50px', color: 'white', display: { md: 'flex' }, justifyContent: { md: 'space-evenly' }, }} >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }} >
              <Box sx={{ display: { md: 'flex' }, flexDirection: { md: 'column' }, alignSelf: { md: 'center' }, }} >
                <Box sx={{ fontWeight: 800, fontSize: { xs: '30px', md: '50px' }, width: { xs: '100%', md: '70%' }, }} >
                  Your all in one workspace
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, }} >
                  <Box sx={{ paddingTop: '20px', width: { xs: '100%', md: '400px' } }} >
                    <TextField
                      sx={{ width: '100%', fontWeight: 400, fontSize: '20px', '& .MuiOutlinedInput-input': { textAlign: 'center', backgroundColor: 'white', borderRadius: '3px', }, }}
                      placeholder="Enter your e-mail"
                      variant="outlined"
                    />
                  </Box>
                  <Box sx={{ paddingTop: '20px', paddingLeft: { md: '20px' }, '& .MuiButton-root': { textTransform: 'none', fontSize: '20px', backgroundColor: '#00b87c', boxShadow: 0, }, '& :hover': { backgroundColor: '#00b87c', }, }} >
                    <SharedButton variant="contained">
                      Join the waitlist
                    </SharedButton>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ paddingTop: '30px', }} >
                <Image src="/assets/pages/landing-page/oneWorkspaceImage.png" width="533px" height="410px" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box>
        <Box sx={{ paddingTop: '70px', display: 'flex', justifyContent: 'center', }} >
          {socialMediaIcons.map(({ id, icon, fontSize }) => (
            <Box key={id} fontSize={fontSize} sx={{ padding: '15px' }}>
              {icon}
            </Box>
          ))}
        </Box>
        <Box sx={{ paddingTop: '30px', paddingBottom: '40px', display: 'flex', justifyContent: 'center', fontSize: '20px', }} >
          {new Date().getFullYear()} Zuri Chat. All rights reserved.
        </Box>
      </Box>
    </>
  );
};

export default Index;
