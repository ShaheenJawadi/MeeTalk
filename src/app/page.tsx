import Image from "next/image";
import styles from "./page.module.css";
import BottomBar from "@/components/conversation/bottomBar";
import MessagesContainer from "@/components/conversation/messages/container";
import * as  io from "socket.io-client";

export default function Home() {
  const socket = io.connect("http://localhost:3500");
  return (
    <main className={styles.main}>
      <MessagesContainer/>
      <BottomBar/>
    </main>
  );
}
