 import * as IO from 'socket.io-client'; 
import {connect} from '@/store/socket';

const initIO = ()=>(dispatch: any)  => { 
    
    const io = IO.connect("http://localhost:3500");
    
    io.on('connect', () => {
        
        console.log('connected');
        dispatch(connect(io));
    });
 
};
export default initIO;
