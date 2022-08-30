<script lang="ts" src="./MyLocationBtn.ts" />

<template>
  <button
    v-if="isBtnReady"
    class="btn btn-primary"
    @click="onMyLocationClicked"> 
    Ir a mi ubicación
  </button>
</template>

<style lang="scss" src="./MyLocationBtn.scss" scoped/>