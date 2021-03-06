<template>
  <div class="form-group">
    <label class="col-form-label" v-tooltip="tooltip" :for="title">{{ label }}</label>
    <div class="d-flex">
      <div class="slider-wrapper d-flex flex-column">
        <vue-slider
          v-model="getSetValue"
          :contained="false"
          :min="logarithmic ? Math.log10(min) : min"
          :max="logarithmic ? Math.log10(max) : max"
          dotSize="32"
          tooltip="none"
          :interval="logarithmic ? 0.05 : interval"
          :disabled="disabled"
        >
          <template v-slot:dot>
            <div class="custom-dot"></div>
          </template>
        </vue-slider>
        <div class="d-flex justify-content-between">
          <div class="slider-marker">{{ minMarker }}</div>
          <div class="slider-marker">{{ maxMarker }}</div>
        </div>
      </div>
      <input
        v-model="getSetFormattedValue"
        class="form-control"
        type="text"
        :name="title"
        :id="title"
        :disabled="disabled"
        @blur="onBlur"
      />
    </div>
  </div>
</template>

<script lang="ts">
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import {defineComponent, DefineComponent} from 'vue'

function roundTo(r: number, n: number): number {
  return n - (n % r)
}

export default defineComponent({
  name: 'SliderInput',
  props: {
    title: {
      type: String,
      default: ''
    },
    tooltip: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: -Math.max()
    },
    max: {
      type: Number,
      default: Math.max()
    },
    interval: {
      type: Number,
      default: 1
    },
    minMarker: {
      type: String,
      default: ''
    },
    maxMarker: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    logarithmic: {
      type: Boolean,
      default: false
    }
  },
  components: { VueSlider },
  data() {
    return {
      focused: false,
      temp: null
    }
  },
  computed: {
    getSetFormattedValue: {
      get(vm: DefineComponent): any {
        const amount = vm.modelValue
        return vm.thousandSeprator(amount)
      },
      set(value: any) {
        const textAmount = value.toString() || ''
        const noCommasAmount = textAmount.replace(/,/g, '')
        const numberAmount = Number(noCommasAmount)
        const amount = Math.min(this.max, numberAmount)
        this.$emit('update:modelValue', amount)
      }
    },
    getSetValue: {
      get(vm: DefineComponent) {
        return vm.logarithmic ? Math.log10(vm.modelValue) : vm.modelValue
      },
      set(value: number) {
        this.$emit('update:modelValue', this.logarithmic ? roundTo(this.interval, 10**value) : value)
      }
    }
  },
  methods: {
    onFocus() {
      this.focused = true
    },
    onBlur() {
      this.focused = false
      this.$emit('update:modelValue', Math.max(this.min, this.modelValue))
    },
    thousandSeprator(amount: any) {
      if (
        amount !== '' ||
        amount !== undefined ||
        amount !== 0 ||
        amount !== '0' ||
        amount !== null
      ) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      } else {
        return amount
      }
    }
  }
})
</script>

<style scoped lang="scss"></style>
