
import { Stack, Box, IconButton, OutlinedInput, InputAdornment } from '@mui/material';
import { FileImage, Send, Paperclip, EmoticonHappyOutline, Microphone } from 'mdi-material-ui';
import React from 'react';

const ChatInput = () => {

    return (
        <Stack direction={"row"} spacing={4} alignItems={"end"} padding={3} >
           
            <Box><FileImage sx={{ fontSize: 22, color: "primary.main" }} /></Box>
            <Box><Paperclip sx={{ fontSize: 22, color: "primary.main" }} /></Box>
            <Box><Microphone sx={{ fontSize: 22, color: "primary.main" }} /></Box>
            <Box flex={1} >

                <OutlinedInput fullWidth placeholder='Message'
                        size="small"
                        multiline
                        maxRows={3}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton    >
                                <EmoticonHappyOutline sx={{ fontSize: 24, color: "primary.main" }} />
                            </IconButton >
                        </InputAdornment>
                    } 
                />
                

            </Box>
           

            <Box >
                <IconButton    >
                    <Send sx={{ fontSize: 25 , color:"primary.main" }} />
                </IconButton >
            </Box>

        </Stack>
    );
};

export default ChatInput;