# eslint-config-brown

ESLint rules for Brown University projects.

## Usage

1. Install packages:

   ```
     yarn add -D eslint git+https://bitbucket.brown.edu/scm/ccum/eslint-config-brown.git#^0.1
   ```

   _Ensure you're on the network and that your SSH key has been added to the ssh-agent (`ssh-add ~/.ssh/id_rsa`) and uploaded to [bitbucket.brown.edu](https://bitbucket.brown.edu/plugins/servlet/ssh/account/keys)._

2. Add "extends": "brown" to your `.eslintrc`:

   ```javascript
   {
     "extends": "brown",
     "rules": {
       // your overrides
     }
   }
   ```

   Other available extensions:

   - `brown/jest`
   - `brown/react`
