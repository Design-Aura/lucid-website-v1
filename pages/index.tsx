import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "./home";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Lucid</title>
				<meta
					name="description"
					content="With Lucid, you’re never alone. Our games encourage conversations to those that matter to you. We’re redefining fun for you, and for everyone."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<HomePage />
		</div>
	);
};

export default Home;
