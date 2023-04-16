<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-input type="textarea" v-model="form.text" resize="none" placeholder="请输入..." rows="10" style="font-size: 1.32rem;"></el-input>
                </div>
                <el-button type="primary" @click="onSubmitGrammar" class="submitBtn" :disabled="!!!form.text">提交</el-button>

            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <el-tabs type="border-card">
                        <el-tab-pane label="语法检查" v-loading="loading" style="height: 16rem;">
                            <div style="height: 100%;">
                                <div style="white-space: pre-wrap;" v-if="!!grammarRes">{{ grammarRes }}</div>
                                <el-button type="warning" icon="el-icon-star-off" circle v-if="!!grammarRes" class="collectBtn" size="mini" @click="collect"></el-button>
                            </div>
                        </el-tab-pane>
                        <!-- <el-tab-pane label="润色" v-loading="loading" style="height: 16rem;">
                            <div style="height: 100%;">
                                <el-button type="text" @click="onSubmitPolish" v-if="!!!polishRes" class="midBtn" :disabled="!!!form.text">点击生成</el-button>
                                <div style="white-space: pre-wrap;" v-else-if="!!polishRes">{{ polishRes }}</div>
                                <el-button type="warning" icon="el-icon-star-off" circle v-if="!!polishRes" class="collectBtn" size="mini"></el-button>
                            </div>
                        </el-tab-pane> -->
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
export default {
    data() {
        return {
            form: {
                text: ''
            },
            grammarRes: '',
            polishRes: '',
            loading: false,
            collectedItem: {
                input: '',
                output: '',
                id:''
            }
        }
    },
    methods: {
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
            console.log("collection "+ this.collectedItem)
        },
       
        collect() {
            this.$store.dispatch('collections/addToCollections', this.collectedItem)
            
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

.collectBtn {
    position: absolute;
    right: 10px;
    bottom: 15px;
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
        height: 100%;
    }

}
</style>