<template>
  <div class="image-upload">
    <div class="preview">
      <div class="info">
        <md-icon>cloud_upload</md-icon>
        Alterar Imagem
      </div>
      <img :src="computedPhotoUrl" class="rounded">
      <input
        type="file"
        accept="image/*"
        @change="uploadFile"
      >
    </div>
    <md-progress-bar md-mode="buffer" :md-value="uploadProgress" v-if="activeTaskState"></md-progress-bar>
    <div class="control" v-if="activeTaskState">
      <a href="javascript:void(0)" @click="resume" v-if="isPaused">
        <md-icon>play_circle_filled</md-icon>
        <md-tooltip md-direction="bottom">Continuar</md-tooltip>
      </a>
      <a href="javascript:void(0)" @click="pause" v-else>
        <md-icon>pause_circle_filled</md-icon>
        <md-tooltip md-direction="bottom">Pausar</md-tooltip>
      </a>
      <a href="javascript:void(0)" @click="cancel">
        <md-icon>cancel</md-icon>
        <md-tooltip md-direction="bottom">Cancelar</md-tooltip>
      </a>
    </div>
    <!-- <a href="javascript:void(0)">Remover Imagem</a> -->
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'image-upload',

  data() {
    return {
      updatedImageUrl: null,
      theFile: null,
      uploadTask: null,
      uploadPaused: false,
      uploadProgress: 20,
    }
  },

  props: {
    imageUrl: {
      type: String,
    },
    onSuccess: {
      type: Function,
      required: true,
    },
    baseDir: {
      type: String,
      required: true,
    }
  },

  computed: {
    computedPhotoUrl() {
      return this.updatedImageUrl || this.imageUrl || require('@/assets/img/plus.png');
    },
    activeTaskState() {
      return this.uploadTask != null;
    },
    isPaused() {
      return this.uploadPaused
    },
  },

  methods: {
    reset() {
      this.uploadProgress = 0;
      this.uploadTask = null;
      this.uploadPaused = false;
      this.theFile = null;
    },

    pause() {
      if(this.uploadTask) this.uploadTask.pause();
      this.uploadPaused = true;
    },

    resume() {
      if(this.uploadTask) this.uploadTask.resume();
      this.uploadPaused = false;
    },

    cancel() {
      if(this.uploadTask) this.uploadTask.cancel();
      this.reset();
    },

    uploadFile(event) {
    }
  },
}
</script>

<style lang="scss" scoped>
.preview {
  position: relative;

  input[type=file] {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }

  .info {
    visibility: hidden;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5);
    z-index: 9998;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5);
    i {
      display: block;
      color: #fff;
    }
  }
  &:hover .info {
    visibility: visible;
  }
}
.md-progress-bar {
  margin: 5px 0px;
  width: 100%;
}
.control {
  width: 50px;
  margin: 5px auto;
}
</style>
