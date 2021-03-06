import './Setting.scss';
import { userConfigUpdate } from '@/api/user';
import { USER, USER_NAMESPACE } from '@/store/user';
import { VNode } from 'vue';
import { Component } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import SubChildView from '@/components/utils/SubChildView';

@Component({ components: { SubChildView } })
export default class Setting extends tsx.Component<any> {
  protected notification = false;
  protected randomBtn = false;
  protected allBuffetBtn = false;

  protected advance = false;

  protected randomForNoSpicy = false;
  protected randomForEmpty = false;
  protected ppx = false;
  private loaded = false;
  private render(): VNode {
    return (
      <SubChildView title='设置' class='setting' ref='subChild'>
        <p>功能设置</p>
        <div class='setting-content'>
          <div class='group'>
            <cube-switch vModel={this.randomBtn}>开启一键随机</cube-switch>
            <cube-switch vModel={this.allBuffetBtn}>开启一键自助</cube-switch>
          </div>
        </div>
        <p>用户设置</p>
        <div class='group setting-content'>
          <cube-switch
            vModel={this.advance}
            onInput={this.advanceAlert.bind(this)}
          >
            高级模式
          </cube-switch>
        </div>
        {this.advance && (
          <div>
            <p>高级设定</p>
            {/*<div class='setting-content'>*/}
            {/*  <cube-switch vModel={this.ppx} onInput={this.ppxAlert.bind(this)}>*/}
            {/*    皮皮虾模式*/}
            {/*  </cube-switch>*/}
            {/*</div>*/}
            <p style='font-size: 14px;'>随机选餐设置</p>
            <div class='setting-content'>
              <cube-switch vModel={this.randomForNoSpicy}>不随机辣</cube-switch>
              <cube-switch vModel={this.randomForEmpty}>随机不选餐</cube-switch>
            </div>
          </div>
        )}
        <div style='margin-top: 20px;'>
          <cube-button onClick={this.save.bind(this)} primary={true}>
            保存
          </cube-button>
        </div>
      </SubChildView>
    );
  }
  private mounted() {
    const config = this.$store.state.user.config;
    this.randomBtn = config.randomBtn;
    this.randomForNoSpicy = config.randomForNoSpicy;
    this.randomForEmpty = config.randomForEmpty;
    this.allBuffetBtn = config.buffetBtn;
    this.advance = config.advance;
    this.$nextTick(() => {
      this.loaded = true;
    });
  }
  private advanceAlert(value: boolean = false) {
    if (value && this.loaded) {
      const dialog = this.$createDialog({
        type: 'confirm',
        content: `
<div>
  <p style='font-size: 12px;'>
      开启高级模式代表您已知晓高级模式带来的负面影响，包括但不限于：
  </p>
  <ol style='font-size: 12px'>
      <li>1. 随机选饭与预期不符</li>
      <li>2. 缓存失灵</li>
      <li>3. 界面同其他用户不同等问题</li>
  </ol>
</div>`,
        icon: 'cubeic-alert',
        onConfirm: async () => {
          (this.$refs.subChild as any).refresh();
          dialog.hide();
        },
        onCancel: () => {
          dialog.hide();
          this.advance = false;
        },
      });
      dialog.show();
    }
  }
  private ppxAlert(value: false) {
    if (value) {
      const dialog = this.$createDialog({
        type: 'confirm',
        content: '您确定要开启皮皮虾模式嘛！<br/>这个很危险的哟！！！',
        icon: 'cubeic-alert',
        onConfirm: async () => {
          dialog.hide();
        },
        onCancel: () => {
          dialog.hide();
          this.ppx = false;
        },
      });
      dialog.show();
    }
  }
  private async save() {
    const toast = this.$createToast({
      txt: 'loading',
      type: 'text',
      timeout: 0,
    }).show();
    const config = {
      randomBtn: this.randomBtn,
      buffetBtn: this.allBuffetBtn,
      randomForNoSpicy: this.randomForNoSpicy,
      randomForEmpty: this.randomForEmpty,
      advance: this.advance,
      ppx: this.ppx,
    };
    const res = await userConfigUpdate(config);
    toast.hide();
    if (res.code === 200) {
      await this.$store.commit(USER_NAMESPACE + USER.SET_CONFIG, { c: config });
      this.$createToast({
        txt: '保存成功',
        type: 'text',
        icon: 'cubeic-ok',
        timeout: 1500,
      }).show();
    } else {
      this.$createToast({
        txt: '保存失败',
        type: 'text',
        timeout: 1500,
      }).show();
    }
  }
}
