<script>

  import SingleFood from "./SingleFood.svelte";
  export let foods
  export let categoryName

  console.log(categoryName);

</script>

<main class="py-4">
  <h1 class="font-bold text-[16px] leading-[24px] my-4 first-letter:uppercase">{categoryName} Meals({foods.length})</h1>

  <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
    {#each foods as f}
    <SingleFood strMealThumb={f.strMealThumb} strMeal={f.strMeal} idMeal={f.idMeal} />
    {/each}
  </section>
</main>
