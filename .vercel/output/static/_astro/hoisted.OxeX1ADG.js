import"./hoisted.xI0VDRZf.js";const s=document.getElementById("contact-form"),e=s.querySelector('button[type="submit"]');async function l(a){a.preventDefault(),e.disabled=!0,e.innerHTML=`<svg class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg> Sending...`;const r=new FormData(a.target);try{const t=await fetch("/api/sendEmail.json",{method:"POST",body:r}),o=await t.json();if(console.log(o),t.ok)s.innerHTML=`
          <div class="bg-blacklite bg-opacity-70 rounded-xl p-8 shadow-2xl text-center">
            <svg class="text-5xl text-lilac mb-4 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <h2 class="text-2xl font-bold text-lilac mb-4">Thank You!</h2>
            <p class="text-platinum">Your message has been sent successfully. We'll get back to you soon.</p>
          </div>
        `;else throw new Error(o.message||"Server error")}catch(t){console.error("Error submitting form:",t),e.disabled=!1,e.innerHTML=`<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
      </svg> Send Message`,alert(`Error sending message: ${t.message}`)}}s.addEventListener("submit",l);
