<template>
  <div>
    <!-- <div>
      <span data-splitting class="menu__item-title">{{ text }}</span>
    </div> -->
    <div class="distortion">
      <a class="distortion-link">
        <span
          data-splitting
          class="distortion-text"
          :class="isSmall ? 'is-small' : 'is-large'"
          >{{ text }}</span
        >
      </a>
    </div>
  </div>
</template>

<script>
import Splitting from 'splitting'
import MenuItem from '../classes/menuItemClass.js'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
export default {
  name: 'TextDistortion',

  props: {
    text: {
      type: String,
      required: true,
    },
    isSmall: {
      type: Boolean,
      required: false,
      defautl: false,
    },
  },
  mounted() {
    // Track the mouse position and update it on mouse move

    // initialize Splitting
    Splitting()

    if (document) {
      // Menu Items
      ;[...document.querySelectorAll('.distortion > a')].forEach(
        (el) => new MenuItem(el)
      )

      this.addElementForChar()
    }
  },

  methods: {
    addElementForChar() {
      const elNum = document.querySelectorAll(
        '.distortion-text .word .char'
      ).length
      const _el = (idx) => {
        return document.querySelectorAll('.distortion-text .word .char')[idx]
      }

      const tag = document.createElement('div')
      tag.classList.add('word-anim', 'left')
      _el(1).appendChild(tag)

      const tag2 = document.createElement('div')
      tag2.classList.add('word-anim', 'right')
      _el(elNum - 1).appendChild(tag2)

      const tag3 = document.createElement('div')
      tag3.classList.add('word-anim', 'center')
      _el(Math.floor((elNum - 1) / 2)).appendChild(tag3)
    },
  },
}
</script>

<style lang="scss" scoped>
.distortion-text {
  font-family: $base-font-title;
  letter-spacing: -1px;
  color: $base-font-color;
  font-size: 45px;
  line-height: 1.5;

  &.is-small {
    font-size: 35px;
  }
}

@media (max-width: $max-tablet) {
  .distortion-text {
    font-size: 37px;
    .subtitle {
      font-size: 30px;
      line-height: 1;
    }
    &.is-small {
      font-size: 30px;
    }
  }
}
</style>
