# eslint-config-brown

ESLint rules for Brown University projects.

_On-prem Bitbucket doesn't render markdown very nicely; view this in a markdown editor like [Dillinger](https://dillinger.io/)._

## Usage

1. Install packages:

   ```
     yarn add -D eslint git+https://bitbucket.brown.edu/scm/ccum/eslint-config-brown.git#^0.9
   ```

   _Ensure you're on the network and that your SSH key has been added to the ssh-agent (`ssh-add ~/.ssh/id_rsa`) and uploaded to [bitbucket.brown.edu](https://bitbucket.brown.edu/plugins/servlet/ssh/account/keys)._

2. Add "extends": "brown" to your `.eslintrc`:

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

   - `brown/flow`
   - `brown/jest`
   - `brown/react`
   - `brown/prettier`
