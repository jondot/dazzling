```jsx
const { createMemoryHistory: createHistory } = require('history')
const { Router } = require('react-router')
const history = createHistory()

;<Router history={history}>
    <Button>Go</Button>
</Router>
```