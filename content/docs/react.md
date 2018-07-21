---
title: React
doc: 3
section: 1
category: "tech"
type: "doc"
---

Dazzling is backed by [Gatsby](https://github.com/gatsbyjs/gatsby), an amazing framework that lets you generates static content (websites, but really - anything) while keeping the development experience tied to React, GraphQL, and many more first-class frontend tools.

Gatsby lets you have your cake and eat it too; and Dazzling puts the whole thing on steriods.


After [generating](getting-started) your first Dazzling website, you'll see this layout (which is standard Gatsby layout):

```
src
├── assets
├── css
│   └── index.scss
├── html.jsx
├── layouts
│   └── index.jsx
├── pages
│   └── index.jsx
└── templates
    └── doc.jsx
```

And if we take a look at `pages/index.jsx`, we see this:

```jsx
// various imports
export default class Index extends Component {
  render() {
    return (
      <LandingPage config={config} {...this.props}>
        <Shell dark style={{ margin: '8rem 0 5rem 0' }}>
          <Shell.Cmd>$ yarn add foo-bar</Shell.Cmd>
          <Shell.Success>foo-bar installed!</Shell.Success>
        </Shell>
      </LandingPage>
    )
  }
}
```

If you noticed - both the folder structure and the actual pages are super compact. This is where Dazzling tucks everything under its standard framework and opinions.


Everything is standard React and standard Gatsby - feel free to edit, tweak and use the parts you like from Dazzling and ignore the parts you dislike.

You can look at the various components Dazzling has [by going to its styleguide]().

