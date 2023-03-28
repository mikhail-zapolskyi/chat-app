import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logoutUser } from "../redux/authSlice";
import { BasicLink, Button, Title } from "../components";

const HomePage = () => {
	const { user } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const handleLogOut = () => {
		dispatch(logoutUser());
	};

	return (
		<div className="wrapper-full-screen-dark">
			<Title message="Welcome to pMessanger. Please proceed to login page" />
			{"\n"}
			{!user && <BasicLink href="/login" text="Get Started" />}
			{user && (
				<>
					<BasicLink
						href="/chat"
						text="Proceed to the messanger"
					/>
					<Button onClick={handleLogOut} text="Logout" />
				</>
			)}
		</div>
	);
};

export default HomePage;
