## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### TODO:
 - Style page buttons
 - display vehicle details / styling
 - Styling of home page / search form

### Things I would change / Things I would do with more time:
 - Learn more about state vs. props and the correct usage
 - Refine/Replace query method, using the router seemed like a good idea at first, but didn't end well
    - e.g. maintain search data in router (preserve history / linkability of page), but pass search data to searchresults component differently
 - Restrict range of queries (negative numbers, etc)
 - Add accessibility tags, add i18n translation package(s)
 - Refine styling of pages
 - Make pages more flexible to smaller/larger page sizes, this is mostly a styling issue
 - I could use tips on general ReactJS style guide - I'm not happy with the current breakup of files / functionality
 - move data fetch to different file (intended to be in vehicle.api.js)
