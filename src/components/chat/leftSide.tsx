import React from 'react';
 
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Box,   Stack, Typography } from "@mui/material";
 

const LeftSide = () => {
  
    return (
        <Stack padding={5}  >
            <Stack direction={"row"}   >

                <Avatar alt="Shaheen jawadi" />

                <Stack  >
                    <Typography variant="h6">Shaheen Jawadi</Typography>
                    <Typography variant="caption">@Shaheenj</Typography>
                </Stack>



            </Stack>
            <Typography variant="h4">Chats</Typography>
            <TabContext value={"1"}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList    >
                        <Tab label="M" value="1" />
                        <Tab label="F" value="2" />
                        <Tab label="C" value="3" />
                        <Tab label="C" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1">Messages</TabPanel>
                <TabPanel value="2">Fav</TabPanel>
                <TabPanel value="3">calls</TabPanel>
                <TabPanel value="4">contacts</TabPanel>
            </TabContext>



        </Stack>
    );
};

export default LeftSide;