<script lang="ts">
  import { fireproof } from "@fireproof/core";

  let 
    ledger: any = null,
    onError: any,
    isPublic = true,
    name = 'any-ledger';

  function openLedger() {
    try {
      ledger = fireproof(name, { public: isPublic });
      console.log("Ledger", ledger);

      // test LocalStorage storage
      localStorage.setItem('testKey', 'testValue');
      console.log('Local Storage:', localStorage.getItem('testKey'));
      const value = localStorage.getItem('testKey');
      if (value === 'testValue') console.log('LocalStorage is working !');

      // test IndexedDb
      const dbRequest = indexedDB.open('testDB', 1);
      dbRequest.onsuccess = () => console.log('IndexedDB is working!');
    }
    catch (err: any) {
      console.log('Error in openLedger', err);
      onError = err;
      throw err;
    }
  }
</script>

<div class="">
  <h1 class="text-base font-bold">Open or create ledger</h1>
  <hr class="my-2"/>
  <div class="">
    <input class="p-2 border w-48" bind:value={name} /> 
    <input class="m-2" type="checkbox" bind:checked={isPublic} /> Public ?
    <br/>
    <button class="w-full my-2 p-2 bg-gray-100 border" on:click={openLedger}>Open ledger</button>
  </div>
  <div class="py-2">Ledger: <b>{ledger ? 'success' : 'failed'}</b></div>
  {#if ledger}
    <pre>
      {JSON.stringify(ledger, null, 4)}
    </pre>
  {/if}
  {#if onError}
    <div class="py-2">
      Error: {onError}
    </div>
  {/if}
  <hr class="my-2">
</div>
