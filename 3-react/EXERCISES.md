# Exercises

## 1. Add a Router

Using [React Router](https://reacttraining.com/react-router/web/guides/quick-start), add a router to
the application. The router should have the following routes:

- `/` - The home page
- `/counter` - A page with a Counter feature
- `/accordion` - A page with an Accordion feature
- `/contact` - A page with a Contact form feature

## 2. Add a shared navigation bar

Add a navigation bar to the top of the page. The navigation bar should have links to each of the
routes.

## 3. Add the Counter component

Add the existing Counter component to the `/counter` route. Fix the Counter component so that it
works as expected.

## 4. Add the Accordion component

Build a new Accordion component and add it to the `/accordion` route.

This component should have the following features:

- Component should have a title prop that becomes the label
- Component should have a body prop that becomes the body
- When the title is clicked, the body should be shown
- When the title is clicked again, the body should be hidden
- The body should be hidden by default

## 5. Add the Contact component

Build a new Contact component and add it to the `/contact` route. This component should have the
following features:

- It should display a form with the following fields:
  - Name
  - Email
  - Message
- When the form is submitted, the form should be cleared and a message should be displayed to the
  user indicating that the message was sent successfully

### 5.1 Extract the Name and Email fields into a reusable component

Name and Email fields have a lot of overlap. Let's make them a reusable component. Extract the Name
field element and convert it to a single component that can be reused for both the Name and Email
fields. Replace them with the new component.

## 6. Add Global state

Add global state to the application using the [Context API](https://reactjs.org/docs/context.html).
When the user submits the contact form, add the user's name to the global state. Display the user's
name in the navigation bar.

## 7. Add TypeScript

Convert the application to TypeScript. Start by adding the TypeScript compiler to the project. Then,
add type annotations to the components and other parts of the application.

## 8. Review Webpack configuration

On a separate branch, eject the application from Create React App. Review the Webpack configuration.

## 9. Add unit tests for Counter

Add unit tests for the Counter component. The tests should cover the following scenarios:

- The Counter component should render without crashing
- The Counter component should display the correct initial count
- The Counter component should increment the count when the increment button is clicked

## 10. Add integration tests for Contact Form

Add integration tests for the Contact Form component. The tests should cover the following
scenarios:

- The Contact Form component should render without crashing
- The Contact Form component should display the correct initial values
- The Contact Form component should clear the form when the form is submitted
- The Contact Form component should display a success message when the form is submitted

## 11. Add end-to-end tests for routing

Add the Cypress library

- https://docs.cypress.io/guides/getting-started/installing-cypress
- https://docs.cypress.io/guides/tooling/typescript-support

## 11.1 Add Cypress tests for routing

Add Cypress end-to-end tests for the routing. The tests should cover the following scenarios:

- When the user navigates to the home page, the home page should be displayed
- When the user navigates to the accordion page, the accordion page should be displayed
- When the user navigates to the contact page, the contact page should be displayed
- Fill out the contact form and submit it. The success message should be displayed
