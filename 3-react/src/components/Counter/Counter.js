import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <button
        onClick={() => {
          // TODO: Fix the bug in the next line
          setCount(count - 1)
        }}
      >
        Clicks: {count}
      </button>
    </div>
  )
}

export default Counter
