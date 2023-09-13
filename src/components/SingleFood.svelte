<script>
    import {Icon,  Star } from "svelte-hero-icons";
    import {  Link } from "svelte-navigator";
    export let strMealThumb;
    export let strMeal;
    export let idMeal;

</script>

<Link to='/recipee/{idMeal}' class="h-[150px] rounded-[10px] relative cursor-pointer hover:opacity-90">
    <img src={strMealThumb} class="h-full w-full rounded-[10px] object-cover" alt="">

    <div class="flex flex-col space-y-1 absolute bottom-2 left-2 text-white z-50">
        <p class="w-[130px]  text-[11px] font-[600]">{strMeal}</p>
        <p class="w-[53px]  font-[400] text-[8px] ">By chef John</p>
    </div>

    <div class="bg-black/40 rounded-[10px] absolute h-full w-full left-0 top-0 z-40"/>

    <div class="bg-[#FFE1B3] w-[37px] h-[16px] flex items-center justify-center rounded-[20px] space-x-[3px] py-[2px] px-[7px] absolute top-2 z-50 right-2">
        <Icon src="{Star}" solid class='h-[7px] w-[7.5px] text-[#FFAD30]'/>
        <p class="text-[8px] font-[400] leading-[12px]">4.0</p>
    </div>
</Link>