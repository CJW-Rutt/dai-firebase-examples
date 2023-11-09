import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState } from "react";

export default function UserRegistrationSignIn() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch( error ) {
            console.log(error);
        }
    }

    return(
        <>
            <h3>Welcome to the App</h3>
            <div>
                <h4>Register Your Email</h4>
                <div>
                    <div>Email</div>
                    <input
                        placeholder="email..."
                        value={registerEmail}
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <div>Password</div>
                    <input 
                        placeholder="Password..."
                        value={registerPassword}
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />

                </div>
                <button onClick={() => {
                    register()
                    setRegisterEmail("")
                    setRegisterPassword("")
                }}>Register User</button>
            </div>
        </>
    );
}