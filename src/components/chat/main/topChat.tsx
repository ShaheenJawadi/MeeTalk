import { Stack, Box, Avatar, Typography } from '@mui/material';
import React from 'react';

const TopChat = () => {

    return (
        <Stack padding={2} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
                <Stack direction={"row"} alignItems={"center"} spacing={2}  >

                    <Avatar alt="Shaheen jawadi" />

                    <Stack  >
                        <Typography variant="body1">Shaheen Jawadi</Typography>
                        <Typography variant="subtitle2">@Shaheenj</Typography>
                    </Stack>



                </Stack>
            </Box>
            <Box>
                Call
            </Box>
        </Stack>
    );
};

export default TopChat;