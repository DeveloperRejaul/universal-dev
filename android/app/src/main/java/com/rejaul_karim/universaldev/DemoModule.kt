package com.rejaul_karim.universaldev 

import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class DemoModule(reactContext: ReactApplicationContext?) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        //define method name
        return "demo"
    }

    // all of functionality in heare
    @ReactMethod
    fun play(callback: Callback) {
        val result = "Hello World"
        callback.invoke(result)
    }
}