import './App.css';
import app from './firebase.init';
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app)

const provider = new GoogleAuthProvider();

function App() {
  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.log('error', error);
    })
 
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}> Google sign in</button>
    </div>
  );
}

export default App;
