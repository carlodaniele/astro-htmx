# To-do list con Astro DB e htmx

Questa applicazione è basata sul framework [Astro](https://astro.build/). Per la gestione dei dati si fa ricorso ad [Astro DB](https://astro.build/db/), mentre le funzionalità di [htmx](https://htmx.org/) permettono di eseguire operazioni CRUD sui dati.

![astrobd-htmx](https://raw.githubusercontent.com/carlodaniele/astro-htmx/main/assets/astrodb-htmx-app.jpg)

Prima di procedere allo sviluppo dell'app, è necessario creare un account su [Astro Studio](https://studio.astro.build/), leggere la [documentazione](https://docs.astro.build/en/guides/astro-db/) e familiarizzare con la piattaforma.

👉 La guida completa allo sviluppo di questa applicazione è disponibile su [HTML.it](https://www.html.it/guide/creare-una-web-app-con-htmx-e-astro-db/).

👉 Per il deploy è stato utilizzato il servizio di hosting di applicazioni di [Kinsta](https://kinsta.com/it/hosting-applicazioni/).

## 🛠️ Configurazione
Astro DB richiede l'abilitazione del [Server Side Rendering](https://docs.astro.build/en/guides/server-side-rendering/) (SSR). Per questa applicazione, si fa ricorso al [node adapter](https://docs.astro.build/en/guides/integrations-guide/node/).

Nel file `astro.config.mjs` andrà aggiunto il seguente codice:

```js
export default defineConfig({
	integrations: [db()],
	site: 'https://astro-htmx-r063g.kinsta.app/',
	output: "server",
	adapter: node({
		mode: "standalone"
	}),
	server: {
		host: true
	}
});
```

Nel file `package.json` andrà aggiunto il flag `--remote` allo script di build:

```json
"scripts": {
	"dev": "astro dev",
	"start": "node ./dist/server/entry.mjs",
	"build": "astro build --remote",
	"preview": "astro preview",
	"astro": "astro"
},
```

Il resto della configurazione di questa app è **specifico dell'hosting Kinsta**. È necessario creare un file `sandbox.config.json`:

```json
{
	"infiniteLoopProtection": true,
	"hardReloadOnChange": false,
	"view": "browser",
	"template": "node",
	"container": {
		"port": 8080,
		"startScript": "start",
		"node": "14"
	}
}
```

Quindi un file `.stackblitzrc`:

```json
{
	"startCommand": "npm start",
	"env": {
		"ENABLE_CJS_IMPORTS": true
	}
}
```

Infine, un file `.npmrc`:

```js
shamefully-hoist=true
```

Per configurazioni diverse, si consulti la [documentazione di Astro](https://docs.astro.build/en/guides/deploy/).

## 🌎 Distribuzione su Kinsta

![application-add-git-repo](https://kinsta.com/_next/image/?url=https%3A%2F%2Fkinsta.com%2Fwp-content%2Fuploads%2F2024%2F04%2Fapplication-add-git-repo-675x1024.png&w=1920&q=75)

In MyKinsta, fare clic su `Applicazioni` > `Aggiungi applicazione` > seleziona `repository Git` > `Public repository`, quindi procedere come segue:

1. Repository URL: `https://github.com/tuo-account/tuo-repository`
2. Branch: `main`

Immettere il nome dell'applicazione e scegliere la posizione del data center. Lasciare tutte le altre impostazioni come predefinite e fare clic su Continua ad ogni passaggio.

Nel passaggio Riepilogo, fare clic su Distribuisci ora.

Maggiori informazioni sul [deploy di applicazioni Astro SSR su Kinsta](https://kinsta.com/docs/application-hosting/app-quick-start/javascript-examples/#astro-ssr).
