// import './loginStyle.scss';
import React from 'react';

import './googleButtonStyle.scss';

export default function googleSignIn() {
    return (
        <div className="googleSignInButton">
            <div className="googleImgContainer">
                <img className="googleIconSVG" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"></img>
            </div>
            <span className="googleText">Sign In With Google</span>
        </div>
    );
}
