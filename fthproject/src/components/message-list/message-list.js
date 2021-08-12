import { Button, TextField } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useState, useEffect, useRef } from "react";

export const Messaglist = () => {
  const [messageList, setMessageList] = useState([
    { value: "сообщение", name: "автор" },
  ]);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const addMessage = ({ value, name }) => {
    setMessageList((state) => [...state, { value, name }]);
  };
  const inputFocus = useRef(null);
  useEffect(() => {
    const newList = messageList[messageList.length - 1];
    inputFocus.current.focus();
    if (newList?.name !== "bot") {
      setTimeout(() => {
        setMessageList((state) => [
          ...state,
          { value: "hello  " + name, name: "bot" },
        ]);
      }, 2000);
    }
  }, [messageList]);

  return (
    <>
      <ul>
        {messageList.map((message, id) => (
          <li key={id}>
            {message.name}: {message.value}
          </li>
        ))}
      </ul>
      <p></p>

      <TextField
        label="enter your message"
        value={value}
        ref={inputFocus}
        onChange={(event) => setValue(event.target.value)}
        size="small"
      />
      <TextField
        label="enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        size="small"
      />

      <Button
        variant="contained"
        color="default"
        endIcon={<MailOutlineIcon fontSize="large" />}
        onClick={() => addMessage({ value, name })}
      >
        send
      </Button>
    </>
  );
};
