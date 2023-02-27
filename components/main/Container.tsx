import { ReactNode } from "react";

interface Props {
	id?: string;
	className?: string;
	children?: ReactNode;
}

const Container: React.FC<Props> = ({ id, className, children }) => {
	return (
		<div
			id={id}
			className={`relative grid min-h-[100vh] grid-rows-[1fr_auto] items-start scroll-smooth ${
				className ?? ""
			}`}
		>
			{children}
		</div>
	);
};
export default Container;
