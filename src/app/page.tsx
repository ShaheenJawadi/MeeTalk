"use client";
import styles from "./page.module.css";
import * as  io from "socket.io-client";

import { Box,  Grid } from "@mui/material";
import React from "react";
import LeftSide from "@/components/chat/leftSide";
import MainChat from "@/components/chat/mainChat";
const socket = io.connect("http://localhost:3500");
export default function Home() {


  //   const [message, setMessage] = useState(""); 
  //   const [recivedMessages, setRecivedMessages] = useState<string[]>([]);
  //   function sendMessage() { 
  //     socket.emit("send_msg", { message: message });
  //   }

  //   useEffect(() => {
  //     socket.on("receive_msg", (data) => { 
  //       setRecivedMessages(recivedMessages.concat(data.message));
  //     });
  //   }, [socket]);

  // return (
  //   <main className={styles.main}>

  //     {
  //       recivedMessages.map((msg, index) => {
  //         return <div key={index}>{msg}</div>;
  //       })
  //     }
  //     <div>

  //       <input type="text" onChange={(e) => {
  //         setMessage(e.target.value);
  //       }} placeholder="Type a message" />

  //       <button onClick={sendMessage} >Send</button>
  //     </div>
  //   </main>
  // );



  return (
    <Box className={styles.fullHeight}>

      <Grid container className={styles.fullHeight}>
        <Grid item md={3}>
         <LeftSide/>
        </Grid>
        <Grid item md={9}>
          <MainChat/>
        </Grid>
      </Grid>

    </Box>
  );
}
