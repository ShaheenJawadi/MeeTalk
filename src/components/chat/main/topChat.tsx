import { Stack, Box, Avatar, Typography, IconButton } from '@mui/material';
import React from 'react';
import { PhoneOutline, VideoOutline } from 'mdi-material-ui';
const TopChat = () => {

    return (
                    
        <Stack paddingY={2} paddingX={5}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom:1 , borderColor:"divider" }}>
            <Box>
                <Stack direction={"row"} alignItems={"center"} spacing={2}  >

                    <Avatar  alt="Shaheen jawadi" />

                    <Stack  >
                        <Typography variant="body1" color={"success"}>Shaheen Jawadi</Typography>
                        <Typography variant="subtitle2" sx={{color:"success.main"}}  >active</Typography>
                    </Stack>



                </Stack>
            </Box>
            <Stack direction={"row"} spacing={2}>
                <IconButton    >
                    <PhoneOutline sx={{ fontSize: 22, color: "primary.main" }} />
                </IconButton >
                <IconButton    >
                    <VideoOutline sx={{ fontSize: 22, color: "primary.main" }} />
                </IconButton > 

            </Stack>
        </Stack>
    );
};

export default TopChat;