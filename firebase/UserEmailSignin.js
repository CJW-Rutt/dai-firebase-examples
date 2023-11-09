import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState } from "react";

export default function UserEmailSignIn() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
        } catch( error ) {
            console.log(error);
        }
    }

    return(
        <>
            <h3>Login BELOW</h3>
            <div>
                <div>
                    <div>Email</div>
                    <input
                        placeholder="email..."
                        value={loginEmail}
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    <div>Password</div>
                    <input 
                        placeholder="Password..."
                        value={loginPassword}
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />

                </div>
                <button onClick={() => {
                    login()
                    setLoginEmail("")
                    setLoginPassword("")
                }}>Login NOW</button>
            </div>
        </>
    );
}