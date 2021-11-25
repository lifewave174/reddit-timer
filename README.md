# Reddit Timer App

The Reddit Timer app is an app that will tell you the best times to post on Reddit based on last year's data for a given Subreddit.

![Heatmap showing best times to post](./docs/heatmap.png)

## About this project

In an effort to familiarize myself with a professional real-world development environment, I decided to take up this project, offered as a course at [ooloo.io](https://ooloo.io/). In this project, designs were provided via [Figma](https://figma.com). The project was split in several tasks in order to simulate a team environment. The tasks were provided via a kanban style board through [ClickUp](https://clickup.com). I was exposed to the following techniques:

-   **Creating pixel-perfect designs**
-   **Planning and implementing a complex UI Component**
-   **Working with RESTful APIs**
-   **Professional Git workflow with pull requests**
-   **Code Reviews**

Additionally, **continuous integration** and **testing** are also a part of the project, which I plan to integrate in the near future.

### Tools & Tech Stack

-   [React](https://reactjs.org/)
-   [Styled Components](https://styled-components.com/)
-   [ClickUp](https://clickup.com) - project management
-   GitHub - version control and code reviewing
-   Slack - communication tool

### Install

```sh
yarn install
```

### Usage

```sh
yarn start
```

### Run tests

```sh
yarn test
```

## How to navigate this app

-   The app contains two pages. The first (Home) page will give you information about the app along with an image of the rendered heatmap.
-   The Search page on the app lets you add a subreddit name, and then renders a dynamic heatmap based on the number of posts for the given subreddit on a given day and hour.
-   Upon clicking on any of the boxes in the app, a list of posts published on that specific day and time is rendered.

## Why I built the project this way

I made some specific decisions while building this project, and found that certain techniques greatly improved the accessibility of this project, for me, as a developer.

-   **Using Styled Components**: At first, I wanted to use Scss as I did not know how to use Styled Components. However, learning and implementing Styled Components greatly helped me in my workflow especially to integrate CSS3 into React as both Styled Components and React follow a similar component based structure.
-   **Splitting the project into sensible folders and components** Personally, I find code organization, down to the folder structure, an important part of the development process as it just makes everything...easy and readable.
-   **Adding comments** Not much to say here... :P
-   **Not splitting the Heatmap component into smaller components** This was a deliberate decision as it just made it more accessible for me to visualize the heatmap. However, were this app to grow in size, I would certainly consider a more detailed component structure.

## What I would add/change in this project

-   Integrating tests
-   Further splitting of the Heatmap table into smaller components
-   A better way to split api calls without context or redux
-   Testing for cross-browser support and app performance
-   Making the app fully responsive
