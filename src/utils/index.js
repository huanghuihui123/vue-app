/**
 * 发送消息给RN Webview
 * @param {*} params
 */
export const postMessage = params => {
  try {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify(params));
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * 接收RN Webview 传过来的消息
 *
 */
export const receiveMessage = () => {
  window.addEventListener("message", res => {
    console.log(res);
  });
};
