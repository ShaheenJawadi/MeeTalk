import { Paper, Stack, Box } from '@mui/material';
import React from 'react';
import UserChat from './userChat';

const Conversation = () => {

    return (
        <Box padding={5} sx={{ height: "100%", backgroundColor: 'background.paper' }} >
            <Stack spacing={2} direction={"column"} >
                <UserChat pos={"right"} />
                <UserChat pos='' />

                <UserChat pos={"right"} />
                <UserChat pos='' />
                 <UserChat pos='' />
                <UserChat pos={"right"} />
                <UserChat pos='' />
                <UserChat pos={"right"} />
                <UserChat pos={"right"} />
            </Stack>
        </Box>
    );
};

export default Conversation;