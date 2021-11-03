/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const Index = () => (
	<>
		<div style={{border: "2px solid #f00", padding: "30px"}}>
			<h2>Top Navigation Bar</h2>
			<Link href="/~/"><a>Home</a></Link> | 
			<Link href="/~/about"><a>About</a></Link> | 
			<Link href="/~/plugins"><a>Plugins</a></Link> | 
			<Link href="/~/pricing"><a>Pricing</a></Link> | 
			<Link href="/~/downloads"><a>Downloads</a></Link> | 
			<Link href="/~/contact"><a>Contact</a></Link>
		</div>
	</>
);

export default Index;
