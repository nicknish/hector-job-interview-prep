Please open [this link](https://codesandbox.io/s/epic-joana-zwddrw?file=/src/App.tsx) and click
"Fork". Don't forget to login to CodeSandbox so it permanently saves and so we can review the code.

# Accordion

Build an Accordion component that displays a list of vertically stacked sections that each contain a
title and content snippet.

**Please copy the code below Code Snippet to begin with.**

Here's how an Accordion component can work:
https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html

## Requirements

1. By default, all sections are collapsed and are hidden from view.
2. Clicking on a section title toggles the contents.
3. If the section is collapsed, the section will be expanded and the contents will be displayed.
4. If the section is expanded, the section will be collapsed and the contents will be hidden.
5. The sections are independent of each other.

## Notes

- The focus of this question is on functionality, not the styling. Do not spent too much time
  writing custom CSS.
- You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc) and use
  client-side rendering instead.
- You may want to think about ways to improve the user experience of the application and implement
  them (you get bonus credit for doing that during interviews)

## Code Snippet

Please copy this snippet and paste it into your code.

```tsx
function Accordion() {
  return (
    <div>
      <div>
        <div>
          HTML <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div>
          The HyperText Markup Language or HTML is the standard markup language for documents
          designed to be displayed in a web browser.
        </div>
      </div>
      <div>
        <div>
          CSS <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div>
          Cascading Style Sheets is a style sheet language used for describing the presentation of a
          document written in a markup language such as HTML or XML.
        </div>
      </div>
      <div>
        <div>
          JavaScript <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div>
          JavaScript, often abbreviated as JS, is a programming language that is one of the core
          technologies of the World Wide Web, alongside HTML and CSS.
        </div>
      </div>
    </div>
  )
}
```
