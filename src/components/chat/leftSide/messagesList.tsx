import {
    Paper, Stack, Box, List, Avatar,
    ListItemAvatar, ListItem, ListItemButton, Typography,
    ListItemText
} from '@mui/material';
import React from 'react';

const MessagesList = () => {

    return (
        <Box  sx={{ height:"100%" }} >
            <List  sx={{ height: "100%",width: '100%' }}>
                {Array(5).fill(null).map((message, index) => {
                        return (
                            <ListItemButton key={index} >
                                <ListItemAvatar>
                                    <Avatar alt="Jeff"  />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Jeff"
                                    secondary={ 
                                            <Typography
                                                sx={{ display: 'inline' }} 
                                                variant="body2"
                                                color="text.primary"
                                            >
                                               qsdqsdqs
                                            </Typography>
                                          
                                    }
                                />
                                
                            </ListItemButton>
                        )
                    })
                } 
          
            </List>
        </Box>
    );
};

export default MessagesList;