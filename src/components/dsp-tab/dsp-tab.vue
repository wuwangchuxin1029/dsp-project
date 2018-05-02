<template>
  <div class="dsp-tab">
    <ul>
      <li @click="changeSelect(index)" :class="index === selected ? 'active':''" v-for="(item, index) in tabData" :key="index">{{item.label}}</li>
      <li @click="addTab">+ 添加创意</li>
    </ul>
    <div class="selected-content">
      <div v-for="(item, idx) in tabData"  v-show="idx === selected" :key="idx">
        <slot :name="item.name"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dspTab',
  props: {
    tabData: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      selected: 0,
      selectedContent: 'tab-content1'
    }
  },
  methods: {
    // 父组件传递了一个事件过来，子组件通过on接收，并自定义一个事件，通过$emit来触发它
    addTab () {
      this.$emit('edit')
    },
    changeSelect (index) {
      this.selected = index
    }
  }
}
</script>

<style scoped>
ul{
  height:35px;
  border-bottom:1px solid #ccc;
  padding:0;
}
li{
  list-style:none;
  line-height:30px;
  float: left;
  margin-right:10px;
  padding:2px 0;
}
.active{
  color:skyblue;
  border-bottom:2px solid skyblue;
}
.selected-content{
  width:100%;
  height:260px;
}
</style>
