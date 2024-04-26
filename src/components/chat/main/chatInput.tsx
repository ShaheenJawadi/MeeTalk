import { Stack ,Box, TextField, Button } from '@mui/material';
import React from 'react';

const ChatInput = () => {

    return (
        <Stack direction={"row"} spacing={4} alignItems={"center"} padding={3} >
            <Box>Emoji</Box>
            <Box flex={1} >
                            <TextField fullWidth placeholder='Message' id="fullWidth" />

            </Box>
            <Box>IMG</Box>
            <Box>
               
                <Box>
                    <Button variant="contained" color="primary">
                        send
                    </Button>
                </Box>
            </Box>
        </Stack>
    );
};

export default ChatInput;