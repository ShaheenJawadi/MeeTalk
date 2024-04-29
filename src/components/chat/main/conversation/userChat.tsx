import { Avatar, Stack, Box, Paper, Typography ,Card, CardProps, styled } from '@mui/material';
import React from 'react';
import { ClockTimeFiveOutline } from 'mdi-material-ui';

const MessageBox = styled(Card)<CardProps>(({ theme }) => ({
    padding: theme.spacing(2),
    '&.right': {
        backgroundColor: theme.palette.primary.main,
       
        '& .MuiTypography-root': { color:theme.palette.common.white,},

        
    }
}))

const UserChat = () => {

    return (
        <Stack direction={"row"} spacing={2}  >
            <Box>
                <Avatar sizes='small' alt="Shaheen jawadi" />

            </Box>

            <Stack direction={"column"} spacing={1} >
                <MessageBox  className='right' >
                    <Typography variant='body1'>gyhfghfgh</Typography>
                </MessageBox>
                <Stack direction={"row"} alignItems={"center"} spacing={0.5} >
                    <ClockTimeFiveOutline sx={{ fontSize: 14 }} />
                    <Typography variant="caption">2 days ago</Typography>

                </Stack>

            </Stack>


        </Stack>
    );
};

export default UserChat;