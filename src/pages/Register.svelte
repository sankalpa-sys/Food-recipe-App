<script>
  import { ArrowRight, Icon } from "svelte-hero-icons";
  import { Link } from "svelte-navigator";

</script>


<main class="flex flex-col h-screen py-6 px-4">
    <h5 class="text-[20px] font-[600] outline-none">Create an account</h5>
    <p class="text-[11px] font-[400] w-[50vw] tracking-wider mt-2 mb-4">Lets help yo set up your account, it wont take long.</p>

    <form class="space-y-5">
        <div class="flex flex-col space-y-1">
            <label class="text-sm tracking-wider ml-[3px] font-[400] " for="name">Name</label>
            <input class="border outline-none py-4 rounded-lg border-gray-300 px-2 text-xs" type="text" placeholder="Enter Name" name="name" id="name">
        </div>
        <div class="flex flex-col space-y-1">
            <label class="text-sm tracking-wider ml-[3px] font-[400] " for="email">Email</label>
            <input class="border outline-none py-4 rounded-lg border-gray-300 px-2 text-xs" type="email" placeholder="Enter Email" name="email" id="email">
        </div>
        <div class="flex flex-col space-y-1">
            <label class="text-sm tracking-wider ml-[3px] font-[400] " for="password">Password</label>
            <input class="border outline-none py-4 rounded-lg border-gray-300 px-2 text-xs" type="password" placeholder="Enter Password" name="password" id="password">
        </div>
        <div class="flex flex-col space-y-1">
            <label class="text-sm tracking-wider ml-[3px] font-[400] " for="confirmPassword">Confirm Password</label>
            <input class="border outline-none py-4 rounded-lg border-gray-300 px-2 text-xs" type="password" placeholder="Retype Password " name="confirmPassword" id="confirmPassword">
        </div>

        <div class="flex items-center  space-x-2">
            <input class="border-[#FF9C00] border" type="checkbox" name="terms" id="terms">
            <label class="text-[11px] text-[#FF9C00]" for="terms">Accept terms & Condition</label>
        </div>

        <button class="text-sm text-white font-semibold bg-[#129575] w-full flex items-center justify-center space-x-6 py-[18px] rounded-lg">
           <p> Sign Up</p>
           <Icon src={ArrowRight} class='h-5 w-5'/>
        </button>
    </form>

    <div class="flex items-center space-x-3 pl-[70px]">
        <div class="h-[1px] w-[50px] bg-gray-300 "/>
        <p class="text-[11px] text-gray-300 text-center my-4 ">Or sign in with</p>
        <div class="h-[1px] w-[50px] bg-gray-300 "/>
    </div>

    <section class="flex items-center justify-center space-x-3">
        <div class='h-[44px] w-[44px] bg-[#FFFFFF] shadow-lg flex items-center justify-center rounded-lg'>
            <img src="/images/google.png" alt="google icon" class="h-[24px] w-[24px] object-cover rounded-lg">
        </div> 
        <div class='h-[44px] w-[44px] bg-[#FFFFFF] shadow-lg flex items-center justify-center rounded-lg'>
            <img src="/images/facebook.png" alt="facebook icon" class="h-[24px] w-[24px] object-cover rounded-lg">
        </div> 
    </section>

    <section class='text-center flex items-center justify-center my-4'>
        <p class="text-black font-[500] text-[11px] ">Already a member?</p>
        <Link to='/login'><p class="text-[#FF9C00] font-[500] text-[11px] ">Sign in</p></Link>
    </section>
</main>