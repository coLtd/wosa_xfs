/// <reference path="event.d.ts"/>

/**
 * @description 事件处理类，支持添加、删除和分发事件
*/
class CXfsEventHandler {

    private listeners:any;

    private eventID:number;

    /**
     * @description 事件名称
     * @param {string} evtName 事件名称
    */
    constructor(eventID:number) {
        this.eventID = eventID;
        this.listeners = [];
    }

    /**
     * @description 添加事件监听器
     * @param {function} listener 事件监听器
     * @param {boolean} once 是否只触发一次
    */
    addEventListener(listener:(event:CEvent)=>void) {
        this.listeners.push(listener);
    }

    /**
     * @description 删除事件监听器
     * @param {function} listener 事件监听
    */
    removeEventListener(listener:(event:CEvent)=>void) {
        for( var i = 0; i < this.listeners.length; i++ ) {
            if( this.listeners[i] === listener ) {
                // Remove the listener from our queue
                this.listeners.splice(i, 1 );
            }
        }
    }

    /**
     * @description 分发事件
     * @param {Object} context 事件分发上下文
     * @param {Object} error 错误信息
     * @param {Object|string|number} response 正常响应或事件
    */
    dispatchEvent(context, event:CEvent) {
        // Notify all listeners about this event
        for( var i = 0; i < this.listeners.length; i++ ) {
            this.listeners[i].apply(context, [event]);
        }
    }
}