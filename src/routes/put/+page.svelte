<script lang="ts">
  import { fireproof } from "@fireproof/core";
	import { record_data } from "./data";

  let 
    ledger: any,
    onError: any,
    isPublic = true,
    name = 'any-ledger',
    status: any = null ; 

  const MAX_ITEMS = 1000;

  async function putData() {
    try {
      ledger = fireproof(name, { public: isPublic });

      if (ledger) {
        console.log("Ledger is ready", ledger);
      
        for (let j=0; j < MAX_ITEMS; j++) {
            let ok = await ledger.put({
              _id: `uid-${j}`,
              type: 'record',
              uid: `${record_data.uuid.replaceAll('-','')}-${j}`,
              data: Object.assign({}, record_data)
            })
            status = { j: j, ok: ok };
            console.log("Put data:", j, ok);
        }
      }
    }
    catch (err: any) {
      onError = err;
      console.log("Put data error:", err);
      throw err;
    }
  }
</script>

<div class="">
  <h1 class="text-base font-bold">Put data (1000 items) in ledger</h1>
  <hr class="my-2"/>
  <div class="">
    <input class="p-2 border w-48" bind:value={name} /> 
    <input class="m-2" type="checkbox" bind:checked={isPublic} /> Public ?
    <br/>
    <button class="w-full my-2 p-2 bg-gray-100 border" on:click={putData}>Put data</button>
  </div>
  <p>Status</p>
  <pre>{status && JSON.stringify(status, null, 4)}</pre>
  {#if onError}
    <div class="py-2">
      Error: {onError}
    </div>
  {/if}
  <hr class="my-2">
</div>
