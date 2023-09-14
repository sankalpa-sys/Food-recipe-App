<script>
  import { navigate } from "svelte-navigator";


export let user;
</script>

<main class='flex justify-between items-center py-6'>
    <div class='flex flex-col space-y-1'>
        <h1 class='text-[20px]  font-bold leading-[30px]  w-[72] outline-none'>Hello Sankalpa</h1>
        <p class='text-[11px] font-[400] leading-[16.5px] text-[#A9A9A9] '>What are you cooking today?</p>
    </div>

    <div on:keydown={()=>{}} class='h-9 active:scale-90 transition-transform duration-300 ease-out hover:opacity-90 w-9 bg-black cursor-pointer rounded-full'>
        <img class="h-full w-full object-cover rounded-full" src="https://images.pexels.com/photos/5514883/pexels-photo-5514883.jpeg?auto=compress&cs=tinysrgb&w=800" alt="">
    </div>
</main>