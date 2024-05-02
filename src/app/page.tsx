"use client";
import styles from "./page.module.css";
 
import { Box,  Grid } from "@mui/material";
import React from "react";
import LeftSide from "@/components/chat/leftSide";
import MainChat from "@/components/chat/mainChat";
import initIO from "@/socket/init";
import { useDispatch } from 'react-redux'
import { AppDispatch } from "@/store";

export default function Home() {
 
  const dispatch = useDispatch<AppDispatch>()
  dispatch(initIO());
 
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
