// Desc: Logout button component
import { useAppDispatch } from "../../redux/hooks";
import { logoutUser } from "../../redux/authSlice";

const LogoutButton = () => {
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<svg
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className="cursor-pointer hover:text-red-600 w-14 h-14"
			onClick={handleLogout}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
			/>
		</svg>
	);
};

export default LogoutButton;
