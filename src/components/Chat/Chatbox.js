import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db, auth } from "../../Firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import './Chat.css';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';


const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
    const [toggle, setToggle] = useState("");
    const expand = toggle ? "open" : "";
    /*
    const listAllUsers = (nextPageToken) => {
    // List batch of users, 1000 at a time.
    getAuth()
        .listUsers(1000, nextPageToken)
        .then((listUsersResult) => {
            listUsersResult.users.forEach((userRecord) => {
                console.log('user', userRecord.toJSON());
            });
            if (listUsersResult.pageToken) {
                // List next batch of users.
                listAllUsers(listUsersResult.pageToken);
            }
        })
        .catch((error) => {
            console.log('Error listing users:', error);
        });
    };
    // Start listing users from the beginning, 1000 at a time.
    listAllUsers();
    */

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            limit(50)
        );

        scroll.current?.scrollIntoView({ behavior: 'smooth' });

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            const sortedMessages = fetchedMessages.sort(
                (a, b) => a.createdAt - b.createdAt
            );
            setMessages(sortedMessages);
        });
        return () => unsubscribe;
    }, []);
    scroll.current?.scrollIntoView({ behavior: "smooth" });
    return (
        <>
            <Fab className="btnChat" variant="extended" onClick={() => {
                setToggle(!toggle);
            } }>
                <ChatIcon sx={{ mr: 1 }} />
                {!toggle ? "ABRIR CHAT" : "CERRAR CHAT" }
            </Fab>
            <div className={`navBox ${expand} chat-box`}>
                <h3>Chat RadioItal.com</h3>
                <div className="messages-wrapper">
                    {messages.map((message) => (
                        <Message key={message.id} message={message} />
                        ))}
                    <span ref={scroll}></span>  
                </div>
                {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
                <SendMessage scroll={scroll} />
            </div>
        </>
    );
};

export default ChatBox; 