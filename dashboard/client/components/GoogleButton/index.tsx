import * as React from 'react'

import './styles.scss'

const GoogleButton = () => (
  <div className="google-button__wrapper">
    <a
      href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login&response_type=code&client_id=363050689676-h91ocjh11ev1gvujf7iceomg56cl65ju.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Foauth"
      className="google-button"
    >
      <div className="google-button__logo" />
      <span className="google-button__text">Sign in with Google</span>
    </a>
  </div>
)

export default GoogleButton
