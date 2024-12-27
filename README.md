# Test Fireproof under Sveltekit & Svelte 5

This is a repo for testing [Fireproof](https://fireproof.storage/): the "Realtime database
that Runs anywhere". A VERY promising project !

The dev stack is SvelteKit and Svelte5, and our final target is an hybrid Android app 
created using either [Apache Cordova](https://cordova.apache.org/) or 
[Capacitor](https://capacitorjs.com/). 

## Using this repo

Just clone this repo, and do `pnpm install`. 

## Test in browser

Run `pnpn dev` and open the browser at `http://localhost:5173`.

## Test in Android (using Capacitor)

For using Capacitor to create an Android app you need to install it, and 
follow the Capacitor requirements (Android Studio installed, etc...).

After that `sh build-android.sh` will build, sync the app folders, build 
the Android APK and install it on the selected emulator. 

NOTE: this will NOT minify the project and will create the sourcemaps, so it is
possible to debug the app using the Chrome remote debugger.

The output will be something like:
~~~
mzito@zen3:~/dev/learn/fireproof/roadtest-fireproof-sveltekit5$ sh build-android.sh 

> roadtest-fireproof-svelte5@0.0.1 build /home/mzito/dev/learn/fireproof/roadtest-fireproof-sveltekit5
> vite build "--no-minify"

vite v5.4.11 building SSR bundle for production...
✓ 170 modules transformed.
vite v5.4.11 building for production...
node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js (12:18): Use of eval in "node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js" is strongly discouraged as it poses security risks and may cause issues with minification.
✓ 474 modules transformed.
.svelte-kit/output/client/_app/version.json                                             0.03 kB │ gzip:   0.05 kB
.svelte-kit/output/client/.vite/manifest.json                                           8.55 kB │ gzip:   1.09 kB
.svelte-kit/output/client/_app/immutable/assets/0.DjTDFHr9.css                         11.36 kB │ gzip:   3.27 kB
.svelte-kit/output/client/_app/immutable/entry/start.Be9k3cd1.js                        0.12 kB │ gzip:   0.13 kB │ map:     0.10 kB
.svelte-kit/output/client/_app/immutable/chunks/legacy.BvsDNuCJ.js                      0.14 kB │ gzip:   0.14 kB │ map:     0.33 kB
.svelte-kit/output/client/_app/immutable/nodes/2.C24IJ9-y.js                            0.46 kB │ gzip:   0.33 kB │ map:     0.10 kB
.svelte-kit/output/client/_app/immutable/chunks/index-client.XSH9Qmlw.js                0.90 kB │ gzip:   0.46 kB │ map:     9.82 kB
.svelte-kit/output/client/_app/immutable/chunks/key-bag-indexdb-RTSMSGM7.CAmuC-fu.js    1.19 kB │ gzip:   0.53 kB │ map:     2.50 kB
.svelte-kit/output/client/_app/immutable/nodes/1.B6YwN0d3.js                            1.53 kB │ gzip:   0.67 kB │ map:     5.49 kB
.svelte-kit/output/client/_app/immutable/chunks/lifecycle.D-s4HZhm.js                   1.54 kB │ gzip:   0.64 kB │ map:     3.47 kB
.svelte-kit/output/client/_app/immutable/nodes/0.B4psUeKJ.js                            1.58 kB │ gzip:   0.80 kB │ map:     4.15 kB
.svelte-kit/output/client/_app/immutable/chunks/key-bag-file-CBCAWTVG.Ok4hzTGH.js       2.01 kB │ gzip:   0.92 kB │ map:     3.08 kB
.svelte-kit/output/client/_app/immutable/chunks/gateway-G4CPXEQF.CVehOutD.js            2.19 kB │ gzip:   0.79 kB │ map:     3.61 kB
.svelte-kit/output/client/_app/immutable/chunks/disclose-version.DIAixuj2.js            2.72 kB │ gzip:   1.04 kB │ map:     9.90 kB
.svelte-kit/output/client/_app/immutable/nodes/3.BUq03YEb.js                            3.49 kB │ gzip:   1.34 kB │ map:     2.56 kB
.svelte-kit/output/client/_app/immutable/chunks/preload-helper.C5gC0fWI.js              4.43 kB │ gzip:   1.58 kB │ map:     4.50 kB
.svelte-kit/output/client/_app/immutable/chunks/gateway-2O7QPHGW.CIVqPbt3.js            4.83 kB │ gzip:   1.47 kB │ map:     9.28 kB
.svelte-kit/output/client/_app/immutable/chunks/index.DZwPtbYB.js                       7.68 kB │ gzip:   2.20 kB │ map:    17.44 kB
.svelte-kit/output/client/_app/immutable/chunks/gateway-impl.DKalzAfF.js                9.10 kB │ gzip:   2.61 kB │ map:    17.53 kB
.svelte-kit/output/client/_app/immutable/nodes/4.Bd2bFkcv.js                           10.15 kB │ gzip:   3.22 kB │ map:    15.36 kB
.svelte-kit/output/client/_app/immutable/chunks/render.DuNhpWer.js                     10.41 kB │ gzip:   2.96 kB │ map:    39.44 kB
.svelte-kit/output/client/_app/immutable/entry/app.DpWIfIIe.js                         22.78 kB │ gzip:   5.87 kB │ map:    56.92 kB
.svelte-kit/output/client/_app/immutable/chunks/runtime.Bham8_7u.js                    40.43 kB │ gzip:   9.07 kB │ map:   128.80 kB
.svelte-kit/output/client/_app/immutable/chunks/entry.QdtNpCCS.js                      71.49 kB │ gzip:  18.49 kB │ map:   193.65 kB
.svelte-kit/output/client/_app/immutable/chunks/index.DYIXFVMK.js                     873.90 kB │ gzip: 191.12 kB │ map: 1,945.92 kB
✓ built in 1.99s
.svelte-kit/output/server/.vite/manifest.json                           3.16 kB
.svelte-kit/output/server/_app/immutable/assets/_layout.DjTDFHr9.css   11.36 kB
.svelte-kit/output/server/entries/pages/_layout.ts.js                   0.09 kB │ map:   0.18 kB
.svelte-kit/output/server/entries/pages/_page.svelte.js                 0.29 kB │ map:   0.10 kB
.svelte-kit/output/server/internal.js                                   0.34 kB │ map:   0.09 kB
.svelte-kit/output/server/entries/pages/_layout.svelte.js               0.49 kB │ map:   0.53 kB
.svelte-kit/output/server/chunks/attributes.js                          0.56 kB │ map:   1.93 kB
.svelte-kit/output/server/chunks/escaping.js                            0.57 kB │ map:   1.19 kB
.svelte-kit/output/server/chunks/equality.js                            0.65 kB │ map:   3.38 kB
.svelte-kit/output/server/entries/pages/put/_page.svelte.js             0.88 kB │ map:   1.87 kB
.svelte-kit/output/server/entries/pages/open/_page.svelte.js            0.95 kB │ map:   1.83 kB
.svelte-kit/output/server/chunks/index.js                               2.32 kB │ map:  23.61 kB
.svelte-kit/output/server/entries/fallbacks/error.svelte.js             2.74 kB │ map: 108.35 kB
.svelte-kit/output/server/chunks/exports.js                             7.56 kB │ map:  19.92 kB
.svelte-kit/output/server/chunks/internal.js                           42.15 kB │ map: 179.51 kB
.svelte-kit/output/server/index.js                                    120.69 kB │ map: 288.87 kB
✓ built in 4.16s

Run npm run preview to preview your production build locally.

> Using @sveltejs/adapter-static
  Wrote site to "build"
  ✔ done
✔ Copying web assets from build to android/app/src/main/assets/public in 22.75ms
✔ Creating capacitor.config.json in android/app/src/main/assets in 473.03μs
✔ copy android in 31.74ms
✔ Updating Android plugins in 1.96ms
✔ update android in 25.34ms
✔ copy web in 4.00ms
✔ update web in 3.92ms
[info] Sync finished in 0.083s
✔ Copying web assets from build to android/app/src/main/assets/public in 19.08ms
✔ Creating capacitor.config.json in android/app/src/main/assets in 420.58μs
[info] Inlining sourcemaps
✔ copy android in 45.83ms
✔ Updating Android plugins in 1.90ms
✔ update android in 17.84ms
✔ Please choose a target device: › Redmi 10C API 33 (emulator) (Redmi_10C_API_33)
✔ Running Gradle build in 837.22ms
✔ Deploying app-debug.apk to Redmi_10C_API_33 in 1.37s
mzito@zen3:~/dev/learn/fireproof/roadtest-fireproof-sveltekit5$ sh build-android.sh 

> roadtest-fireproof-svelte5@0.0.1 build /home/mzito/dev/learn/fireproof/roadtest-fireproof-sveltekit5
> vite build "--no-minify"

vite v5.4.11 building SSR bundle for production...
✓ 170 modules transformed.
vite v5.4.11 building for production...
node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js (12:18): Use of eval in "node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js" is strongly discouraged as it poses security risks and may cause issues with minification.
✓ 474 modules transformed.
.svelte-kit/output/client/_app/version.json                                             0.03 kB │ gzip:   0.05 kB
.svelte-kit/output/client/.vite/manifest.json                                           8.55 kB │ gzip:   1.09 kB
.svelte-kit/output/client/_app/immutable/assets/0.DjTDFHr9.css                         11.36 kB │ gzip:   3.27 kB
.svelte-kit/output/client/_app/immutable/entry/start.CvXdoLrS.js                        0.12 kB │ gzip:   0.13 kB │ map:     0.10 kB
.svelte-kit/output/client/_app/immutable/chunks/legacy.BaNHD1xH.js                      0.14 kB │ gzip:   0.14 kB │ map:     0.33 kB
.svelte-kit/output/client/_app/immutable/nodes/2.DB_fZHVN.js                            0.46 kB │ gzip:   0.34 kB │ map:     0.10 kB
.svelte-kit/output/client/_app/immutable/chunks/index-client.ilVei3lL.js                0.90 kB │ gzip:   0.46 kB │ map:     9.82 kB
.svelte-kit/output/client/_app/immutable/chunks/key-bag-indexdb-RTSMSGM7.BnSrq7kO.js    1.19 kB │ gzip:   0.53 kB │ map:     2.50 kB
.svelte-kit/output/client/_app/immutable/nodes/1.Cl_PWOPs.js                            1.53 kB │ gzip:   0.67 kB │ map:     5.49 kB
.svelte-kit/output/client/_app/immutable/chunks/lifecycle.BA9EgncN.js                   1.54 kB │ gzip:   0.63 kB │ map:     3.47 kB
.svelte-kit/output/client/_app/immutable/nodes/0.c12j4LA_.js                            1.59 kB │ gzip:   0.81 kB │ map:     4.15 kB
.svelte-kit/output/client/_app/immutable/chunks/key-bag-file-CBCAWTVG.DyfhfYZu.js       2.01 kB │ gzip:   0.92 kB │ map:     3.08 kB
.svelte-kit/output/client/_app/immutable/chunks/gateway-G4CPXEQF.BTi778mw.js            2.19 kB │ gzip:   0.79 kB │ map:     3.61 kB
.svelte-kit/output/client/_app/immutable/chunks/disclose-version.CNQhTB9k.js            2.72 kB │ gzip:   1.04 kB │ map:     9.90 kB
.svelte-kit/output/client/_app/immutable/nodes/3.CsS6ET3r.js                            3.43 kB │ gzip:   1.32 kB │ map:     2.60 kB
.svelte-kit/output/client/_app/immutable/chunks/preload-helper.BWiXadrN.js              4.43 kB │ gzip:   1.58 kB │ map:     4.50 kB
.svelte-kit/output/client/_app/immutable/chunks/gateway-2O7QPHGW.C-ijh39h.js            4.83 kB │ gzip:   1.47 kB │ map:     9.28 kB
.svelte-kit/output/client/_app/immutable/chunks/index.DZwPtbYB.js                       7.68 kB │ gzip:   2.20 kB │ map:    17.44 kB
.svelte-kit/output/client/_app/immutable/chunks/gateway-impl.DCP8_LnL.js                9.10 kB │ gzip:   2.61 kB │ map:    17.53 kB
.svelte-kit/output/client/_app/immutable/nodes/4.Bs2GT8er.js                           10.15 kB │ gzip:   3.21 kB │ map:    15.36 kB
.svelte-kit/output/client/_app/immutable/chunks/render.DwOMmeUM.js                     10.41 kB │ gzip:   2.96 kB │ map:    39.44 kB
.svelte-kit/output/client/_app/immutable/entry/app.CC0c4G4-.js                         22.78 kB │ gzip:   5.87 kB │ map:    56.92 kB
.svelte-kit/output/client/_app/immutable/chunks/runtime.Cii9QBTD.js                    40.43 kB │ gzip:   9.07 kB │ map:   128.80 kB
.svelte-kit/output/client/_app/immutable/chunks/entry.DvB19RZG.js                      71.49 kB │ gzip:  18.49 kB │ map:   193.65 kB
.svelte-kit/output/client/_app/immutable/chunks/index.CkWe21WP.js                     873.90 kB │ gzip: 191.12 kB │ map: 1,945.92 kB
✓ built in 1.99s
.svelte-kit/output/server/.vite/manifest.json                           3.16 kB
.svelte-kit/output/server/_app/immutable/assets/_layout.DjTDFHr9.css   11.36 kB
.svelte-kit/output/server/entries/pages/_layout.ts.js                   0.09 kB │ map:   0.18 kB
.svelte-kit/output/server/entries/pages/_page.svelte.js                 0.29 kB │ map:   0.10 kB
.svelte-kit/output/server/internal.js                                   0.34 kB │ map:   0.09 kB
.svelte-kit/output/server/entries/pages/_layout.svelte.js               0.50 kB │ map:   0.54 kB
.svelte-kit/output/server/chunks/attributes.js                          0.56 kB │ map:   1.93 kB
.svelte-kit/output/server/chunks/escaping.js                            0.57 kB │ map:   1.19 kB
.svelte-kit/output/server/chunks/equality.js                            0.65 kB │ map:   3.38 kB
.svelte-kit/output/server/entries/pages/put/_page.svelte.js             0.88 kB │ map:   1.87 kB
.svelte-kit/output/server/entries/pages/open/_page.svelte.js            0.95 kB │ map:   1.86 kB
.svelte-kit/output/server/chunks/index.js                               2.32 kB │ map:  23.61 kB
.svelte-kit/output/server/entries/fallbacks/error.svelte.js             2.74 kB │ map: 108.35 kB
.svelte-kit/output/server/chunks/exports.js                             7.56 kB │ map:  19.92 kB
.svelte-kit/output/server/chunks/internal.js                           42.15 kB │ map: 179.51 kB
.svelte-kit/output/server/index.js                                    120.69 kB │ map: 288.87 kB
✓ built in 4.03s

Run npm run preview to preview your production build locally.

> Using @sveltejs/adapter-static
  Wrote site to "build"
  ✔ done
✔ Copying web assets from build to android/app/src/main/assets/public in 23.76ms
✔ Creating capacitor.config.json in android/app/src/main/assets in 439.20μs
✔ copy android in 32.52ms
✔ Updating Android plugins in 1.88ms
✔ update android in 22.14ms
✔ copy web in 4.00ms
✔ update web in 3.98ms
[info] Sync finished in 0.082s
✔ Copying web assets from build to android/app/src/main/assets/public in 20.29ms
✔ Creating capacitor.config.json in android/app/src/main/assets in 411.02μs
[info] Inlining sourcemaps
✔ copy android in 46.79ms
✔ Updating Android plugins in 1.85ms
✔ update android in 17.32ms
✔ Please choose a target device: › Google sdk_gphone64_x86_64 (emulator-5554)
✔ Running Gradle build in 857.65ms
✔ Deploying app-debug.apk to emulator-5554 in 1.45s
~~~

If successfull you can now run the App in the Android emulator, and can debug it
using the [Chrome remote debugger](https://developer.chrome.com/docs/devtools/remote-debugging), 
by opening a Chrome tab with the url: `chrome://inspect/#devices`


