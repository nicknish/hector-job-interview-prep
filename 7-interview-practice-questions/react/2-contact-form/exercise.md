Please open [this link](https://codesandbox.io/s/epic-joana-zwddrw?file=/src/App.tsx) and click
"Fork". Don't forget to login to CodeSandbox so it permanently saves and so we can review the code.

# Contact Form

Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us"
form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

**Please copy the code below Code Snippet to begin.**

## Requirements

- The form should contain the following elements:
  - Name field
  - Email field
  - Message field. Since the message can be long, using a `<textarea>` will be more suitable.
  - Submit button
    - Contains the text "Send".
    - Clicking on the submit button submits the form. Because we don't have a server to actually
      send the data to, simply `console.log` the form data.
- The form and submission should be implemented mostly in HTML.
- There is no need to do any client-side validation on the fields.

## Code Snippet

Please copy this snippet and paste it into your code.

```tsx
export default function App() {
  return (
    <form>
      <input type="text" />
    </form>
  )
}
```
