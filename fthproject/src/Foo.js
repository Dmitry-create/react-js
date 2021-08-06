import {useState,useEffect} from'react'
function Foo(props) {
    const [messageList, setMessageList] = useState([{value:"сообщение",name:"автор"}]);
    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    
   
    const addMessage=({value,name})=>{
    setMessageList((state)=>[...state,{value,name}])
    };
    
    useEffect(() => {
      const newList=messageList[messageList.length-1]
    
      
      
      if (newList.name!=="bot") {
          setTimeout(() => {
           setMessageList((state)=>[...state,{value:"hello  "+name,name:"bot"}]);
        }, 2000)
      } 
    },[messageList]);



    return (
      <>
        <ul>
          {messageList.map((message,id)=>(
            <li key={id}>
             {message.name}: {message.value}
              
            </li>
          ))}
        </ul>
        <p></p>
        
          
       
        <input placeholder="enter your message" value={value} onChange={(event) => setValue(event.target.value)} />
        <input placeholder="enter your name" value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={()=>addMessage({value,name})}>submit</button>
       
      </>
    );
  }
  export default Foo;
  