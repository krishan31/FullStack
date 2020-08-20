import React from 'react';
import './Heading.css';

function Heading(props) {
    let className = props.heading_style ? 'heading_style' : ''
    return (
        <h1 className={className}>Top 6 Netflix Show</h1>
    );
}
export default Heading;




// const place = () => {
//     const purple = "#21241";
//     const [bg,ubg] = useState(purple);
//     const [name, uname] = useState("click me")
//     const bgcolor = () => {
//         let red="#24354";
//         ubg(red);
//         uname("ouch!! : ");
//     }
//     return (
//         <>
//         <div style= {{ backgroundColor:bg }}>
//         <button onClick={bgcolor}>{name}</button>

        
//         </div>
//         </>
//     );
// }

