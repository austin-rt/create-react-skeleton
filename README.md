# Getting Started

This is a stripped down version of the `npx create-react-app` command that we all know and love. `create-react-skel <project-name>` includes some CSS boilerplate to zero out margin, padding, boarder, outline, list style, and text-decoration, and sets box sizing to `border-box`, as well as adding a `./src/components` directory with a `TestComponent.jsx` file.

Find the npm package [here](https://www.npmjs.com/package/create-react-skel).

Please raise any issues [here](https://github.com/austin-rt/create-react-skeleton/issues).

## Available Scripts

In the project directory, you can run:

### `npx create-react-skel <project-name>`

Clones this repo and installs all dependencies. \
When propted, respond with `y` + <kbd>return</kbd>. \
Unlike `npx create-react-app`, `npx create-react-skel` **requires** a project directory name as an argument. \
This command removes the remote from the cloned repository. Run `git init` and `git remote add origin <remote-url>` to connect to your desired remote repository.
Alternatively, you can simply click [here](https://github.com/austin-rt/create-react-skeleton/generate) to create a repo using this same template.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
