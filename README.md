![GitHub deployments](https://img.shields.io/github/deployments/semspanhaak/sems.dev/github-pages?label=deployment)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/semspanhaak/sems.dev)
![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/semspanhaak/sems.dev)
# sems.dev

## Deployment

Run `npm run deploy` to deploy to live.

### Common problems

The following issue may arrise:
```bash
Failed to compile.

./src/styles/page.sass
Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (93)
For more information on which environments are supported please see:
https://github.com/sass/node-sass/releases/tag/v4.14.1


error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

The fix for this issue is simple, just run the followin command:
`npm rebuild node-sass`
