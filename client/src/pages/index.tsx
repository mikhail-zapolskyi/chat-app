import { useAppSelector } from "../redux/hooks";
import { Title } from "../components";
import CtaLink from "../components/links/CtaLink";

const HomePage = () => {
	const { user } = useAppSelector((state) => state.auth);

	return (
		// <div className="wrapper-full-screen-dark">
		<div className="flex w-screen h-screen items-center justify-center flex-col bg-primary">
			<Title message="Welcome to pMessanger" />
			<CtaLink href="/login" text="Proceed to the messanger" />
		</div>
	);
};

export default HomePage;
