<template name="loader">
    <div class="loader">
        <div class="donut-1"></div>
        <div class="donut-2"></div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    @apply h-full bg-primary bg-opacity-75;
}
/* DONUT */
.donut-1 {
  width: 60px;
  height: 60px;
  border: 12px solid #383E54;
  border-color: transparent #383E54 #383E54 #383E54;
  border-radius: 50%;
  animation: spin-1 2s infinite linear;
  @apply absolute z-[2] left-0 right-0 m-auto;
}
.donut-2 {
  width: 60px;
  height: 60px;
  border: 12px solid #03C3D8;
  border-color: #03C3D8 transparent transparent transparent;
  border-radius: 50%;
  animation: spin-2 2s infinite linear;
  @apply absolute z-[1] left-0 right-0 m-auto;
}

@keyframes spin-1 {
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin-2 {
  0% {
    transform: rotate(-70deg);
  }
  
  100% {
    transform: rotate(290deg);
  }
}

/* .loader__spinner {
    display: flex;
    justify-content: center;
    align-items: center;
}
.loader__spinner--bounce {
    @apply bg-teal;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin: 0 5px;
    animation: loader__spinner--bounce 1s infinite alternate;
}
@keyframes loader__spinner--bounce {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-20px);
    }
} */
</style>