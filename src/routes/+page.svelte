<script lang="ts">
  import { device } from "$lib/device";
  import { fireproof } from "use-fireproof";

  let 
    ledger: any,
    error: any,
    isPublic = true,
    name = 'any-ledger';

  function openLedger() {
    try {
      ledger = fireproof(name, { public: true });
    }
    catch (err: any) {
      error = err;
      throw err;
    }
  }

</script>



<div class="p-8">
  <h1>Welcome to Fireproof on SvelteKit</h1>

  <div class="py-2">
    <p class="font-bold">Cordova</p>
    <p>
      Device: {JSON.stringify($device.cordova || {})}
      <br>
      Ready? {$device.ready}
    </p>
  </div>

  <hr class="my-2"/>
  <div class="max-w-sm">
    <input class="p-2 border w-32" bind:value={name} /> 
    <input class="m-2" type="checkbox" bind:checked={isPublic} /> Public ?
    <br/>
    <button class="w-full my-2 p-2 bg-gray-100 border" on:click={openLedger}>Open ledger</button>
  </div>
  <div class="p-2">Ledger: {ledger ? 'success' : 'failed'}</div>
  <div class="p-2">Error: {error}</div>

  <hr class="my-2">

</div>
