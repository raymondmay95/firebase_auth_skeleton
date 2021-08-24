# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


# Purpose
The purpose in this application is to intergrate Firebase Authentication to render two seperate views based off of a user being autherized or not.

## Guides used in this application
[Firebase Documentation](https://firebase.google.com/docs/auth/where-to-start)
[Firebase Documentation (Google)](https://firebase.google.com/docs/auth/web/google-signin)
[Firebase Documentation (Facebook)](https://firebase.google.com/docs/auth/web/facebook-login)
[Firebase Documentation (Apple)](https://firebase.google.com/docs/auth/web/apple)

## User Stories
- As a user not logged in I should see nothing but a log-in and signup button
- As a user who is not logged in I should not see these buttons but instead a header element displaying that I have been logged in.
- As a user who is logged in I should see a different log-out button component.
