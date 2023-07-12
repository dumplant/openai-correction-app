<template>
  <div>
    <el-button @click="dialogVisible = true">新建</el-button>

    <el-dialog title="请开始写作" :visible.sync="dialogVisible" width="70%" height="100%" :before-close="handleClose">
      <div style="height: 600px;overflow: auto">
        <el-col :span="12">
          <el-row>
            <el-form ref="form" :model="form" label-width="80px" style="margin-right: 20px;">
              <el-form-item label="作文类型">
                <el-cascader v-model="form.value" :options="options"></el-cascader>
              </el-form-item>
              <el-form-item label="作文标题">
                <el-input v-model="form.title" type="textarea" :rows="3" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="作文正文">
                <el-input type="textarea" :rows="15" placeholder="请输入" v-model="form.textarea"></el-input>
              </el-form-item>

            </el-form>
          </el-row>
          <el-row>
            <div style="float: right; margin-right: 20px;">
              <span style="margin-right: 1rem;">字数统计：{{ wordCount }}</span>
              <el-button @click="dialogVisible = false">保 存</el-button>
              <el-button type="primary" @click="toGrade()">批 改</el-button>
            </div>

          </el-row>
        </el-col>
        <el-col :span="12">
          <ResponseArea :gradeRes="gradeRes" :orginalVersion="form.textarea" />
        </el-col>
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-col :span="12">
          <span style="margin-right: 1rem;">字数统计：{{ wordCount }}</span>
          <el-button @click="dialogVisible = false">保 存</el-button>
          <el-button type="primary" @click="toGrade()">批 改</el-button>
        </el-col>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import getResponse from '@/utils/GetResponse'
import ResponseArea from '@/components/response/ResponseArea.vue'
export default {
  components: {
    ResponseArea
  },
  data() {
    return {
      form: {
        title: '',
        textarea: '',
        value: ''
      },

      dialogVisible: false,
      options: [{
        value: '小学',
        label: '小学',
      }, {
        value: '中考',
        label: '中考',
      }, {
        value: '高考',
        label: '高考',
      }, {
        value: '大学',
        label: '大学',
        children: [{
          value: '四级',
          label: '四级'
        }, {
          value: '六级',
          label: '六级'
        }]
      }, {
        value: '托福',
        label: '托福',
      }, {
        value: '雅思',
        label: '雅思',
      },],
      gradeRes: {}
    };
  },
  computed: {
    wordCount() {
      if (this.form.textarea.trim() === '') {
        return 0;
      }
      return this.form.textarea.trim().split(/\s+/).length;
    },
  },
  methods: {
    async toGrade() {
      // this.dialogVisible = false;
      this.gradeRes = await getResponse(this.form.value, this.form.textarea);
      const cleanedString = this.gradeRes.replace(/[\u0000-\u001F\u0080-\u009F]/g, ''); // 移除控制字符
      const jsonRegex = /\{(?:[^{}]|(?:\{(?:[^{}]|[^{}]*\}))*[^{}]*)*\}/g;
      const jsonMatches = cleanedString.match(jsonRegex);
      this.gradeRes = JSON.parse(jsonMatches)
      console.log(this.gradeRes);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  }
};
</script>

<style lang="scss" scoped></style>