/**
 * cn.cenxfs 远程调用代理模块，负责和websock的通信，并初始化远程对象
 * @module cn.cenxfs/pons
 */

/**
 * 定义pons模块
 * @constructor
 * @param {function(CenXfsApi)} succCallback 初始化成功回调函数
 */
var CxPons = function(succCallback) {
  var websocket = new WebSocket('ws://192.168.112.131:4856')

  websocket.onopen = function() {
    new QWebChannel(websocket, function(channel) {
      if (succCallback) succCallback(new CenXfsApi(channel))
    })
  }
}

/**
 * CEN/XFS API子集.
 * @constructor
 * @param {QWebChannel} channel - 已经初始化的QWebChannel对象
 */
var CenXfsApi = function(channel) {
  var self = this

  /**
   * 注册事件关联对象
   * @public
   * */

  this.registEventAssociatedObject = function(hService, object) {
    self.associatedObjects[hService] = object
  }

  /**
   * 注销事件关联对象
   * @public
   * */

  this.unregistEventAssociatedObject = function(hService) {
    delete self.associatedObjects[hService]
  }

  /**
   * 消息处理对象
   * @private
   * */

  this.associatedObjects = {}

  /**
   * 记录回调id
   * @private
   * */

  this.callbackId = Math.floor(Math.random() * 10000000)

  /**
   * 记录回调处理函数
   * @private
   * */

  this.callbacks = { asynchronous: {}, immediate: {} }

  /**
   * 事件处理函数
   * @private
   * */

  this.onEvent = function(message, event) {
    var associatedObj = self.associatedObjects[event.hService]
    if (associatedObj && typeof associatedObj.onEvent == 'function') {
      associatedObj.onEvent(message, event)
    }
  }

  // 清理回调函数
  function clearCallback(callbackId) {
    delete self.callbacks.asynchronous[callbackId]
    delete self.callbacks.immediate[callbackId]
  }

  // 封装远程方法
  function implemnetMethod(key) {
    return function() {
      self.callbackId = self.callbackId + 1
      var args = [self.callbackId]
      var asyncCallback, immediateCallback

      for (var i = 0; i < arguments.length; ++i) {
        var argument = arguments[i]
        if (typeof argument === 'function') {
          if (asyncCallback == null) asyncCallback = argument
          else if (immediateCallback == null) immediateCallback = argument
          else console.warn('too much callback for remote call.')
        } else {
          args.push(argument)
        }
      }

      // 立即回调处理，即第一次回调
      self.callbacks.immediate[self.callbackId] = function(args) {
        if (typeof immediateCallback == 'function') {
          immediateCallback(args)
        }
      }
      // 异步回调处理，即第二次回调，
      // WOSA/XFS中的immediate函数只会调用异步回调，而不是立即回调
      self.callbacks.asynchronous[self.callbackId] = function(args) {
        if (typeof asyncCallback == 'function') {
          if (!args.hasOwnProperty('hResult')) args.hResult = -51 //WFSERROR.WFS_ERR_VERSION_ERROR_IN_SRVC
          asyncCallback(args)
        }
      }

      // 执行远程方法
      channel.objects['CenXfsApi'][key].apply(
        channel.objects['CenXfsApi'],
        args
      )
    }
  }

  // 处理回调消息
  channel.objects['Pons'].executeCallback.connect(function(jsonstr) {
    var resp = JSON.parse(jsonstr)
    if (resp.type == 'asynchronous') {
      var callbackId = resp.callbackId
      var asyncCallback = self.callbacks.asynchronous[callbackId]
      if (typeof asyncCallback == 'function') {
        asyncCallback.call(asyncCallback, resp.args)
        clearCallback(callbackId)
      }
    } else if (resp.type == 'immediate') {
      var callbackId = resp.callbackId
      var immediateCallback = self.callbacks.immediate[callbackId]
      if (typeof immediateCallback == 'function') {
        immediateCallback.call(immediateCallback, resp.args)
        if (resp.args.hResult != 0) {
          clearCallback(callbackId)
        }
      }
    } else if (resp.type == 'subscriber') {
      if (typeof self.onEvent == 'function') {
        self.onEvent(resp.args.message, resp.args.event)
      }
    } else {
      console.error('undefined message type [' + resp.type + ']')
    }
  })

  // 给对象添加远程方法
  for (var key in channel.objects['CenXfsApi']) {
    if (/^WF\w+/.test(key)) {
      this[key] = implemnetMethod(key)
    }
  }
}
