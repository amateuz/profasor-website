<script setup lang="ts"></script>

<template>
  <header class="pfsr-header pfsr-page-header">
    <nav class="pfsr-menu">
      <div class="container container-fluid">
        <div class="row">
          <div class="col-12 col-xl-3">
            <div class="pfsr-menu__block">
              <NuxtLink class="pfsr-menu__link pfsr-link" to="/contacts"
                >Contacts</NuxtLink
              >
              <NuxtLink class="pfsr-menu__link pfsr-link" to="/about"
                >About</NuxtLink
              >
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div
              class="pfsr-menu__block pfsr-menu__block_center pfsr-menu__block_no-padding"
            >
              <NuxtLink
                class="pfsr-menu__link pfsr-link pfsr-link_no-hover"
                to="/"
              >
                <NuxtImg
                  height="92"
                  width="467"
                  placeholder
                  src="/logos/profasor.svg"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="col-12 col-xl-3">
            <div class="pfsr-menu__block pfsr-menu__block_right">
              <NuxtLink class="pfsr-menu__link pfsr-link" to="/help"
                >Help</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
