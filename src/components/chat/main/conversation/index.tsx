import { Paper, Stack, Box } from '@mui/material';
import React from 'react';
import UserChat from './userChat';

const Conversation = () => {

    return (
        <Box padding={5} sx={{ height: "100%", backgroundColor: 'background.paper' }} >
            <Stack spacing={2} direction={"column"} >
                <UserChat />

            </Stack>
        </Box>
    );
};

export default Conversation;