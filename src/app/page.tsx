import Image from "next/image";
import styles from "./page.module.css";
import BottomBar from "@/components/conversation/bottomBar";
import MessagesContainer from "@/components/conversation/messages/container";

export default function Home() {
  return (
    <main className={styles.main}>
      <MessagesContainer/>
      <BottomBar/>
    </main>
  );
}
