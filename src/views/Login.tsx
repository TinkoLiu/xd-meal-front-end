import './Login.scss';

import { VNode } from 'vue';
import * as tsx from 'vue-tsx-support';
import { Component } from 'vue-property-decorator';

import { USER, USER_NAMESPACE } from '@/store/user';
import Input from './../components/app/v2/utils/input';
@Component({
  components: { Input },
})
export default class Login extends tsx.Component<any> {
  protected username: string = '';
  protected password: string = '';
  public render(): VNode {
    return (
      <div class='app-login'>
        <div class='app-login-wrap'>
          <div class='xd-logo' />
          <div class='app-login-form'>
            <div class='app-login__input-wrap'>
              <Input
                vModel={this.username}
                type='text'
                label='邮箱'
                focusPlaceholder='请输入心动邮箱'
              />
            </div>
            <div class='app-login__input-wrap'>
              <Input
                vModel={this.password}
                type='password'
                label='密码'
                focusPlaceholder='请输入密码'
              />
            </div>
          </div>
          {/*<div class='app-login-forget'>找回密码</div>*/}
          <button class='app-login-submit' onClick={() => this.login()}>
            <span class='icon' />
          </button>
        </div>
        <div class='app-login-buttons'>
          <span class='qrcode-icon-container'>
            <span class='qrcode-icon-item'>
              <img
                src='https://osf.xdcdn.net/EntWechat-xdos/c56d2277/03c142137b24ad6b14494ccd0369863010d972e0.svg'
                onClick={() => {
                  this.doQRLogin('xd');
                }}
              />
            </span>
            {/*<span class='qrcode-icon-item'>*/}
            {/*  <img*/}
            {/*    src='https://osf.xdcdn.net/EntWechat-xdos/c56d2277/9e5c03ec7e32c8249fe4e51760e609d64a9266a8.png'*/}
            {/*    data-corp='tap'*/}
            {/*    onClick={() => {*/}
            {/*      this.doQRLogin('tap');*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</span>*/}
            <span class='qrcode-icon-item'>
              <img
                src='https://osf.xdcdn.net/EntWechat-xdos/c56d2277/6ef66098acb8733b767734f098005c2a5ce72f77.png'
                data-corp='xdg'
                onClick={() => {
                  this.doQRLogin('xdg');
                }}
              />
            </span>

            {/* <img
                src='https://osf.xdcdn.net/EntWechat-xdos/c56d2277/27f1a88a22d60d0b38e4c0f4d97097a1b5ccd08e.svg'
                class='qrcode-icon-item'
                data-corp='?'
                onClick={() => { this.doQRLogin('?'); }}
              /> */}
          </span>
        </div>
        {/*<div class='error'>{this.status}</div>*/}
      </div>
    );
  }
  private async login() {
    const toast = this.$createToast({
      txt: 'loading',
      time: 20000,
    });
    const timer = setTimeout(() => {
      toast.show();
    }, 800);
    const data = await this.$store.dispatch(
      USER_NAMESPACE + USER.LOGIN_ACTION,
      {
        email: this.username,
        password: this.password,
      },
    );
    clearTimeout(timer);
    if (data.status) {
      toast.hide();
    } else {
      toast.hide();
      this.$createToast({
        txt: data.msg,
        time: 2000,
        type: 'txt',
      }).show();
    }
  }
  get status() {
    return this.$store.state.user.loginStatus;
  }
  private doQRLogin(corp: string) {
    const params = new URLSearchParams();
    let corpid: string = '';
    let agentid: string = '';
    switch (corp) {
      case 'xd':
        corpid = 'wxe2be6e5c62e7b072';
        agentid = '1000033';
        break;
      case 'xdg':
        corpid = 'ww126a15b3a0d87c23';
        agentid = '1000007';
        break;
      case 'tap':
        corpid = 'wwc2b230af5a43715b';
        agentid = '1000034';
        break;
      // case '?':
      //   corpid = 'wxe2be6e5c62e7b072';
      //   break;

      default:
        break;
    }
    params.set('appid', corpid);
    params.set('agentid', agentid);
    params.set('state', 'wework_redirect_' + corp);
    params.set('redirect_uri', window.location.origin + '/');
    const url =
      'https://open.work.weixin.qq.com/wwopen/sso/qrConnect?' +
      params.toString();
    window.location.replace(url);
  }
}
