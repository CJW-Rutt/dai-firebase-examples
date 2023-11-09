import { signOut } from "firebase/auth";
import { auth } from "./firebase.config"

export default function UserLogout() {
    const logoutUser = async () => {
        await signOut(auth);
        console.log("User Logged Out");
    }

    return (
        <>
            <div>
                <div>Signing User Out</div>
                <button onClick={() => logoutUser()}>Logout</button>
            </div>
        </>
    )
}