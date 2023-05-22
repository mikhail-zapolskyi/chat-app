import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/router";
import { io, Socket } from "socket.io-client";
import {
	AdditionalMenu,
	ChatInput,
	ChatMessage,
	ContactBoard,
	ContactCard,
	ContactCardChat,
	ContactList,
	ErrorMessage,
	MenuBoard,
	SearchContactResultCard,
	SearchContactsTab,
	UserCard,
	UserSettingsTab,
} from "../components";
import {
	addContact,
	getContactList,
	removeContact,
} from "../redux/contactsSlice";
import { getMessages, addMessage } from "../redux/messagesSlice";
import { getError } from "../redux/errorSlice";
import { IUser } from "@/interfaces/IUser";
import { IContact } from "@/interfaces/IContact";
import { getUrl, getSocketUrl } from "@/helpers/GetUrl";
import { changeMenu } from "@/redux/menuTabSlice";
import { useFindContact } from "@/hooks";
import { getUser } from "@/redux/authSlice";

const Chat = () => {
	const router = useRouter();
	const [socket, setSocket] = useState<Socket | null>(null);
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth) as {
		user: IUser | null;
	};
	const { contacts, messages, menuTab } = useAppSelector((state) => state);
	const [inputMessage, setInputMessage] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [searchResult, setSearchResult] = useState({ id: "", email: "" });
	const [roomId, setRoomId] = useState("");
	const [contact, setContact] = useState({ id: "" }) as [IContact, any];
	const socketUrl = getSocketUrl();
	const url = getUrl();
	const targetContact = useFindContact(contacts, roomId);

	// Check if user is logged in
	useEffect(() => {
		if (!user) {
			router.push("/login");
		}
	}, [user]);

	// Get messages and update chatMessages state
	useEffect(() => {
		if (roomId) {
			dispatch(getMessages(roomId));
		}
	}, [roomId, dispatch]);

	useEffect(() => {
		const newSocket = io(socketUrl, {
			auth: { userId: user?.id },
		});
		setSocket(newSocket);
		return () => {
			newSocket.disconnect();
		};
	}, [user]);

	useEffect(() => {
		if (!socket) {
			return;
		}

		socket.on("userOnlineStatusChanged", async () => {
			dispatch(getContactList({ userId: user?.id }));
		});

		socket.on("message", (newMessage) => {
			dispatch(addMessage(newMessage));
		});

		socket.on("contactAdded", (data) => {
			if (data.userId === user?.id || data.contactId === user?.id) {
				dispatch(getContactList({ userId: user?.id }));
			}
		});

		socket.on("contactRemoved", (data) => {
			if (data.userId === user?.id || data.contactId === user?.id) {
				dispatch(getContactList({ userId: user?.id }));
			}
		});

		socket.on("userInfoChanged", () => {
			if (user && user.contactList) {
				dispatch(getUser());
			}
		});

		return () => {
			socket.off("message");
			socket.off("userOnlineStatusChanged");
			socket.off("contactAdded");
			socket.off("contactRemoved");
			socket.off("userInfoChanged");
		};
	}, [socket]);

	const handleSearchInputOnChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		e.preventDefault();

		setSearchInput(e.target.value);
	};

	const handleChatTextAreaOnChange = async (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		e.preventDefault();

		setInputMessage(e.target.value);
	};

	const handleSendMessage = async () => {
		if (!inputMessage || inputMessage === "\n" || inputMessage === "") {
			return;
		}

		await socket?.emit("sendMessageToRoom", {
			message: inputMessage,
			roomId,
			userId: user?.id,
		});
		setInputMessage("");
	};

	const handleSendMessageOnEnter = async (
		e: React.KeyboardEvent<HTMLTextAreaElement>
	) => {
		if ((e.key === "Enter" || e.code === "Enter") && !e.shiftKey) {
			e.preventDefault();
			await handleSendMessage();
		}

		if ((e.key === "Enter" || e.code === "Enter") && e.shiftKey) {
			e.preventDefault();
			setInputMessage(inputMessage + "\n");
		}
	};

	const findContact = async () => {
		await fetch(`${url}/contacts/find`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: searchInput,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.errors) {
					dispatch(getError(data.errors.message));
				}

				if (data.contact) {
					setSearchResult(data.contact);
					setSearchInput("");
				}
			});
	};

	const findContactOnEnter = async (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === "Enter" || e.code === "Enter") {
			e.preventDefault();
			await findContact();
		}
	};

	const add_contact = async () => {
		dispatch(
			addContact({
				userId: user?.id,
				contactId: searchResult.id,
			})
		).then((res) => {
			if (res.payload.errors) {
				dispatch(getError(res.payload.errors.message));
			}

			socket?.emit("addContact", {
				userId: user?.id,
				contactId: searchResult.id,
			});
		});
		dispatch(changeMenu("contacts"));
		clear_contact();
	};

	const remove_contact = async (userId: string, contactId: string) => {
		dispatch(
			removeContact({
				userId,
				contactId,
			})
		).then((res) => {
			if (res.payload.errors) {
				dispatch(getError(res.payload.errors.message));
			}
			setContact({ id: "" });
			setRoomId("");

			socket?.emit("removeContact", {
				userId,
				contactId,
			});
		});
	};

	const clear_contact = () => {
		setSearchResult({ id: "", email: "" });
	};

	return (
		<div
			className={`
				w-screen h-screen bg-chat grid grid-rows-2 relative
				md:grid-rows-none md:grid-cols-mdChat`}
		>
			<MenuBoard />
			<div
				className={`${
					menuTab.type === "messages" && "max-md:hidden"
				}`}
			>
				<ContactBoard>
					<UserCard user={user} />
					{(menuTab.type === "contacts" ||
						(menuTab.type === "messages" &&
							window.screen.width >= 640)) && (
						<ContactList>
							{user &&
								contacts.map((userContact) => {
									return (
										<ContactCard
											key={userContact.id}
											contact={userContact}
											onClick={() => {
												setRoomId(
													userContact.roomId
												);
												setContact(
													userContact
												);
												dispatch(
													changeMenu(
														"messages"
													)
												);
											}}
											active={
												contact?.id ===
												userContact.id
													? true
													: false
											}
											removeContactOnClick={() =>
												remove_contact(
													user.id,
													userContact.contactId
												)
											}
										/>
									);
								})}
						</ContactList>
					)}
					{menuTab.type === "addContact" && (
						<AdditionalMenu>
							<SearchContactsTab
								value={searchInput}
								onchange={handleSearchInputOnChange}
								onClick={findContact}
								onKeyDown={findContactOnEnter}
							/>
							{searchResult.id && (
								<SearchContactResultCard
									contact={searchResult}
									addContact={add_contact}
								/>
							)}
						</AdditionalMenu>
					)}
					{menuTab.type === "userSettings" && user && (
						<AdditionalMenu>
							<UserSettingsTab
								user={user}
								socket={socket}
							/>
						</AdditionalMenu>
					)}
				</ContactBoard>
			</div>
			{roomId && user && (
				<div
					className={`
					row-span-full h-full bg-chat-active grid grid-rows-mdChat 
					md:row-auto md:span-col-3 ${menuTab.type !== "messages" && "hidden md:grid"}`}
				>
					<ContactCardChat
						contact={targetContact}
						removeContactOnClick={() =>
							remove_contact(
								user.id,
								targetContact.contactId
							)
						}
					/>
					<ul className="chat-messageBoard__messages">
						{messages.map((msg) => {
							return (
								<ChatMessage
									key={msg.id}
									id={msg.id}
									msg={msg.message}
									isContact={
										msg.userId === user.id
											? false
											: true
									}
									contact={contact}
									date={msg.createdAt}
								/>
							);
						})}
					</ul>
					<ChatInput
						input={inputMessage}
						onChange={handleChatTextAreaOnChange}
						onClick={handleSendMessage}
						onKeyDown={handleSendMessageOnEnter}
					/>
				</div>
			)}
			<ErrorMessage />
		</div>
	);
};

export default Chat;
