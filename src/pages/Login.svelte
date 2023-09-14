<script>
    import { ArrowRight, Icon } from "svelte-hero-icons";
    import {Link, useNavigate} from "svelte-navigator";
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const navigator = useNavigate()
  
  </script>
  
  
  <main class="flex flex-col h-screen px-4 py-6">
      <h5 class="text-2xl tracking-wider font-bold  outline-none">Hello</h5>
      <p class="text-lg font-[400] w-[50vw] tracking-wider mt-2 mb-4">Welcome Back!</p>
  
      <form on:submit={handleSubmit} class="space-y-5 my-10">
 
          <div class="flex flex-col space-y-1">
              <label class="text-sm tracking-wider ml-[3px] font-[400] " for="email">Email</label>
              <input class="border outline-none py-4 rounded-lg border-gray-300 px-2 text-xs" type="email" placeholder="Enter Email" name="email" id="email">
          </div>
          <div class="flex flex-col space-y-1">
              <label class="text-sm tracking-wider ml-[3px] font-[400] " for="password">Password</label>
              <input class="border outline-none py-4 rounded-lg border-gray-300 px-2 text-xs" type="password" placeholder="Enter Password" name="password" id="password">
          </div>
 
  
          <button  class="text-sm active:scale-90 transition-transform duration-300 ease-out text-white font-semibold bg-[#129575] w-full flex items-center justify-center space-x-4 py-[18px] rounded-lg">
             <p> Sign In</p>
             <Icon src={ArrowRight}  class='h-5 w-5'/>
          </button>
      </form>
  
      <div class="flex items-center space-x-3 justify-center">
          <div class="h-[1px] w-[50px] bg-gray-300 "/>
          <p class="text-[11px] text-gray-300 text-center my-4 ">Or sign in with</p>
          <div class="h-[1px] w-[50px] bg-gray-300 "/>
      </div>
  
      <section class="flex items-center justify-center space-x-3">
          <div on:keydown={()=>{}} on:click={()=>navigator('/home')} class='h-[44px] w-[44px] cursor-pointer bg-[#FFFFFF] shadow-lg flex items-center justify-center rounded-lg'>
              <img src="/images/google.png" alt="google icon" class="h-[24px] w-[24px] object-cover rounded-lg">
          </div> 
          <div class='h-[44px] w-[44px] bg-[#FFFFFF] shadow-lg flex items-center justify-center rounded-lg'>
              <img src="/images/facebook.png" alt="facebook icon" class="h-[24px] w-[24px] object-cover rounded-lg">
          </div> 
      </section>
  
      <section class='text-center flex items-center justify-center my-4'>
          <p class="text-black font-[500] text-[11px] ">Don't have an account?</p>
          <Link to='/register'><p class="text-[#FF9C00] font-[500] text-[11px] ">Sign up</p></Link>
      </section>
  </main>