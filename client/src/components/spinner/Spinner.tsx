import ScaleLoader from "react-spinners/ScaleLoader";
import styles from "./Spinner.module.css";

const Spinner = () => {
	return (
		<div className={styles.wrapper}>
			<ScaleLoader color="#1e1e1e" height={10} width={20} />
		</div>
	);
};

export default Spinner;
