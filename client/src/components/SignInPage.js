import React from "react";

const SignInPage = () => (
  <div className="google-sign-in-wrapper">
    <a href="/auth/google">
      <img
        className="google_sign_in_image"
        src="https://developers.google.com/accounts/images/sign-in-with-google.png"
        alt="google sign in"
      />
    </a>
  </div>
);

export default SignInPage;
