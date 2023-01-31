import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logoutUser } from "../redux/authSlice";

const HomePage = () => {
	const { user } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const handleLogOut = () => {
		dispatch(logoutUser());
	};

	return (
		<div>
			<h1>Welcome to Chat App. Please proceed to login page</h1>
			{!user && (
				<a href="/login" className="">
					Login
				</a>
			)}
			{user && (
				<div>
					<a href="/chat" className="">
						Chat
					</a>
					<p
						onClick={handleLogOut}
						style={{ cursor: "pointer" }}
					>
						Logout
					</p>
				</div>
			)}
		</div>
	);
};

export default HomePage;
