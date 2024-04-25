"use client";
import styles from "./page.module.css";
import BottomBar from "@/components/conversation/bottomBar";
import * as  io from "socket.io-client";
import { useEffect, useState } from "react";
import { Avatar, Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
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
          <Stack  padding={5}  >
            <Stack direction={"row"}   >

              <Avatar alt="Shaheen jawadi" />

              <Stack  >
                <Typography variant="h6">Shaheen Jawadi</Typography>
                <Typography variant="caption">@Shaheenj</Typography>
              </Stack>



            </Stack>
            <Typography variant="h4">Chats</Typography>
          </Stack>
        </Grid>
        <Grid item md={9}>
          qsdqs
        </Grid>
      </Grid>

    </Box>
  );
}
