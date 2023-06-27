<template>
    <aside class="fixed top-0 bottom-0 h-full bg-sidebar max-w-sidebar w-full text-sm px-6 py-6 font-Poppins">
        <div class="logo text-center text-white text-xl uppercase font-bold tracking-widest mb-3">
            GisHub
        </div>
        <ul class="">
            <li class="flex justify-between	items-center tracking-wide text-sm p-2 text-sidebar hover:text-white font-Poppins text-15px cursor-pointer mb-1" @click="handleToggle($event)">
                <div>
                    <font-awesome-icon icon="fa-solid fa-gauge-simple-high" class="pr-2"/>                
                    <span>
                        Dashboard
                    </span>
                </div>
                <font-awesome-icon icon="chevron-right"  class="w-1.5 show"/>
                <font-awesome-icon icon="chevron-down" class="w-3 hidden" />
            </li>
            <li class="flex justify-between	items-center tracking-wide text-sm p-2 text-sidebar hover:text-white font-Poppins text-15px cursor-pointer mb-1" @click="handleToggle($event)">
                <div>
                    <font-awesome-icon icon="calendar-days" class="pr-2"/>              
                    <span>
                        App
                    </span>
                </div>
                
                <font-awesome-icon icon="chevron-right"  class="w-1.5 show"/>
                <font-awesome-icon icon="chevron-down" class="w-3 hidden" />
            </li>
            <li class="flex justify-between	items-center tracking-wide text-sm p-2 text-sidebar hover:text-white font-Poppins text-15px cursor-pointer mb-1" @click="handleToggle($event)">
                <div>
                    <font-awesome-icon icon="calendar-days" class="pr-2"/>               
                    <span>
                        Dữ liệu
                    </span>
                </div>
                <font-awesome-icon icon="chevron-right"  class="w-1.5 show"/>
                <font-awesome-icon icon="chevron-down" class="w-3 hidden" />
            </li>
        </ul>
    </aside>
 
</template>

<script setup>
    const handleToggle = (event) => {
       const currentEl = event.currentTarget;
       currentEl.querySelectorAll('svg').forEach(item => {
        if(item.classList.contains('hidden') || item.classList.contains('show')) {
            item.classList.toggle('hidden')
            item.classList.toggle('show')
        }
       })
    }
</script>