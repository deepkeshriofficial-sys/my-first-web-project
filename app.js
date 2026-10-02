let searchbtn = document.querySelector(".search");
let inputuser = document.querySelector(".inputuser");
let card =  document.querySelector(".card");


function getusername(username){
   return fetch(`https://api.github.com/users/${username}`).then(row => {
        if(!row.ok) throw new Error("user not found");
        return row.json();
        
    })

}

function getripo(username){

}

function decoredprofiledata(details){
    console.log(details);
    
    
    let data = `<div
                    class="flex
                           flex-col
                           gap-5
                           sm:flex-row
                           sm:items-start">


                    <!-- Avatar -->

                    <div class="shrink-0">

                        <img
                            src="${details.avatar_url}"
                            alt="GitHub Profile"
                            class="h-24 w-24
                                   rounded-full
                                   border-2
                                   border-white/10
                                   bg-white
                                   object-cover
                                   shadow-xl"
                        >

                    </div>



                    <!-- User Info -->

                    <div class="min-w-0 flex-1">


                        <!-- Name + GitHub -->

                        <div
                            class="flex
                                   flex-wrap
                                   items-center
                                   gap-3">


                            <h2
                                class="text-xl
                                       font-bold
                                       tracking-tight">

                                ${details.name}

                            </h2>


                            <!-- Verified style badge -->

                            <span
                                class="rounded-full
                                       border
                                       border-blue-400/20
                                       bg-blue-400/10
                                       px-2 py-0.5
                                       text-[10px]
                                       font-medium
                                       text-blue-400">

                                GitHub

                            </span>

                        </div>



                        <!-- Username -->

                        <p
                            class="mt-1
                                   text-sm
                                   text-blue-400">

                            ${details.login}

                        </p>



                        <!-- Bio -->

                        <p
                            class="mt-3
                                   max-w-lg
                                   text-sm
                                   leading-6
                                   text-slate-400">

                            ${details.bio ? details.bio : ""}

                        </p>


                    </div>

                </div>



                <!-- ================= USER DETAILS ================= -->

                <div
                    class="mt-6
                           grid
                           grid-cols-1
                           gap-3
                           border-t
                           border-white/[0.07]
                           pt-5
                           sm:grid-cols-2">


                    <!-- Location -->

                    <div
                        class="flex
                               items-center
                               gap-3
                               text-sm
                               text-slate-400">

                        <div
                            class="flex h-9 w-9
                                   shrink-0
                                   items-center
                                   justify-center
                                   rounded-lg
                                   bg-white/[0.05]
                                   text-slate-400">

                            <svg
                                class="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">

                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.8"
                                    d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/>

                                <circle
                                    cx="12"
                                    cy="10"
                                    r="2.2"
                                    stroke-width="1.8"/>

                            </svg>

                        </div>

                        ${details.location}

                    </div>



                    <!-- Company -->

                    <div
                        class="flex
                               items-center
                               gap-3
                               text-sm
                               text-slate-400">

                        <div
                            class="flex h-9 w-9
                                   shrink-0
                                   items-center
                                   justify-center
                                   rounded-lg
                                   bg-white/[0.05]">

                            <svg
                                class="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">

                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.8"
                                    d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5"/>

                            </svg>

                        </div>

                        ${details.company}

                    </div>



                    <!-- Website -->

                    <div
                        class="flex
                               items-center
                               gap-3
                               text-sm
                               text-slate-400">

                        <div
                            class="flex h-9 w-9
                                   shrink-0
                                   items-center
                                   justify-center
                                   rounded-lg
                                   bg-white/[0.05]">

                            <svg
                                class="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">

                                <circle
                                    cx="12"
                                    cy="12"
                                    r="9"
                                    stroke-width="1.8"/>

                                <path
                                    stroke-linecap="round"
                                    stroke-width="1.8"
                                    d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z"/>

                            </svg>

                        </div>

                        <span class="truncate text-blue-400">
                            github.com
                        </span>

                    </div>



                    <!-- Joined -->

                    <div
                        class="flex
                               items-center
                               gap-3
                               text-sm
                               text-slate-400">

                        <div
                            class="flex h-9 w-9
                                   shrink-0
                                   items-center
                                   justify-center
                                   rounded-lg
                                   bg-white/[0.05]">

                            <svg
                                class="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">

                                <rect
                                    x="3"
                                    y="4"
                                    width="18"
                                    height="17"
                                    rx="2"
                                    stroke-width="1.8"/>

                                <path
                                    stroke-width="1.8"
                                    d="M16 2v4M8 2v4M3 9h18"/>

                            </svg>

                        </div>

                        Joined ${details.created_at}

                    </div>

                </div>



                <!-- ================= STATS ================= -->

                <div
                    class="mt-6
                           grid
                           grid-cols-3
                           overflow-hidden
                           rounded-xl
                           border
                           border-white/[0.07]
                           bg-black/10">


                    <!-- Followers -->

                    <div
                        class="p-4
                               text-center
                               sm:p-5">

                        <p
                            class="text-xl
                                   font-bold
                                   text-white">

                             ${details.followers}

                        </p>

                        <p
                            class="mt-1
                                   text-xs
                                   text-slate-500">

                            Followers

                        </p>

                    </div>



                    <!-- Following -->

                    <div
                        class="border-x
                               border-white/[0.07]
                               p-4
                               text-center
                               sm:p-5">

                        <p
                            class="text-xl
                                   font-bold
                                   text-white">

                            ${details.following}

                        </p>

                        <p
                            class="mt-1
                                   text-xs
                                   text-slate-500">

                            Following

                        </p>

                    </div>



                    <!-- Repositories -->

                    <div
                        class="p-4
                               text-center
                               sm:p-5">

                        <p
                            class="text-xl
                                   font-bold
                                   text-white">

                            ${details.public_repos}

                        </p>

                        <p
                            class="mt-1
                                   text-xs
                                   text-slate-500">

                            Repositories

                        </p>

                    </div>

                </div>



                <!-- ================= EXTRA STATS ================= -->

                <div
                    class="mt-4
                           flex
                           flex-wrap
                           gap-2">


                    <!-- Gists -->

                    <div
                        class="flex
                               items-center
                               gap-2
                               rounded-lg
                               border
                               border-white/[0.07]
                               bg-white/[0.025]
                               px-3 py-2
                               text-xs
                               text-slate-400">

                        <span
                            class="h-1.5
                                   w-1.5
                                   rounded-full
                                   bg-violet-400">
                        </span>

                        1 Public Gist

                    </div>


                    <!-- Account Type -->

                    <div
                        class="flex
                               items-center
                               gap-2
                               rounded-lg
                               border
                               border-white/[0.07]
                               bg-white/[0.025]
                               px-3 py-2
                               text-xs
                               text-slate-400">

                        <span
                            class="h-1.5
                                   w-1.5
                                   rounded-full
                                   bg-emerald-400">
                        </span>

                        Public Account

                    </div>


                    <!-- Hireable -->

                    <div
                        class="flex
                               items-center
                               gap-2
                               rounded-lg
                               border
                               border-white/[0.07]
                               bg-white/[0.025]
                               px-3 py-2
                               text-xs
                               text-slate-400">

                        <span
                            class="h-1.5
                                   w-1.5
                                   rounded-full
                                   bg-slate-500">
                        </span>

                        Not Available for Hire

                    </div>

                </div>



                <!-- ================= VIEW PROFILE ================= -->

                <div class="mt-6">

                    <a
                        href=" ${details.html_url}"
                        target="_blank"
                        class="flex
                               w-full
                               items-center
                               justify-center
                               gap-2
                               rounded-lg
                               border
                               border-white/10
                               bg-white/[0.04]
                               py-3
                               text-sm
                               font-medium
                               text-slate-300
                               transition
                               hover:border-blue-500/30
                               hover:bg-blue-500/10
                               hover:text-white">

                        View GitHub Profile

                        <svg
                            class="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">

                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 17 17 7M7 7h10v10"/>

                                </svg>
                                
                                </a>
                                
                 </div>`

    card.innerHTML= data;
 }


                            
 searchbtn.addEventListener("click", function(){
    let userinput = inputuser.value.trim();
    if(userinput.length > 0 ){
        getusername(userinput).then(data => {
            decoredprofiledata(data);
            
        })

    }else{
        alert();
    }
})
