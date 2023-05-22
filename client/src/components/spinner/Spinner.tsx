import ScaleLoader from "react-spinners/ScaleLoader";

const Spinner = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center">
			<ScaleLoader color="#1e1e1e" height={10} width={20} />
		</div>
	);
};

export default Spinner;
