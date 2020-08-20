import React, { useState } from 'react';
import PathApp from './PathApp';


const App = () =>{
  const [fullName, setFullName] = useState({
    fname : '',
    lname : '',
    email : '',
    phone : '',
  });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    // const value = event.target.value;
    // const name = event.target.name;

    setFullName((preValue) => {
      // console.log(preValue);
      return{
        ...preValue,
        [name] : value,
      }
    });
  };
  const record1 = fullName.fname;
  const record2 = fullName.lname;
  const record3 = fullName.email;
  const record4 = fullName.phone;
  
  const onSubmits = (event) =>{
    event.preventDefault();
    alert('Form Submitted'+ ' : ' + "Name : " + record1 +' '+ 'Pass : ' + record2 + ' ' + 'Email : ' + record3+ ' ' + 'Number : ' + record4);
 
  };

  return(
  <>
  <PathApp />
  <div className="main_div">
  <form onSubmit={onSubmits}>
    <div>
      <h1>Hello   </h1>
      <input type="text" placeholder="enter your name" 
      name='fname'
      onChange={inputEvent} 
      value={fullName.fname} />
      <br />
      <input type="password" placeholder="enter your password" 
      name='lname'
      onChange={inputEvent} 
      value={fullName.lname} />
      <br />
      <input type="email" placeholder="enter your email" 
      name='email'
      onChange={inputEvent} 
      value={fullName.email} />
      <br />
      <input type="phone" placeholder="enter your no" 
      name='phone'
      onChange={inputEvent} 
      value={fullName.phone} />
      
      <button type="submit">click me</button>  
    </div>
    </form>
    </div>
  </>
);
};

export default App;




























































// import React, { useState } from 'react';


// const App = () =>{
//   const [fullName, setFullName] = useState({
//     fname : '',
//     lname : '',
//     email : '',
//   });

//   const inputEvent = (event) => {
//     // console.log(event.target.value);
    
//     const value = event.target.value;
//     const name = event.target.name;

//     setFullName((preValue) => {
//       // console.log(preValue);
//       if(name === 'fName'){
//         return {
//           fname: value,
//           lname: preValue.lname,
//           email: preValue.email,
//       };
//     } else if(name === 'lName'){
//       return {
//         fname: preValue.fname,
//         lname: value,
//         ename: preValue.email,
//     };
//   }
//   else if(name === 'eName'){
//     return {
//       fname: preValue.fname,
//       lname: preValue.lname,
//       email: value
//   };
// }
//     });
//   };
//   const record1 = fullName.fname;
//   const record2 = fullName.lname;
//   const record3 = fullName.email;
//   const onSubmits = (event) =>{
//     event.preventDefault();
//     alert('Form Submitted'+ ' : ' + "Name : " + record1 +' '+ 'Pass : ' + record2 + ' ' + 'Email : ' + record3);
 
//   };

//   return(
//   <>
//   <div className="main_div">
//   <form onSubmit={onSubmits}>
//     <div>
//       <h1>Hello   </h1>
//       <input type="text" placeholder="enter your name" 
//       name='fName'
//       onChange={inputEvent} 
//       value={fullName.fname} />
//       <br />
//       <input type="password" placeholder="enter your password" 
//       name='lName'
//       onChange={inputEvent} 
//       value={fullName.lname} />
//       <br />
//       <input type="email" placeholder="enter your email" 
//       name='eName'
//       onChange={inputEvent} 
//       value={fullName.email} />
      
//       <button type="submit">click me</button>  
//     </div>
//     </form>
//     </div>
//   </>
// );
// }

// export default App;








































































































// import React, { useState } from 'react';


// const App = () =>{
//   const [name, setName] = useState("");

//   const [lastName, setLastName] = useState("");

//   const [fullName, setFullName] = useState("");

//   const [lastNamenew, setLastNameNew] = useState('');

//   const [email, thirdname] = useState('');

//   const [e, forth] = useState('');
  
//   const inputEvent = (event) => {
//     // console.log(event.target.value);
//     setName(event.target.value);
//   };
//   const onSubmits = (event) =>{
//     // event.preventDefault();
//     setFullName(name);
//     setLastNameNew(lastName);
//     forth(email);
//   };

//   const inputEventTwo = (event) => {
//     setLastName(event.target.value);
//   }

//   const inputEventThree = (event) =>{
//     thirdname(event.target.value);
//   }
//   return(
//   <>
//   <div className="main_div">
//   <form onSubmit={onSubmits}>
//     <div>
//       <h1>Hello {fullName} {lastNamenew} {e}</h1>
//       <input type="text" placeholder="enter your name" onChange={inputEvent} value={name} />
//       <br />
//       <input type="password" placeholder="enter your password" onChange={inputEventTwo} value={lastName} />
//       <br />
//       <input type="text" placeholder="email" onChange={inputEventThree} value={email} />
//       <button type="submit">click me</button>  
//     </div>
//     </form>
//     </div>
//   </>
// );
// }

// export default App;
