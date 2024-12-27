/* eslint-disable @typescript-eslint/no-explicit-any */
import { device } from "$lib/device";

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    const cordova = (window as any).cordova;
    console.log('Running cordova-' + cordova?.platformId + '@' + cordova?.version);

    // document.getElementById('deviceready').classList.add('ready');
    device.set({
      cordova: cordova,
      ready: true
    })
}
