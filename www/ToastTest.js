// Empty constructor
function ToastTest() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
ToastTest.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'ToastTest', 'show', [options]);
}

// Installation constructor that binds ToastTest to window
ToastTest.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.ToastTest = new ToastTest();
  return window.plugins.ToastTest;
};
cordova.addConstructor(ToastTest.install);