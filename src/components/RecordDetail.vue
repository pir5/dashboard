<template>
    <transition name="modal">
        <div class="modal modal-mask modal-lg" style="display: block">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <slot name="header" class="modal-title">
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button type="button" class="btn btn-primary modal-default-button" @click="$emit('save')">
                               Save
                            </button>
                            <button type="button" class="btn btn-primary modal-default-button" @click="$emit('close')">
                               Close
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
  name: 'RecordDetail'
}
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
</style>
