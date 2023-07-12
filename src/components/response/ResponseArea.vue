<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="修改" name="first">
        <!-- <el-col :span="12"> -->
        <div class="grid-content bg-purple-light">
          <div class="outputBox" v-html="content" v-loading="loading" contenteditable="false" spellcheck="false">
          </div>
          <div class="buttonGroup">
            <el-button type="primary" title="复制" circle icon="el-icon-document-copy" size="small" @click="onCopy"></el-button>
            <el-button type="warning" title="收藏" circle icon="el-icon-star-off" size="small" @click="collect"></el-button>
            <el-button type="success" title="显示差异" circle icon="el-icon-view" size="small" @click="switchContent"></el-button>
          </div>
        </div>
        <!-- </el-col> -->
      </el-tab-pane>
      <el-tab-pane :label="res.totalScore ? '得分：' + res.totalScore + ' / 9' : '得分'" name="second">
        <div v-if="res.totalScore">
          <h2>总分：{{ res.totalScore }}</h2>
          <h3>词汇能力</h3>
          <div>得分：{{ res.vpScore }}</div>
          <div>评价：{{ res.vpEvaluation }}</div>
          <h3>句子能力</h3>
          <div>得分：{{ res.spScore }}</div>
          <div>评价：{{ res.spEvaluation }}</div>

          <h3>篇章能力</h3>
          <div>得分：{{ res.epScore }}</div>
          <div>评价：{{ res.epEvaluation }}</div>

        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getHighLightDiff } from "@/utils/diff";
export default {
  props: ['gradeRes', 'orginalVersion'],
  data() {
    return {
      diffHtml: '',
      showDiff: false,
      activeName: 'first'
    };
  },
  computed: {
    res: function () {
      return this.gradeRes // 直接监听props里的status状态
    },
    content() {
      if (this.showDiff) {
        return this.diffHtml;
      } else {
        return this.res.polishedVersion;
      }
    }
  },

  methods: {
    switchContent() {
      if (!this.diffHtml) {
        this.diffHtml = getHighLightDiff(this.orginalVersion, this.res.polishedVersion);
      }
      this.showDiff = !this.showDiff;
      console.log(this.diffHtml);
    },
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
  // font-size: 1.32rem;
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


// .bg-purple-light {
//   background: #e5e9f2;
// }

// .grid-content {
//   border-radius: 4px;
//   min-height: 36px;
//   height: 20rem;
//   width: 90%;
//   margin: 1rem auto;

//   &> :first-child {
//     height: 102%;
//   }

// }
</style>