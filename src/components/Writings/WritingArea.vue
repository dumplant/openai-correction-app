<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-input type="textarea" v-model="form.text" resize="none" placeholder="请输入..." rows="10" style="font-size: 1.32rem;" spellcheck="false"></el-input>
                    <!-- <el-upload class="upload-demo" drag action="#" multiple>
                        <div class="el-upload__text">键入输入，或将文件拖拽到此处</div>
                    </el-upload> -->
                </div>
                <el-button type="primary" @click="onSubmitGrammar" class="submitBtn" :disabled="!!!form.text">提交</el-button>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <div class="outputBox" v-html="content" v-loading="loading" contenteditable="true" spellcheck="false">
                    </div>
                    <!-- <div class="outputTextarea" style="white-space: pre-wrap;" v-if="!!grammarRes"  ></div> -->
                    <div class="buttonGroup" v-if="!!grammarRes">
                        <el-button type="primary" title="复制" circle icon="el-icon-document-copy" size="small" @click="onCopy"></el-button>
                        <el-button type="warning" title="收藏" circle icon="el-icon-star-off" size="small" @click="collect"></el-button>
                        <el-button type="success" title="显示差异" circle icon="el-icon-view" size="small" @click="switchContent"></el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>

import { getHighLightDiff } from "@/utils/diff";
import getResponse from '@/utils/GetResponse'
export default {
    data() {
        return {
            form: {
                text: ''
            },
            grammarRes: '',
            loading: false,
            collectedItem: {
                input: '',
                output: '',
                diffHtml: '',
                id: ''
            },
            diffHtml: '',
            showDiff: true,
        }
    },
    computed: {
        content() {
            if (this.showDiff) {
                return this.diffHtml;
            } else {
                return this.grammarRes;
            }
        }
    },
    methods: {
        getHighLightDiff,

        async onSubmitGrammar() {
            this.grammarRes = '';
            this.loading = true;
            this.grammarRes = await getResponse(this.form.text);
            this.loading = false;
            this.collectedItem.input = this.form.text;
            this.collectedItem.output = this.grammarRes;
            this.collectedItem.id = new Date().toString();
            this.diffHtml = getHighLightDiff(this.form.text, this.grammarRes);
            this.collectedItem.diffHtml = this.diffHtml;
        },
        switchContent() {
            this.showDiff = !this.showDiff;
        },
        onCopy() {
            let output = document.querySelector('.outputBox');
            output.select();
            document.execCommand("Copy");
            this.$message({
                message: "复制成功",
                type: "success"
            });
        },
        collect() {
            if (this.collectedItem.input != '' && this.collectedItem.output != '') {
                this.$store.dispatch('collections/addToCollections', this.collectedItem)
                this.$message({
                    message: '收藏成功',
                    type: 'success'
                });
            }

        }

    }
}
</script>

<style lang="scss" scoped>
body {
    margin: 0;
}


.submitBtn {
    margin-left: 2rem;
}

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



.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 20rem;
    width: 90%;
    margin: 1rem auto;

    &> :first-child {
        height: 102%;
    }

}
</style>