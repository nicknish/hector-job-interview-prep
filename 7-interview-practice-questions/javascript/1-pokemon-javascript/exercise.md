# Pokemon JavaScript

Using this free [Pokemon API](https://pokeapi.co/docs/v2#pokemon), write a function
`getSortedPokemon`.

## First requirements

- Using the `/pokemon` endpoint and the `offset` and `limit` parameters, get the names of 2 Pokemon
  starting from id 92.
  - [See an example](https://pokeapi.co/api/v2/pokemon/?limit=2&offset=92)
  - The endpoint can take in query parameters `offset` and `limit` for pagination.
  - The `offset` parameter can only be greater than or equal to 92.
  - The `limit` parameter can only be less than or equal to 2.

Logging the result should look similar to this:

```json
[{ "name": "haunter" }, { "name": "gengar" }]
```

## Second requirements

- Using the `/pokemon` endpoint and the `offset` and `limit` parameters, get the names of 3 Pokemon
  starting from id 92.
  - The `offset` parameter can only be greater than or equal to 92.
  - The `limit` parameter can only be less than or equal to 2.

Logging the result should look similar to this:

```json
[{ "name": "haunter" }, { "name": "gengar" }, { "name": "onix" }]
```

(Nick: For a harder challenge, you can ban offset and limit usage and only use the pagination "next"
url.)

## Third requirements

- Using the `/pokemon/${id or name}` endpoint, get the `types` of each Pokemon.
  - [See an example](https://pokeapi.co/api/v2/pokemon/haunter)
- Return a list of objects, each object containing the following:
  - `type`: the type name
  - `pokemon`: a sorted list of Pokemon names that have that type

Logging the result should look similar to this:

```json
[
  { "type": "ghost", "pokemon": ["gengar", "haunter"] },
  { "type": "poison", "pokemon": ["gengar", "haunter"] },
  { "type": "rock", "pokemon": ["onix"] },
  { "type": "ground", "pokemon": ["onix"] }
]
```
