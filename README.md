# gas-deno-template

Writing Google Apps Script in deno.

## Getting Started

Install [google/clasp](https://github.com/google/clasp).

Login.

```bash
clasp login
```

Create new project.

```bash
mkdir ./dist
clasp create --title "My Script" --rootDir ./dist
cp ./dist/.clasp.json ./.
```

Build.

```bash
deno task build
```

Deploy.

```bash
clasp push
```
