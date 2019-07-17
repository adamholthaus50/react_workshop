import React, { useState, useEffect } from "react";
import { getSessions } from "./api/sessionApi";
import TextInput from "./TextInput";

const newSession = {
  id: null,
  title: ""
};

function App() {
  //what I return here gets rendered

  //this will hold our from data
  const [session, setSession] = useState(newSession);

  const [sessions, setSessions] = useState([
    { id: 1, title: "React" },
    { id: 2, title: "C#" },
    { id: 3, title: "Python" }
  ]);

  useEffect(() => {
    getSessions().then(sessions => setSessions(sessions));
  }, []);

  function deleteSession(id) {
    const newSessions = sessions.filter(session => session.id !== id);
    //ask react to change the state of sessions
    setSessions(newSessions); //this trigers a rerender because state has changed.
  }

  function renderSession(session) {
    return (
      <li key={session.id}>
        <button onClick={() => deleteSession(session.id)}>Delete</button>
        {session.title}
      </li>
    );
  }

  function saveSession(event) {
    event.preventDefault(); //dont post back to the server
    //assign an id on the client
    const sessionToSave = { ...session, id: Math.random() };
    setSessions([...sessions, sessionToSave]);

    //clear out the form
    setSession(newSession);
  }

  function onChange(event) {
    //use event.target.value to update session.title in state
    const newSession = { ...session, title: event.target.value }; //copy session
    setSession(newSession);
  }

  return (
    <>
      <h1>KCDC Sessions</h1>
      <form onSubmit={saveSession}>
        <h2>Add Session</h2>
        <TextInput
          id="title"
          onChange={onChange}
          label="Title"
          value={session.title}
        />

        <input type="submit" value="Add Session" />
      </form>
      <ul>{sessions.map(renderSession)}</ul>
    </>
  );
}

export default App;
