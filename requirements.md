### Requirements

1. Use webpack, gulp or grunt to build and start a development server with your app.

2. Use the React library for all the interactive components of the site.

3. Create at least three pages: a “Home” page, a “Search Results” page and a “Vehicle Details” page.

4. The Home page contains a simple search form.

5. The Search Results page contains a paginated list of search results.

6. The user can filter by price min and price max

7. Clicking a vehicle search result should open a basic “Vehicle Details” page.


### API Usage

To run a search against our test API, use the following URL pattern:

Each page contains 20 hits, and you can fetch the next page by incrementing the page param.

To filter by price, pass price_min and price_max params to the url, for example:

`/search?page=1&price_min=5000&price_max=10000`
