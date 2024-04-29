import React from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import { Message, StarFourPoints, AccountBox, Phone, CogOutline } from 'mdi-material-ui';
import MessagesList from './leftSide/messagesList';

const LeftSide = () => {

    return (
        <Stack sx={{ height: "100%", borderRight: 1, borderColor: "divider" }}   >
            <Stack padding={5}  direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                <Stack direction={"row"} spacing={2} alignItems={"center"}>


                    <Avatar alt="Shaheen jawadi" variant='rounded' />

                    <Stack>
                        <Typography variant="h6">Shaheen Jawadi</Typography>
                        <Typography variant="caption">@Shaheenj</Typography>
                    </Stack>

                </Stack>
                <CogOutline sx={{ fontSize:14 }} />

            </Stack> 
            <TabContext value={"1"}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList centered    >
                        <Tab sx={{ p: 0 }} icon={<Message />} value="1" />
                        <Tab sx={{ p: 0 }} icon={<StarFourPoints />} value="2" />
                        <Tab sx={{ p: 0 }} icon={<AccountBox />} value="3" />
                        <Tab sx={{ p: 0 }} icon={<Phone />} value="4" />
                    </TabList>
                </Box>
                <TabPanel sx={{ height: "100%",p: 0 }} value="1"><MessagesList/></TabPanel>
                <TabPanel sx={{ height: "100%" ,p: 0}} value="2">Fav</TabPanel>
                <TabPanel sx={{ height: "100%" ,p: 0}}  value="3">contacts</TabPanel>
                <TabPanel sx={{ height: "100%" ,p: 0}} value="4"> calls</TabPanel>
            </TabContext>



        </Stack>
    );
};

export default LeftSide;