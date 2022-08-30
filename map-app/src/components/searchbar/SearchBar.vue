<script lang="ts" src="./SearchBar.ts"/>

<template>
    <div class="searchbar-container">
        <input
          class="form-control"
          type="text"
          placeholder="Buscar lugares..."
          v-model="searchTerm"
          />

          <SearchResults />
    </div>
</template>


<style lang="scss" src="./SearchBar.scss" scoped/>