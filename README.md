[![Quality Gate Status](http://sonarqube.zm.private/api/project_badges/measure?project=admanager-front&metric=alert_status&token=squ_a0128817e37be28c47ab49f17c3ff2761a355627)](http://sonarqube.zm.private/dashboard?id=admanager-front)

# Self Serve For Agencies Client

React app for Self Serve For Agencies
------------------------------------------

## Components library
[MaterialUI](https://material-ui.com/)

## Customise app
Since potentially our application should have a different look for different customers, we should use themes to customize it.   
[Materil UI themes](https://material-ui.com/customization/themes/) used for App customization.  
Please, use breakpoints, spacing(padding and margin), colors and typography only from theme.   
You can override or extend standart theme in **ThemeService.js** file.  

## API
We use [Graphql](https://graphql.org/) for data transref.  
We have only one endpoint [SSAAPI](https://github.com/ExtendTV/OneViewAPI) for any requests.  
It is work on [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/)  

## Realtime
We are use [Websockets](https://en.wikipedia.org/wiki/WebSocket) for realtime data.  
We use [Graphql websocket from apollo](https://github.com/apollographql/subscriptions-transport-ws) in a client.  
Unfortunately Apollo Federation does not yet support websockets. Therefore, we connect to the websockets server directly.  
For now its only [SSARealtimeService](https://github.com/ExtendTV/OneViewNotificationsService)  

## React Hook.
Please, use react hooks for states and graphql.  
React states based on [React hooks](https://reactjs.org/docs/hooks-intro.html).  
Graphql API provides by [React Apollo](https://github.com/apollographql/react-apollo#readme)  

## code quality and test
We use eslint for check our JS code. ESLint config placed on **.eslintrc** file.  
Setup eslint into your IDE.   
We also have units nad integrations tests for our components.
 - Testing framework: [Jest](https://jestjs.io/).
 - Testing react components: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
 - GraphQL API data mocking: [Graphql tools](https://www.graphql-tools.com) and [Casual](https://github.com/boo1ean/casual)

We use git hooks [Husky](https://github.com/typicode/husky) for checking code quality and running our tests before commit and push to repo.  

## JS notation
We use last ES notation from [babel](https://new.babeljs.io/).

## Builder
We create React apps with no build configuration.  
Thanks to amazing react-scripts from facebook [create-react-app](https://github.com/facebook/create-react-app).  
