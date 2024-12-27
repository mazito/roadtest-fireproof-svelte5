<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div>
  <div class="p-8 mx-auto max-w-sm">
    <h1 class="text-xl">Welcome to Fireproof<br> on SvelteKit5</h1>
    <a class="text-base text-indigo-600" href="/">Home</a>
    <div class="mt-4">
      {@render children()}
    </div>
  </div>  
</div>
