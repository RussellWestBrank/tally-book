<template>
  <div>
    <ul class="tabs">
     <li v-for="item in dataSource" :key="item.value" class="tabs-item"
         :class="{selected:item.value===value,[classPrefix+'-tabs-item']: classPrefix}"
     @click="select(item)">{{item.text}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component //修饰器，自动将type加入data，selectType加入methods
  export default class Tabs extends Vue {
    @Prop({required:true,type:Array}) dataSource!: {text: string; value: string}[];
    @Prop() readonly value!: string;
    @Prop(String) classPrefix?: string;

    selectType(type: string) {//强类型
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.$emit('update:value',type)

    }
    select(item: {text: string; value: string}){
      this.$emit('update:value',item.value)
    }
  }


</script>

<style lang="scss" scoped>
  .tabs {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    &-item {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>