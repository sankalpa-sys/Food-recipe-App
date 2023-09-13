<script>
  import { navigate } from "svelte-navigator";


export let user;
const handleLogout = async() => {
    try {
        await window.miniapp.logout();
        navigate("/login", {replace: true})
        window.location.reload()
    } catch (error) {
        console.log(error);
    }
}
</script>

<main class='flex justify-between items-center py-6'>
    <div class='flex flex-col space-y-1'>
        <h1 class='text-[20px]  font-bold leading-[30px]  w-[72] outline-none'>Hello {user?.display_name}</h1>
        <p class='text-[11px] font-[400] leading-[16.5px] text-[#A9A9A9] '>What are you cooking today?</p>
    </div>

    <div on:keydown={()=>{}} on:click={handleLogout} class='h-[40px] active:scale-90 transition-transform duration-300 ease-out hover:opacity-90 w-[40px] bg-black cursor-pointer rounded-full'>
        <img class="h-full w-full object-cover rounded-full" src={user?.photo_url} alt="">
    </div>
</main>