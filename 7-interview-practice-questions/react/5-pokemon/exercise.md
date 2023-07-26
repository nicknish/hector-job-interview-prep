Please open [this link](https://codesandbox.io/s/epic-joana-zwddrw?file=/src/App.tsx) and click
"Fork". Don't forget to login to CodeSandbox so it permanently saves and so we can review the code.

# Pokemon

Using this free [Pokemon API](https://pokeapi.co/docs/v2#pokemon), write a React component which
will fetch data about Pokemon.

## Requirements

First requirements:

- Perform a fetch request to get a list of 20 Pokemon names using the `/pokemon` endpoint.
  - [See an example](https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0)
  - The endpoint can take in query parameters `offset` and `limit` for pagination.
- Using the response data, render the names of the Pokemon in a list.

Second requirements:

- When you click on a Pokemon's name, show more information about the Pokemon below its name.
- To do this, perform an additional fetch request using the `/pokemon/{id or name}` endpoint.
- Using the response data, the Pokemon list item should show the following information:
  - `name`
  - `height`
  - `weight`
  - `types`
- When you click on a Pokemon list item again, the additional information should be hidden.
