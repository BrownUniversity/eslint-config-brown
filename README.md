# eslint-config-brown

ESLint rules for Brown University projects using [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) as a base (with a few overrides), and exposing some additional extensions.

---

## Usage

### 1. Install packages

```
// npm
npm i -D eslint git+https://bitbucket.brown.edu/scm/node/eslint-config-brown.git#semver:^0.14

// yarn
yarn add -D eslint git+https://bitbucket.brown.edu/scm/node/eslint-config-brown.git#^0.14
```

_Ensure you're on the network and that your SSH key has been added to the ssh-agent (`ssh-add ~/.ssh/id_rsa`) and uploaded to [bitbucket.brown.edu](https://bitbucket.brown.edu/plugins/servlet/ssh/account/keys)._

### 2. Configure ESLint:

Add "extends": "brown" to your `.eslintrc`:

```json
{
  "extends": "brown",
  "env": {
    "browser": true // be sure to add this for frontend projects
  },
  "rules": {
    // your overrides
  }
}
```

Additional extensions:

- `brown/cypress`
- `brown/flow`
- `brown/jest`
- `brown/prettier`
- `brown/prettier/react`
- `brown/vue`

_`brown/prettier*` extensions must come last in the "extends" array so they get the chance to override other configs._

---

## Deployment

To publish a new version, do the following:

1. Bump version in `package.json` and `package-lock.json`
2. Bump version in `README.md` install instructions (for major and minor version bumps only)
3. Commit changes
4. Tag new version
5. Push master and tags to all remotes
