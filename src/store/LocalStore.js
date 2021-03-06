/**
 * AbstractStore的子类
 *
 * @author Julaud
 * @date   2015/4/17
 *
 * @name   LocalStore
 * @example
 * var store = new AbstractStore({
 *   key: 'USER'
 * })
 */
define(['common', 'AbstractStore', 'AbstractStorage'], function (c, AbstractStore, AbstractStorage) {
	"use strict";

	var
		LocalStore = c.baseClass(function (options) {
      c.extend(this.options, options, {
        proxy: new AbstractStorage({
          storage: window.localStorage
        })
      })
		}, AbstractStore);

	return LocalStore;
});