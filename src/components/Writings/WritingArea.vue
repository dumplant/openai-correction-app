<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-input type="textarea" v-model="form.text" resize="none" placeholder="请输入..." rows="10" style="font-size: 1.32rem;" spellcheck="false"></el-input>
                </div>
                <el-button type="primary" @click="onSubmitGrammar" class="submitBtn" :disabled="!!!form.text">提交</el-button>

            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <div class="outputBox" v-html="content" v-loading="loading" contenteditable="true" spellcheck="false">
                    </div>
                    <!-- <div class="outputTextarea" style="white-space: pre-wrap;" v-if="!!grammarRes"  ></div> -->
                    <div class="buttonGroup" v-if="!!grammarRes">
                        <el-button type="primary" circle icon="el-icon-document-copy" size="small" @click="onCopy(grammarRes)"></el-button>
                        <el-button type="warning" circle icon="el-icon-star-off" size="small" @click="collect"></el-button>
                        <el-button type="success" circle icon="el-icon-view" size="small" @click="switchContent"></el-button>
                    </div>
                </div>


            </el-col>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { getHighLightDiff } from "@/utils/diff";
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
        async getResponse(content) {
            const data = JSON.stringify({
                apiKey: process.env.VUE_APP_OPENAI_API_KEY,
                sessionId: uuidv4(),
                content: content,
            });
            var config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "/pro/chat/completions",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };
            try {
                const response = await axios(config);
                return response.data.data;
            } catch (error) {
                return error;
            }
        },
        async onSubmitGrammar() {
            this.grammarRes = '';
            this.loading = true;
            const content = `输出下面语句进行语法改正后的结果：${this.form.text}`;
            this.grammarRes = await this.getResponse(content);
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
        onCopy(data) {
            let oInput = document.createElement("input");
            oInput.value = data;
            document.body.appendChild(oInput);
            oInput.select();
            document.execCommand("Copy");
            this.$message({
                message: "复制成功",
                type: "success"
            });
            oInput.remove();


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