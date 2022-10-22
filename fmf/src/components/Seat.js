import {db} from '../firebase.js';
import { doc, deleteDoc } from "firebase/firestore";
// import { redirect } from 'express/lib/response';

const Seat=()=>{

    return (
        // <List className="campus__list">
        // <ListItem>
        // <ListItemAvatar />
        // <ListItemText primary={arr.item.campus} secondary={arr.item.campus} />
        // </ListItem>
        // </List>
        <div className='seatdiv'>
            {/* <div fontSize="large" style={{opacity:0.7, backgroundColor:"red"}} onClick={() => {deleteDoc(doc(db,'campuses',key))}} /> */}
                <div>BA-AHD-00-02</div>
                <div>UNTAKEN</div>
                <div>Date of Leave: 8/23/2022</div>

        </div>
    )
};
export default Seat;