<script>
    import { Plane } from 'svelte-loading-spinners';
    export let message; 
</script>

<main class='h-[80vh] flex justify-center items-center '>
    {#if message!==""}
        <h1 class="text-red-600 text-xl font-mono animate-bounce font-bold">Sorry! No foods available</h1>
    {:else}
    <Plane size="60" color="#FF3E00" unit="px" duration="1s" />
    {/if}
</main>