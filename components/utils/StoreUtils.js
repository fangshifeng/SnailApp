/**
 * Created by fangshifeng on 2017/7/3.
 */
'user strict'

import { EventEmitter } from 'events'
import { each, isFunction } from 'underscore'

const CHANGE_EVENT = 'change'

export function createStore(spec) {
    const emitter = new EventEmitter()
    // 默认最多可加入10个监听事件，设置成Infinity或者0表示不限制个数
    emitter.setMaxListeners(0)

    // Merging objects
    const store = Object.assign({
        emitEvent(event) {
            emitter.emit(event)
        },

        addEventListener(event, callback) {
            emitter.on(event, callback)
        },

        removeEventListener(){
            emitter.removeListener(event, callback)
        },

        emitChange() {
            emitter.emit(CHANGE_EVENT)
        },

        addChangeListener(callback) {
            emitter.on(CHANGE_EVENT, callback)
        },

        removeChangeListener() {
            emitter.removeListener(CHANGE_EVENT, callback)
        }
    }, spec)

    each(store, (val, key) => {
        if(isFunction(val)) {
            store[key] = store[key].bind(store)
        }
    })

    return store
}