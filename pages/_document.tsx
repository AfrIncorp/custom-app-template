import Document, { DocumentContext, DocumentInitialProps } from "next/document";

class MyDocument extends Promise<DocumentInitialProps> {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}
}

export default MyDocument;
