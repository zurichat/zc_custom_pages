import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            {/* Primary Meta Tags */}
            <title>Zuri Chat - Communicate and Collaborate from wherever you are</title>
            <meta name="title" content="Zuri Chat - Communicate and Collaborate from wherever you are" />
            <meta name="description" content="Zuri-Chat - For Organizations & Institutions. A fully integrated way to connect and interact. Create your future with us, network, collaborate, educate and learn remotely. Invite your team to your workspace. Stay connected, stay in sync, and explore ideas together from anywhere" />
            <meta name="keywords" content="Zuri, Zuri Chat, hngi8, slack, workspace, collaborate" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.zuri.chat/" />
            <meta property="og:title" content="Zuri Chat - Communicate and Collaborate from wherever you are" />
            <meta property="og:description" content="Zuri-Chat - For Organizations & Institutions. A fully integrated way to connect and interact. Create your future with us, network, collaborate, educate and learn remotely. Invite your team to your workspace. Stay connected, stay in sync, and explore ideas together from anywhere" />
            <meta property="og:image" content="https://www.zuri.chat/assets/zuri-chat/logo.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.zuri.chat/" />
            <meta property="twitter:title" content="Zuri Chat - Communicate and Collaborate from wherever you are" />
            <meta property="twitter:description" content="Zuri-Chat - For Organizations & Institutions. A fully integrated way to connect and interact. Create your future with us, network, collaborate, educate and learn remotely. Invite your team to your workspace. Stay connected, stay in sync, and explore ideas together from anywhere" />
            <meta property="twitter:image" content="https://www.zuri.chat/assets/zuri-chat/logo.png" />
        </Head>

        <Component {...pageProps} />
    </>
);

export default MyApp;
