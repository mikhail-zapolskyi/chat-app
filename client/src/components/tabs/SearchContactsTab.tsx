import styles from "./SearchContactsTab.module.css";
import { BsSearch } from "react-icons/bs";

interface ISearchContactsTabProps {
	onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	onClick: () => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchContactsTab: React.FC<ISearchContactsTabProps> = ({
	onchange,
	value,
	onClick,
	onKeyDown,
}) => {
	return (
		<div>
			<label
				htmlFor="default-search"
				className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
			>
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</div>
				<input
					type="search"
					name="searchInput"
					value={value}
					onChange={onchange}
					placeholder="Search Contact By Email"
					onKeyDown={onKeyDown}
					className="block w-full p-4 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
				/>
				<button
					onClick={onClick}
					className="text-white absolute right-2.5 bottom-2.5 bg-secondary hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2"
				>
					Search
				</button>
			</div>
		</div>
	);
};

export default SearchContactsTab;
