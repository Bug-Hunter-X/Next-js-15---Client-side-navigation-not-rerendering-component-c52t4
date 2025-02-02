# Next.js 15 Client-Side Navigation Rerendering Issue

This repository demonstrates a peculiar issue encountered in a Next.js 15 application involving client-side navigation and component rerendering.  The application consists of two pages: a home page and an about page. Navigation between pages is handled using `next/link` and `next/router`.

**Problem:**

While the navigation functionality itself works correctly (the URL updates as expected), the About page fails to rerender after clicking the button to return to the home page. The browser shows the correct URL ('/') but the UI remains unchanged.  This seems to only happen on the About page when navigating back to the home page.

**Reproduction Steps:**

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the About page.
5. Click the 'Go to Home Page' button.  Observe that the URL changes to '/', but the UI remains that of the About page.

**Expected Behavior:**

The About page should rerender to display the content of the Home page upon clicking the button.

**Potential Solution (Included):**

The solution might involve the use of `useEffect` with the router's pathname dependency to detect changes in route and trigger a rerender.  See `about.js` for the solution implemented.