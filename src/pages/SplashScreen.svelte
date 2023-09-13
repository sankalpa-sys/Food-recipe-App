<script>
  import { ArrowRight, Icon } from "svelte-hero-icons";
  import { Link } from "svelte-navigator";
</script>

<main class="max-h-screen w-full relative overflow-hidden font-poppins">
   
    <img src="/images/rectangle.png" class="h-full w-full" alt="">
    <section class="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-between py-20">
        <div class="flex items-center flex-col space-y-3">
            <div class="h-[79px] w-[79px] ">
                <img src="/images/logo.png" class="h-full w-full object-cover" alt="">
            </div>
            <p class="text-[#FFFFFF] font-[600] text-[18px] leading-[27px]">100K + Premium Recipee</p>
        </div>

        <div class="flex flex-col space-y-8  py-3 items-center justify-center w-full">
           <div class="text-white text-center w-full flex flex-col space-y-4 items-center justify-center">
            <h1 class="text-[50px] font-bold  leading-[60px] text-center w-1/2  outline-none">Get Cooking</h1>
            <p class='font-[400] text-[16px] leading-[24px] w-full text-center '>Simple way to find tasty Recipee</p>
           </div> 

           <Link to='/login' class=" text-white font-semibold bg-[#129575] px-10 flex items-center justify-center space-x-3 py-[18px] rounded-lg">
            <p> Start Cooking</p>
            <Icon src={ArrowRight}  class='h-5 w-5'/>
         </Link>
        </div>
        
    </section>
</main>