<script>
  import { onMount } from "svelte";
  import {
    ArrowLeft,
    Cake,
    Clock,
    DotsHorizontal,
    Icon,
    LocationMarker,
    Play,
    Star,
  } from "svelte-hero-icons";
  import { navigate, useParams } from "svelte-navigator";
  import IngredientCard from "../components/IngredientCard.svelte";
  import NoData from "../components/NoData.svelte";
  import StepCard from "../components/StepCard.svelte";
  const params = useParams();
  let procedure = [];

  let showIngredient = true;
  let meals;
  let loading;
  let allIngredients = [];
  let allQuantity = [];
  let ingredientAndQuantity;
  let play = false;

  const handlePlayClick = () => {
    play = true;
  }
  const getRecipee = async () => {
    loading = true;
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${$params.id}`
      );
      const data = await res.json();
      meals = data.meals[0];
      console.log(meals);
      Object.entries(meals).forEach(([key, value]) => {
        if (key.includes("strIngredient") && value !== "") {
          allIngredients.push(value);
        }
      });
      Object.entries(meals).forEach(([key, value]) => {
        if (key.includes("strMeasure") && value !== "") {
          allQuantity.push(value);
        }
      });
      ingredientAndQuantity = allIngredients.map(function (x, i) {
        return [x, allQuantity[i]];
      });

      procedure = meals?.strInstructions.split(".");
      loading = false;
    } catch (error) {
      console.log(error);
      loading = false;
    }
  };

  onMount(() => getRecipee());
</script>

{#if loading === false}
  <main class="flex flex-col space-y-6 px-2 py-6">
    <div class="flex items-center justify-between text-gray-600">
      <div
        on:click={() => {
          navigate(-1);
        }}
        on:keydown={() => {}}
      >
        <Icon src={ArrowLeft} class="h-6 w-6 cursor-pointer" />
      </div>

      <Icon src={DotsHorizontal} class="h-6 w-6" />
    </div>
    <main class="w-full h-[200px] rounded-lg relative">
      <img
        src={meals?.strMealThumb}
        class="object-cover select-none h-full w-full rounded-lg"
        alt=""
      />
      <div
        class="bg-[#FFE1B3] w-[40px] h-[18px] flex items-center justify-center rounded-[20px] space-x-[3px] py-[2px] px-[7px] absolute top-2 z-50 right-2"
      >
        <Icon src={Star} solid class="h-[8px] w-[8.5px] text-[#FFAD30]" />
        <p class="text-[8px] font-[400] leading-[12px]">4.0</p>
      </div>
      <div
        class="bg-black/40 rounded-[10px] absolute h-full w-full left-0 top-0 z-40"
      />

      <div class="flex z-50 items-center space-x-1 absolute bottom-2 right-2">
        <Icon src={Clock} class="h-[12px] text-white w-[12px]" />
        <p class="text-[10px] font-bold text-white">20min</p>
      </div>

     {#if play===false}
     <div on:click={handlePlayClick} on:keydown={()=>{}} class="absolute left-[150px] top-20 z-50 md:left-[235px]">
      <Icon
        src={Play}
        solid
        class="h-16 w-16 text-gray-100 opacity-70 hover:text-gray-50 cursor-pointer"
      />
    </div>
     {/if}
      {#if play===true}
      <div class="h-full w-full rounded-lg absolute top-0 left-0 z-50">
      
        <lite-youtube autoload videoid={meals?.strYoutube.split("=")[1]} style="height:inherit; width:inherit; background-image: url({meals?.strMealThumb}); bg-cover bg-no-repeat;"></lite-youtube>
      </div>
      {/if}
    </main>

    <section class="flex items-center justify-between">
      <h3 class="font-bold text-lg ">{meals?.strMeal}</h3>
      <p class="text-gray-500 text-xs">{meals?.strArea}</p>
    </section>

    <section class="flex items-center justify-between ">
      <div class="flex items-center space-x-1">
        <div class="h-[40px] w-[40px] rounded-full">
          <img
            src="https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg"
            class="h-full w-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div class="flex flex-col ">
          <p class="font-bold text-sm ml-1.5">Laura wilson</p>
          <div class="flex items-center">
            <Icon src={LocationMarker} solid class="h-5 w-5 text-[#129575]" />
            <p class="text-xs text-gray-600">Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
      <button
        class="bg-[#129575] text-white font-semibold px-6 py-2 rounded-lg text-xs"
        >Follow</button
      >
    </section>

    <section class="flex items-center space-x-2 justify-between">
      <button
        on:click={() => (showIngredient = true)}
        class=" rounded-lg text-xs font-bold py-2 w-1/2 transition-colors duration-700 ease-out {showIngredient ===
        true
          ? 'bg-[#129575] text-white'
          : 'bg-white text-[#129575]'}">Ingredients</button
      >
      <button
        class="{showIngredient === false
          ? 'bg-[#129575] text-white'
          : 'bg-white text-[#129575]'} rounded-lg text-xs font-bold py-2 w-1/2 transition-colors duration-700 ease-out "
        on:click={() => (showIngredient = false)}>Procedure</button
      >
    </section>

    <section class="flex items-center justify-between text-gray-500 text-xs">
      <div class="flex items-center space-x-1">
        <Icon src={Cake} class="h-5 w-5" />
        <p>1 serve</p>
      </div>

      <p>
        {!showIngredient
          ? `${procedure.length} steps`
          : `${ingredientAndQuantity.length} items`}
      </p>
    </section>

    {#if showIngredient === false}
      <section class="space-y-3">
        {#each procedure as p, index}
          <StepCard step={p} {index} />
        {/each}
      </section>
    {:else}
      <section class="space-y-3">
        {#each ingredientAndQuantity as i}
          <IngredientCard title={i[0]} quantity={i[1]} />
        {/each}
      </section>
    {/if}
  </main>
{:else}
  <NoData message="" />
{/if}
