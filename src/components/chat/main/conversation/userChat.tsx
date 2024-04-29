import { Avatar, Stack, Box, Paper, Typography ,Card } from '@mui/material';
import React from 'react';
import { ClockTimeFiveOutline } from 'mdi-material-ui';
const UserChat = () => {

    return (
        <Stack direction={"row"} spacing={2}  >
            <Box>
                <Avatar sizes='small' alt="Shaheen jawadi" />

            </Box>

            <Stack direction={"column"} spacing={1} >
                <Card sx={{ padding: 2 }}>
                    gyhfghfgh
                </Card>
                <Stack direction={"row"} alignItems={"center"} spacing={0.5} >
                    <ClockTimeFiveOutline sx={{ fontSize: 14 }} />
                    <Typography variant="caption">2 days ago</Typography>

                </Stack>

            </Stack>


        </Stack>
    );
};

export default UserChat;