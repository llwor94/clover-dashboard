export interface Admin {
  accessToken: string
  displayName: string
  email: string
  image: string
  key: string
  name: {
    firstName: string
    lastName: string
  }
  tokenType: string
}

export interface TokensResponse {
  access_token: string
  token_type: string
}

export interface GoogleAPIResponse {
  data: {
    emails: [
      {
        value: string
        type: string
      }
    ]
    displayName: string
    image: {
      url: string
    }
    name: {
      familyName: string
      givenName: string
    }
  }
}

export interface PeopleAPIResponse {
  data: {
    photos: [{ url: string }]
  }
}

// export interface

// expiry_date: 1562545191132,
// server:   scopes:
// server:    [ 'openid',
// server:      'https://www.googleapis.com/auth/userinfo.email',
// server:      'https://www.googleapis.com/auth/userinfo.profile' ],
// server:   azp:
// server:    '363050689676-h91ocjh11ev1gvujf7iceomg56cl65ju.apps.googleusercontent.com',
// server:   aud:
// server:    '363050689676-h91ocjh11ev1gvujf7iceomg56cl65ju.apps.googleusercontent.com',
// server:   sub: '103673517400822602860',
// server:   exp: '1562545191',
// server:   email: 'frank.faustino@clover.com',
// server:   email_verified: 'true',
// server:   access_type: 'offline'

export type FetchData = (accessToken: string, tokenType: string, url: string) => Promise<any> | null
