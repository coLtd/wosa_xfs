/// <reference path="event.d.ts"/>
/**
 * @description 事件处理类，支持添加、删除和分发事件
*/
var CXfsEventHandler = /** @class */ (function () {
    /**
     * @description 事件名称
     * @param {string} evtName 事件名称
    */
    function CXfsEventHandler(eventID) {
        this.eventID = eventID;
        this.listeners = [];
    }
    /**
     * @description 添加事件监听器
     * @param {function} listener 事件监听器
     * @param {boolean} once 是否只触发一次
    */
    CXfsEventHandler.prototype.addEventListener = function (listener) {
        this.listeners.push(listener);
    };
    /**
     * @description 删除事件监听器
     * @param {function} listener 事件监听
    */
    CXfsEventHandler.prototype.removeEventListener = function (listener) {
        for (var i = 0; i < this.listeners.length; i++) {
            if (this.listeners[i] === listener) {
                // Remove the listener from our queue
                this.listeners.splice(i, 1);
            }
        }
    };
    /**
     * @description 分发事件
     * @param {Object} context 事件分发上下文
     * @param {Object} error 错误信息
     * @param {Object|string|number} response 正常响应或事件
    */
    CXfsEventHandler.prototype.dispatchEvent = function (context, event) {
        // Notify all listeners about this event
        for (var i = 0; i < this.listeners.length; i++) {
            this.listeners[i].apply(context, [event]);
        }
    };
    return CXfsEventHandler;
}());
