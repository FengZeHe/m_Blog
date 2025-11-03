<template>
    <ul class="contact-container">
        <li><a href="">
                <div class="icon">
                    <Icon iconType="github"></Icon>
                </div>
                <span>He Ze Feng</span>
            </a></li>

        <li>
            <a href="mailto:844890909@qq.com">
                <div class="icon">
                    <Icon iconType="mail"></Icon>
                </div>
                <span>844890909@qq.com</span>
            </a>
        </li>

        <li>
            <a href="">
                <div class="icon">
                    <Icon iconType="qq"></Icon>
                </div>
                <span>844890909</span>
            </a>
            <div class="pop">
                <img src="https://img1.baidu.com/it/u=3688443154,840390578&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
                    alt="" />
            </div>
        </li>

        <li>
            <a href="">
                <div class="icon weixin">
                    <Icon iconType="weixin"></Icon>
                </div>
                <span>844898989</span>
            </a>
            <div class="pop">
                <img src="https://gips2.baidu.com/it/u=3488599721,1175981259&fm=3074&app=3074&f=PNG?w=1440&h=2560"
                    alt="">
            </div>
        </li>

    </ul>
</template>

<script>
import Icon from '../../Icon'
export default {
    components: {
        Icon
    }
}
</script>

<style lang="less" scoped>
@import url(@/styles/global.less);
@import url(@/styles/var.less);

.contact-container {
    list-style: none;
    padding: 20px;
    color: @gray;
    @itemHeight: 30px;

    li {
        height: @itemHeight;
        line-height: 30px;
        margin: 12px 0;

        &:hover {
            .pop {
                transform: scaleY(1);
            }
        }
    }

    a {
        display: flex;
        cursor: pointer;
        align-items: center;
        font-size: 14px;
    }

    .icon {
        font-size: 26px;
        width: 36px;

        &.weixin {
            font-size: 32px;
            text-indent: -3px;
        }
    }


    .pop {
        position: relative;
        left: 0;
        bottom: @itemHeight+180px;
        padding: 10px 5px;
        background: #fff;
        border-radius: 5px;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: 0.3s;


        img {
            width: 150px;
            height: 150px;
        }

        &::after {
            content: "";
            position: relative;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
            width: 8px;
            height: 8px;
            background: #fff;
            bottom: -4px;
        }
    }
}
</style>