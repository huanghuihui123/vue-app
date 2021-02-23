/**
 * 发送消息给RN Webview
 * @param {*} params
 */
export const postMessage = params => {
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify(params));
  }
};

/**
 * 接收RN Webview 传过来的消息
 *
 */
export const receiveMessage = () => {
  // window.onload = function() {
  document.addEventListener("message", res => {
    console.log(JSON.parse(res.data));
    return res.data;
  });
  // };
};
