import { orderDishes } from '@/api/menu';
import Checkbox from '@/components/utils/Checkbox.tsx';
import { MENU_TIME_TYPE } from '@/store/menu';
import {
  IOrderSingleItem,
  MENU_TYPE,
  ORDER,
  ORDER_NAMESPACE,
} from '@/store/order';
import lodash from 'lodash';
import moment from 'moment';
import { VNode } from 'vue';

import { Component, Watch } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import './PcOrder.scss';
const TIME_STRING_TEMPLATE = 'MM月DD日';
declare interface IChooseItem {
  type: string;
  desc: string;
  checked: boolean;
  isBuffet: boolean;
  id: string;
}
declare interface IOrder {
  title: string;
  chooseList: IChooseItem[];
}
@Component({
  components: {
    Checkbox,
  },
})
export default class PcOrder extends tsx.Component<any> {
  protected list: IOrder[] = [];
  protected title: string = '';
  protected render(): VNode {
    return (
      <div class='pcorder'>
        <header class='pc-header'>
          <div class='pc-header-wrap'>
            <div class='pc-header-logo'></div>
            <div class='pc-header-right'>
              {/*<button>登陆选饭</button>*/}
              {/*<button>下载app</button>*/}
            </div>
          </div>
        </header>
        <div class='pc-order-wrap'>
          <h3 class='pc-order-wrap-title'>
            <span class='strong' style={{ marginRight: '25px' }}>
              {this.title}
            </span>
            <span class='light'>
              友情提示选饭包括 #午饭 和 晚饭#！感谢配合～
            </span>
          </h3>
          <div class='pc-order-content'>
            {this.list.map((item, index) => {
              return (
                <section class='pc-day-menu'>
                  <h3>{item.title}</h3>
                  {item.chooseList.map((_) => {
                    return (
                      <div class='pc-single-check'>
                        <div
                          style={{
                            marginRight: '30px',
                            display: 'inline-block',
                            paddingTop: '3px',
                          }}
                        >
                          <Checkbox
                            vModel={_.checked}
                            onChange={this.select.bind(this, item, _, index)}
                          />
                        </div>
                        <div
                          class='pc-single-check-wrap'
                          style={{ lineHeight: '24px' }}
                        >
                          <div class='pc-single-check-text'>
                            <div class='pc-single-check-text-title'>
                              {_.type}
                            </div>
                            <div class='pc-single-check-text-desc'>
                              {_.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </section>
              );
            })}
          </div>
        </div>
        <div class='pc-order-progress-bar progress'>
          <div class='progress-wrap'>
            <div class='progress-left'>
              <div class='progress-left-wrap'>
                <div
                  class='progress-left-inner'
                  style={{ width: this.progressLength }}
                />
              </div>
            </div>
            <div class='progress-right'>
              <button
                class='progress-right-btn btn-default random'
                onClick={this.random.bind(this)}
              >
                随机选饭
              </button>
              <button
                class='progress-right-btn btn-default all'
                onClick={this.allBuffet.bind(this)}
              >
                全部自助
              </button>
              <button
                class='progress-right-btn btn-primary'
                onClick={this.submit.bind(this)}
              >
                提交
              </button>
              <button class='progress-right-btn btn-primary calendar'>
                下载日历
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  private select(item: IOrder, choose: IChooseItem, index: number) {
    item.chooseList.forEach((chooseItem: IChooseItem) => {
      if (choose !== chooseItem) {
        chooseItem.checked = false;
      }
    });
    this.list.splice(index, 1, item);
  }
  private submit() {
    const idList: string[] = [];
    for (const item of this.list) {
      const choosed = item.chooseList.filter((_) => _.checked);
      if (choosed.length >= 1) {
        idList.push(choosed[0].id);
      } else {
        // window.console.log('error');
        this.$createToast({
          txt: '尚未完成选餐',
          time: 2000,
          type: 'txt',
        }).show();
        return;
      }
    }

    this.$createDialog({
      type: 'confirm',
      title: '下单',
      content: '请确认下单内容正确，下单后不可更改',
      icon: 'cubeic-alert',
      onConfirm: async () => {
        const res = await orderDishes(idList);
        if (res.code === 200) {
          this.$router.replace({
            name: 'index',
          });
        } else {
          const toast = this.$createToast({
            txt: res.msg,
            mask: true,
            timeout: 3000,
          });
          toast.show();
        }
      },
    }).show();
  }
  private allBuffet() {
    this.list.forEach((item) =>
      item.chooseList
        .filter((_) => _.isBuffet)
        .forEach((buffetItem) => (buffetItem.checked = true)),
    );
    this.$set(this, 'list', this.list);
  }
  private random() {
    this.list.forEach((item) => {
      const index = Math.floor(Math.random() * item.chooseList.length);
      item.chooseList.forEach((_, i) => {
        if (i === index) {
          _.checked = true;
        } else {
          _.checked = false;
        }
      });
    });
  }
  private mounted() {
    this.$store.dispatch(ORDER_NAMESPACE + ORDER.FETCH_ORDER_DISHES_ACTION);
  }
  @Watch('$store.state.order.list')
  private onStoreOrderChanged(newVal: IOrderSingleItem[]) {
    const listGroupByDateTime = lodash.groupBy(newVal, 'time');
    this.list = [];
    const TimeKeys = [];
    // tslint:disable-next-line:forin
    for (const key in listGroupByDateTime) {
      TimeKeys.push(moment(key).valueOf());
      const singleList = listGroupByDateTime[key];
      // 按照 上下午 分类
      lodash(singleList)
        .groupBy('type')
        .forEach((item, type) => {
          const time = type === MENU_TIME_TYPE.LUNCH ? '午饭' : '晚饭';
          this.list.push({
            title: moment(key).format(TIME_STRING_TEMPLATE) + time,
            chooseList: item.map((_: IOrderSingleItem) => ({
              type: _.menuType === MENU_TYPE.BUFFE ? '自助' : '简餐',
              desc: `${_.title}: ${_.desc}`,
              id: _.id,
              isBuffet: _.menuType === MENU_TYPE.BUFFE,
              checked: false,
            })),
          });
        });
    }
    const timeMax = lodash.max(TimeKeys);
    const timeMin = lodash.min(TimeKeys);
    this.title =
      moment(timeMin).format(TIME_STRING_TEMPLATE) +
      '-' +
      moment(timeMax).format(TIME_STRING_TEMPLATE) +
      '一周选饭';
  }
  // getter
  get progressLength() {
    const selectMenuLength = this.list.filter((item) =>
      item.chooseList.some((_) => _.checked),
    ).length;
    return (selectMenuLength / this.list.length) * 100 + '%';
  }
}