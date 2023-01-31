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
			<a href="/login" className="">
				Login
			</a>
			{user && (
				<p onClick={handleLogOut} style={{ cursor: "pointer" }}>
					Logout
				</p>
			)}
		</div>
	);
};

export default HomePage;
