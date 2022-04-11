import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);



function App() {
  const [user, setUser] = useState({});
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log('error');
      })
  }
  const handleSignOut = () => {



    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({});
      })
  }
  const provider = new GoogleAuthProvider();
  return (
    <div className="App">
      <button onClick={handleSignIn}>Google sign in</button>

      <button onClick={handleSignOut}>Google sign out</button>
      <button onClick={handleSignOut}>GitHub sign In</button>

      <h1>Name:{user.displayName}</h1>
      <h4>Email:{user.email}</h4>
    </div>
  );
}

export default App;
