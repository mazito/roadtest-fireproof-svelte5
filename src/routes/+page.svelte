<script lang="ts">
  import { fireproof } from "use-fireproof";

  let 
    ledger: any,
    error: any,
    name = '';

  function openLedger() {
    try {
      ledger = fireproof(name);
    }
    catch (err: any) {
      error = err;
    }
  }

</script>



<div class="p-8">
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

  <hr class="my-2">
  <input class="p-2 border w-32" bind:value={name} /> 
  <button class="p-2 bg-gray-100 border" on:click={openLedger}>Open ledger</button>
  <div class="p-2">Ledger: <pre>{JSON.stringify(ledger,null,4)}</pre></div>
  <div class="p-2">Error: {error}</div>

  <hr class="my-2">

</div>
