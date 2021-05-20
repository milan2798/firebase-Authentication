import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import { useState, useEffect } from 'react';
import { auth, db } from './firesetup'

function Home() {
    const [error, seterror] = useState({ er: false, text: "" });
    const logout = () => {
        auth.signOut().then(() => {
            // console.log("signout", auth);
            seterror({ er: true })
        })
    }

    const Homered = () => {
        if (auth) {
            if (auth.currentUser) {
                // console.log("Homred")
                return <span></span>
            }
        }
        return <Redirect to="/login" />
    }
    return (

        <div>
            {/* {console.log("logout")} */}
            <h1 className="header">Hii {auth.currentUser != null ? auth.currentUser.email.slice(0, 5).toUpperCase() : "."}....</h1>
            {/* {console.log("home", auth)} */}
            <div className="form__field">
                <input type="button" onClick={logout} value="Log out" />
            </div>
            {/* {error.er ? <Redirect to="/login" />: <span></span>} */}
            <Homered />
        </div>

    );

}

export default Home;
