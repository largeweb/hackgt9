import {db} from '../firebase.js';
import { doc, deleteDoc } from "firebase/firestore";
// import { redirect } from 'express/lib/response';

const Campus=({key})=>{

    return (
        // <List className="campus__list">
        // <ListItem>
        // <ListItemAvatar />
        // <ListItemText primary={arr.item.campus} secondary={arr.item.campus} />
        // </ListItem>
        // </List>
        <div>
            {/* <div fontSize="large" style={{opacity:0.7, backgroundColor:"red"}} onClick={() => {deleteDoc(doc(db,'campuses',key))}} /> */}
            <div>Campus LOets Go</div>

        </div>
    )
};
export default Campus;