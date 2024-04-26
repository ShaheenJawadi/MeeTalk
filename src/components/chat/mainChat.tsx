import { Box, Stack } from '@mui/material';
import React from 'react';
import TopChat from './main/topChat';
import Conversation from './main/conversation';
import ChatInput from './main/chatInput';
 
const MainChat = () => {
     
    return (
        <Stack height="100vh">
            <TopChat />
            <Box flex={1}>
                <Conversation />
            </Box>
            <ChatInput />
        </Stack>
    );
};

export default MainChat;