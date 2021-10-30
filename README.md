# Typescript Codebase

## Getting Started

<strong>Definition</strong>

<b>TypeScript</b> is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

- <strong>Installation</strong>

TypeScript can be installed through three installation routes depending on how you intend to use it: an npm module, a NuGet package or a Visual Studio Extension.

If you are using Node.js, you want the npm version. If you are using MSBuild in your project, you want the NuGet package or Visual Studio extension.

```bash
npm install -g typescript
```

- <strong>Config</strong>

You can setup configuration file for typescript

```bash
tsc --init
```

- <strong>Compile</strong>

To compile typescript to javascript just type `tsc <your-typescript-file-name>` this on your terminal

```bash
tsc index.ts
```

- <strong>Compile & Watch</strong>

To compile typescript to javascript just type `tsc <your-typescript-file-name> --watch` this on your terminal

```bash
tsc index.ts --watch
```
