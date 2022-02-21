/*
 * @@功能描述: vue 装饰器练习
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-25 09:32:46
 * @@最新修改内容: 
 * @LastEditTime: 2022-01-25 09:45:12
 */
import { MessageBox,Message } from 'element-ui';

export function confirmation(message) {
    return function(target, name, descriptor) {
        let oldValue = descriptor.value;
        descriptor.value = function(...args) {
            MessageBox.confirm(message, '提示')
                .then(oldValue.bind(this, ...args))
                .catch(() => {});
        };

        return descriptor;
    }
}
export function confirm(title, content, confirmButtonText = '确定') {
    return function(target, name, descriptor) {
      const originValue = descriptor.value
      descriptor.value = function(...args) {
        MessageBox.confirm(content, title, {
          dangerouslyUseHTMLString: true,
          distinguishCancelAndClose: true,
          confirmButtonText: confirmButtonText
        }).then(originValue.bind(this, ...args)).catch(error => {
          if (error === 'close' || error === 'cancel') {
            Message.info('用户取消操作')
          } else {
            Message.info(error)
          }
        })
      }
      return descriptor
    }
}
  