<template>
  <div class="flex flex-col items-center md:flex-row">
    <img
      class="rounded-full w-48 mb-4"
      src="https://avatars.githubusercontent.com/u/10376295?v=4"
      alt="Avatar Mattia Dapino"
    />
    <div class="flex flex-col justify-center text-3xl md:pl-4">
      <h1 class="text-4xl font-semibold font-mono mb-1">Mattia Dapino</h1>
      <div class="flex justify-center md:justify-start gap-x-1">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="
            focus:ring-2 focus:ring-current focus:outline-none
            text-black
            hover:text-blue-600
          "
        >
          <fa-icon :icon="social.icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
export default {
  computed: {
    socials: () => [
      { name: "Github", icon: faGithub, url: "http://github.com/mitto98" },
      {
        name: "Linkedin",
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/mattiadapino/",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
img {
  box-shadow: -0.5rem 0.5rem black, 0.5rem -0.5rem #cecece;
  transition: box-shadow 1s ease;
  &:hover {
    box-shadow: none;
  }
}
</style>
