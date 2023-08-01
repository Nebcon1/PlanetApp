# PlanetApp

Repository for a planet information site, building my understanding of full-stack development (in particular React and Typescript).

## Building and Running

- The web layer utilises React and Typescript (requires Node.js), please install relevant dependencies based on your machine spec:

  - <https://nodejs.org/en/download>
  - <https://react.dev/>
  - <https://www.typescriptlang.org/download>

- The app layer uses Azure Functions and C#, please install dotnet 7.0 and associated C# extensions for your preferred development tool:

  - <https://dotnet.microsoft.com/en-us/download>
  - <https://code.visualstudio.com/docs/languages/csharp> (or relevant tool)

Documentation on building the application projects locally can be found on the above links, you will most likely use (npm start and dotnet build or run respectively).
The application is currently being built via a github workflow (see tab) on check-in to main and deployed as an Azure web app and function.

## Improvements required

- Enabling react state to toggle created information card components
- RESTful API which allows planetary data to be pulled based on path query
- Planned data layer (Azure Table store or blob if overkill when implementing, flat JSON file works but doesn't meet task brief)
- Adequate git branching policy and permissions, enforce passing build with tests, PRs and approvals before merge
- Shared contract packaged for 'Planet' JSON object which covers app, web and data layers.
-
