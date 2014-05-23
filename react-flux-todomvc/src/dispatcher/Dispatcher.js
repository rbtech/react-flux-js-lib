/**
 * Dispatcher
 *
 * The Dispatcher is capable of registering callbacks and invoking them.
 * More robust implementations than this would include a way to order the
 * callbacks for dependent Stores, and to guarantee that no two stores
 * created circular dependencies.
 */

// var Promise = require('es6-promise').Promise;
// var merge = require('react/lib/merge');

var _callbacks = [];
var _promises = [];

/**
 * Add a promise to the queue of callback invocation promises.
 * @param {function} callback The Store's registered callback.
 * @param {object} payload The data from the Action.
 */
var _addPromise = function(callback, payload) {
  _promises.push(new Promise(function(resolve, reject) {
    if (callback(payload)) {
      resolve(payload);
    } else {
      reject(new Error('Dispatcher callback unsuccessful'));
    }
  }));
};

/**
 * Empty the queue of callback invocation promises.
 */
var _clearPromises = function() {
  _promises = [];
};

var Dispatcher = function() {};
Dispatcher.prototype = React.addons.update(Dispatcher.prototype, {
  
  $merge: {

  /**
   * Register a Store's callback so that it may be invoked by an action.
   * @param {function} callback The callback to be registered.
   * @return {number} The index of the callback within the _callbacks array.
   */
  register: function(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1; // index
  },

  /**
   * dispatch
   * @param  {object} payload The data from the action.
   */
  dispatch: function(payload) {
    _callbacks.forEach(function(callback) {
      _addPromise(callback, payload);
    });
    Promise.all(_promises).then(_clearPromises);
  },

  /**
   * Allows a store to wait for the registered callbacks of other stores
   * to get invoked before its own does.
   * This function is not used by this TodoMVC example application, but
   * it is very useful in a larger, more complex application.
   *
   * Example usage where StoreB waits for StoreA:
   *
   *   var StoreA = merge(EventEmitter.prototype, {
   *     // other methods omitted
   *
   *     dispatchIndex: Dispatcher.register(function(payload) {
   *       // switch statement with lots of cases
   *     })
   *   }
   *
   *   var StoreB = merge(EventEmitter.prototype, {
   *     // other methods omitted
   *
   *     dispatchIndex: Dispatcher.register(function(payload) {
   *       switch(payload.action.actionType) {
   *
   *         case MyConstants.FOO_ACTION:
   *           Dispatcher.waitFor([StoreA.dispatchIndex], function() {
   *             // Do stuff only after StoreA's callback returns.
   *           });
   *       }
   *     })
   *   }
   *
   * It should be noted that if StoreB waits for StoreA, and StoreA waits for
   * StoreB, a circular dependency will occur, but no error will be thrown.
   * A more robust Dispatcher would issue a warning in this scenario.
   */
  waitFor: function(/*array*/ promiseIndexes, /*function*/ callback) {
    var selectedPromises = promiseIndexes.map(function(idx) {
      return _promises[idx];
    });
    Promise.all(selectedPromises).then(callback);
  }

}

});

