<template>
    <div class="step">
        <div class="line" v-show="stepList.length>0">
            <ul class="box">
                <li class="item" v-for="(item,index) in stepList" :key="index">
                    <div class="hr" v-if="(index+1)!==stepList.length"></div>
                    <div class="content">
                        <div class="content-left"><i class="el-icon-success" style="color: red;"></i></div>
                        <div class="content-right">
                            <span :class="item.isActive?'active':''">{{ item.title }}</span>
                            <i class="el-icon-success" v-if="item.isInput&&!item.isActive"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>

export default {
    props:{
        stepList:{
            type:Array,
            default:[]
        }
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.active{
    color: red;
}
.step {
    // width: 200rpx;
    background-color: bisque;

    .line {
        .box {
            list-style: none;

            .item {
                position: relative;
                margin-bottom: 45px;

                .hr {
                    position: absolute;
                    top: 14px;
                    left: 6px;
                    width: 5px;
                    height: 50px;
                    background-color: blue;

                }

                .content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .content-left{
                        margin-right: 3px;
                    }
                    .content-right{
                        // width: 120px;
                        display: flex;
                        flex-direction: row;
                        align-self: flex-end;
                        span{
                            width: 80px;
                        }
                        // float: right;
                    }
                }
            }
        }
    }
}</style>