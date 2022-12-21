# Getting Started

### Run `npx create-react-skel <project-name>`

If prompted, respond with <kbd>y</kbd> + <kbd>return</kbd>.

The starter command clones this repo and installs basic React dependencies.

## More Info

`create-react-skel` is a stripped-down version of `create-react-app` that
includes both an empty `/src/components` directory and a `reset.css` file with
the following CSS boilerplate:

```css
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  display: none;
}
```

`eslintConfig` will throw errors for `no-unused-vars` and `no-console`. To
disable, edit in `package.json` or disable per line with
`// eslint-disable-next-line`.

## Next Steps

`react-skel` removes the remote from the cloned repository, so you'll have to
run `git init` and `git remote add origin <remote-url>` to connect to your
desired remote repository.

## Template Repo

Alternatively, you can click
[here](https://github.com/austin-rt/create-react-skeleton/generate) to create a
new repo using this same template.

## NPM Package

Find the npm package [here](https://www.npmjs.com/package/create-react-skel).

## Available Scripts

### `npm start`

Still runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will still reload when you make changes.\
You may still see any lint errors in the console.

## To Contribute

Please don't hesitate to submit PRs or raise any issues
[here](https://github.com/austin-rt/create-react-skeleton/issues).
