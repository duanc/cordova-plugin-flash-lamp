/**
 * ping++, cordova, module
 * Author: Tong Chia
 * License: Apache License 2.0
 * */

module.exports = {
    /**
     * @param {object|string} charge (JSON string or object)
     * @param {Function} successCallback ['success']
     * @param {Function} errorCallback ['fail'|'cancel'|'invalid']
     */
    controlLighting: function (successCallback,errorCallback,isOpen) {

        console.log("进入方法 -- createPayment");
        cordova.exec(successCallback, errorCallback, "FlashLampPlugin", "createPayment",[isOpen]);

    }
};
