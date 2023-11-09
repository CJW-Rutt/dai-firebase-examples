import GoogleSignIn from '@/firebase/GoogleSignIn'
import styles from '@/styles/Home.module.css'
import UserRegistrationSignIn from '@/firebase/UserRegistration'

import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebase.config'
import UserEmailSignIn from '@/firebase/UserEmailSignin'
import UserLogout from '@/firebase/UserLogout'

export default function Home() {

  const[user, setUser] = useState({});

  // *** Important for Lab 2 *** //
  // we need this in order tog et an update on the current user logged in.
  // it will show or hide useres information later on the screen

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  }, [])


  return (
    <>
      <main className={styles.main}>
        <GoogleSignIn />
        <UserRegistrationSignIn />
        <UserEmailSignIn />
        <div>
          <h2>User Logged In</h2>
          <div>
            { user?.email } {/* question mark before the period is optional chaining. This is used to prepopulate, if theres no email don't show anything. */}
          </div>
        </div>
        <h5>*** Click Below to Logout ***</h5>
        <UserLogout />
      </main>
    </>
  )
}
