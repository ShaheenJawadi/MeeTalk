import { Avatar, Stack, Box, Paper, Typography, Card, StackProps, styled } from '@mui/material';
import React from 'react';
import { ClockTimeFiveOutline } from 'mdi-material-ui';

const MessageElement = styled(Stack)<StackProps>(({ theme }) => ({
    '&.right': {


        flexDirection: 'row-reverse',
        alignSelf: 'flex-end',

        '& .avatarBox': {
            display: "none",
        },
        '& .MuiCard-root': {
            backgroundColor: theme.palette.primary.main,

            '& .MuiTypography-root': { color: theme.palette.common.white, },


        }
    }
}))
interface Props {
    pos:string
}

const UserChat = (props :Props) => {

    const {pos} = props;
    return (
        <MessageElement className={pos} direction={"row"} spacing={2}  >
            <Box className={"avatarBox"}>
                <Avatar sizes='small' alt="Shaheen jawadi" />

            </Box>

            <Stack direction={"column"} spacing={1} >
                <Card sx={{ padding: 2 }}  >
                    <Typography variant='body1'>gyhfghfgh</Typography>
                </Card>
                <Stack direction={"row"} alignItems={"center"} spacing={0.5} >
                    <ClockTimeFiveOutline sx={{ fontSize: 14 }} />
                    <Typography variant="caption">2 days ago</Typography>

                </Stack>

            </Stack>


        </MessageElement>
    );
};

export default UserChat;