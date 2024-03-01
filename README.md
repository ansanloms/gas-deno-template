# gas-deno-template

Writing Google Apps Script in deno.

## Usage

### Login

```bash
deno task clasp login
```

Then enable the Google Apps Script API:
<https://script.google.com/home/usersettings>

### Create new project

```bash
mkdir ./dist
deno task clasp create --rootDir ./dist
mv ./dist/.clasp.json .
```

### Clone exists project

```bash
mkdir ./dist
deno task clasp clone --rootDir ./dist
mv ./dist/.clasp.json .
```

### Deploy

```bash
deno task deploy
```
