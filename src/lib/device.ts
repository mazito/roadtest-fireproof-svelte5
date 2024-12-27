import { writable } from "svelte/store";

export { 
  device
}

const device = writable({
  cordova: null,
  ready: false
})
