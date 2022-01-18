import { authService, firebaseInstance } from "fbase";
import { useState } from "react";
import AuthForm from "./AuthForm";

const Auth = () => {
    
    const onSocialClick = async (event) => {
        // console.log(event.target.name);
        const {
            target: { name },
        } = event;
        let provider;
        if (name == "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name == "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        // console.log(data);
    }

    return (
        <div>
            <AuthForm></AuthForm>
            <div>
                <button onClick={onSocialClick} name="google">Continue With Google</button>
                <button onClick={onSocialClick} name="github">Continue With Github</button>
            </div>
        </div>
    );
};
export default Auth;