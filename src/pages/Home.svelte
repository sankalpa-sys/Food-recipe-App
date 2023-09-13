<script>
  import AllFoods from "../components/AllFoods.svelte";
  import Header from "../components/Header.svelte";
  import NoData from "../components/NoData.svelte";
  import SearchField from "../components/SearchField.svelte";
  export let foods;
  export let loading;
  export let getFoods
  export let user;
  export let categoryName;
</script>
<Header {user}/>
  <SearchField {getFoods} {categoryName} />
  {#if loading === false}
  {#if foods.length === 0}
    <NoData message="Sorry! No foods available."/>
  {:else}
  <AllFoods {foods} {categoryName}  />
  {/if}
  {:else}
    <NoData message="" />
  {/if}