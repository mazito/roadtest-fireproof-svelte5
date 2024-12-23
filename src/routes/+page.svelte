<script lang="ts">
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
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

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
