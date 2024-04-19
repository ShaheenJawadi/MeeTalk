"use client";
import styles from "./page.module.css";
import BottomBar from "@/components/conversation/bottomBar";
import MessagesContainer from "@/components/conversation/messages/container";
import * as  io from "socket.io-client";
import { useEffect, useState } from "react";

export default function Home() {
  const socket = io.connect("http://localhost:3500");

  const [message, setMessage] = useState(""); 
  const [recivedMessages, setRecivedMessages] = useState<string[]>([]);
  function sendMessage() { 
    socket.emit("send_msg", { message: message });
  }

  useEffect(() => {
    socket.on("receive_msg", (data) => {  
      setRecivedMessages(recivedMessages.concat(data.message));
    });
  }, [socket]);

  return (
    <main className={styles.main}>

    {
      recivedMessages.map((msg, index) => {
        return <div key={index}>{msg}</div>;
      })
    }
      <div>

        <input type="text" onChange={(e) => {
          setMessage(e.target.value);
        }} placeholder="Type a message" />

        <button onClick={sendMessage} >Send</button>
      </div>
    </main>
  );
}
