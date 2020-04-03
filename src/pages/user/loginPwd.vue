<template>
  <div>
    <el-container>
        <el-main>
            <el-row>
                <h2>密码登陆</h2>
            </el-row>
            <el-form ref="form" :model="form" label-width="80px">
                <el-row>
                    <div style="margin-top:50px;">
                        <el-form-item prop="username" required>
                            <el-input
                                placeholder="手机/用户名"
                                v-model="form.username"
                                clearable>
                            </el-input>
                        </el-form-item>
                    </div>
                </el-row>
                <el-row>
                    <el-form-item prop="username" required>
                        <el-input placeholder="密码" v-model="form.password" show-password></el-input>
                    </el-form-item>
                </el-row>
                <el-row>
                    <div style="margin-top:50px;">
                        <el-button @click="loginSubmit" type="info" plain style="width:100%">登录</el-button>
                    </div>
                </el-row>
            </el-form>
            <el-row>
                <div style="margin-top:10px;">
                    <el-link type="primary" style="font-weight:350;">手机号登录</el-link>
                    <el-link type="primary" style="float:right;font-weight:350;">忘记密码</el-link>
                </div>
            </el-row>
        </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        jumpto(link){
            if(link==''){
            this.$toast("功能开发中");
            }else{
            this.$router.push(link);
            }
        },
        loginSubmit(){
            let that = this;
            let url = that.HOST + "/login";
            let param = {
                username: that.form.username,
                password: that.form.password
            };
            that.$axios({
                url: url,
                method: 'POST',
                data: param
            }).then(resp => {
            if(resp.data.success){
                that.$store.commit('loginAccount',
                    {
                        currentAccount: resp.data.content
                    }
                );
                that.jumpto('/info');
            }else{
                that.$toast(resp.data.msg);
            }}).catch(err =>{
                that.$toast(err.data.msg);
            });
        },
    },
    components: {

    }
}
</script>

<style scoped>

</style>
