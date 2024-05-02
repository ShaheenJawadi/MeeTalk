import * as IO from 'socket.io-client';
const initIO = ()  => { 
    const io = IO.connect("http://localhost:3500");
    
    io.on('connect', () => {
        
        console.log('connected');
    });
 
};
export default initIO;
