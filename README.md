# Project Name: SignIn With Google

## Description
This project demonstrates how to implement Google Sign-In using React for the frontend and Node.js/Express for the backend.

## Features
- User authentication via Google OAuth 2.0
- Display user profile information including name, email, and profile picture
- Handle success and failure scenarios during authentication

## Technologies Used
- React
- Node.js
- Express
- Passport.js
- Google OAuth 2.0

## Installation
### Prerequisites
- Node.js installed
- Google Developer Console project with OAuth 2.0 credentials

### Backend Setup
1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies: `npm install`.
4. Create a `.env` file and add the following variables:
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
SESSION_SECRET=your_session_secret
5. Start the server: `node index.js`.

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

## Usage
1. Open your browser and navigate to `http://localhost:3000` (assuming the frontend is running on port 3000).
2. Click on "Login with Google" to initiate the authentication process.
3. After successful authentication, you will be redirected to a success page displaying user information and profile picture.
4. If authentication fails, you will be redirected to a failure page.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- Thanks to [Passport.js](http://www.passportjs.org/) for authentication.
- Google OAuth 2.0 integration guided by [Google Developer Documentation](https://developers.google.com/identity/protocols/oauth2).

