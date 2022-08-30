<script lang="ts" src="./MapView.ts" />

<template>
        <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
            <div class="text-center">
                <h3> Espere por favor </h3>
                <span> Localizando ... </span>
            </div>
        </div>

        <div
          v-show="isUserLocationReady"
          class="map-container"
          ref="mapElement"
        />
</template>

<style lang="scss" src="./MapView.scss" scoped />