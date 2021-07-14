<template>
  <transition name="k-modal">
    <div class="k-modal__mask"> <!--  Display an overlay  -->
      <div class="k-modal__wrapper">
        <div class="k-modal__container">
          <div class="k-modal__header">
            <h3>
              {{ header }}
            </h3>
          </div>

          <div class="k-modal__body">
            {{ body }}
          </div>

          <div class="k-modal__actions">
            <k-button
              v-if="acceptText"
              @click="$emit('accept')"
              :text="acceptText"
              background-color="#4CAF50"
              color="#FFF"
            />
            <k-button
              v-if="refuseText"
              @click="$emit('refuse')"
              :text="refuseText"
              background-color="#FF5252"
              color="#FFF"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import KButton from '@/components/KButton';

export default {
  name: 'KModal',

  emits: ['accept', 'refuse'],

  props: {
    header: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    acceptText: {
      type: String,
      required: false,
      default: '',
    },
    refuseText: {
      type: String,
      required: false,
      default: '',
    },
  },

  components: {
    KButton,
  },
}
</script>

<style scoped lang="scss">
.k-modal__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.k-modal__wrapper {
  display: table-cell;
  vertical-align: middle;
}

.k-modal__container {
  width: 300px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.k-modal__header h3 {
  margin-top: 0;
  color: #42b983;
}

.k-modal__body {
  margin: 20px 0;
}

.k-modal__actions {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.k-modal-enter {
  opacity: 0;
}

.k-modal-leave-active {
  opacity: 0;
}

.k-modal-enter .k-modal__container,
.k-modal-leave-active .k-modal__container {
  transform: scale(1.1);
}
</style>
