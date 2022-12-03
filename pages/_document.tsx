import Document, { Html, Head, Main, NextScript } from "next/document";

class LucidDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" type="image/png" sizes="16x16" href="favicon.svg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default LucidDocument;
