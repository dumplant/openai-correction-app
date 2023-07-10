<template>
  <div>
    <el-button @click="dialogVisible = true">新建</el-button>

    <el-dialog title="请开始写作" :visible.sync="dialogVisible" width="50%" height="80%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="作文类型">
          <el-cascader v-model="form.value" :options="options"></el-cascader>
        </el-form-item>
        <el-form-item label="作文标题">
          <el-input v-model="form.title" placeholder="请输入"></el-input>

        </el-form-item>
        <el-form-item label="作文正文">
          <el-input type="textarea" :rows="10" placeholder="请输入" v-model="form.textarea"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <span style="margin-right: 1rem;">字数统计：{{ wordCount }}</span>
        <el-button @click="dialogVisible = false">保 存</el-button>
        <el-button type="primary" @click="dialogVisible = false">批 改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      form: {
        title: '',
        textarea: '',
        value: ''
      },

      dialogVisible: false,
      options: [{
        value: 'xiaoxue',
        label: '小学',
      }, {
        value: 'zhongkao',
        label: '中考',
      }, {
        value: 'gaokao',
        label: '高考',
      }, {
        value: 'daxue',
        label: '大学',
        children: [{
          value: 'siji',
          label: '四级'
        }, {
          value: 'liuji',
          label: '六级'
        }]
      }, {
        value: 'tofu',
        label: '托福',
      }, {
        value: 'yasi',
        label: '雅思',
      },]
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