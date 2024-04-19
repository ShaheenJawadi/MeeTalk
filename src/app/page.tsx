"use client";
import styles from "./page.module.css";
import BottomBar from "@/components/conversation/bottomBar";
import MessagesContainer from "@/components/conversation/messages/container";
import * as  io from "socket.io-client";
import { useEffect, useState } from "react";

export default function Home() {
  const socket = io.connect("http://localhost:3500");

  const [message, setMessage] = useState(""); 
  function sendMessage() { 
    socket.emit("send_msg", { message: message });
  }


  return (
    <main className={styles.main}>

      <div>

        <input type="text" onChange={(e) => {
          setMessage(e.target.value);
        }} placeholder="Type a message" />

        <button onClick={sendMessage} >Send</button>
      </div>
    </main>
  );
}
