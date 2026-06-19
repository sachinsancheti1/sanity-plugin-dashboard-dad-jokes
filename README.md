# sanity-plugin-dashboard-dad-jokes

> This is a **Sanity Studio v4+** plugin (works on Studio v4, v5, and v6).

## Why???

Who doesn't like jokes. A dad joke is lame enough to make you laugh and cry at the same time.

![Sample Joke](https://raw.githubusercontent.com/sachinsancheti1/sanity-plugin-dashboard-dad-jokes/main/assets/joke.png)

## What is happening in the background?

This widget takes dad jokes from [https://icanhazdadjoke.com/](https://icanhazdadjoke.com/)

## Installation

```sh
npm install sanity-plugin-dashboard-dad-jokes
```

This widget is rendered by [`@sanity/dashboard`](https://github.com/sanity-io/dashboard), which is a peer dependency. Install it too if you haven't already:

```sh
npm install @sanity/dashboard
```

## Usage

Add `dashboardTool` to your `plugins` and pass `jokesWidget()` as one of its widgets in `sanity.config.ts` (or `.js`):

```ts
import {defineConfig} from 'sanity'
import {dashboardTool} from '@sanity/dashboard'
import {jokesWidget} from 'sanity-plugin-dashboard-dad-jokes'

export default defineConfig({
  // ...
  plugins: [
    dashboardTool({
      widgets: [jokesWidget()],
    }),
  ],
})
```

## Size config

The widget size can be controlled using `layout.width`:

```ts
dashboardTool({
  widgets: [jokesWidget({layout: {width: 'small'}})],
})
```

## Inspiration

I took inspiration from the [Cats Widget](https://github.com/sanity-io/example-dashboard-widget-cats) official plugin of Sanity.

## License

[MIT](LICENSE) © Sachin Sancheti

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
