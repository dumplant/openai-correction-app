<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="修改" name="first">
        <!-- <el-col :span="12"> -->
        <div class="grid-content bg-purple-light">
          <div class="outputBox" v-html="res.polishedVersion" v-loading="loading" contenteditable="false" spellcheck="false">
          </div>
          <div class="buttonGroup">
            <el-button type="primary" title="复制" circle icon="el-icon-document-copy" size="small" @click="onCopy"></el-button>
            <el-button type="warning" title="收藏" circle icon="el-icon-star-off" size="small" @click="collect"></el-button>
            <el-button type="success" title="显示差异" circle icon="el-icon-view" size="small" @click="switchContent"></el-button>
          </div>
        </div>
        <!-- </el-col> -->
      </el-tab-pane>
      <el-tab-pane label="得分" name="second">得分

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  props: ['gradeRes'],
  data() {
    return {

      activeName: 'first'
    };
  },
  computed: {
    res: function () {
      return this.gradeRes // 直接监听props里的status状态
    }
  },

  methods: {
    handleClick(tab, event) {
      console.log("this.res = " + this.res);
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
.outputBox {
  font-family: monospace;
  background: #feffff;
  overflow: auto;
  height: 19rem;
  font-size: 1.32rem;
  display: block;
  padding: 5px 15px;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
  color: #606266;
  background-color: #FFF;
  background-image: none;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
}

.buttonGroup {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>