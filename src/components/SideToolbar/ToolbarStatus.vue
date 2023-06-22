<template>
    <div class="card px-5 pt-5 pb-10">
        <h3 class="text-sm font-normal pb-5">{{ props.data.title }}</h3>

        <div id="statusHolder" class="relative flex flex-row justify-between" :class="statusClass">
            <span class="dot dot-created" :class="{
                'current' : props.data.status === 'created',
                'completed': ['approval', 'purchasing', 'closing', 'closed'].includes(props.data.status)}">
                <div v-if="props.data.details && props.data.status === 'created'" class="relative cursor-pointer" :class="{'is-rotated' : show}">
                    <Icon ref="detailIcon" :icon="iconChevronDown" @click="detailHandler" />
                </div>
            </span>
            <span class="dot dot-approval" :class="{
                'current' : props.data.status === 'approval',
                'completed': ['purchasing', 'closing', 'closed'].includes(props.data.status)}">
                <div v-if="props.data.details && props.data.status === 'approval'" class="relative cursor-pointer" :class="{'is-rotated' : show}">
                    <Icon ref="detailIcon" :icon="iconChevronDown" @click="detailHandler" />
                </div>
            </span>
            <span class="dot dot-purchasing flex flex-col items-center" :class="{
                'current' : props.data.status === 'purchasing',
                'completed': ['closing', 'closed'].includes(props.data.status)}">
                <div v-if="props.data.details && props.data.status === 'purchasing'" class="relative cursor-pointer" :class="{'is-rotated' : show}">
                    <Icon ref="detailIcon" :icon="iconChevronDown" @click="detailHandler" />
                </div>
            </span>
            <span class="dot dot-closing" :class="{
                'current' : props.data.status === 'closing',
                'completed': ['closed'].includes(props.data.status)}">
                <div v-if="props.data.details && props.data.status === 'closing'" class="relative cursor-pointer" :class="{'is-rotated' : show}">
                    <Icon ref="detailIcon" :icon="iconChevronDown" @click="detailHandler" />
                </div>
            </span>
            <span class="dot dot-closed" :class="{'current' : props.data.status === 'closed'}">
                <div v-if="props.data.details && props.data.status === 'closed'" class="relative cursor-pointer" :class="{'is-rotated' : show}">
                    <Icon ref="detailIcon" :icon="iconChevronDown" @click="detailHandler" />
                </div>
            </span>
        </div>
    </div>

    <!--  -->
    <Popup :anchor="'detailIcon'" :show="show" :popup-class="'popup-content'">
        <div class="card p-5 w-52">
            <div class="text-sm font-normal">Total</div>
            <div class="text-2xl font-light mb-5">${{ props.data.details.total }}</div>

            <div class="text-sm font-normal">
                <div class="flex flex-row justify-between mb-5">
                    <div class="w-4/12">PO #</div>
                    <div class="w-7/12">{{ props.data.details.PO }}</div>
                </div>

                <div class="flex flex-row justify-between">
                    <span class="w-4/12">Receipts</span>
                    <div class="w-7/12">
                        <div v-for="receipt in props.data.details.receipts" class="flex flex-row justify-between">
                            <div class="w-[40px] text-teal"><a :href="receipt.link">{{ receipt.invoice }}</a></div>
                            <div>${{ receipt.amount }}</div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </Popup>
    <!--  -->
</template>

<script setup lang="ts">
import { ref, computed, defineProps, onMounted } from 'vue';
import { Popup } from '@progress/kendo-vue-popup';
import Icon from '../../Utility/Icon.vue';

const iconChevronDown = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>'

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

const show = ref(false);

const detailHandler = () => {
    show.value = !show.value;
}

const statusClass = computed(() => {
  return {
    'quarter-1': props.data.status === 'approval',
    'quarter-2': props.data.status === 'purchasing',
    'quarter-3': props.data.status === 'closing',
    'quarter-4': props.data.status === 'closed',
  };
});

onMounted(() => {
    console.log(props.data);
});
</script>

<style scoped>
.icon{
    @apply mt-6 w-3 h-3 text-teal;
}
:deep(.dot .is-rotated .icon svg){
    transform: rotate(180deg);
}

#statusHolder:after{
    content: '';
    height: 2px;
    @apply absolute left-0 w-full mt-[3px] bg-gray-300;
}

#statusHolder.quarter-1:before{
    content: '';
    height: 2px;
    @apply absolute z-[1] left-0 w-1/4 mt-[3px] bg-[#A1CED3];
}
#statusHolder.quarter-2:before{
    content: '';
    height: 2px;
    @apply absolute z-[1] left-0 w-2/4 mt-[3px] bg-[#A1CED3];
}
#statusHolder.quarter-3:before{
    content: '';
    height: 2px;
    @apply absolute z-[1] left-0 w-3/4 mt-[3px] bg-[#A1CED3];
}
#statusHolder.quarter-4:before{
    content: '';
    height: 2px;
    @apply absolute z-[1] left-0 w-full mt-[3px] bg-[#A1CED3];
}
.dot{
    @apply relative z-[1] w-2 h-2 rounded-full bg-gray-300;
}
/* ---- Dot labels ---- */
.dot:after{
    @apply w-[50px] absolute left-0 right-0 bottom-[-14px] text-center text-[8px];
    transform: translateX(-45%);
}
.dot-created:after{
    content: 'Created';
}
.dot-approval:after{
    content: 'Approval';
}
.dot-purchasing:after{
    content: 'Purchasing';
}
.dot-closing:after{
    content: 'Closing';
}
.dot-closed:after{
    content: 'Closed';
}

/* ---- Dot current styles ---- */
.dot.current{
    @apply bg-teal;
}
.dot.current:after{
    @apply text-teal font-semibold;
}

/* ---- Dot completed styles ---- */
.dot.completed{
    @apply bg-[#A1CED3];
}
.dot.completed:after{
    @apply text-gray-300;
}

/* ---- Kendo popup ---- */
:deep(.popup-content){
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(100%);
    background-color: transparent;
    border: none;
    box-shadow: none;
    animation: popupReveal 0.4s ease-out forwards 0.1s;
}

@keyframes popupReveal {
    0% {
        transform: translateX(-50%) translateY(60%);
        opacity: 0;
    }
    100% {
        transform: translateX(-50%) translateY(100%);
        opacity: 1;
    }
}
</style>