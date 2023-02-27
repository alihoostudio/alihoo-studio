import { ReactNode } from "react";
// import Header from "@components/navigation/Header";
import Container from "@components/main/Container";
// import Footer from "@components/navigation/Footer";
// import HeadTheme from "./HeadTheme";

interface Props {
	className?: string;
	children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children, className }) => {
	return (
		<main className={className}>
			{/* <HeadTheme /> */}
			{/* <Header /> */}
			<Container>
				{children}
				{/* <Footer /> */}
			</Container>
		</main>
	);
};
export default Layout;
