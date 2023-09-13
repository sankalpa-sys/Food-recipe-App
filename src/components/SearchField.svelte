<script>
  import { Icon, Search, Adjustments } from "svelte-hero-icons";
  import { categories } from "../categories";
  let searchInput = "";
  let category = "";
  export let getFoods;
  export let categoryName;

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      if (!searchInput) return console.log("Field cannot be empty");

      getFoods(searchInput);
    }
  };

  const handleClick = (cat) => {
    if (cat === "all") {
      getFoods();
    } else {
      getFoods("", cat);
    }
    category = cat;
  };

  console.log("cateogryname/; ", categoryName);
  console.log('category: ', category)
</script>

<main class="flex items-center justify-between space-x-4 ">
  <div
    class=" h-[40px] flex-1  flex items-center rounded-xl border space-x-3 px-4  "
  >
    <Icon src={Search} class="h-[14px] w-[15.38px] text-[#D9D9D9]" />
    <input
      on:keypress={handleKeypress}
      bind:value={searchInput}
      on:input={() => getFoods(searchInput)}
      type="text"
      class=" flex-1 text-[11px] outline-none font-[400] bg-transparent h-full w-full rounded-full"
      placeholder="search recipe"
    />
  </div>
  <div
    class="h-[40px]  w-[40px] bg-[#129575] rounded-lg flex items-center justify-center cursor-pointer"
  >
    <Icon src={Adjustments} class="h-5 w-5 text-[#FFFFFF]" />
  </div>
</main>

<section class="mt-6  flex space-x-2 overflow-scroll scrollbar-hide  snap-x ">
  {#each categories as cat}
    <button
      on:click={() => handleClick(cat.title)}
      class={`text-sm font-semibold px-4 py-1 rounded-lg snap-mandatory snap-center active:scale-90 duration-300 transition-all first-letter:uppercase ${
        category === cat.title || cat.title === categoryName
          ? "bg-[#129575] text-gray-100"
          : "bg-gray-100  text-[#129575]"
      }`}>{cat.title}</button
    >
  {/each}
</section>
