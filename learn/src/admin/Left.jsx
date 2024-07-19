import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Left() {
    return ( 
        <>
         <div className="col-md-3">
           <Link to={"/productform"}><Button type="submit" variant="contained" color="secondary" className="mt-3">Product form</Button></Link> 
         </div>
        
        
        </>
     );
}

export default Left;