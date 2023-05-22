interface ISearchContactResultCardProps {
	contact: {
		id: string;
		name?: string;
		email: string;
		avatar?: string;
	};
	addContact: () => void;
}

const SearchContactResultCard: React.FC<ISearchContactResultCardProps> = ({
	contact,
	addContact,
}) => {
	const { name, email, avatar } = contact;
	const imgURL = "https://www.w3schools.com/howto/img_avatar.png";

	return (
		<div className="w-fulls mt-5 bg-chat-active border border-chat rounded-lg shadow">
			<div className="flex justify-center px-4 pt-4">
				<div className="flex flex-col items-center pb-10">
					<img
						className="w-24 h-24 mb-3 rounded-full shadow-lg"
						src={avatar || imgURL}
						alt={`${name && name} avatar`}
					/>
					<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
						{name}
					</h5>
					<span className="text-lg text-gray-500 dark:text-gray-400">
						{email && email}
					</span>
					<div
						className="flex mt-4 space-x-3 md:mt-6"
						onClick={addContact}
					>
						<a
							href="#"
							className="inline-flex items-center px-4 py-2 text-md font-medium text-center text-white bg-secondary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
						>
							Add friend
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchContactResultCard;
