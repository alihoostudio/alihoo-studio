import "../styles/globals.css";
import Layout from "@components/layout/Layout";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { DefaultSeo } from "next-seo";

const inter = Inter({
	variable: "--font-inter",
	weight: ["200", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo
				openGraph={{
					type: "website",
					locale: "en-US",
					url: "https://alihoo.studio/",
					siteName: "Alihoo",
				}}
				twitter={{
					cardType: "summary_large_image",
					site: "@alihoo.studio",
					handle: "@walihoo.studio",
				}}
			/>
			<Layout
				className={`${inter.variable} relative w-full font-inter selection:bg-transparent selection:text-selectionLight dark:selection:text-selectionDark`}
			>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
