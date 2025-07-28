# React Auth0 App

A modern React application with Auth0 authentication, featuring a beautiful UI and secure user management.

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Auth0](https://img.shields.io/badge/Auth0-2.2.4-green.svg)](https://auth0.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Features

- 🔐 Secure authentication with Auth0
- 👤 User profile management
- 🎨 Modern, responsive design
- ⚡ Fast and optimized React app
- 🛡️ Protected routes
- 📱 Mobile-friendly interface

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Auth0 account

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/monishchaganti001/react-auth0-cursorapp.git
cd react-auth0-cursorapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables Setup

Copy the example environment file and add your Auth0 credentials:

```bash
cp env.example .env
```

Edit the `.env` file with your Auth0 credentials:

```env
REACT_APP_AUTH0_DOMAIN=your-domain.auth0app.com
REACT_APP_AUTH0_CLIENT_ID=your-client-id
REACT_APP_AUTH0_CLIENT_SECRET=your-client-secret
```

### 4. Configure Auth0 Application Settings

In your Auth0 dashboard, make sure your application has the following URLs configured:

- **Allowed Callback URLs**: `http://localhost:3000`
- **Allowed Logout URLs**: `http://localhost:3000`
- **Allowed Web Origins**: `http://localhost:3000`

### 5. Start the Application

```bash
npm start
```

The app will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Home.js          # Home page component
│   ├── Profile.js       # User profile component
│   ├── Navbar.js        # Navigation component
│   └── Loading.js       # Loading spinner
├── App.js               # Main app component
├── index.js             # App entry point with Auth0 config
└── index.css            # Global styles
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Auth0 Integration

This app uses the `@auth0/auth0-react` SDK for seamless authentication:

- **Login/Logout**: Handled automatically with Auth0's universal login
- **User Profile**: Displays user information from Auth0
- **Protected Routes**: Profile page requires authentication
- **Token Management**: Automatic token refresh and management

## Security

- **Environment Variables**: Auth0 credentials are stored in `.env` file (not committed to Git)
- **Client-Side Security**: Only public credentials (domain, client ID) are used in the frontend
- **Protected Routes**: Sensitive pages require authentication

## Customization

### Styling
The app uses CSS classes for styling. You can customize the appearance by modifying `src/index.css`.

### Adding New Routes
To add new protected routes:

1. Create a new component in `src/components/`
2. Add the route to `src/App.js`
3. Use the `useAuth0` hook to check authentication status

## Deployment

### Build for Production

```bash
npm run build
```

### Environment Variables for Production

Make sure to update your Auth0 application settings with your production URLs:

- **Allowed Callback URLs**: `https://yourdomain.com`
- **Allowed Logout URLs**: `https://yourdomain.com`
- **Allowed Web Origins**: `https://yourdomain.com`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

1. **"Invalid redirect_uri" error**
   - Make sure your Auth0 application has the correct callback URLs configured

2. **"Invalid client_id" error**
   - Verify your `REACT_APP_AUTH0_CLIENT_ID` in the `.env` file is correct

3. **App not loading**
   - Check that your `.env` file exists and has the correct credentials
   - Ensure the domain and client ID match your Auth0 dashboard

### Getting Help

- [Auth0 Documentation](https://auth0.com/docs)
- [React Documentation](https://reactjs.org/docs)
- [Auth0 React SDK](https://github.com/auth0/auth0-react)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 