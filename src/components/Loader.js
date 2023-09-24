import { useState, CSSProperties } from "react";
import DotLoader from "react-spinners/DotLoader";

function Loader() {

    let [loading, setloading] = useState(true);

    return (
        <div>
            <div className="sweet-loading text-center">
                <DotLoader color='#000' loading={loading} CSS='' size={80}/>
            </div>
        </div>
    )
}

export default Loader