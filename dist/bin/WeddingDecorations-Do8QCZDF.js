import { i as __exportAll, n as __commonJSMin, o as __toCommonJS, r as __esmMin, s as __toESM } from "../server.bundle.mjs";
//#region node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, assign = Object.assign, emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	}, hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	}, Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.2.7";
}));
//#endregion
//#region node_modules/react/cjs/react.development.js
/**
* @license React
* react.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_development = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	"production" !== process.env.NODE_ENV && (function() {
		function defineDeprecationWarning(methodName, info) {
			Object.defineProperty(Component.prototype, methodName, { get: function() {
				console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
			} });
		}
		function getIteratorFn(maybeIterable) {
			if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
			maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
			return "function" === typeof maybeIterable ? maybeIterable : null;
		}
		function warnNoop(publicInstance, callerName) {
			publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
			var warningKey = publicInstance + "." + callerName;
			didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
		}
		function Component(props, context, updater) {
			this.props = props;
			this.context = context;
			this.refs = emptyObject;
			this.updater = updater || ReactNoopUpdateQueue;
		}
		function ComponentDummy() {}
		function PureComponent(props, context, updater) {
			this.props = props;
			this.context = context;
			this.refs = emptyObject;
			this.updater = updater || ReactNoopUpdateQueue;
		}
		function noop() {}
		function testStringCoercion(value) {
			return "" + value;
		}
		function checkKeyStringCoercion(value) {
			try {
				testStringCoercion(value);
				var JSCompiler_inline_result = !1;
			} catch (e) {
				JSCompiler_inline_result = !0;
			}
			if (JSCompiler_inline_result) {
				JSCompiler_inline_result = console;
				var JSCompiler_temp_const = JSCompiler_inline_result.error;
				var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
				JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
				return testStringCoercion(value);
			}
		}
		function getComponentNameFromType(type) {
			if (null == type) return null;
			if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
			if ("string" === typeof type) return type;
			switch (type) {
				case REACT_FRAGMENT_TYPE: return "Fragment";
				case REACT_PROFILER_TYPE: return "Profiler";
				case REACT_STRICT_MODE_TYPE: return "StrictMode";
				case REACT_SUSPENSE_TYPE: return "Suspense";
				case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
				case REACT_ACTIVITY_TYPE: return "Activity";
			}
			if ("object" === typeof type) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
				case REACT_PORTAL_TYPE: return "Portal";
				case REACT_CONTEXT_TYPE: return type.displayName || "Context";
				case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
				case REACT_FORWARD_REF_TYPE:
					var innerType = type.render;
					type = type.displayName;
					type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
					return type;
				case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
				case REACT_LAZY_TYPE:
					innerType = type._payload;
					type = type._init;
					try {
						return getComponentNameFromType(type(innerType));
					} catch (x) {}
			}
			return null;
		}
		function getTaskName(type) {
			if (type === REACT_FRAGMENT_TYPE) return "<>";
			if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
			try {
				var name = getComponentNameFromType(type);
				return name ? "<" + name + ">" : "<...>";
			} catch (x) {
				return "<...>";
			}
		}
		function getOwner() {
			var dispatcher = ReactSharedInternals.A;
			return null === dispatcher ? null : dispatcher.getOwner();
		}
		function UnknownOwner() {
			return Error("react-stack-top-frame");
		}
		function hasValidKey(config) {
			if (hasOwnProperty.call(config, "key")) {
				var getter = Object.getOwnPropertyDescriptor(config, "key").get;
				if (getter && getter.isReactWarning) return !1;
			}
			return void 0 !== config.key;
		}
		function defineKeyPropWarningGetter(props, displayName) {
			function warnAboutAccessingKey() {
				specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
			}
			warnAboutAccessingKey.isReactWarning = !0;
			Object.defineProperty(props, "key", {
				get: warnAboutAccessingKey,
				configurable: !0
			});
		}
		function elementRefGetterWithDeprecationWarning() {
			var componentName = getComponentNameFromType(this.type);
			didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
			componentName = this.props.ref;
			return void 0 !== componentName ? componentName : null;
		}
		function ReactElement(type, key, props, owner, debugStack, debugTask) {
			var refProp = props.ref;
			type = {
				$$typeof: REACT_ELEMENT_TYPE,
				type,
				key,
				props,
				_owner: owner
			};
			null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
				enumerable: !1,
				get: elementRefGetterWithDeprecationWarning
			}) : Object.defineProperty(type, "ref", {
				enumerable: !1,
				value: null
			});
			type._store = {};
			Object.defineProperty(type._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			});
			Object.defineProperty(type, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			});
			Object.defineProperty(type, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugStack
			});
			Object.defineProperty(type, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugTask
			});
			Object.freeze && (Object.freeze(type.props), Object.freeze(type));
			return type;
		}
		function cloneAndReplaceKey(oldElement, newKey) {
			newKey = ReactElement(oldElement.type, newKey, oldElement.props, oldElement._owner, oldElement._debugStack, oldElement._debugTask);
			oldElement._store && (newKey._store.validated = oldElement._store.validated);
			return newKey;
		}
		function validateChildKeys(node) {
			isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
		}
		function isValidElement(object) {
			return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function escape(key) {
			var escaperLookup = {
				"=": "=0",
				":": "=2"
			};
			return "$" + key.replace(/[=:]/g, function(match) {
				return escaperLookup[match];
			});
		}
		function getElementKey(element, index) {
			return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
		}
		function resolveThenable(thenable) {
			switch (thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
				default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
					"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
				}, function(error) {
					"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
				})), thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenable.reason;
				}
			}
			throw thenable;
		}
		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
			var type = typeof children;
			if ("undefined" === type || "boolean" === type) children = null;
			var invokeCallback = !1;
			if (null === children) invokeCallback = !0;
			else switch (type) {
				case "bigint":
				case "string":
				case "number":
					invokeCallback = !0;
					break;
				case "object": switch (children.$$typeof) {
					case REACT_ELEMENT_TYPE:
					case REACT_PORTAL_TYPE:
						invokeCallback = !0;
						break;
					case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
				}
			}
			if (invokeCallback) {
				invokeCallback = children;
				callback = callback(invokeCallback);
				var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
				isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
					return c;
				})) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
				return 1;
			}
			invokeCallback = 0;
			childKey = "" === nameSoFar ? "." : nameSoFar + ":";
			if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
			else if (i = getIteratorFn(children), "function" === typeof i) for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
			else if ("object" === type) {
				if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
				array = String(children);
				throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
			}
			return invokeCallback;
		}
		function mapChildren(children, func, context) {
			if (null == children) return children;
			var result = [], count = 0;
			mapIntoArray(children, result, "", "", function(child) {
				return func.call(context, child, count++);
			});
			return result;
		}
		function lazyInitializer(payload) {
			if (-1 === payload._status) {
				var ioInfo = payload._ioInfo;
				null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
				ioInfo = payload._result;
				var thenable = ioInfo();
				thenable.then(function(moduleObject) {
					if (0 === payload._status || -1 === payload._status) {
						payload._status = 1;
						payload._result = moduleObject;
						var _ioInfo = payload._ioInfo;
						null != _ioInfo && (_ioInfo.end = performance.now());
						void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
					}
				}, function(error) {
					if (0 === payload._status || -1 === payload._status) {
						payload._status = 2;
						payload._result = error;
						var _ioInfo2 = payload._ioInfo;
						null != _ioInfo2 && (_ioInfo2.end = performance.now());
						void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
					}
				});
				ioInfo = payload._ioInfo;
				if (null != ioInfo) {
					ioInfo.value = thenable;
					var displayName = thenable.displayName;
					"string" === typeof displayName && (ioInfo.name = displayName);
				}
				-1 === payload._status && (payload._status = 0, payload._result = thenable);
			}
			if (1 === payload._status) return ioInfo = payload._result, void 0 === ioInfo && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ioInfo), "default" in ioInfo || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ioInfo), ioInfo.default;
			throw payload._result;
		}
		function resolveDispatcher() {
			var dispatcher = ReactSharedInternals.H;
			null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
			return dispatcher;
		}
		function releaseAsyncTransition() {
			ReactSharedInternals.asyncTransitions--;
		}
		function enqueueTask(task) {
			if (null === enqueueTaskImpl) try {
				var requireString = ("require" + Math.random()).slice(0, 7);
				enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
			} catch (_err) {
				enqueueTaskImpl = function(callback) {
					!1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
					var channel = new MessageChannel();
					channel.port1.onmessage = callback;
					channel.port2.postMessage(void 0);
				};
			}
			return enqueueTaskImpl(task);
		}
		function aggregateErrors(errors) {
			return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
		}
		function popActScope(prevActQueue, prevActScopeDepth) {
			prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
			actScopeDepth = prevActScopeDepth;
		}
		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
			var queue = ReactSharedInternals.actQueue;
			if (null !== queue) if (0 !== queue.length) try {
				flushActQueue(queue);
				enqueueTask(function() {
					return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
				});
				return;
			} catch (error) {
				ReactSharedInternals.thrownErrors.push(error);
			}
			else ReactSharedInternals.actQueue = null;
			0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
		}
		function flushActQueue(queue) {
			if (!isFlushing) {
				isFlushing = !0;
				var i = 0;
				try {
					for (; i < queue.length; i++) {
						var callback = queue[i];
						do {
							ReactSharedInternals.didUsePromise = !1;
							var continuation = callback(!1);
							if (null !== continuation) {
								if (ReactSharedInternals.didUsePromise) {
									queue[i] = callback;
									queue.splice(0, i);
									return;
								}
								callback = continuation;
							} else break;
						} while (1);
					}
					queue.length = 0;
				} catch (error) {
					queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
				} finally {
					isFlushing = !1;
				}
			}
		}
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
			isMounted: function() {
				return !1;
			},
			enqueueForceUpdate: function(publicInstance) {
				warnNoop(publicInstance, "forceUpdate");
			},
			enqueueReplaceState: function(publicInstance) {
				warnNoop(publicInstance, "replaceState");
			},
			enqueueSetState: function(publicInstance) {
				warnNoop(publicInstance, "setState");
			}
		}, assign = Object.assign, emptyObject = {};
		Object.freeze(emptyObject);
		Component.prototype.isReactComponent = {};
		Component.prototype.setState = function(partialState, callback) {
			if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
			this.updater.enqueueSetState(this, partialState, callback, "setState");
		};
		Component.prototype.forceUpdate = function(callback) {
			this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
		};
		var deprecatedAPIs = {
			isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
			replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
		};
		for (fnName in deprecatedAPIs) deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		ComponentDummy.prototype = Component.prototype;
		deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
		deprecatedAPIs.constructor = PureComponent;
		assign(deprecatedAPIs, Component.prototype);
		deprecatedAPIs.isPureReactComponent = !0;
		var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
			H: null,
			A: null,
			T: null,
			S: null,
			actQueue: null,
			asyncTransitions: 0,
			isBatchingLegacy: !1,
			didScheduleLegacyUpdate: !1,
			didUsePromise: !1,
			thrownErrors: [],
			getCurrentStack: null,
			recentlyCreatedOwnerStacks: 0
		}, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
			return null;
		};
		deprecatedAPIs = { react_stack_bottom_frame: function(callStackForError) {
			return callStackForError();
		} };
		var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
		var didWarnAboutElementRef = {};
		var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(deprecatedAPIs, UnknownOwner)();
		var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
		var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
			if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
				var event = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
					error
				});
				if (!window.dispatchEvent(event)) return;
			} else if ("object" === typeof process && "function" === typeof process.emit) {
				process.emit("uncaughtException", error);
				return;
			}
			console.error(error);
		}, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
			queueMicrotask(function() {
				return queueMicrotask(callback);
			});
		} : enqueueTask;
		deprecatedAPIs = Object.freeze({
			__proto__: null,
			c: function(size) {
				return resolveDispatcher().useMemoCache(size);
			}
		});
		var fnName = {
			map: mapChildren,
			forEach: function(children, forEachFunc, forEachContext) {
				mapChildren(children, function() {
					forEachFunc.apply(this, arguments);
				}, forEachContext);
			},
			count: function(children) {
				var n = 0;
				mapChildren(children, function() {
					n++;
				});
				return n;
			},
			toArray: function(children) {
				return mapChildren(children, function(child) {
					return child;
				}) || [];
			},
			only: function(children) {
				if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
				return children;
			}
		};
		exports.Activity = REACT_ACTIVITY_TYPE;
		exports.Children = fnName;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
		exports.__COMPILER_RUNTIME = deprecatedAPIs;
		exports.act = function(callback) {
			var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
			actScopeDepth++;
			var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
			try {
				var result = callback();
			} catch (error) {
				ReactSharedInternals.thrownErrors.push(error);
			}
			if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
			if (null !== result && "object" === typeof result && "function" === typeof result.then) {
				var thenable = result;
				queueSeveralMicrotasks(function() {
					didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
				});
				return { then: function(resolve, reject) {
					didAwaitActCall = !0;
					thenable.then(function(returnValue) {
						popActScope(prevActQueue, prevActScopeDepth);
						if (0 === prevActScopeDepth) {
							try {
								flushActQueue(queue), enqueueTask(function() {
									return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
								});
							} catch (error$0) {
								ReactSharedInternals.thrownErrors.push(error$0);
							}
							if (0 < ReactSharedInternals.thrownErrors.length) {
								var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
								ReactSharedInternals.thrownErrors.length = 0;
								reject(_thrownError);
							}
						} else resolve(returnValue);
					}, function(error) {
						popActScope(prevActQueue, prevActScopeDepth);
						0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
					});
				} };
			}
			var returnValue$jscomp$0 = result;
			popActScope(prevActQueue, prevActScopeDepth);
			0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
				didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
			}), ReactSharedInternals.actQueue = null);
			if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
			return { then: function(resolve, reject) {
				didAwaitActCall = !0;
				0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
					return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
				})) : resolve(returnValue$jscomp$0);
			} };
		};
		exports.cache = function(fn) {
			return function() {
				return fn.apply(null, arguments);
			};
		};
		exports.cacheSignal = function() {
			return null;
		};
		exports.captureOwnerStack = function() {
			var getCurrentStack = ReactSharedInternals.getCurrentStack;
			return null === getCurrentStack ? null : getCurrentStack();
		};
		exports.cloneElement = function(element, config, children) {
			if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
			var props = assign({}, element.props), key = element.key, owner = element._owner;
			if (null != config) {
				var JSCompiler_inline_result;
				a: {
					if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
						JSCompiler_inline_result = !1;
						break a;
					}
					JSCompiler_inline_result = void 0 !== config.ref;
				}
				JSCompiler_inline_result && (owner = getOwner());
				hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
				for (propName in config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
			}
			var propName = arguments.length - 2;
			if (1 === propName) props.children = children;
			else if (1 < propName) {
				JSCompiler_inline_result = Array(propName);
				for (var i = 0; i < propName; i++) JSCompiler_inline_result[i] = arguments[i + 2];
				props.children = JSCompiler_inline_result;
			}
			props = ReactElement(element.type, key, props, owner, element._debugStack, element._debugTask);
			for (key = 2; key < arguments.length; key++) validateChildKeys(arguments[key]);
			return props;
		};
		exports.createContext = function(defaultValue) {
			defaultValue = {
				$$typeof: REACT_CONTEXT_TYPE,
				_currentValue: defaultValue,
				_currentValue2: defaultValue,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			};
			defaultValue.Provider = defaultValue;
			defaultValue.Consumer = {
				$$typeof: REACT_CONSUMER_TYPE,
				_context: defaultValue
			};
			defaultValue._currentRenderer = null;
			defaultValue._currentRenderer2 = null;
			return defaultValue;
		};
		exports.createElement = function(type, config, children) {
			for (var i = 2; i < arguments.length; i++) validateChildKeys(arguments[i]);
			i = {};
			var key = null;
			if (null != config) for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
			var childrenLength = arguments.length - 2;
			if (1 === childrenLength) i.children = children;
			else if (1 < childrenLength) {
				for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++) childArray[_i] = arguments[_i + 2];
				Object.freeze && Object.freeze(childArray);
				i.children = childArray;
			}
			if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === i[propName] && (i[propName] = childrenLength[propName]);
			key && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
			var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
			return ReactElement(type, key, i, getOwner(), propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
		exports.createRef = function() {
			var refObject = { current: null };
			Object.seal(refObject);
			return refObject;
		};
		exports.forwardRef = function(render) {
			null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
			null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
			var elementType = {
				$$typeof: REACT_FORWARD_REF_TYPE,
				render
			}, ownName;
			Object.defineProperty(elementType, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return ownName;
				},
				set: function(name) {
					ownName = name;
					render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
				}
			});
			return elementType;
		};
		exports.isValidElement = isValidElement;
		exports.lazy = function(ctor) {
			ctor = {
				_status: -1,
				_result: ctor
			};
			var lazyType = {
				$$typeof: REACT_LAZY_TYPE,
				_payload: ctor,
				_init: lazyInitializer
			}, ioInfo = {
				name: "lazy",
				start: -1,
				end: -1,
				value: null,
				owner: null,
				debugStack: Error("react-stack-top-frame"),
				debugTask: console.createTask ? console.createTask("lazy()") : null
			};
			ctor._ioInfo = ioInfo;
			lazyType._debugInfo = [{ awaited: ioInfo }];
			return lazyType;
		};
		exports.memo = function(type, compare) {
			type ?? console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
			compare = {
				$$typeof: REACT_MEMO_TYPE,
				type,
				compare: void 0 === compare ? null : compare
			};
			var ownName;
			Object.defineProperty(compare, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return ownName;
				},
				set: function(name) {
					ownName = name;
					type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
				}
			});
			return compare;
		};
		exports.startTransition = function(scope) {
			var prevTransition = ReactSharedInternals.T, currentTransition = {};
			currentTransition._updatedFibers = /* @__PURE__ */ new Set();
			ReactSharedInternals.T = currentTransition;
			try {
				var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
				null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
				"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
			} catch (error) {
				reportGlobalError(error);
			} finally {
				null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
			}
		};
		exports.unstable_useCacheRefresh = function() {
			return resolveDispatcher().useCacheRefresh();
		};
		exports.use = function(usable) {
			return resolveDispatcher().use(usable);
		};
		exports.useActionState = function(action, initialState, permalink) {
			return resolveDispatcher().useActionState(action, initialState, permalink);
		};
		exports.useCallback = function(callback, deps) {
			return resolveDispatcher().useCallback(callback, deps);
		};
		exports.useContext = function(Context) {
			var dispatcher = resolveDispatcher();
			Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
			return dispatcher.useContext(Context);
		};
		exports.useDebugValue = function(value, formatterFn) {
			return resolveDispatcher().useDebugValue(value, formatterFn);
		};
		exports.useDeferredValue = function(value, initialValue) {
			return resolveDispatcher().useDeferredValue(value, initialValue);
		};
		exports.useEffect = function(create, deps) {
			create ?? console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
			return resolveDispatcher().useEffect(create, deps);
		};
		exports.useEffectEvent = function(callback) {
			return resolveDispatcher().useEffectEvent(callback);
		};
		exports.useId = function() {
			return resolveDispatcher().useId();
		};
		exports.useImperativeHandle = function(ref, create, deps) {
			return resolveDispatcher().useImperativeHandle(ref, create, deps);
		};
		exports.useInsertionEffect = function(create, deps) {
			create ?? console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
			return resolveDispatcher().useInsertionEffect(create, deps);
		};
		exports.useLayoutEffect = function(create, deps) {
			create ?? console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
			return resolveDispatcher().useLayoutEffect(create, deps);
		};
		exports.useMemo = function(create, deps) {
			return resolveDispatcher().useMemo(create, deps);
		};
		exports.useOptimistic = function(passthrough, reducer) {
			return resolveDispatcher().useOptimistic(passthrough, reducer);
		};
		exports.useReducer = function(reducer, initialArg, init) {
			return resolveDispatcher().useReducer(reducer, initialArg, init);
		};
		exports.useRef = function(initialValue) {
			return resolveDispatcher().useRef(initialValue);
		};
		exports.useState = function(initialState) {
			return resolveDispatcher().useState(initialState);
		};
		exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
			return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		};
		exports.useTransition = function() {
			return resolveDispatcher().useTransition();
		};
		exports.version = "19.2.7";
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	if (process.env.NODE_ENV === "production") module.exports = require_react_production();
	else module.exports = require_react_development();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.production.js
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error(formatProdErrorMessage(522));
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	}, REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
		var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: REACT_PORTAL_TYPE,
			key: null == key ? null : "" + key,
			children,
			containerInfo,
			implementation
		};
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.createPortal = function(children, container) {
		var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error(formatProdErrorMessage(299));
		return createPortal$1(children, container, null, key);
	};
	exports.flushSync = function(fn) {
		var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
		try {
			if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
		} finally {
			ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
		}
	};
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.requestFormReset = function(form) {
		Internals.d.r(form);
	};
	exports.unstable_batchedUpdates = function(fn, a) {
		return fn(a);
	};
	exports.useFormState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	exports.useFormStatus = function() {
		return ReactSharedInternals.H.useHostTransitionStatus();
	};
	exports.version = "19.2.7";
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.development.js
/**
* @license React
* react-dom.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	"production" !== process.env.NODE_ENV && (function() {
		function noop() {}
		function testStringCoercion(value) {
			return "" + value;
		}
		function createPortal$1(children, containerInfo, implementation) {
			var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
			try {
				testStringCoercion(key);
				var JSCompiler_inline_result = !1;
			} catch (e) {
				JSCompiler_inline_result = !0;
			}
			JSCompiler_inline_result && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"), testStringCoercion(key));
			return {
				$$typeof: REACT_PORTAL_TYPE,
				key: null == key ? null : "" + key,
				children,
				containerInfo,
				implementation
			};
		}
		function getCrossOriginStringAs(as, input) {
			if ("font" === as) return "";
			if ("string" === typeof input) return "use-credentials" === input ? input : "";
		}
		function getValueDescriptorExpectingObjectForWarning(thing) {
			return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "something with type \"" + typeof thing + "\"";
		}
		function getValueDescriptorExpectingEnumForWarning(thing) {
			return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : "something with type \"" + typeof thing + "\"";
		}
		function resolveDispatcher() {
			var dispatcher = ReactSharedInternals.H;
			null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
			return dispatcher;
		}
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var React = require_react(), Internals = {
			d: {
				f: noop,
				r: function() {
					throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
				},
				D: noop,
				C: noop,
				L: noop,
				m: noop,
				X: noop,
				S: noop,
				M: noop
			},
			p: 0,
			findDOMNode: null
		}, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		"function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
		exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
		exports.createPortal = function(children, container) {
			var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
			if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error("Target container is not a DOM element.");
			return createPortal$1(children, container, null, key);
		};
		exports.flushSync = function(fn) {
			var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
			try {
				if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
			} finally {
				ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
			}
		};
		exports.preconnect = function(href, options) {
			"string" === typeof href && href ? null != options && "object" !== typeof options ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", getValueDescriptorExpectingEnumForWarning(options)) : null != options && "string" !== typeof options.crossOrigin && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", getValueDescriptorExpectingObjectForWarning(options.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
			"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
		};
		exports.prefetchDNS = function(href) {
			if ("string" !== typeof href || !href) console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
			else if (1 < arguments.length) {
				var options = arguments[1];
				"object" === typeof options && options.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options));
			}
			"string" === typeof href && Internals.d.D(href);
		};
		exports.preinit = function(href, options) {
			"string" === typeof href && href ? null == options || "object" !== typeof options ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", getValueDescriptorExpectingEnumForWarning(options)) : "style" !== options.as && "script" !== options.as && console.error("ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are \"style\" and \"script\".", getValueDescriptorExpectingEnumForWarning(options.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
			if ("string" === typeof href && options && "string" === typeof options.as) {
				var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
				"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
					crossOrigin,
					integrity,
					fetchPriority
				}) : "script" === as && Internals.d.X(href, {
					crossOrigin,
					integrity,
					fetchPriority,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		};
		exports.preinitModule = function(href, options) {
			var encountered = "";
			"string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
			void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "script" !== options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
			if (encountered) console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", encountered);
			else switch (encountered = options && "string" === typeof options.as ? options.as : "script", encountered) {
				case "script": break;
				default: encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error("ReactDOM.preinitModule(): Currently the only supported \"as\" type for this function is \"script\" but received \"%s\" instead. This warning was generated for `href` \"%s\". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)", encountered, href);
			}
			if ("string" === typeof href) if ("object" === typeof options && null !== options) {
				if (null == options.as || "script" === options.as) encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.M(href, {
					crossOrigin: encountered,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			} else options ?? Internals.d.M(href);
		};
		exports.preload = function(href, options) {
			var encountered = "";
			"string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
			null == options || "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : "string" === typeof options.as && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
			encountered && console.error("ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel=\"preload\" as=\"...\" />` tag.%s", encountered);
			if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
				encountered = options.as;
				var crossOrigin = getCrossOriginStringAs(encountered, options.crossOrigin);
				Internals.d.L(href, encountered, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0,
					type: "string" === typeof options.type ? options.type : void 0,
					fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
					referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
					imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
					imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
					media: "string" === typeof options.media ? options.media : void 0
				});
			}
		};
		exports.preloadModule = function(href, options) {
			var encountered = "";
			"string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
			void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "string" !== typeof options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
			encountered && console.error("ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel=\"modulepreload\" as=\"...\" />` tag.%s", encountered);
			"string" === typeof href && (options ? (encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin: encountered,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			})) : Internals.d.m(href));
		};
		exports.requestFormReset = function(form) {
			Internals.d.r(form);
		};
		exports.unstable_batchedUpdates = function(fn, a) {
			return fn(a);
		};
		exports.useFormState = function(action, initialState, permalink) {
			return resolveDispatcher().useFormState(action, initialState, permalink);
		};
		exports.useFormStatus = function() {
			return resolveDispatcher().useHostTransitionStatus();
		};
		exports.version = "19.2.7";
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
}));
//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		if (process.env.NODE_ENV !== "production") throw new Error("^_^");
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	if (process.env.NODE_ENV === "production") {
		checkDCE();
		module.exports = require_react_dom_production();
	} else module.exports = require_react_dom_development();
}));
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.development.js
/**
* @license React
* react-jsx-runtime.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	"production" !== process.env.NODE_ENV && (function() {
		function getComponentNameFromType(type) {
			if (null == type) return null;
			if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
			if ("string" === typeof type) return type;
			switch (type) {
				case REACT_FRAGMENT_TYPE: return "Fragment";
				case REACT_PROFILER_TYPE: return "Profiler";
				case REACT_STRICT_MODE_TYPE: return "StrictMode";
				case REACT_SUSPENSE_TYPE: return "Suspense";
				case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
				case REACT_ACTIVITY_TYPE: return "Activity";
			}
			if ("object" === typeof type) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
				case REACT_PORTAL_TYPE: return "Portal";
				case REACT_CONTEXT_TYPE: return type.displayName || "Context";
				case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
				case REACT_FORWARD_REF_TYPE:
					var innerType = type.render;
					type = type.displayName;
					type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
					return type;
				case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
				case REACT_LAZY_TYPE:
					innerType = type._payload;
					type = type._init;
					try {
						return getComponentNameFromType(type(innerType));
					} catch (x) {}
			}
			return null;
		}
		function testStringCoercion(value) {
			return "" + value;
		}
		function checkKeyStringCoercion(value) {
			try {
				testStringCoercion(value);
				var JSCompiler_inline_result = !1;
			} catch (e) {
				JSCompiler_inline_result = !0;
			}
			if (JSCompiler_inline_result) {
				JSCompiler_inline_result = console;
				var JSCompiler_temp_const = JSCompiler_inline_result.error;
				var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
				JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
				return testStringCoercion(value);
			}
		}
		function getTaskName(type) {
			if (type === REACT_FRAGMENT_TYPE) return "<>";
			if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
			try {
				var name = getComponentNameFromType(type);
				return name ? "<" + name + ">" : "<...>";
			} catch (x) {
				return "<...>";
			}
		}
		function getOwner() {
			var dispatcher = ReactSharedInternals.A;
			return null === dispatcher ? null : dispatcher.getOwner();
		}
		function UnknownOwner() {
			return Error("react-stack-top-frame");
		}
		function hasValidKey(config) {
			if (hasOwnProperty.call(config, "key")) {
				var getter = Object.getOwnPropertyDescriptor(config, "key").get;
				if (getter && getter.isReactWarning) return !1;
			}
			return void 0 !== config.key;
		}
		function defineKeyPropWarningGetter(props, displayName) {
			function warnAboutAccessingKey() {
				specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
			}
			warnAboutAccessingKey.isReactWarning = !0;
			Object.defineProperty(props, "key", {
				get: warnAboutAccessingKey,
				configurable: !0
			});
		}
		function elementRefGetterWithDeprecationWarning() {
			var componentName = getComponentNameFromType(this.type);
			didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
			componentName = this.props.ref;
			return void 0 !== componentName ? componentName : null;
		}
		function ReactElement(type, key, props, owner, debugStack, debugTask) {
			var refProp = props.ref;
			type = {
				$$typeof: REACT_ELEMENT_TYPE,
				type,
				key,
				props,
				_owner: owner
			};
			null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
				enumerable: !1,
				get: elementRefGetterWithDeprecationWarning
			}) : Object.defineProperty(type, "ref", {
				enumerable: !1,
				value: null
			});
			type._store = {};
			Object.defineProperty(type._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			});
			Object.defineProperty(type, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			});
			Object.defineProperty(type, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugStack
			});
			Object.defineProperty(type, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugTask
			});
			Object.freeze && (Object.freeze(type.props), Object.freeze(type));
			return type;
		}
		function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
			var children = config.children;
			if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
				for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++) validateChildKeys(children[isStaticChildren]);
				Object.freeze && Object.freeze(children);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else validateChildKeys(children);
			if (hasOwnProperty.call(config, "key")) {
				children = getComponentNameFromType(type);
				var keys = Object.keys(config).filter(function(k) {
					return "key" !== k;
				});
				isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
				didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
			}
			children = null;
			void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
			hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
			if ("key" in config) {
				maybeKey = {};
				for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
			} else maybeKey = config;
			children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
			return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
		}
		function validateChildKeys(node) {
			isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
		}
		function isValidElement(object) {
			return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		var React = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
			return null;
		};
		React = { react_stack_bottom_frame: function(callStackForError) {
			return callStackForError();
		} };
		var specialPropKeyWarningShown;
		var didWarnAboutElementRef = {};
		var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
		var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
		var didWarnAboutKeySpread = {};
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.jsx = function(type, config, maybeKey) {
			var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
			return jsxDEVImpl(type, config, maybeKey, !1, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
		exports.jsxs = function(type, config, maybeKey) {
			var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
			return jsxDEVImpl(type, config, maybeKey, !0, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
	})();
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	if (process.env.NODE_ENV === "production") module.exports = require_react_jsx_runtime_production();
	else module.exports = require_react_jsx_runtime_development();
}));
//#endregion
//#region node_modules/react-router/dist/development/chunk-6CSD65Y2.mjs
/**
* react-router v7.17.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function isLocation(obj) {
	return typeof obj === "object" && obj != null && "pathname" in obj && "search" in obj && "hash" in obj && "state" in obj && "key" in obj;
}
function createMemoryHistory(options = {}) {
	let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
	let entries;
	entries = initialEntries.map((entry, index2) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index2 === 0 ? "default" : void 0, typeof entry === "string" ? void 0 : entry.mask));
	let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
	let action = "POP";
	let listener = null;
	function clampIndex(n) {
		return Math.min(Math.max(n, 0), entries.length - 1);
	}
	function getCurrentLocation() {
		return entries[index];
	}
	function createMemoryLocation(to, state = null, key, mask) {
		let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key, mask);
		warning$1(location.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(to)}`);
		return location;
	}
	function createHref2(to) {
		return typeof to === "string" ? to : createPath(to);
	}
	return {
		get index() {
			return index;
		},
		get action() {
			return action;
		},
		get location() {
			return getCurrentLocation();
		},
		createHref: createHref2,
		createURL(to) {
			return new URL(createHref2(to), "http://localhost");
		},
		encodeLocation(to) {
			let path = typeof to === "string" ? parsePath(to) : to;
			return {
				pathname: path.pathname || "",
				search: path.search || "",
				hash: path.hash || ""
			};
		},
		push(to, state) {
			action = "PUSH";
			let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
			index += 1;
			entries.splice(index, entries.length, nextLocation);
			if (v5Compat && listener) listener({
				action,
				location: nextLocation,
				delta: 1
			});
		},
		replace(to, state) {
			action = "REPLACE";
			let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
			entries[index] = nextLocation;
			if (v5Compat && listener) listener({
				action,
				location: nextLocation,
				delta: 0
			});
		},
		go(delta) {
			action = "POP";
			let nextIndex = clampIndex(index + delta);
			let nextLocation = entries[nextIndex];
			index = nextIndex;
			if (listener) listener({
				action,
				location: nextLocation,
				delta
			});
		},
		listen(fn) {
			listener = fn;
			return () => {
				listener = null;
			};
		}
	};
}
function createBrowserHistory(options = {}) {
	function createBrowserLocation(window2, globalHistory) {
		let maskedLocation = globalHistory.state?.masked;
		let { pathname, search, hash } = maskedLocation || window2.location;
		return createLocation("", {
			pathname,
			search,
			hash
		}, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default", maskedLocation ? {
			pathname: window2.location.pathname,
			search: window2.location.search,
			hash: window2.location.hash
		} : void 0);
	}
	function createBrowserHref(window2, to) {
		return typeof to === "string" ? to : createPath(to);
	}
	return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function createHashHistory(options = {}) {
	function createHashLocation(window2, globalHistory) {
		let { pathname = "/", search = "", hash = "" } = parsePath(window2.location.hash.substring(1));
		if (!pathname.startsWith("/") && !pathname.startsWith(".")) pathname = "/" + pathname;
		return createLocation("", {
			pathname,
			search,
			hash
		}, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
	}
	function createHashHref(window2, to) {
		let base = window2.document.querySelector("base");
		let href = "";
		if (base && base.getAttribute("href")) {
			let url = window2.location.href;
			let hashIndex = url.indexOf("#");
			href = hashIndex === -1 ? url : url.slice(0, hashIndex);
		}
		return href + "#" + (typeof to === "string" ? to : createPath(to));
	}
	function validateHashLocation(location, to) {
		warning$1(location.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(to)})`);
	}
	return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant$2(value, message) {
	if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function warning$1(cond, message) {
	if (!cond) {
		if (typeof console !== "undefined") console.warn(message);
		try {
			throw new Error(message);
		} catch (e) {}
	}
}
function createKey$1() {
	return Math.random().toString(36).substring(2, 10);
}
function getHistoryState(location, index) {
	return {
		usr: location.state,
		key: location.key,
		idx: index,
		masked: location.mask ? {
			pathname: location.pathname,
			search: location.search,
			hash: location.hash
		} : void 0
	};
}
function createLocation(current, to, state = null, key, mask) {
	return {
		pathname: typeof current === "string" ? current : current.pathname,
		search: "",
		hash: "",
		...typeof to === "string" ? parsePath(to) : to,
		state,
		key: to && to.key || key || createKey$1(),
		mask
	};
}
function createPath({ pathname = "/", search = "", hash = "" }) {
	if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
	if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
	return pathname;
}
function parsePath(path) {
	let parsedPath = {};
	if (path) {
		let hashIndex = path.indexOf("#");
		if (hashIndex >= 0) {
			parsedPath.hash = path.substring(hashIndex);
			path = path.substring(0, hashIndex);
		}
		let searchIndex = path.indexOf("?");
		if (searchIndex >= 0) {
			parsedPath.search = path.substring(searchIndex);
			path = path.substring(0, searchIndex);
		}
		if (path) parsedPath.pathname = path;
	}
	return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
	let { window: window2 = document.defaultView, v5Compat = false } = options;
	let globalHistory = window2.history;
	let action = "POP";
	let listener = null;
	let index = getIndex();
	if (index == null) {
		index = 0;
		globalHistory.replaceState({
			...globalHistory.state,
			idx: index
		}, "");
	}
	function getIndex() {
		return (globalHistory.state || { idx: null }).idx;
	}
	function handlePop() {
		action = "POP";
		let nextIndex = getIndex();
		let delta = nextIndex == null ? null : nextIndex - index;
		index = nextIndex;
		if (listener) listener({
			action,
			location: history.location,
			delta
		});
	}
	function push(to, state) {
		action = "PUSH";
		let location = isLocation(to) ? to : createLocation(history.location, to, state);
		if (validateLocation) validateLocation(location, to);
		index = getIndex() + 1;
		let historyState = getHistoryState(location, index);
		let url = history.createHref(location.mask || location);
		try {
			globalHistory.pushState(historyState, "", url);
		} catch (error) {
			if (error instanceof DOMException && error.name === "DataCloneError") throw error;
			window2.location.assign(url);
		}
		if (v5Compat && listener) listener({
			action,
			location: history.location,
			delta: 1
		});
	}
	function replace2(to, state) {
		action = "REPLACE";
		let location = isLocation(to) ? to : createLocation(history.location, to, state);
		if (validateLocation) validateLocation(location, to);
		index = getIndex();
		let historyState = getHistoryState(location, index);
		let url = history.createHref(location.mask || location);
		globalHistory.replaceState(historyState, "", url);
		if (v5Compat && listener) listener({
			action,
			location: history.location,
			delta: 0
		});
	}
	function createURL(to) {
		return createBrowserURLImpl(window2, to);
	}
	let history = {
		get action() {
			return action;
		},
		get location() {
			return getLocation(window2, globalHistory);
		},
		listen(fn) {
			if (listener) throw new Error("A history only accepts one active listener");
			window2.addEventListener(PopStateEventType, handlePop);
			listener = fn;
			return () => {
				window2.removeEventListener(PopStateEventType, handlePop);
				listener = null;
			};
		},
		createHref(to) {
			return createHref2(window2, to);
		},
		createURL,
		encodeLocation(to) {
			let url = createURL(to);
			return {
				pathname: url.pathname,
				search: url.search,
				hash: url.hash
			};
		},
		push,
		replace: replace2,
		go(n) {
			return globalHistory.go(n);
		}
	};
	return history;
}
function createBrowserURLImpl(windowImpl, to, isAbsolute = false) {
	let base = "http://localhost";
	if (windowImpl) base = windowImpl.location.origin !== "null" ? windowImpl.location.origin : windowImpl.location.href;
	invariant$2(base, "No window.location.(origin|href) available to create URL");
	let href = typeof to === "string" ? to : createPath(to);
	href = href.replace(/ $/, "%20");
	if (!isAbsolute && href.startsWith("//")) href = base + href;
	return new URL(href, base);
}
function createContext$7(defaultValue) {
	return { defaultValue };
}
function isUnsupportedLazyRouteObjectKey(key) {
	return unsupportedLazyRouteObjectKeys.has(key);
}
function isUnsupportedLazyRouteFunctionKey(key) {
	return unsupportedLazyRouteFunctionKeys.has(key);
}
function isIndexRoute(route) {
	return route.index === true;
}
function convertRoutesToDataRoutes(routes, mapRouteProperties2, parentPath = [], manifest = {}, allowInPlaceMutations = false) {
	return routes.map((route, index) => {
		let treePath = [...parentPath, String(index)];
		let id = typeof route.id === "string" ? route.id : treePath.join("-");
		invariant$2(route.index !== true || !route.children, `Cannot specify children on an index route`);
		invariant$2(allowInPlaceMutations || !manifest[id], `Found a route id collision on id "${id}".  Route id's must be globally unique within Data Router usages`);
		if (isIndexRoute(route)) {
			let indexRoute = {
				...route,
				id
			};
			manifest[id] = mergeRouteUpdates(indexRoute, mapRouteProperties2(indexRoute));
			return indexRoute;
		} else {
			let pathOrLayoutRoute = {
				...route,
				id,
				children: void 0
			};
			manifest[id] = mergeRouteUpdates(pathOrLayoutRoute, mapRouteProperties2(pathOrLayoutRoute));
			if (route.children) pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties2, treePath, manifest, allowInPlaceMutations);
			return pathOrLayoutRoute;
		}
	});
}
function mergeRouteUpdates(route, updates) {
	return Object.assign(route, {
		...updates,
		...typeof updates.lazy === "object" && updates.lazy != null ? { lazy: {
			...route.lazy,
			...updates.lazy
		} } : {}
	});
}
function matchRoutes(routes, locationArg, basename = "/") {
	return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial, precomputedBranches) {
	let pathname = stripBasename((typeof locationArg === "string" ? parsePath(locationArg) : locationArg).pathname || "/", basename);
	if (pathname == null) return null;
	let branches = precomputedBranches ?? flattenAndRankRoutes(routes);
	let matches = null;
	let decoded = decodePath(pathname);
	for (let i = 0; matches == null && i < branches.length; ++i) matches = matchRouteBranch(branches[i], decoded, allowPartial);
	return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
	let { route, pathname, params } = match;
	return {
		id: route.id,
		pathname,
		params,
		data: loaderData[route.id],
		loaderData: loaderData[route.id],
		handle: route.handle
	};
}
function flattenAndRankRoutes(routes) {
	let branches = flattenRoutes(routes);
	rankRouteBranches(branches);
	return branches;
}
function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
	let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
		let meta = {
			relativePath: relativePath === void 0 ? route.path || "" : relativePath,
			caseSensitive: route.caseSensitive === true,
			childrenIndex: index,
			route
		};
		if (meta.relativePath.startsWith("/")) {
			if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) return;
			invariant$2(meta.relativePath.startsWith(parentPath), `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`);
			meta.relativePath = meta.relativePath.slice(parentPath.length);
		}
		let path = joinPaths([parentPath, meta.relativePath]);
		let routesMeta = parentsMeta.concat(meta);
		if (route.children && route.children.length > 0) {
			invariant$2(route.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${path}".`);
			flattenRoutes(route.children, branches, routesMeta, path, hasParentOptionalSegments);
		}
		if (route.path == null && !route.index) return;
		branches.push({
			path,
			score: computeScore(path, route.index),
			routesMeta
		});
	};
	routes.forEach((route, index) => {
		if (route.path === "" || !route.path?.includes("?")) flattenRoute(route, index);
		else for (let exploded of explodeOptionalSegments(route.path)) flattenRoute(route, index, true, exploded);
	});
	return branches;
}
function explodeOptionalSegments(path) {
	let segments = path.split("/");
	if (segments.length === 0) return [];
	let [first, ...rest] = segments;
	let isOptional = first.endsWith("?");
	let required = first.replace(/\?$/, "");
	if (rest.length === 0) return isOptional ? [required, ""] : [required];
	let restExploded = explodeOptionalSegments(rest.join("/"));
	let result = [];
	result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
	if (isOptional) result.push(...restExploded);
	return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
	branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
function computeScore(path, index) {
	let segments = path.split("/");
	let initialScore = segments.length;
	if (segments.some(isSplat)) initialScore += splatPenalty;
	if (index) initialScore += indexRouteValue;
	return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
	return a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]) ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
	let { routesMeta } = branch;
	let matchedParams = {};
	let matchedPathname = "/";
	let matches = [];
	for (let i = 0; i < routesMeta.length; ++i) {
		let meta = routesMeta[i];
		let end = i === routesMeta.length - 1;
		let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
		let match = matchPath({
			path: meta.relativePath,
			caseSensitive: meta.caseSensitive,
			end
		}, remainingPathname);
		let route = meta.route;
		if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) match = matchPath({
			path: meta.relativePath,
			caseSensitive: meta.caseSensitive,
			end: false
		}, remainingPathname);
		if (!match) return null;
		Object.assign(matchedParams, match.params);
		matches.push({
			params: matchedParams,
			pathname: joinPaths([matchedPathname, match.pathname]),
			pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
			route
		});
		if (match.pathnameBase !== "/") matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
	}
	return matches;
}
function generatePath(originalPath, params = {}) {
	let path = originalPath;
	if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
		warning$1(false, `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`);
		path = path.replace(/\*$/, "/*");
	}
	const prefix = path.startsWith("/") ? "/" : "";
	const stringify2 = (p) => p == null ? "" : typeof p === "string" ? p : String(p);
	return prefix + path.split(/\/+/).map((segment, index, array) => {
		if (index === array.length - 1 && segment === "*") return stringify2(params["*"]);
		const keyMatch = segment.match(/^:([\w-]+)(\??)(.*)/);
		if (keyMatch) {
			const [, key, optional, suffix] = keyMatch;
			let param = params[key];
			invariant$2(optional === "?" || param != null, `Missing ":${key}" param`);
			return encodeURIComponent(stringify2(param)) + suffix;
		}
		return segment.replace(/\?$/g, "");
	}).filter((segment) => !!segment).join("/");
}
function matchPath(pattern, pathname) {
	if (typeof pattern === "string") pattern = {
		path: pattern,
		caseSensitive: false,
		end: true
	};
	let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
	let match = pathname.match(matcher);
	if (!match) return null;
	let matchedPathname = match[0];
	let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
	let captureGroups = match.slice(1);
	return {
		params: compiledParams.reduce((memo2, { paramName, isOptional }, index) => {
			if (paramName === "*") {
				let splatValue = captureGroups[index] || "";
				pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
			}
			const value = captureGroups[index];
			if (isOptional && !value) memo2[paramName] = void 0;
			else memo2[paramName] = (value || "").replace(/%2F/g, "/");
			return memo2;
		}, {}),
		pathname: matchedPathname,
		pathnameBase,
		pattern
	};
}
function compilePath(path, caseSensitive = false, end = true) {
	warning$1(path === "*" || !path.endsWith("*") || path.endsWith("/*"), `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`);
	let params = [];
	let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (match, paramName, isOptional, index, str) => {
		params.push({
			paramName,
			isOptional: isOptional != null
		});
		if (isOptional) {
			let nextChar = str.charAt(index + match.length);
			if (nextChar && nextChar !== "/") return "/([^\\/]*)";
			return "(?:/([^\\/]*))?";
		}
		return "/([^\\/]+)";
	}).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	if (path.endsWith("*")) {
		params.push({ paramName: "*" });
		regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
	} else if (end) regexpSource += "\\/*$";
	else if (path !== "" && path !== "/") regexpSource += "(?:(?=\\/|$))";
	return [new RegExp(regexpSource, caseSensitive ? void 0 : "i"), params];
}
function decodePath(value) {
	try {
		return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
	} catch (error) {
		warning$1(false, `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`);
		return value;
	}
}
function stripBasename(pathname, basename) {
	if (basename === "/") return pathname;
	if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
	let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
	let nextChar = pathname.charAt(startIndex);
	if (nextChar && nextChar !== "/") return null;
	return pathname.slice(startIndex) || "/";
}
function prependBasename({ basename, pathname }) {
	return pathname === "/" ? basename : joinPaths([basename, pathname]);
}
function resolvePath(to, fromPathname = "/") {
	let { pathname: toPathname, search = "", hash = "" } = typeof to === "string" ? parsePath(to) : to;
	let pathname;
	if (toPathname) {
		toPathname = removeDoubleSlashes(toPathname);
		if (toPathname.startsWith("/")) pathname = resolvePathname(toPathname.substring(1), "/");
		else pathname = resolvePathname(toPathname, fromPathname);
	} else pathname = fromPathname;
	return {
		pathname,
		search: normalizeSearch(search),
		hash: normalizeHash(hash)
	};
}
function resolvePathname(relativePath, fromPathname) {
	let segments = removeTrailingSlash(fromPathname).split("/");
	relativePath.split("/").forEach((segment) => {
		if (segment === "..") {
			if (segments.length > 1) segments.pop();
		} else if (segment !== ".") segments.push(segment);
	});
	return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
	return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(path)}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
	return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches) {
	let pathMatches = getPathContributingMatches(matches);
	return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
	let to;
	if (typeof toArg === "string") to = parsePath(toArg);
	else {
		to = { ...toArg };
		invariant$2(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
		invariant$2(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
		invariant$2(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
	}
	let isEmptyPath = toArg === "" || to.pathname === "";
	let toPathname = isEmptyPath ? "/" : to.pathname;
	let from;
	if (toPathname == null) from = locationPathname;
	else {
		let routePathnameIndex = routePathnames.length - 1;
		if (!isPathRelative && toPathname.startsWith("..")) {
			let toSegments = toPathname.split("/");
			while (toSegments[0] === "..") {
				toSegments.shift();
				routePathnameIndex -= 1;
			}
			to.pathname = toSegments.join("/");
		}
		from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
	}
	let path = resolvePath(to, from);
	let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
	let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
	if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
	return path;
}
function data(data2, init) {
	return new DataWithResponseInit(data2, typeof init === "number" ? { status: init } : init);
}
function isRouteErrorResponse(error) {
	return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
function getRoutePattern(matches) {
	return joinPaths(matches.map((m) => m.route.path).filter(Boolean)) || "/";
}
function parseToInfo(_to, basename) {
	let to = _to;
	if (typeof to !== "string" || !ABSOLUTE_URL_REGEX.test(to)) return {
		absoluteURL: void 0,
		isExternal: false,
		to
	};
	let absoluteURL = to;
	let isExternal = false;
	if (isBrowser$2) try {
		let currentUrl = new URL(window.location.href);
		let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
		let path = stripBasename(targetUrl.pathname, basename);
		if (targetUrl.origin === currentUrl.origin && path != null) to = path + targetUrl.search + targetUrl.hash;
		else isExternal = true;
	} catch (e) {
		warning$1(false, `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL,
		isExternal,
		to
	};
}
function getRouteInstrumentationUpdates(fns, route) {
	let aggregated = {
		lazy: [],
		"lazy.loader": [],
		"lazy.action": [],
		"lazy.middleware": [],
		middleware: [],
		loader: [],
		action: []
	};
	fns.forEach((fn) => fn({
		id: route.id,
		index: route.index,
		path: route.path,
		instrument(i) {
			let keys = Object.keys(aggregated);
			for (let key of keys) if (i[key]) aggregated[key].push(i[key]);
		}
	}));
	let updates = {};
	if (typeof route.lazy === "function" && aggregated.lazy.length > 0) {
		let instrumented = wrapImpl(aggregated.lazy, route.lazy, () => void 0);
		if (instrumented) updates.lazy = instrumented;
	}
	if (typeof route.lazy === "object") {
		let lazyObject = route.lazy;
		[
			"middleware",
			"loader",
			"action"
		].forEach((key) => {
			let lazyFn = lazyObject[key];
			let instrumentations = aggregated[`lazy.${key}`];
			if (typeof lazyFn === "function" && instrumentations.length > 0) {
				let instrumented = wrapImpl(instrumentations, lazyFn, () => void 0);
				if (instrumented) updates.lazy = Object.assign(updates.lazy || {}, { [key]: instrumented });
			}
		});
	}
	["loader", "action"].forEach((key) => {
		let handler = route[key];
		if (typeof handler === "function" && aggregated[key].length > 0) {
			let original = handler[UninstrumentedSymbol] ?? handler;
			let instrumented = wrapImpl(aggregated[key], original, (...args) => getHandlerInfo(args[0]));
			if (instrumented) {
				if (key === "loader" && original.hydrate === true) instrumented.hydrate = true;
				instrumented[UninstrumentedSymbol] = original;
				updates[key] = instrumented;
			}
		}
	});
	if (route.middleware && route.middleware.length > 0 && aggregated.middleware.length > 0) updates.middleware = route.middleware.map((middleware) => {
		let original = middleware[UninstrumentedSymbol] ?? middleware;
		let instrumented = wrapImpl(aggregated.middleware, original, (...args) => getHandlerInfo(args[0]));
		if (instrumented) {
			instrumented[UninstrumentedSymbol] = original;
			return instrumented;
		}
		return middleware;
	});
	return updates;
}
function instrumentClientSideRouter(router, fns) {
	let aggregated = {
		navigate: [],
		fetch: []
	};
	fns.forEach((fn) => fn({ instrument(i) {
		let keys = Object.keys(i);
		for (let key of keys) if (i[key]) aggregated[key].push(i[key]);
	} }));
	if (aggregated.navigate.length > 0) {
		let navigate = router.navigate[UninstrumentedSymbol] ?? router.navigate;
		let instrumentedNavigate = wrapImpl(aggregated.navigate, navigate, (...args) => {
			let [to, opts] = args;
			return {
				to: typeof to === "number" || typeof to === "string" ? to : to ? createPath(to) : ".",
				...getRouterInfo(router, opts ?? {})
			};
		});
		if (instrumentedNavigate) {
			instrumentedNavigate[UninstrumentedSymbol] = navigate;
			router.navigate = instrumentedNavigate;
		}
	}
	if (aggregated.fetch.length > 0) {
		let fetch2 = router.fetch[UninstrumentedSymbol] ?? router.fetch;
		let instrumentedFetch = wrapImpl(aggregated.fetch, fetch2, (...args) => {
			let [key, , href, opts] = args;
			return {
				href: href ?? ".",
				fetcherKey: key,
				...getRouterInfo(router, opts ?? {})
			};
		});
		if (instrumentedFetch) {
			instrumentedFetch[UninstrumentedSymbol] = fetch2;
			router.fetch = instrumentedFetch;
		}
	}
	return router;
}
function instrumentHandler(handler, fns) {
	let aggregated = { request: [] };
	fns.forEach((fn) => fn({ instrument(i) {
		let keys = Object.keys(i);
		for (let key of keys) if (i[key]) aggregated[key].push(i[key]);
	} }));
	let instrumentedHandler = handler;
	if (aggregated.request.length > 0) instrumentedHandler = wrapImpl(aggregated.request, handler, (...args) => {
		let [request, context] = args;
		return {
			request: getReadonlyRequest(request),
			context: context != null ? getReadonlyContext(context) : context
		};
	});
	return instrumentedHandler;
}
function wrapImpl(impls, handler, getInfo) {
	if (impls.length === 0) return null;
	return async (...args) => {
		let result = await recurseRight(impls, getInfo(...args), () => handler(...args), impls.length - 1);
		if (result.type === "error") throw result.value;
		return result.value;
	};
}
async function recurseRight(impls, info, handler, index) {
	let impl = impls[index];
	let result;
	if (!impl) try {
		result = {
			type: "success",
			value: await handler()
		};
	} catch (e) {
		result = {
			type: "error",
			value: e
		};
	}
	else {
		let handlerPromise = void 0;
		let callHandler = async () => {
			if (handlerPromise) console.error("You cannot call instrumented handlers more than once");
			else handlerPromise = recurseRight(impls, info, handler, index - 1);
			result = await handlerPromise;
			invariant$2(result, "Expected a result");
			if (result.type === "error" && result.value instanceof Error) return {
				status: "error",
				error: result.value
			};
			return {
				status: "success",
				error: void 0
			};
		};
		try {
			await impl(callHandler, info);
		} catch (e) {
			console.error("An instrumentation function threw an error:", e);
		}
		if (!handlerPromise) await callHandler();
		await handlerPromise;
	}
	if (result) return result;
	return {
		type: "error",
		value: /* @__PURE__ */ new Error("No result assigned in instrumentation chain.")
	};
}
function getHandlerInfo(args) {
	let { request, context, params, pattern } = args;
	return {
		request: getReadonlyRequest(request),
		params: { ...params },
		pattern,
		context: getReadonlyContext(context)
	};
}
function getRouterInfo(router, opts) {
	return {
		currentUrl: createPath(router.state.location),
		..."formMethod" in opts ? { formMethod: opts.formMethod } : {},
		..."formEncType" in opts ? { formEncType: opts.formEncType } : {},
		..."formData" in opts ? { formData: opts.formData } : {},
		..."body" in opts ? { body: opts.body } : {}
	};
}
function getReadonlyRequest(request) {
	return {
		method: request.method,
		url: request.url,
		headers: { get: (...args) => request.headers.get(...args) }
	};
}
function getReadonlyContext(context) {
	if (isPlainObject(context)) {
		let frozen = { ...context };
		Object.freeze(frozen);
		return frozen;
	} else return { get: (ctx) => context.get(ctx) };
}
function isPlainObject(thing) {
	if (thing === null || typeof thing !== "object") return false;
	const proto = Object.getPrototypeOf(thing);
	return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === objectProtoNames;
}
function createRouter(init) {
	const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
	const isBrowser3 = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
	invariant$2(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	let hydrationRouteProperties2 = init.hydrationRouteProperties || [];
	let _mapRouteProperties = init.mapRouteProperties || defaultMapRouteProperties;
	let mapRouteProperties2 = _mapRouteProperties;
	if (init.instrumentations) {
		let instrumentations = init.instrumentations;
		mapRouteProperties2 = (route) => {
			return {
				..._mapRouteProperties(route),
				...getRouteInstrumentationUpdates(instrumentations.map((i) => i.route).filter(Boolean), route)
			};
		};
	}
	let manifest = {};
	let dataRoutes = new DataRoutes(convertRoutesToDataRoutes(init.routes, mapRouteProperties2, void 0, manifest));
	let basename = init.basename || "/";
	if (!basename.startsWith("/")) basename = `/${basename}`;
	let dataStrategyImpl = init.dataStrategy || defaultDataStrategyWithMiddleware;
	let future = { ...init.future };
	let unlistenHistory = null;
	let subscribers = /* @__PURE__ */ new Set();
	let bufferedInitialStateUpdate = null;
	let savedScrollPositions2 = null;
	let getScrollRestorationKey2 = null;
	let getScrollPosition = null;
	let initialScrollRestored = init.hydrationData != null;
	let initialMatches = matchRoutesImpl(dataRoutes.activeRoutes, init.history.location, basename, false, dataRoutes.branches);
	let initialMatchesIsFOW = false;
	let initialErrors = null;
	let initialized;
	let renderFallback;
	if (initialMatches == null && !init.patchRoutesOnNavigation) {
		let error = getInternalRouterError(404, { pathname: init.history.location.pathname });
		let { matches, route } = getShortCircuitMatches(dataRoutes.activeRoutes);
		initialized = true;
		renderFallback = !initialized;
		initialMatches = matches;
		initialErrors = { [route.id]: error };
	} else {
		if (initialMatches && !init.hydrationData) {
			if (checkFogOfWar(initialMatches, dataRoutes.activeRoutes, init.history.location.pathname).active) initialMatches = null;
		}
		if (!initialMatches) {
			initialized = false;
			renderFallback = !initialized;
			initialMatches = [];
			let fogOfWar = checkFogOfWar(null, dataRoutes.activeRoutes, init.history.location.pathname);
			if (fogOfWar.active && fogOfWar.matches) {
				initialMatchesIsFOW = true;
				initialMatches = fogOfWar.matches;
			}
		} else if (initialMatches.some((m) => m.route.lazy)) {
			initialized = false;
			renderFallback = !initialized;
		} else if (!initialMatches.some((m) => routeHasLoaderOrMiddleware(m.route))) {
			initialized = true;
			renderFallback = !initialized;
		} else {
			let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
			let errors = init.hydrationData ? init.hydrationData.errors : null;
			let relevantMatches = initialMatches;
			if (errors) {
				let idx = initialMatches.findIndex((m) => errors[m.route.id] !== void 0);
				relevantMatches = relevantMatches.slice(0, idx + 1);
			}
			renderFallback = false;
			initialized = true;
			relevantMatches.forEach((m) => {
				let status = getRouteHydrationStatus(m.route, loaderData, errors);
				renderFallback = renderFallback || status.renderFallback;
				initialized = initialized && !status.shouldLoad;
			});
		}
	}
	let router;
	let state = {
		historyAction: init.history.action,
		location: init.history.location,
		matches: initialMatches,
		initialized,
		renderFallback,
		navigation: IDLE_NAVIGATION,
		restoreScrollPosition: init.hydrationData != null ? false : null,
		preventScrollReset: false,
		revalidation: "idle",
		loaderData: init.hydrationData && init.hydrationData.loaderData || {},
		actionData: init.hydrationData && init.hydrationData.actionData || null,
		errors: init.hydrationData && init.hydrationData.errors || initialErrors,
		fetchers: /* @__PURE__ */ new Map(),
		blockers: /* @__PURE__ */ new Map()
	};
	let pendingAction = "POP";
	let pendingPopstateNavigationDfd = null;
	let pendingPreventScrollReset = false;
	let pendingNavigationController;
	let pendingViewTransitionEnabled = false;
	let appliedViewTransitions = /* @__PURE__ */ new Map();
	let removePageHideEventListener = null;
	let isUninterruptedRevalidation = false;
	let isRevalidationRequired = false;
	let cancelledFetcherLoads = /* @__PURE__ */ new Set();
	let fetchControllers = /* @__PURE__ */ new Map();
	let incrementingLoadId = 0;
	let pendingNavigationLoadId = -1;
	let fetchReloadIds = /* @__PURE__ */ new Map();
	let fetchRedirectIds = /* @__PURE__ */ new Set();
	let fetchLoadMatches = /* @__PURE__ */ new Map();
	let activeFetchers = /* @__PURE__ */ new Map();
	let fetchersQueuedForDeletion = /* @__PURE__ */ new Set();
	let blockerFunctions = /* @__PURE__ */ new Map();
	let unblockBlockerHistoryUpdate = void 0;
	let pendingRevalidationDfd = null;
	function initialize() {
		unlistenHistory = init.history.listen(({ action: historyAction, location, delta }) => {
			if (unblockBlockerHistoryUpdate) {
				unblockBlockerHistoryUpdate();
				unblockBlockerHistoryUpdate = void 0;
				return;
			}
			warning$1(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
			let blockerKey = shouldBlockNavigation({
				currentLocation: state.location,
				nextLocation: location,
				historyAction
			});
			if (blockerKey && delta != null) {
				let nextHistoryUpdatePromise = new Promise((resolve) => {
					unblockBlockerHistoryUpdate = resolve;
				});
				init.history.go(delta * -1);
				updateBlocker(blockerKey, {
					state: "blocked",
					location,
					proceed() {
						updateBlocker(blockerKey, {
							state: "proceeding",
							proceed: void 0,
							reset: void 0,
							location
						});
						nextHistoryUpdatePromise.then(() => init.history.go(delta));
					},
					reset() {
						let blockers = new Map(state.blockers);
						blockers.set(blockerKey, IDLE_BLOCKER);
						updateState({ blockers });
					}
				});
				pendingPopstateNavigationDfd?.resolve();
				pendingPopstateNavigationDfd = null;
				return;
			}
			return startNavigation(historyAction, location);
		});
		if (isBrowser3) {
			restoreAppliedTransitions(routerWindow, appliedViewTransitions);
			let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
			routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
			removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
		}
		if (!state.initialized) startNavigation("POP", state.location, { initialHydration: true });
		return router;
	}
	function dispose() {
		if (unlistenHistory) unlistenHistory();
		if (removePageHideEventListener) removePageHideEventListener();
		subscribers.clear();
		pendingNavigationController && pendingNavigationController.abort();
		state.fetchers.forEach((_, key) => deleteFetcher(state.fetchers, key));
		state.blockers.forEach((_, key) => deleteBlocker(key));
	}
	function subscribe(fn) {
		subscribers.add(fn);
		if (bufferedInitialStateUpdate) {
			let { newErrors } = bufferedInitialStateUpdate;
			bufferedInitialStateUpdate = null;
			fn(state, {
				deletedFetchers: [],
				newErrors,
				viewTransitionOpts: void 0,
				flushSync: false
			});
		}
		return () => subscribers.delete(fn);
	}
	function updateState(newState, opts = {}) {
		if (newState.matches) newState.matches = newState.matches.map((m) => {
			let route = manifest[m.route.id];
			let matchRoute = m.route;
			if (matchRoute.element !== route.element || matchRoute.errorElement !== route.errorElement || matchRoute.hydrateFallbackElement !== route.hydrateFallbackElement) return {
				...m,
				route
			};
			return m;
		});
		state = {
			...state,
			...newState
		};
		let unmountedFetchers = [];
		let mountedFetchers = [];
		state.fetchers.forEach((fetcher, key) => {
			if (fetcher.state === "idle") if (fetchersQueuedForDeletion.has(key)) unmountedFetchers.push(key);
			else mountedFetchers.push(key);
		});
		fetchersQueuedForDeletion.forEach((key) => {
			if (!state.fetchers.has(key) && !fetchControllers.has(key)) unmountedFetchers.push(key);
		});
		if (subscribers.size === 0) bufferedInitialStateUpdate = { newErrors: newState.errors ?? null };
		[...subscribers].forEach((subscriber) => subscriber(state, {
			deletedFetchers: unmountedFetchers,
			newErrors: newState.errors ?? null,
			viewTransitionOpts: opts.viewTransitionOpts,
			flushSync: opts.flushSync === true
		}));
		unmountedFetchers.forEach((key) => deleteFetcher(state.fetchers, key));
		mountedFetchers.forEach((key) => state.fetchers.delete(key));
	}
	function completeNavigation(location, newState, { flushSync } = {}) {
		let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && location.state?._isRedirect !== true;
		let actionData;
		if (newState.actionData) if (Object.keys(newState.actionData).length > 0) actionData = newState.actionData;
		else actionData = null;
		else if (isActionReload) actionData = state.actionData;
		else actionData = null;
		let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
		let blockers = state.blockers;
		if (blockers.size > 0) {
			blockers = new Map(blockers);
			blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
		}
		let restoreScrollPosition = isUninterruptedRevalidation ? false : getSavedScrollPosition(location, newState.matches || state.matches);
		let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && location.state?._isRedirect !== true;
		dataRoutes.commitHmrRoutes();
		if (isUninterruptedRevalidation) {} else if (pendingAction === "POP") {} else if (pendingAction === "PUSH") init.history.push(location, location.state);
		else if (pendingAction === "REPLACE") init.history.replace(location, location.state);
		let viewTransitionOpts;
		if (pendingAction === "POP") {
			let priorPaths = appliedViewTransitions.get(state.location.pathname);
			if (priorPaths && priorPaths.has(location.pathname)) viewTransitionOpts = {
				currentLocation: state.location,
				nextLocation: location
			};
			else if (appliedViewTransitions.has(location.pathname)) viewTransitionOpts = {
				currentLocation: location,
				nextLocation: state.location
			};
		} else if (pendingViewTransitionEnabled) {
			let toPaths = appliedViewTransitions.get(state.location.pathname);
			if (toPaths) toPaths.add(location.pathname);
			else {
				toPaths = /* @__PURE__ */ new Set([location.pathname]);
				appliedViewTransitions.set(state.location.pathname, toPaths);
			}
			viewTransitionOpts = {
				currentLocation: state.location,
				nextLocation: location
			};
		}
		updateState({
			...newState,
			actionData,
			loaderData,
			historyAction: pendingAction,
			location,
			initialized: true,
			renderFallback: false,
			navigation: IDLE_NAVIGATION,
			revalidation: "idle",
			restoreScrollPosition,
			preventScrollReset,
			blockers
		}, {
			viewTransitionOpts,
			flushSync: flushSync === true
		});
		pendingAction = "POP";
		pendingPreventScrollReset = false;
		pendingViewTransitionEnabled = false;
		isUninterruptedRevalidation = false;
		isRevalidationRequired = false;
		pendingPopstateNavigationDfd?.resolve();
		pendingPopstateNavigationDfd = null;
		pendingRevalidationDfd?.resolve();
		pendingRevalidationDfd = null;
	}
	async function navigate(to, opts) {
		pendingPopstateNavigationDfd?.resolve();
		pendingPopstateNavigationDfd = null;
		if (typeof to === "number") {
			if (!pendingPopstateNavigationDfd) pendingPopstateNavigationDfd = createDeferred();
			let promise = pendingPopstateNavigationDfd.promise;
			init.history.go(to);
			return promise;
		}
		let { path, submission, error } = normalizeNavigateOptions(false, normalizeTo(state.location, state.matches, basename, to, opts?.fromRouteId, opts?.relative), opts);
		let maskPath;
		if (opts?.mask) maskPath = {
			pathname: "",
			search: "",
			hash: "",
			...typeof opts.mask === "string" ? parsePath(opts.mask) : {
				...state.location.mask,
				...opts.mask
			}
		};
		let currentLocation = state.location;
		let nextLocation = createLocation(currentLocation, path, opts && opts.state, void 0, maskPath);
		nextLocation = {
			...nextLocation,
			...init.history.encodeLocation(nextLocation)
		};
		let userReplace = opts && opts.replace != null ? opts.replace : void 0;
		let historyAction = "PUSH";
		if (userReplace === true) historyAction = "REPLACE";
		else if (userReplace === false) {} else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) historyAction = "REPLACE";
		let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
		let flushSync = (opts && opts.flushSync) === true;
		let blockerKey = shouldBlockNavigation({
			currentLocation,
			nextLocation,
			historyAction
		});
		if (blockerKey) {
			updateBlocker(blockerKey, {
				state: "blocked",
				location: nextLocation,
				proceed() {
					updateBlocker(blockerKey, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: nextLocation
					});
					navigate(to, opts);
				},
				reset() {
					let blockers = new Map(state.blockers);
					blockers.set(blockerKey, IDLE_BLOCKER);
					updateState({ blockers });
				}
			});
			return;
		}
		await startNavigation(historyAction, nextLocation, {
			submission,
			pendingError: error,
			preventScrollReset,
			replace: opts && opts.replace,
			enableViewTransition: opts && opts.viewTransition,
			flushSync,
			callSiteDefaultShouldRevalidate: opts && opts.defaultShouldRevalidate
		});
	}
	function revalidate() {
		if (!pendingRevalidationDfd) pendingRevalidationDfd = createDeferred();
		interruptActiveLoads();
		updateState({ revalidation: "loading" });
		let promise = pendingRevalidationDfd.promise;
		if (state.navigation.state === "submitting") return promise;
		if (state.navigation.state === "idle") {
			startNavigation(state.historyAction, state.location, { startUninterruptedRevalidation: true });
			return promise;
		}
		startNavigation(pendingAction || state.historyAction, state.navigation.location, {
			overrideNavigation: state.navigation,
			enableViewTransition: pendingViewTransitionEnabled === true
		});
		return promise;
	}
	async function startNavigation(historyAction, location, opts) {
		pendingNavigationController && pendingNavigationController.abort();
		pendingNavigationController = null;
		pendingAction = historyAction;
		isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
		saveScrollPosition(state.location, state.matches);
		pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
		pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
		let routesToUse = dataRoutes.activeRoutes;
		let matches = opts?.initialHydration && state.matches && state.matches.length > 0 && !initialMatchesIsFOW ? state.matches : matchRoutesImpl(routesToUse, location, basename, false, dataRoutes.branches);
		let flushSync = (opts && opts.flushSync) === true;
		if (matches && state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
			completeNavigation(location, { matches }, { flushSync });
			return;
		}
		let fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
		if (fogOfWar.active && fogOfWar.matches) matches = fogOfWar.matches;
		if (!matches) {
			let { error, notFoundMatches, route } = handleNavigational404(location.pathname);
			completeNavigation(location, {
				matches: notFoundMatches,
				loaderData: {},
				errors: { [route.id]: error }
			}, { flushSync });
			return;
		}
		let loadingNavigation = opts && opts.overrideNavigation ? {
			...opts.overrideNavigation,
			matches,
			historyAction
		} : void 0;
		pendingNavigationController = new AbortController();
		let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
		let scopedContext = init.getContext ? await init.getContext() : new RouterContextProvider();
		let pendingActionResult;
		if (opts && opts.pendingError) pendingActionResult = [findNearestBoundary(matches).route.id, {
			type: "error",
			error: opts.pendingError
		}];
		else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
			let actionResult = await handleAction(request, location, opts.submission, matches, historyAction, scopedContext, fogOfWar.active, opts && opts.initialHydration === true, {
				replace: opts.replace,
				flushSync
			});
			if (actionResult.shortCircuited) return;
			if (actionResult.pendingActionResult) {
				let [routeId, result] = actionResult.pendingActionResult;
				if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
					pendingNavigationController = null;
					completeNavigation(location, {
						matches: actionResult.matches,
						loaderData: {},
						errors: { [routeId]: result.error }
					});
					return;
				}
			}
			matches = actionResult.matches || matches;
			pendingActionResult = actionResult.pendingActionResult;
			loadingNavigation = getLoadingNavigation(location, matches, historyAction, opts.submission);
			flushSync = false;
			fogOfWar.active = false;
			request = createClientSideRequest(init.history, request.url, request.signal);
		}
		let { shortCircuited, matches: updatedMatches, loaderData, errors, workingFetchers } = await handleLoaders(request, location, matches, historyAction, scopedContext, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult, opts && opts.callSiteDefaultShouldRevalidate);
		if (shortCircuited) return;
		pendingNavigationController = null;
		completeNavigation(location, {
			matches: updatedMatches || matches,
			...getActionDataForCommit(pendingActionResult),
			loaderData,
			errors,
			...workingFetchers ? { fetchers: workingFetchers } : {}
		});
	}
	async function handleAction(request, location, submission, matches, historyAction, scopedContext, isFogOfWar, initialHydration, opts = {}) {
		interruptActiveLoads();
		updateState({ navigation: getSubmittingNavigation(location, matches, historyAction, submission) }, { flushSync: opts.flushSync === true });
		if (isFogOfWar) {
			let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
			if (discoverResult.type === "aborted") return { shortCircuited: true };
			else if (discoverResult.type === "error") {
				if (discoverResult.partialMatches.length === 0) {
					let { matches: matches2, route } = getShortCircuitMatches(dataRoutes.activeRoutes);
					return {
						matches: matches2,
						pendingActionResult: [route.id, {
							type: "error",
							error: discoverResult.error
						}]
					};
				}
				let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
				return {
					matches: discoverResult.partialMatches,
					pendingActionResult: [boundaryId, {
						type: "error",
						error: discoverResult.error
					}]
				};
			} else if (!discoverResult.matches) {
				let { notFoundMatches, error, route } = handleNavigational404(location.pathname);
				return {
					matches: notFoundMatches,
					pendingActionResult: [route.id, {
						type: "error",
						error
					}]
				};
			} else matches = discoverResult.matches;
		}
		let result;
		let actionMatch = getTargetMatch(matches, location);
		if (!actionMatch.route.action && !actionMatch.route.lazy) result = {
			type: "error",
			error: getInternalRouterError(405, {
				method: request.method,
				pathname: location.pathname,
				routeId: actionMatch.route.id
			})
		};
		else {
			let results = await callDataStrategy(request, location, getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, location, matches, actionMatch, initialHydration ? [] : hydrationRouteProperties2, scopedContext), scopedContext, null);
			result = results[actionMatch.route.id];
			if (!result) {
				for (let match of matches) if (results[match.route.id]) {
					result = results[match.route.id];
					break;
				}
			}
			if (request.signal.aborted) return { shortCircuited: true };
		}
		if (isRedirectResult(result)) {
			let replace2;
			if (opts && opts.replace != null) replace2 = opts.replace;
			else replace2 = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename, init.history) === state.location.pathname + state.location.search;
			await startRedirectNavigation(request, result, true, {
				submission,
				replace: replace2
			});
			return { shortCircuited: true };
		}
		if (isErrorResult(result)) {
			let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
			if ((opts && opts.replace) !== true) pendingAction = "PUSH";
			return {
				matches,
				pendingActionResult: [
					boundaryMatch.route.id,
					result,
					actionMatch.route.id
				]
			};
		}
		return {
			matches,
			pendingActionResult: [actionMatch.route.id, result]
		};
	}
	async function handleLoaders(request, location, matches, historyAction, scopedContext, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace2, initialHydration, flushSync, pendingActionResult, callSiteDefaultShouldRevalidate) {
		let loadingNavigation = overrideNavigation || getLoadingNavigation(location, matches, historyAction, submission);
		let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
		let shouldUpdateNavigationState = !isUninterruptedRevalidation && !initialHydration;
		if (isFogOfWar) {
			if (shouldUpdateNavigationState) {
				let actionData = getUpdatedActionData(pendingActionResult);
				updateState({
					navigation: loadingNavigation,
					...actionData !== void 0 ? { actionData } : {}
				}, { flushSync });
			}
			let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
			if (discoverResult.type === "aborted") return { shortCircuited: true };
			else if (discoverResult.type === "error") {
				if (discoverResult.partialMatches.length === 0) {
					let { matches: matches2, route } = getShortCircuitMatches(dataRoutes.activeRoutes);
					return {
						matches: matches2,
						loaderData: {},
						errors: { [route.id]: discoverResult.error }
					};
				}
				let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
				return {
					matches: discoverResult.partialMatches,
					loaderData: {},
					errors: { [boundaryId]: discoverResult.error }
				};
			} else if (!discoverResult.matches) {
				let { error, notFoundMatches, route } = handleNavigational404(location.pathname);
				return {
					matches: notFoundMatches,
					loaderData: {},
					errors: { [route.id]: error }
				};
			} else matches = discoverResult.matches;
		}
		let routesToUse = dataRoutes.activeRoutes;
		let { dsMatches, revalidatingFetchers } = getMatchesToLoad(request, scopedContext, mapRouteProperties2, manifest, init.history, state, matches, activeSubmission, location, initialHydration ? [] : hydrationRouteProperties2, initialHydration === true, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, init.patchRoutesOnNavigation != null, dataRoutes.branches, pendingActionResult, callSiteDefaultShouldRevalidate);
		pendingNavigationLoadId = ++incrementingLoadId;
		if (!init.dataStrategy && !dsMatches.some((m) => m.shouldLoad) && !dsMatches.some((m) => m.route.middleware && m.route.middleware.length > 0) && revalidatingFetchers.length === 0) {
			let workingFetchers2 = new Map(state.fetchers);
			let didUpdateFetcherRedirects2 = markFetchRedirectsDone(workingFetchers2);
			completeNavigation(location, {
				matches,
				loaderData: {},
				errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? { [pendingActionResult[0]]: pendingActionResult[1].error } : null,
				...getActionDataForCommit(pendingActionResult),
				...didUpdateFetcherRedirects2 ? { fetchers: workingFetchers2 } : {}
			}, { flushSync });
			return { shortCircuited: true };
		}
		if (shouldUpdateNavigationState) {
			let updates = {};
			if (!isFogOfWar) {
				updates.navigation = loadingNavigation;
				let actionData = getUpdatedActionData(pendingActionResult);
				if (actionData !== void 0) updates.actionData = actionData;
			}
			if (revalidatingFetchers.length > 0) updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
			updateState(updates, { flushSync });
		}
		revalidatingFetchers.forEach((rf) => {
			abortFetcher(rf.key);
			if (rf.controller) fetchControllers.set(rf.key, rf.controller);
		});
		let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
		if (pendingNavigationController) pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
		let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, request, location, scopedContext);
		if (request.signal.aborted) return { shortCircuited: true };
		if (pendingNavigationController) pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
		revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
		let redirect2 = findRedirect(loaderResults);
		if (redirect2) {
			await startRedirectNavigation(request, redirect2.result, true, { replace: replace2 });
			return { shortCircuited: true };
		}
		redirect2 = findRedirect(fetcherResults);
		if (redirect2) {
			fetchRedirectIds.add(redirect2.key);
			await startRedirectNavigation(request, redirect2.result, true, { replace: replace2 });
			return { shortCircuited: true };
		}
		let workingFetchers = new Map(state.fetchers);
		let { loaderData, errors } = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, workingFetchers);
		if (initialHydration && state.errors) errors = {
			...state.errors,
			...errors
		};
		let didUpdateFetcherRedirects = markFetchRedirectsDone(workingFetchers);
		let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId, workingFetchers);
		let shouldUpdateFetchers = didUpdateFetcherRedirects || didAbortFetchLoads || revalidatingFetchers.length > 0;
		return {
			matches,
			loaderData,
			errors,
			...shouldUpdateFetchers ? { workingFetchers } : {}
		};
	}
	function getUpdatedActionData(pendingActionResult) {
		if (pendingActionResult && !isErrorResult(pendingActionResult[1])) return { [pendingActionResult[0]]: pendingActionResult[1].data };
		else if (state.actionData) if (Object.keys(state.actionData).length === 0) return null;
		else return state.actionData;
	}
	function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
		let workingFetchers = new Map(state.fetchers);
		revalidatingFetchers.forEach((rf) => {
			let fetcher = workingFetchers.get(rf.key);
			let revalidatingFetcher = getLoadingFetcher(void 0, fetcher ? fetcher.data : void 0);
			workingFetchers.set(rf.key, revalidatingFetcher);
		});
		return workingFetchers;
	}
	async function fetch2(key, routeId, href, opts) {
		abortFetcher(key);
		let flushSync = (opts && opts.flushSync) === true;
		let routesToUse = dataRoutes.activeRoutes;
		let normalizedPath = normalizeTo(state.location, state.matches, basename, href, routeId, opts?.relative);
		let matches = matchRoutesImpl(routesToUse, normalizedPath, basename, false, dataRoutes.branches);
		let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
		if (fogOfWar.active && fogOfWar.matches) matches = fogOfWar.matches;
		if (!matches) {
			setFetcherError(key, routeId, getInternalRouterError(404, { pathname: normalizedPath }), { flushSync });
			return;
		}
		let { path, submission, error } = normalizeNavigateOptions(true, normalizedPath, opts);
		if (error) {
			setFetcherError(key, routeId, error, { flushSync });
			return;
		}
		let scopedContext = init.getContext ? await init.getContext() : new RouterContextProvider();
		let preventScrollReset = (opts && opts.preventScrollReset) === true;
		if (submission && isMutationMethod(submission.formMethod)) {
			await handleFetcherAction(key, routeId, path, matches, scopedContext, fogOfWar.active, flushSync, preventScrollReset, submission, opts && opts.defaultShouldRevalidate);
			return;
		}
		fetchLoadMatches.set(key, {
			routeId,
			path
		});
		await handleFetcherLoader(key, routeId, path, matches, scopedContext, fogOfWar.active, flushSync, preventScrollReset, submission);
	}
	async function handleFetcherAction(key, routeId, path, requestMatches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission, callSiteDefaultShouldRevalidate) {
		interruptActiveLoads();
		fetchLoadMatches.delete(key);
		updateFetcherState(key, getSubmittingFetcher(submission, state.fetchers.get(key)), { flushSync });
		let abortController = new AbortController();
		let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
		if (isFogOfWar) {
			let discoverResult = await discoverRoutes(requestMatches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
			if (discoverResult.type === "aborted") return;
			else if (discoverResult.type === "error") {
				setFetcherError(key, routeId, discoverResult.error, { flushSync });
				return;
			} else if (!discoverResult.matches) {
				setFetcherError(key, routeId, getInternalRouterError(404, { pathname: path }), { flushSync });
				return;
			} else requestMatches = discoverResult.matches;
		}
		let match = getTargetMatch(requestMatches, path);
		if (!match.route.action && !match.route.lazy) {
			setFetcherError(key, routeId, getInternalRouterError(405, {
				method: submission.formMethod,
				pathname: path,
				routeId
			}), { flushSync });
			return;
		}
		fetchControllers.set(key, abortController);
		let originatingLoadId = incrementingLoadId;
		let fetchMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, path, requestMatches, match, hydrationRouteProperties2, scopedContext);
		let actionResults = await callDataStrategy(fetchRequest, path, fetchMatches, scopedContext, key);
		let actionResult = actionResults[match.route.id];
		if (!actionResult) {
			for (let match2 of fetchMatches) if (actionResults[match2.route.id]) {
				actionResult = actionResults[match2.route.id];
				break;
			}
		}
		if (fetchRequest.signal.aborted) {
			if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
			return;
		}
		if (fetchersQueuedForDeletion.has(key)) {
			if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
				updateFetcherState(key, getDoneFetcher(void 0));
				return;
			}
		} else {
			if (isRedirectResult(actionResult)) {
				fetchControllers.delete(key);
				if (pendingNavigationLoadId > originatingLoadId) {
					updateFetcherState(key, getDoneFetcher(void 0));
					return;
				} else {
					fetchRedirectIds.add(key);
					updateFetcherState(key, getLoadingFetcher(submission));
					return startRedirectNavigation(fetchRequest, actionResult, false, {
						fetcherSubmission: submission,
						preventScrollReset
					});
				}
			}
			if (isErrorResult(actionResult)) {
				setFetcherError(key, routeId, actionResult.error);
				return;
			}
		}
		let nextLocation = state.navigation.location || state.location;
		let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
		let routesToUse = dataRoutes.activeRoutes;
		let matches = state.navigation.state !== "idle" ? matchRoutesImpl(routesToUse, state.navigation.location, basename, false, dataRoutes.branches) : state.matches;
		invariant$2(matches, "Didn't find any matches after fetcher action");
		let loadId = ++incrementingLoadId;
		fetchReloadIds.set(key, loadId);
		let { dsMatches, revalidatingFetchers } = getMatchesToLoad(revalidationRequest, scopedContext, mapRouteProperties2, manifest, init.history, state, matches, submission, nextLocation, hydrationRouteProperties2, false, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, init.patchRoutesOnNavigation != null, dataRoutes.branches, [match.route.id, actionResult], callSiteDefaultShouldRevalidate);
		let loadFetcher = getLoadingFetcher(submission, actionResult.data);
		let workingFetchers = new Map(state.fetchers);
		workingFetchers.set(key, loadFetcher);
		revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
			let staleKey = rf.key;
			let existingFetcher2 = workingFetchers.get(staleKey);
			let revalidatingFetcher = getLoadingFetcher(void 0, existingFetcher2 ? existingFetcher2.data : void 0);
			workingFetchers.set(staleKey, revalidatingFetcher);
			abortFetcher(staleKey);
			if (rf.controller) fetchControllers.set(staleKey, rf.controller);
		});
		updateState({ fetchers: workingFetchers });
		let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
		abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
		let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, revalidationRequest, nextLocation, scopedContext);
		if (abortController.signal.aborted) return;
		abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
		fetchReloadIds.delete(key);
		fetchControllers.delete(key);
		revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
		let fetcherIsMounted = state.fetchers.has(key);
		let getRedirectStateWithDoneFetcher = (s) => {
			if (!fetcherIsMounted) return s;
			let workingFetchers2 = new Map(s.fetchers);
			workingFetchers2.set(key, getDoneFetcher(actionResult.data));
			return {
				...s,
				fetchers: workingFetchers2
			};
		};
		let redirect2 = findRedirect(loaderResults);
		if (redirect2) {
			state = getRedirectStateWithDoneFetcher(state);
			return startRedirectNavigation(revalidationRequest, redirect2.result, false, { preventScrollReset });
		}
		redirect2 = findRedirect(fetcherResults);
		if (redirect2) {
			fetchRedirectIds.add(redirect2.key);
			state = getRedirectStateWithDoneFetcher(state);
			return startRedirectNavigation(revalidationRequest, redirect2.result, false, { preventScrollReset });
		}
		let finalFetchers = new Map(state.fetchers);
		if (fetcherIsMounted) finalFetchers.set(key, getDoneFetcher(actionResult.data));
		let { loaderData, errors } = processLoaderData(state, matches, loaderResults, void 0, revalidatingFetchers, fetcherResults, finalFetchers);
		abortStaleFetchLoads(loadId, finalFetchers);
		if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
			invariant$2(pendingAction, "Expected pending action");
			pendingNavigationController && pendingNavigationController.abort();
			completeNavigation(state.navigation.location, {
				matches,
				loaderData,
				errors,
				fetchers: finalFetchers
			});
		} else {
			updateState({
				errors,
				loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
				fetchers: finalFetchers
			});
			isRevalidationRequired = false;
		}
	}
	async function handleFetcherLoader(key, routeId, path, matches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission) {
		let existingFetcher = state.fetchers.get(key);
		updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : void 0), { flushSync });
		let abortController = new AbortController();
		let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
		if (isFogOfWar) {
			let discoverResult = await discoverRoutes(matches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
			if (discoverResult.type === "aborted") return;
			else if (discoverResult.type === "error") {
				setFetcherError(key, routeId, discoverResult.error, { flushSync });
				return;
			} else if (!discoverResult.matches) {
				setFetcherError(key, routeId, getInternalRouterError(404, { pathname: path }), { flushSync });
				return;
			} else matches = discoverResult.matches;
		}
		let match = getTargetMatch(matches, path);
		fetchControllers.set(key, abortController);
		let originatingLoadId = incrementingLoadId;
		let results = await callDataStrategy(fetchRequest, path, getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, path, matches, match, hydrationRouteProperties2, scopedContext), scopedContext, key);
		let result = results[match.route.id];
		if (!result) {
			for (let match2 of matches) if (results[match2.route.id]) {
				result = results[match2.route.id];
				break;
			}
		}
		if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
		if (fetchRequest.signal.aborted) return;
		if (fetchersQueuedForDeletion.has(key)) {
			updateFetcherState(key, getDoneFetcher(void 0));
			return;
		}
		if (isRedirectResult(result)) if (pendingNavigationLoadId > originatingLoadId) {
			updateFetcherState(key, getDoneFetcher(void 0));
			return;
		} else {
			fetchRedirectIds.add(key);
			await startRedirectNavigation(fetchRequest, result, false, { preventScrollReset });
			return;
		}
		if (isErrorResult(result)) {
			setFetcherError(key, routeId, result.error);
			return;
		}
		updateFetcherState(key, getDoneFetcher(result.data));
	}
	async function startRedirectNavigation(request, redirect2, isNavigation, { submission, fetcherSubmission, preventScrollReset, replace: replace2 } = {}) {
		if (!isNavigation) {
			pendingPopstateNavigationDfd?.resolve();
			pendingPopstateNavigationDfd = null;
		}
		if (redirect2.response.headers.has("X-Remix-Revalidate")) isRevalidationRequired = true;
		let location = redirect2.response.headers.get("Location");
		invariant$2(location, "Expected a Location header on the redirect Response");
		location = normalizeRedirectLocation(location, new URL(request.url), basename, init.history);
		let redirectLocation = createLocation(state.location, location, { _isRedirect: true });
		if (isBrowser3) {
			let isDocumentReload = false;
			if (redirect2.response.headers.has("X-Remix-Reload-Document")) isDocumentReload = true;
			else if (isAbsoluteUrl(location)) {
				const url = createBrowserURLImpl(routerWindow, location, true);
				isDocumentReload = url.origin !== routerWindow.location.origin || stripBasename(url.pathname, basename) == null;
			}
			if (isDocumentReload) {
				if (replace2) routerWindow.location.replace(location);
				else routerWindow.location.assign(location);
				return;
			}
		}
		pendingNavigationController = null;
		let redirectNavigationType = replace2 === true || redirect2.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH";
		let { formMethod, formAction, formEncType } = state.navigation;
		if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) submission = getSubmissionFromNavigation(state.navigation);
		let activeSubmission = submission || fetcherSubmission;
		if (redirectPreserveMethodStatusCodes.has(redirect2.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) await startNavigation(redirectNavigationType, redirectLocation, {
			submission: {
				...activeSubmission,
				formAction: location
			},
			preventScrollReset: preventScrollReset || pendingPreventScrollReset,
			enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
		});
		else await startNavigation(redirectNavigationType, redirectLocation, {
			overrideNavigation: getLoadingNavigation(redirectLocation, [], redirectNavigationType, submission),
			fetcherSubmission,
			preventScrollReset: preventScrollReset || pendingPreventScrollReset,
			enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
		});
	}
	async function callDataStrategy(request, path, matches, scopedContext, fetcherKey) {
		let results;
		let dataResults = {};
		try {
			results = await callDataStrategyImpl(dataStrategyImpl, request, path, matches, fetcherKey, scopedContext, false);
		} catch (e) {
			matches.filter((m) => m.shouldLoad).forEach((m) => {
				dataResults[m.route.id] = {
					type: "error",
					error: e
				};
			});
			return dataResults;
		}
		if (request.signal.aborted) return dataResults;
		if (!isMutationMethod(request.method)) for (let match of matches) {
			if (results[match.route.id]?.type === "error") break;
			if (!results.hasOwnProperty(match.route.id) && !state.loaderData.hasOwnProperty(match.route.id) && (!state.errors || !state.errors.hasOwnProperty(match.route.id)) && match.shouldCallHandler()) results[match.route.id] = {
				type: "error",
				result: /* @__PURE__ */ new Error(`No result returned from dataStrategy for route ${match.route.id}`)
			};
		}
		for (let [routeId, result] of Object.entries(results)) if (isRedirectDataStrategyResult(result)) {
			let response = result.result;
			dataResults[routeId] = {
				type: "redirect",
				response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename)
			};
		} else dataResults[routeId] = await convertDataStrategyResultToDataResult(result);
		return dataResults;
	}
	async function callLoadersAndMaybeResolveData(matches, fetchersToLoad, request, location, scopedContext) {
		let loaderResultsPromise = callDataStrategy(request, location, matches, scopedContext, null);
		let fetcherResultsPromise = Promise.all(fetchersToLoad.map(async (f) => {
			if (f.matches && f.match && f.request && f.controller) {
				let result = (await callDataStrategy(f.request, f.path, f.matches, scopedContext, f.key))[f.match.route.id];
				return { [f.key]: result };
			} else return Promise.resolve({ [f.key]: {
				type: "error",
				error: getInternalRouterError(404, { pathname: f.path })
			} });
		}));
		return {
			loaderResults: await loaderResultsPromise,
			fetcherResults: (await fetcherResultsPromise).reduce((acc, r) => Object.assign(acc, r), {})
		};
	}
	function interruptActiveLoads() {
		isRevalidationRequired = true;
		fetchLoadMatches.forEach((_, key) => {
			if (fetchControllers.has(key)) cancelledFetcherLoads.add(key);
			abortFetcher(key);
		});
	}
	function updateFetcherState(key, fetcher, opts = {}) {
		let workingFetchers = new Map(state.fetchers);
		workingFetchers.set(key, fetcher);
		updateState({ fetchers: workingFetchers }, { flushSync: (opts && opts.flushSync) === true });
	}
	function setFetcherError(key, routeId, error, opts = {}) {
		let boundaryMatch = findNearestBoundary(state.matches, routeId);
		let workingFetchers = new Map(state.fetchers);
		deleteFetcher(workingFetchers, key);
		updateState({
			errors: { [boundaryMatch.route.id]: error },
			fetchers: workingFetchers
		}, { flushSync: (opts && opts.flushSync) === true });
	}
	function getFetcher(key) {
		activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
		if (fetchersQueuedForDeletion.has(key)) fetchersQueuedForDeletion.delete(key);
		return state.fetchers.get(key) || IDLE_FETCHER;
	}
	function resetFetcher(key, opts) {
		abortFetcher(key, opts?.reason);
		updateFetcherState(key, getDoneFetcher(null));
	}
	function deleteFetcher(fetchers, key) {
		let fetcher = state.fetchers.get(key);
		if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) abortFetcher(key);
		fetchLoadMatches.delete(key);
		fetchReloadIds.delete(key);
		fetchRedirectIds.delete(key);
		fetchersQueuedForDeletion.delete(key);
		cancelledFetcherLoads.delete(key);
		fetchers.delete(key);
	}
	function queueFetcherForDeletion(key) {
		let count = (activeFetchers.get(key) || 0) - 1;
		if (count <= 0) {
			activeFetchers.delete(key);
			fetchersQueuedForDeletion.add(key);
		} else activeFetchers.set(key, count);
		updateState({ fetchers: new Map(state.fetchers) });
	}
	function abortFetcher(key, reason) {
		let controller = fetchControllers.get(key);
		if (controller) {
			controller.abort(reason);
			fetchControllers.delete(key);
		}
	}
	function markFetchersDone(keys, fetchers) {
		for (let key of keys) {
			let fetcher = fetchers.get(key);
			invariant$2(fetcher, `Expected fetcher: ${key}`);
			let doneFetcher = getDoneFetcher(fetcher.data);
			fetchers.set(key, doneFetcher);
		}
	}
	function markFetchRedirectsDone(fetchers) {
		let doneKeys = [];
		let didUpdateFetchers = false;
		for (let key of fetchRedirectIds) {
			let fetcher = fetchers.get(key);
			invariant$2(fetcher, `Expected fetcher: ${key}`);
			if (fetcher.state === "loading") {
				fetchRedirectIds.delete(key);
				doneKeys.push(key);
				didUpdateFetchers = true;
			}
		}
		markFetchersDone(doneKeys, fetchers);
		return didUpdateFetchers;
	}
	function abortStaleFetchLoads(landedId, fetchers) {
		let yeetedKeys = [];
		for (let [key, id] of fetchReloadIds) if (id < landedId) {
			let fetcher = fetchers.get(key);
			invariant$2(fetcher, `Expected fetcher: ${key}`);
			if (fetcher.state === "loading") {
				abortFetcher(key);
				fetchReloadIds.delete(key);
				yeetedKeys.push(key);
			}
		}
		markFetchersDone(yeetedKeys, fetchers);
		return yeetedKeys.length > 0;
	}
	function getBlocker(key, fn) {
		let blocker = state.blockers.get(key) || IDLE_BLOCKER;
		if (blockerFunctions.get(key) !== fn) blockerFunctions.set(key, fn);
		return blocker;
	}
	function deleteBlocker(key) {
		state.blockers.delete(key);
		blockerFunctions.delete(key);
	}
	function updateBlocker(key, newBlocker) {
		let blocker = state.blockers.get(key) || IDLE_BLOCKER;
		invariant$2(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", `Invalid blocker state transition: ${blocker.state} -> ${newBlocker.state}`);
		let blockers = new Map(state.blockers);
		blockers.set(key, newBlocker);
		updateState({ blockers });
	}
	function shouldBlockNavigation({ currentLocation, nextLocation, historyAction }) {
		if (blockerFunctions.size === 0) return;
		if (blockerFunctions.size > 1) warning$1(false, "A router only supports one blocker at a time");
		let entries = Array.from(blockerFunctions.entries());
		let [blockerKey, blockerFunction] = entries[entries.length - 1];
		let blocker = state.blockers.get(blockerKey);
		if (blocker && blocker.state === "proceeding") return;
		if (blockerFunction({
			currentLocation,
			nextLocation,
			historyAction
		})) return blockerKey;
	}
	function handleNavigational404(pathname) {
		let error = getInternalRouterError(404, { pathname });
		let routesToUse = dataRoutes.activeRoutes;
		let { matches, route } = getShortCircuitMatches(routesToUse);
		return {
			notFoundMatches: matches,
			route,
			error
		};
	}
	function enableScrollRestoration(positions, getPosition, getKey) {
		savedScrollPositions2 = positions;
		getScrollPosition = getPosition;
		getScrollRestorationKey2 = getKey || null;
		if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
			initialScrollRestored = true;
			let y = getSavedScrollPosition(state.location, state.matches);
			if (y != null) updateState({ restoreScrollPosition: y });
		}
		return () => {
			savedScrollPositions2 = null;
			getScrollPosition = null;
			getScrollRestorationKey2 = null;
		};
	}
	function getScrollKey(location, matches) {
		if (getScrollRestorationKey2) return getScrollRestorationKey2(location, matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData))) || location.key;
		return location.key;
	}
	function saveScrollPosition(location, matches) {
		if (savedScrollPositions2 && getScrollPosition) {
			let key = getScrollKey(location, matches);
			savedScrollPositions2[key] = getScrollPosition();
		}
	}
	function getSavedScrollPosition(location, matches) {
		if (savedScrollPositions2) {
			let key = getScrollKey(location, matches);
			let y = savedScrollPositions2[key];
			if (typeof y === "number") return y;
		}
		return null;
	}
	function checkFogOfWar(matches, routesToUse, pathname) {
		if (init.patchRoutesOnNavigation) {
			let activeBranches = dataRoutes.branches;
			if (!matches) return {
				active: true,
				matches: matchRoutesImpl(routesToUse, pathname, basename, true, activeBranches) || []
			};
			else if (Object.keys(matches[0].params).length > 0) return {
				active: true,
				matches: matchRoutesImpl(routesToUse, pathname, basename, true, activeBranches)
			};
		}
		return {
			active: false,
			matches: null
		};
	}
	async function discoverRoutes(matches, pathname, signal, fetcherKey) {
		if (!init.patchRoutesOnNavigation) return {
			type: "success",
			matches
		};
		let partialMatches = matches;
		while (true) {
			let localManifest = manifest;
			try {
				await init.patchRoutesOnNavigation({
					signal,
					path: pathname,
					matches: partialMatches,
					fetcherKey,
					patch: (routeId, children) => {
						if (signal.aborted) return;
						patchRoutesImpl(routeId, children, dataRoutes, localManifest, mapRouteProperties2, false);
					}
				});
			} catch (e) {
				return {
					type: "error",
					error: e,
					partialMatches
				};
			}
			if (signal.aborted) return { type: "aborted" };
			let activeBranches = dataRoutes.branches;
			let newMatches = matchRoutesImpl(dataRoutes.activeRoutes, pathname, basename, false, activeBranches);
			let newPartialMatches = null;
			if (newMatches) if (Object.keys(newMatches[0].params).length === 0) return {
				type: "success",
				matches: newMatches
			};
			else {
				newPartialMatches = matchRoutesImpl(dataRoutes.activeRoutes, pathname, basename, true, activeBranches);
				if (!(newPartialMatches && partialMatches.length < newPartialMatches.length && compareMatches(partialMatches, newPartialMatches.slice(0, partialMatches.length)))) return {
					type: "success",
					matches: newMatches
				};
			}
			if (!newPartialMatches) newPartialMatches = matchRoutesImpl(dataRoutes.activeRoutes, pathname, basename, true, activeBranches);
			if (!newPartialMatches || compareMatches(partialMatches, newPartialMatches)) return {
				type: "success",
				matches: null
			};
			partialMatches = newPartialMatches;
		}
	}
	function compareMatches(a, b) {
		return a.length === b.length && a.every((m, i) => m.route.id === b[i].route.id);
	}
	function _internalSetRoutes(newRoutes) {
		manifest = {};
		dataRoutes.setHmrRoutes(convertRoutesToDataRoutes(newRoutes, mapRouteProperties2, void 0, manifest));
	}
	function patchRoutes(routeId, children, unstable_allowElementMutations = false) {
		patchRoutesImpl(routeId, children, dataRoutes, manifest, mapRouteProperties2, unstable_allowElementMutations);
		if (!dataRoutes.hasHMRRoutes) updateState({});
	}
	router = {
		get basename() {
			return basename;
		},
		get future() {
			return future;
		},
		get state() {
			return state;
		},
		get routes() {
			return dataRoutes.stableRoutes;
		},
		get branches() {
			return dataRoutes.branches;
		},
		get manifest() {
			return manifest;
		},
		get window() {
			return routerWindow;
		},
		initialize,
		subscribe,
		enableScrollRestoration,
		navigate,
		fetch: fetch2,
		revalidate,
		createHref: (to) => init.history.createHref(to),
		encodeLocation: (to) => init.history.encodeLocation(to),
		getFetcher,
		resetFetcher,
		deleteFetcher: queueFetcherForDeletion,
		dispose,
		getBlocker,
		deleteBlocker,
		patchRoutes,
		_internalFetchControllers: fetchControllers,
		_internalSetRoutes,
		_internalSetStateDoNotUseOrYouWillBreakYourApp(newState) {
			updateState(newState);
		}
	};
	if (init.instrumentations) router = instrumentClientSideRouter(router, init.instrumentations.map((i) => i.router).filter(Boolean));
	return router;
}
function createStaticHandler(routes, opts) {
	invariant$2(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
	let manifest = {};
	let basename = (opts ? opts.basename : null) || "/";
	let _mapRouteProperties = opts?.mapRouteProperties || defaultMapRouteProperties;
	let mapRouteProperties2 = _mapRouteProperties;
	({ ...opts?.future });
	if (opts?.instrumentations) {
		let instrumentations = opts.instrumentations;
		mapRouteProperties2 = (route) => {
			return {
				..._mapRouteProperties(route),
				...getRouteInstrumentationUpdates(instrumentations.map((i) => i.route).filter(Boolean), route)
			};
		};
	}
	let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties2, void 0, manifest);
	let routeBranches = flattenAndRankRoutes(dataRoutes);
	async function query(request, { requestContext, filterMatchesToLoad, skipLoaderErrorBubbling, skipRevalidation, dataStrategy, generateMiddlewareResponse, normalizePath } = {}) {
		let normalizePathImpl = normalizePath || defaultNormalizePath;
		let method = request.method;
		let location = createLocation("", normalizePathImpl(request), null, "default");
		let matches = matchRoutesImpl(dataRoutes, location, basename, false, routeBranches);
		requestContext = requestContext != null ? requestContext : new RouterContextProvider();
		if (!isValidMethod(method) && method !== "HEAD") {
			let error = getInternalRouterError(405, { method });
			let { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
			let staticContext = {
				basename,
				location,
				matches: methodNotAllowedMatches,
				loaderData: {},
				actionData: null,
				errors: { [route.id]: error },
				statusCode: error.status,
				loaderHeaders: {},
				actionHeaders: {}
			};
			return generateMiddlewareResponse ? generateMiddlewareResponse(() => Promise.resolve(staticContext)) : staticContext;
		} else if (!matches) {
			let error = getInternalRouterError(404, { pathname: location.pathname });
			let { matches: notFoundMatches, route } = getShortCircuitMatches(dataRoutes);
			let staticContext = {
				basename,
				location,
				matches: notFoundMatches,
				loaderData: {},
				actionData: null,
				errors: { [route.id]: error },
				statusCode: error.status,
				loaderHeaders: {},
				actionHeaders: {}
			};
			return generateMiddlewareResponse ? generateMiddlewareResponse(() => Promise.resolve(staticContext)) : staticContext;
		}
		if (generateMiddlewareResponse) {
			invariant$2(requestContext instanceof RouterContextProvider, "When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `RouterContextProvider`");
			try {
				await loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties2);
				let renderedStaticContext;
				let response = await runServerMiddlewarePipeline({
					request,
					url: createDataFunctionUrl(request, location),
					pattern: getRoutePattern(matches),
					matches,
					params: matches[0].params,
					context: requestContext
				}, async () => {
					return await generateMiddlewareResponse(async (revalidationRequest, opts2 = {}) => {
						let result2 = await queryImpl(revalidationRequest, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null, "filterMatchesToLoad" in opts2 ? opts2.filterMatchesToLoad ?? null : filterMatchesToLoad ?? null, skipRevalidation === true);
						if (isResponse(result2)) return result2;
						renderedStaticContext = {
							location,
							basename,
							...result2
						};
						return renderedStaticContext;
					});
				}, async (error, routeId) => {
					if (isRedirectResponse(error)) return error;
					if (isResponse(error)) try {
						error = new ErrorResponseImpl(error.status, error.statusText, await parseResponseBody(error));
					} catch (e) {
						error = e;
					}
					if (isDataWithResponseInit(error)) error = dataWithResponseInitToErrorResponse(error);
					if (renderedStaticContext) {
						if (routeId in renderedStaticContext.loaderData) renderedStaticContext.loaderData[routeId] = void 0;
						let staticContext = getStaticContextFromError(dataRoutes, renderedStaticContext, error, skipLoaderErrorBubbling ? routeId : findNearestBoundary(matches, routeId).route.id);
						return generateMiddlewareResponse(() => Promise.resolve(staticContext));
					} else {
						let staticContext = {
							matches,
							location,
							basename,
							loaderData: {},
							actionData: null,
							errors: { [skipLoaderErrorBubbling ? routeId : findNearestBoundary(matches, matches.find((m) => m.route.id === routeId || m.route.loader)?.route.id || routeId).route.id]: error },
							statusCode: isRouteErrorResponse(error) ? error.status : 500,
							actionHeaders: {},
							loaderHeaders: {}
						};
						return generateMiddlewareResponse(() => Promise.resolve(staticContext));
					}
				});
				invariant$2(isResponse(response), "Expected a response in query()");
				return response;
			} catch (e) {
				if (isResponse(e)) return e;
				throw e;
			}
		}
		let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null, filterMatchesToLoad || null, skipRevalidation === true);
		if (isResponse(result)) return result;
		return {
			location,
			basename,
			...result
		};
	}
	async function queryRoute(request, { routeId, requestContext, dataStrategy, generateMiddlewareResponse, normalizePath } = {}) {
		let normalizePathImpl = normalizePath || defaultNormalizePath;
		let method = request.method;
		let location = createLocation("", normalizePathImpl(request), null, "default");
		let matches = matchRoutesImpl(dataRoutes, location, basename, false, routeBranches);
		requestContext = requestContext != null ? requestContext : new RouterContextProvider();
		if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") throw getInternalRouterError(405, { method });
		else if (!matches) throw getInternalRouterError(404, { pathname: location.pathname });
		let match = routeId ? matches.find((m) => m.route.id === routeId) : getTargetMatch(matches, location);
		if (routeId && !match) throw getInternalRouterError(403, {
			pathname: location.pathname,
			routeId
		});
		else if (!match) throw getInternalRouterError(404, { pathname: location.pathname });
		if (generateMiddlewareResponse) {
			invariant$2(requestContext instanceof RouterContextProvider, "When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `RouterContextProvider`");
			await loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties2);
			return await runServerMiddlewarePipeline({
				request,
				url: createDataFunctionUrl(request, location),
				pattern: getRoutePattern(matches),
				matches,
				params: matches[0].params,
				context: requestContext
			}, async () => {
				return await generateMiddlewareResponse(async (innerRequest) => {
					let processed = handleQueryResult(await queryImpl(innerRequest, location, matches, requestContext, dataStrategy || null, false, match, null, false));
					return isResponse(processed) ? processed : typeof processed === "string" ? new Response(processed) : Response.json(processed);
				});
			}, (error) => {
				if (isDataWithResponseInit(error)) return Promise.resolve(dataWithResponseInitToResponse(error));
				if (isResponse(error)) return Promise.resolve(error);
				throw error;
			});
		}
		return handleQueryResult(await queryImpl(request, location, matches, requestContext, dataStrategy || null, false, match, null, false));
		function handleQueryResult(result2) {
			if (isResponse(result2)) return result2;
			let error = result2.errors ? Object.values(result2.errors)[0] : void 0;
			if (error !== void 0) throw error;
			if (result2.actionData) return Object.values(result2.actionData)[0];
			if (result2.loaderData) return Object.values(result2.loaderData)[0];
		}
	}
	async function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, skipRevalidation) {
		invariant$2(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
		try {
			if (isMutationMethod(request.method)) return await submit(request, location, matches, routeMatch || getTargetMatch(matches, location), requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch != null, filterMatchesToLoad, skipRevalidation);
			let result = await loadRouteData(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad);
			return isResponse(result) ? result : {
				...result,
				actionData: null,
				actionHeaders: {}
			};
		} catch (e) {
			if (isDataStrategyResult(e) && isResponse(e.result)) {
				if (e.type === "error") throw e.result;
				return e.result;
			}
			if (isRedirectResponse(e)) return e;
			throw e;
		}
	}
	async function submit(request, location, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest, filterMatchesToLoad, skipRevalidation) {
		let result;
		if (!actionMatch.route.action && !actionMatch.route.lazy) {
			let error = getInternalRouterError(405, {
				method: request.method,
				pathname: new URL(request.url).pathname,
				routeId: actionMatch.route.id
			});
			if (isRouteRequest) throw error;
			result = {
				type: "error",
				error
			};
		} else {
			result = (await callDataStrategy(request, location, getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, location, matches, actionMatch, [], requestContext), isRouteRequest, requestContext, dataStrategy))[actionMatch.route.id];
			if (request.signal.aborted) throwStaticHandlerAbortedError(request, isRouteRequest);
		}
		if (isRedirectResult(result)) throw new Response(null, {
			status: result.response.status,
			headers: { Location: result.response.headers.get("Location") }
		});
		if (isRouteRequest) {
			if (isErrorResult(result)) throw result.error;
			return {
				matches: [actionMatch],
				loaderData: {},
				actionData: { [actionMatch.route.id]: result.data },
				errors: null,
				statusCode: 200,
				loaderHeaders: {},
				actionHeaders: {}
			};
		}
		if (skipRevalidation) if (isErrorResult(result)) {
			let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
			return {
				statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
				actionData: null,
				actionHeaders: { ...result.headers ? { [actionMatch.route.id]: result.headers } : {} },
				matches,
				loaderData: {},
				errors: { [boundaryMatch.route.id]: result.error },
				loaderHeaders: {}
			};
		} else return {
			actionData: { [actionMatch.route.id]: result.data },
			actionHeaders: result.headers ? { [actionMatch.route.id]: result.headers } : {},
			matches,
			loaderData: {},
			errors: null,
			statusCode: result.statusCode || 200,
			loaderHeaders: {}
		};
		let loaderRequest = new Request(request.url, {
			headers: request.headers,
			redirect: request.redirect,
			signal: request.signal
		});
		if (isErrorResult(result)) return {
			...await loadRouteData(loaderRequest, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, filterMatchesToLoad, [(skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id)).route.id, result]),
			statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
			actionData: null,
			actionHeaders: { ...result.headers ? { [actionMatch.route.id]: result.headers } : {} }
		};
		return {
			...await loadRouteData(loaderRequest, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, filterMatchesToLoad),
			actionData: { [actionMatch.route.id]: result.data },
			...result.statusCode ? { statusCode: result.statusCode } : {},
			actionHeaders: result.headers ? { [actionMatch.route.id]: result.headers } : {}
		};
	}
	async function loadRouteData(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, pendingActionResult) {
		let isRouteRequest = routeMatch != null;
		if (isRouteRequest && !routeMatch?.route.loader && !routeMatch?.route.lazy) throw getInternalRouterError(400, {
			method: request.method,
			pathname: new URL(request.url).pathname,
			routeId: routeMatch?.route.id
		});
		let dsMatches;
		if (routeMatch) dsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, location, matches, routeMatch, [], requestContext);
		else {
			let maxIdx = pendingActionResult && isErrorResult(pendingActionResult[1]) ? matches.findIndex((m) => m.route.id === pendingActionResult[0]) - 1 : void 0;
			let pattern = getRoutePattern(matches);
			dsMatches = matches.map((match, index) => {
				if (maxIdx != null && index > maxIdx) return getDataStrategyMatch(mapRouteProperties2, manifest, request, location, pattern, match, [], requestContext, false);
				return getDataStrategyMatch(mapRouteProperties2, manifest, request, location, pattern, match, [], requestContext, (match.route.loader || match.route.lazy) != null && (!filterMatchesToLoad || filterMatchesToLoad(match)));
			});
		}
		if (!dataStrategy && !dsMatches.some((m) => m.shouldLoad)) return {
			matches,
			loaderData: {},
			errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? { [pendingActionResult[0]]: pendingActionResult[1].error } : null,
			statusCode: 200,
			loaderHeaders: {}
		};
		let results = await callDataStrategy(request, location, dsMatches, isRouteRequest, requestContext, dataStrategy);
		if (request.signal.aborted) throwStaticHandlerAbortedError(request, isRouteRequest);
		return {
			...processRouteLoaderData(matches, results, pendingActionResult, true, skipLoaderErrorBubbling),
			matches
		};
	}
	async function callDataStrategy(request, location, matches, isRouteRequest, requestContext, dataStrategy) {
		let results = await callDataStrategyImpl(dataStrategy || defaultDataStrategy, request, location, matches, null, requestContext, true);
		let dataResults = {};
		await Promise.all(matches.map(async (match) => {
			if (!(match.route.id in results)) return;
			let result = results[match.route.id];
			if (isRedirectDataStrategyResult(result)) {
				let response = result.result;
				throw normalizeRelativeRoutingRedirectResponse(response, request, match.route.id, matches, basename);
			}
			if (isRouteRequest) {
				if (isResponse(result.result)) throw result;
				else if (isDataWithResponseInit(result.result)) throw dataWithResponseInitToResponse(result.result);
			}
			dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
		}));
		return dataResults;
	}
	return {
		dataRoutes,
		_internalRouteBranches: routeBranches,
		query,
		queryRoute
	};
}
function getStaticContextFromError(routes, handlerContext, error, boundaryId) {
	let errorBoundaryId = boundaryId || handlerContext._deepestRenderedBoundaryId || routes[0].id;
	return {
		...handlerContext,
		statusCode: isRouteErrorResponse(error) ? error.status : 500,
		errors: { [errorBoundaryId]: error }
	};
}
function throwStaticHandlerAbortedError(request, isRouteRequest) {
	if (request.signal.reason !== void 0) throw request.signal.reason;
	throw new Error(`${isRouteRequest ? "queryRoute" : "query"}() call aborted without an \`AbortSignal.reason\`: ${request.method} ${request.url}`);
}
function isSubmissionNavigation(opts) {
	return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
}
function defaultNormalizePath(request) {
	let url = new URL(request.url);
	return {
		pathname: url.pathname,
		search: url.search,
		hash: url.hash
	};
}
function normalizeTo(location, matches, basename, to, fromRouteId, relative) {
	let contextualMatches;
	let activeRouteMatch;
	if (fromRouteId) {
		contextualMatches = [];
		for (let match of matches) {
			contextualMatches.push(match);
			if (match.route.id === fromRouteId) {
				activeRouteMatch = match;
				break;
			}
		}
	} else {
		contextualMatches = matches;
		activeRouteMatch = matches[matches.length - 1];
	}
	let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
	if (to == null) {
		path.search = location.search;
		path.hash = location.hash;
	}
	if ((to == null || to === "" || to === ".") && activeRouteMatch) {
		let nakedIndex = hasNakedIndexQuery(path.search);
		if (activeRouteMatch.route.index && !nakedIndex) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
		else if (!activeRouteMatch.route.index && nakedIndex) {
			let params = new URLSearchParams(path.search);
			let indexValues = params.getAll("index");
			params.delete("index");
			indexValues.filter((v) => v).forEach((v) => params.append("index", v));
			let qs = params.toString();
			path.search = qs ? `?${qs}` : "";
		}
	}
	if (basename !== "/") path.pathname = prependBasename({
		basename,
		pathname: path.pathname
	});
	return createPath(path);
}
function normalizeNavigateOptions(isFetcher, path, opts) {
	if (!opts || !isSubmissionNavigation(opts)) return { path };
	if (opts.formMethod && !isValidMethod(opts.formMethod)) return {
		path,
		error: getInternalRouterError(405, { method: opts.formMethod })
	};
	let getInvalidBodyError = () => ({
		path,
		error: getInternalRouterError(400, { type: "invalid-body" })
	});
	let formMethod = (opts.formMethod || "get").toUpperCase();
	let formAction = stripHashFromPath(path);
	if (opts.body !== void 0) {
		if (opts.formEncType === "text/plain") {
			if (!isMutationMethod(formMethod)) return getInvalidBodyError();
			let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? Array.from(opts.body.entries()).reduce((acc, [name, value]) => `${acc}${name}=${value}
`, "") : String(opts.body);
			return {
				path,
				submission: {
					formMethod,
					formAction,
					formEncType: opts.formEncType,
					formData: void 0,
					json: void 0,
					text
				}
			};
		} else if (opts.formEncType === "application/json") {
			if (!isMutationMethod(formMethod)) return getInvalidBodyError();
			try {
				let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
				return {
					path,
					submission: {
						formMethod,
						formAction,
						formEncType: opts.formEncType,
						formData: void 0,
						json,
						text: void 0
					}
				};
			} catch (e) {
				return getInvalidBodyError();
			}
		}
	}
	invariant$2(typeof FormData === "function", "FormData is not available in this environment");
	let searchParams;
	let formData;
	if (opts.formData) {
		searchParams = convertFormDataToSearchParams(opts.formData);
		formData = opts.formData;
	} else if (opts.body instanceof FormData) {
		searchParams = convertFormDataToSearchParams(opts.body);
		formData = opts.body;
	} else if (opts.body instanceof URLSearchParams) {
		searchParams = opts.body;
		formData = convertSearchParamsToFormData(searchParams);
	} else if (opts.body == null) {
		searchParams = new URLSearchParams();
		formData = new FormData();
	} else try {
		searchParams = new URLSearchParams(opts.body);
		formData = convertSearchParamsToFormData(searchParams);
	} catch (e) {
		return getInvalidBodyError();
	}
	let submission = {
		formMethod,
		formAction,
		formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
		formData,
		json: void 0,
		text: void 0
	};
	if (isMutationMethod(submission.formMethod)) return {
		path,
		submission
	};
	let parsedPath = parsePath(path);
	if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) searchParams.append("index", "");
	parsedPath.search = `?${searchParams}`;
	return {
		path: createPath(parsedPath),
		submission
	};
}
function getMatchesToLoad(request, scopedContext, mapRouteProperties2, manifest, history, state, matches, submission, location, lazyRoutePropertiesToSkip, initialHydration, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, hasPatchRoutesOnNavigation, branches, pendingActionResult, callSiteDefaultShouldRevalidate) {
	let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
	let currentUrl = history.createURL(state.location);
	let nextUrl = history.createURL(location);
	let maxIdx;
	if (initialHydration && state.errors) {
		let boundaryId = Object.keys(state.errors)[0];
		maxIdx = matches.findIndex((m) => m.route.id === boundaryId);
	} else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
		let boundaryId = pendingActionResult[0];
		maxIdx = matches.findIndex((m) => m.route.id === boundaryId) - 1;
	}
	let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
	let shouldSkipRevalidation = actionStatus && actionStatus >= 400;
	let baseShouldRevalidateArgs = {
		currentUrl,
		currentParams: state.matches[0]?.params || {},
		nextUrl,
		nextParams: matches[0].params,
		...submission,
		actionResult,
		actionStatus
	};
	let pattern = getRoutePattern(matches);
	let dsMatches = matches.map((match, index) => {
		let { route } = match;
		let forceShouldLoad = null;
		if (maxIdx != null && index > maxIdx) forceShouldLoad = false;
		else if (route.lazy) forceShouldLoad = true;
		else if (!routeHasLoaderOrMiddleware(route)) forceShouldLoad = false;
		else if (initialHydration) {
			let { shouldLoad: shouldLoad2 } = getRouteHydrationStatus(route, state.loaderData, state.errors);
			forceShouldLoad = shouldLoad2;
		} else if (isNewLoader(state.loaderData, state.matches[index], match)) forceShouldLoad = true;
		if (forceShouldLoad !== null) return getDataStrategyMatch(mapRouteProperties2, manifest, request, location, pattern, match, lazyRoutePropertiesToSkip, scopedContext, forceShouldLoad);
		let defaultShouldRevalidate = false;
		if (typeof callSiteDefaultShouldRevalidate === "boolean") defaultShouldRevalidate = callSiteDefaultShouldRevalidate;
		else if (shouldSkipRevalidation) defaultShouldRevalidate = false;
		else if (isRevalidationRequired) defaultShouldRevalidate = true;
		else if (currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search) defaultShouldRevalidate = true;
		else if (currentUrl.search !== nextUrl.search) defaultShouldRevalidate = true;
		else if (isNewRouteInstance(state.matches[index], match)) defaultShouldRevalidate = true;
		let shouldRevalidateArgs = {
			...baseShouldRevalidateArgs,
			defaultShouldRevalidate
		};
		return getDataStrategyMatch(mapRouteProperties2, manifest, request, location, pattern, match, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateLoader(match, shouldRevalidateArgs), shouldRevalidateArgs, callSiteDefaultShouldRevalidate);
	});
	let revalidatingFetchers = [];
	fetchLoadMatches.forEach((f, key) => {
		if (initialHydration || !matches.some((m) => m.route.id === f.routeId) || fetchersQueuedForDeletion.has(key)) return;
		let fetcher = state.fetchers.get(key);
		let isMidInitialLoad = fetcher && fetcher.state !== "idle" && fetcher.data === void 0;
		let fetcherMatches = matchRoutesImpl(routesToUse, f.path, basename ?? "/", false, branches);
		if (!fetcherMatches) {
			if (hasPatchRoutesOnNavigation && isMidInitialLoad) return;
			revalidatingFetchers.push({
				key,
				routeId: f.routeId,
				path: f.path,
				matches: null,
				match: null,
				request: null,
				controller: null
			});
			return;
		}
		if (fetchRedirectIds.has(key)) return;
		let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
		let fetchController = new AbortController();
		let fetchRequest = createClientSideRequest(history, f.path, fetchController.signal);
		let fetcherDsMatches = null;
		if (cancelledFetcherLoads.has(key)) {
			cancelledFetcherLoads.delete(key);
			fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, f.path, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
		} else if (isMidInitialLoad) {
			if (isRevalidationRequired) fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, f.path, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
		} else {
			let defaultShouldRevalidate;
			if (typeof callSiteDefaultShouldRevalidate === "boolean") defaultShouldRevalidate = callSiteDefaultShouldRevalidate;
			else if (shouldSkipRevalidation) defaultShouldRevalidate = false;
			else defaultShouldRevalidate = isRevalidationRequired;
			let shouldRevalidateArgs = {
				...baseShouldRevalidateArgs,
				defaultShouldRevalidate
			};
			if (shouldRevalidateLoader(fetcherMatch, shouldRevalidateArgs)) fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, f.path, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateArgs);
		}
		if (fetcherDsMatches) revalidatingFetchers.push({
			key,
			routeId: f.routeId,
			path: f.path,
			matches: fetcherDsMatches,
			match: fetcherMatch,
			request: fetchRequest,
			controller: fetchController
		});
	});
	return {
		dsMatches,
		revalidatingFetchers
	};
}
function routeHasLoaderOrMiddleware(route) {
	return route.loader != null || route.middleware != null && route.middleware.length > 0;
}
function getRouteHydrationStatus(route, loaderData, errors) {
	if (route.lazy) return {
		shouldLoad: true,
		renderFallback: true
	};
	if (!routeHasLoaderOrMiddleware(route)) return {
		shouldLoad: false,
		renderFallback: false
	};
	let hasData = loaderData != null && route.id in loaderData;
	let hasError = errors != null && errors[route.id] !== void 0;
	if (!hasData && hasError) return {
		shouldLoad: false,
		renderFallback: false
	};
	if (typeof route.loader === "function" && route.loader.hydrate === true) return {
		shouldLoad: true,
		renderFallback: !hasData
	};
	let shouldLoad = !hasData && !hasError;
	return {
		shouldLoad,
		renderFallback: shouldLoad
	};
}
function isNewLoader(currentLoaderData, currentMatch, match) {
	let isNew = !currentMatch || match.route.id !== currentMatch.route.id;
	let isMissingData = !currentLoaderData.hasOwnProperty(match.route.id);
	return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
	let currentPath = currentMatch.route.path;
	return currentMatch.pathname !== match.pathname || currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"];
}
function shouldRevalidateLoader(loaderMatch, arg) {
	if (loaderMatch.route.shouldRevalidate) {
		let routeChoice = loaderMatch.route.shouldRevalidate(arg);
		if (typeof routeChoice === "boolean") return routeChoice;
	}
	return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, dataRoutes, manifest, mapRouteProperties2, allowElementMutations) {
	let childrenToPatch;
	if (routeId) {
		let route = manifest[routeId];
		invariant$2(route, `No route found to patch children into: routeId = ${routeId}`);
		if (!route.children) route.children = [];
		childrenToPatch = route.children;
	} else childrenToPatch = dataRoutes.activeRoutes;
	let uniqueChildren = [];
	let existingChildren = [];
	children.forEach((newRoute) => {
		let existingRoute = childrenToPatch.find((existingRoute2) => isSameRoute(newRoute, existingRoute2));
		if (existingRoute) existingChildren.push({
			existingRoute,
			newRoute
		});
		else uniqueChildren.push(newRoute);
	});
	if (uniqueChildren.length > 0) {
		let newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties2, [
			routeId || "_",
			"patch",
			String(childrenToPatch?.length || "0")
		], manifest);
		childrenToPatch.push(...newRoutes);
	}
	if (allowElementMutations && existingChildren.length > 0) for (let i = 0; i < existingChildren.length; i++) {
		let { existingRoute, newRoute } = existingChildren[i];
		let existingRouteTyped = existingRoute;
		let [newRouteTyped] = convertRoutesToDataRoutes([newRoute], mapRouteProperties2, [], {}, true);
		Object.assign(existingRouteTyped, {
			element: newRouteTyped.element ? newRouteTyped.element : existingRouteTyped.element,
			errorElement: newRouteTyped.errorElement ? newRouteTyped.errorElement : existingRouteTyped.errorElement,
			hydrateFallbackElement: newRouteTyped.hydrateFallbackElement ? newRouteTyped.hydrateFallbackElement : existingRouteTyped.hydrateFallbackElement
		});
	}
	if (!dataRoutes.hasHMRRoutes) dataRoutes.setRoutes([...dataRoutes.activeRoutes]);
}
function isSameRoute(newRoute, existingRoute) {
	if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) return true;
	if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) return false;
	if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) return true;
	return newRoute.children?.every((aChild, i) => existingRoute.children?.some((bChild) => isSameRoute(aChild, bChild))) ?? false;
}
function loadLazyRoute(route, type, manifest, mapRouteProperties2, lazyRoutePropertiesToSkip) {
	let routeToUpdate = manifest[route.id];
	invariant$2(routeToUpdate, "No route found in manifest");
	if (!route.lazy) return {
		lazyRoutePromise: void 0,
		lazyHandlerPromise: void 0
	};
	if (typeof route.lazy === "function") {
		let cachedPromise = lazyRouteFunctionCache.get(routeToUpdate);
		if (cachedPromise) return {
			lazyRoutePromise: cachedPromise,
			lazyHandlerPromise: cachedPromise
		};
		let lazyRoutePromise2 = (async () => {
			invariant$2(typeof route.lazy === "function", "No lazy route function found");
			let lazyRoute = await route.lazy();
			let routeUpdates = {};
			for (let lazyRouteProperty in lazyRoute) {
				let lazyValue = lazyRoute[lazyRouteProperty];
				if (lazyValue === void 0) continue;
				let isUnsupported = isUnsupportedLazyRouteFunctionKey(lazyRouteProperty);
				let isStaticallyDefined = routeToUpdate[lazyRouteProperty] !== void 0 && lazyRouteProperty !== "hasErrorBoundary";
				if (isUnsupported) warning$1(!isUnsupported, "Route property " + lazyRouteProperty + " is not a supported property to be returned from a lazy route function. This property will be ignored.");
				else if (isStaticallyDefined) warning$1(!isStaticallyDefined, `Route "${routeToUpdate.id}" has a static property "${lazyRouteProperty}" defined but its lazy function is also returning a value for this property. The lazy route property "${lazyRouteProperty}" will be ignored.`);
				else routeUpdates[lazyRouteProperty] = lazyValue;
			}
			Object.assign(routeToUpdate, routeUpdates);
			Object.assign(routeToUpdate, {
				...mapRouteProperties2(routeToUpdate),
				lazy: void 0
			});
		})();
		lazyRouteFunctionCache.set(routeToUpdate, lazyRoutePromise2);
		lazyRoutePromise2.catch(() => {});
		return {
			lazyRoutePromise: lazyRoutePromise2,
			lazyHandlerPromise: lazyRoutePromise2
		};
	}
	let lazyKeys = Object.keys(route.lazy);
	let lazyPropertyPromises = [];
	let lazyHandlerPromise = void 0;
	for (let key of lazyKeys) {
		if (lazyRoutePropertiesToSkip && lazyRoutePropertiesToSkip.includes(key)) continue;
		let promise = loadLazyRouteProperty({
			key,
			route,
			manifest,
			mapRouteProperties: mapRouteProperties2
		});
		if (promise) {
			lazyPropertyPromises.push(promise);
			if (key === type) lazyHandlerPromise = promise;
		}
	}
	let lazyRoutePromise = lazyPropertyPromises.length > 0 ? Promise.all(lazyPropertyPromises).then(() => {}) : void 0;
	lazyRoutePromise?.catch(() => {});
	lazyHandlerPromise?.catch(() => {});
	return {
		lazyRoutePromise,
		lazyHandlerPromise
	};
}
function isNonNullable(value) {
	return value !== void 0;
}
function loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties2) {
	let promises = matches.map(({ route }) => {
		if (typeof route.lazy !== "object" || !route.lazy.middleware) return;
		return loadLazyRouteProperty({
			key: "middleware",
			route,
			manifest,
			mapRouteProperties: mapRouteProperties2
		});
	}).filter(isNonNullable);
	return promises.length > 0 ? Promise.all(promises) : void 0;
}
async function defaultDataStrategy(args) {
	let matchesToLoad = args.matches.filter((m) => m.shouldLoad);
	let keyedResults = {};
	(await Promise.all(matchesToLoad.map((m) => m.resolve()))).forEach((result, i) => {
		keyedResults[matchesToLoad[i].route.id] = result;
	});
	return keyedResults;
}
async function defaultDataStrategyWithMiddleware(args) {
	if (!args.matches.some((m) => m.route.middleware)) return defaultDataStrategy(args);
	return runClientMiddlewarePipeline(args, () => defaultDataStrategy(args));
}
function runServerMiddlewarePipeline(args, handler, errorHandler) {
	return runMiddlewarePipeline(args, handler, processResult, isResponse, errorHandler);
	function processResult(result) {
		return isDataWithResponseInit(result) ? dataWithResponseInitToResponse(result) : result;
	}
}
function runClientMiddlewarePipeline(args, handler) {
	return runMiddlewarePipeline(args, handler, (r) => {
		if (isRedirectResponse(r)) throw r;
		return r;
	}, isDataStrategyResults, errorHandler);
	function errorHandler(error, routeId, nextResult) {
		if (nextResult) return Promise.resolve(Object.assign(nextResult.value, { [routeId]: {
			type: "error",
			result: error
		} }));
		else {
			let { matches } = args;
			let boundaryRouteId = findNearestBoundary(matches, matches[Math.min(Math.max(matches.findIndex((m) => m.route.id === routeId), 0), Math.max(matches.findIndex((m) => m.shouldCallHandler()), 0))].route.id).route.id;
			return Promise.resolve({ [boundaryRouteId]: {
				type: "error",
				result: error
			} });
		}
	}
}
async function runMiddlewarePipeline(args, handler, processResult, isResult, errorHandler) {
	let { matches, ...dataFnArgs } = args;
	return await callRouteMiddleware(dataFnArgs, matches.flatMap((m) => m.route.middleware ? m.route.middleware.map((fn) => [m.route.id, fn]) : []), handler, processResult, isResult, errorHandler);
}
async function callRouteMiddleware(args, middlewares, handler, processResult, isResult, errorHandler, idx = 0) {
	let { request } = args;
	if (request.signal.aborted) throw request.signal.reason ?? /* @__PURE__ */ new Error(`Request aborted: ${request.method} ${request.url}`);
	let tuple = middlewares[idx];
	if (!tuple) return await handler();
	let [routeId, middleware] = tuple;
	let nextResult;
	let next = async () => {
		if (nextResult) throw new Error("You may only call `next()` once per middleware");
		try {
			nextResult = { value: await callRouteMiddleware(args, middlewares, handler, processResult, isResult, errorHandler, idx + 1) };
			return nextResult.value;
		} catch (error) {
			nextResult = { value: await errorHandler(error, routeId, nextResult) };
			return nextResult.value;
		}
	};
	try {
		let value = await middleware(args, next);
		let result = value != null ? processResult(value) : void 0;
		if (isResult(result)) return result;
		else if (nextResult) return result ?? nextResult.value;
		else {
			nextResult = { value: await next() };
			return nextResult.value;
		}
	} catch (error) {
		return await errorHandler(error, routeId, nextResult);
	}
}
function getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip) {
	let lazyMiddlewarePromise = loadLazyRouteProperty({
		key: "middleware",
		route: match.route,
		manifest,
		mapRouteProperties: mapRouteProperties2
	});
	let lazyRoutePromises = loadLazyRoute(match.route, isMutationMethod(request.method) ? "action" : "loader", manifest, mapRouteProperties2, lazyRoutePropertiesToSkip);
	return {
		middleware: lazyMiddlewarePromise,
		route: lazyRoutePromises.lazyRoutePromise,
		handler: lazyRoutePromises.lazyHandlerPromise
	};
}
function getDataStrategyMatch(mapRouteProperties2, manifest, request, path, pattern, match, lazyRoutePropertiesToSkip, scopedContext, shouldLoad, shouldRevalidateArgs = null, callSiteDefaultShouldRevalidate) {
	let isUsingNewApi = false;
	let _lazyPromises = getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip);
	return {
		...match,
		_lazyPromises,
		shouldLoad,
		shouldRevalidateArgs,
		shouldCallHandler(defaultShouldRevalidate) {
			isUsingNewApi = true;
			if (!shouldRevalidateArgs) return shouldLoad;
			if (typeof callSiteDefaultShouldRevalidate === "boolean") return shouldRevalidateLoader(match, {
				...shouldRevalidateArgs,
				defaultShouldRevalidate: callSiteDefaultShouldRevalidate
			});
			if (typeof defaultShouldRevalidate === "boolean") return shouldRevalidateLoader(match, {
				...shouldRevalidateArgs,
				defaultShouldRevalidate
			});
			return shouldRevalidateLoader(match, shouldRevalidateArgs);
		},
		resolve(handlerOverride) {
			let { lazy, loader, middleware } = match.route;
			let callHandler = isUsingNewApi || shouldLoad || handlerOverride && !isMutationMethod(request.method) && (lazy || loader);
			let isMiddlewareOnlyRoute = middleware && middleware.length > 0 && !loader && !lazy;
			if (callHandler && (isMutationMethod(request.method) || !isMiddlewareOnlyRoute)) return callLoaderOrAction({
				request,
				path,
				pattern,
				match,
				lazyHandlerPromise: _lazyPromises?.handler,
				lazyRoutePromise: _lazyPromises?.route,
				handlerOverride,
				scopedContext
			});
			return Promise.resolve({
				type: "data",
				result: void 0
			});
		}
	};
}
function getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, path, matches, targetMatch, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateArgs = null) {
	return matches.map((match) => {
		if (match.route.id !== targetMatch.route.id) return {
			...match,
			shouldLoad: false,
			shouldRevalidateArgs,
			shouldCallHandler: () => false,
			_lazyPromises: getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip),
			resolve: () => Promise.resolve({
				type: "data",
				result: void 0
			})
		};
		return getDataStrategyMatch(mapRouteProperties2, manifest, request, path, getRoutePattern(matches), match, lazyRoutePropertiesToSkip, scopedContext, true, shouldRevalidateArgs);
	});
}
async function callDataStrategyImpl(dataStrategyImpl, request, path, matches, fetcherKey, scopedContext, isStaticHandler) {
	if (matches.some((m) => m._lazyPromises?.middleware)) await Promise.all(matches.map((m) => m._lazyPromises?.middleware));
	let dataStrategyArgs = {
		request,
		url: createDataFunctionUrl(request, path),
		pattern: getRoutePattern(matches),
		params: matches[0].params,
		context: scopedContext,
		matches
	};
	let runClientMiddleware = isStaticHandler ? () => {
		throw new Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
	} : (cb) => {
		let typedDataStrategyArgs = dataStrategyArgs;
		return runClientMiddlewarePipeline(typedDataStrategyArgs, () => {
			return cb({
				...typedDataStrategyArgs,
				fetcherKey,
				runClientMiddleware: () => {
					throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
				}
			});
		});
	};
	let results = await dataStrategyImpl({
		...dataStrategyArgs,
		fetcherKey,
		runClientMiddleware
	});
	try {
		await Promise.all(matches.flatMap((m) => [m._lazyPromises?.handler, m._lazyPromises?.route]));
	} catch (e) {}
	return results;
}
async function callLoaderOrAction({ request, path, pattern, match, lazyHandlerPromise, lazyRoutePromise, handlerOverride, scopedContext }) {
	let result;
	let onReject;
	let isAction = isMutationMethod(request.method);
	let type = isAction ? "action" : "loader";
	let runHandler = (handler) => {
		let reject;
		let abortPromise = new Promise((_, r) => reject = r);
		onReject = () => reject();
		request.signal.addEventListener("abort", onReject);
		let actualHandler = (ctx) => {
			if (typeof handler !== "function") return Promise.reject(/* @__PURE__ */ new Error(`You cannot call the handler for a route which defines a boolean "${type}" [routeId: ${match.route.id}]`));
			return handler({
				request,
				url: createDataFunctionUrl(request, path),
				pattern,
				params: match.params,
				context: scopedContext
			}, ...ctx !== void 0 ? [ctx] : []);
		};
		let handlerPromise = (async () => {
			try {
				return {
					type: "data",
					result: await (handlerOverride ? handlerOverride((ctx) => actualHandler(ctx)) : actualHandler())
				};
			} catch (e) {
				return {
					type: "error",
					result: e
				};
			}
		})();
		return Promise.race([handlerPromise, abortPromise]);
	};
	try {
		let handler = isAction ? match.route.action : match.route.loader;
		if (lazyHandlerPromise || lazyRoutePromise) if (handler) {
			let handlerError;
			let [value] = await Promise.all([
				runHandler(handler).catch((e) => {
					handlerError = e;
				}),
				lazyHandlerPromise,
				lazyRoutePromise
			]);
			if (handlerError !== void 0) throw handlerError;
			result = value;
		} else {
			await lazyHandlerPromise;
			let handler2 = isAction ? match.route.action : match.route.loader;
			if (handler2) [result] = await Promise.all([runHandler(handler2), lazyRoutePromise]);
			else if (type === "action") {
				let url = new URL(request.url);
				let pathname = url.pathname + url.search;
				throw getInternalRouterError(405, {
					method: request.method,
					pathname,
					routeId: match.route.id
				});
			} else return {
				type: "data",
				result: void 0
			};
		}
		else if (!handler) {
			let url = new URL(request.url);
			throw getInternalRouterError(404, { pathname: url.pathname + url.search });
		} else result = await runHandler(handler);
	} catch (e) {
		return {
			type: "error",
			result: e
		};
	} finally {
		if (onReject) request.signal.removeEventListener("abort", onReject);
	}
	return result;
}
async function parseResponseBody(response) {
	let contentType = response.headers.get("Content-Type");
	if (contentType && /\bapplication\/json\b/.test(contentType)) return response.body == null ? null : response.json();
	return response.text();
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
	let { result, type } = dataStrategyResult;
	if (isResponse(result)) {
		let data2;
		try {
			data2 = await parseResponseBody(result);
		} catch (e) {
			return {
				type: "error",
				error: e
			};
		}
		if (type === "error") return {
			type: "error",
			error: new ErrorResponseImpl(result.status, result.statusText, data2),
			statusCode: result.status,
			headers: result.headers
		};
		return {
			type: "data",
			data: data2,
			statusCode: result.status,
			headers: result.headers
		};
	}
	if (type === "error") {
		if (isDataWithResponseInit(result)) {
			if (result.data instanceof Error) return {
				type: "error",
				error: result.data,
				statusCode: result.init?.status,
				headers: result.init?.headers ? new Headers(result.init.headers) : void 0
			};
			return {
				type: "error",
				error: dataWithResponseInitToErrorResponse(result),
				statusCode: isRouteErrorResponse(result) ? result.status : void 0,
				headers: result.init?.headers ? new Headers(result.init.headers) : void 0
			};
		}
		return {
			type: "error",
			error: result,
			statusCode: isRouteErrorResponse(result) ? result.status : void 0
		};
	}
	if (isDataWithResponseInit(result)) return {
		type: "data",
		data: result.data,
		statusCode: result.init?.status,
		headers: result.init?.headers ? new Headers(result.init.headers) : void 0
	};
	return {
		type: "data",
		data: result
	};
}
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename) {
	let location = response.headers.get("Location");
	invariant$2(location, "Redirects returned/thrown from loaders/actions must have a Location header");
	if (!isAbsoluteUrl(location)) {
		let trimmedMatches = matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1);
		location = normalizeTo(new URL(request.url), trimmedMatches, basename, location);
		response.headers.set("Location", location);
	}
	return response;
}
function normalizeRedirectLocation(location, currentUrl, basename, historyInstance) {
	if (isAbsoluteUrl(location)) {
		let normalizedLocation = location;
		let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
		if (invalidProtocols.includes(url.protocol)) throw new Error("Invalid redirect location");
		let isSameBasename = stripBasename(url.pathname, basename) != null;
		if (url.origin === currentUrl.origin && isSameBasename) return removeDoubleSlashes(url.pathname) + url.search + url.hash;
	}
	try {
		let url = historyInstance.createURL(location);
		if (invalidProtocols.includes(url.protocol)) throw new Error("Invalid redirect location");
	} catch (e) {}
	return location;
}
function createClientSideRequest(history, location, signal, submission) {
	let url = history.createURL(stripHashFromPath(location)).toString();
	let init = { signal };
	if (submission && isMutationMethod(submission.formMethod)) {
		let { formMethod, formEncType } = submission;
		init.method = formMethod.toUpperCase();
		if (formEncType === "application/json") {
			init.headers = new Headers({ "Content-Type": formEncType });
			init.body = JSON.stringify(submission.json);
		} else if (formEncType === "text/plain") init.body = submission.text;
		else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) init.body = convertFormDataToSearchParams(submission.formData);
		else init.body = submission.formData;
	}
	return new Request(url, init);
}
function createDataFunctionUrl(request, path) {
	let url = new URL(request.url);
	let parsed = typeof path === "string" ? parsePath(path) : path;
	url.pathname = parsed.pathname || "/";
	if (parsed.search) {
		let searchParams = new URLSearchParams(parsed.search);
		let indexValues = searchParams.getAll("index");
		searchParams.delete("index");
		for (let value of indexValues.filter(Boolean)) searchParams.append("index", value);
		url.search = searchParams.size ? `?${searchParams.toString()}` : "";
	} else url.search = "";
	url.hash = parsed.hash || "";
	return url;
}
function convertFormDataToSearchParams(formData) {
	let searchParams = new URLSearchParams();
	for (let [key, value] of formData.entries()) searchParams.append(key, typeof value === "string" ? value : value.name);
	return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
	let formData = new FormData();
	for (let [key, value] of searchParams.entries()) formData.append(key, value);
	return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, isStaticHandler = false, skipLoaderErrorBubbling = false) {
	let loaderData = {};
	let errors = null;
	let statusCode;
	let foundError = false;
	let loaderHeaders = {};
	let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
	matches.forEach((match) => {
		if (!(match.route.id in results)) return;
		let id = match.route.id;
		let result = results[id];
		invariant$2(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
		if (isErrorResult(result)) {
			let error = result.error;
			if (pendingError !== void 0) {
				error = pendingError;
				pendingError = void 0;
			}
			errors = errors || {};
			if (skipLoaderErrorBubbling) errors[id] = error;
			else {
				let boundaryMatch = findNearestBoundary(matches, id);
				if (errors[boundaryMatch.route.id] == null) errors[boundaryMatch.route.id] = error;
			}
			if (!isStaticHandler) loaderData[id] = ResetLoaderDataSymbol;
			if (!foundError) {
				foundError = true;
				statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
			}
			if (result.headers) loaderHeaders[id] = result.headers;
		} else {
			loaderData[id] = result.data;
			if (result.statusCode && result.statusCode !== 200 && !foundError) statusCode = result.statusCode;
			if (result.headers) loaderHeaders[id] = result.headers;
		}
	});
	if (pendingError !== void 0 && pendingActionResult) {
		errors = { [pendingActionResult[0]]: pendingError };
		if (pendingActionResult[2]) loaderData[pendingActionResult[2]] = void 0;
	}
	return {
		loaderData,
		errors,
		statusCode: statusCode || 200,
		loaderHeaders
	};
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults, workingFetchers) {
	let { loaderData, errors } = processRouteLoaderData(matches, results, pendingActionResult);
	revalidatingFetchers.filter((f) => !f.matches || f.matches.some((m) => m.shouldLoad)).forEach((rf) => {
		let { key, match, controller } = rf;
		if (controller && controller.signal.aborted) return;
		let result = fetcherResults[key];
		invariant$2(result, "Did not find corresponding fetcher result");
		if (isErrorResult(result)) {
			let boundaryMatch = findNearestBoundary(state.matches, match?.route.id);
			if (!(errors && errors[boundaryMatch.route.id])) errors = {
				...errors,
				[boundaryMatch.route.id]: result.error
			};
			workingFetchers.delete(key);
		} else if (isRedirectResult(result)) invariant$2(false, "Unhandled fetcher revalidation redirect");
		else {
			let doneFetcher = getDoneFetcher(result.data);
			workingFetchers.set(key, doneFetcher);
		}
	});
	return {
		loaderData,
		errors
	};
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
	let mergedLoaderData = Object.entries(newLoaderData).filter(([, v]) => v !== ResetLoaderDataSymbol).reduce((merged, [k, v]) => {
		merged[k] = v;
		return merged;
	}, {});
	for (let match of matches) {
		let id = match.route.id;
		if (!newLoaderData.hasOwnProperty(id) && loaderData.hasOwnProperty(id) && match.route.loader) mergedLoaderData[id] = loaderData[id];
		if (errors && errors.hasOwnProperty(id)) break;
	}
	return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
	if (!pendingActionResult) return {};
	return isErrorResult(pendingActionResult[1]) ? { actionData: {} } : { actionData: { [pendingActionResult[0]]: pendingActionResult[1].data } };
}
function findNearestBoundary(matches, routeId) {
	return (routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches]).reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
	let route = routes.length === 1 ? routes[0] : routes.find((r) => r.index || !r.path || r.path === "/") || { id: `__shim-error-route__` };
	return {
		matches: [{
			params: {},
			pathname: "",
			pathnameBase: "",
			route
		}],
		route
	};
}
function getInternalRouterError(status, { pathname, routeId, method, type, message } = {}) {
	let statusText = "Unknown Server Error";
	let errorMessage = "Unknown @remix-run/router error";
	if (status === 400) {
		statusText = "Bad Request";
		if (method && pathname && routeId) errorMessage = `You made a ${method} request to "${pathname}" but did not provide a \`loader\` for route "${routeId}", so there is no way to handle the request.`;
		else if (type === "invalid-body") errorMessage = "Unable to encode submission body";
	} else if (status === 403) {
		statusText = "Forbidden";
		errorMessage = `Route "${routeId}" does not match URL "${pathname}"`;
	} else if (status === 404) {
		statusText = "Not Found";
		errorMessage = `No route matches URL "${pathname}"`;
	} else if (status === 405) {
		statusText = "Method Not Allowed";
		if (method && pathname && routeId) errorMessage = `You made a ${method.toUpperCase()} request to "${pathname}" but did not provide an \`action\` for route "${routeId}", so there is no way to handle the request.`;
		else if (method) errorMessage = `Invalid request method "${method.toUpperCase()}"`;
	}
	return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
function findRedirect(results) {
	let entries = Object.entries(results);
	for (let i = entries.length - 1; i >= 0; i--) {
		let [key, result] = entries[i];
		if (isRedirectResult(result)) return {
			key,
			result
		};
	}
}
function stripHashFromPath(path) {
	return createPath({
		...typeof path === "string" ? parsePath(path) : path,
		hash: ""
	});
}
function isHashChangeOnly(a, b) {
	if (a.pathname !== b.pathname || a.search !== b.search) return false;
	if (a.hash === "") return b.hash !== "";
	else if (a.hash === b.hash) return true;
	else if (b.hash !== "") return true;
	return false;
}
function dataWithResponseInitToResponse(data2) {
	return Response.json(data2.data, data2.init ?? void 0);
}
function dataWithResponseInitToErrorResponse(data2) {
	return new ErrorResponseImpl(data2.init?.status ?? 500, data2.init?.statusText ?? "Internal Server Error", data2.data);
}
function isDataStrategyResults(result) {
	return result != null && typeof result === "object" && Object.entries(result).every(([key, value]) => typeof key === "string" && isDataStrategyResult(value));
}
function isDataStrategyResult(result) {
	return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === "data" || result.type === "error");
}
function isRedirectDataStrategyResult(result) {
	return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isErrorResult(result) {
	return result.type === "error";
}
function isRedirectResult(result) {
	return (result && result.type) === "redirect";
}
function isDataWithResponseInit(value) {
	return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isResponse(value) {
	return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectStatusCode(statusCode) {
	return redirectStatusCodes.has(statusCode);
}
function isRedirectResponse(result) {
	return isResponse(result) && isRedirectStatusCode(result.status) && result.headers.has("Location");
}
function isValidMethod(method) {
	return validRequestMethods.has(method.toUpperCase());
}
function isMutationMethod(method) {
	return validMutationMethods.has(method.toUpperCase());
}
function hasNakedIndexQuery(search) {
	return new URLSearchParams(search).getAll("index").some((v) => v === "");
}
function getTargetMatch(matches, location) {
	let search = typeof location === "string" ? parsePath(location).search : location.search;
	if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) return matches[matches.length - 1];
	let pathMatches = getPathContributingMatches(matches);
	return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
	let { formMethod, formAction, formEncType, text, formData, json } = navigation;
	if (!formMethod || !formAction || !formEncType) return;
	if (text != null) return {
		formMethod,
		formAction,
		formEncType,
		formData: void 0,
		json: void 0,
		text
	};
	else if (formData != null) return {
		formMethod,
		formAction,
		formEncType,
		formData,
		json: void 0,
		text: void 0
	};
	else if (json !== void 0) return {
		formMethod,
		formAction,
		formEncType,
		formData: void 0,
		json,
		text: void 0
	};
}
function getLoadingNavigation(location, matches, historyAction, submission) {
	if (submission) return {
		state: "loading",
		location,
		matches,
		historyAction,
		formMethod: submission.formMethod,
		formAction: submission.formAction,
		formEncType: submission.formEncType,
		formData: submission.formData,
		json: submission.json,
		text: submission.text
	};
	else return {
		state: "loading",
		location,
		matches,
		historyAction,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	};
}
function getSubmittingNavigation(location, matches, historyAction, submission) {
	return {
		state: "submitting",
		location,
		matches,
		historyAction,
		formMethod: submission.formMethod,
		formAction: submission.formAction,
		formEncType: submission.formEncType,
		formData: submission.formData,
		json: submission.json,
		text: submission.text
	};
}
function getLoadingFetcher(submission, data2) {
	if (submission) return {
		state: "loading",
		formMethod: submission.formMethod,
		formAction: submission.formAction,
		formEncType: submission.formEncType,
		formData: submission.formData,
		json: submission.json,
		text: submission.text,
		data: data2
	};
	else return {
		state: "loading",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: data2
	};
}
function getSubmittingFetcher(submission, existingFetcher) {
	return {
		state: "submitting",
		formMethod: submission.formMethod,
		formAction: submission.formAction,
		formEncType: submission.formEncType,
		formData: submission.formData,
		json: submission.json,
		text: submission.text,
		data: existingFetcher ? existingFetcher.data : void 0
	};
}
function getDoneFetcher(data2) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: data2
	};
}
function restoreAppliedTransitions(_window, transitions) {
	try {
		let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
		if (sessionPositions) {
			let json = JSON.parse(sessionPositions);
			for (let [k, v] of Object.entries(json || {})) if (v && Array.isArray(v)) transitions.set(k, new Set(v || []));
		}
	} catch (e) {}
}
function persistAppliedTransitions(_window, transitions) {
	if (transitions.size > 0) {
		let json = {};
		for (let [k, v] of transitions) json[k] = [...v];
		try {
			_window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
		} catch (error) {
			warning$1(false, `Failed to save applied view transitions in sessionStorage (${error}).`);
		}
	}
}
function createDeferred() {
	let resolve;
	let reject;
	let promise = new Promise((res, rej) => {
		resolve = async (val) => {
			res(val);
			try {
				await promise;
			} catch (e) {}
		};
		reject = async (error) => {
			rej(error);
			try {
				await promise;
			} catch (e) {}
		};
	});
	return {
		promise,
		resolve,
		reject
	};
}
function useIsRSCRouterContext() {
	return import_react$8.useContext(RSCRouterContext);
}
function decodeRedirectErrorDigest(digest) {
	if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`)) try {
		let parsed = JSON.parse(digest.slice(28));
		if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string" && typeof parsed.location === "string" && typeof parsed.reloadDocument === "boolean" && typeof parsed.replace === "boolean") return parsed;
	} catch {}
}
function decodeRouteErrorResponseDigest(digest) {
	if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`)) try {
		let parsed = JSON.parse(digest.slice(40));
		if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string") return new ErrorResponseImpl(parsed.status, parsed.statusText, parsed.data);
	} catch {}
}
function useHref(to, { relative } = {}) {
	invariant$2(useInRouterContext(), `useHref() may be used only in the context of a <Router> component.`);
	let { basename, navigator } = import_react$9.useContext(NavigationContext);
	let { hash, pathname, search } = useResolvedPath(to, { relative });
	let joinedPathname = pathname;
	if (basename !== "/") joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
	return navigator.createHref({
		pathname: joinedPathname,
		search,
		hash
	});
}
function useInRouterContext() {
	return import_react$9.useContext(LocationContext) != null;
}
function useLocation$1() {
	invariant$2(useInRouterContext(), `useLocation() may be used only in the context of a <Router> component.`);
	return import_react$9.useContext(LocationContext).location;
}
function useNavigationType() {
	return import_react$9.useContext(LocationContext).navigationType;
}
function useMatch(pattern) {
	invariant$2(useInRouterContext(), `useMatch() may be used only in the context of a <Router> component.`);
	let { pathname } = useLocation$1();
	return import_react$9.useMemo(() => matchPath(pattern, decodePath(pathname)), [pathname, pattern]);
}
function useIsomorphicLayoutEffect$1(cb) {
	if (!import_react$9.useContext(NavigationContext).static) import_react$9.useLayoutEffect(cb);
}
function useNavigate() {
	let { isDataRoute } = import_react$9.useContext(RouteContext);
	return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
	invariant$2(useInRouterContext(), `useNavigate() may be used only in the context of a <Router> component.`);
	let dataRouterContext = import_react$9.useContext(DataRouterContext);
	let { basename, navigator } = import_react$9.useContext(NavigationContext);
	let { matches } = import_react$9.useContext(RouteContext);
	let { pathname: locationPathname } = useLocation$1();
	let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
	let activeRef = import_react$9.useRef(false);
	useIsomorphicLayoutEffect$1(() => {
		activeRef.current = true;
	});
	return import_react$9.useCallback((to, options = {}) => {
		warning$1(activeRef.current, navigateEffectWarning);
		if (!activeRef.current) return;
		if (typeof to === "number") {
			navigator.go(to);
			return;
		}
		let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
		if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
		(!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
	}, [
		basename,
		navigator,
		routePathnamesJson,
		locationPathname,
		dataRouterContext
	]);
}
function useOutletContext() {
	return import_react$9.useContext(OutletContext);
}
function useOutlet(context) {
	let outlet = import_react$9.useContext(RouteContext).outlet;
	return import_react$9.useMemo(() => outlet && /* @__PURE__ */ import_react$9.createElement(OutletContext.Provider, { value: context }, outlet), [outlet, context]);
}
function useParams() {
	let { matches } = import_react$9.useContext(RouteContext);
	return matches[matches.length - 1]?.params ?? {};
}
function useResolvedPath(to, { relative } = {}) {
	let { matches } = import_react$9.useContext(RouteContext);
	let { pathname: locationPathname } = useLocation$1();
	let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
	return import_react$9.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
		to,
		routePathnamesJson,
		locationPathname,
		relative
	]);
}
function useRoutes(routes, locationArg) {
	return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterOpts) {
	invariant$2(useInRouterContext(), `useRoutes() may be used only in the context of a <Router> component.`);
	let { navigator } = import_react$9.useContext(NavigationContext);
	let { matches: parentMatches } = import_react$9.useContext(RouteContext);
	let routeMatch = parentMatches[parentMatches.length - 1];
	let parentParams = routeMatch ? routeMatch.params : {};
	let parentPathname = routeMatch ? routeMatch.pathname : "/";
	let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
	let parentRoute = routeMatch && routeMatch.route;
	{
		let parentPath = parentRoute && parentRoute.path || "";
		warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`);
	}
	let locationFromContext = useLocation$1();
	let location;
	if (locationArg) {
		let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
		invariant$2(parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`);
		location = parsedLocationArg;
	} else location = locationFromContext;
	let pathname = location.pathname || "/";
	let remainingPathname = pathname;
	if (parentPathnameBase !== "/") {
		let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
		remainingPathname = "/" + pathname.replace(/^\//, "").split("/").slice(parentSegments.length).join("/");
	}
	let matches = dataRouterOpts && dataRouterOpts.state.matches.length ? dataRouterOpts.state.matches.map((m) => Object.assign(m, { route: dataRouterOpts.manifest[m.route.id] || m.route })) : matchRoutes(routes, { pathname: remainingPathname });
	warning$1(parentRoute || matches != null, `No routes matched location "${location.pathname}${location.search}${location.hash}" `);
	warning$1(matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0, `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
		params: Object.assign({}, parentParams, match.params),
		pathname: joinPaths([parentPathnameBase, navigator.encodeLocation ? navigator.encodeLocation(match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : match.pathname]),
		pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : match.pathnameBase])
	})), parentMatches, dataRouterOpts);
	if (locationArg && renderedMatches) return /* @__PURE__ */ import_react$9.createElement(LocationContext.Provider, { value: {
		location: {
			pathname: "/",
			search: "",
			hash: "",
			state: null,
			key: "default",
			mask: void 0,
			...location
		},
		navigationType: "POP"
	} }, renderedMatches);
	return renderedMatches;
}
function DefaultErrorComponent() {
	let error = useRouteError();
	let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
	let stack = error instanceof Error ? error.stack : null;
	let lightgrey = "rgba(200,200,200, 0.5)";
	let preStyles = {
		padding: "0.5rem",
		backgroundColor: lightgrey
	};
	let codeStyles = {
		padding: "2px 4px",
		backgroundColor: lightgrey
	};
	let devInfo = null;
	console.error("Error handled by React Router default ErrorBoundary:", error);
	devInfo = /* @__PURE__ */ import_react$9.createElement(import_react$9.Fragment, null, /* @__PURE__ */ import_react$9.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ import_react$9.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ import_react$9.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ import_react$9.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
	return /* @__PURE__ */ import_react$9.createElement(import_react$9.Fragment, null, /* @__PURE__ */ import_react$9.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ import_react$9.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ import_react$9.createElement("pre", { style: preStyles }, stack) : null, devInfo);
}
function RSCErrorHandler({ children, error }) {
	let { basename } = import_react$9.useContext(NavigationContext);
	if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
		let redirect2 = decodeRedirectErrorDigest(error.digest);
		if (redirect2) {
			let existingRedirect = errorRedirectHandledMap.get(error);
			if (existingRedirect) throw existingRedirect;
			let parsed = parseToInfo(redirect2.location, basename);
			if (isBrowser$2 && !errorRedirectHandledMap.get(error)) if (parsed.isExternal || redirect2.reloadDocument) window.location.href = parsed.absoluteURL || parsed.to;
			else {
				const redirectPromise = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(parsed.to, { replace: redirect2.replace }));
				errorRedirectHandledMap.set(error, redirectPromise);
				throw redirectPromise;
			}
			return /* @__PURE__ */ import_react$9.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${parsed.absoluteURL || parsed.to}`
			});
		}
	}
	return children;
}
function RenderedRoute({ routeContext, match, children }) {
	let dataRouterContext = import_react$9.useContext(DataRouterContext);
	if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
	return /* @__PURE__ */ import_react$9.createElement(RouteContext.Provider, { value: routeContext }, children);
}
function _renderMatches(matches, parentMatches = [], dataRouterOpts) {
	let dataRouterState = dataRouterOpts?.state;
	if (matches == null) {
		if (!dataRouterState) return null;
		if (dataRouterState.errors) matches = dataRouterState.matches;
		else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) matches = dataRouterState.matches;
		else return null;
	}
	let renderedMatches = matches;
	let errors = dataRouterState?.errors;
	if (errors != null) {
		let errorIndex = renderedMatches.findIndex((m) => m.route.id && errors?.[m.route.id] !== void 0);
		invariant$2(errorIndex >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(errors).join(",")}`);
		renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
	}
	let renderFallback = false;
	let fallbackIndex = -1;
	if (dataRouterOpts && dataRouterState) {
		renderFallback = dataRouterState.renderFallback;
		for (let i = 0; i < renderedMatches.length; i++) {
			let match = renderedMatches[i];
			if (match.route.HydrateFallback || match.route.hydrateFallbackElement) fallbackIndex = i;
			if (match.route.id) {
				let { loaderData, errors: errors2 } = dataRouterState;
				let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
				if (match.route.lazy || needsToRunLoader) {
					if (dataRouterOpts.isStatic) renderFallback = true;
					if (fallbackIndex >= 0) renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
					else renderedMatches = [renderedMatches[0]];
					break;
				}
			}
		}
	}
	let onErrorHandler = dataRouterOpts?.onError;
	let onError = dataRouterState && onErrorHandler ? (error, errorInfo) => {
		onErrorHandler(error, {
			location: dataRouterState.location,
			params: dataRouterState.matches?.[0]?.params ?? {},
			pattern: getRoutePattern(dataRouterState.matches),
			errorInfo
		});
	} : void 0;
	return renderedMatches.reduceRight((outlet, match, index) => {
		let error;
		let shouldRenderHydrateFallback = false;
		let errorElement = null;
		let hydrateFallbackElement = null;
		if (dataRouterState) {
			error = errors && match.route.id ? errors[match.route.id] : void 0;
			errorElement = match.route.errorElement || defaultErrorElement;
			if (renderFallback) {
				if (fallbackIndex < 0 && index === 0) {
					warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
					shouldRenderHydrateFallback = true;
					hydrateFallbackElement = null;
				} else if (fallbackIndex === index) {
					shouldRenderHydrateFallback = true;
					hydrateFallbackElement = match.route.hydrateFallbackElement || null;
				}
			}
		}
		let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
		let getChildren = () => {
			let children;
			if (error) children = errorElement;
			else if (shouldRenderHydrateFallback) children = hydrateFallbackElement;
			else if (match.route.Component) children = /* @__PURE__ */ import_react$9.createElement(match.route.Component, null);
			else if (match.route.element) children = match.route.element;
			else children = outlet;
			return /* @__PURE__ */ import_react$9.createElement(RenderedRoute, {
				match,
				routeContext: {
					outlet,
					matches: matches2,
					isDataRoute: dataRouterState != null
				},
				children
			});
		};
		return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ import_react$9.createElement(RenderErrorBoundary, {
			location: dataRouterState.location,
			revalidation: dataRouterState.revalidation,
			component: errorElement,
			error,
			children: getChildren(),
			routeContext: {
				outlet: null,
				matches: matches2,
				isDataRoute: true
			},
			onError
		}) : getChildren();
	}, null);
}
function getDataRouterConsoleError(hookName) {
	return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
	let ctx = import_react$9.useContext(DataRouterContext);
	invariant$2(ctx, getDataRouterConsoleError(hookName));
	return ctx;
}
function useDataRouterState(hookName) {
	let state = import_react$9.useContext(DataRouterStateContext);
	invariant$2(state, getDataRouterConsoleError(hookName));
	return state;
}
function useRouteContext(hookName) {
	let route = import_react$9.useContext(RouteContext);
	invariant$2(route, getDataRouterConsoleError(hookName));
	return route;
}
function useCurrentRouteId(hookName) {
	let route = useRouteContext(hookName);
	let thisRoute = route.matches[route.matches.length - 1];
	invariant$2(thisRoute.route.id, `${hookName} can only be used on routes that contain a unique "id"`);
	return thisRoute.route.id;
}
function useRouteId() {
	return useCurrentRouteId("useRouteId");
}
function useNavigation() {
	let state = useDataRouterState("useNavigation");
	return import_react$9.useMemo(() => {
		let { matches, historyAction, ...rest } = state.navigation;
		return rest;
	}, [state.navigation]);
}
function useRevalidator() {
	let dataRouterContext = useDataRouterContext("useRevalidator");
	let state = useDataRouterState("useRevalidator");
	let revalidate = import_react$9.useCallback(async () => {
		await dataRouterContext.router.revalidate();
	}, [dataRouterContext.router]);
	return import_react$9.useMemo(() => ({
		revalidate,
		state: state.revalidation
	}), [revalidate, state.revalidation]);
}
function useMatches() {
	let { matches, loaderData } = useDataRouterState("useMatches");
	return import_react$9.useMemo(() => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)), [matches, loaderData]);
}
function useLoaderData() {
	let state = useDataRouterState("useLoaderData");
	let routeId = useCurrentRouteId("useLoaderData");
	return state.loaderData[routeId];
}
function useRouteLoaderData(routeId) {
	return useDataRouterState("useRouteLoaderData").loaderData[routeId];
}
function useActionData() {
	let state = useDataRouterState("useActionData");
	let routeId = useCurrentRouteId("useLoaderData");
	return state.actionData ? state.actionData[routeId] : void 0;
}
function useRouteError() {
	let error = import_react$9.useContext(RouteErrorContext);
	let state = useDataRouterState("useRouteError");
	let routeId = useCurrentRouteId("useRouteError");
	if (error !== void 0) return error;
	return state.errors?.[routeId];
}
function useAsyncValue() {
	return import_react$9.useContext(AwaitContext)?._data;
}
function useAsyncError() {
	return import_react$9.useContext(AwaitContext)?._error;
}
function useBlocker(shouldBlock) {
	let { router, basename } = useDataRouterContext("useBlocker");
	let state = useDataRouterState("useBlocker");
	let [blockerKey, setBlockerKey] = import_react$9.useState("");
	let blockerFunction = import_react$9.useCallback((arg) => {
		if (typeof shouldBlock !== "function") return !!shouldBlock;
		if (basename === "/") return shouldBlock(arg);
		let { currentLocation, nextLocation, historyAction } = arg;
		return shouldBlock({
			currentLocation: {
				...currentLocation,
				pathname: stripBasename(currentLocation.pathname, basename) || currentLocation.pathname
			},
			nextLocation: {
				...nextLocation,
				pathname: stripBasename(nextLocation.pathname, basename) || nextLocation.pathname
			},
			historyAction
		});
	}, [basename, shouldBlock]);
	import_react$9.useEffect(() => {
		let key = String(++blockerId);
		setBlockerKey(key);
		return () => router.deleteBlocker(key);
	}, [router]);
	import_react$9.useEffect(() => {
		if (blockerKey !== "") router.getBlocker(blockerKey, blockerFunction);
	}, [
		router,
		blockerKey,
		blockerFunction
	]);
	return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : IDLE_BLOCKER;
}
function useNavigateStable() {
	let { router } = useDataRouterContext("useNavigate");
	let id = useCurrentRouteId("useNavigate");
	let activeRef = import_react$9.useRef(false);
	useIsomorphicLayoutEffect$1(() => {
		activeRef.current = true;
	});
	return import_react$9.useCallback(async (to, options = {}) => {
		warning$1(activeRef.current, navigateEffectWarning);
		if (!activeRef.current) return;
		if (typeof to === "number") await router.navigate(to);
		else await router.navigate(to, {
			fromRouteId: id,
			...options
		});
	}, [router, id]);
}
function warningOnce(key, cond, message) {
	if (!cond && !alreadyWarned[key]) {
		alreadyWarned[key] = true;
		warning$1(false, message);
	}
}
function useRoute(...args) {
	const currentRouteId = useCurrentRouteId("useRoute");
	const id = args[0] ?? currentRouteId;
	const state = useDataRouterState("useRoute");
	const route = state.matches.find(({ route: route2 }) => route2.id === id);
	if (route === void 0) return void 0;
	return {
		handle: route.route.handle,
		loaderData: state.loaderData[id],
		actionData: state.actionData?.[id]
	};
}
function toRouterStateMatch(match) {
	return {
		id: match.route.id,
		pathname: match.pathname,
		params: match.params,
		handle: match.route.handle
	};
}
function useRouterState() {
	let { location, historyAction: type, matches, navigation } = useDataRouterState("unstable_useRouterState");
	let active = import_react$9.useMemo(() => ({
		type,
		location,
		searchParams: new URLSearchParams(location.search),
		params: matches[matches.length - 1]?.params ?? {},
		matches: matches.map((m) => toRouterStateMatch(m))
	}), [
		location,
		matches,
		type
	]);
	let pending = import_react$9.useMemo(() => {
		if (navigation.state === "idle") return null;
		let shared = {
			type: navigation.historyAction,
			location: navigation.location,
			searchParams: new URLSearchParams(navigation.location.search),
			params: navigation.matches[navigation.matches.length - 1]?.params ?? {},
			matches: navigation.matches.map((m) => toRouterStateMatch(m))
		};
		return navigation.state === "loading" ? {
			...shared,
			state: "loading",
			formMethod: navigation.formMethod,
			formAction: navigation.formAction,
			formEncType: navigation.formEncType,
			formData: navigation.formData,
			json: navigation.json,
			text: navigation.text
		} : {
			...shared,
			state: "submitting",
			formMethod: navigation.formMethod,
			formAction: navigation.formAction,
			formEncType: navigation.formEncType,
			formData: navigation.formData,
			json: navigation.json,
			text: navigation.text
		};
	}, [navigation]);
	return import_react$9.useMemo(() => ({
		active,
		pending
	}), [active, pending]);
}
function warnOnce$1(condition, message) {
	if (!condition && !alreadyWarned2[message]) {
		alreadyWarned2[message] = true;
		console.warn(message);
	}
}
function useOptimisticSafe(val) {
	if (useOptimisticImpl) return useOptimisticImpl(val);
	else return [val, stableUseOptimisticSetter];
}
function mapRouteProperties(route) {
	let updates = { hasErrorBoundary: route.hasErrorBoundary || route.ErrorBoundary != null || route.errorElement != null };
	if (route.Component) {
		if (route.element) warning$1(false, "You should not include both `Component` and `element` on your route - `Component` will be used.");
		Object.assign(updates, {
			element: import_react$10.createElement(route.Component),
			Component: void 0
		});
	}
	if (route.HydrateFallback) {
		if (route.hydrateFallbackElement) warning$1(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.");
		Object.assign(updates, {
			hydrateFallbackElement: import_react$10.createElement(route.HydrateFallback),
			HydrateFallback: void 0
		});
	}
	if (route.ErrorBoundary) {
		if (route.errorElement) warning$1(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.");
		Object.assign(updates, {
			errorElement: import_react$10.createElement(route.ErrorBoundary),
			ErrorBoundary: void 0
		});
	}
	return updates;
}
function createMemoryRouter(routes, opts) {
	return createRouter({
		basename: opts?.basename,
		getContext: opts?.getContext,
		future: opts?.future,
		history: createMemoryHistory({
			initialEntries: opts?.initialEntries,
			initialIndex: opts?.initialIndex
		}),
		hydrationData: opts?.hydrationData,
		routes,
		hydrationRouteProperties,
		mapRouteProperties,
		dataStrategy: opts?.dataStrategy,
		patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
		instrumentations: opts?.instrumentations
	}).initialize();
}
function RouterProvider$1({ router, flushSync: reactDomFlushSyncImpl, onError, useTransitions }) {
	useTransitions = useIsRSCRouterContext() || useTransitions;
	let [_state, setStateImpl] = import_react$10.useState(router.state);
	let [state, setOptimisticState] = useOptimisticSafe(_state);
	let [pendingState, setPendingState] = import_react$10.useState();
	let [vtContext, setVtContext] = import_react$10.useState({ isTransitioning: false });
	let [renderDfd, setRenderDfd] = import_react$10.useState();
	let [transition, setTransition] = import_react$10.useState();
	let [interruption, setInterruption] = import_react$10.useState();
	let fetcherData = import_react$10.useRef(/* @__PURE__ */ new Map());
	let setState = import_react$10.useCallback((newState, { deletedFetchers, newErrors, flushSync, viewTransitionOpts }) => {
		if (newErrors && onError) Object.values(newErrors).forEach((error) => onError(error, {
			location: newState.location,
			params: newState.matches[0]?.params ?? {},
			pattern: getRoutePattern(newState.matches)
		}));
		newState.fetchers.forEach((fetcher, key) => {
			if (fetcher.data !== void 0) fetcherData.current.set(key, fetcher.data);
		});
		deletedFetchers.forEach((key) => fetcherData.current.delete(key));
		warnOnce$1(flushSync === false || reactDomFlushSyncImpl != null, "You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from \"react-router/dom\"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.");
		let isViewTransitionAvailable = router.window != null && router.window.document != null && typeof router.window.document.startViewTransition === "function";
		warnOnce$1(viewTransitionOpts == null || isViewTransitionAvailable, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.");
		if (!viewTransitionOpts || !isViewTransitionAvailable) {
			if (reactDomFlushSyncImpl && flushSync) reactDomFlushSyncImpl(() => setStateImpl(newState));
			else if (useTransitions === false) setStateImpl(newState);
			else import_react$10.startTransition(() => {
				if (useTransitions === true) setOptimisticState((s) => getOptimisticRouterState(s, newState));
				setStateImpl(newState);
			});
			return;
		}
		if (reactDomFlushSyncImpl && flushSync) {
			reactDomFlushSyncImpl(() => {
				if (transition) {
					renderDfd?.resolve();
					transition.skipTransition();
				}
				setVtContext({
					isTransitioning: true,
					flushSync: true,
					currentLocation: viewTransitionOpts.currentLocation,
					nextLocation: viewTransitionOpts.nextLocation
				});
			});
			let t = router.window.document.startViewTransition(() => {
				reactDomFlushSyncImpl(() => setStateImpl(newState));
			});
			t.finished.finally(() => {
				reactDomFlushSyncImpl(() => {
					setRenderDfd(void 0);
					setTransition(void 0);
					setPendingState(void 0);
					setVtContext({ isTransitioning: false });
				});
			});
			reactDomFlushSyncImpl(() => setTransition(t));
			return;
		}
		if (transition) {
			renderDfd?.resolve();
			transition.skipTransition();
			setInterruption({
				state: newState,
				currentLocation: viewTransitionOpts.currentLocation,
				nextLocation: viewTransitionOpts.nextLocation
			});
		} else {
			setPendingState(newState);
			setVtContext({
				isTransitioning: true,
				flushSync: false,
				currentLocation: viewTransitionOpts.currentLocation,
				nextLocation: viewTransitionOpts.nextLocation
			});
		}
	}, [
		router.window,
		reactDomFlushSyncImpl,
		transition,
		renderDfd,
		useTransitions,
		setOptimisticState,
		onError
	]);
	import_react$10.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
	import_react$10.useEffect(() => {
		if (vtContext.isTransitioning && !vtContext.flushSync) setRenderDfd(new Deferred());
	}, [vtContext]);
	import_react$10.useEffect(() => {
		if (renderDfd && pendingState && router.window) {
			let newState = pendingState;
			let renderPromise = renderDfd.promise;
			let transition2 = router.window.document.startViewTransition(async () => {
				if (useTransitions === false) setStateImpl(newState);
				else import_react$10.startTransition(() => {
					if (useTransitions === true) setOptimisticState((s) => getOptimisticRouterState(s, newState));
					setStateImpl(newState);
				});
				await renderPromise;
			});
			transition2.finished.finally(() => {
				setRenderDfd(void 0);
				setTransition(void 0);
				setPendingState(void 0);
				setVtContext({ isTransitioning: false });
			});
			setTransition(transition2);
		}
	}, [
		pendingState,
		renderDfd,
		router.window,
		useTransitions,
		setOptimisticState
	]);
	import_react$10.useEffect(() => {
		if (renderDfd && pendingState && state.location.key === pendingState.location.key) renderDfd.resolve();
	}, [
		renderDfd,
		transition,
		state.location,
		pendingState
	]);
	import_react$10.useEffect(() => {
		if (!vtContext.isTransitioning && interruption) {
			setPendingState(interruption.state);
			setVtContext({
				isTransitioning: true,
				flushSync: false,
				currentLocation: interruption.currentLocation,
				nextLocation: interruption.nextLocation
			});
			setInterruption(void 0);
		}
	}, [vtContext.isTransitioning, interruption]);
	let navigator = import_react$10.useMemo(() => {
		return {
			createHref: router.createHref,
			encodeLocation: router.encodeLocation,
			go: (n) => router.navigate(n),
			push: (to, state2, opts) => router.navigate(to, {
				state: state2,
				preventScrollReset: opts?.preventScrollReset
			}),
			replace: (to, state2, opts) => router.navigate(to, {
				replace: true,
				state: state2,
				preventScrollReset: opts?.preventScrollReset
			})
		};
	}, [router]);
	let basename = router.basename || "/";
	let dataRouterContext = import_react$10.useMemo(() => ({
		router,
		navigator,
		static: false,
		basename,
		onError
	}), [
		router,
		navigator,
		basename,
		onError
	]);
	return /* @__PURE__ */ import_react$10.createElement(import_react$10.Fragment, null, /* @__PURE__ */ import_react$10.createElement(DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ import_react$10.createElement(DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ import_react$10.createElement(FetchersContext.Provider, { value: fetcherData.current }, /* @__PURE__ */ import_react$10.createElement(ViewTransitionContext.Provider, { value: vtContext }, /* @__PURE__ */ import_react$10.createElement(Router, {
		basename,
		location: state.location,
		navigationType: state.historyAction,
		navigator,
		useTransitions
	}, /* @__PURE__ */ import_react$10.createElement(MemoizedDataRoutes, {
		routes: router.routes,
		manifest: router.manifest,
		future: router.future,
		state,
		isStatic: false,
		onError
	})))))), null);
}
function getOptimisticRouterState(currentState, newState) {
	return {
		...currentState,
		navigation: newState.navigation.state !== "idle" ? newState.navigation : currentState.navigation,
		revalidation: newState.revalidation !== "idle" ? newState.revalidation : currentState.revalidation,
		actionData: newState.navigation.state !== "submitting" ? newState.actionData : currentState.actionData,
		fetchers: newState.fetchers
	};
}
function DataRoutes2({ routes, manifest, future, state, isStatic, onError }) {
	return useRoutesImpl(routes, void 0, {
		manifest,
		state,
		isStatic,
		onError,
		future
	});
}
function MemoryRouter({ basename, children, initialEntries, initialIndex, useTransitions }) {
	let historyRef = import_react$10.useRef();
	if (historyRef.current == null) historyRef.current = createMemoryHistory({
		initialEntries,
		initialIndex,
		v5Compat: true
	});
	let history = historyRef.current;
	let [state, setStateImpl] = import_react$10.useState({
		action: history.action,
		location: history.location
	});
	let setState = import_react$10.useCallback((newState) => {
		if (useTransitions === false) setStateImpl(newState);
		else import_react$10.startTransition(() => setStateImpl(newState));
	}, [useTransitions]);
	import_react$10.useLayoutEffect(() => history.listen(setState), [history, setState]);
	return /* @__PURE__ */ import_react$10.createElement(Router, {
		basename,
		children,
		location: state.location,
		navigationType: state.action,
		navigator: history,
		useTransitions
	});
}
function Navigate({ to, replace: replace2, state, relative }) {
	invariant$2(useInRouterContext(), `<Navigate> may be used only in the context of a <Router> component.`);
	let { static: isStatic } = import_react$10.useContext(NavigationContext);
	warning$1(!isStatic, `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);
	let { matches } = import_react$10.useContext(RouteContext);
	let { pathname: locationPathname } = useLocation$1();
	let navigate = useNavigate();
	let path = resolveTo(to, getResolveToMatches(matches), locationPathname, relative === "path");
	let jsonPath = JSON.stringify(path);
	import_react$10.useEffect(() => {
		navigate(JSON.parse(jsonPath), {
			replace: replace2,
			state,
			relative
		});
	}, [
		navigate,
		jsonPath,
		relative,
		replace2,
		state
	]);
	return null;
}
function Outlet(props) {
	return useOutlet(props.context);
}
function Route(props) {
	invariant$2(false, `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`);
}
function Router({ basename: basenameProp = "/", children = null, location: locationProp, navigationType = "POP", navigator, static: staticProp = false, useTransitions }) {
	invariant$2(!useInRouterContext(), `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);
	let basename = basenameProp.replace(/^\/*/, "/");
	let navigationContext = import_react$10.useMemo(() => ({
		basename,
		navigator,
		static: staticProp,
		useTransitions,
		future: {}
	}), [
		basename,
		navigator,
		staticProp,
		useTransitions
	]);
	if (typeof locationProp === "string") locationProp = parsePath(locationProp);
	let { pathname = "/", search = "", hash = "", state = null, key = "default", mask } = locationProp;
	let locationContext = import_react$10.useMemo(() => {
		let trailingPathname = stripBasename(pathname, basename);
		if (trailingPathname == null) return null;
		return {
			location: {
				pathname: trailingPathname,
				search,
				hash,
				state,
				key,
				mask
			},
			navigationType
		};
	}, [
		basename,
		pathname,
		search,
		hash,
		state,
		key,
		navigationType,
		mask
	]);
	warning$1(locationContext != null, `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`);
	if (locationContext == null) return null;
	return /* @__PURE__ */ import_react$10.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ import_react$10.createElement(LocationContext.Provider, {
		children,
		value: locationContext
	}));
}
function Routes({ children, location }) {
	return useRoutes(createRoutesFromChildren(children), location);
}
function Await({ children, errorElement, resolve }) {
	let dataRouterContext = import_react$10.useContext(DataRouterContext);
	let dataRouterStateContext = import_react$10.useContext(DataRouterStateContext);
	let onError = import_react$10.useCallback((error, errorInfo) => {
		if (dataRouterContext && dataRouterContext.onError && dataRouterStateContext) dataRouterContext.onError(error, {
			location: dataRouterStateContext.location,
			params: dataRouterStateContext.matches[0]?.params || {},
			pattern: getRoutePattern(dataRouterStateContext.matches),
			errorInfo
		});
	}, [dataRouterContext, dataRouterStateContext]);
	return /* @__PURE__ */ import_react$10.createElement(AwaitErrorBoundary, {
		resolve,
		errorElement,
		onError
	}, /* @__PURE__ */ import_react$10.createElement(ResolveAwait, null, children));
}
function ResolveAwait({ children }) {
	let data2 = useAsyncValue();
	let toRender = typeof children === "function" ? children(data2) : children;
	return /* @__PURE__ */ import_react$10.createElement(import_react$10.Fragment, null, toRender);
}
function createRoutesFromChildren(children, parentPath = []) {
	let routes = [];
	import_react$10.Children.forEach(children, (element, index) => {
		if (!import_react$10.isValidElement(element)) return;
		let treePath = [...parentPath, index];
		if (element.type === import_react$10.Fragment) {
			routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
			return;
		}
		invariant$2(element.type === Route, `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);
		invariant$2(!element.props.index || !element.props.children, "An index route cannot have child routes.");
		let route = {
			id: element.props.id || treePath.join("-"),
			caseSensitive: element.props.caseSensitive,
			element: element.props.element,
			Component: element.props.Component,
			index: element.props.index,
			path: element.props.path,
			middleware: element.props.middleware,
			loader: element.props.loader,
			action: element.props.action,
			hydrateFallbackElement: element.props.hydrateFallbackElement,
			HydrateFallback: element.props.HydrateFallback,
			errorElement: element.props.errorElement,
			ErrorBoundary: element.props.ErrorBoundary,
			hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
			shouldRevalidate: element.props.shouldRevalidate,
			handle: element.props.handle,
			lazy: element.props.lazy
		};
		if (element.props.children) route.children = createRoutesFromChildren(element.props.children, treePath);
		routes.push(route);
	});
	return routes;
}
function renderMatches(matches) {
	return _renderMatches(matches);
}
function useRouteComponentProps() {
	return {
		params: useParams(),
		loaderData: useLoaderData(),
		actionData: useActionData(),
		matches: useMatches()
	};
}
function WithComponentProps({ children }) {
	const props = useRouteComponentProps();
	return import_react$10.cloneElement(children, props);
}
function withComponentProps(Component4) {
	return function WithComponentProps2() {
		const props = useRouteComponentProps();
		return import_react$10.createElement(Component4, props);
	};
}
function useHydrateFallbackProps() {
	return {
		params: useParams(),
		loaderData: useLoaderData(),
		actionData: useActionData()
	};
}
function WithHydrateFallbackProps({ children }) {
	const props = useHydrateFallbackProps();
	return import_react$10.cloneElement(children, props);
}
function withHydrateFallbackProps(HydrateFallback) {
	return function WithHydrateFallbackProps2() {
		const props = useHydrateFallbackProps();
		return import_react$10.createElement(HydrateFallback, props);
	};
}
function useErrorBoundaryProps() {
	return {
		params: useParams(),
		loaderData: useLoaderData(),
		actionData: useActionData(),
		error: useRouteError()
	};
}
function WithErrorBoundaryProps({ children }) {
	const props = useErrorBoundaryProps();
	return import_react$10.cloneElement(children, props);
}
function withErrorBoundaryProps(ErrorBoundary) {
	return function WithErrorBoundaryProps2() {
		const props = useErrorBoundaryProps();
		return import_react$10.createElement(ErrorBoundary, props);
	};
}
function isHtmlElement(object) {
	return typeof HTMLElement !== "undefined" && object instanceof HTMLElement;
}
function isButtonElement(object) {
	return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
	return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
	return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
	return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
	return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
}
function createSearchParams(init = "") {
	return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo2, key) => {
		let value = init[key];
		return memo2.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
	}, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
	let searchParams = createSearchParams(locationSearch);
	if (defaultSearchParams) defaultSearchParams.forEach((_, key) => {
		if (!searchParams.has(key)) defaultSearchParams.getAll(key).forEach((value) => {
			searchParams.append(key, value);
		});
	});
	return searchParams;
}
function isFormDataSubmitterSupported() {
	if (_formDataSupportsSubmitter === null) try {
		new FormData(document.createElement("form"), 0);
		_formDataSupportsSubmitter = false;
	} catch (e) {
		_formDataSupportsSubmitter = true;
	}
	return _formDataSupportsSubmitter;
}
function getFormEncType(encType) {
	if (encType != null && !supportedFormEncTypes.has(encType)) {
		warning$1(false, `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`);
		return null;
	}
	return encType;
}
function getFormSubmissionInfo(target, basename) {
	let method;
	let action;
	let encType;
	let formData;
	let body;
	if (isFormElement(target)) {
		let attr = target.getAttribute("action");
		action = attr ? stripBasename(attr, basename) : null;
		method = target.getAttribute("method") || defaultMethod;
		encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
		formData = new FormData(target);
	} else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
		let form = target.form;
		if (form == null) throw new Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);
		let attr = target.getAttribute("formaction") || form.getAttribute("action");
		action = attr ? stripBasename(attr, basename) : null;
		method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
		encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
		formData = new FormData(form, target);
		if (!isFormDataSubmitterSupported()) {
			let { name, type, value } = target;
			if (type === "image") {
				let prefix = name ? `${name}.` : "";
				formData.append(`${prefix}x`, "0");
				formData.append(`${prefix}y`, "0");
			} else if (name) formData.append(name, value);
		}
	} else if (isHtmlElement(target)) throw new Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
	else {
		method = defaultMethod;
		action = null;
		encType = defaultEncType;
		body = target;
	}
	if (formData && encType === "text/plain") {
		body = formData;
		formData = void 0;
	}
	return {
		action,
		method: method.toLowerCase(),
		encType,
		formData,
		body
	};
}
function createLineSplittingTransform() {
	const decoder = new TextDecoder();
	let leftover = "";
	return new TransformStream({
		transform(chunk, controller) {
			const str = decoder.decode(chunk, { stream: true });
			const parts = (leftover + str).split("\n");
			leftover = parts.pop() || "";
			for (const part of parts) controller.enqueue(part);
		},
		flush(controller) {
			if (leftover) controller.enqueue(leftover);
		}
	});
}
async function flatten(input) {
	const { indices } = this;
	const existing = indices.get(input);
	if (existing) return [existing];
	if (input === void 0) return UNDEFINED;
	if (input === null) return NULL;
	if (Number.isNaN(input)) return NAN;
	if (input === Number.POSITIVE_INFINITY) return POSITIVE_INFINITY;
	if (input === Number.NEGATIVE_INFINITY) return NEGATIVE_INFINITY;
	if (input === 0 && 1 / input < 0) return NEGATIVE_ZERO;
	const index = this.index++;
	indices.set(input, index);
	const stack = [[input, index]];
	await stringify.call(this, stack);
	return index;
}
async function stringify(stack) {
	const { deferred, indices, plugins, postPlugins } = this;
	const str = this.stringified;
	let lastYieldTime = getNow();
	const flattenValue = (value) => {
		const existing = indices.get(value);
		if (existing) return [existing];
		if (value === void 0) return UNDEFINED;
		if (value === null) return NULL;
		if (Number.isNaN(value)) return NAN;
		if (value === Number.POSITIVE_INFINITY) return POSITIVE_INFINITY;
		if (value === Number.NEGATIVE_INFINITY) return NEGATIVE_INFINITY;
		if (value === 0 && 1 / value < 0) return NEGATIVE_ZERO;
		const index = this.index++;
		indices.set(value, index);
		stack.push([value, index]);
		return index;
	};
	let i = 0;
	while (stack.length > 0) {
		const now = getNow();
		if (++i % 6e3 === 0 && now - lastYieldTime >= TIME_LIMIT_MS) {
			await yieldToMain();
			lastYieldTime = getNow();
		}
		const [input, index] = stack.pop();
		const partsForObj = (obj) => Object.keys(obj).map((k) => `"_${flattenValue(k)}":${flattenValue(obj[k])}`).join(",");
		let error = null;
		switch (typeof input) {
			case "boolean":
			case "number":
			case "string":
				str[index] = JSON.stringify(input);
				break;
			case "bigint":
				str[index] = `["${TYPE_BIGINT}","${input}"]`;
				break;
			case "symbol": {
				const keyFor = Symbol.keyFor(input);
				if (!keyFor) error = /* @__PURE__ */ new Error("Cannot encode symbol unless created with Symbol.for()");
				else str[index] = `["${TYPE_SYMBOL}",${JSON.stringify(keyFor)}]`;
				break;
			}
			case "object": {
				if (!input) {
					str[index] = `${NULL}`;
					break;
				}
				const isArray = Array.isArray(input);
				let pluginHandled = false;
				if (!isArray && plugins) for (const plugin of plugins) {
					const pluginResult = plugin(input);
					if (Array.isArray(pluginResult)) {
						pluginHandled = true;
						const [pluginIdentifier, ...rest] = pluginResult;
						str[index] = `[${JSON.stringify(pluginIdentifier)}`;
						if (rest.length > 0) str[index] += `,${rest.map((v) => flattenValue(v)).join(",")}`;
						str[index] += "]";
						break;
					}
				}
				if (!pluginHandled) {
					let result = isArray ? "[" : "{";
					if (isArray) {
						for (let i2 = 0; i2 < input.length; i2++) result += (i2 ? "," : "") + (i2 in input ? flattenValue(input[i2]) : HOLE);
						str[index] = `${result}]`;
					} else if (input instanceof Date) {
						const dateTime = input.getTime();
						str[index] = `["${TYPE_DATE}",${Number.isNaN(dateTime) ? JSON.stringify("invalid") : dateTime}]`;
					} else if (input instanceof URL) str[index] = `["${TYPE_URL}",${JSON.stringify(input.href)}]`;
					else if (input instanceof RegExp) str[index] = `["${TYPE_REGEXP}",${JSON.stringify(input.source)},${JSON.stringify(input.flags)}]`;
					else if (input instanceof Set) if (input.size > 0) str[index] = `["${TYPE_SET}",${[...input].map((val) => flattenValue(val)).join(",")}]`;
					else str[index] = `["${TYPE_SET}"]`;
					else if (input instanceof Map) if (input.size > 0) str[index] = `["${TYPE_MAP}",${[...input].flatMap(([k, v]) => [flattenValue(k), flattenValue(v)]).join(",")}]`;
					else str[index] = `["${TYPE_MAP}"]`;
					else if (input instanceof Promise) {
						str[index] = `["${TYPE_PROMISE}",${index}]`;
						deferred[index] = input;
					} else if (input instanceof Error) {
						str[index] = `["${TYPE_ERROR}",${JSON.stringify(input.message)}`;
						if (input.name !== "Error") str[index] += `,${JSON.stringify(input.name)}`;
						str[index] += "]";
					} else if (Object.getPrototypeOf(input) === null) str[index] = `["${TYPE_NULL_OBJECT}",{${partsForObj(input)}}]`;
					else if (isPlainObject2(input)) str[index] = `{${partsForObj(input)}}`;
					else error = /* @__PURE__ */ new Error("Cannot encode object with prototype");
				}
				break;
			}
			default: {
				const isArray = Array.isArray(input);
				let pluginHandled = false;
				if (!isArray && plugins) for (const plugin of plugins) {
					const pluginResult = plugin(input);
					if (Array.isArray(pluginResult)) {
						pluginHandled = true;
						const [pluginIdentifier, ...rest] = pluginResult;
						str[index] = `[${JSON.stringify(pluginIdentifier)}`;
						if (rest.length > 0) str[index] += `,${rest.map((v) => flattenValue(v)).join(",")}`;
						str[index] += "]";
						break;
					}
				}
				if (!pluginHandled) error = /* @__PURE__ */ new Error("Cannot encode function or unexpected type");
			}
		}
		if (error) {
			let pluginHandled = false;
			if (postPlugins) for (const plugin of postPlugins) {
				const pluginResult = plugin(input);
				if (Array.isArray(pluginResult)) {
					pluginHandled = true;
					const [pluginIdentifier, ...rest] = pluginResult;
					str[index] = `[${JSON.stringify(pluginIdentifier)}`;
					if (rest.length > 0) str[index] += `,${rest.map((v) => flattenValue(v)).join(",")}`;
					str[index] += "]";
					break;
				}
			}
			if (!pluginHandled) throw error;
		}
	}
}
function isPlainObject2(thing) {
	const proto = Object.getPrototypeOf(thing);
	return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === objectProtoNames2;
}
function unflatten(parsed) {
	const { hydrated, values } = this;
	if (typeof parsed === "number") return hydrate.call(this, parsed);
	if (!Array.isArray(parsed) || !parsed.length) throw new SyntaxError();
	const startIndex = values.length;
	for (const value of parsed) values.push(value);
	hydrated.length = values.length;
	return hydrate.call(this, startIndex);
}
function hydrate(index) {
	const { hydrated, values, deferred, plugins } = this;
	let result;
	const stack = [[index, (v) => {
		result = v;
	}]];
	let postRun = [];
	while (stack.length > 0) {
		const [index2, set] = stack.pop();
		switch (index2) {
			case UNDEFINED:
				set(void 0);
				continue;
			case NULL:
				set(null);
				continue;
			case NAN:
				set(NaN);
				continue;
			case POSITIVE_INFINITY:
				set(Infinity);
				continue;
			case NEGATIVE_INFINITY:
				set(-Infinity);
				continue;
			case NEGATIVE_ZERO:
				set(-0);
				continue;
		}
		if (hydrated[index2]) {
			set(hydrated[index2]);
			continue;
		}
		const value = values[index2];
		if (!value || typeof value !== "object") {
			hydrated[index2] = value;
			set(value);
			continue;
		}
		if (Array.isArray(value)) if (typeof value[0] === "string") {
			const [type, b, c] = value;
			switch (type) {
				case TYPE_DATE:
					set(hydrated[index2] = new Date(b));
					continue;
				case TYPE_URL:
					set(hydrated[index2] = new URL(b));
					continue;
				case TYPE_BIGINT:
					set(hydrated[index2] = BigInt(b));
					continue;
				case TYPE_REGEXP:
					set(hydrated[index2] = new RegExp(b, c));
					continue;
				case TYPE_SYMBOL:
					set(hydrated[index2] = Symbol.for(b));
					continue;
				case TYPE_SET:
					const newSet = /* @__PURE__ */ new Set();
					hydrated[index2] = newSet;
					for (let i = value.length - 1; i > 0; i--) stack.push([value[i], (v) => {
						newSet.add(v);
					}]);
					set(newSet);
					continue;
				case TYPE_MAP:
					const map = /* @__PURE__ */ new Map();
					hydrated[index2] = map;
					for (let i = value.length - 2; i > 0; i -= 2) {
						const r = [];
						stack.push([value[i + 1], (v) => {
							r[1] = v;
						}]);
						stack.push([value[i], (k) => {
							r[0] = k;
						}]);
						postRun.push(() => {
							map.set(r[0], r[1]);
						});
					}
					set(map);
					continue;
				case TYPE_NULL_OBJECT:
					const obj = /* @__PURE__ */ Object.create(null);
					hydrated[index2] = obj;
					for (const key of Object.keys(b).reverse()) {
						const r = [];
						stack.push([b[key], (v) => {
							r[1] = v;
						}]);
						stack.push([Number(key.slice(1)), (k) => {
							r[0] = k;
						}]);
						postRun.push(() => {
							obj[r[0]] = r[1];
						});
					}
					set(obj);
					continue;
				case TYPE_PROMISE:
					if (hydrated[b]) set(hydrated[index2] = hydrated[b]);
					else {
						const d = new Deferred2();
						deferred[b] = d;
						set(hydrated[index2] = d.promise);
					}
					continue;
				case TYPE_ERROR:
					const [, message, errorType] = value;
					let error = errorType && globalObj && SUPPORTED_ERROR_TYPES.includes(errorType) && errorType in globalObj && typeof globalObj[errorType] === "function" ? new globalObj[errorType](message) : new Error(message);
					hydrated[index2] = error;
					set(error);
					continue;
				case TYPE_PREVIOUS_RESOLVED:
					set(hydrated[index2] = hydrated[b]);
					continue;
				default:
					if (Array.isArray(plugins)) {
						const r = [];
						const vals = value.slice(1);
						for (let i = 0; i < vals.length; i++) {
							const v = vals[i];
							stack.push([v, (v2) => {
								r[i] = v2;
							}]);
						}
						postRun.push(() => {
							for (const plugin of plugins) {
								const result2 = plugin(value[0], ...r);
								if (result2) {
									set(hydrated[index2] = result2.value);
									return;
								}
							}
							throw new SyntaxError();
						});
						continue;
					}
					throw new SyntaxError();
			}
		} else {
			const array = [];
			hydrated[index2] = array;
			for (let i = 0; i < value.length; i++) {
				const n = value[i];
				if (n !== HOLE) stack.push([n, (v) => {
					array[i] = v;
				}]);
			}
			set(array);
			continue;
		}
		else {
			const object = {};
			hydrated[index2] = object;
			for (const key of Object.keys(value).reverse()) {
				const r = [];
				stack.push([value[key], (v) => {
					r[1] = v;
				}]);
				stack.push([Number(key.slice(1)), (k) => {
					r[0] = k;
				}]);
				postRun.push(() => {
					object[r[0]] = r[1];
				});
			}
			set(object);
			continue;
		}
	}
	while (postRun.length > 0) postRun.pop()();
	return result;
}
async function decode(readable, options) {
	const { plugins } = options ?? {};
	const done = new Deferred2();
	const reader = readable.pipeThrough(createLineSplittingTransform()).getReader();
	const decoder = {
		values: [],
		hydrated: [],
		deferred: {},
		plugins
	};
	const decoded = await decodeInitial.call(decoder, reader);
	let donePromise = done.promise;
	if (decoded.done) done.resolve();
	else donePromise = decodeDeferred.call(decoder, reader).then(done.resolve).catch((reason) => {
		for (const deferred of Object.values(decoder.deferred)) deferred.reject(reason);
		done.reject(reason);
	});
	return {
		done: donePromise.then(() => reader.closed),
		value: decoded.value
	};
}
async function decodeInitial(reader) {
	const read = await reader.read();
	if (!read.value) throw new SyntaxError();
	let line;
	try {
		line = JSON.parse(read.value);
	} catch (reason) {
		throw new SyntaxError();
	}
	return {
		done: read.done,
		value: unflatten.call(this, line)
	};
}
async function decodeDeferred(reader) {
	let read = await reader.read();
	while (!read.done) {
		if (!read.value) continue;
		const line = read.value;
		switch (line[0]) {
			case TYPE_PROMISE: {
				const colonIndex = line.indexOf(":");
				const deferredId = Number(line.slice(1, colonIndex));
				const deferred = this.deferred[deferredId];
				if (!deferred) throw new Error(`Deferred ID ${deferredId} not found in stream`);
				const lineData = line.slice(colonIndex + 1);
				let jsonLine;
				try {
					jsonLine = JSON.parse(lineData);
				} catch (reason) {
					throw new SyntaxError();
				}
				const value = unflatten.call(this, jsonLine);
				deferred.resolve(value);
				break;
			}
			case TYPE_ERROR: {
				const colonIndex = line.indexOf(":");
				const deferredId = Number(line.slice(1, colonIndex));
				const deferred = this.deferred[deferredId];
				if (!deferred) throw new Error(`Deferred ID ${deferredId} not found in stream`);
				const lineData = line.slice(colonIndex + 1);
				let jsonLine;
				try {
					jsonLine = JSON.parse(lineData);
				} catch (reason) {
					throw new SyntaxError();
				}
				const value = unflatten.call(this, jsonLine);
				deferred.reject(value);
				break;
			}
			default: throw new SyntaxError();
		}
		read = await reader.read();
	}
}
function encode(input, options) {
	const { onComplete, plugins, postPlugins, signal } = options ?? {};
	const encoder = {
		deferred: {},
		index: 0,
		indices: /* @__PURE__ */ new Map(),
		stringified: [],
		plugins,
		postPlugins,
		signal
	};
	const textEncoder = new TextEncoder();
	let lastSentIndex = 0;
	return new ReadableStream({ async start(controller) {
		const id = await flatten.call(encoder, input);
		if (Array.isArray(id)) throw new Error("This should never happen");
		if (id < 0) controller.enqueue(textEncoder.encode(`${id}
`));
		else {
			controller.enqueue(textEncoder.encode(`[${encoder.stringified.join(",")}]
`));
			lastSentIndex = encoder.stringified.length - 1;
		}
		const seenPromises = /* @__PURE__ */ new WeakSet();
		let processingChain = Promise.resolve();
		if (Object.keys(encoder.deferred).length) {
			let raceDone;
			const racePromise = new Promise((resolve, reject) => {
				raceDone = resolve;
				if (signal) {
					const rejectPromise = () => reject(signal.reason || /* @__PURE__ */ new Error("Signal was aborted."));
					if (signal.aborted) rejectPromise();
					else signal.addEventListener("abort", (event) => {
						rejectPromise();
					});
				}
			});
			while (Object.keys(encoder.deferred).length > 0) {
				for (const [deferredId, deferred] of Object.entries(encoder.deferred)) {
					if (seenPromises.has(deferred)) continue;
					seenPromises.add(encoder.deferred[Number(deferredId)] = Promise.race([racePromise, deferred]).then((resolved) => {
						processingChain = processingChain.then(async () => {
							const id2 = await flatten.call(encoder, resolved);
							if (Array.isArray(id2)) {
								controller.enqueue(textEncoder.encode(`${TYPE_PROMISE}${deferredId}:[["${TYPE_PREVIOUS_RESOLVED}",${id2[0]}]]
`));
								encoder.index++;
								lastSentIndex++;
							} else if (id2 < 0) controller.enqueue(textEncoder.encode(`${TYPE_PROMISE}${deferredId}:${id2}
`));
							else {
								const values = encoder.stringified.slice(lastSentIndex + 1).join(",");
								controller.enqueue(textEncoder.encode(`${TYPE_PROMISE}${deferredId}:[${values}]
`));
								lastSentIndex = encoder.stringified.length - 1;
							}
						});
						return processingChain;
					}, (reason) => {
						processingChain = processingChain.then(async () => {
							if (!reason || typeof reason !== "object" || !(reason instanceof Error)) reason = /* @__PURE__ */ new Error("An unknown error occurred");
							const id2 = await flatten.call(encoder, reason);
							if (Array.isArray(id2)) {
								controller.enqueue(textEncoder.encode(`${TYPE_ERROR}${deferredId}:[["${TYPE_PREVIOUS_RESOLVED}",${id2[0]}]]
`));
								encoder.index++;
								lastSentIndex++;
							} else if (id2 < 0) controller.enqueue(textEncoder.encode(`${TYPE_ERROR}${deferredId}:${id2}
`));
							else {
								const values = encoder.stringified.slice(lastSentIndex + 1).join(",");
								controller.enqueue(textEncoder.encode(`${TYPE_ERROR}${deferredId}:[${values}]
`));
								lastSentIndex = encoder.stringified.length - 1;
							}
						});
						return processingChain;
					}).finally(() => {
						delete encoder.deferred[Number(deferredId)];
					}));
				}
				await Promise.race(Object.values(encoder.deferred));
			}
			raceDone();
		}
		await Promise.all(Object.values(encoder.deferred));
		await processingChain;
		controller.close();
		onComplete?.();
	} });
}
async function createRequestInit(request) {
	let init = { signal: request.signal };
	if (request.method !== "GET") {
		init.method = request.method;
		let contentType = request.headers.get("Content-Type");
		if (contentType && /\bapplication\/json\b/.test(contentType)) {
			init.headers = { "Content-Type": contentType };
			init.body = JSON.stringify(await request.json());
		} else if (contentType && /\btext\/plain\b/.test(contentType)) {
			init.headers = { "Content-Type": contentType };
			init.body = await request.text();
		} else if (contentType && /\bapplication\/x-www-form-urlencoded\b/.test(contentType)) init.body = new URLSearchParams(await request.text());
		else init.body = await request.formData();
	}
	return init;
}
function escapeHtml(html) {
	return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
function invariant2(value, message) {
	if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function StreamTransfer({ context, identifier, reader, textDecoder, nonce }) {
	if (!context.renderMeta || !context.renderMeta.didRenderScripts) return null;
	if (!context.renderMeta.streamCache) context.renderMeta.streamCache = {};
	let { streamCache } = context.renderMeta;
	let promise = streamCache[identifier];
	if (!promise) promise = streamCache[identifier] = reader.read().then((result) => {
		streamCache[identifier].result = {
			done: result.done,
			value: textDecoder.decode(result.value, { stream: true })
		};
	}).catch((e) => {
		streamCache[identifier].error = e;
	});
	if (promise.error) throw promise.error;
	if (promise.result === void 0) throw promise;
	let { done, value } = promise.result;
	let scriptTag = value ? /* @__PURE__ */ import_react$11.createElement("script", {
		nonce,
		dangerouslySetInnerHTML: { __html: `window.__reactRouterContext.streamController.enqueue(${escapeHtml(JSON.stringify(value))});` }
	}) : null;
	if (done) return /* @__PURE__ */ import_react$11.createElement(import_react$11.Fragment, null, scriptTag, /* @__PURE__ */ import_react$11.createElement("script", {
		nonce,
		dangerouslySetInnerHTML: { __html: `window.__reactRouterContext.streamController.close();` }
	}));
	else return /* @__PURE__ */ import_react$11.createElement(import_react$11.Fragment, null, scriptTag, /* @__PURE__ */ import_react$11.createElement(import_react$11.Suspense, null, /* @__PURE__ */ import_react$11.createElement(StreamTransfer, {
		context,
		identifier: identifier + 1,
		reader,
		textDecoder,
		nonce
	})));
}
function getTurboStreamSingleFetchDataStrategy(getRouter, manifest, routeModules, ssr, basename, trailingSlashAware) {
	let dataStrategy = getSingleFetchDataStrategyImpl(getRouter, (match) => {
		let manifestRoute = manifest.routes[match.route.id];
		invariant2(manifestRoute, "Route not found in manifest");
		return {
			hasLoader: manifestRoute.hasLoader,
			hasClientLoader: manifestRoute.hasClientLoader
		};
	}, fetchAndDecodeViaTurboStream, ssr, basename, trailingSlashAware);
	return async (args) => args.runClientMiddleware(dataStrategy);
}
function getSingleFetchDataStrategyImpl(getRouter, getRouteInfo, fetchAndDecode, ssr, basename, trailingSlashAware, shouldAllowOptOut = () => true) {
	return async (args) => {
		let { request, matches, fetcherKey } = args;
		let router = getRouter();
		if (request.method !== "GET") return singleFetchActionStrategy(args, fetchAndDecode, basename, trailingSlashAware);
		let foundRevalidatingServerLoader = matches.some((m) => {
			let { hasLoader, hasClientLoader } = getRouteInfo(m);
			return m.shouldCallHandler() && hasLoader && !hasClientLoader;
		});
		if (!ssr && !foundRevalidatingServerLoader) return nonSsrStrategy(args, getRouteInfo, fetchAndDecode, basename, trailingSlashAware);
		if (fetcherKey) return singleFetchLoaderFetcherStrategy(args, fetchAndDecode, basename, trailingSlashAware);
		return singleFetchLoaderNavigationStrategy(args, router, getRouteInfo, fetchAndDecode, ssr, basename, trailingSlashAware, shouldAllowOptOut);
	};
}
async function singleFetchActionStrategy(args, fetchAndDecode, basename, trailingSlashAware) {
	let actionMatch = args.matches.find((m) => m.shouldCallHandler());
	invariant2(actionMatch, "No action match found");
	let actionStatus = void 0;
	let result = await actionMatch.resolve(async (handler) => {
		return await handler(async () => {
			let { data: data2, status } = await fetchAndDecode(args, basename, trailingSlashAware, [actionMatch.route.id]);
			actionStatus = status;
			return unwrapSingleFetchResult(data2, actionMatch.route.id);
		});
	});
	if (isResponse(result.result) || isRouteErrorResponse(result.result) || isDataWithResponseInit(result.result)) return { [actionMatch.route.id]: result };
	return { [actionMatch.route.id]: {
		type: result.type,
		result: data(result.result, actionStatus)
	} };
}
async function nonSsrStrategy(args, getRouteInfo, fetchAndDecode, basename, trailingSlashAware) {
	let matchesToLoad = args.matches.filter((m) => m.shouldCallHandler());
	let results = {};
	await Promise.all(matchesToLoad.map((m) => m.resolve(async (handler) => {
		try {
			let { hasClientLoader } = getRouteInfo(m);
			let routeId = m.route.id;
			let result = hasClientLoader ? await handler(async () => {
				let { data: data2 } = await fetchAndDecode(args, basename, trailingSlashAware, [routeId]);
				return unwrapSingleFetchResult(data2, routeId);
			}) : await handler();
			results[m.route.id] = {
				type: "data",
				result
			};
		} catch (e) {
			results[m.route.id] = {
				type: "error",
				result: e
			};
		}
	})));
	return results;
}
async function singleFetchLoaderNavigationStrategy(args, router, getRouteInfo, fetchAndDecode, ssr, basename, trailingSlashAware, shouldAllowOptOut = () => true) {
	let routesParams = /* @__PURE__ */ new Set();
	let foundOptOutRoute = false;
	let routeDfds = args.matches.map(() => createDeferred2());
	let singleFetchDfd = createDeferred2();
	let results = {};
	let resolvePromise = Promise.all(args.matches.map(async (m, i) => m.resolve(async (handler) => {
		routeDfds[i].resolve();
		let routeId = m.route.id;
		let { hasLoader, hasClientLoader } = getRouteInfo(m);
		let defaultShouldRevalidate = !m.shouldRevalidateArgs || m.shouldRevalidateArgs.actionStatus == null || m.shouldRevalidateArgs.actionStatus < 400;
		if (!m.shouldCallHandler(defaultShouldRevalidate)) {
			foundOptOutRoute || (foundOptOutRoute = m.shouldRevalidateArgs != null && hasLoader);
			return;
		}
		if (shouldAllowOptOut(m) && hasClientLoader) {
			if (hasLoader) foundOptOutRoute = true;
			try {
				results[routeId] = {
					type: "data",
					result: await handler(async () => {
						let { data: data2 } = await fetchAndDecode(args, basename, trailingSlashAware, [routeId]);
						return unwrapSingleFetchResult(data2, routeId);
					})
				};
			} catch (e) {
				results[routeId] = {
					type: "error",
					result: e
				};
			}
			return;
		}
		if (hasLoader) routesParams.add(routeId);
		try {
			results[routeId] = {
				type: "data",
				result: await handler(async () => {
					return unwrapSingleFetchResult(await singleFetchDfd.promise, routeId);
				})
			};
		} catch (e) {
			results[routeId] = {
				type: "error",
				result: e
			};
		}
	})));
	await Promise.all(routeDfds.map((d) => d.promise));
	if ((!router.state.initialized && router.state.navigation.state === "idle" || routesParams.size === 0) && !window.__reactRouterHdrActive) singleFetchDfd.resolve({ routes: {} });
	else {
		let targetRoutes = ssr && foundOptOutRoute && routesParams.size > 0 ? [...routesParams.keys()] : void 0;
		try {
			let data2 = await fetchAndDecode(args, basename, trailingSlashAware, targetRoutes);
			singleFetchDfd.resolve(data2.data);
		} catch (e) {
			singleFetchDfd.reject(e);
		}
	}
	await resolvePromise;
	await bubbleMiddlewareErrors(singleFetchDfd.promise, args.matches, routesParams, results);
	return results;
}
async function bubbleMiddlewareErrors(singleFetchPromise, matches, routesParams, results) {
	try {
		let middlewareError;
		let fetchedData = await singleFetchPromise;
		if ("routes" in fetchedData) {
			for (let match of matches) if (match.route.id in fetchedData.routes) {
				let routeResult = fetchedData.routes[match.route.id];
				if ("error" in routeResult) {
					middlewareError = routeResult.error;
					if (results[match.route.id]?.result == null) results[match.route.id] = {
						type: "error",
						result: middlewareError
					};
					break;
				}
			}
		}
		if (middlewareError !== void 0) Array.from(routesParams.values()).forEach((routeId) => {
			if (results[routeId].result instanceof SingleFetchNoResultError) results[routeId].result = middlewareError;
		});
	} catch (e) {}
}
async function singleFetchLoaderFetcherStrategy(args, fetchAndDecode, basename, trailingSlashAware) {
	let fetcherMatch = args.matches.find((m) => m.shouldCallHandler());
	invariant2(fetcherMatch, "No fetcher match found");
	let routeId = fetcherMatch.route.id;
	let result = await fetcherMatch.resolve(async (handler) => handler(async () => {
		let { data: data2 } = await fetchAndDecode(args, basename, trailingSlashAware, [routeId]);
		return unwrapSingleFetchResult(data2, routeId);
	}));
	return { [fetcherMatch.route.id]: result };
}
function stripIndexParam$1(url) {
	let indexValues = url.searchParams.getAll("index");
	url.searchParams.delete("index");
	let indexValuesToKeep = [];
	for (let indexValue of indexValues) if (indexValue) indexValuesToKeep.push(indexValue);
	for (let toKeep of indexValuesToKeep) url.searchParams.append("index", toKeep);
	return url;
}
function singleFetchUrl(reqUrl, basename, trailingSlashAware, extension) {
	let url = typeof reqUrl === "string" ? new URL(reqUrl, typeof window === "undefined" ? "server://singlefetch/" : window.location.origin) : reqUrl;
	if (trailingSlashAware) if (url.pathname.endsWith("/")) url.pathname = `${url.pathname}_.${extension}`;
	else url.pathname = `${url.pathname}.${extension}`;
	else if (url.pathname === "/") url.pathname = `_root.${extension}`;
	else if (basename && stripBasename(url.pathname, basename) === "/") url.pathname = `${removeTrailingSlash(basename)}/_root.${extension}`;
	else url.pathname = `${removeTrailingSlash(url.pathname)}.${extension}`;
	return url;
}
async function fetchAndDecodeViaTurboStream(args, basename, trailingSlashAware, targetRoutes) {
	let { request } = args;
	let url = singleFetchUrl(request.url, basename, trailingSlashAware, "data");
	if (request.method === "GET") {
		url = stripIndexParam$1(url);
		if (targetRoutes) url.searchParams.set("_routes", targetRoutes.join(","));
	}
	let res = await fetch(url, await createRequestInit(request));
	if (res.status >= 400 && !res.headers.has("X-Remix-Response")) throw new ErrorResponseImpl(res.status, res.statusText, await res.text());
	if (res.status === 204 && res.headers.has("X-Remix-Redirect")) return {
		status: 202,
		data: { redirect: {
			redirect: res.headers.get("X-Remix-Redirect"),
			status: Number(res.headers.get("X-Remix-Status") || "302"),
			revalidate: res.headers.get("X-Remix-Revalidate") === "true",
			reload: res.headers.get("X-Remix-Reload-Document") === "true",
			replace: res.headers.get("X-Remix-Replace") === "true"
		} }
	};
	if (NO_BODY_STATUS_CODES.has(res.status)) {
		let routes = {};
		if (targetRoutes && request.method !== "GET") routes[targetRoutes[0]] = { data: void 0 };
		return {
			status: res.status,
			data: { routes }
		};
	}
	invariant2(res.body, "No response body to decode");
	try {
		let decoded = await decodeViaTurboStream(res.body, window);
		let data2;
		if (request.method === "GET") {
			let typed = decoded.value;
			if (SingleFetchRedirectSymbol in typed) data2 = { redirect: typed[SingleFetchRedirectSymbol] };
			else data2 = { routes: typed };
		} else {
			let typed = decoded.value;
			let routeId = targetRoutes?.[0];
			invariant2(routeId, "No routeId found for single fetch call decoding");
			if ("redirect" in typed) data2 = { redirect: typed };
			else data2 = { routes: { [routeId]: typed } };
		}
		return {
			status: res.status,
			data: data2
		};
	} catch (e) {
		throw new Error("Unable to decode turbo-stream response");
	}
}
function decodeViaTurboStream(body, global) {
	return decode(body, { plugins: [(type, ...rest) => {
		if (type === "SanitizedError") {
			let [name, message, stack] = rest;
			let Constructor = Error;
			if (name && SUPPORTED_ERROR_TYPES.includes(name) && name in global && typeof global[name] === "function") Constructor = global[name];
			let error = new Constructor(message);
			error.stack = stack;
			return { value: error };
		}
		if (type === "ErrorResponse") {
			let [data2, status, statusText] = rest;
			return { value: new ErrorResponseImpl(status, statusText, data2) };
		}
		if (type === "SingleFetchRedirect") return { value: { [SingleFetchRedirectSymbol]: rest[0] } };
		if (type === "SingleFetchClassInstance") return { value: rest[0] };
		if (type === "SingleFetchFallback") return { value: void 0 };
	}] });
}
function unwrapSingleFetchResult(result, routeId) {
	if ("redirect" in result) {
		let { redirect: location, revalidate, reload, replace: replace2, status } = result.redirect;
		throw redirect(location, {
			status,
			headers: {
				...revalidate ? { "X-Remix-Revalidate": "yes" } : null,
				...reload ? { "X-Remix-Reload-Document": "yes" } : null,
				...replace2 ? { "X-Remix-Replace": "yes" } : null
			}
		});
	}
	let routeResult = result.routes[routeId];
	if (routeResult == null) throw new SingleFetchNoResultError(`No result found for routeId "${routeId}"`);
	else if ("error" in routeResult) throw routeResult.error;
	else if ("data" in routeResult) return routeResult.data;
	else throw new Error(`Invalid response found for routeId "${routeId}"`);
}
function createDeferred2() {
	let resolve;
	let reject;
	let promise = new Promise((res, rej) => {
		resolve = async (val) => {
			res(val);
			try {
				await promise;
			} catch (e) {}
		};
		reject = async (error) => {
			rej(error);
			try {
				await promise;
			} catch (e) {}
		};
	});
	return {
		promise,
		resolve,
		reject
	};
}
async function loadRouteModule(route, routeModulesCache) {
	if (route.id in routeModulesCache) return routeModulesCache[route.id];
	try {
		let routeModule = await import(
			/* @vite-ignore */
			/* webpackIgnore: true */
			route.module
);
		routeModulesCache[route.id] = routeModule;
		return routeModule;
	} catch (error) {
		console.error(`Error loading route module \`${route.module}\`, reloading page...`);
		console.error(error);
		if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && void 0);
		window.location.reload();
		return new Promise(() => {});
	}
}
function getKeyedLinksForMatches(matches, routeModules, manifest) {
	return dedupeLinkDescriptors(matches.map((match) => {
		let module = routeModules[match.route.id];
		let route = manifest.routes[match.route.id];
		return [route && route.css ? route.css.map((href) => ({
			rel: "stylesheet",
			href
		})) : [], module?.links?.() || []];
	}).flat(2), getModuleLinkHrefs(matches, manifest));
}
function getRouteCssDescriptors(route) {
	if (!route.css) return [];
	return route.css.map((href) => ({
		rel: "stylesheet",
		href
	}));
}
async function prefetchRouteCss(route) {
	if (!route.css) return;
	let descriptors = getRouteCssDescriptors(route);
	await Promise.all(descriptors.map(prefetchStyleLink));
}
async function prefetchStyleLinks(route, routeModule) {
	if (!route.css && !routeModule.links || !isPreloadSupported()) return;
	let descriptors = [];
	if (route.css) descriptors.push(...getRouteCssDescriptors(route));
	if (routeModule.links) descriptors.push(...routeModule.links());
	if (descriptors.length === 0) return;
	let styleLinks = [];
	for (let descriptor of descriptors) if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") styleLinks.push({
		...descriptor,
		rel: "preload",
		as: "style"
	});
	await Promise.all(styleLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
	return new Promise((resolve) => {
		if (descriptor.media && !window.matchMedia(descriptor.media).matches || document.querySelector(`link[rel="stylesheet"][href="${descriptor.href}"]`)) return resolve();
		let link = document.createElement("link");
		Object.assign(link, descriptor);
		function removeLink() {
			if (document.head.contains(link)) document.head.removeChild(link);
		}
		link.onload = () => {
			removeLink();
			resolve();
		};
		link.onerror = () => {
			removeLink();
			resolve();
		};
		document.head.appendChild(link);
	});
}
function isPageLinkDescriptor(object) {
	return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
	if (object == null) return false;
	if (object.href == null) return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
	return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
	return dedupeLinkDescriptors((await Promise.all(matches.map(async (match) => {
		let route = manifest.routes[match.route.id];
		if (route) {
			let mod = await loadRouteModule(route, routeModules);
			return mod.links ? mod.links() : [];
		}
		return [];
	}))).flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((link) => link.rel === "stylesheet" ? {
		...link,
		rel: "prefetch",
		as: "style"
	} : {
		...link,
		rel: "prefetch"
	}));
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
	let isNew = (match, index) => {
		if (!currentMatches[index]) return true;
		return match.route.id !== currentMatches[index].route.id;
	};
	let matchPathChanged = (match, index) => {
		return currentMatches[index].pathname !== match.pathname || currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"];
	};
	if (mode === "assets") return nextMatches.filter((match, index) => isNew(match, index) || matchPathChanged(match, index));
	if (mode === "data") return nextMatches.filter((match, index) => {
		let manifestRoute = manifest.routes[match.route.id];
		if (!manifestRoute || !manifestRoute.hasLoader) return false;
		if (isNew(match, index) || matchPathChanged(match, index)) return true;
		if (match.route.shouldRevalidate) {
			let routeChoice = match.route.shouldRevalidate({
				currentUrl: new URL(location.pathname + location.search + location.hash, window.origin),
				currentParams: currentMatches[0]?.params || {},
				nextUrl: new URL(page, window.origin),
				nextParams: match.params,
				defaultShouldRevalidate: true
			});
			if (typeof routeChoice === "boolean") return routeChoice;
		}
		return true;
	});
	return [];
}
function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
	return dedupeHrefs(matches.map((match) => {
		let route = manifest.routes[match.route.id];
		if (!route) return [];
		let hrefs = [route.module];
		if (route.clientActionModule) hrefs = hrefs.concat(route.clientActionModule);
		if (route.clientLoaderModule) hrefs = hrefs.concat(route.clientLoaderModule);
		if (includeHydrateFallback && route.hydrateFallbackModule) hrefs = hrefs.concat(route.hydrateFallbackModule);
		if (route.imports) hrefs = hrefs.concat(route.imports);
		return hrefs;
	}).flat(1));
}
function dedupeHrefs(hrefs) {
	return [...new Set(hrefs)];
}
function sortKeys(obj) {
	let sorted = {};
	let keys = Object.keys(obj).sort();
	for (let key of keys) sorted[key] = obj[key];
	return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
	let set = /* @__PURE__ */ new Set();
	let preloadsSet = new Set(preloads);
	return descriptors.reduce((deduped, descriptor) => {
		if (preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href)) return deduped;
		let key = JSON.stringify(sortKeys(descriptor));
		if (!set.has(key)) {
			set.add(key);
			deduped.push({
				key,
				link: descriptor
			});
		}
		return deduped;
	}, []);
}
function isPreloadSupported() {
	if (_isPreloadSupported !== void 0) return _isPreloadSupported;
	let el = document.createElement("link");
	_isPreloadSupported = el.relList.supports("preload");
	el = null;
	return _isPreloadSupported;
}
function RemixRootDefaultHydrateFallback() {
	return /* @__PURE__ */ import_react$16.createElement(BoundaryShell, {
		title: "Loading...",
		renderScripts: true
	}, /* @__PURE__ */ import_react$16.createElement("script", { dangerouslySetInnerHTML: { __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            ` } }));
}
function groupRoutesByParentId$1(manifest) {
	let routes = {};
	Object.values(manifest).forEach((route) => {
		if (route) {
			let parentId = route.parentId || "";
			if (!routes[parentId]) routes[parentId] = [];
			routes[parentId].push(route);
		}
	});
	return routes;
}
function getRouteComponents(route, routeModule, isSpaMode) {
	let Component4 = getRouteModuleComponent(routeModule);
	let HydrateFallback = routeModule.HydrateFallback && (!isSpaMode || route.id === "root") ? routeModule.HydrateFallback : route.id === "root" ? RemixRootDefaultHydrateFallback : void 0;
	let ErrorBoundary = routeModule.ErrorBoundary ? routeModule.ErrorBoundary : route.id === "root" ? () => /* @__PURE__ */ import_react$15.createElement(RemixRootDefaultErrorBoundary, { error: useRouteError() }) : void 0;
	if (route.id === "root" && routeModule.Layout) return {
		...Component4 ? { element: /* @__PURE__ */ import_react$15.createElement(routeModule.Layout, null, /* @__PURE__ */ import_react$15.createElement(Component4, null)) } : { Component: Component4 },
		...ErrorBoundary ? { errorElement: /* @__PURE__ */ import_react$15.createElement(routeModule.Layout, null, /* @__PURE__ */ import_react$15.createElement(ErrorBoundary, null)) } : { ErrorBoundary },
		...HydrateFallback ? { hydrateFallbackElement: /* @__PURE__ */ import_react$15.createElement(routeModule.Layout, null, /* @__PURE__ */ import_react$15.createElement(HydrateFallback, null)) } : { HydrateFallback }
	};
	return {
		Component: Component4,
		ErrorBoundary,
		HydrateFallback
	};
}
function createServerRoutes(manifest, routeModules, future, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId$1(manifest), spaModeLazyPromise = Promise.resolve({ Component: () => null })) {
	return (routesByParentId[parentId] || []).map((route) => {
		let routeModule = routeModules[route.id];
		invariant2(routeModule, "No `routeModule` available to create server routes");
		let dataRoute = {
			...getRouteComponents(route, routeModule, isSpaMode),
			caseSensitive: route.caseSensitive,
			id: route.id,
			index: route.index,
			path: route.path,
			handle: routeModule.handle,
			lazy: isSpaMode ? () => spaModeLazyPromise : void 0,
			loader: route.hasLoader || route.hasClientLoader ? () => null : void 0
		};
		let children = createServerRoutes(manifest, routeModules, future, isSpaMode, route.id, routesByParentId, spaModeLazyPromise);
		if (children.length > 0) dataRoute.children = children;
		return dataRoute;
	});
}
function createClientRoutesWithHMRRevalidationOptOut(needsRevalidation, manifest, routeModulesCache, initialState, ssr, isSpaMode) {
	return createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, "", groupRoutesByParentId$1(manifest), needsRevalidation);
}
function preventInvalidServerHandlerCall$1(type, route) {
	if (type === "loader" && !route.hasLoader || type === "action" && !route.hasAction) {
		let msg = `You are trying to call ${type === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${type} (routeId: "${route.id}")`;
		console.error(msg);
		throw new ErrorResponseImpl(400, "Bad Request", new Error(msg), true);
	}
}
function noActionDefinedError(type, routeId) {
	let article = type === "clientAction" ? "a" : "an";
	let msg = `Route "${routeId}" does not have ${article} ${type}, but you are trying to submit to it. To fix this, please add ${article} \`${type}\` function to the route`;
	console.error(msg);
	throw new ErrorResponseImpl(405, "Method Not Allowed", new Error(msg), true);
}
function createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId$1(manifest), needsRevalidation) {
	return (routesByParentId[parentId] || []).map((route) => {
		let routeModule = routeModulesCache[route.id];
		function fetchServerHandler(singleFetch) {
			invariant2(typeof singleFetch === "function", "No single fetch function available for route handler");
			return singleFetch();
		}
		function fetchServerLoader(singleFetch) {
			if (!route.hasLoader) return Promise.resolve(null);
			return fetchServerHandler(singleFetch);
		}
		function fetchServerAction(singleFetch) {
			if (!route.hasAction) throw noActionDefinedError("action", route.id);
			return fetchServerHandler(singleFetch);
		}
		function prefetchModule(modulePath) {
			import(
				/* @vite-ignore */
				/* webpackIgnore: true */
				modulePath
);
		}
		function prefetchRouteModuleChunks(route2) {
			if (route2.clientActionModule) prefetchModule(route2.clientActionModule);
			if (route2.clientLoaderModule) prefetchModule(route2.clientLoaderModule);
		}
		async function prefetchStylesAndCallHandler(handler) {
			let cachedModule = routeModulesCache[route.id];
			let linkPrefetchPromise = cachedModule ? prefetchStyleLinks(route, cachedModule) : Promise.resolve();
			try {
				return handler();
			} finally {
				await linkPrefetchPromise;
			}
		}
		let dataRoute = {
			id: route.id,
			index: route.index,
			path: route.path
		};
		if (routeModule) {
			Object.assign(dataRoute, {
				...dataRoute,
				...getRouteComponents(route, routeModule, isSpaMode),
				middleware: routeModule.clientMiddleware,
				handle: routeModule.handle,
				shouldRevalidate: getShouldRevalidateFunction(dataRoute.path, routeModule, route, ssr, needsRevalidation)
			});
			let hasInitialData = initialState && initialState.loaderData && route.id in initialState.loaderData;
			let initialData = hasInitialData ? initialState?.loaderData?.[route.id] : void 0;
			let hasInitialError = initialState && initialState.errors && route.id in initialState.errors;
			let initialError = hasInitialError ? initialState?.errors?.[route.id] : void 0;
			let isHydrationRequest = needsRevalidation == null && (routeModule.clientLoader?.hydrate === true || !route.hasLoader);
			dataRoute.loader = async ({ request, params, context, pattern, url }, singleFetch) => {
				let _isHydrationRequest = isHydrationRequest;
				isHydrationRequest = false;
				return await prefetchStylesAndCallHandler(async () => {
					invariant2(routeModule, "No `routeModule` available for critical-route loader");
					if (!routeModule.clientLoader) return fetchServerLoader(singleFetch);
					return routeModule.clientLoader({
						request,
						params,
						context,
						pattern,
						url,
						async serverLoader() {
							preventInvalidServerHandlerCall$1("loader", route);
							if (_isHydrationRequest) {
								if (hasInitialData) return initialData;
								if (hasInitialError) throw initialError;
							}
							return fetchServerLoader(singleFetch);
						}
					});
				});
			};
			dataRoute.loader.hydrate = shouldHydrateRouteLoader(route.id, routeModule.clientLoader, route.hasLoader, isSpaMode);
			dataRoute.action = ({ request, params, context, pattern, url }, singleFetch) => {
				return prefetchStylesAndCallHandler(async () => {
					invariant2(routeModule, "No `routeModule` available for critical-route action");
					if (!routeModule.clientAction) {
						if (isSpaMode) throw noActionDefinedError("clientAction", route.id);
						return fetchServerAction(singleFetch);
					}
					return routeModule.clientAction({
						request,
						params,
						context,
						pattern,
						url,
						async serverAction() {
							preventInvalidServerHandlerCall$1("action", route);
							return fetchServerAction(singleFetch);
						}
					});
				});
			};
		} else {
			if (!route.hasClientLoader) dataRoute.loader = (_, singleFetch) => prefetchStylesAndCallHandler(() => {
				return fetchServerLoader(singleFetch);
			});
			if (!route.hasClientAction) dataRoute.action = (_, singleFetch) => prefetchStylesAndCallHandler(() => {
				if (isSpaMode) throw noActionDefinedError("clientAction", route.id);
				return fetchServerAction(singleFetch);
			});
			let lazyRoutePromise;
			async function getLazyRoute() {
				if (lazyRoutePromise) return await lazyRoutePromise;
				lazyRoutePromise = (async () => {
					if (route.clientLoaderModule || route.clientActionModule) await new Promise((resolve) => setTimeout(resolve, 0));
					let routeModulePromise = loadRouteModuleWithBlockingLinks(route, routeModulesCache);
					prefetchRouteModuleChunks(route);
					return await routeModulePromise;
				})();
				return await lazyRoutePromise;
			}
			dataRoute.lazy = {
				loader: route.hasClientLoader ? async () => {
					let { clientLoader } = route.clientLoaderModule ? await import(
						/* @vite-ignore */
						/* webpackIgnore: true */
						route.clientLoaderModule
) : await getLazyRoute();
					invariant2(clientLoader, "No `clientLoader` export found");
					return (args, singleFetch) => clientLoader({
						...args,
						async serverLoader() {
							preventInvalidServerHandlerCall$1("loader", route);
							return fetchServerLoader(singleFetch);
						}
					});
				} : void 0,
				action: route.hasClientAction ? async () => {
					let clientActionPromise = route.clientActionModule ? import(
						/* @vite-ignore */
						/* webpackIgnore: true */
						route.clientActionModule
) : getLazyRoute();
					prefetchRouteModuleChunks(route);
					let { clientAction } = await clientActionPromise;
					invariant2(clientAction, "No `clientAction` export found");
					return (args, singleFetch) => clientAction({
						...args,
						async serverAction() {
							preventInvalidServerHandlerCall$1("action", route);
							return fetchServerAction(singleFetch);
						}
					});
				} : void 0,
				middleware: route.hasClientMiddleware ? async () => {
					let { clientMiddleware } = route.clientMiddlewareModule ? await import(
						/* @vite-ignore */
						/* webpackIgnore: true */
						route.clientMiddlewareModule
) : await getLazyRoute();
					invariant2(clientMiddleware, "No `clientMiddleware` export found");
					return clientMiddleware;
				} : void 0,
				shouldRevalidate: async () => {
					let lazyRoute = await getLazyRoute();
					return getShouldRevalidateFunction(dataRoute.path, lazyRoute, route, ssr, needsRevalidation);
				},
				handle: async () => (await getLazyRoute()).handle,
				Component: async () => (await getLazyRoute()).Component,
				ErrorBoundary: route.hasErrorBoundary ? async () => (await getLazyRoute()).ErrorBoundary : void 0
			};
		}
		let children = createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, route.id, routesByParentId, needsRevalidation);
		if (children.length > 0) dataRoute.children = children;
		return dataRoute;
	});
}
function getShouldRevalidateFunction(path, route, manifestRoute, ssr, needsRevalidation) {
	if (needsRevalidation) return wrapShouldRevalidateForHdr(manifestRoute.id, route.shouldRevalidate, needsRevalidation);
	if (!ssr && manifestRoute.hasLoader && !manifestRoute.hasClientLoader) {
		let myParams = path ? compilePath(path)[1].map((p) => p.paramName) : [];
		const didParamsChange = (opts) => myParams.some((p) => opts.currentParams[p] !== opts.nextParams[p]);
		if (route.shouldRevalidate) {
			let fn = route.shouldRevalidate;
			return (opts) => fn({
				...opts,
				defaultShouldRevalidate: didParamsChange(opts)
			});
		} else return (opts) => didParamsChange(opts);
	}
	return route.shouldRevalidate;
}
function wrapShouldRevalidateForHdr(routeId, routeShouldRevalidate, needsRevalidation) {
	let handledRevalidation = false;
	return (arg) => {
		if (!handledRevalidation) {
			handledRevalidation = true;
			return needsRevalidation.has(routeId);
		}
		return routeShouldRevalidate ? routeShouldRevalidate(arg) : arg.defaultShouldRevalidate;
	};
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
	let routeModulePromise = loadRouteModule(route, routeModules);
	let prefetchRouteCssPromise = prefetchRouteCss(route);
	let routeModule = await routeModulePromise;
	await Promise.all([prefetchRouteCssPromise, prefetchStyleLinks(route, routeModule)]);
	return {
		Component: getRouteModuleComponent(routeModule),
		ErrorBoundary: routeModule.ErrorBoundary,
		clientMiddleware: routeModule.clientMiddleware,
		clientAction: routeModule.clientAction,
		clientLoader: routeModule.clientLoader,
		handle: routeModule.handle,
		links: routeModule.links,
		meta: routeModule.meta,
		shouldRevalidate: routeModule.shouldRevalidate
	};
}
function getRouteModuleComponent(routeModule) {
	if (routeModule.default == null) return void 0;
	if (!(typeof routeModule.default === "object" && Object.keys(routeModule.default).length === 0)) return routeModule.default;
}
function shouldHydrateRouteLoader(routeId, clientLoader, hasLoader, isSpaMode) {
	return isSpaMode && routeId !== "root" || clientLoader != null && (clientLoader.hydrate === true || hasLoader !== true);
}
function isFogOfWarEnabled(routeDiscovery, ssr) {
	return routeDiscovery.mode === "lazy" && ssr === true;
}
function getPartialManifest({ sri, ...manifest }, router) {
	let routeIds = new Set(router.state.matches.map((m) => m.route.id));
	let segments = router.state.location.pathname.split("/").filter(Boolean);
	let paths = ["/"];
	segments.pop();
	while (segments.length > 0) {
		paths.push(`/${segments.join("/")}`);
		segments.pop();
	}
	paths.forEach((path) => {
		let matches = matchRoutesImpl(router.routes, path, router.basename || "/", false, router.branches);
		if (matches) matches.forEach((m) => routeIds.add(m.route.id));
	});
	let initialRoutes = [...routeIds].reduce((acc, id) => Object.assign(acc, { [id]: manifest.routes[id] }), {});
	return {
		...manifest,
		routes: initialRoutes,
		sri: sri ? true : void 0
	};
}
function getPatchRoutesOnNavigationFunction(getRouter, manifest, routeModules, ssr, routeDiscovery, isSpaMode, basename) {
	if (!isFogOfWarEnabled(routeDiscovery, ssr)) return;
	return async ({ path, patch, signal, fetcherKey }) => {
		if (discoveredPaths$1.has(path)) return;
		let { state } = getRouter();
		await fetchAndApplyManifestPatches$1([path], fetcherKey ? window.location.href : createPath(state.navigation.location || state.location), manifest, routeModules, ssr, isSpaMode, basename, routeDiscovery.manifestPath, patch, signal);
	};
}
function useFogOFWarDiscovery(router, manifest, routeModules, ssr, routeDiscovery, isSpaMode) {
	import_react$14.useEffect(() => {
		if (!isFogOfWarEnabled(routeDiscovery, ssr) || window.navigator?.connection?.saveData === true) return;
		function registerElement(el) {
			let path = el.tagName === "FORM" ? el.getAttribute("action") : el.getAttribute("href");
			if (!path) return;
			let pathname = el.tagName === "A" ? el.pathname : new URL(path, window.location.origin).pathname;
			if (!discoveredPaths$1.has(pathname)) nextPaths$1.add(pathname);
		}
		async function fetchPatches() {
			document.querySelectorAll("a[data-discover], form[data-discover]").forEach(registerElement);
			let lazyPaths = Array.from(nextPaths$1.keys()).filter((path) => {
				if (discoveredPaths$1.has(path)) {
					nextPaths$1.delete(path);
					return false;
				}
				return true;
			});
			if (lazyPaths.length === 0) return;
			try {
				await fetchAndApplyManifestPatches$1(lazyPaths, null, manifest, routeModules, ssr, isSpaMode, router.basename, routeDiscovery.manifestPath, router.patchRoutes);
			} catch (e) {
				console.error("Failed to fetch manifest patches", e);
			}
		}
		let debouncedFetchPatches = debounce$1(fetchPatches, 100);
		fetchPatches();
		let observer = new MutationObserver(() => debouncedFetchPatches());
		observer.observe(document.documentElement, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: [
				"data-discover",
				"href",
				"action"
			]
		});
		return () => observer.disconnect();
	}, [
		ssr,
		isSpaMode,
		manifest,
		routeModules,
		router,
		routeDiscovery
	]);
}
function getManifestPath(_manifestPath, basename) {
	let manifestPath = _manifestPath || "/__manifest";
	return basename == null ? manifestPath : joinPaths([basename, manifestPath]);
}
async function fetchAndApplyManifestPatches$1(paths, errorReloadPath, manifest, routeModules, ssr, isSpaMode, basename, manifestPath, patchRoutes, signal) {
	const searchParams = new URLSearchParams();
	searchParams.set("paths", paths.sort().join(","));
	searchParams.set("version", manifest.version);
	let url = new URL(getManifestPath(manifestPath, basename), window.location.origin);
	url.search = searchParams.toString();
	if (url.toString().length > 7680) {
		nextPaths$1.clear();
		return;
	}
	let serverPatches;
	try {
		let res = await fetch(url, { signal });
		if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
		else if (res.status === 204 && res.headers.has("X-Remix-Reload-Document")) {
			if (!errorReloadPath) {
				console.warn("Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.");
				return;
			}
			try {
				if (sessionStorage.getItem(MANIFEST_VERSION_STORAGE_KEY) === manifest.version) {
					console.error("Unable to discover routes due to manifest version mismatch.");
					return;
				}
				sessionStorage.setItem(MANIFEST_VERSION_STORAGE_KEY, manifest.version);
			} catch {}
			window.location.href = errorReloadPath;
			console.warn("Detected manifest version mismatch, reloading...");
			await new Promise(() => {});
		} else if (res.status >= 400) throw new Error(await res.text());
		try {
			sessionStorage.removeItem(MANIFEST_VERSION_STORAGE_KEY);
		} catch {}
		serverPatches = await res.json();
	} catch (e) {
		if (signal?.aborted) return;
		throw e;
	}
	let knownRoutes = new Set(Object.keys(manifest.routes));
	let patches = Object.values(serverPatches).reduce((acc, route) => {
		if (route && !knownRoutes.has(route.id)) acc[route.id] = route;
		return acc;
	}, {});
	Object.assign(manifest.routes, patches);
	paths.forEach((p) => addToFifoQueue$1(p, discoveredPaths$1));
	let parentIds = /* @__PURE__ */ new Set();
	Object.values(patches).forEach((patch) => {
		if (patch && (!patch.parentId || !patches[patch.parentId])) parentIds.add(patch.parentId);
	});
	parentIds.forEach((parentId) => patchRoutes(parentId || null, createClientRoutes(patches, routeModules, null, ssr, isSpaMode, parentId)));
}
function addToFifoQueue$1(path, queue) {
	if (queue.size >= discoveredPathsMaxSize$1) {
		let first = queue.values().next().value;
		queue.delete(first);
	}
	queue.add(path);
}
function debounce$1(callback, wait) {
	let timeoutId;
	return (...args) => {
		window.clearTimeout(timeoutId);
		timeoutId = window.setTimeout(() => callback(...args), wait);
	};
}
function useDataRouterContext2() {
	let context = import_react$13.useContext(DataRouterContext);
	invariant2(context, "You must render this element inside a <DataRouterContext.Provider> element");
	return context;
}
function useDataRouterStateContext() {
	let context = import_react$13.useContext(DataRouterStateContext);
	invariant2(context, "You must render this element inside a <DataRouterStateContext.Provider> element");
	return context;
}
function useFrameworkContext() {
	let context = import_react$13.useContext(FrameworkContext);
	invariant2(context, "You must render this element inside a <HydratedRouter> element");
	return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
	let frameworkContext = import_react$13.useContext(FrameworkContext);
	let [maybePrefetch, setMaybePrefetch] = import_react$13.useState(false);
	let [shouldPrefetch, setShouldPrefetch] = import_react$13.useState(false);
	let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
	let ref = import_react$13.useRef(null);
	import_react$13.useEffect(() => {
		if (prefetch === "render") setShouldPrefetch(true);
		if (prefetch === "viewport") {
			let callback = (entries) => {
				entries.forEach((entry) => {
					setShouldPrefetch(entry.isIntersecting);
				});
			};
			let observer = new IntersectionObserver(callback, { threshold: .5 });
			if (ref.current) observer.observe(ref.current);
			return () => {
				observer.disconnect();
			};
		}
	}, [prefetch]);
	import_react$13.useEffect(() => {
		if (maybePrefetch) {
			let id = setTimeout(() => {
				setShouldPrefetch(true);
			}, 100);
			return () => {
				clearTimeout(id);
			};
		}
	}, [maybePrefetch]);
	let setIntent = () => {
		setMaybePrefetch(true);
	};
	let cancelIntent = () => {
		setMaybePrefetch(false);
		setShouldPrefetch(false);
	};
	if (!frameworkContext) return [
		false,
		ref,
		{}
	];
	if (prefetch !== "intent") return [
		shouldPrefetch,
		ref,
		{}
	];
	return [
		shouldPrefetch,
		ref,
		{
			onFocus: composeEventHandlers(onFocus, setIntent),
			onBlur: composeEventHandlers(onBlur, cancelIntent),
			onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
			onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
			onTouchStart: composeEventHandlers(onTouchStart, setIntent)
		}
	];
}
function composeEventHandlers(theirHandler, ourHandler) {
	return (event) => {
		theirHandler && theirHandler(event);
		if (!event.defaultPrevented) ourHandler(event);
	};
}
function getActiveMatches(matches, errors, isSpaMode) {
	if (isSpaMode && !isHydrated) return [matches[0]];
	if (errors) {
		let errorIdx = matches.findIndex((m) => errors[m.route.id] !== void 0);
		return matches.slice(0, errorIdx + 1);
	}
	return matches;
}
function Links({ nonce, crossOrigin }) {
	let { isSpaMode, manifest, routeModules, criticalCss } = useFrameworkContext();
	let { errors, matches: routerMatches } = useDataRouterStateContext();
	let matches = getActiveMatches(routerMatches, errors, isSpaMode);
	let keyedLinks = import_react$13.useMemo(() => getKeyedLinksForMatches(matches, routeModules, manifest), [
		matches,
		routeModules,
		manifest
	]);
	return /* @__PURE__ */ import_react$13.createElement(import_react$13.Fragment, null, typeof criticalCss === "string" ? /* @__PURE__ */ import_react$13.createElement("style", {
		[CRITICAL_CSS_DATA_ATTRIBUTE]: "",
		nonce,
		dangerouslySetInnerHTML: { __html: criticalCss }
	}) : null, typeof criticalCss === "object" ? /* @__PURE__ */ import_react$13.createElement("link", {
		[CRITICAL_CSS_DATA_ATTRIBUTE]: "",
		rel: "stylesheet",
		href: criticalCss.href,
		nonce,
		crossOrigin
	}) : null, keyedLinks.map(({ key, link }) => isPageLinkDescriptor(link) ? /* @__PURE__ */ import_react$13.createElement(PrefetchPageLinks, {
		key,
		nonce,
		...link,
		crossOrigin: link.crossOrigin ?? crossOrigin
	}) : /* @__PURE__ */ import_react$13.createElement("link", {
		key,
		nonce,
		...link,
		crossOrigin: link.crossOrigin ?? crossOrigin
	})));
}
function PrefetchPageLinks({ page, ...linkProps }) {
	let rsc = useIsRSCRouterContext();
	let { router } = useDataRouterContext2();
	let matches = import_react$13.useMemo(() => matchRoutes(router.routes, page, router.basename), [
		router.routes,
		page,
		router.basename
	]);
	if (!matches) return null;
	if (rsc) return /* @__PURE__ */ import_react$13.createElement(RSCPrefetchPageLinksImpl, {
		page,
		matches,
		...linkProps
	});
	return /* @__PURE__ */ import_react$13.createElement(PrefetchPageLinksImpl, {
		page,
		matches,
		...linkProps
	});
}
function useKeyedPrefetchLinks(matches) {
	let { manifest, routeModules } = useFrameworkContext();
	let [keyedPrefetchLinks, setKeyedPrefetchLinks] = import_react$13.useState([]);
	import_react$13.useEffect(() => {
		let interrupted = false;
		getKeyedPrefetchLinks(matches, manifest, routeModules).then((links) => {
			if (!interrupted) setKeyedPrefetchLinks(links);
		});
		return () => {
			interrupted = true;
		};
	}, [
		matches,
		manifest,
		routeModules
	]);
	return keyedPrefetchLinks;
}
function RSCPrefetchPageLinksImpl({ page, matches: nextMatches, ...linkProps }) {
	let location = useLocation$1();
	let { future } = useFrameworkContext();
	let { basename } = useDataRouterContext2();
	let dataHrefs = import_react$13.useMemo(() => {
		if (page === location.pathname + location.search + location.hash) return [];
		let url = singleFetchUrl(page, basename, future.v8_trailingSlashAwareDataRequests, "rsc");
		let hasSomeRoutesWithShouldRevalidate = false;
		let targetRoutes = [];
		for (let match of nextMatches) if (typeof match.route.shouldRevalidate === "function") hasSomeRoutesWithShouldRevalidate = true;
		else targetRoutes.push(match.route.id);
		if (hasSomeRoutesWithShouldRevalidate && targetRoutes.length > 0) url.searchParams.set("_routes", targetRoutes.join(","));
		return [url.pathname + url.search];
	}, [
		basename,
		future.v8_trailingSlashAwareDataRequests,
		page,
		location,
		nextMatches
	]);
	return /* @__PURE__ */ import_react$13.createElement(import_react$13.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ import_react$13.createElement("link", {
		key: href,
		rel: "prefetch",
		as: "fetch",
		href,
		...linkProps
	})));
}
function PrefetchPageLinksImpl({ page, matches: nextMatches, ...linkProps }) {
	let location = useLocation$1();
	let { future, manifest, routeModules } = useFrameworkContext();
	let { basename } = useDataRouterContext2();
	let { loaderData, matches } = useDataRouterStateContext();
	let newMatchesForData = import_react$13.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "data"), [
		page,
		nextMatches,
		matches,
		manifest,
		location
	]);
	let newMatchesForAssets = import_react$13.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "assets"), [
		page,
		nextMatches,
		matches,
		manifest,
		location
	]);
	let dataHrefs = import_react$13.useMemo(() => {
		if (page === location.pathname + location.search + location.hash) return [];
		let routesParams = /* @__PURE__ */ new Set();
		let foundOptOutRoute = false;
		nextMatches.forEach((m) => {
			let manifestRoute = manifest.routes[m.route.id];
			if (!manifestRoute || !manifestRoute.hasLoader) return;
			if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) foundOptOutRoute = true;
			else if (manifestRoute.hasClientLoader) foundOptOutRoute = true;
			else routesParams.add(m.route.id);
		});
		if (routesParams.size === 0) return [];
		let url = singleFetchUrl(page, basename, future.v8_trailingSlashAwareDataRequests, "data");
		if (foundOptOutRoute && routesParams.size > 0) url.searchParams.set("_routes", nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(","));
		return [url.pathname + url.search];
	}, [
		basename,
		future.v8_trailingSlashAwareDataRequests,
		loaderData,
		location,
		manifest,
		newMatchesForData,
		nextMatches,
		page,
		routeModules
	]);
	let moduleHrefs = import_react$13.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);
	let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
	return /* @__PURE__ */ import_react$13.createElement(import_react$13.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ import_react$13.createElement("link", {
		key: href,
		rel: "prefetch",
		as: "fetch",
		href,
		...linkProps
	})), moduleHrefs.map((href) => /* @__PURE__ */ import_react$13.createElement("link", {
		key: href,
		rel: "modulepreload",
		href,
		...linkProps
	})), keyedPrefetchLinks.map(({ key, link }) => /* @__PURE__ */ import_react$13.createElement("link", {
		key,
		nonce: linkProps.nonce,
		...link,
		crossOrigin: link.crossOrigin ?? linkProps.crossOrigin
	})));
}
function Meta() {
	let { isSpaMode, routeModules } = useFrameworkContext();
	let { errors, matches: routerMatches, loaderData } = useDataRouterStateContext();
	let location = useLocation$1();
	let _matches = getActiveMatches(routerMatches, errors, isSpaMode);
	let error = null;
	if (errors) error = errors[_matches[_matches.length - 1].route.id];
	let meta = [];
	let leafMeta = null;
	let matches = [];
	for (let i = 0; i < _matches.length; i++) {
		let _match = _matches[i];
		let routeId = _match.route.id;
		let data2 = loaderData[routeId];
		let params = _match.params;
		let routeModule = routeModules[routeId];
		let routeMeta = [];
		let match = {
			id: routeId,
			data: data2,
			loaderData: data2,
			meta: [],
			params: _match.params,
			pathname: _match.pathname,
			handle: _match.route.handle,
			error
		};
		matches[i] = match;
		if (routeModule?.meta) routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
			data: data2,
			loaderData: data2,
			params,
			location,
			matches,
			error
		}) : Array.isArray(routeModule.meta) ? [...routeModule.meta] : routeModule.meta;
		else if (leafMeta) routeMeta = [...leafMeta];
		routeMeta = routeMeta || [];
		if (!Array.isArray(routeMeta)) throw new Error("The route at " + _match.route.path + " returns an invalid value. All route meta functions must return an array of meta objects.\n\nTo reference the meta function API, see https://reactrouter.com/start/framework/route-module#meta");
		match.meta = routeMeta;
		matches[i] = match;
		meta = [...routeMeta];
		leafMeta = meta;
	}
	return /* @__PURE__ */ import_react$13.createElement(import_react$13.Fragment, null, meta.flat().map((metaProps) => {
		if (!metaProps) return null;
		if ("tagName" in metaProps) {
			let { tagName, ...rest } = metaProps;
			if (!isValidMetaTag(tagName)) {
				console.warn(`A meta object uses an invalid tagName: ${tagName}. Expected either 'link' or 'meta'`);
				return null;
			}
			let Comp = tagName;
			return /* @__PURE__ */ import_react$13.createElement(Comp, {
				key: JSON.stringify(rest),
				...rest
			});
		}
		if ("title" in metaProps) return /* @__PURE__ */ import_react$13.createElement("title", { key: "title" }, String(metaProps.title));
		if ("charset" in metaProps) {
			metaProps.charSet ?? (metaProps.charSet = metaProps.charset);
			delete metaProps.charset;
		}
		if ("charSet" in metaProps && metaProps.charSet != null) return typeof metaProps.charSet === "string" ? /* @__PURE__ */ import_react$13.createElement("meta", {
			key: "charSet",
			charSet: metaProps.charSet
		}) : null;
		if ("script:ld+json" in metaProps) try {
			let json = JSON.stringify(metaProps["script:ld+json"]);
			return /* @__PURE__ */ import_react$13.createElement("script", {
				key: `script:ld+json:${json}`,
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: escapeHtml(json) }
			});
		} catch (e) {
			return null;
		}
		return /* @__PURE__ */ import_react$13.createElement("meta", {
			key: JSON.stringify(metaProps),
			...metaProps
		});
	}));
}
function isValidMetaTag(tagName) {
	return typeof tagName === "string" && /^(meta|link)$/.test(tagName);
}
function setIsHydrated() {
	isHydrated = true;
}
function Scripts(scriptProps) {
	let { manifest, serverHandoffString, isSpaMode, renderMeta, routeDiscovery, ssr } = useFrameworkContext();
	let { router, static: isStatic, staticContext } = useDataRouterContext2();
	let { matches: routerMatches } = useDataRouterStateContext();
	let isRSCRouterContext = useIsRSCRouterContext();
	let enableFogOfWar = isFogOfWarEnabled(routeDiscovery, ssr);
	if (renderMeta) renderMeta.didRenderScripts = true;
	let matches = getActiveMatches(routerMatches, null, isSpaMode);
	import_react$13.useEffect(() => {
		setIsHydrated();
	}, []);
	let initialScripts = import_react$13.useMemo(() => {
		if (isRSCRouterContext) return null;
		let contextScript = staticContext ? `window.__reactRouterContext = ${serverHandoffString};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());` : " ";
		let routeModulesScript = !isStatic ? " " : `${manifest.hmr?.runtime ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}${!enableFogOfWar ? `import ${JSON.stringify(manifest.url)}` : ""};
${matches.map((match, routeIndex) => {
			let routeVarName = `route${routeIndex}`;
			let manifestEntry = manifest.routes[match.route.id];
			invariant2(manifestEntry, `Route ${match.route.id} not found in manifest`);
			let { clientActionModule, clientLoaderModule, clientMiddlewareModule, hydrateFallbackModule, module } = manifestEntry;
			let chunks = [
				...clientActionModule ? [{
					module: clientActionModule,
					varName: `${routeVarName}_clientAction`
				}] : [],
				...clientLoaderModule ? [{
					module: clientLoaderModule,
					varName: `${routeVarName}_clientLoader`
				}] : [],
				...clientMiddlewareModule ? [{
					module: clientMiddlewareModule,
					varName: `${routeVarName}_clientMiddleware`
				}] : [],
				...hydrateFallbackModule ? [{
					module: hydrateFallbackModule,
					varName: `${routeVarName}_HydrateFallback`
				}] : [],
				{
					module,
					varName: `${routeVarName}_main`
				}
			];
			if (chunks.length === 1) return `import * as ${routeVarName} from ${JSON.stringify(module)};`;
			return [chunks.map((chunk) => `import * as ${chunk.varName} from "${chunk.module}";`).join("\n"), `const ${routeVarName} = {${chunks.map((chunk) => `...${chunk.varName}`).join(",")}};`].join("\n");
		}).join("\n")}
  ${enableFogOfWar ? `window.__reactRouterManifest = ${JSON.stringify(getPartialManifest(manifest, router), null, 2)};` : ""}
  window.__reactRouterRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
		return /* @__PURE__ */ import_react$13.createElement(import_react$13.Fragment, null, /* @__PURE__ */ import_react$13.createElement("script", {
			...scriptProps,
			suppressHydrationWarning: true,
			dangerouslySetInnerHTML: { __html: contextScript },
			type: void 0
		}), /* @__PURE__ */ import_react$13.createElement("script", {
			...scriptProps,
			suppressHydrationWarning: true,
			dangerouslySetInnerHTML: { __html: routeModulesScript },
			type: "module",
			async: true
		}));
	}, []);
	let preloads = isHydrated || isRSCRouterContext ? [] : [...new Set(manifest.entry.imports.concat(getModuleLinkHrefs(matches, manifest, { includeHydrateFallback: true })))];
	let sri = typeof manifest.sri === "object" ? manifest.sri : {};
	warnOnce$1(!isRSCRouterContext, "The <Scripts /> element is a no-op when using RSC and can be safely removed.");
	return isHydrated || isRSCRouterContext ? null : /* @__PURE__ */ import_react$13.createElement(import_react$13.Fragment, null, typeof manifest.sri === "object" ? /* @__PURE__ */ import_react$13.createElement("script", {
		...scriptProps,
		"rr-importmap": "",
		type: "importmap",
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: JSON.stringify({ integrity: sri }) }
	}) : null, !enableFogOfWar ? /* @__PURE__ */ import_react$13.createElement("link", {
		rel: "modulepreload",
		href: manifest.url,
		crossOrigin: scriptProps.crossOrigin,
		integrity: sri[manifest.url],
		nonce: scriptProps.nonce,
		suppressHydrationWarning: true
	}) : null, /* @__PURE__ */ import_react$13.createElement("link", {
		rel: "modulepreload",
		href: manifest.entry.module,
		crossOrigin: scriptProps.crossOrigin,
		integrity: sri[manifest.entry.module],
		nonce: scriptProps.nonce,
		suppressHydrationWarning: true
	}), preloads.map((path) => /* @__PURE__ */ import_react$13.createElement("link", {
		key: path,
		rel: "modulepreload",
		href: path,
		crossOrigin: scriptProps.crossOrigin,
		integrity: sri[path],
		nonce: scriptProps.nonce,
		suppressHydrationWarning: true
	})), initialScripts);
}
function mergeRefs(...refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") ref(value);
			else if (ref != null) ref.current = value;
		});
	};
}
function RemixRootDefaultErrorBoundary({ error, isOutsideRemixApp }) {
	console.error(error);
	let heyDeveloper = /* @__PURE__ */ import_react$12.createElement("script", { dangerouslySetInnerHTML: { __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      ` } });
	if (isRouteErrorResponse(error)) return /* @__PURE__ */ import_react$12.createElement(BoundaryShell, { title: "Unhandled Thrown Response!" }, /* @__PURE__ */ import_react$12.createElement("h1", { style: { fontSize: "24px" } }, error.status, " ", error.statusText), heyDeveloper);
	let errorInstance;
	if (error instanceof Error) errorInstance = error;
	else {
		let errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
		errorInstance = new Error(errorString);
	}
	return /* @__PURE__ */ import_react$12.createElement(BoundaryShell, {
		title: "Application Error!",
		isOutsideRemixApp
	}, /* @__PURE__ */ import_react$12.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), /* @__PURE__ */ import_react$12.createElement("pre", { style: {
		padding: "2rem",
		background: "hsla(10, 50%, 50%, 0.1)",
		color: "red",
		overflow: "auto"
	} }, errorInstance.stack), heyDeveloper);
}
function BoundaryShell({ title, renderScripts, isOutsideRemixApp, children }) {
	let { routeModules } = useFrameworkContext();
	if (routeModules.root?.Layout && !isOutsideRemixApp) return children;
	return /* @__PURE__ */ import_react$12.createElement("html", { lang: "en" }, /* @__PURE__ */ import_react$12.createElement("head", null, /* @__PURE__ */ import_react$12.createElement("meta", { charSet: "utf-8" }), /* @__PURE__ */ import_react$12.createElement("meta", {
		name: "viewport",
		content: "width=device-width,initial-scale=1,viewport-fit=cover"
	}), /* @__PURE__ */ import_react$12.createElement("title", null, title)), /* @__PURE__ */ import_react$12.createElement("body", null, /* @__PURE__ */ import_react$12.createElement("main", { style: {
		fontFamily: "system-ui, sans-serif",
		padding: "2rem"
	} }, children, renderScripts ? /* @__PURE__ */ import_react$12.createElement(Scripts, null) : null)));
}
function createBrowserRouter(routes, opts) {
	return createRouter({
		basename: opts?.basename,
		getContext: opts?.getContext,
		future: opts?.future,
		history: createBrowserHistory({ window: opts?.window }),
		hydrationData: opts?.hydrationData || parseHydrationData(),
		routes,
		mapRouteProperties,
		hydrationRouteProperties,
		dataStrategy: opts?.dataStrategy,
		patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
		window: opts?.window,
		instrumentations: opts?.instrumentations
	}).initialize();
}
function createHashRouter(routes, opts) {
	return createRouter({
		basename: opts?.basename,
		getContext: opts?.getContext,
		future: opts?.future,
		history: createHashHistory({ window: opts?.window }),
		hydrationData: opts?.hydrationData || parseHydrationData(),
		routes,
		mapRouteProperties,
		hydrationRouteProperties,
		dataStrategy: opts?.dataStrategy,
		patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
		window: opts?.window,
		instrumentations: opts?.instrumentations
	}).initialize();
}
function parseHydrationData() {
	let state = window?.__staticRouterHydrationData;
	if (state && state.errors) state = {
		...state,
		errors: deserializeErrors$1(state.errors)
	};
	return state;
}
function deserializeErrors$1(errors) {
	if (!errors) return null;
	let entries = Object.entries(errors);
	let serialized = {};
	for (let [key, val] of entries) if (val && val.__type === "RouteErrorResponse") serialized[key] = new ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
	else if (val && val.__type === "Error") {
		if (val.__subType) {
			let ErrorConstructor = window[val.__subType];
			if (typeof ErrorConstructor === "function") try {
				let error = new ErrorConstructor(val.message);
				error.stack = "";
				serialized[key] = error;
			} catch (e) {}
		}
		if (serialized[key] == null) {
			let error = new Error(val.message);
			error.stack = "";
			serialized[key] = error;
		}
	} else serialized[key] = val;
	return serialized;
}
function BrowserRouter({ basename, children, useTransitions, window: window2 }) {
	let historyRef = import_react$17.useRef();
	if (historyRef.current == null) historyRef.current = createBrowserHistory({
		window: window2,
		v5Compat: true
	});
	let history = historyRef.current;
	let [state, setStateImpl] = import_react$17.useState({
		action: history.action,
		location: history.location
	});
	let setState = import_react$17.useCallback((newState) => {
		if (useTransitions === false) setStateImpl(newState);
		else import_react$17.startTransition(() => setStateImpl(newState));
	}, [useTransitions]);
	import_react$17.useLayoutEffect(() => history.listen(setState), [history, setState]);
	return /* @__PURE__ */ import_react$17.createElement(Router, {
		basename,
		children,
		location: state.location,
		navigationType: state.action,
		navigator: history,
		useTransitions
	});
}
function HashRouter({ basename, children, useTransitions, window: window2 }) {
	let historyRef = import_react$17.useRef();
	if (historyRef.current == null) historyRef.current = createHashHistory({
		window: window2,
		v5Compat: true
	});
	let history = historyRef.current;
	let [state, setStateImpl] = import_react$17.useState({
		action: history.action,
		location: history.location
	});
	let setState = import_react$17.useCallback((newState) => {
		if (useTransitions === false) setStateImpl(newState);
		else import_react$17.startTransition(() => setStateImpl(newState));
	}, [useTransitions]);
	import_react$17.useLayoutEffect(() => history.listen(setState), [history, setState]);
	return /* @__PURE__ */ import_react$17.createElement(Router, {
		basename,
		children,
		location: state.location,
		navigationType: state.action,
		navigator: history,
		useTransitions
	});
}
function HistoryRouter({ basename, children, history, useTransitions }) {
	let [state, setStateImpl] = import_react$17.useState({
		action: history.action,
		location: history.location
	});
	let setState = import_react$17.useCallback((newState) => {
		if (useTransitions === false) setStateImpl(newState);
		else import_react$17.startTransition(() => setStateImpl(newState));
	}, [useTransitions]);
	import_react$17.useLayoutEffect(() => history.listen(setState), [history, setState]);
	return /* @__PURE__ */ import_react$17.createElement(Router, {
		basename,
		children,
		location: state.location,
		navigationType: state.action,
		navigator: history,
		useTransitions
	});
}
function ScrollRestoration({ getKey, storageKey, ...props }) {
	let remixContext = import_react$17.useContext(FrameworkContext);
	let { basename } = import_react$17.useContext(NavigationContext);
	let location = useLocation$1();
	let matches = useMatches();
	useScrollRestoration({
		getKey,
		storageKey
	});
	let ssrKey = import_react$17.useMemo(() => {
		if (!remixContext || !getKey) return null;
		let userKey = getScrollRestorationKey(location, matches, basename, getKey);
		return userKey !== location.key ? userKey : null;
	}, []);
	if (!remixContext || remixContext.isSpaMode) return null;
	let restoreScroll = ((storageKey2, restoreKey) => {
		if (!window.history.state || !window.history.state.key) {
			let key = Math.random().toString(32).slice(2);
			window.history.replaceState({ key }, "");
		}
		try {
			let storedY = JSON.parse(sessionStorage.getItem(storageKey2) || "{}")[restoreKey || window.history.state.key];
			if (typeof storedY === "number") window.scrollTo(0, storedY);
		} catch (error) {
			console.error(error);
			sessionStorage.removeItem(storageKey2);
		}
	}).toString();
	return /* @__PURE__ */ import_react$17.createElement("script", {
		...props,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: `(${restoreScroll})(${escapeHtml(JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY))}, ${escapeHtml(JSON.stringify(ssrKey))})` }
	});
}
function getDataRouterConsoleError2(hookName) {
	return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext3(hookName) {
	let ctx = import_react$17.useContext(DataRouterContext);
	invariant$2(ctx, getDataRouterConsoleError2(hookName));
	return ctx;
}
function useDataRouterState2(hookName) {
	let state = import_react$17.useContext(DataRouterStateContext);
	invariant$2(state, getDataRouterConsoleError2(hookName));
	return state;
}
function useLinkClickHandler(to, { target, replace: replaceProp, mask, state, preventScrollReset, relative, viewTransition, defaultShouldRevalidate, useTransitions } = {}) {
	let navigate = useNavigate();
	let location = useLocation$1();
	let path = useResolvedPath(to, { relative });
	return import_react$17.useCallback((event) => {
		if (shouldProcessLinkClick(event, target)) {
			event.preventDefault();
			let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
			let doNavigate = () => navigate(to, {
				replace: replace2,
				mask,
				state,
				preventScrollReset,
				relative,
				viewTransition,
				defaultShouldRevalidate
			});
			if (useTransitions) import_react$17.startTransition(() => doNavigate());
			else doNavigate();
		}
	}, [
		location,
		navigate,
		path,
		replaceProp,
		mask,
		state,
		target,
		to,
		preventScrollReset,
		relative,
		viewTransition,
		defaultShouldRevalidate,
		useTransitions
	]);
}
function useSearchParams(defaultInit) {
	warning$1(typeof URLSearchParams !== "undefined", `You cannot use the \`useSearchParams\` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.`);
	let defaultSearchParamsRef = import_react$17.useRef(createSearchParams(defaultInit));
	let hasSetSearchParamsRef = import_react$17.useRef(false);
	let location = useLocation$1();
	let searchParams = import_react$17.useMemo(() => getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
	let navigate = useNavigate();
	return [searchParams, import_react$17.useCallback((nextInit, navigateOptions) => {
		const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(new URLSearchParams(searchParams)) : nextInit);
		hasSetSearchParamsRef.current = true;
		navigate("?" + newSearchParams, navigateOptions);
	}, [navigate, searchParams])];
}
function useSubmit() {
	let { router } = useDataRouterContext3("useSubmit");
	let { basename } = import_react$17.useContext(NavigationContext);
	let currentRouteId = useRouteId();
	let routerFetch = router.fetch;
	let routerNavigate = router.navigate;
	return import_react$17.useCallback(async (target, options = {}) => {
		let { action, method, encType, formData, body } = getFormSubmissionInfo(target, basename);
		if (options.navigate === false) await routerFetch(options.fetcherKey || getUniqueFetcherId(), currentRouteId, options.action || action, {
			defaultShouldRevalidate: options.defaultShouldRevalidate,
			preventScrollReset: options.preventScrollReset,
			formData,
			body,
			formMethod: options.method || method,
			formEncType: options.encType || encType,
			flushSync: options.flushSync
		});
		else await routerNavigate(options.action || action, {
			defaultShouldRevalidate: options.defaultShouldRevalidate,
			preventScrollReset: options.preventScrollReset,
			formData,
			body,
			formMethod: options.method || method,
			formEncType: options.encType || encType,
			replace: options.replace,
			state: options.state,
			fromRouteId: currentRouteId,
			flushSync: options.flushSync,
			viewTransition: options.viewTransition
		});
	}, [
		routerFetch,
		routerNavigate,
		basename,
		currentRouteId
	]);
}
function useFormAction(action, { relative } = {}) {
	let { basename } = import_react$17.useContext(NavigationContext);
	let routeContext = import_react$17.useContext(RouteContext);
	invariant$2(routeContext, "useFormAction must be used inside a RouteContext");
	let [match] = routeContext.matches.slice(-1);
	let path = { ...useResolvedPath(action ? action : ".", { relative }) };
	let location = useLocation$1();
	if (action == null) {
		path.search = location.search;
		let params = new URLSearchParams(path.search);
		let indexValues = params.getAll("index");
		if (indexValues.some((v) => v === "")) {
			params.delete("index");
			indexValues.filter((v) => v).forEach((v) => params.append("index", v));
			let qs = params.toString();
			path.search = qs ? `?${qs}` : "";
		}
	}
	if ((!action || action === ".") && match.route.index) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
	if (basename !== "/") path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
	return createPath(path);
}
function useFetcher({ key } = {}) {
	let { router } = useDataRouterContext3("useFetcher");
	let state = useDataRouterState2("useFetcher");
	let fetcherData = import_react$17.useContext(FetchersContext);
	let route = import_react$17.useContext(RouteContext);
	let routeId = route.matches[route.matches.length - 1]?.route.id;
	invariant$2(fetcherData, `useFetcher must be used inside a FetchersContext`);
	invariant$2(route, `useFetcher must be used inside a RouteContext`);
	invariant$2(routeId != null, `useFetcher can only be used on routes that contain a unique "id"`);
	let defaultKey = import_react$17.useId();
	let [fetcherKey, setFetcherKey] = import_react$17.useState(key || defaultKey);
	if (key && key !== fetcherKey) setFetcherKey(key);
	let { deleteFetcher, getFetcher, resetFetcher, fetch: routerFetch } = router;
	import_react$17.useEffect(() => {
		getFetcher(fetcherKey);
		return () => deleteFetcher(fetcherKey);
	}, [
		deleteFetcher,
		getFetcher,
		fetcherKey
	]);
	let load = import_react$17.useCallback(async (href, opts) => {
		invariant$2(routeId, "No routeId available for fetcher.load()");
		await routerFetch(fetcherKey, routeId, href, opts);
	}, [
		fetcherKey,
		routeId,
		routerFetch
	]);
	let submitImpl = useSubmit();
	let submit = import_react$17.useCallback(async (target, opts) => {
		await submitImpl(target, {
			...opts,
			navigate: false,
			fetcherKey
		});
	}, [fetcherKey, submitImpl]);
	let reset = import_react$17.useCallback((opts) => resetFetcher(fetcherKey, opts), [resetFetcher, fetcherKey]);
	let FetcherForm = import_react$17.useMemo(() => {
		let FetcherForm2 = import_react$17.forwardRef((props, ref) => {
			return /* @__PURE__ */ import_react$17.createElement(Form, {
				...props,
				navigate: false,
				fetcherKey,
				ref
			});
		});
		FetcherForm2.displayName = "fetcher.Form";
		return FetcherForm2;
	}, [fetcherKey]);
	let fetcher = state.fetchers.get(fetcherKey) || IDLE_FETCHER;
	let data2 = fetcherData.get(fetcherKey);
	return import_react$17.useMemo(() => ({
		Form: FetcherForm,
		submit,
		load,
		reset,
		...fetcher,
		data: data2
	}), [
		FetcherForm,
		submit,
		load,
		reset,
		fetcher,
		data2
	]);
}
function useFetchers() {
	let state = useDataRouterState2("useFetchers");
	return import_react$17.useMemo(() => Array.from(state.fetchers.entries()).map(([key, fetcher]) => ({
		...fetcher,
		key
	})), [state.fetchers]);
}
function getScrollRestorationKey(location, matches, basename, getKey) {
	let key = null;
	if (getKey) if (basename !== "/") key = getKey({
		...location,
		pathname: stripBasename(location.pathname, basename) || location.pathname
	}, matches);
	else key = getKey(location, matches);
	if (key == null) key = location.key;
	return key;
}
function useScrollRestoration({ getKey, storageKey } = {}) {
	let { router } = useDataRouterContext3("useScrollRestoration");
	let { restoreScrollPosition, preventScrollReset } = useDataRouterState2("useScrollRestoration");
	let { basename } = import_react$17.useContext(NavigationContext);
	let location = useLocation$1();
	let matches = useMatches();
	let navigation = useNavigation();
	import_react$17.useEffect(() => {
		window.history.scrollRestoration = "manual";
		return () => {
			window.history.scrollRestoration = "auto";
		};
	}, []);
	usePageHide(import_react$17.useCallback(() => {
		if (navigation.state === "idle") {
			let key = getScrollRestorationKey(location, matches, basename, getKey);
			savedScrollPositions[key] = window.scrollY;
		}
		try {
			sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
		} catch (error) {
			warning$1(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`);
		}
		window.history.scrollRestoration = "auto";
	}, [
		navigation.state,
		getKey,
		basename,
		location,
		matches,
		storageKey
	]));
	if (typeof document !== "undefined") {
		import_react$17.useLayoutEffect(() => {
			try {
				let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
				if (sessionPositions) savedScrollPositions = JSON.parse(sessionPositions);
			} catch (e) {}
		}, [storageKey]);
		import_react$17.useLayoutEffect(() => {
			let disableScrollRestoration = router?.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0);
			return () => disableScrollRestoration && disableScrollRestoration();
		}, [
			router,
			basename,
			getKey
		]);
		import_react$17.useLayoutEffect(() => {
			if (restoreScrollPosition === false) return;
			if (typeof restoreScrollPosition === "number") {
				window.scrollTo(0, restoreScrollPosition);
				return;
			}
			try {
				if (location.hash) {
					let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
					if (el) {
						el.scrollIntoView();
						return;
					}
				}
			} catch {
				warning$1(false, `"${location.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
			}
			if (preventScrollReset === true) return;
			window.scrollTo(0, 0);
		}, [
			location,
			restoreScrollPosition,
			preventScrollReset
		]);
	}
}
function useBeforeUnload(callback, options) {
	let { capture } = options || {};
	import_react$17.useEffect(() => {
		let opts = capture != null ? { capture } : void 0;
		window.addEventListener("beforeunload", callback, opts);
		return () => {
			window.removeEventListener("beforeunload", callback, opts);
		};
	}, [callback, capture]);
}
function usePageHide(callback, options) {
	let { capture } = options || {};
	import_react$17.useEffect(() => {
		let opts = capture != null ? { capture } : void 0;
		window.addEventListener("pagehide", callback, opts);
		return () => {
			window.removeEventListener("pagehide", callback, opts);
		};
	}, [callback, capture]);
}
function usePrompt({ when, message }) {
	let blocker = useBlocker(when);
	import_react$17.useEffect(() => {
		if (blocker.state === "blocked") if (window.confirm(message)) setTimeout(blocker.proceed, 0);
		else blocker.reset();
	}, [blocker, message]);
	import_react$17.useEffect(() => {
		if (blocker.state === "blocked" && !when) blocker.reset();
	}, [blocker, when]);
}
function useViewTransitionState(to, { relative } = {}) {
	let vtContext = import_react$17.useContext(ViewTransitionContext);
	invariant$2(vtContext != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename } = useDataRouterContext3("useViewTransitionState");
	let path = useResolvedPath(to, { relative });
	if (!vtContext.isTransitioning) return false;
	let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
	let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
	return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}
function StaticRouter({ basename, children, location: locationProp = "/" }) {
	if (typeof locationProp === "string") locationProp = parsePath(locationProp);
	let action = "POP";
	let location = {
		pathname: locationProp.pathname || "/",
		search: locationProp.search || "",
		hash: locationProp.hash || "",
		state: locationProp.state != null ? locationProp.state : null,
		key: locationProp.key || "default",
		mask: void 0
	};
	let staticNavigator = getStatelessNavigator();
	return /* @__PURE__ */ import_react$18.createElement(Router, {
		basename,
		children,
		location,
		navigationType: action,
		navigator: staticNavigator,
		static: true,
		useTransitions: false
	});
}
function StaticRouterProvider({ context, router, hydrate: hydrate2 = true, nonce }) {
	invariant$2(router && context, "You must provide `router` and `context` to <StaticRouterProvider>");
	let dataRouterContext = {
		router,
		navigator: getStatelessNavigator(),
		static: true,
		staticContext: context,
		basename: context.basename || "/"
	};
	let fetchersContext = /* @__PURE__ */ new Map();
	let hydrateScript = "";
	if (hydrate2 !== false) {
		let data2 = {
			loaderData: context.loaderData,
			actionData: context.actionData,
			errors: serializeErrors$1(context.errors)
		};
		hydrateScript = `window.__staticRouterHydrationData = JSON.parse(${escapeHtml(JSON.stringify(JSON.stringify(data2)))});`;
	}
	let { state } = dataRouterContext.router;
	return /* @__PURE__ */ import_react$18.createElement(import_react$18.Fragment, null, /* @__PURE__ */ import_react$18.createElement(DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ import_react$18.createElement(DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ import_react$18.createElement(FetchersContext.Provider, { value: fetchersContext }, /* @__PURE__ */ import_react$18.createElement(ViewTransitionContext.Provider, { value: { isTransitioning: false } }, /* @__PURE__ */ import_react$18.createElement(Router, {
		basename: dataRouterContext.basename,
		location: state.location,
		navigationType: state.historyAction,
		navigator: dataRouterContext.navigator,
		static: dataRouterContext.static,
		useTransitions: false
	}, /* @__PURE__ */ import_react$18.createElement(DataRoutes2, {
		manifest: router.manifest,
		routes: router.routes,
		future: router.future,
		state,
		isStatic: true
	})))))), hydrateScript ? /* @__PURE__ */ import_react$18.createElement("script", {
		suppressHydrationWarning: true,
		nonce,
		dangerouslySetInnerHTML: { __html: hydrateScript }
	}) : null);
}
function serializeErrors$1(errors) {
	if (!errors) return null;
	let entries = Object.entries(errors);
	let serialized = {};
	for (let [key, val] of entries) if (isRouteErrorResponse(val)) serialized[key] = {
		...val,
		__type: "RouteErrorResponse"
	};
	else if (val instanceof Error) serialized[key] = {
		message: val.message,
		__type: "Error",
		...val.name !== "Error" ? { __subType: val.name } : {}
	};
	else serialized[key] = val;
	return serialized;
}
function getStatelessNavigator() {
	return {
		createHref,
		encodeLocation,
		push(to) {
			throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
		},
		replace(to) {
			throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
		},
		go(delta) {
			throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
		},
		back() {
			throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
		},
		forward() {
			throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
		}
	};
}
function createStaticHandler2(routes, opts) {
	return createStaticHandler(routes, {
		...opts,
		mapRouteProperties
	});
}
function createStaticRouter(routes, context, opts = {}) {
	let manifest = {};
	let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, void 0, manifest);
	let matches = context.matches.map((match) => {
		let route = manifest[match.route.id] || match.route;
		return {
			...match,
			route
		};
	});
	let msg = (method) => `You cannot use router.${method}() on the server because it is a stateless environment`;
	return {
		get basename() {
			return context.basename;
		},
		get future() {
			return {
				v8_middleware: false,
				v8_passThroughRequests: false,
				v8_trailingSlashAwareDataRequests: false,
				...opts?.future
			};
		},
		get state() {
			return {
				historyAction: "POP",
				location: context.location,
				matches,
				loaderData: context.loaderData,
				actionData: context.actionData,
				errors: context.errors,
				initialized: true,
				renderFallback: false,
				navigation: IDLE_NAVIGATION,
				restoreScrollPosition: null,
				preventScrollReset: false,
				revalidation: "idle",
				fetchers: /* @__PURE__ */ new Map(),
				blockers: /* @__PURE__ */ new Map()
			};
		},
		get routes() {
			return dataRoutes;
		},
		get branches() {
			return opts.branches;
		},
		get manifest() {
			return manifest;
		},
		get window() {},
		initialize() {
			throw msg("initialize");
		},
		subscribe() {
			throw msg("subscribe");
		},
		enableScrollRestoration() {
			throw msg("enableScrollRestoration");
		},
		navigate() {
			throw msg("navigate");
		},
		fetch() {
			throw msg("fetch");
		},
		revalidate() {
			throw msg("revalidate");
		},
		createHref,
		encodeLocation,
		getFetcher() {
			return IDLE_FETCHER;
		},
		deleteFetcher() {
			throw msg("deleteFetcher");
		},
		resetFetcher() {
			throw msg("resetFetcher");
		},
		dispose() {
			throw msg("dispose");
		},
		getBlocker() {
			return IDLE_BLOCKER;
		},
		deleteBlocker() {
			throw msg("deleteBlocker");
		},
		patchRoutes() {
			throw msg("patchRoutes");
		},
		_internalFetchControllers: /* @__PURE__ */ new Map(),
		_internalSetRoutes() {
			throw msg("_internalSetRoutes");
		},
		_internalSetStateDoNotUseOrYouWillBreakYourApp() {
			throw msg("_internalSetStateDoNotUseOrYouWillBreakYourApp");
		}
	};
}
function createHref(to) {
	return typeof to === "string" ? to : createPath(to);
}
function encodeLocation(to) {
	let href = typeof to === "string" ? to : createPath(to);
	href = href.replace(/ $/, "%20");
	let encoded = ABSOLUTE_URL_REGEX3.test(href) ? new URL(href) : new URL(href, "http://localhost");
	return {
		pathname: encoded.pathname,
		search: encoded.search,
		hash: encoded.hash
	};
}
var import_react$8, import_react$9, import_react$10, import_react$11, import_react$12, import_react$13, import_react$14, import_react$15, import_react$16, import_react$17, import_react$18, __typeError, __accessCheck, __privateGet, __privateAdd, __privateSet, Action, PopStateEventType, _map, RouterContextProvider, unsupportedLazyRouteObjectKeys, unsupportedLazyRouteFunctionKeys, paramRe, dynamicSegmentValue, indexRouteValue, emptySegmentValue, staticSegmentValue, splatPenalty, isSplat, ABSOLUTE_URL_REGEX, isAbsoluteUrl, removeDoubleSlashes, joinPaths, removeTrailingSlash, normalizePathname, normalizeSearch, normalizeHash, DataWithResponseInit, redirect, redirectDocument, replace, ErrorResponseImpl, isBrowser$2, UninstrumentedSymbol, objectProtoNames, validMutationMethodsArr, validMutationMethods, validRequestMethodsArr, validRequestMethods, redirectStatusCodes, redirectPreserveMethodStatusCodes, IDLE_NAVIGATION, IDLE_FETCHER, IDLE_BLOCKER, defaultMapRouteProperties, TRANSITIONS_STORAGE_KEY, ResetLoaderDataSymbol, _routes, _branches, _hmrRoutes, _hmrBranches, DataRoutes, lazyRoutePropertyCache, loadLazyRouteProperty, lazyRouteFunctionCache, invalidProtocols, DataRouterContext, DataRouterStateContext, RSCRouterContext, ViewTransitionContext, FetchersContext, AwaitContext, AwaitContextProvider, NavigationContext, LocationContext, RouteContext, RouteErrorContext, ERROR_DIGEST_BASE, ERROR_DIGEST_REDIRECT, ERROR_DIGEST_ROUTE_ERROR_RESPONSE, navigateEffectWarning, OutletContext, defaultErrorElement, RenderErrorBoundary, errorRedirectHandledMap, blockerId, alreadyWarned, alreadyWarned2, useOptimisticImpl, stableUseOptimisticSetter, hydrationRouteProperties, Deferred, MemoizedDataRoutes, AwaitErrorBoundary, createRoutesFromElements, defaultMethod, defaultEncType, _formDataSupportsSubmitter, supportedFormEncTypes, HOLE, NAN, NEGATIVE_INFINITY, NEGATIVE_ZERO, NULL, POSITIVE_INFINITY, UNDEFINED, TYPE_BIGINT, TYPE_DATE, TYPE_ERROR, TYPE_MAP, TYPE_NULL_OBJECT, TYPE_PROMISE, TYPE_REGEXP, TYPE_SET, TYPE_SYMBOL, TYPE_URL, TYPE_PREVIOUS_RESOLVED, SUPPORTED_ERROR_TYPES, Deferred2, TIME_LIMIT_MS, getNow, yieldToMain, objectProtoNames2, globalObj, ESCAPE_LOOKUP, ESCAPE_REGEX, SingleFetchRedirectSymbol, SingleFetchNoResultError, NO_BODY_STATUS_CODES, _isPreloadSupported, nextPaths$1, discoveredPathsMaxSize$1, discoveredPaths$1, MANIFEST_VERSION_STORAGE_KEY, FrameworkContext, CRITICAL_CSS_DATA_ATTRIBUTE, isHydrated, RemixErrorBoundary, isBrowser2, ABSOLUTE_URL_REGEX2, Link$1, NavLink, Form, fetcherId, getUniqueFetcherId, SCROLL_RESTORATION_STORAGE_KEY, savedScrollPositions, ABSOLUTE_URL_REGEX3;
var init_chunk_6CSD65Y2 = __esmMin((() => {
	import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$12 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$13 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$14 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$15 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$16 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$17 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$18 = /* @__PURE__ */ __toESM(require_react(), 1);
	__typeError = (msg) => {
		throw TypeError(msg);
	};
	__accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
	__privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
	__privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	__privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
	Action = /* @__PURE__ */ ((Action2) => {
		Action2["Pop"] = "POP";
		Action2["Push"] = "PUSH";
		Action2["Replace"] = "REPLACE";
		return Action2;
	})(Action || {});
	PopStateEventType = "popstate";
	RouterContextProvider = class {
		/**
		* Create a new `RouterContextProvider` instance
		* @param init An optional initial context map to populate the provider with
		*/
		constructor(init) {
			__privateAdd(this, _map, /* @__PURE__ */ new Map());
			if (init) for (let [context, value] of init) this.set(context, value);
		}
		/**
		* Access a value from the context. If no value has been set for the context,
		* it will return the context's `defaultValue` if provided, or throw an error
		* if no `defaultValue` was set.
		* @param context The context to get the value for
		* @returns The value for the context, or the context's `defaultValue` if no
		* value was set
		*/
		get(context) {
			if (__privateGet(this, _map).has(context)) return __privateGet(this, _map).get(context);
			if (context.defaultValue !== void 0) return context.defaultValue;
			throw new Error("No value found for context");
		}
		/**
		* Set a value for the context. If the context already has a value set, this
		* will overwrite it.
		*
		* @param context The context to set the value for
		* @param value The value to set for the context
		* @returns {void}
		*/
		set(context, value) {
			__privateGet(this, _map).set(context, value);
		}
	};
	_map = /* @__PURE__ */ new WeakMap();
	unsupportedLazyRouteObjectKeys = /* @__PURE__ */ new Set([
		"lazy",
		"caseSensitive",
		"path",
		"id",
		"index",
		"children"
	]);
	unsupportedLazyRouteFunctionKeys = /* @__PURE__ */ new Set([
		"lazy",
		"caseSensitive",
		"path",
		"id",
		"index",
		"middleware",
		"children"
	]);
	paramRe = /^:[\w-]+$/;
	dynamicSegmentValue = 3;
	indexRouteValue = 2;
	emptySegmentValue = 1;
	staticSegmentValue = 10;
	splatPenalty = -2;
	isSplat = (s) => s === "*";
	ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
	isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
	removeDoubleSlashes = (path) => path.replace(/\/\/+/g, "/");
	joinPaths = (paths) => removeDoubleSlashes(paths.join("/"));
	removeTrailingSlash = (path) => path.replace(/\/+$/, "");
	normalizePathname = (pathname) => removeTrailingSlash(pathname).replace(/^\/*/, "/");
	normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
	normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
	DataWithResponseInit = class {
		constructor(data2, init) {
			this.type = "DataWithResponseInit";
			this.data = data2;
			this.init = init || null;
		}
	};
	redirect = (url, init = 302) => {
		let responseInit = init;
		if (typeof responseInit === "number") responseInit = { status: responseInit };
		else if (typeof responseInit.status === "undefined") responseInit.status = 302;
		let headers = new Headers(responseInit.headers);
		headers.set("Location", url);
		return new Response(null, {
			...responseInit,
			headers
		});
	};
	redirectDocument = (url, init) => {
		let response = redirect(url, init);
		response.headers.set("X-Remix-Reload-Document", "true");
		return response;
	};
	replace = (url, init) => {
		let response = redirect(url, init);
		response.headers.set("X-Remix-Replace", "true");
		return response;
	};
	ErrorResponseImpl = class {
		constructor(status, statusText, data2, internal = false) {
			this.status = status;
			this.statusText = statusText || "";
			this.internal = internal;
			if (data2 instanceof Error) {
				this.data = data2.toString();
				this.error = data2;
			} else this.data = data2;
		}
	};
	isBrowser$2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
	UninstrumentedSymbol = Symbol("Uninstrumented");
	objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
	validMutationMethodsArr = [
		"POST",
		"PUT",
		"PATCH",
		"DELETE"
	];
	validMutationMethods = new Set(validMutationMethodsArr);
	validRequestMethodsArr = ["GET", ...validMutationMethodsArr];
	validRequestMethods = new Set(validRequestMethodsArr);
	redirectStatusCodes = /* @__PURE__ */ new Set([
		301,
		302,
		303,
		307,
		308
	]);
	redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
	IDLE_NAVIGATION = {
		state: "idle",
		location: void 0,
		matches: void 0,
		historyAction: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	};
	IDLE_FETCHER = {
		state: "idle",
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	};
	IDLE_BLOCKER = {
		state: "unblocked",
		proceed: void 0,
		reset: void 0,
		location: void 0
	};
	defaultMapRouteProperties = (route) => ({ hasErrorBoundary: Boolean(route.hasErrorBoundary) });
	TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
	ResetLoaderDataSymbol = Symbol("ResetLoaderData");
	DataRoutes = class {
		constructor(routes) {
			__privateAdd(this, _routes);
			__privateAdd(this, _branches);
			__privateAdd(this, _hmrRoutes);
			__privateAdd(this, _hmrBranches);
			__privateSet(this, _routes, routes);
			__privateSet(this, _branches, flattenAndRankRoutes(routes));
		}
		/** The stable route tree */
		get stableRoutes() {
			return __privateGet(this, _routes);
		}
		/** The in-flight route tree if one is active, otherwise the stable tree */
		get activeRoutes() {
			return __privateGet(this, _hmrRoutes) ?? __privateGet(this, _routes);
		}
		/** Pre-computed branches */
		get branches() {
			return __privateGet(this, _hmrBranches) ?? __privateGet(this, _branches);
		}
		get hasHMRRoutes() {
			return __privateGet(this, _hmrRoutes) != null;
		}
		/** Replace the stable route tree and recompute its branches */
		setRoutes(routes) {
			__privateSet(this, _routes, routes);
			__privateSet(this, _branches, flattenAndRankRoutes(routes));
		}
		/** Set a new in-flight route tree and recompute its branches */
		setHmrRoutes(routes) {
			__privateSet(this, _hmrRoutes, routes);
			__privateSet(this, _hmrBranches, flattenAndRankRoutes(routes));
		}
		/** Commit in-flight routes/branches to the stable slot and clear in-flight */
		commitHmrRoutes() {
			if (__privateGet(this, _hmrRoutes)) {
				__privateSet(this, _routes, __privateGet(this, _hmrRoutes));
				__privateSet(this, _branches, __privateGet(this, _hmrBranches));
				__privateSet(this, _hmrRoutes, void 0);
				__privateSet(this, _hmrBranches, void 0);
			}
		}
	};
	_routes = /* @__PURE__ */ new WeakMap();
	_branches = /* @__PURE__ */ new WeakMap();
	_hmrRoutes = /* @__PURE__ */ new WeakMap();
	_hmrBranches = /* @__PURE__ */ new WeakMap();
	lazyRoutePropertyCache = /* @__PURE__ */ new WeakMap();
	loadLazyRouteProperty = ({ key, route, manifest, mapRouteProperties: mapRouteProperties2 }) => {
		let routeToUpdate = manifest[route.id];
		invariant$2(routeToUpdate, "No route found in manifest");
		if (!routeToUpdate.lazy || typeof routeToUpdate.lazy !== "object") return;
		let lazyFn = routeToUpdate.lazy[key];
		if (!lazyFn) return;
		let cache = lazyRoutePropertyCache.get(routeToUpdate);
		if (!cache) {
			cache = {};
			lazyRoutePropertyCache.set(routeToUpdate, cache);
		}
		let cachedPromise = cache[key];
		if (cachedPromise) return cachedPromise;
		let propertyPromise = (async () => {
			let isUnsupported = isUnsupportedLazyRouteObjectKey(key);
			let isStaticallyDefined = routeToUpdate[key] !== void 0 && key !== "hasErrorBoundary";
			if (isUnsupported) {
				warning$1(!isUnsupported, "Route property " + key + " is not a supported lazy route property. This property will be ignored.");
				cache[key] = Promise.resolve();
			} else if (isStaticallyDefined) warning$1(false, `Route "${routeToUpdate.id}" has a static property "${key}" defined. The lazy property will be ignored.`);
			else {
				let value = await lazyFn();
				if (value != null) {
					Object.assign(routeToUpdate, { [key]: value });
					Object.assign(routeToUpdate, mapRouteProperties2(routeToUpdate));
				}
			}
			if (typeof routeToUpdate.lazy === "object") {
				routeToUpdate.lazy[key] = void 0;
				if (Object.values(routeToUpdate.lazy).every((value) => value === void 0)) routeToUpdate.lazy = void 0;
			}
		})();
		cache[key] = propertyPromise;
		return propertyPromise;
	};
	lazyRouteFunctionCache = /* @__PURE__ */ new WeakMap();
	invalidProtocols = [
		"about:",
		"blob:",
		"chrome:",
		"chrome-untrusted:",
		"content:",
		"data:",
		"devtools:",
		"file:",
		"filesystem:",
		"javascript:"
	];
	DataRouterContext = import_react$8.createContext(null);
	DataRouterContext.displayName = "DataRouter";
	DataRouterStateContext = import_react$8.createContext(null);
	DataRouterStateContext.displayName = "DataRouterState";
	RSCRouterContext = import_react$8.createContext(false);
	ViewTransitionContext = import_react$8.createContext({ isTransitioning: false });
	ViewTransitionContext.displayName = "ViewTransition";
	FetchersContext = import_react$8.createContext(/* @__PURE__ */ new Map());
	FetchersContext.displayName = "Fetchers";
	AwaitContext = import_react$8.createContext(null);
	AwaitContext.displayName = "Await";
	AwaitContextProvider = (props) => import_react$8.createElement(AwaitContext.Provider, props);
	NavigationContext = import_react$8.createContext(null);
	NavigationContext.displayName = "Navigation";
	LocationContext = import_react$8.createContext(null);
	LocationContext.displayName = "Location";
	RouteContext = import_react$8.createContext({
		outlet: null,
		matches: [],
		isDataRoute: false
	});
	RouteContext.displayName = "Route";
	RouteErrorContext = import_react$8.createContext(null);
	RouteErrorContext.displayName = "RouteError";
	ERROR_DIGEST_BASE = "REACT_ROUTER_ERROR";
	ERROR_DIGEST_REDIRECT = "REDIRECT";
	ERROR_DIGEST_ROUTE_ERROR_RESPONSE = "ROUTE_ERROR_RESPONSE";
	navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
	OutletContext = import_react$9.createContext(null);
	defaultErrorElement = /* @__PURE__ */ import_react$9.createElement(DefaultErrorComponent, null);
	RenderErrorBoundary = class extends import_react$9.Component {
		constructor(props) {
			super(props);
			this.state = {
				location: props.location,
				revalidation: props.revalidation,
				error: props.error
			};
		}
		static getDerivedStateFromError(error) {
			return { error };
		}
		static getDerivedStateFromProps(props, state) {
			if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
				error: props.error,
				location: props.location,
				revalidation: props.revalidation
			};
			return {
				error: props.error !== void 0 ? props.error : state.error,
				location: state.location,
				revalidation: props.revalidation || state.revalidation
			};
		}
		componentDidCatch(error, errorInfo) {
			if (this.props.onError) this.props.onError(error, errorInfo);
			else console.error("React Router caught the following error during render", error);
		}
		render() {
			let error = this.state.error;
			if (this.context && typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
				const decoded = decodeRouteErrorResponseDigest(error.digest);
				if (decoded) error = decoded;
			}
			let result = error !== void 0 ? /* @__PURE__ */ import_react$9.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ import_react$9.createElement(RouteErrorContext.Provider, {
				value: error,
				children: this.props.component
			})) : this.props.children;
			if (this.context) return /* @__PURE__ */ import_react$9.createElement(RSCErrorHandler, { error }, result);
			return result;
		}
	};
	RenderErrorBoundary.contextType = RSCRouterContext;
	errorRedirectHandledMap = /* @__PURE__ */ new WeakMap();
	blockerId = 0;
	alreadyWarned = {};
	alreadyWarned2 = {};
	useOptimisticImpl = import_react$10.useOptimistic;
	stableUseOptimisticSetter = () => void 0;
	hydrationRouteProperties = ["HydrateFallback", "hydrateFallbackElement"];
	Deferred = class {
		constructor() {
			this.status = "pending";
			this.promise = new Promise((resolve, reject) => {
				this.resolve = (value) => {
					if (this.status === "pending") {
						this.status = "resolved";
						resolve(value);
					}
				};
				this.reject = (reason) => {
					if (this.status === "pending") {
						this.status = "rejected";
						reject(reason);
					}
				};
			});
		}
	};
	MemoizedDataRoutes = import_react$10.memo(DataRoutes2);
	AwaitErrorBoundary = class extends import_react$10.Component {
		constructor(props) {
			super(props);
			this.state = { error: null };
		}
		static getDerivedStateFromError(error) {
			return { error };
		}
		componentDidCatch(error, errorInfo) {
			if (this.props.onError) this.props.onError(error, errorInfo);
			else console.error("<Await> caught the following error during render", error, errorInfo);
		}
		render() {
			let { children, errorElement, resolve } = this.props;
			let promise = null;
			let status = 0;
			if (!(resolve instanceof Promise)) {
				status = 1;
				promise = Promise.resolve();
				Object.defineProperty(promise, "_tracked", { get: () => true });
				Object.defineProperty(promise, "_data", { get: () => resolve });
			} else if (this.state.error) {
				status = 2;
				let renderError = this.state.error;
				promise = Promise.reject().catch(() => {});
				Object.defineProperty(promise, "_tracked", { get: () => true });
				Object.defineProperty(promise, "_error", { get: () => renderError });
			} else if (resolve._tracked) {
				promise = resolve;
				status = "_error" in promise ? 2 : "_data" in promise ? 1 : 0;
			} else {
				status = 0;
				Object.defineProperty(resolve, "_tracked", { get: () => true });
				promise = resolve.then((data2) => Object.defineProperty(resolve, "_data", { get: () => data2 }), (error) => {
					this.props.onError?.(error);
					Object.defineProperty(resolve, "_error", { get: () => error });
				});
			}
			if (status === 2 && !errorElement) throw promise._error;
			if (status === 2) return /* @__PURE__ */ import_react$10.createElement(AwaitContext.Provider, {
				value: promise,
				children: errorElement
			});
			if (status === 1) return /* @__PURE__ */ import_react$10.createElement(AwaitContext.Provider, {
				value: promise,
				children
			});
			throw promise;
		}
	};
	createRoutesFromElements = createRoutesFromChildren;
	defaultMethod = "get";
	defaultEncType = "application/x-www-form-urlencoded";
	_formDataSupportsSubmitter = null;
	supportedFormEncTypes = /* @__PURE__ */ new Set([
		"application/x-www-form-urlencoded",
		"multipart/form-data",
		"text/plain"
	]);
	HOLE = -1;
	NAN = -2;
	NEGATIVE_INFINITY = -3;
	NEGATIVE_ZERO = -4;
	NULL = -5;
	POSITIVE_INFINITY = -6;
	UNDEFINED = -7;
	TYPE_BIGINT = "B";
	TYPE_DATE = "D";
	TYPE_ERROR = "E";
	TYPE_MAP = "M";
	TYPE_NULL_OBJECT = "N";
	TYPE_PROMISE = "P";
	TYPE_REGEXP = "R";
	TYPE_SET = "S";
	TYPE_SYMBOL = "Y";
	TYPE_URL = "U";
	TYPE_PREVIOUS_RESOLVED = "Z";
	SUPPORTED_ERROR_TYPES = [
		"EvalError",
		"RangeError",
		"ReferenceError",
		"SyntaxError",
		"TypeError",
		"URIError"
	];
	Deferred2 = class {
		constructor() {
			this.promise = new Promise((resolve, reject) => {
				this.resolve = resolve;
				this.reject = reject;
			});
		}
	};
	TIME_LIMIT_MS = 1;
	getNow = () => Date.now();
	yieldToMain = () => new Promise((resolve) => setTimeout(resolve, 0));
	objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
	globalObj = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : void 0;
	ESCAPE_LOOKUP = {
		"&": "\\u0026",
		">": "\\u003e",
		"<": "\\u003c",
		"\u2028": "\\u2028",
		"\u2029": "\\u2029"
	};
	ESCAPE_REGEX = /[&><\u2028\u2029]/g;
	SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
	SingleFetchNoResultError = class extends Error {};
	NO_BODY_STATUS_CODES = /* @__PURE__ */ new Set([
		100,
		101,
		204,
		205
	]);
	nextPaths$1 = /* @__PURE__ */ new Set();
	discoveredPathsMaxSize$1 = 1e3;
	discoveredPaths$1 = /* @__PURE__ */ new Set();
	MANIFEST_VERSION_STORAGE_KEY = "react-router-manifest-version";
	FrameworkContext = import_react$13.createContext(void 0);
	FrameworkContext.displayName = "FrameworkContext";
	CRITICAL_CSS_DATA_ATTRIBUTE = "data-react-router-critical-css";
	isHydrated = false;
	RemixErrorBoundary = class extends import_react$12.Component {
		constructor(props) {
			super(props);
			this.state = {
				error: props.error || null,
				location: props.location
			};
		}
		static getDerivedStateFromError(error) {
			return { error };
		}
		static getDerivedStateFromProps(props, state) {
			if (state.location !== props.location) return {
				error: props.error || null,
				location: props.location
			};
			return {
				error: props.error || state.error,
				location: state.location
			};
		}
		render() {
			if (this.state.error) return /* @__PURE__ */ import_react$12.createElement(RemixRootDefaultErrorBoundary, {
				error: this.state.error,
				isOutsideRemixApp: true
			});
			else return this.props.children;
		}
	};
	isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
	try {
		if (isBrowser2) window.__reactRouterVersion = "7.17.0";
	} catch (e) {}
	HistoryRouter.displayName = "unstable_HistoryRouter";
	ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
	Link$1 = import_react$17.forwardRef(function LinkWithRef({ onClick, discover = "render", prefetch = "none", relative, reloadDocument, replace: replace2, mask, state, target, to, preventScrollReset, viewTransition, defaultShouldRevalidate, ...rest }, forwardedRef) {
		let { basename, navigator, useTransitions } = import_react$17.useContext(NavigationContext);
		let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
		let parsed = parseToInfo(to, basename);
		to = parsed.to;
		let href = useHref(to, { relative });
		let location = useLocation$1();
		let maskedHref = null;
		if (mask) {
			let resolved = resolveTo(mask, [], location.mask ? location.mask.pathname : "/", true);
			if (basename !== "/") resolved.pathname = resolved.pathname === "/" ? basename : joinPaths([basename, resolved.pathname]);
			maskedHref = navigator.createHref(resolved);
		}
		let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(prefetch, rest);
		let internalOnClick = useLinkClickHandler(to, {
			replace: replace2,
			mask,
			state,
			target,
			preventScrollReset,
			relative,
			viewTransition,
			defaultShouldRevalidate,
			useTransitions
		});
		function handleClick(event) {
			if (onClick) onClick(event);
			if (!event.defaultPrevented) internalOnClick(event);
		}
		let isSpaLink = !(parsed.isExternal || reloadDocument);
		let link = /* @__PURE__ */ import_react$17.createElement("a", {
			...rest,
			...prefetchHandlers,
			href: (isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href,
			onClick: isSpaLink ? handleClick : onClick,
			ref: mergeRefs(forwardedRef, prefetchRef),
			target,
			"data-discover": !isAbsolute && discover === "render" ? "true" : void 0
		});
		return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ import_react$17.createElement(import_react$17.Fragment, null, link, /* @__PURE__ */ import_react$17.createElement(PrefetchPageLinks, { page: href })) : link;
	});
	Link$1.displayName = "Link";
	NavLink = import_react$17.forwardRef(function NavLinkWithRef({ "aria-current": ariaCurrentProp = "page", caseSensitive = false, className: classNameProp = "", end = false, style: styleProp, to, viewTransition, children, ...rest }, ref) {
		let path = useResolvedPath(to, { relative: rest.relative });
		let location = useLocation$1();
		let routerState = import_react$17.useContext(DataRouterStateContext);
		let { navigator, basename } = import_react$17.useContext(NavigationContext);
		let isTransitioning = routerState != null && useViewTransitionState(path) && viewTransition === true;
		let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
		let locationPathname = location.pathname;
		let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
		if (!caseSensitive) {
			locationPathname = locationPathname.toLowerCase();
			nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
			toPathname = toPathname.toLowerCase();
		}
		if (nextLocationPathname && basename) nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
		const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
		let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
		let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
		let renderProps = {
			isActive,
			isPending,
			isTransitioning
		};
		let ariaCurrent = isActive ? ariaCurrentProp : void 0;
		let className;
		if (typeof classNameProp === "function") className = classNameProp(renderProps);
		else className = [
			classNameProp,
			isActive ? "active" : null,
			isPending ? "pending" : null,
			isTransitioning ? "transitioning" : null
		].filter(Boolean).join(" ");
		let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
		return /* @__PURE__ */ import_react$17.createElement(Link$1, {
			...rest,
			"aria-current": ariaCurrent,
			className,
			ref,
			style,
			to,
			viewTransition
		}, typeof children === "function" ? children(renderProps) : children);
	});
	NavLink.displayName = "NavLink";
	Form = import_react$17.forwardRef(({ discover = "render", fetcherKey, navigate, reloadDocument, replace: replace2, state, method = defaultMethod, action, onSubmit, relative, preventScrollReset, viewTransition, defaultShouldRevalidate, ...props }, forwardedRef) => {
		let { useTransitions } = import_react$17.useContext(NavigationContext);
		let submit = useSubmit();
		let formAction = useFormAction(action, { relative });
		let formMethod = method.toLowerCase() === "get" ? "get" : "post";
		let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
		let submitHandler = (event) => {
			onSubmit && onSubmit(event);
			if (event.defaultPrevented) return;
			event.preventDefault();
			let submitter = event.nativeEvent.submitter;
			let submitMethod = submitter?.getAttribute("formmethod") || method;
			let doSubmit = () => submit(submitter || event.currentTarget, {
				fetcherKey,
				method: submitMethod,
				navigate,
				replace: replace2,
				state,
				relative,
				preventScrollReset,
				viewTransition,
				defaultShouldRevalidate
			});
			if (useTransitions && navigate !== false) import_react$17.startTransition(() => doSubmit());
			else doSubmit();
		};
		return /* @__PURE__ */ import_react$17.createElement("form", {
			ref: forwardedRef,
			method: formMethod,
			action: formAction,
			onSubmit: reloadDocument ? onSubmit : submitHandler,
			...props,
			"data-discover": !isAbsolute && discover === "render" ? "true" : void 0
		});
	});
	Form.displayName = "Form";
	ScrollRestoration.displayName = "ScrollRestoration";
	fetcherId = 0;
	getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
	SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
	savedScrollPositions = {};
	ABSOLUTE_URL_REGEX3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
}));
//#endregion
//#region node_modules/cookie/dist/index.js
var require_dist$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.parse = parseCookie;
	exports.stringifySetCookie = stringifySetCookie;
	exports.serialize = stringifySetCookie;
	exports.stringifySetCookie = stringifySetCookie;
	exports.serialize = stringifySetCookie;
	/**
	* RegExp to match cookie-name in RFC 6265 sec 4.1.1
	* This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
	* which has been replaced by the token definition in RFC 7230 appendix B.
	*
	* cookie-name       = token
	* token             = 1*tchar
	* tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
	*                     "*" / "+" / "-" / "." / "^" / "_" /
	*                     "`" / "|" / "~" / DIGIT / ALPHA
	*
	* Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
	* Allow same range as cookie value, except `=`, which delimits end of name.
	*/
	var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
	/**
	* RegExp to match cookie-value in RFC 6265 sec 4.1.1
	*
	* cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
	* cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
	*                     ; US-ASCII characters excluding CTLs,
	*                     ; whitespace DQUOTE, comma, semicolon,
	*                     ; and backslash
	*
	* Allowing more characters: https://github.com/jshttp/cookie/issues/191
	* Comma, backslash, and DQUOTE are not part of the parsing algorithm.
	*/
	var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
	/**
	* RegExp to match domain-value in RFC 6265 sec 4.1.1
	*
	* domain-value      = <subdomain>
	*                     ; defined in [RFC1034], Section 3.5, as
	*                     ; enhanced by [RFC1123], Section 2.1
	* <subdomain>       = <label> | <subdomain> "." <label>
	* <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
	*                     Labels must be 63 characters or less.
	*                     'let-dig' not 'letter' in the first char, per RFC1123
	* <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
	* <let-dig-hyp>     = <let-dig> | "-"
	* <let-dig>         = <letter> | <digit>
	* <letter>          = any one of the 52 alphabetic characters A through Z in
	*                     upper case and a through z in lower case
	* <digit>           = any one of the ten digits 0 through 9
	*
	* Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
	*
	* > (Note that a leading %x2E ("."), if present, is ignored even though that
	* character is not permitted, but a trailing %x2E ("."), if present, will
	* cause the user agent to ignore the attribute.)
	*/
	var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
	/**
	* RegExp to match path-value in RFC 6265 sec 4.1.1
	*
	* path-value        = <any CHAR except CTLs or ";">
	* CHAR              = %x01-7F
	*                     ; defined in RFC 5234 appendix B.1
	*/
	var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
	var __toString = Object.prototype.toString;
	var NullObject = /* @__PURE__ */ (() => {
		const C = function() {};
		C.prototype = Object.create(null);
		return C;
	})();
	/**
	* Parse a `Cookie` header.
	*
	* Parse the given cookie header string into an object
	* The object has the various cookies as keys(names) => values
	*/
	function parseCookie(str, options) {
		const obj = new NullObject();
		const len = str.length;
		if (len < 2) return obj;
		const dec = options?.decode || decode;
		let index = 0;
		do {
			const eqIdx = eqIndex(str, index, len);
			if (eqIdx === -1) break;
			const endIdx = endIndex(str, index, len);
			if (eqIdx > endIdx) {
				index = str.lastIndexOf(";", eqIdx - 1) + 1;
				continue;
			}
			const key = valueSlice(str, index, eqIdx);
			if (obj[key] === void 0) obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
			index = endIdx + 1;
		} while (index < len);
		return obj;
	}
	function stringifySetCookie(_name, _val, _opts) {
		const cookie = typeof _name === "object" ? _name : {
			..._opts,
			name: _name,
			value: String(_val)
		};
		const enc = (typeof _val === "object" ? _val : _opts)?.encode || encodeURIComponent;
		if (!cookieNameRegExp.test(cookie.name)) throw new TypeError(`argument name is invalid: ${cookie.name}`);
		const value = cookie.value ? enc(cookie.value) : "";
		if (!cookieValueRegExp.test(value)) throw new TypeError(`argument val is invalid: ${cookie.value}`);
		let str = cookie.name + "=" + value;
		if (cookie.maxAge !== void 0) {
			if (!Number.isInteger(cookie.maxAge)) throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
			str += "; Max-Age=" + cookie.maxAge;
		}
		if (cookie.domain) {
			if (!domainValueRegExp.test(cookie.domain)) throw new TypeError(`option domain is invalid: ${cookie.domain}`);
			str += "; Domain=" + cookie.domain;
		}
		if (cookie.path) {
			if (!pathValueRegExp.test(cookie.path)) throw new TypeError(`option path is invalid: ${cookie.path}`);
			str += "; Path=" + cookie.path;
		}
		if (cookie.expires) {
			if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) throw new TypeError(`option expires is invalid: ${cookie.expires}`);
			str += "; Expires=" + cookie.expires.toUTCString();
		}
		if (cookie.httpOnly) str += "; HttpOnly";
		if (cookie.secure) str += "; Secure";
		if (cookie.partitioned) str += "; Partitioned";
		if (cookie.priority) switch (typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0) {
			case "low":
				str += "; Priority=Low";
				break;
			case "medium":
				str += "; Priority=Medium";
				break;
			case "high":
				str += "; Priority=High";
				break;
			default: throw new TypeError(`option priority is invalid: ${cookie.priority}`);
		}
		if (cookie.sameSite) switch (typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite) {
			case true:
			case "strict":
				str += "; SameSite=Strict";
				break;
			case "lax":
				str += "; SameSite=Lax";
				break;
			case "none":
				str += "; SameSite=None";
				break;
			default: throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
		}
		return str;
	}
	/**
	* Find the `;` character between `min` and `len` in str.
	*/
	function endIndex(str, min, len) {
		const index = str.indexOf(";", min);
		return index === -1 ? len : index;
	}
	/**
	* Find the `=` character between `min` and `max` in str.
	*/
	function eqIndex(str, min, max) {
		const index = str.indexOf("=", min);
		return index < max ? index : -1;
	}
	/**
	* Slice out a value between startPod to max.
	*/
	function valueSlice(str, min, max) {
		let start = min;
		let end = max;
		do {
			const code = str.charCodeAt(start);
			if (code !== 32 && code !== 9) break;
		} while (++start < end);
		while (end > start) {
			const code = str.charCodeAt(end - 1);
			if (code !== 32 && code !== 9) break;
			end--;
		}
		return str.slice(start, end);
	}
	/**
	* URL-decode string value. Optimized to skip native call when no %.
	*/
	function decode(str) {
		if (str.indexOf("%") === -1) return str;
		try {
			return decodeURIComponent(str);
		} catch (e) {
			return str;
		}
	}
	/**
	* Determine if value is a Date.
	*/
	function isDate(val) {
		return __toString.call(val) === "[object Date]";
	}
}));
//#endregion
//#region node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var defaultParseOptions = {
		decodeValues: true,
		map: false,
		silent: false
	};
	function isForbiddenKey(key) {
		return typeof key !== "string" || key in {};
	}
	function createNullObj() {
		return Object.create(null);
	}
	function isNonEmptyString(str) {
		return typeof str === "string" && !!str.trim();
	}
	function parseString(setCookieValue, options) {
		var parts = setCookieValue.split(";").filter(isNonEmptyString);
		var parsed = parseNameValuePair(parts.shift());
		var name = parsed.name;
		var value = parsed.value;
		options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
		if (isForbiddenKey(name)) return null;
		try {
			value = options.decodeValues ? decodeURIComponent(value) : value;
		} catch (e) {
			console.error("set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.", e);
		}
		var cookie = createNullObj();
		cookie.name = name;
		cookie.value = value;
		parts.forEach(function(part) {
			var sides = part.split("=");
			var key = sides.shift().trimLeft().toLowerCase();
			if (isForbiddenKey(key)) return;
			var value = sides.join("=");
			if (key === "expires") cookie.expires = new Date(value);
			else if (key === "max-age") {
				var n = parseInt(value, 10);
				if (!Number.isNaN(n)) cookie.maxAge = n;
			} else if (key === "secure") cookie.secure = true;
			else if (key === "httponly") cookie.httpOnly = true;
			else if (key === "samesite") cookie.sameSite = value;
			else if (key === "partitioned") cookie.partitioned = true;
			else if (key) cookie[key] = value;
		});
		return cookie;
	}
	function parseNameValuePair(nameValuePairStr) {
		var name = "";
		var value = "";
		var nameValueArr = nameValuePairStr.split("=");
		if (nameValueArr.length > 1) {
			name = nameValueArr.shift();
			value = nameValueArr.join("=");
		} else value = nameValuePairStr;
		return {
			name,
			value
		};
	}
	function parse(input, options) {
		options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
		if (!input) if (!options.map) return [];
		else return createNullObj();
		if (input.headers) if (typeof input.headers.getSetCookie === "function") input = input.headers.getSetCookie();
		else if (input.headers["set-cookie"]) input = input.headers["set-cookie"];
		else {
			var sch = input.headers[Object.keys(input.headers).find(function(key) {
				return key.toLowerCase() === "set-cookie";
			})];
			if (!sch && input.headers.cookie && !options.silent) console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.");
			input = sch;
		}
		if (!Array.isArray(input)) input = [input];
		if (!options.map) return input.filter(isNonEmptyString).map(function(str) {
			return parseString(str, options);
		}).filter(Boolean);
		else {
			var cookies = createNullObj();
			return input.filter(isNonEmptyString).reduce(function(cookies, str) {
				var cookie = parseString(str, options);
				if (cookie && !isForbiddenKey(cookie.name)) cookies[cookie.name] = cookie;
				return cookies;
			}, cookies);
		}
	}
	function splitCookiesString(cookiesString) {
		if (Array.isArray(cookiesString)) return cookiesString;
		if (typeof cookiesString !== "string") return [];
		var cookiesStrings = [];
		var pos = 0;
		var start;
		var ch;
		var lastComma;
		var nextStart;
		var cookiesSeparatorFound;
		function skipWhitespace() {
			while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) pos += 1;
			return pos < cookiesString.length;
		}
		function notSpecialChar() {
			ch = cookiesString.charAt(pos);
			return ch !== "=" && ch !== ";" && ch !== ",";
		}
		while (pos < cookiesString.length) {
			start = pos;
			cookiesSeparatorFound = false;
			while (skipWhitespace()) {
				ch = cookiesString.charAt(pos);
				if (ch === ",") {
					lastComma = pos;
					pos += 1;
					skipWhitespace();
					nextStart = pos;
					while (pos < cookiesString.length && notSpecialChar()) pos += 1;
					if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
						cookiesSeparatorFound = true;
						pos = nextStart;
						cookiesStrings.push(cookiesString.substring(start, lastComma));
						start = pos;
					} else pos = lastComma + 1;
				} else pos += 1;
			}
			if (!cookiesSeparatorFound || pos >= cookiesString.length) cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
		}
		return cookiesStrings;
	}
	module.exports = parse;
	module.exports.parse = parse;
	module.exports.parseString = parseString;
	module.exports.splitCookiesString = splitCookiesString;
}));
//#endregion
//#region node_modules/react-router/dist/development/chunk-ASILSGTR.mjs
/**
* react-router v7.17.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function ServerRouter({ context, url, nonce }) {
	if (typeof url === "string") url = new URL(url);
	let { manifest, routeModules, criticalCss, serverHandoffString } = context;
	let routes = createServerRoutes(manifest.routes, routeModules, context.future, context.isSpaMode);
	context.staticHandlerContext.loaderData = { ...context.staticHandlerContext.loaderData };
	for (let match of context.staticHandlerContext.matches) {
		let routeId = match.route.id;
		let route = routeModules[routeId];
		let manifestRoute = context.manifest.routes[routeId];
		if (route && manifestRoute && shouldHydrateRouteLoader(routeId, route.clientLoader, manifestRoute.hasLoader, context.isSpaMode) && (route.HydrateFallback || !manifestRoute.hasLoader)) delete context.staticHandlerContext.loaderData[routeId];
	}
	let router = createStaticRouter(routes, context.staticHandlerContext, { branches: context.branches });
	return /* @__PURE__ */ import_react$4.createElement(import_react$4.Fragment, null, /* @__PURE__ */ import_react$4.createElement(FrameworkContext.Provider, { value: {
		manifest,
		routeModules,
		criticalCss,
		serverHandoffString,
		future: context.future,
		ssr: context.ssr,
		isSpaMode: context.isSpaMode,
		routeDiscovery: context.routeDiscovery,
		serializeError: context.serializeError,
		renderMeta: context.renderMeta
	} }, /* @__PURE__ */ import_react$4.createElement(RemixErrorBoundary, { location: router.state.location }, /* @__PURE__ */ import_react$4.createElement(StaticRouterProvider, {
		router,
		context: context.staticHandlerContext,
		hydrate: false
	}))), context.serverHandoffStream ? /* @__PURE__ */ import_react$4.createElement(import_react$4.Suspense, null, /* @__PURE__ */ import_react$4.createElement(StreamTransfer, {
		context,
		identifier: 0,
		reader: context.serverHandoffStream.getReader(),
		textDecoder: new TextDecoder(),
		nonce
	})) : null);
}
function createRoutesStub(routes, _context) {
	return function RoutesTestStub({ initialEntries, initialIndex, hydrationData, future }) {
		let routerRef = import_react$5.useRef();
		let frameworkContextRef = import_react$5.useRef();
		if (routerRef.current == null) {
			frameworkContextRef.current = {
				future: {
					v8_passThroughRequests: future?.v8_passThroughRequests === true,
					v8_middleware: future?.v8_middleware === true,
					v8_trailingSlashAwareDataRequests: future?.v8_trailingSlashAwareDataRequests === true
				},
				manifest: {
					routes: {},
					entry: {
						imports: [],
						module: ""
					},
					url: "",
					version: ""
				},
				routeModules: {},
				ssr: false,
				isSpaMode: false,
				routeDiscovery: {
					mode: "lazy",
					manifestPath: "/__manifest"
				}
			};
			routerRef.current = createMemoryRouter(processRoutes(convertRoutesToDataRoutes(routes, (r) => r), _context !== void 0 ? _context : future?.v8_middleware ? new RouterContextProvider() : {}, frameworkContextRef.current.manifest, frameworkContextRef.current.routeModules), {
				initialEntries,
				initialIndex,
				hydrationData
			});
		}
		return /* @__PURE__ */ import_react$5.createElement(FrameworkContext.Provider, { value: frameworkContextRef.current }, /* @__PURE__ */ import_react$5.createElement(RouterProvider$1, { router: routerRef.current }));
	};
}
function processRoutes(routes, context, manifest, routeModules, parentId) {
	return routes.map((route) => {
		if (!route.id) throw new Error("Expected a route.id in react-router processRoutes() function");
		let newRoute = {
			id: route.id,
			path: route.path,
			index: route.index,
			Component: route.Component ? withComponentProps(route.Component) : void 0,
			HydrateFallback: route.HydrateFallback ? withHydrateFallbackProps(route.HydrateFallback) : void 0,
			ErrorBoundary: route.ErrorBoundary ? withErrorBoundaryProps(route.ErrorBoundary) : void 0,
			action: route.action ? (args) => route.action({
				...args,
				context
			}) : void 0,
			loader: route.loader ? (args) => route.loader({
				...args,
				context
			}) : void 0,
			middleware: route.middleware ? route.middleware.map((mw) => (...args) => mw({
				...args[0],
				context
			}, args[1])) : void 0,
			handle: route.handle,
			shouldRevalidate: route.shouldRevalidate
		};
		let entryRoute = {
			id: route.id,
			path: route.path,
			index: route.index,
			parentId,
			hasAction: route.action != null,
			hasLoader: route.loader != null,
			hasClientAction: false,
			hasClientLoader: false,
			hasClientMiddleware: false,
			hasErrorBoundary: route.ErrorBoundary != null,
			module: "build/stub-path-to-module.js",
			clientActionModule: void 0,
			clientLoaderModule: void 0,
			clientMiddlewareModule: void 0,
			hydrateFallbackModule: void 0
		};
		manifest.routes[newRoute.id] = entryRoute;
		routeModules[route.id] = {
			default: newRoute.Component || Outlet,
			ErrorBoundary: newRoute.ErrorBoundary || void 0,
			handle: route.handle,
			links: route.links,
			meta: route.meta,
			shouldRevalidate: route.shouldRevalidate
		};
		if (route.children) newRoute.children = processRoutes(route.children, context, manifest, routeModules, newRoute.id);
		return newRoute;
	});
}
function byteStringToUint8Array(byteString) {
	let array = new Uint8Array(byteString.length);
	for (let i = 0; i < byteString.length; i++) array[i] = byteString.charCodeAt(i);
	return array;
}
async function encodeCookieValue(value, secrets) {
	let encoded = encodeData(value);
	if (secrets.length > 0) encoded = await sign(encoded, secrets[0]);
	return encoded;
}
async function decodeCookieValue(value, secrets) {
	if (secrets.length > 0) {
		for (let secret of secrets) {
			let unsignedValue = await unsign(value, secret);
			if (unsignedValue !== false) return decodeData(unsignedValue);
		}
		return null;
	}
	return decodeData(value);
}
function encodeData(value) {
	return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
	try {
		return JSON.parse(decodeURIComponent(myEscape(atob(value))));
	} catch (e) {
		return {};
	}
}
function myEscape(value) {
	let str = value.toString();
	let result = "";
	let index = 0;
	let chr, code;
	while (index < str.length) {
		chr = str.charAt(index++);
		if (/[\w*+\-./@]/.exec(chr)) result += chr;
		else {
			code = chr.charCodeAt(0);
			if (code < 256) result += "%" + hex$1(code, 2);
			else result += "%u" + hex$1(code, 4).toUpperCase();
		}
	}
	return result;
}
function hex$1(code, length) {
	let result = code.toString(16);
	while (result.length < length) result = "0" + result;
	return result;
}
function myUnescape(value) {
	let str = value.toString();
	let result = "";
	let index = 0;
	let chr, part;
	while (index < str.length) {
		chr = str.charAt(index++);
		if (chr === "%") if (str.charAt(index) === "u") {
			part = str.slice(index + 1, index + 5);
			if (/^[\da-f]{4}$/i.exec(part)) {
				result += String.fromCharCode(parseInt(part, 16));
				index += 5;
				continue;
			}
		} else {
			part = str.slice(index, index + 2);
			if (/^[\da-f]{2}$/i.exec(part)) {
				result += String.fromCharCode(parseInt(part, 16));
				index += 2;
				continue;
			}
		}
		result += chr;
	}
	return result;
}
function warnOnceAboutExpiresCookie(name, expires) {
	warnOnce$1(!expires, `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
}
function createEntryRouteModules(manifest) {
	return Object.keys(manifest).reduce((memo, routeId) => {
		let route = manifest[routeId];
		if (route) memo[routeId] = route.module;
		return memo;
	}, {});
}
function isServerMode(value) {
	return value === "development" || value === "production" || value === "test";
}
function sanitizeError(error, serverMode) {
	if (error instanceof Error && serverMode !== "development") {
		let sanitized = /* @__PURE__ */ new Error("Unexpected Server Error");
		sanitized.stack = void 0;
		return sanitized;
	}
	return error;
}
function sanitizeErrors(errors, serverMode) {
	return Object.entries(errors).reduce((acc, [routeId, error]) => {
		return Object.assign(acc, { [routeId]: sanitizeError(error, serverMode) });
	}, {});
}
function serializeError(error, serverMode) {
	let sanitized = sanitizeError(error, serverMode);
	return {
		message: sanitized.message,
		stack: sanitized.stack
	};
}
function serializeErrors(errors, serverMode) {
	if (!errors) return null;
	let entries = Object.entries(errors);
	let serialized = {};
	for (let [key, val] of entries) if (isRouteErrorResponse(val)) serialized[key] = {
		...val,
		__type: "RouteErrorResponse"
	};
	else if (val instanceof Error) {
		let sanitized = sanitizeError(val, serverMode);
		serialized[key] = {
			message: sanitized.message,
			stack: sanitized.stack,
			__type: "Error",
			...sanitized.name !== "Error" ? { __subType: sanitized.name } : {}
		};
	} else serialized[key] = val;
	return serialized;
}
function invariant$1(value, message) {
	if (value === false || value === null || typeof value === "undefined") {
		console.error("The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose");
		throw new Error(message);
	}
}
function matchServerRoutes(manifest, dataRoutes, branches, pathname, basename) {
	let matches = matchRoutesImpl(dataRoutes, pathname, basename ?? "/", false, branches);
	if (!matches) return null;
	return matches.map((match) => {
		let route = manifest[match.route.id];
		invariant$1(route, `Route with id "${match.route.id}" not found in manifest.`);
		return {
			params: match.params,
			pathname: match.pathname,
			route
		};
	});
}
async function callRouteHandler(handler, args, future) {
	let result = await handler({
		request: future.v8_passThroughRequests ? args.request : stripRoutesParam(stripIndexParam(args.request)),
		url: args.url,
		params: args.params,
		context: args.context,
		pattern: args.pattern
	});
	if (isDataWithResponseInit(result) && result.init && result.init.status && isRedirectStatusCode(result.init.status)) throw new Response(null, result.init);
	return result;
}
function stripIndexParam(request) {
	let url = new URL(request.url);
	let indexValues = url.searchParams.getAll("index");
	url.searchParams.delete("index");
	let indexValuesToKeep = [];
	for (let indexValue of indexValues) if (indexValue) indexValuesToKeep.push(indexValue);
	for (let toKeep of indexValuesToKeep) url.searchParams.append("index", toKeep);
	let init = {
		method: request.method,
		body: request.body,
		headers: request.headers,
		signal: request.signal
	};
	if (init.body) init.duplex = "half";
	return new Request(url.href, init);
}
function stripRoutesParam(request) {
	let url = new URL(request.url);
	url.searchParams.delete("_routes");
	let init = {
		method: request.method,
		body: request.body,
		headers: request.headers,
		signal: request.signal
	};
	if (init.body) init.duplex = "half";
	return new Request(url.href, init);
}
function setDevServerHooks(devServerHooks) {
	globalThis[globalDevServerHooksKey] = devServerHooks;
}
function getDevServerHooks() {
	return globalThis[globalDevServerHooksKey];
}
function getBuildTimeHeader(request, headerName) {
	if (typeof process !== "undefined") try {
		if (process.env.hasOwnProperty("IS_RR_BUILD_REQUEST") && process.env.IS_RR_BUILD_REQUEST === "yes") return request.headers.get(headerName);
	} catch (e) {}
	return null;
}
function groupRoutesByParentId(manifest) {
	let routes = {};
	Object.values(manifest).forEach((route) => {
		if (route) {
			let parentId = route.parentId || "";
			if (!routes[parentId]) routes[parentId] = [];
			routes[parentId].push(route);
		}
	});
	return routes;
}
function createStaticHandlerDataRoutes(manifest, future, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
	return (routesByParentId[parentId] || []).map((route) => {
		let commonRoute = {
			hasErrorBoundary: route.id === "root" || route.module.ErrorBoundary != null,
			id: route.id,
			path: route.path,
			middleware: route.module.middleware,
			loader: route.module.loader ? async (args) => {
				let preRenderedData = getBuildTimeHeader(args.request, "X-React-Router-Prerender-Data");
				if (preRenderedData != null) {
					let encoded = preRenderedData ? decodeURI(preRenderedData) : preRenderedData;
					invariant$1(encoded, "Missing prerendered data for route");
					let uint8array = new TextEncoder().encode(encoded);
					let data2 = (await decodeViaTurboStream(new ReadableStream({ start(controller) {
						controller.enqueue(uint8array);
						controller.close();
					} }), global)).value;
					if (data2 && SingleFetchRedirectSymbol in data2) {
						let result = data2[SingleFetchRedirectSymbol];
						let init = { status: result.status };
						if (result.reload) throw redirectDocument(result.redirect, init);
						else if (result.replace) throw replace(result.redirect, init);
						else throw redirect(result.redirect, init);
					} else {
						invariant$1(data2 && route.id in data2, "Unable to decode prerendered data");
						let result = data2[route.id];
						invariant$1("data" in result, "Unable to process prerendered data");
						return result.data;
					}
				}
				return await callRouteHandler(route.module.loader, args, future);
			} : void 0,
			action: route.module.action ? (args) => callRouteHandler(route.module.action, args, future) : void 0,
			handle: route.module.handle
		};
		return route.index ? {
			index: true,
			...commonRoute
		} : {
			caseSensitive: route.caseSensitive,
			children: createStaticHandlerDataRoutes(manifest, future, route.id, routesByParentId),
			...commonRoute
		};
	});
}
function createServerHandoffString(serverHandoff) {
	return escapeHtml(JSON.stringify(serverHandoff));
}
function getDocumentHeaders(context, build) {
	return getDocumentHeadersImpl(context, (m) => {
		let route = build.routes[m.route.id];
		invariant$1(route, `Route with id "${m.route.id}" not found in build`);
		return route.module.headers;
	});
}
function getDocumentHeadersImpl(context, getRouteHeadersFn, _defaultHeaders) {
	let boundaryIdx = context.errors ? context.matches.findIndex((m) => context.errors[m.route.id]) : -1;
	let matches = boundaryIdx >= 0 ? context.matches.slice(0, boundaryIdx + 1) : context.matches;
	let errorHeaders;
	if (boundaryIdx >= 0) {
		let { actionHeaders, actionData, loaderHeaders, loaderData } = context;
		context.matches.slice(boundaryIdx).some((match) => {
			let id = match.route.id;
			if (actionHeaders[id] && (!actionData || !actionData.hasOwnProperty(id))) errorHeaders = actionHeaders[id];
			else if (loaderHeaders[id] && !loaderData.hasOwnProperty(id)) errorHeaders = loaderHeaders[id];
			return errorHeaders != null;
		});
	}
	const defaultHeaders = new Headers(_defaultHeaders);
	return matches.reduce((parentHeaders, match, idx) => {
		let { id } = match.route;
		let loaderHeaders = context.loaderHeaders[id] || new Headers();
		let actionHeaders = context.actionHeaders[id] || new Headers();
		let includeErrorHeaders = errorHeaders != null && idx === matches.length - 1;
		let includeErrorCookies = includeErrorHeaders && errorHeaders !== loaderHeaders && errorHeaders !== actionHeaders;
		let headersFn = getRouteHeadersFn(match);
		if (headersFn == null) {
			let headers2 = new Headers(parentHeaders);
			if (includeErrorCookies) prependCookies(errorHeaders, headers2);
			prependCookies(actionHeaders, headers2);
			prependCookies(loaderHeaders, headers2);
			return headers2;
		}
		let headers = new Headers(typeof headersFn === "function" ? headersFn({
			loaderHeaders,
			parentHeaders,
			actionHeaders,
			errorHeaders: includeErrorHeaders ? errorHeaders : void 0
		}) : headersFn);
		if (includeErrorCookies) prependCookies(errorHeaders, headers);
		prependCookies(actionHeaders, headers);
		prependCookies(loaderHeaders, headers);
		prependCookies(parentHeaders, headers);
		return headers;
	}, new Headers(defaultHeaders));
}
function prependCookies(parentHeaders, childHeaders) {
	let parentSetCookieString = parentHeaders.get("Set-Cookie");
	if (parentSetCookieString) {
		let cookies = (0, import_set_cookie.splitCookiesString)(parentSetCookieString);
		let childCookies = new Set(childHeaders.getSetCookie());
		cookies.forEach((cookie) => {
			if (!childCookies.has(cookie)) childHeaders.append("Set-Cookie", cookie);
		});
	}
}
function throwIfPotentialCSRFAttack(headers, allowedActionOrigins) {
	let originHeader = headers.get("origin");
	let originDomain = null;
	try {
		originDomain = typeof originHeader === "string" && originHeader !== "null" ? new URL(originHeader).host : originHeader;
	} catch {
		throw new Error(`\`origin\` header is not a valid URL. Aborting the action.`);
	}
	let host = parseHostHeader(headers);
	if (originDomain && (!host || originDomain !== host.value)) {
		if (!isAllowedOrigin(originDomain, allowedActionOrigins)) if (host) throw new Error(`${host.type} header does not match \`origin\` header from a forwarded action request. Aborting the action.`);
		else throw new Error("`x-forwarded-host` or `host` headers are not provided. One of these is needed to compare the `origin` header from a forwarded action request. Aborting the action.");
	}
}
function matchWildcardDomain(domain, pattern) {
	const domainParts = domain.split(".");
	const patternParts = pattern.split(".");
	if (patternParts.length < 1) return false;
	if (domainParts.length < patternParts.length) return false;
	while (patternParts.length) {
		const patternPart = patternParts.pop();
		const domainPart = domainParts.pop();
		switch (patternPart) {
			case "": return false;
			case "*": if (domainPart) continue;
			else return false;
			case "**":
				if (patternParts.length > 0) return false;
				return domainPart !== void 0;
			case void 0:
			default: if (domainPart !== patternPart) return false;
		}
	}
	return domainParts.length === 0;
}
function isAllowedOrigin(originDomain, allowedActionOrigins = []) {
	return allowedActionOrigins.some((allowedOrigin) => allowedOrigin && (allowedOrigin === originDomain || matchWildcardDomain(originDomain, allowedOrigin)));
}
function parseHostHeader(headers) {
	let forwardedHostValue = headers.get("x-forwarded-host")?.split(",")[0]?.trim();
	let hostHeader = headers.get("host");
	return forwardedHostValue ? {
		type: "x-forwarded-host",
		value: forwardedHostValue
	} : hostHeader ? {
		type: "host",
		value: hostHeader
	} : void 0;
}
function getNormalizedPath(request, basename, future) {
	basename = basename || "/";
	let url = new URL(request.url);
	let pathname = url.pathname;
	if (future?.v8_trailingSlashAwareDataRequests) if (pathname.endsWith("/_.data")) pathname = pathname.replace(/_\.data$/, "");
	else pathname = pathname.replace(/\.data$/, "");
	else {
		if (stripBasename(pathname, basename) === "/_root.data") pathname = basename;
		else if (pathname.endsWith(".data")) pathname = pathname.replace(/\.data$/, "");
		if (stripBasename(pathname, basename) !== "/" && pathname.endsWith("/")) pathname = pathname.slice(0, -1);
	}
	let searchParams = new URLSearchParams(url.search);
	searchParams.delete("_routes");
	let search = searchParams.toString();
	if (search) search = `?${search}`;
	return {
		pathname,
		search,
		hash: ""
	};
}
async function singleFetchAction(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
	try {
		try {
			throwIfPotentialCSRFAttack(request.headers, Array.isArray(build.allowedActionOrigins) ? build.allowedActionOrigins : []);
		} catch (e) {
			return handleQueryError(/* @__PURE__ */ new Error("Bad Request"), 400);
		}
		let handlerRequest = build.future.v8_passThroughRequests ? request : new Request(handlerUrl, {
			method: request.method,
			body: request.body,
			headers: request.headers,
			signal: request.signal,
			...request.body ? { duplex: "half" } : void 0
		});
		return handleQueryResult(await staticHandler.query(handlerRequest, {
			requestContext: loadContext,
			skipLoaderErrorBubbling: true,
			skipRevalidation: true,
			generateMiddlewareResponse: build.future.v8_middleware ? async (query) => {
				try {
					return handleQueryResult(await query(handlerRequest));
				} catch (error) {
					return handleQueryError(error);
				}
			} : void 0,
			normalizePath: (r) => getNormalizedPath(r, build.basename, build.future)
		}));
	} catch (error) {
		return handleQueryError(error);
	}
	function handleQueryResult(result) {
		return isResponse(result) ? result : staticContextToResponse(result);
	}
	function handleQueryError(error, status = 500) {
		handleError(error);
		return generateSingleFetchResponse(request, build, serverMode, {
			result: { error },
			headers: new Headers(),
			status
		});
	}
	function staticContextToResponse(context) {
		let headers = getDocumentHeaders(context, build);
		if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) return new Response(null, {
			status: context.statusCode,
			headers
		});
		if (context.errors) {
			Object.values(context.errors).forEach((err) => {
				if (!isRouteErrorResponse(err) || err.error) handleError(err);
			});
			context.errors = sanitizeErrors(context.errors, serverMode);
		}
		let singleFetchResult;
		if (context.errors) singleFetchResult = { error: Object.values(context.errors)[0] };
		else singleFetchResult = { data: Object.values(context.actionData || {})[0] };
		return generateSingleFetchResponse(request, build, serverMode, {
			result: singleFetchResult,
			headers,
			status: context.statusCode
		});
	}
}
async function singleFetchLoaders(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
	let routesParam = new URL(request.url).searchParams.get("_routes");
	let loadRouteIds = routesParam ? new Set(routesParam.split(",")) : null;
	try {
		let handlerRequest = build.future.v8_passThroughRequests ? request : new Request(handlerUrl, {
			headers: request.headers,
			signal: request.signal
		});
		return handleQueryResult(await staticHandler.query(handlerRequest, {
			requestContext: loadContext,
			filterMatchesToLoad: (m) => !loadRouteIds || loadRouteIds.has(m.route.id),
			skipLoaderErrorBubbling: true,
			generateMiddlewareResponse: build.future.v8_middleware ? async (query) => {
				try {
					return handleQueryResult(await query(handlerRequest));
				} catch (error) {
					return handleQueryError(error);
				}
			} : void 0,
			normalizePath: (r) => getNormalizedPath(r, build.basename, build.future)
		}));
	} catch (error) {
		return handleQueryError(error);
	}
	function handleQueryResult(result) {
		return isResponse(result) ? result : staticContextToResponse(result);
	}
	function handleQueryError(error) {
		handleError(error);
		return generateSingleFetchResponse(request, build, serverMode, {
			result: { error },
			headers: new Headers(),
			status: 500
		});
	}
	function staticContextToResponse(context) {
		let headers = getDocumentHeaders(context, build);
		if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) return new Response(null, {
			status: context.statusCode,
			headers
		});
		if (context.errors) {
			Object.values(context.errors).forEach((err) => {
				if (!isRouteErrorResponse(err) || err.error) handleError(err);
			});
			context.errors = sanitizeErrors(context.errors, serverMode);
		}
		let results = {};
		let loadedMatches = new Set(context.matches.filter((m) => loadRouteIds ? loadRouteIds.has(m.route.id) : m.route.loader != null).map((m) => m.route.id));
		if (context.errors) for (let [id, error] of Object.entries(context.errors)) results[id] = { error };
		for (let [id, data2] of Object.entries(context.loaderData)) if (!(id in results) && loadedMatches.has(id)) results[id] = { data: data2 };
		return generateSingleFetchResponse(request, build, serverMode, {
			result: results,
			headers,
			status: context.statusCode
		});
	}
}
function generateSingleFetchResponse(request, build, serverMode, { result, headers, status }) {
	let resultHeaders = new Headers(headers);
	resultHeaders.set("X-Remix-Response", "yes");
	if (SERVER_NO_BODY_STATUS_CODES.has(status)) return new Response(null, {
		status,
		headers: resultHeaders
	});
	resultHeaders.set("Content-Type", "text/x-script");
	resultHeaders.delete("Content-Length");
	return new Response(encodeViaTurboStream(result, request.signal, build.entry.module.streamTimeout, serverMode), {
		status: status || 200,
		headers: resultHeaders
	});
}
function generateSingleFetchRedirectResponse(redirectResponse, request, build, serverMode) {
	let redirect2 = getSingleFetchRedirect(redirectResponse.status, redirectResponse.headers, build.basename);
	let headers = new Headers(redirectResponse.headers);
	headers.delete("Location");
	headers.set("Content-Type", "text/x-script");
	return generateSingleFetchResponse(request, build, serverMode, {
		result: request.method === "GET" ? { [SingleFetchRedirectSymbol]: redirect2 } : redirect2,
		headers,
		status: 202
	});
}
function getSingleFetchRedirect(status, headers, basename) {
	let redirect2 = headers.get("Location");
	if (basename) redirect2 = stripBasename(redirect2, basename) || redirect2;
	return {
		redirect: redirect2,
		status,
		revalidate: headers.has("X-Remix-Revalidate") || headers.has("Set-Cookie"),
		reload: headers.has("X-Remix-Reload-Document"),
		replace: headers.has("X-Remix-Replace")
	};
}
function encodeViaTurboStream(data2, requestSignal, streamTimeout, serverMode) {
	let controller = new AbortController();
	let timeoutId = setTimeout(() => {
		controller.abort(/* @__PURE__ */ new Error("Server Timeout"));
		cleanupCallbacks();
	}, typeof streamTimeout === "number" ? streamTimeout : 4950);
	let abortControllerOnRequestAbort = () => {
		controller.abort(requestSignal.reason);
		cleanupCallbacks();
	};
	requestSignal.addEventListener("abort", abortControllerOnRequestAbort);
	let cleanupCallbacks = () => {
		clearTimeout(timeoutId);
		requestSignal.removeEventListener("abort", abortControllerOnRequestAbort);
	};
	return encode(data2, {
		signal: controller.signal,
		onComplete: cleanupCallbacks,
		plugins: [(value) => {
			if (value instanceof Error) {
				let { name, message, stack } = serverMode === "production" ? sanitizeError(value, serverMode) : value;
				return [
					"SanitizedError",
					name,
					message,
					stack
				];
			}
			if (value instanceof ErrorResponseImpl) {
				let { data: data3, status, statusText } = value;
				return [
					"ErrorResponse",
					data3,
					status,
					statusText
				];
			}
			if (value && typeof value === "object" && SingleFetchRedirectSymbol in value) return ["SingleFetchRedirect", value[SingleFetchRedirectSymbol]];
		}],
		postPlugins: [(value) => {
			if (!value) return;
			if (typeof value !== "object") return;
			return ["SingleFetchClassInstance", Object.fromEntries(Object.entries(value))];
		}, () => ["SingleFetchFallback"]]
	});
}
function derive(build, mode) {
	let dataRoutes = createStaticHandlerDataRoutes(build.routes, build.future);
	let serverMode = isServerMode(mode) ? mode : "production";
	let staticHandler = createStaticHandler(dataRoutes, {
		basename: build.basename,
		instrumentations: build.entry.module.instrumentations,
		future: build.future
	});
	let errorHandler = build.entry.module.handleError || ((error, { request }) => {
		if (serverMode !== "test" && !request.signal.aborted) console.error(isRouteErrorResponse(error) && error.error ? error.error : error);
	});
	let requestHandler = async (request, initialContext) => {
		let params = {};
		let loadContext;
		let handleError = (error) => {
			if (mode === "development") getDevServerHooks()?.processRequestError?.(error);
			errorHandler(error, {
				context: loadContext,
				params,
				request
			});
		};
		if (build.future.v8_middleware) {
			if (initialContext && !(initialContext instanceof RouterContextProvider)) {
				let error = /* @__PURE__ */ new Error("Invalid `context` value provided to `handleRequest`. When middleware is enabled you must return an instance of `RouterContextProvider` from your `getLoadContext` function.");
				handleError(error);
				return returnLastResortErrorResponse(error, serverMode);
			}
			loadContext = initialContext || new RouterContextProvider();
		} else loadContext = initialContext || {};
		let requestUrl = new URL(request.url);
		let normalizedPathname = getNormalizedPath(request, build.basename, build.future).pathname;
		let isSpaMode = getBuildTimeHeader(request, "X-React-Router-SPA-Mode") === "yes";
		if (!build.ssr) {
			let decodedPath = decodeURI(normalizedPathname);
			if (build.basename && build.basename !== "/") {
				let strippedPath = stripBasename(decodedPath, build.basename);
				if (strippedPath == null) {
					errorHandler(new ErrorResponseImpl(404, "Not Found", `Refusing to prerender the \`${decodedPath}\` path because it does not start with the basename \`${build.basename}\``), {
						context: loadContext,
						params,
						request
					});
					return new Response("Not Found", {
						status: 404,
						statusText: "Not Found"
					});
				}
				decodedPath = strippedPath;
			}
			if (build.prerender.length === 0) isSpaMode = true;
			else if (!build.prerender.includes(decodedPath) && !build.prerender.includes(decodedPath + "/")) if (requestUrl.pathname.endsWith(".data")) {
				errorHandler(new ErrorResponseImpl(404, "Not Found", `Refusing to SSR the path \`${decodedPath}\` because \`ssr:false\` is set and the path is not included in the \`prerender\` config, so in production the path will be a 404.`), {
					context: loadContext,
					params,
					request
				});
				return new Response("Not Found", {
					status: 404,
					statusText: "Not Found"
				});
			} else isSpaMode = true;
		}
		let manifestUrl = getManifestPath(build.routeDiscovery.manifestPath, build.basename);
		if (build.routeDiscovery.mode === "lazy" && requestUrl.pathname === manifestUrl) try {
			return await handleManifestRequest(build, staticHandler.dataRoutes, staticHandler._internalRouteBranches, requestUrl);
		} catch (e) {
			handleError(e);
			return new Response("Unknown Server Error", { status: 500 });
		}
		let matches = matchServerRoutes(build.routes, staticHandler.dataRoutes, staticHandler._internalRouteBranches, normalizedPathname, build.basename);
		if (matches && matches.length > 0) Object.assign(params, matches[0].params);
		let response;
		if (requestUrl.pathname.endsWith(".data")) {
			response = await handleSingleFetchRequest(serverMode, build, staticHandler, request, normalizedPathname, loadContext, handleError);
			if (isRedirectResponse(response)) response = generateSingleFetchRedirectResponse(response, request, build, serverMode);
			if (build.entry.module.handleDataRequest) {
				response = await build.entry.module.handleDataRequest(response, {
					context: loadContext,
					params: matches ? matches[0].params : {},
					request
				});
				if (isRedirectResponse(response)) response = generateSingleFetchRedirectResponse(response, request, build, serverMode);
			}
		} else if (!isSpaMode && matches && matches[matches.length - 1].route.module.default == null && matches[matches.length - 1].route.module.ErrorBoundary == null) response = await handleResourceRequest(serverMode, build, staticHandler, matches.slice(-1)[0].route.id, request, loadContext, handleError);
		else {
			let { pathname } = requestUrl;
			let criticalCss = void 0;
			if (build.unstable_getCriticalCss) criticalCss = await build.unstable_getCriticalCss({ pathname });
			else if (mode === "development" && getDevServerHooks()?.getCriticalCss) criticalCss = await getDevServerHooks()?.getCriticalCss?.(pathname);
			response = await handleDocumentRequest(serverMode, build, staticHandler, request, loadContext, handleError, isSpaMode, criticalCss);
		}
		if (request.method === "HEAD") return new Response(null, {
			headers: response.headers,
			status: response.status,
			statusText: response.statusText
		});
		return response;
	};
	if (build.entry.module.instrumentations) requestHandler = instrumentHandler(requestHandler, build.entry.module.instrumentations.map((i) => i.handler).filter(Boolean));
	return {
		serverMode,
		staticHandler,
		errorHandler,
		requestHandler
	};
}
async function handleManifestRequest(build, dataRoutes, branches, url) {
	if (build.assets.version !== url.searchParams.get("version")) return new Response(null, {
		status: 204,
		headers: { "X-Remix-Reload-Document": "true" }
	});
	if (url.toString().length > 7680) return new Response(null, {
		statusText: "Bad Request",
		status: 400
	});
	let patches = {};
	if (url.searchParams.has("paths")) {
		let paths = /* @__PURE__ */ new Set();
		(url.searchParams.get("paths") || "").split(",").filter(Boolean).forEach((path) => {
			if (!path.startsWith("/")) path = `/${path}`;
			let segments = path.split("/").slice(1);
			segments.forEach((_, i) => {
				let partialPath = segments.slice(0, i + 1).join("/");
				paths.add(`/${partialPath}`);
			});
		});
		for (let path of paths) {
			let matches = matchServerRoutes(build.routes, dataRoutes, branches, path, build.basename);
			if (matches) for (let match of matches) {
				let routeId = match.route.id;
				let route = build.assets.routes[routeId];
				if (route) patches[routeId] = route;
			}
		}
		return Response.json(patches, { headers: { "Cache-Control": "public, max-age=31536000, immutable" } });
	}
	return new Response("Invalid Request", { status: 400 });
}
async function handleSingleFetchRequest(serverMode, build, staticHandler, request, normalizedPath, loadContext, handleError) {
	let handlerUrl = new URL(request.url);
	handlerUrl.pathname = normalizedPath;
	return isMutationMethod(request.method) ? await singleFetchAction(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) : await singleFetchLoaders(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError);
}
async function handleDocumentRequest(serverMode, build, staticHandler, request, loadContext, handleError, isSpaMode, criticalCss) {
	try {
		if (isMutationMethod(request.method)) try {
			throwIfPotentialCSRFAttack(request.headers, Array.isArray(build.allowedActionOrigins) ? build.allowedActionOrigins : []);
		} catch (e) {
			handleError(e);
			return new Response("Bad Request", { status: 400 });
		}
		let result = await staticHandler.query(request, {
			requestContext: loadContext,
			generateMiddlewareResponse: build.future.v8_middleware ? async (query) => {
				try {
					let innerResult = await query(request);
					if (!isResponse(innerResult)) innerResult = await renderHtml(innerResult, isSpaMode);
					return innerResult;
				} catch (error) {
					handleError(error);
					return new Response(null, { status: 500 });
				}
			} : void 0,
			normalizePath: (r) => getNormalizedPath(r, build.basename, build.future)
		});
		if (!isResponse(result)) result = await renderHtml(result, isSpaMode);
		return result;
	} catch (error) {
		handleError(error);
		return new Response(null, { status: 500 });
	}
	async function renderHtml(context, isSpaMode2) {
		let headers = getDocumentHeaders(context, build);
		if (SERVER_NO_BODY_STATUS_CODES.has(context.statusCode)) return new Response(null, {
			status: context.statusCode,
			headers
		});
		if (context.errors) {
			Object.values(context.errors).forEach((err) => {
				if (!isRouteErrorResponse(err) || err.error) handleError(err);
			});
			context.errors = sanitizeErrors(context.errors, serverMode);
		}
		let state = {
			loaderData: context.loaderData,
			actionData: context.actionData,
			errors: serializeErrors(context.errors, serverMode)
		};
		let baseServerHandoff = {
			basename: build.basename,
			future: build.future,
			routeDiscovery: build.routeDiscovery,
			ssr: build.ssr,
			isSpaMode: isSpaMode2
		};
		let entryContext = {
			manifest: build.assets,
			branches: staticHandler._internalRouteBranches,
			routeModules: createEntryRouteModules(build.routes),
			staticHandlerContext: context,
			criticalCss,
			serverHandoffString: createServerHandoffString({
				...baseServerHandoff,
				criticalCss
			}),
			serverHandoffStream: encodeViaTurboStream(state, request.signal, build.entry.module.streamTimeout, serverMode),
			renderMeta: {},
			future: build.future,
			ssr: build.ssr,
			routeDiscovery: build.routeDiscovery,
			isSpaMode: isSpaMode2,
			serializeError: (err) => serializeError(err, serverMode)
		};
		let handleDocumentRequestFunction = build.entry.module.default;
		try {
			return await handleDocumentRequestFunction(request, context.statusCode, headers, entryContext, loadContext);
		} catch (error) {
			handleError(error);
			let errorForSecondRender = error;
			if (isResponse(error)) try {
				let data2 = await unwrapResponse(error);
				errorForSecondRender = new ErrorResponseImpl(error.status, error.statusText, data2);
			} catch (e) {}
			context = getStaticContextFromError(staticHandler.dataRoutes, context, errorForSecondRender);
			if (context.errors) context.errors = sanitizeErrors(context.errors, serverMode);
			let state2 = {
				loaderData: context.loaderData,
				actionData: context.actionData,
				errors: serializeErrors(context.errors, serverMode)
			};
			entryContext = {
				...entryContext,
				staticHandlerContext: context,
				serverHandoffString: createServerHandoffString(baseServerHandoff),
				serverHandoffStream: encodeViaTurboStream(state2, request.signal, build.entry.module.streamTimeout, serverMode),
				renderMeta: {}
			};
			try {
				return await handleDocumentRequestFunction(request, context.statusCode, headers, entryContext, loadContext);
			} catch (error2) {
				handleError(error2);
				return returnLastResortErrorResponse(error2, serverMode);
			}
		}
	}
}
async function handleResourceRequest(serverMode, build, staticHandler, routeId, request, loadContext, handleError) {
	try {
		return handleQueryRouteResult(await staticHandler.queryRoute(request, {
			routeId,
			requestContext: loadContext,
			generateMiddlewareResponse: build.future.v8_middleware ? async (queryRoute) => {
				try {
					return handleQueryRouteResult(await queryRoute(request));
				} catch (error) {
					return handleQueryRouteError(error);
				}
			} : void 0,
			normalizePath: (r) => getNormalizedPath(r, build.basename, build.future)
		}));
	} catch (error) {
		return handleQueryRouteError(error);
	}
	function handleQueryRouteResult(result) {
		if (isResponse(result)) return result;
		if (typeof result === "string") return new Response(result);
		return Response.json(result);
	}
	function handleQueryRouteError(error) {
		if (isResponse(error)) return error;
		if (isRouteErrorResponse(error)) {
			handleError(error);
			return errorResponseToJson(error, serverMode);
		}
		if (error instanceof Error && error.message === "Expected a response from queryRoute") {
			let newError = /* @__PURE__ */ new Error("Expected a Response to be returned from resource route handler");
			handleError(newError);
			return returnLastResortErrorResponse(newError, serverMode);
		}
		handleError(error);
		return returnLastResortErrorResponse(error, serverMode);
	}
}
function errorResponseToJson(errorResponse, serverMode) {
	return Response.json(serializeError(errorResponse.error || /* @__PURE__ */ new Error("Unexpected Server Error"), serverMode), {
		status: errorResponse.status,
		statusText: errorResponse.statusText
	});
}
function returnLastResortErrorResponse(error, serverMode) {
	let message = "Unexpected Server Error";
	if (serverMode !== "production") message += `

${String(error)}`;
	return new Response(message, {
		status: 500,
		headers: { "Content-Type": "text/plain" }
	});
}
function unwrapResponse(response) {
	let contentType = response.headers.get("Content-Type");
	return contentType && /\bapplication\/json\b/.test(contentType) ? response.body == null ? null : response.json() : response.text();
}
function flash(name) {
	return `__flash_${name}__`;
}
function createSessionStorage({ cookie: cookieArg, createData, readData, updateData, deleteData }) {
	let cookie = isCookie(cookieArg) ? cookieArg : createCookie(cookieArg?.name || "__session", cookieArg);
	warnOnceAboutSigningSessionCookie(cookie);
	return {
		async getSession(cookieHeader, options) {
			let id = cookieHeader && await cookie.parse(cookieHeader, options);
			return createSession(id && await readData(id) || {}, id || "");
		},
		async commitSession(session, options) {
			let { id, data: data2 } = session;
			let expires = options?.maxAge != null ? new Date(Date.now() + options.maxAge * 1e3) : options?.expires != null ? options.expires : cookie.expires;
			if (id) await updateData(id, data2, expires);
			else id = await createData(data2, expires);
			return cookie.serialize(id, options);
		},
		async destroySession(session, options) {
			await deleteData(session.id);
			return cookie.serialize("", {
				...options,
				maxAge: void 0,
				expires: /* @__PURE__ */ new Date(0)
			});
		}
	};
}
function warnOnceAboutSigningSessionCookie(cookie) {
	warnOnce$1(cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://reactrouter.com/explanation/sessions-and-cookies#signing-cookies for more information.`);
}
function createCookieSessionStorage({ cookie: cookieArg } = {}) {
	let cookie = isCookie(cookieArg) ? cookieArg : createCookie(cookieArg?.name || "__session", cookieArg);
	warnOnceAboutSigningSessionCookie(cookie);
	return {
		async getSession(cookieHeader, options) {
			return createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
		},
		async commitSession(session, options) {
			let serializedCookie = await cookie.serialize(session.data, options);
			if (serializedCookie.length > 4096) throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
			return serializedCookie;
		},
		async destroySession(_session, options) {
			return cookie.serialize("", {
				...options,
				maxAge: void 0,
				expires: /* @__PURE__ */ new Date(0)
			});
		}
	};
}
function createMemorySessionStorage({ cookie } = {}) {
	let map = /* @__PURE__ */ new Map();
	return createSessionStorage({
		cookie,
		async createData(data2, expires) {
			let id = Math.random().toString(36).substring(2, 10);
			map.set(id, {
				data: data2,
				expires
			});
			return id;
		},
		async readData(id) {
			if (map.has(id)) {
				let { data: data2, expires } = map.get(id);
				if (!expires || expires > /* @__PURE__ */ new Date()) return data2;
				if (expires) map.delete(id);
			}
			return null;
		},
		async updateData(id, data2, expires) {
			map.set(id, {
				data: data2,
				expires
			});
		},
		async deleteData(id) {
			map.delete(id);
		}
	});
}
function href(path, ...args) {
	let params = args[0];
	let result = trimTrailingSplat(path).replace(/\/:([\w-]+)(\?)?/g, (_, param, questionMark) => {
		const isRequired = questionMark === void 0;
		const value = params?.[param];
		if (isRequired && value === void 0) throw new Error(`Path '${path}' requires param '${param}' but it was not provided`);
		return value === void 0 ? "" : "/" + value;
	});
	if (path.endsWith("*")) {
		const value = params?.["*"];
		if (value !== void 0) result += "/" + value;
	}
	return result || "/";
}
function trimTrailingSplat(path) {
	let i = path.length - 1;
	let char = path[i];
	if (char !== "*" && char !== "/") return path;
	i--;
	for (; i >= 0; i--) if (path[i] !== "/") break;
	return path.slice(0, i + 1);
}
function injectRSCPayload(rscStream) {
	let decoder = new TextDecoder();
	let resolveFlightDataPromise;
	let flightDataPromise = new Promise((resolve) => resolveFlightDataPromise = resolve);
	let startedRSC = false;
	let buffered = [];
	let timeout = null;
	function flushBufferedChunks(controller) {
		for (let chunk of buffered) {
			let buf = decoder.decode(chunk, { stream: true });
			if (buf.endsWith(trailer)) buf = buf.slice(0, -trailer.length);
			controller.enqueue(encoder2.encode(buf));
		}
		buffered.length = 0;
		timeout = null;
	}
	return new TransformStream({
		transform(chunk, controller) {
			buffered.push(chunk);
			if (timeout) return;
			timeout = setTimeout(async () => {
				flushBufferedChunks(controller);
				if (!startedRSC) {
					startedRSC = true;
					writeRSCStream(rscStream, controller).catch((err) => controller.error(err)).then(resolveFlightDataPromise);
				}
			}, 0);
		},
		async flush(controller) {
			await flightDataPromise;
			if (timeout) {
				clearTimeout(timeout);
				flushBufferedChunks(controller);
			}
			controller.enqueue(encoder2.encode("</body></html>"));
		}
	});
}
async function writeRSCStream(rscStream, controller) {
	let decoder = new TextDecoder("utf-8", { fatal: true });
	const reader = rscStream.getReader();
	try {
		let read;
		while ((read = await reader.read()) && !read.done) {
			const chunk = read.value;
			try {
				writeChunk(JSON.stringify(decoder.decode(chunk, { stream: true })), controller);
			} catch (e) {
				writeChunk(`Uint8Array.from(atob(${JSON.stringify(btoa(String.fromCodePoint(...chunk)))}), m => m.codePointAt(0))`, controller);
			}
		}
	} finally {
		reader.releaseLock();
	}
	let remaining = decoder.decode();
	if (remaining.length) writeChunk(JSON.stringify(remaining), controller);
}
function writeChunk(chunk, controller) {
	controller.enqueue(encoder2.encode(`<script>${escapeScript(`(self.__FLIGHT_DATA||=[]).push(${chunk})`)}<\/script>`));
}
function escapeScript(script) {
	return script.replace(/<!--/g, "<\\!--").replace(/<\/(script)/gi, "</\\$1");
}
function ErrorWrapper({ renderAppShell, title, children }) {
	if (!renderAppShell) return children;
	return /* @__PURE__ */ import_react$7.createElement("html", { lang: "en" }, /* @__PURE__ */ import_react$7.createElement("head", null, /* @__PURE__ */ import_react$7.createElement("meta", { charSet: "utf-8" }), /* @__PURE__ */ import_react$7.createElement("meta", {
		name: "viewport",
		content: "width=device-width,initial-scale=1,viewport-fit=cover"
	}), /* @__PURE__ */ import_react$7.createElement("title", null, title)), /* @__PURE__ */ import_react$7.createElement("body", null, /* @__PURE__ */ import_react$7.createElement("main", { style: {
		fontFamily: "system-ui, sans-serif",
		padding: "2rem"
	} }, children)));
}
function RSCDefaultRootErrorBoundaryImpl({ error, renderAppShell }) {
	console.error(error);
	let heyDeveloper = /* @__PURE__ */ import_react$7.createElement("script", { dangerouslySetInnerHTML: { __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      ` } });
	if (isRouteErrorResponse(error)) return /* @__PURE__ */ import_react$7.createElement(ErrorWrapper, {
		renderAppShell,
		title: "Unhandled Thrown Response!"
	}, /* @__PURE__ */ import_react$7.createElement("h1", { style: { fontSize: "24px" } }, error.status, " ", error.statusText), heyDeveloper);
	let errorInstance;
	if (error instanceof Error) errorInstance = error;
	else {
		let errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
		errorInstance = new Error(errorString);
	}
	return /* @__PURE__ */ import_react$7.createElement(ErrorWrapper, {
		renderAppShell,
		title: "Application Error!"
	}, /* @__PURE__ */ import_react$7.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), /* @__PURE__ */ import_react$7.createElement("pre", { style: {
		padding: "2rem",
		background: "hsla(10, 50%, 50%, 0.1)",
		color: "red",
		overflow: "auto"
	} }, errorInstance.stack), heyDeveloper);
}
function RSCDefaultRootErrorBoundary({ hasRootLayout }) {
	let error = useRouteError();
	if (hasRootLayout === void 0) throw new Error("Missing 'hasRootLayout' prop");
	return /* @__PURE__ */ import_react$7.createElement(RSCDefaultRootErrorBoundaryImpl, {
		renderAppShell: !hasRootLayout,
		error
	});
}
function createRSCRouteModules(payload) {
	const routeModules = {};
	for (const match of payload.matches) populateRSCRouteModules(routeModules, match);
	return routeModules;
}
function populateRSCRouteModules(routeModules, matches) {
	matches = Array.isArray(matches) ? matches : [matches];
	for (const match of matches) routeModules[match.id] = {
		links: match.links,
		meta: match.meta,
		default: noopComponent
	};
}
function useSafe(promise) {
	if (useImpl) return useImpl(promise);
	throw new Error("React Router v7 requires React 19+ for RSC features.");
}
async function routeRSCServerRequest({ request, serverResponse, createFromReadableStream, renderHTML, hydrate = true }) {
	const url = new URL(request.url);
	if (isReactServerRequest(url) || isManifestRequest(url) || request.headers.has("rsc-action-id") || serverResponse.headers.get("React-Router-Resource") === "true") return serverResponse;
	if (!serverResponse.body) throw new Error("Missing body in server response");
	const detectRedirectResponse = serverResponse.clone();
	let serverResponseB = null;
	if (hydrate) serverResponseB = serverResponse.clone();
	const body = serverResponse.body;
	let buffer;
	let streamControllers = [];
	const createStream = () => {
		if (!buffer) {
			buffer = [];
			return body.pipeThrough(new TransformStream({
				transform(chunk, controller) {
					buffer.push(chunk);
					controller.enqueue(chunk);
					streamControllers.forEach((c) => c.enqueue(chunk));
				},
				flush() {
					streamControllers.forEach((c) => c.close());
					streamControllers = [];
				}
			}));
		}
		return new ReadableStream({ start(controller) {
			buffer.forEach((chunk) => controller.enqueue(chunk));
			streamControllers.push(controller);
		} });
	};
	let deepestRenderedBoundaryId = null;
	const getPayload = () => {
		const payloadPromise = Promise.resolve(createFromReadableStream(createStream()));
		return Object.defineProperties(payloadPromise, {
			_deepestRenderedBoundaryId: {
				get() {
					return deepestRenderedBoundaryId;
				},
				set(boundaryId) {
					deepestRenderedBoundaryId = boundaryId;
				}
			},
			formState: { get() {
				return payloadPromise.then((payload) => payload.type === "render" ? payload.formState : void 0);
			} }
		});
	};
	let renderRedirect;
	let renderError;
	try {
		if (!detectRedirectResponse.body) throw new Error("Failed to clone server response");
		const payload = await createFromReadableStream(detectRedirectResponse.body);
		if (serverResponse.status === 202 && payload.type === "redirect") {
			const headers2 = new Headers(serverResponse.headers);
			headers2.delete("Content-Encoding");
			headers2.delete("Content-Length");
			headers2.delete("Content-Type");
			headers2.delete("X-Remix-Response");
			headers2.set("Location", payload.location);
			return new Response(serverResponseB?.body || "", {
				headers: headers2,
				status: payload.status,
				statusText: serverResponse.statusText
			});
		}
		let reactHeaders = new Headers();
		let status = serverResponse.status;
		let statusText = serverResponse.statusText;
		let html = await renderHTML(getPayload, {
			onError(error) {
				if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
					renderRedirect = decodeRedirectErrorDigest(error.digest);
					if (renderRedirect) return error.digest;
					let routeErrorResponse = decodeRouteErrorResponseDigest(error.digest);
					if (routeErrorResponse) {
						renderError = routeErrorResponse;
						status = routeErrorResponse.status;
						statusText = routeErrorResponse.statusText;
						return error.digest;
					}
				}
			},
			onHeaders(headers2) {
				for (const [key, value] of headers2) reactHeaders.append(key, value);
			}
		});
		const headers = new Headers(reactHeaders);
		for (const [key, value] of serverResponse.headers) headers.append(key, value);
		headers.set("Content-Type", "text/html; charset=utf-8");
		if (renderRedirect) {
			headers.set("Location", renderRedirect.location);
			return new Response(html, {
				status: renderRedirect.status,
				headers
			});
		}
		const redirectTransform = new TransformStream({ flush(controller) {
			if (renderRedirect) controller.enqueue(new TextEncoder().encode(`<meta http-equiv="refresh" content="0;url=${escapeHtml(renderRedirect.location)}"/>`));
		} });
		if (!hydrate) return new Response(html.pipeThrough(redirectTransform), {
			status,
			statusText,
			headers
		});
		if (!serverResponseB?.body) throw new Error("Failed to clone server response");
		const body2 = html.pipeThrough(injectRSCPayload(serverResponseB.body)).pipeThrough(redirectTransform);
		return new Response(body2, {
			status,
			statusText,
			headers
		});
	} catch (error) {
		if (error instanceof Response) return error;
		if (renderRedirect) return new Response(`Redirect: ${renderRedirect.location}`, {
			status: renderRedirect.status,
			headers: { Location: renderRedirect.location }
		});
		try {
			let normalizedError = renderError ?? error;
			let [status, statusText] = isRouteErrorResponse(normalizedError) ? [normalizedError.status, normalizedError.statusText] : [500, ""];
			let retryRedirect;
			let reactHeaders = new Headers();
			const html = await renderHTML(() => {
				const payloadPromise = Promise.resolve(createFromReadableStream(createStream())).then((payload) => Object.assign(payload, {
					status,
					errors: deepestRenderedBoundaryId ? { [deepestRenderedBoundaryId]: normalizedError } : {}
				}));
				return Object.defineProperties(payloadPromise, {
					_deepestRenderedBoundaryId: {
						get() {
							return deepestRenderedBoundaryId;
						},
						set(boundaryId) {
							deepestRenderedBoundaryId = boundaryId;
						}
					},
					formState: { get() {
						return payloadPromise.then((payload) => payload.type === "render" ? payload.formState : void 0);
					} }
				});
			}, {
				onError(error2) {
					if (typeof error2 === "object" && error2 && "digest" in error2 && typeof error2.digest === "string") {
						retryRedirect = decodeRedirectErrorDigest(error2.digest);
						if (retryRedirect) return error2.digest;
						let routeErrorResponse = decodeRouteErrorResponseDigest(error2.digest);
						if (routeErrorResponse) {
							status = routeErrorResponse.status;
							statusText = routeErrorResponse.statusText;
							return error2.digest;
						}
					}
				},
				onHeaders(headers2) {
					for (const [key, value] of headers2) reactHeaders.append(key, value);
				}
			});
			const headers = new Headers(reactHeaders);
			for (const [key, value] of serverResponse.headers) headers.append(key, value);
			headers.set("Content-Type", "text/html; charset=utf-8");
			if (retryRedirect) {
				headers.set("Location", retryRedirect.location);
				return new Response(html, {
					status: retryRedirect.status,
					headers
				});
			}
			const retryRedirectTransform = new TransformStream({ flush(controller) {
				if (retryRedirect) controller.enqueue(new TextEncoder().encode(`<meta http-equiv="refresh" content="0;url=${escapeHtml(retryRedirect.location)}"/>`));
			} });
			if (!hydrate) return new Response(html.pipeThrough(retryRedirectTransform), {
				status,
				statusText,
				headers
			});
			if (!serverResponseB?.body) throw new Error("Failed to clone server response");
			const body2 = html.pipeThrough(injectRSCPayload(serverResponseB.body)).pipeThrough(retryRedirectTransform);
			return new Response(body2, {
				status,
				statusText,
				headers
			});
		} catch (error2) {}
		throw error;
	}
}
function RSCStaticRouter({ getPayload }) {
	const decoded = getPayload();
	const payload = useSafe(decoded);
	if (payload.type === "redirect") throw new Response(null, {
		status: payload.status,
		headers: { Location: payload.location }
	});
	if (payload.type !== "render") return null;
	let patchedLoaderData = { ...payload.loaderData };
	for (const match of payload.matches) if (shouldHydrateRouteLoader(match.id, match.clientLoader, match.hasLoader, false) && (match.hydrateFallbackElement || !match.hasLoader)) delete patchedLoaderData[match.id];
	const context = {
		get _deepestRenderedBoundaryId() {
			return decoded._deepestRenderedBoundaryId ?? null;
		},
		set _deepestRenderedBoundaryId(boundaryId) {
			decoded._deepestRenderedBoundaryId = boundaryId;
		},
		actionData: payload.actionData,
		actionHeaders: {},
		basename: payload.basename,
		errors: payload.errors,
		loaderData: patchedLoaderData,
		loaderHeaders: {},
		location: payload.location,
		statusCode: 200,
		matches: payload.matches.map((match) => ({
			params: match.params,
			pathname: match.pathname,
			pathnameBase: match.pathnameBase,
			route: {
				id: match.id,
				action: match.hasAction || !!match.clientAction,
				handle: match.handle,
				hasErrorBoundary: match.hasErrorBoundary,
				loader: match.hasLoader || !!match.clientLoader,
				index: match.index,
				path: match.path,
				shouldRevalidate: match.shouldRevalidate
			}
		}))
	};
	const router = createStaticRouter(payload.matches.reduceRight((previous, match) => {
		const route = {
			id: match.id,
			action: match.hasAction || !!match.clientAction,
			element: match.element,
			errorElement: match.errorElement,
			handle: match.handle,
			hasErrorBoundary: !!match.errorElement,
			hydrateFallbackElement: match.hydrateFallbackElement,
			index: match.index,
			loader: match.hasLoader || !!match.clientLoader,
			path: match.path,
			shouldRevalidate: match.shouldRevalidate
		};
		if (previous.length > 0) route.children = previous;
		return [route];
	}, []), context);
	const frameworkContext = {
		future: {
			v8_middleware: false,
			v8_trailingSlashAwareDataRequests: true,
			v8_passThroughRequests: true
		},
		isSpaMode: false,
		ssr: true,
		criticalCss: "",
		manifest: {
			routes: {},
			version: "1",
			url: "",
			entry: {
				module: "",
				imports: []
			}
		},
		routeDiscovery: payload.routeDiscovery.mode === "initial" ? {
			mode: "initial",
			manifestPath: defaultManifestPath$1
		} : {
			mode: "lazy",
			manifestPath: payload.routeDiscovery.manifestPath || defaultManifestPath$1
		},
		routeModules: createRSCRouteModules(payload)
	};
	return /* @__PURE__ */ import_react$6.createElement(RSCRouterContext.Provider, { value: true }, /* @__PURE__ */ import_react$6.createElement(RSCRouterGlobalErrorBoundary, { location: payload.location }, /* @__PURE__ */ import_react$6.createElement(FrameworkContext.Provider, { value: frameworkContext }, /* @__PURE__ */ import_react$6.createElement(StaticRouterProvider, {
		context,
		router,
		hydrate: false,
		nonce: payload.nonce
	}))));
}
function isReactServerRequest(url) {
	return url.pathname.endsWith(".rsc");
}
function isManifestRequest(url) {
	return url.pathname.endsWith(".manifest");
}
function deserializeErrors(errors) {
	if (!errors) return null;
	let entries = Object.entries(errors);
	let serialized = {};
	for (let [key, val] of entries) if (val && val.__type === "RouteErrorResponse") serialized[key] = new ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
	else if (val && val.__type === "Error") {
		if (val.__subType) {
			let ErrorConstructor = window[val.__subType];
			if (typeof ErrorConstructor === "function") try {
				let error = new ErrorConstructor(val.message);
				error.stack = val.stack;
				serialized[key] = error;
			} catch (e) {}
		}
		if (serialized[key] == null) {
			let error = new Error(val.message);
			error.stack = val.stack;
			serialized[key] = error;
		}
	} else serialized[key] = val;
	return serialized;
}
function getHydrationData({ state, routes, getRouteInfo, location, basename, isSpaMode }) {
	let hydrationData = {
		...state,
		loaderData: { ...state.loaderData }
	};
	let initialMatches = matchRoutes(routes, location, basename);
	if (initialMatches) for (let match of initialMatches) {
		let routeId = match.route.id;
		let routeInfo = getRouteInfo(routeId);
		if (shouldHydrateRouteLoader(routeId, routeInfo.clientLoader, routeInfo.hasLoader, isSpaMode) && (routeInfo.hasHydrateFallback || !routeInfo.hasLoader)) delete hydrationData.loaderData[routeId];
		else if (!routeInfo.hasLoader) hydrationData.loaderData[routeId] = null;
	}
	return hydrationData;
}
var import_react$4, import_react$5, import_dist$1, import_set_cookie, import_react$6, import_react$7, encoder, sign, unsign, createKey, createCookie, isCookie, ServerMode, globalDevServerHooksKey, SERVER_NO_BODY_STATUS_CODES, createRequestHandler, createSession, isSession, encoder2, trailer, RSCRouterGlobalErrorBoundary, noopComponent, defaultManifestPath$1, useImpl;
var init_chunk_ASILSGTR = __esmMin((() => {
	init_chunk_6CSD65Y2();
	import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_dist$1 = require_dist$1();
	import_set_cookie = require_set_cookie();
	import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
	encoder = /* @__PURE__ */ new TextEncoder();
	sign = async (value, secret) => {
		let data2 = encoder.encode(value);
		let key = await createKey(secret, ["sign"]);
		let signature = await crypto.subtle.sign("HMAC", key, data2);
		let hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=+$/, "");
		return value + "." + hash;
	};
	unsign = async (cookie, secret) => {
		let index = cookie.lastIndexOf(".");
		let value = cookie.slice(0, index);
		let hash = cookie.slice(index + 1);
		let data2 = encoder.encode(value);
		let key = await createKey(secret, ["verify"]);
		try {
			let signature = byteStringToUint8Array(atob(hash));
			return await crypto.subtle.verify("HMAC", key, signature, data2) ? value : false;
		} catch (e) {
			return false;
		}
	};
	createKey = async (secret, usages) => crypto.subtle.importKey("raw", encoder.encode(secret), {
		name: "HMAC",
		hash: "SHA-256"
	}, false, usages);
	createCookie = (name, cookieOptions = {}) => {
		let { secrets = [], ...options } = {
			path: "/",
			sameSite: "lax",
			...cookieOptions
		};
		warnOnceAboutExpiresCookie(name, options.expires);
		return {
			get name() {
				return name;
			},
			get isSigned() {
				return secrets.length > 0;
			},
			get expires() {
				return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
			},
			async parse(cookieHeader, parseOptions) {
				if (!cookieHeader) return null;
				let cookies = (0, import_dist$1.parse)(cookieHeader, {
					...options,
					...parseOptions
				});
				if (name in cookies) {
					let value = cookies[name];
					if (typeof value === "string" && value !== "") return await decodeCookieValue(value, secrets);
					else return "";
				} else return null;
			},
			async serialize(value, serializeOptions) {
				return (0, import_dist$1.serialize)(name, value === "" ? "" : await encodeCookieValue(value, secrets), {
					...options,
					...serializeOptions
				});
			}
		};
	};
	isCookie = (object) => {
		return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
	};
	ServerMode = /* @__PURE__ */ ((ServerMode2) => {
		ServerMode2["Development"] = "development";
		ServerMode2["Production"] = "production";
		ServerMode2["Test"] = "test";
		return ServerMode2;
	})(ServerMode || {});
	globalDevServerHooksKey = "__reactRouterDevServerHooks";
	SERVER_NO_BODY_STATUS_CODES = /* @__PURE__ */ new Set([...NO_BODY_STATUS_CODES, 304]);
	createRequestHandler = (build, mode) => {
		let _build;
		let serverMode;
		let staticHandler;
		let errorHandler;
		let _requestHandler;
		return async function requestHandler(request, initialContext) {
			_build = typeof build === "function" ? await build() : build;
			if (typeof build === "function") {
				let derived = derive(_build, mode);
				serverMode = derived.serverMode;
				staticHandler = derived.staticHandler;
				errorHandler = derived.errorHandler;
				_requestHandler = derived.requestHandler;
			} else if (!serverMode || !staticHandler || !errorHandler || !_requestHandler) {
				let derived = derive(_build, mode);
				serverMode = derived.serverMode;
				staticHandler = derived.staticHandler;
				errorHandler = derived.errorHandler;
				_requestHandler = derived.requestHandler;
			}
			return _requestHandler(request, initialContext);
		};
	};
	createSession = (initialData = {}, id = "") => {
		let map = new Map(Object.entries(initialData));
		return {
			get id() {
				return id;
			},
			get data() {
				return Object.fromEntries(map);
			},
			has(name) {
				return map.has(name) || map.has(flash(name));
			},
			get(name) {
				if (map.has(name)) return map.get(name);
				let flashName = flash(name);
				if (map.has(flashName)) {
					let value = map.get(flashName);
					map.delete(flashName);
					return value;
				}
			},
			set(name, value) {
				map.set(name, value);
			},
			flash(name, value) {
				map.set(flash(name), value);
			},
			unset(name) {
				map.delete(name);
			}
		};
	};
	isSession = (object) => {
		return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
	};
	encoder2 = new TextEncoder();
	trailer = "</body></html>";
	RSCRouterGlobalErrorBoundary = class extends import_react$7.Component {
		constructor(props) {
			super(props);
			this.state = {
				error: null,
				location: props.location
			};
		}
		static getDerivedStateFromError(error) {
			return { error };
		}
		static getDerivedStateFromProps(props, state) {
			if (state.location !== props.location) return {
				error: null,
				location: props.location
			};
			return {
				error: state.error,
				location: state.location
			};
		}
		render() {
			if (this.state.error) return /* @__PURE__ */ import_react$7.createElement(RSCDefaultRootErrorBoundaryImpl, {
				error: this.state.error,
				renderAppShell: true
			});
			else return this.props.children;
		}
	};
	noopComponent = () => null;
	defaultManifestPath$1 = "/__manifest";
	useImpl = import_react$6.use;
}));
//#endregion
//#region node_modules/react-router/dist/development/dom-export.mjs
/**
* react-router v7.17.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
var dom_export_exports = /* @__PURE__ */ __exportAll({
	HydratedRouter: () => HydratedRouter$1,
	RouterProvider: () => RouterProvider2,
	unstable_RSCHydratedRouter: () => RSCHydratedRouter,
	unstable_createCallServer: () => createCallServer,
	unstable_getRSCStream: () => getRSCStream
});
function RouterProvider2(props) {
	return /* @__PURE__ */ import_react$1.createElement(RouterProvider$1, {
		flushSync: import_react_dom.flushSync,
		...props
	});
}
function initSsrInfo() {
	if (!ssrInfo && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
		if (window.__reactRouterManifest.sri === true) {
			const importMap = document.querySelector("script[rr-importmap]");
			if (importMap?.textContent) try {
				window.__reactRouterManifest.sri = JSON.parse(importMap.textContent).integrity;
			} catch (err) {
				console.error("Failed to parse import map", err);
			}
		}
		ssrInfo = {
			context: window.__reactRouterContext,
			manifest: window.__reactRouterManifest,
			routeModules: window.__reactRouterRouteModules,
			stateDecodingPromise: void 0,
			router: void 0,
			routerInitialized: false
		};
	}
}
function createHydratedRouter({ getContext, instrumentations }) {
	initSsrInfo();
	if (!ssrInfo) throw new Error("You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`");
	let localSsrInfo = ssrInfo;
	if (!ssrInfo.stateDecodingPromise) {
		let stream = ssrInfo.context.stream;
		invariant$2(stream, "No stream found for single fetch decoding");
		ssrInfo.context.stream = void 0;
		ssrInfo.stateDecodingPromise = decodeViaTurboStream(stream, window).then((value) => {
			ssrInfo.context.state = value.value;
			localSsrInfo.stateDecodingPromise.value = true;
		}).catch((e) => {
			localSsrInfo.stateDecodingPromise.error = e;
		});
	}
	if (ssrInfo.stateDecodingPromise.error) throw ssrInfo.stateDecodingPromise.error;
	if (!ssrInfo.stateDecodingPromise.value) throw ssrInfo.stateDecodingPromise;
	let routes = createClientRoutes(ssrInfo.manifest.routes, ssrInfo.routeModules, ssrInfo.context.state, ssrInfo.context.ssr, ssrInfo.context.isSpaMode);
	let hydrationData = void 0;
	if (ssrInfo.context.isSpaMode) {
		let { loaderData } = ssrInfo.context.state;
		if (ssrInfo.manifest.routes.root?.hasLoader && loaderData && "root" in loaderData) hydrationData = { loaderData: { root: loaderData.root } };
	} else {
		hydrationData = getHydrationData({
			state: ssrInfo.context.state,
			routes,
			getRouteInfo: (routeId) => ({
				clientLoader: ssrInfo.routeModules[routeId]?.clientLoader,
				hasLoader: ssrInfo.manifest.routes[routeId]?.hasLoader === true,
				hasHydrateFallback: ssrInfo.routeModules[routeId]?.HydrateFallback != null
			}),
			location: window.location,
			basename: window.__reactRouterContext?.basename,
			isSpaMode: ssrInfo.context.isSpaMode
		});
		if (hydrationData && hydrationData.errors) hydrationData.errors = deserializeErrors(hydrationData.errors);
	}
	if (window.history.state && window.history.state.masked) window.history.replaceState({
		...window.history.state,
		masked: void 0
	}, "");
	let router2 = createRouter({
		routes,
		history: createBrowserHistory(),
		basename: ssrInfo.context.basename,
		getContext,
		hydrationData,
		hydrationRouteProperties,
		instrumentations,
		mapRouteProperties,
		future: { v8_passThroughRequests: ssrInfo.context.future.v8_passThroughRequests },
		dataStrategy: getTurboStreamSingleFetchDataStrategy(() => router2, ssrInfo.manifest, ssrInfo.routeModules, ssrInfo.context.ssr, ssrInfo.context.basename, ssrInfo.context.future.v8_trailingSlashAwareDataRequests),
		patchRoutesOnNavigation: getPatchRoutesOnNavigationFunction(() => router2, ssrInfo.manifest, ssrInfo.routeModules, ssrInfo.context.ssr, ssrInfo.context.routeDiscovery, ssrInfo.context.isSpaMode, ssrInfo.context.basename)
	});
	ssrInfo.router = router2;
	if (router2.state.initialized) {
		ssrInfo.routerInitialized = true;
		router2.initialize();
	}
	router2.createRoutesForHMR = createClientRoutesWithHMRRevalidationOptOut;
	window.__reactRouterDataRouter = router2;
	return router2;
}
function HydratedRouter$1(props) {
	if (!router) router = createHydratedRouter({
		getContext: props.getContext,
		instrumentations: props.instrumentations
	});
	let [criticalCss, setCriticalCss] = import_react$2.useState(process.env.NODE_ENV === "development" ? ssrInfo?.context.criticalCss : void 0);
	import_react$2.useEffect(() => {
		if (process.env.NODE_ENV === "development") setCriticalCss(void 0);
	}, []);
	import_react$2.useEffect(() => {
		if (process.env.NODE_ENV === "development" && criticalCss === void 0) document.querySelectorAll(`[${CRITICAL_CSS_DATA_ATTRIBUTE}]`).forEach((element) => element.remove());
	}, [criticalCss]);
	let [location2, setLocation] = import_react$2.useState(router.state.location);
	import_react$2.useLayoutEffect(() => {
		if (ssrInfo && ssrInfo.router && !ssrInfo.routerInitialized) {
			ssrInfo.routerInitialized = true;
			ssrInfo.router.initialize();
		}
	}, []);
	import_react$2.useLayoutEffect(() => {
		if (ssrInfo && ssrInfo.router) return ssrInfo.router.subscribe((newState) => {
			if (newState.location !== location2) setLocation(newState.location);
		});
	}, [location2]);
	invariant$2(ssrInfo, "ssrInfo unavailable for HydratedRouter");
	useFogOFWarDiscovery(router, ssrInfo.manifest, ssrInfo.routeModules, ssrInfo.context.ssr, ssrInfo.context.routeDiscovery, ssrInfo.context.isSpaMode);
	return /* @__PURE__ */ import_react$2.createElement(import_react$2.Fragment, null, /* @__PURE__ */ import_react$2.createElement(FrameworkContext.Provider, { value: {
		manifest: ssrInfo.manifest,
		routeModules: ssrInfo.routeModules,
		future: ssrInfo.context.future,
		criticalCss,
		ssr: ssrInfo.context.ssr,
		isSpaMode: ssrInfo.context.isSpaMode,
		routeDiscovery: ssrInfo.context.routeDiscovery
	} }, /* @__PURE__ */ import_react$2.createElement(RemixErrorBoundary, { location: location2 }, /* @__PURE__ */ import_react$2.createElement(RouterProvider2, {
		router,
		useTransitions: props.useTransitions,
		onError: props.onError
	}))), /* @__PURE__ */ import_react$2.createElement(import_react$2.Fragment, null));
}
function createCallServer({ createFromReadableStream, createTemporaryReferenceSet, encodeReply, fetch: fetchImplementation = fetch }) {
	const globalVar = window;
	let landedActionId = 0;
	return async (id, args) => {
		let actionId = globalVar.__routerActionID = (globalVar.__routerActionID ?? (globalVar.__routerActionID = 0)) + 1;
		const temporaryReferences = createTemporaryReferenceSet();
		const payloadPromise = fetchImplementation(new Request(location.href, {
			body: await encodeReply(args, { temporaryReferences }),
			method: "POST",
			headers: {
				Accept: "text/x-component",
				"rsc-action-id": id
			}
		})).then((response) => {
			if (!response.body) throw new Error("No response body");
			return createFromReadableStream(response.body, { temporaryReferences });
		});
		import_react$3.startTransition(() => Promise.resolve(payloadPromise).then(async (payload) => {
			if (payload.type === "redirect") {
				if (payload.reload || isExternalLocation(payload.location)) {
					if (hasInvalidProtocol(payload.location)) throw new Error("Invalid redirect location");
					window.location.href = payload.location;
					return;
				}
				import_react$3.startTransition(() => {
					globalVar.__reactRouterDataRouter.navigate(payload.location, { replace: payload.replace });
				});
				return;
			}
			if (payload.type !== "action") throw new Error("Unexpected payload type");
			const rerender = await payload.rerender;
			if (rerender && landedActionId < actionId && globalVar.__routerActionID <= actionId) {
				if (rerender.type === "redirect") {
					if (rerender.reload || isExternalLocation(rerender.location)) {
						if (hasInvalidProtocol(rerender.location)) throw new Error("Invalid redirect location");
						window.location.href = rerender.location;
						return;
					}
					import_react$3.startTransition(() => {
						globalVar.__reactRouterDataRouter.navigate(rerender.location, { replace: rerender.replace });
					});
					return;
				}
				import_react$3.startTransition(() => {
					let lastMatch;
					for (const match of rerender.matches) {
						globalVar.__reactRouterDataRouter.patchRoutes(lastMatch?.id ?? null, [createRouteFromServerManifest(match)], true);
						lastMatch = match;
					}
					window.__reactRouterDataRouter._internalSetStateDoNotUseOrYouWillBreakYourApp({
						loaderData: Object.assign({}, globalVar.__reactRouterDataRouter.state.loaderData, rerender.loaderData),
						errors: rerender.errors ? Object.assign({}, globalVar.__reactRouterDataRouter.state.errors, rerender.errors) : null
					});
				});
			}
		}).catch(() => {}));
		return payloadPromise.then((payload) => {
			if (payload.type !== "action" && payload.type !== "redirect") throw new Error("Unexpected payload type");
			return payload.actionResult;
		});
	};
}
function createRouterFromPayload({ fetchImplementation, createFromReadableStream, getContext, payload }) {
	const globalVar = window;
	if (globalVar.__reactRouterDataRouter && globalVar.__reactRouterRouteModules) return {
		router: globalVar.__reactRouterDataRouter,
		routeModules: globalVar.__reactRouterRouteModules
	};
	if (payload.type !== "render") throw new Error("Invalid payload type");
	globalVar.__reactRouterRouteModules = globalVar.__reactRouterRouteModules ?? {};
	populateRSCRouteModules(globalVar.__reactRouterRouteModules, payload.matches);
	let routes = payload.matches.reduceRight((previous, match) => {
		const route = createRouteFromServerManifest(match, payload);
		if (previous.length > 0) route.children = previous;
		else if (!route.index) route.children = [];
		return [route];
	}, []);
	let applyPatchesPromise;
	globalVar.__reactRouterDataRouter = createRouter({
		routes,
		getContext,
		basename: payload.basename,
		history: createBrowserHistory(),
		hydrationData: getHydrationData({
			state: {
				loaderData: payload.loaderData,
				actionData: payload.actionData,
				errors: payload.errors
			},
			routes,
			getRouteInfo: (routeId) => {
				let match = payload.matches.find((m) => m.id === routeId);
				invariant$2(match, "Route not found in payload");
				return {
					clientLoader: match.clientLoader,
					hasLoader: match.hasLoader,
					hasHydrateFallback: match.hydrateFallbackElement != null
				};
			},
			location: payload.location,
			basename: payload.basename,
			isSpaMode: false
		}),
		async patchRoutesOnNavigation({ path, signal }) {
			if (payload.routeDiscovery.mode === "initial") {
				if (!applyPatchesPromise) applyPatchesPromise = (async () => {
					if (!payload.patches) return;
					let patches = await payload.patches;
					import_react$3.startTransition(() => {
						patches.forEach((p) => {
							window.__reactRouterDataRouter.patchRoutes(p.parentId ?? null, [createRouteFromServerManifest(p)]);
						});
					});
				})();
				await applyPatchesPromise;
				return;
			}
			if (discoveredPaths.has(path)) return;
			await fetchAndApplyManifestPatches([path], createFromReadableStream, fetchImplementation, signal);
		},
		dataStrategy: getRSCSingleFetchDataStrategy(() => globalVar.__reactRouterDataRouter, true, payload.basename, createFromReadableStream, fetchImplementation)
	});
	if (globalVar.__reactRouterDataRouter.state.initialized) {
		globalVar.__routerInitialized = true;
		globalVar.__reactRouterDataRouter.initialize();
	} else globalVar.__routerInitialized = false;
	let lastLoaderData = void 0;
	globalVar.__reactRouterDataRouter.subscribe(({ loaderData, actionData }) => {
		if (lastLoaderData !== loaderData) globalVar.__routerActionID = (globalVar.__routerActionID ?? (globalVar.__routerActionID = 0)) + 1;
	});
	globalVar.__reactRouterDataRouter._updateRoutesForHMR = (routeUpdateByRouteId) => {
		const oldRoutes = window.__reactRouterDataRouter.routes;
		const newRoutes = [];
		function walkRoutes(routes2, parentId) {
			return routes2.map((route) => {
				const routeUpdate = routeUpdateByRouteId.get(route.id);
				if (routeUpdate) {
					const { routeModule, hasAction, hasComponent, hasErrorBoundary, hasLoader } = routeUpdate;
					const newRoute = createRouteFromServerManifest({
						clientAction: routeModule.clientAction,
						clientLoader: routeModule.clientLoader,
						element: route.element,
						errorElement: route.errorElement,
						handle: route.handle,
						hasAction,
						hasComponent,
						hasErrorBoundary,
						hasLoader,
						hydrateFallbackElement: route.hydrateFallbackElement,
						id: route.id,
						index: route.index,
						links: routeModule.links,
						meta: routeModule.meta,
						parentId,
						path: route.path,
						shouldRevalidate: routeModule.shouldRevalidate
					});
					if (route.children) newRoute.children = walkRoutes(route.children, route.id);
					return newRoute;
				}
				const updatedRoute = { ...route };
				if (route.children) updatedRoute.children = walkRoutes(route.children, route.id);
				return updatedRoute;
			});
		}
		newRoutes.push(...walkRoutes(oldRoutes, void 0));
		window.__reactRouterDataRouter._internalSetRoutes(newRoutes);
	};
	return {
		router: globalVar.__reactRouterDataRouter,
		routeModules: globalVar.__reactRouterRouteModules
	};
}
function getRSCSingleFetchDataStrategy(getRouter, ssr, basename, createFromReadableStream, fetchImplementation) {
	let dataStrategy = getSingleFetchDataStrategyImpl(getRouter, (match) => {
		let M = match;
		return {
			hasLoader: M.route.hasLoader,
			hasClientLoader: M.route.hasClientLoader,
			hasComponent: M.route.hasComponent,
			hasAction: M.route.hasAction,
			hasClientAction: M.route.hasClientAction
		};
	}, getFetchAndDecodeViaRSC(createFromReadableStream, fetchImplementation), ssr, basename, true, (match) => {
		let M = match;
		return M.route.hasComponent && !M.route.element;
	});
	return async (args) => args.runClientMiddleware(async () => {
		let context = args.context;
		context.set(renderedRoutesContext, []);
		let results = await dataStrategy(args);
		const renderedRoutesById = /* @__PURE__ */ new Map();
		for (const route of context.get(renderedRoutesContext)) {
			if (!renderedRoutesById.has(route.id)) renderedRoutesById.set(route.id, []);
			renderedRoutesById.get(route.id).push(route);
		}
		import_react$3.startTransition(() => {
			for (const match of args.matches) {
				const renderedRoutes = renderedRoutesById.get(match.route.id);
				if (renderedRoutes) for (const rendered of renderedRoutes) window.__reactRouterDataRouter.patchRoutes(rendered.parentId ?? null, [createRouteFromServerManifest(rendered)], true);
			}
		});
		return results;
	});
}
function getFetchAndDecodeViaRSC(createFromReadableStream, fetchImplementation) {
	return async (args, basename, trailingSlashAware, targetRoutes) => {
		let { request, context } = args;
		let url = singleFetchUrl(request.url, basename, trailingSlashAware, "rsc");
		if (request.method === "GET") {
			url = stripIndexParam$1(url);
			if (targetRoutes) url.searchParams.set("_routes", targetRoutes.join(","));
		}
		let res = await fetchImplementation(new Request(url, await createRequestInit(request)));
		if (res.status >= 400 && !res.headers.has("X-Remix-Response")) throw new ErrorResponseImpl(res.status, res.statusText, await res.text());
		invariant$2(res.body, "No response body to decode");
		try {
			const payload = await createFromReadableStream(res.body, { temporaryReferences: void 0 });
			if (payload.type === "redirect") return {
				status: res.status,
				data: { redirect: {
					redirect: payload.location,
					reload: payload.reload,
					replace: payload.replace,
					revalidate: false,
					status: payload.status
				} }
			};
			if (payload.type !== "render") throw new Error("Unexpected payload type");
			context.get(renderedRoutesContext).push(...payload.matches);
			let results = { routes: {} };
			const dataKey = isMutationMethod(request.method) ? "actionData" : "loaderData";
			for (let [routeId, data] of Object.entries(payload[dataKey] || {})) results.routes[routeId] = { data };
			if (payload.errors) for (let [routeId, error] of Object.entries(payload.errors)) results.routes[routeId] = { error };
			return {
				status: res.status,
				data: results
			};
		} catch (cause) {
			throw new Error("Unable to decode RSC response", { cause });
		}
	};
}
function RSCHydratedRouter({ createFromReadableStream, fetch: fetchImplementation = fetch, payload, getContext }) {
	if (payload.type !== "render") throw new Error("Invalid payload type");
	let { routeDiscovery } = payload;
	let { router: router2, routeModules } = import_react$3.useMemo(() => createRouterFromPayload({
		payload,
		fetchImplementation,
		getContext,
		createFromReadableStream
	}), [
		createFromReadableStream,
		payload,
		fetchImplementation,
		getContext
	]);
	import_react$3.useEffect(() => {
		setIsHydrated();
	}, []);
	import_react$3.useLayoutEffect(() => {
		const globalVar = window;
		if (!globalVar.__routerInitialized) {
			globalVar.__routerInitialized = true;
			globalVar.__reactRouterDataRouter.initialize();
		}
	}, []);
	let [{ routes, state }, setState] = import_react$3.useState(() => ({
		routes: cloneRoutes(router2.routes),
		state: router2.state
	}));
	import_react$3.useLayoutEffect(() => router2.subscribe((newState) => {
		if (diffRoutes(router2.routes, routes)) import_react$3.startTransition(() => {
			setState({
				routes: cloneRoutes(router2.routes),
				state: newState
			});
		});
	}), [
		router2.subscribe,
		routes,
		router2
	]);
	const transitionEnabledRouter = import_react$3.useMemo(() => ({
		...router2,
		state,
		routes
	}), [
		router2,
		routes,
		state
	]);
	import_react$3.useEffect(() => {
		if (routeDiscovery.mode === "initial" || window.navigator?.connection?.saveData === true) return;
		function registerElement(el) {
			let path = el.tagName === "FORM" ? el.getAttribute("action") : el.getAttribute("href");
			if (!path) return;
			let pathname = el.tagName === "A" ? el.pathname : new URL(path, window.location.origin).pathname;
			if (!discoveredPaths.has(pathname)) nextPaths.add(pathname);
		}
		async function fetchPatches() {
			document.querySelectorAll("a[data-discover], form[data-discover]").forEach(registerElement);
			let paths = Array.from(nextPaths.keys()).filter((path) => {
				if (discoveredPaths.has(path)) {
					nextPaths.delete(path);
					return false;
				}
				return true;
			});
			if (paths.length === 0) return;
			try {
				await fetchAndApplyManifestPatches(paths, createFromReadableStream, fetchImplementation);
			} catch (e) {
				console.error("Failed to fetch manifest patches", e);
			}
		}
		let debouncedFetchPatches = debounce(fetchPatches, 100);
		fetchPatches();
		new MutationObserver(() => debouncedFetchPatches()).observe(document.documentElement, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: [
				"data-discover",
				"href",
				"action"
			]
		});
	}, [
		routeDiscovery,
		createFromReadableStream,
		fetchImplementation
	]);
	const frameworkContext = {
		future: {
			v8_middleware: false,
			v8_trailingSlashAwareDataRequests: true,
			v8_passThroughRequests: true
		},
		isSpaMode: false,
		ssr: true,
		criticalCss: "",
		manifest: {
			routes: {},
			version: "1",
			url: "",
			entry: {
				module: "",
				imports: []
			}
		},
		routeDiscovery: payload.routeDiscovery.mode === "initial" ? {
			mode: "initial",
			manifestPath: defaultManifestPath
		} : {
			mode: "lazy",
			manifestPath: payload.routeDiscovery.manifestPath || defaultManifestPath
		},
		routeModules
	};
	return /* @__PURE__ */ import_react$3.createElement(RSCRouterContext.Provider, { value: true }, /* @__PURE__ */ import_react$3.createElement(RSCRouterGlobalErrorBoundary, { location: state.location }, /* @__PURE__ */ import_react$3.createElement(FrameworkContext.Provider, { value: frameworkContext }, /* @__PURE__ */ import_react$3.createElement(RouterProvider$1, {
		router: transitionEnabledRouter,
		flushSync: import_react_dom$1.flushSync
	}))));
}
function createRouteFromServerManifest(match, payload) {
	let hasInitialData = payload && match.id in payload.loaderData;
	let initialData = payload?.loaderData[match.id];
	let hasInitialError = payload?.errors && match.id in payload.errors;
	let initialError = payload?.errors?.[match.id];
	let isHydrationRequest = match.clientLoader?.hydrate === true || !match.hasLoader || match.hasComponent && !match.element;
	invariant$2(window.__reactRouterRouteModules);
	populateRSCRouteModules(window.__reactRouterRouteModules, match);
	let dataRoute = {
		id: match.id,
		element: match.element,
		errorElement: match.errorElement,
		handle: match.handle,
		hasErrorBoundary: match.hasErrorBoundary,
		hydrateFallbackElement: match.hydrateFallbackElement,
		index: match.index,
		loader: match.clientLoader ? async (args, singleFetch) => {
			let _isHydrationRequest = isHydrationRequest;
			isHydrationRequest = false;
			return await match.clientLoader({
				...args,
				serverLoader: () => {
					preventInvalidServerHandlerCall("loader", match.id, match.hasLoader);
					if (_isHydrationRequest) {
						if (hasInitialData) return initialData;
						if (hasInitialError) throw initialError;
					}
					return callSingleFetch(singleFetch);
				}
			});
		} : ((_, singleFetch) => callSingleFetch(singleFetch)),
		action: match.clientAction ? (args, singleFetch) => match.clientAction({
			...args,
			serverAction: async () => {
				preventInvalidServerHandlerCall("action", match.id, match.hasLoader);
				return await callSingleFetch(singleFetch);
			}
		}) : match.hasAction ? (_, singleFetch) => callSingleFetch(singleFetch) : () => {
			throw noActionDefinedError("action", match.id);
		},
		path: match.path,
		shouldRevalidate: match.shouldRevalidate,
		hasLoader: true,
		hasClientLoader: match.clientLoader != null,
		hasAction: match.hasAction,
		hasClientAction: match.clientAction != null
	};
	if (typeof dataRoute.loader === "function") dataRoute.loader.hydrate = shouldHydrateRouteLoader(match.id, match.clientLoader, match.hasLoader, false);
	return dataRoute;
}
function callSingleFetch(singleFetch) {
	invariant$2(typeof singleFetch === "function", "Invalid singleFetch parameter");
	return singleFetch();
}
function preventInvalidServerHandlerCall(type, routeId, hasHandler) {
	if (!hasHandler) {
		let msg = `You are trying to call ${type === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${type} (routeId: "${routeId}")`;
		console.error(msg);
		throw new ErrorResponseImpl(400, "Bad Request", new Error(msg), true);
	}
}
function getManifestUrl(paths) {
	if (paths.length === 0) return null;
	if (paths.length === 1) return new URL(`${paths[0]}.manifest`, window.location.origin);
	let basename = (window.__reactRouterDataRouter.basename ?? "").replace(/^\/|\/$/g, "");
	let url = new URL(`${basename}/.manifest`, window.location.origin);
	url.searchParams.set("paths", paths.sort().join(","));
	return url;
}
async function fetchAndApplyManifestPatches(paths, createFromReadableStream, fetchImplementation, signal) {
	let url = getManifestUrl(paths);
	if (url == null) return;
	if (url.toString().length > 7680) {
		nextPaths.clear();
		return;
	}
	let response = await fetchImplementation(new Request(url, { signal }));
	if (!response.body || response.status < 200 || response.status >= 300) throw new Error("Unable to fetch new route matches from the server");
	let payload = await createFromReadableStream(response.body, { temporaryReferences: void 0 });
	if (payload.type !== "manifest") throw new Error("Failed to patch routes");
	paths.forEach((p) => addToFifoQueue(p, discoveredPaths));
	let patches = await payload.patches;
	import_react$3.startTransition(() => {
		patches.forEach((p) => {
			window.__reactRouterDataRouter.patchRoutes(p.parentId ?? null, [createRouteFromServerManifest(p)]);
		});
	});
}
function addToFifoQueue(path, queue) {
	if (queue.size >= discoveredPathsMaxSize) {
		let first = queue.values().next().value;
		if (typeof first === "string") queue.delete(first);
	}
	queue.add(path);
}
function debounce(callback, wait) {
	let timeoutId;
	return (...args) => {
		window.clearTimeout(timeoutId);
		timeoutId = window.setTimeout(() => callback(...args), wait);
	};
}
function isExternalLocation(location2) {
	return new URL(location2, window.location.href).origin !== window.location.origin;
}
function hasInvalidProtocol(location2) {
	try {
		return invalidProtocols.includes(new URL(location2).protocol);
	} catch {
		return false;
	}
}
function cloneRoutes(routes) {
	if (!routes) return void 0;
	return routes.map((route) => ({
		...route,
		children: cloneRoutes(route.children)
	}));
}
function diffRoutes(a, b) {
	if (a.length !== b.length) return true;
	return a.some((route, index) => {
		if (route.element !== b[index].element) return true;
		if (route.errorElement !== b[index].errorElement) return true;
		if (route.hydrateFallbackElement !== b[index].hydrateFallbackElement) return true;
		if (route.hasErrorBoundary !== b[index].hasErrorBoundary) return true;
		if (route.hasLoader !== b[index].hasLoader) return true;
		if (route.hasClientLoader !== b[index].hasClientLoader) return true;
		if (route.hasAction !== b[index].hasAction) return true;
		if (route.hasClientAction !== b[index].hasClientAction) return true;
		return diffRoutes(route.children || [], b[index].children || []);
	});
}
function getRSCStream() {
	let encoder = new TextEncoder();
	let streamController = null;
	let rscStream = new ReadableStream({ start(controller) {
		if (typeof window === "undefined") return;
		let handleChunk = (chunk) => {
			if (typeof chunk === "string") controller.enqueue(encoder.encode(chunk));
			else controller.enqueue(chunk);
		};
		window.__FLIGHT_DATA || (window.__FLIGHT_DATA = []);
		window.__FLIGHT_DATA.forEach(handleChunk);
		window.__FLIGHT_DATA.push = (chunk) => {
			handleChunk(chunk);
			return 0;
		};
		streamController = controller;
	} });
	if (typeof document !== "undefined" && document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => {
		streamController?.close();
	});
	else streamController?.close();
	return rscStream;
}
var import_react$1, import_react_dom, import_react$2, import_react$3, import_react_dom$1, ssrInfo, router, defaultManifestPath, renderedRoutesContext, nextPaths, discoveredPathsMaxSize, discoveredPaths;
var init_dom_export = __esmMin((() => {
	init_chunk_ASILSGTR();
	init_chunk_6CSD65Y2();
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom$1 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	ssrInfo = null;
	router = null;
	defaultManifestPath = "/__manifest";
	renderedRoutesContext = createContext$7();
	nextPaths = /* @__PURE__ */ new Set();
	discoveredPathsMaxSize = 1e3;
	discoveredPaths = /* @__PURE__ */ new Set();
}));
//#endregion
//#region node_modules/react-router/dist/development/index.mjs
/**
* react-router v7.17.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
var development_exports = /* @__PURE__ */ __exportAll({
	Await: () => Await,
	BrowserRouter: () => BrowserRouter,
	Form: () => Form,
	HashRouter: () => HashRouter,
	IDLE_BLOCKER: () => IDLE_BLOCKER,
	IDLE_FETCHER: () => IDLE_FETCHER,
	IDLE_NAVIGATION: () => IDLE_NAVIGATION,
	Link: () => Link$1,
	Links: () => Links,
	MemoryRouter: () => MemoryRouter,
	Meta: () => Meta,
	NavLink: () => NavLink,
	Navigate: () => Navigate,
	NavigationType: () => Action,
	Outlet: () => Outlet,
	PrefetchPageLinks: () => PrefetchPageLinks,
	Route: () => Route,
	Router: () => Router,
	RouterContextProvider: () => RouterContextProvider,
	RouterProvider: () => RouterProvider$1,
	Routes: () => Routes,
	Scripts: () => Scripts,
	ScrollRestoration: () => ScrollRestoration,
	ServerRouter: () => ServerRouter,
	StaticRouter: () => StaticRouter,
	StaticRouterProvider: () => StaticRouterProvider,
	UNSAFE_AwaitContextProvider: () => AwaitContextProvider,
	UNSAFE_DataRouterContext: () => DataRouterContext,
	UNSAFE_DataRouterStateContext: () => DataRouterStateContext,
	UNSAFE_ErrorResponseImpl: () => ErrorResponseImpl,
	UNSAFE_FetchersContext: () => FetchersContext,
	UNSAFE_FrameworkContext: () => FrameworkContext,
	UNSAFE_LocationContext: () => LocationContext,
	UNSAFE_NavigationContext: () => NavigationContext,
	UNSAFE_RSCDefaultRootErrorBoundary: () => RSCDefaultRootErrorBoundary,
	UNSAFE_RemixErrorBoundary: () => RemixErrorBoundary,
	UNSAFE_RouteContext: () => RouteContext,
	UNSAFE_ServerMode: () => ServerMode,
	UNSAFE_SingleFetchRedirectSymbol: () => SingleFetchRedirectSymbol,
	UNSAFE_ViewTransitionContext: () => ViewTransitionContext,
	UNSAFE_WithComponentProps: () => WithComponentProps,
	UNSAFE_WithErrorBoundaryProps: () => WithErrorBoundaryProps,
	UNSAFE_WithHydrateFallbackProps: () => WithHydrateFallbackProps,
	UNSAFE_createBrowserHistory: () => createBrowserHistory,
	UNSAFE_createClientRoutes: () => createClientRoutes,
	UNSAFE_createClientRoutesWithHMRRevalidationOptOut: () => createClientRoutesWithHMRRevalidationOptOut,
	UNSAFE_createHashHistory: () => createHashHistory,
	UNSAFE_createMemoryHistory: () => createMemoryHistory,
	UNSAFE_createRouter: () => createRouter,
	UNSAFE_decodeViaTurboStream: () => decodeViaTurboStream,
	UNSAFE_deserializeErrors: () => deserializeErrors,
	UNSAFE_getHydrationData: () => getHydrationData,
	UNSAFE_getPatchRoutesOnNavigationFunction: () => getPatchRoutesOnNavigationFunction,
	UNSAFE_getTurboStreamSingleFetchDataStrategy: () => getTurboStreamSingleFetchDataStrategy,
	UNSAFE_hydrationRouteProperties: () => hydrationRouteProperties,
	UNSAFE_invariant: () => invariant$2,
	UNSAFE_mapRouteProperties: () => mapRouteProperties,
	UNSAFE_shouldHydrateRouteLoader: () => shouldHydrateRouteLoader,
	UNSAFE_useFogOFWarDiscovery: () => useFogOFWarDiscovery,
	UNSAFE_useScrollRestoration: () => useScrollRestoration,
	UNSAFE_withComponentProps: () => withComponentProps,
	UNSAFE_withErrorBoundaryProps: () => withErrorBoundaryProps,
	UNSAFE_withHydrateFallbackProps: () => withHydrateFallbackProps,
	createBrowserRouter: () => createBrowserRouter,
	createContext: () => createContext$7,
	createCookie: () => createCookie,
	createCookieSessionStorage: () => createCookieSessionStorage,
	createHashRouter: () => createHashRouter,
	createMemoryRouter: () => createMemoryRouter,
	createMemorySessionStorage: () => createMemorySessionStorage,
	createPath: () => createPath,
	createRequestHandler: () => createRequestHandler,
	createRoutesFromChildren: () => createRoutesFromChildren,
	createRoutesFromElements: () => createRoutesFromElements,
	createRoutesStub: () => createRoutesStub,
	createSearchParams: () => createSearchParams,
	createSession: () => createSession,
	createSessionStorage: () => createSessionStorage,
	createStaticHandler: () => createStaticHandler2,
	createStaticRouter: () => createStaticRouter,
	data: () => data,
	generatePath: () => generatePath,
	href: () => href,
	isCookie: () => isCookie,
	isRouteErrorResponse: () => isRouteErrorResponse,
	isSession: () => isSession,
	matchPath: () => matchPath,
	matchRoutes: () => matchRoutes,
	parsePath: () => parsePath,
	redirect: () => redirect,
	redirectDocument: () => redirectDocument,
	renderMatches: () => renderMatches,
	replace: () => replace,
	resolvePath: () => resolvePath,
	unstable_HistoryRouter: () => HistoryRouter,
	unstable_RSCStaticRouter: () => RSCStaticRouter,
	unstable_routeRSCServerRequest: () => routeRSCServerRequest,
	unstable_setDevServerHooks: () => setDevServerHooks,
	unstable_usePrompt: () => usePrompt,
	unstable_useRoute: () => useRoute,
	unstable_useRouterState: () => useRouterState,
	useActionData: () => useActionData,
	useAsyncError: () => useAsyncError,
	useAsyncValue: () => useAsyncValue,
	useBeforeUnload: () => useBeforeUnload,
	useBlocker: () => useBlocker,
	useFetcher: () => useFetcher,
	useFetchers: () => useFetchers,
	useFormAction: () => useFormAction,
	useHref: () => useHref,
	useInRouterContext: () => useInRouterContext,
	useLinkClickHandler: () => useLinkClickHandler,
	useLoaderData: () => useLoaderData,
	useLocation: () => useLocation$1,
	useMatch: () => useMatch,
	useMatches: () => useMatches,
	useNavigate: () => useNavigate,
	useNavigation: () => useNavigation,
	useNavigationType: () => useNavigationType,
	useOutlet: () => useOutlet,
	useOutletContext: () => useOutletContext,
	useParams: () => useParams,
	useResolvedPath: () => useResolvedPath,
	useRevalidator: () => useRevalidator,
	useRouteError: () => useRouteError,
	useRouteLoaderData: () => useRouteLoaderData,
	useRoutes: () => useRoutes,
	useSearchParams: () => useSearchParams,
	useSubmit: () => useSubmit,
	useViewTransitionState: () => useViewTransitionState
});
var init_development = __esmMin((() => {
	init_chunk_ASILSGTR();
	init_chunk_6CSD65Y2();
}));
//#endregion
//#region node_modules/react-router-dom/dist/index.js
/**
* react-router-dom v7.17.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
var require_dist = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var index_exports = {};
	__export(index_exports, {
		HydratedRouter: () => import_dom.HydratedRouter,
		RouterProvider: () => import_dom.RouterProvider
	});
	module.exports = __toCommonJS(index_exports);
	var import_dom = (init_dom_export(), __toCommonJS(dom_export_exports));
	__reExport(index_exports, (init_development(), __toCommonJS(development_exports)), module.exports);
	0 && (module.exports = {
		HydratedRouter,
		RouterProvider,
		...(init_development(), __toCommonJS(development_exports))
	});
}));
//#endregion
//#region node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_jsx_runtime = require_jsx_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var LayoutGroupContext = (0, import_react.createContext)({});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-constant.mjs
/**
* Creates a constant value over the lifecycle of a component.
*
* Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
* a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
* you can ensure that initialisers don't execute twice or more.
*/
function useConstant(init) {
	const ref = (0, import_react.useRef)(null);
	if (ref.current === null) ref.current = init();
	return ref.current;
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
//#endregion
//#region node_modules/framer-motion/dist/es/context/PresenceContext.mjs
/**
* @public
*/
var PresenceContext = /* @__PURE__ */ (0, import_react.createContext)(null);
//#endregion
//#region node_modules/motion-utils/dist/es/array.mjs
function addUniqueItem(arr, item) {
	if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
	const index = arr.indexOf(item);
	if (index > -1) arr.splice(index, 1);
}
//#endregion
//#region node_modules/motion-utils/dist/es/clamp.mjs
var clamp = (min, max, v) => {
	if (v > max) return max;
	if (v < min) return min;
	return v;
};
//#endregion
//#region node_modules/motion-utils/dist/es/format-error-message.mjs
function formatErrorMessage(message, errorCode) {
	return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
//#endregion
//#region node_modules/motion-utils/dist/es/errors.mjs
var warning = () => {};
var invariant = () => {};
if (typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
	warning = (check, message, errorCode) => {
		if (!check && typeof console !== "undefined") console.warn(formatErrorMessage(message, errorCode));
	};
	invariant = (check, message, errorCode) => {
		if (!check) throw new Error(formatErrorMessage(message, errorCode));
	};
}
//#endregion
//#region node_modules/motion-utils/dist/es/global-config.mjs
var MotionGlobalConfig = {};
//#endregion
//#region node_modules/motion-utils/dist/es/is-numerical-string.mjs
/**
* Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
*/
var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
//#endregion
//#region node_modules/motion-utils/dist/es/is-object.mjs
var isObject = (value) => typeof value === "object" && value !== null;
//#endregion
//#region node_modules/motion-utils/dist/es/is-zero-value-string.mjs
/**
* Check if the value is a zero value string like "0px" or "0%"
*/
var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);
//#endregion
//#region node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function memo(callback) {
	let result;
	return () => {
		if (result === void 0) result = callback();
		return result;
	};
}
//#endregion
//#region node_modules/motion-utils/dist/es/noop.mjs
var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;
//#endregion
//#region node_modules/motion-utils/dist/es/pipe.mjs
/**
* Pipe
* Compose other transformers to run linearily
* pipe(min(20), max(40))
* @param  {...functions} transformers
* @return {function}
*/
var pipe = (...transformers) => transformers.reduce((a, b) => (v) => b(a(v)));
//#endregion
//#region node_modules/motion-utils/dist/es/progress.mjs
var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
	const range = to - from;
	return range ? (value - from) / range : 1;
};
//#endregion
//#region node_modules/motion-utils/dist/es/subscription-manager.mjs
var SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(handler) {
		addUniqueItem(this.subscriptions, handler);
		return () => removeItem(this.subscriptions, handler);
	}
	notify(a, b, c) {
		const numSubscriptions = this.subscriptions.length;
		if (!numSubscriptions) return;
		if (numSubscriptions === 1)
 /**
		* If there's only a single handler we can just call it without invoking a loop.
		*/
		this.subscriptions[0](a, b, c);
		else for (let i = 0; i < numSubscriptions; i++) {
			/**
			* Check whether the handler exists before firing as it's possible
			* the subscriptions were modified during this loop running.
			*/
			const handler = this.subscriptions[i];
			handler && handler(a, b, c);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};
//#endregion
//#region node_modules/motion-utils/dist/es/time-conversion.mjs
/**
* Converts seconds to milliseconds
*
* @param seconds - Time in seconds.
* @return milliseconds - Converted time in milliseconds.
*/
var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;
//#endregion
//#region node_modules/motion-utils/dist/es/velocity-per-second.mjs
var velocityPerSecond = /* @__NO_SIDE_EFFECTS__ */ (velocity, frameDuration) => frameDuration ? velocity * (1e3 / frameDuration) : 0;
//#endregion
//#region node_modules/motion-utils/dist/es/warn-once.mjs
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, errorCode) {
	if (condition || warned.has(message)) return;
	console.warn(formatErrorMessage(message, errorCode));
	warned.add(message);
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
	let currentX;
	let currentT;
	let i = 0;
	do {
		currentT = lowerBound + (upperBound - lowerBound) / 2;
		currentX = calcBezier(currentT, mX1, mX2) - x;
		if (currentX > 0) upperBound = currentT;
		else lowerBound = currentT;
	} while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
	return currentT;
}
/*#__NO_SIDE_EFFECTS__*/
function cubicBezier(mX1, mY1, mX2, mY2) {
	if (mX1 === mY1 && mX2 === mY2) return noop;
	const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
	return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => p <= .5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
//#endregion
//#region node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => 1 - easing(1 - p);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/back.mjs
var backOut = /*@__PURE__*/ cubicBezier(.33, 1.53, .69, .99);
var backIn = /*@__PURE__*/ reverseEasing(backOut);
var backInOut = /*@__PURE__*/ mirrorEasing(backIn);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/anticipate.mjs
var anticipate = (p) => p >= 1 ? 1 : (p *= 2) < 1 ? .5 * backIn(p) : .5 * (2 - Math.pow(2, -10 * (p - 1)));
//#endregion
//#region node_modules/motion-utils/dist/es/easing/circ.mjs
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = /* @__PURE__ */ reverseEasing(circIn);
var circInOut = /* @__PURE__ */ mirrorEasing(circIn);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/ease.mjs
var easeIn = /*@__PURE__*/ cubicBezier(.42, 0, 1, 1);
var easeOut = /*@__PURE__*/ cubicBezier(0, 0, .58, 1);
var easeInOut = /*@__PURE__*/ cubicBezier(.42, 0, .58, 1);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = /* @__NO_SIDE_EFFECTS__ */ (ease) => {
	return Array.isArray(ease) && typeof ease[0] !== "number";
};
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = /* @__NO_SIDE_EFFECTS__ */ (easing) => Array.isArray(easing) && typeof easing[0] === "number";
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/map.mjs
var easingLookup = {
	linear: noop,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate
};
var isValidEasing = (easing) => {
	return typeof easing === "string";
};
var easingDefinitionToFunction = (definition) => {
	if (/* @__PURE__ */ isBezierDefinition(definition)) {
		invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
		const [x1, y1, x2, y2] = definition;
		return /* @__PURE__ */ cubicBezier(x1, y1, x2, y2);
	} else if (isValidEasing(definition)) {
		invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`, "invalid-easing-type");
		return easingLookup[definition];
	}
	return definition;
};
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/order.mjs
var stepsOrder = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];
//#endregion
//#region node_modules/motion-dom/dist/es/stats/buffer.mjs
var statsBuffer = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame, stepName) {
	/**
	* We create and reuse two queues, one to queue jobs for the current frame
	* and one for the next. We reuse to avoid triggering GC after x frames.
	*/
	let thisFrame = /* @__PURE__ */ new Set();
	let nextFrame = /* @__PURE__ */ new Set();
	/**
	* Track whether we're currently processing jobs in this step. This way
	* we can decide whether to schedule new jobs for this frame or next.
	*/
	let isProcessing = false;
	let flushNextFrame = false;
	/**
	* A set of processes which were marked keepAlive when scheduled.
	*/
	const toKeepAlive = /* @__PURE__ */ new WeakSet();
	let latestFrameData = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	let numCalls = 0;
	function triggerCallback(callback) {
		if (toKeepAlive.has(callback)) {
			step.schedule(callback);
			runNextFrame();
		}
		numCalls++;
		callback(latestFrameData);
	}
	const step = {
		/**
		* Schedule a process to run on the next frame.
		*/
		schedule: (callback, keepAlive = false, immediate = false) => {
			const queue = immediate && isProcessing ? thisFrame : nextFrame;
			if (keepAlive) toKeepAlive.add(callback);
			queue.add(callback);
			return callback;
		},
		/**
		* Cancel the provided callback from running on the next frame.
		*/
		cancel: (callback) => {
			nextFrame.delete(callback);
			toKeepAlive.delete(callback);
		},
		/**
		* Execute all schedule callbacks.
		*/
		process: (frameData) => {
			latestFrameData = frameData;
			/**
			* If we're already processing we've probably been triggered by a flushSync
			* inside an existing process. Instead of executing, mark flushNextFrame
			* as true and ensure we flush the following frame at the end of this one.
			*/
			if (isProcessing) {
				flushNextFrame = true;
				return;
			}
			isProcessing = true;
			const prevFrame = thisFrame;
			thisFrame = nextFrame;
			nextFrame = prevFrame;
			thisFrame.forEach(triggerCallback);
			/**
			* If we're recording stats then
			*/
			if (stepName && statsBuffer.value) statsBuffer.value.frameloop[stepName].push(numCalls);
			numCalls = 0;
			thisFrame.clear();
			isProcessing = false;
			if (flushNextFrame) {
				flushNextFrame = false;
				step.process(frameData);
			}
		}
	};
	return step;
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
	let runNextFrame = false;
	let useDefaultElapsed = true;
	const state = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	const flagRunNextFrame = () => runNextFrame = true;
	const steps = stepsOrder.reduce((acc, key) => {
		acc[key] = createRenderStep(flagRunNextFrame, allowKeepAlive ? key : void 0);
		return acc;
	}, {});
	const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
	const processBatch = () => {
		const useManualTiming = MotionGlobalConfig.useManualTiming;
		const timestamp = useManualTiming ? state.timestamp : performance.now();
		runNextFrame = false;
		if (!useManualTiming) state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
		state.timestamp = timestamp;
		state.isProcessing = true;
		setup.process(state);
		read.process(state);
		resolveKeyframes.process(state);
		preUpdate.process(state);
		update.process(state);
		preRender.process(state);
		render.process(state);
		postRender.process(state);
		state.isProcessing = false;
		if (runNextFrame && allowKeepAlive) {
			useDefaultElapsed = false;
			scheduleNextBatch(processBatch);
		}
	};
	const wake = () => {
		runNextFrame = true;
		useDefaultElapsed = true;
		if (!state.isProcessing) scheduleNextBatch(processBatch);
	};
	const schedule = stepsOrder.reduce((acc, key) => {
		const step = steps[key];
		acc[key] = (process, keepAlive = false, immediate = false) => {
			if (!runNextFrame) wake();
			return step.schedule(process, keepAlive, immediate);
		};
		return acc;
	}, {});
	const cancel = (process) => {
		for (let i = 0; i < stepsOrder.length; i++) steps[stepsOrder[i]].cancel(process);
	};
	return {
		schedule,
		cancel,
		state,
		steps
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
	now = void 0;
}
/**
* An eventloop-synchronous alternative to performance.now().
*
* Ensures that time measurements remain consistent within a synchronous context.
* Usually calling performance.now() twice within the same synchronous context
* will return different values which isn't useful for animations when we're usually
* trying to sync animations to the same frame.
*/
var time = {
	now: () => {
		if (now === void 0) time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
		return now;
	},
	set: (newTime) => {
		now = newTime;
		queueMicrotask(clearTime);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/stats/animation-count.mjs
var activeAnimations = {
	layout: 0,
	mainThread: 0,
	waapi: 0
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = /*@__PURE__*/ checkStringStartsWith("--");
var startsAsVariableToken = /*@__PURE__*/ checkStringStartsWith("var(--");
var isCSSVariableToken = (value) => {
	if (!startsAsVariableToken(value)) return false;
	return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
/**
* Check if a value contains a CSS variable anywhere (e.g. inside calc()).
* Unlike isCSSVariableToken which checks if the value IS a var() token,
* this checks if the value CONTAINS var() somewhere in the string.
*/
function containsCSSVariable(value) {
	if (typeof value !== "string") return false;
	return value.split("/*")[0].includes("var(--");
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var number = {
	test: (v) => typeof v === "number",
	parse: parseFloat,
	transform: (v) => v
};
var alpha = {
	...number,
	transform: (v) => clamp(0, 1, v)
};
var scale = {
	...number,
	default: 1
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
	return v == null;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/utils.mjs
/**
* Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
* but false if a number or multiple colors
*/
var isColorString = (type, testProp) => (v) => {
	return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
	if (typeof v !== "string") return v;
	const [a, b, c, alpha] = v.match(floatRegex);
	return {
		[aName]: parseFloat(a),
		[bName]: parseFloat(b),
		[cName]: parseFloat(c),
		alpha: alpha !== void 0 ? parseFloat(alpha) : 1
	};
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp(0, 255, v);
var rgbUnit = {
	...number,
	transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
	test: /*@__PURE__*/ isColorString("rgb", "red"),
	parse: /*@__PURE__*/ splitColor("red", "green", "blue"),
	transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function parseHex(v) {
	let r = "";
	let g = "";
	let b = "";
	let a = "";
	if (v.length > 5) {
		r = v.substring(1, 3);
		g = v.substring(3, 5);
		b = v.substring(5, 7);
		a = v.substring(7, 9);
	} else {
		r = v.substring(1, 2);
		g = v.substring(2, 3);
		b = v.substring(3, 4);
		a = v.substring(4, 5);
		r += r;
		g += g;
		b += b;
		a += a;
	}
	return {
		red: parseInt(r, 16),
		green: parseInt(g, 16),
		blue: parseInt(b, 16),
		alpha: a ? parseInt(a, 16) / 255 : 1
	};
}
var hex = {
	test: /*@__PURE__*/ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
var createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
	test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
	parse: parseFloat,
	transform: (v) => `${v}${unit}`
});
var degrees = /*@__PURE__*/ createUnitType("deg");
var percent = /*@__PURE__*/ createUnitType("%");
var px = /*@__PURE__*/ createUnitType("px");
var vh = /*@__PURE__*/ createUnitType("vh");
var vw = /*@__PURE__*/ createUnitType("vw");
var progressPercentage = /*@__PURE__*/ (() => ({
	...percent,
	parse: (v) => percent.parse(v) / 100,
	transform: (v) => percent.transform(v * 100)
}))();
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
var hsla = {
	test: /*@__PURE__*/ isColorString("hsl", "hue"),
	parse: /*@__PURE__*/ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
		return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = {
	test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
	parse: (v) => {
		if (rgba.test(v)) return rgba.parse(v);
		else if (hsla.test(v)) return hsla.parse(v);
		else return hex.parse(v);
	},
	transform: (v) => {
		return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
	},
	getAnimatableNone: (v) => {
		const parsed = color.parse(v);
		parsed.alpha = 0;
		return color.transform(parsed);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function test(v) {
	return isNaN(v) && typeof v === "string" && (v.match(floatRegex)?.length || 0) + (v.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
	const originalValue = value.toString();
	const values = [];
	const indexes = {
		color: [],
		number: [],
		var: []
	};
	const types = [];
	let i = 0;
	return {
		values,
		split: originalValue.replace(complexRegex, (parsedValue) => {
			if (color.test(parsedValue)) {
				indexes.color.push(i);
				types.push(COLOR_TOKEN);
				values.push(color.parse(parsedValue));
			} else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
				indexes.var.push(i);
				types.push(VAR_TOKEN);
				values.push(parsedValue);
			} else {
				indexes.number.push(i);
				types.push(NUMBER_TOKEN);
				values.push(parseFloat(parsedValue));
			}
			++i;
			return SPLIT_TOKEN;
		}).split(SPLIT_TOKEN),
		indexes,
		types
	};
}
function parseComplexValue(v) {
	return analyseComplexValue(v).values;
}
function buildTransformer({ split, types }) {
	const numSections = split.length;
	return (v) => {
		let output = "";
		for (let i = 0; i < numSections; i++) {
			output += split[i];
			if (v[i] !== void 0) {
				const type = types[i];
				if (type === NUMBER_TOKEN) output += sanitize(v[i]);
				else if (type === COLOR_TOKEN) output += color.transform(v[i]);
				else output += v[i];
			}
		}
		return output;
	};
}
function createTransformer(source) {
	return buildTransformer(analyseComplexValue(source));
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
/**
* Convert a parsed value to its zero equivalent, but preserve numbers
* that act as divisors in CSS calc() expressions.
*
* analyseComplexValue extracts numbers from CSS strings and puts the
* surrounding text into a `split` template array. For example:
*   "calc(var(--gap) / 5)"  →  values: [var(--gap), 5]
*                               split:  ["calc(", " / ", ")"]
*
* When building a zero-equivalent for animation, naively zeroing all
* numbers turns the divisor into 0 → "calc(var(--gap) / 0)" → NaN.
* We detect this by checking whether the text preceding a number
* (split[i]) ends with "/" — the CSS calc division operator.
*/
var convertToZero = (value, splitBefore) => {
	if (typeof value === "number") return splitBefore?.trim().endsWith("/") ? value : 0;
	return convertNumbersToZero(value);
};
function getAnimatableNone$1(v) {
	const info = analyseComplexValue(v);
	return buildTransformer(info)(info.values.map((value, i) => convertToZero(value, info.split[i])));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
	hue /= 360;
	saturation /= 100;
	lightness /= 100;
	let red = 0;
	let green = 0;
	let blue = 0;
	if (!saturation) red = green = blue = lightness;
	else {
		const q = lightness < .5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
		const p = 2 * lightness - q;
		red = hueToRgb(p, q, hue + 1 / 3);
		green = hueToRgb(p, q, hue);
		blue = hueToRgb(p, q, hue - 1 / 3);
	}
	return {
		red: Math.round(red * 255),
		green: Math.round(green * 255),
		blue: Math.round(blue * 255),
		alpha
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
	return (p) => p > 0 ? b : a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/number.mjs
var mixNumber$1 = (from, to, progress) => {
	return from + (to - from) * progress;
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
	const fromExpo = from * from;
	const expo = v * (to * to - fromExpo) + fromExpo;
	return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [
	hex,
	rgba,
	hsla
];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
	const type = getColorType(color);
	warning(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
	if (!Boolean(type)) return false;
	let model = type.parse(color);
	if (type === hsla) model = hslaToRgba(model);
	return model;
}
var mixColor = (from, to) => {
	const fromRGBA = asRGBA(from);
	const toRGBA = asRGBA(to);
	if (!fromRGBA || !toRGBA) return mixImmediate(from, to);
	const blended = { ...fromRGBA };
	return (v) => {
		blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
		blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
		blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
		blended.alpha = mixNumber$1(fromRGBA.alpha, toRGBA.alpha, v);
		return rgba.transform(blended);
	};
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
var invisibleValues = new Set(["none", "hidden"]);
/**
* Returns a function that, when provided a progress value between 0 and 1,
* will return the "none" or "hidden" string only when the progress is that of
* the origin or target.
*/
function mixVisibility(origin, target) {
	if (invisibleValues.has(origin)) return (p) => p <= 0 ? origin : target;
	else return (p) => p >= 1 ? target : origin;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function mixNumber(a, b) {
	return (p) => mixNumber$1(a, b, p);
}
function getMixer(a) {
	if (typeof a === "number") return mixNumber;
	else if (typeof a === "string") return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
	else if (Array.isArray(a)) return mixArray;
	else if (typeof a === "object") return color.test(a) ? mixColor : mixObject;
	return mixImmediate;
}
function mixArray(a, b) {
	const output = [...a];
	const numValues = output.length;
	const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
	return (p) => {
		for (let i = 0; i < numValues; i++) output[i] = blendValue[i](p);
		return output;
	};
}
function mixObject(a, b) {
	const output = {
		...a,
		...b
	};
	const blendValue = {};
	for (const key in output) if (a[key] !== void 0 && b[key] !== void 0) blendValue[key] = getMixer(a[key])(a[key], b[key]);
	return (v) => {
		for (const key in blendValue) output[key] = blendValue[key](v);
		return output;
	};
}
function matchOrder(origin, target) {
	const orderedOrigin = [];
	const pointers = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < target.values.length; i++) {
		const type = target.types[i];
		const originIndex = origin.indexes[type][pointers[type]];
		orderedOrigin[i] = origin.values[originIndex] ?? 0;
		pointers[type]++;
	}
	return orderedOrigin;
}
var mixComplex = (origin, target) => {
	const template = complex.createTransformer(target);
	const originStats = analyseComplexValue(origin);
	const targetStats = analyseComplexValue(target);
	if (originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length) {
		if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) return mixVisibility(origin, target);
		return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
	} else {
		warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
		return mixImmediate(origin, target);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/index.mjs
function mix(from, to, p) {
	if (typeof from === "number" && typeof to === "number" && typeof p === "number") return mixNumber$1(from, to, p);
	return getMixer(from)(from, to);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var frameloopDriver = (update) => {
	const passTimestamp = ({ timestamp }) => update(timestamp);
	return {
		start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
		stop: () => cancelFrame(passTimestamp),
		/**
		* If we're processing this frame we can use the
		* framelocked timestamp to keep things in sync.
		*/
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
var generateLinearEasing = (easing, duration, resolution = 10) => {
	let points = "";
	const numPoints = Math.max(Math.round(duration / resolution), 2);
	for (let i = 0; i < numPoints; i++) points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${points.substring(0, points.length - 2)})`;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
/**
* Implement a practical max duration for keyframe generation
* to prevent infinite loops
*/
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
	let duration = 0;
	const timeStep = 50;
	let state = generator.next(duration);
	while (!state.done && duration < 2e4) {
		duration += timeStep;
		state = generator.next(duration);
	}
	return duration >= 2e4 ? Infinity : duration;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
/**
* Create a progress => progress easing function from a generator.
*/
function createGeneratorEasing(options, scale = 100, createGenerator) {
	const generator = createGenerator({
		...options,
		keyframes: [0, scale]
	});
	const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (progress) => {
			return generator.next(duration * progress).value / scale;
		},
		duration: /* @__PURE__ */ millisecondsToSeconds(duration)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var springDefaults = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function calcAngularFreq(undampedFreq, dampingRatio) {
	return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
	let result = initialGuess;
	for (let i = 1; i < rootIterations; i++) result = result - envelope(result) / derivative(result);
	return result;
}
/**
* This is ported from the Framer implementation of duration-based spring resolution.
*/
var safeMin = .001;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
	let envelope;
	let derivative;
	warning(duration <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let dampingRatio = 1 - bounce;
	/**
	* Restrict dampingRatio and duration to within acceptable ranges.
	*/
	dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
	duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(duration));
	if (dampingRatio < 1) {
		/**
		* Underdamped spring
		*/
		envelope = (undampedFreq) => {
			const exponentialDecay = undampedFreq * dampingRatio;
			const delta = exponentialDecay * duration;
			const a = exponentialDecay - velocity;
			const b = calcAngularFreq(undampedFreq, dampingRatio);
			const c = Math.exp(-delta);
			return safeMin - a / b * c;
		};
		derivative = (undampedFreq) => {
			const delta = undampedFreq * dampingRatio * duration;
			const d = delta * velocity + velocity;
			const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
			const f = Math.exp(-delta);
			const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
			return (-envelope(undampedFreq) + safeMin > 0 ? -1 : 1) * ((d - e) * f) / g;
		};
	} else {
		/**
		* Critically-damped spring
		*/
		envelope = (undampedFreq) => {
			return -.001 + Math.exp(-undampedFreq * duration) * ((undampedFreq - velocity) * duration + 1);
		};
		derivative = (undampedFreq) => {
			return Math.exp(-undampedFreq * duration) * ((velocity - undampedFreq) * (duration * duration));
		};
	}
	const initialGuess = 5 / duration;
	const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
	duration = /* @__PURE__ */ secondsToMilliseconds(duration);
	if (isNaN(undampedFreq)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration
	};
	else {
		const stiffness = Math.pow(undampedFreq, 2) * mass;
		return {
			stiffness,
			damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
			duration
		};
	}
}
var durationKeys = ["duration", "bounce"];
var physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(options, keys) {
	return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
	let springOptions = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: false,
		...options
	};
	if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
		springOptions.velocity = 0;
		if (options.visualDuration) {
			const visualDuration = options.visualDuration;
			const root = 2 * Math.PI / (visualDuration * 1.2);
			const stiffness = root * root;
			const damping = 2 * clamp(.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
			springOptions = {
				...springOptions,
				mass: springDefaults.mass,
				stiffness,
				damping
			};
		} else {
			const derived = findSpring({
				...options,
				velocity: 0
			});
			springOptions = {
				...springOptions,
				...derived,
				mass: springDefaults.mass
			};
			springOptions.isResolvedFromDuration = true;
		}
	}
	return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
	const options = typeof optionsOrVisualDuration !== "object" ? {
		visualDuration: optionsOrVisualDuration,
		keyframes: [0, 1],
		bounce
	} : optionsOrVisualDuration;
	let { restSpeed, restDelta } = options;
	const origin = options.keyframes[0];
	const target = options.keyframes[options.keyframes.length - 1];
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: origin
	};
	const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
		...options,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(options.velocity || 0)
	});
	const initialVelocity = velocity || 0;
	const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
	const initialDelta = target - origin;
	const undampedAngularFreq = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(stiffness / mass));
	/**
	* If we're working on a granular scale, use smaller defaults for determining
	* when the spring is finished.
	*
	* These defaults have been selected emprically based on what strikes a good
	* ratio between feeling good and finishing as soon as changes are imperceptible.
	*/
	const isGranularScale = Math.abs(initialDelta) < 5;
	restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
	restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
	let resolveSpring;
	let resolveVelocity;
	let angularFreq;
	let A;
	let sinCoeff;
	let cosCoeff;
	if (dampingRatio < 1) {
		angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
		A = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq;
		resolveSpring = (t) => {
			return target - Math.exp(-dampingRatio * undampedAngularFreq * t) * (A * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
		};
		sinCoeff = dampingRatio * undampedAngularFreq * A + initialDelta * angularFreq;
		cosCoeff = dampingRatio * undampedAngularFreq * initialDelta - A * angularFreq;
		resolveVelocity = (t) => {
			return Math.exp(-dampingRatio * undampedAngularFreq * t) * (sinCoeff * Math.sin(angularFreq * t) + cosCoeff * Math.cos(angularFreq * t));
		};
	} else if (dampingRatio === 1) {
		resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
		const C = initialVelocity + undampedAngularFreq * initialDelta;
		resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * C * t - initialVelocity);
	} else {
		const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
		resolveSpring = (t) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
			const freqForT = Math.min(dampedAngularFreq * t, 300);
			return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
		};
		const P = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / dampedAngularFreq;
		const sinhCoeff = dampingRatio * undampedAngularFreq * P - initialDelta * dampedAngularFreq;
		const coshCoeff = dampingRatio * undampedAngularFreq * initialDelta - P * dampedAngularFreq;
		resolveVelocity = (t) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
			const freqForT = Math.min(dampedAngularFreq * t, 300);
			return envelope * (sinhCoeff * Math.sinh(freqForT) + coshCoeff * Math.cosh(freqForT));
		};
	}
	const generator = {
		calculatedDuration: isResolvedFromDuration ? duration || null : null,
		velocity: (t) => /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t)),
		next: (t) => {
			/**
			* For underdamped physics springs we need both position and
			* velocity each tick. Compute shared trig values once to avoid
			* duplicate Math.exp/sin/cos calls on the hot path.
			*/
			if (!isResolvedFromDuration && dampingRatio < 1) {
				const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
				const sin = Math.sin(angularFreq * t);
				const cos = Math.cos(angularFreq * t);
				const current = target - envelope * (A * sin + initialDelta * cos);
				const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(envelope * (sinCoeff * sin + cosCoeff * cos));
				state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
				state.value = state.done ? target : current;
				return state;
			}
			const current = resolveSpring(t);
			if (!isResolvedFromDuration) {
				const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t));
				state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
			} else state.done = t >= duration;
			state.value = state.done ? target : current;
			return state;
		},
		toString: () => {
			const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
			const easing = generateLinearEasing((progress) => generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
			return calculatedDuration + "ms " + easing;
		},
		toTransition: () => {}
	};
	return generator;
}
spring.applyToOptions = (options) => {
	const generatorOptions = createGeneratorEasing(options, 100, spring);
	options.ease = generatorOptions.ease;
	options.duration = /* @__PURE__ */ secondsToMilliseconds(generatorOptions.duration);
	options.type = "keyframes";
	return options;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function getGeneratorVelocity(resolveValue, t, current) {
	const prevT = Math.max(t - velocitySampleDuration, 0);
	return /* @__PURE__ */ velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes, velocity = 0, power = .8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = .5, restSpeed }) {
	const origin = keyframes[0];
	const state = {
		done: false,
		value: origin
	};
	const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
	const nearestBoundary = (v) => {
		if (min === void 0) return max;
		if (max === void 0) return min;
		return Math.abs(min - v) < Math.abs(max - v) ? min : max;
	};
	let amplitude = power * velocity;
	const ideal = origin + amplitude;
	const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
	/**
	* If the target has changed we need to re-calculate the amplitude, otherwise
	* the animation will start from the wrong position.
	*/
	if (target !== ideal) amplitude = target - origin;
	const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
	const calcLatest = (t) => target + calcDelta(t);
	const applyFriction = (t) => {
		const delta = calcDelta(t);
		const latest = calcLatest(t);
		state.done = Math.abs(delta) <= restDelta;
		state.value = state.done ? target : latest;
	};
	/**
	* Ideally this would resolve for t in a stateless way, we could
	* do that by always precalculating the animation but as we know
	* this will be done anyway we can assume that spring will
	* be discovered during that.
	*/
	let timeReachedBoundary;
	let spring$1;
	const checkCatchBoundary = (t) => {
		if (!isOutOfBounds(state.value)) return;
		timeReachedBoundary = t;
		spring$1 = spring({
			keyframes: [state.value, nearestBoundary(state.value)],
			velocity: getGeneratorVelocity(calcLatest, t, state.value),
			damping: bounceDamping,
			stiffness: bounceStiffness,
			restDelta,
			restSpeed
		});
	};
	checkCatchBoundary(0);
	return {
		calculatedDuration: null,
		next: (t) => {
			/**
			* We need to resolve the friction to figure out if we need a
			* spring but we don't want to do this twice per frame. So here
			* we flag if we updated for this frame and later if we did
			* we can skip doing it again.
			*/
			let hasUpdatedFrame = false;
			if (!spring$1 && timeReachedBoundary === void 0) {
				hasUpdatedFrame = true;
				applyFriction(t);
				checkCatchBoundary(t);
			}
			/**
			* If we have a spring and the provided t is beyond the moment the friction
			* animation crossed the min/max boundary, use the spring.
			*/
			if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
			else {
				!hasUpdatedFrame && applyFriction(t);
				return state;
			}
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/interpolate.mjs
function createMixers(output, ease, customMixer) {
	const mixers = [];
	const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
	const numMixers = output.length - 1;
	for (let i = 0; i < numMixers; i++) {
		let mixer = mixerFactory(output[i], output[i + 1]);
		if (ease) mixer = pipe(Array.isArray(ease) ? ease[i] || noop : ease, mixer);
		mixers.push(mixer);
	}
	return mixers;
}
/**
* Create a function that maps from a numerical input array to a generic output array.
*
* Accepts:
*   - Numbers
*   - Colors (hex, hsl, hsla, rgb, rgba)
*   - Complex (combinations of one or more numbers or strings)
*
* ```jsx
* const mixColor = interpolate([0, 1], ['#fff', '#000'])
*
* mixColor(0.5) // 'rgba(128, 128, 128, 1)'
* ```
*
* TODO Revisit this approach once we've moved to data models for values,
* probably not needed to pregenerate mixer functions.
*
* @public
*/
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
	const inputLength = input.length;
	invariant(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
	/**
	* If we're only provided a single input, we can just make a function
	* that returns the output.
	*/
	if (inputLength === 1) return () => output[0];
	if (inputLength === 2 && output[0] === output[1]) return () => output[1];
	const isZeroDeltaRange = input[0] === input[1];
	if (input[0] > input[inputLength - 1]) {
		input = [...input].reverse();
		output = [...output].reverse();
	}
	const mixers = createMixers(output, ease, mixer);
	const numMixers = mixers.length;
	const interpolator = (v) => {
		if (isZeroDeltaRange && v < input[0]) return output[0];
		let i = 0;
		if (numMixers > 1) {
			for (; i < input.length - 2; i++) if (v < input[i + 1]) break;
		}
		const progressInRange = /* @__PURE__ */ progress(input[i], input[i + 1], v);
		return mixers[i](progressInRange);
	};
	return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function fillOffset(offset, remaining) {
	const min = offset[offset.length - 1];
	for (let i = 1; i <= remaining; i++) {
		const offsetProgress = /* @__PURE__ */ progress(0, remaining, i);
		offset.push(mixNumber$1(min, 1, offsetProgress));
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function defaultOffset(arr) {
	const offset = [0];
	fillOffset(offset, arr.length - 1);
	return offset;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
	return offset.map((o) => o * duration);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
	return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut" }) {
	/**
	* Easing functions can be externally defined as strings. Here we convert them
	* into actual functions.
	*/
	const easingFunctions = /* @__PURE__ */ isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: keyframeValues[0]
	};
	const mapTimeToKeyframe = interpolate(convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration), keyframeValues, { ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions) });
	return {
		calculatedDuration: duration,
		next: (t) => {
			state.value = mapTimeToKeyframe(t);
			state.done = t >= duration;
			return state;
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
	const resolvedKeyframes = keyframes.filter(isNotNull);
	const index = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
	return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var transitionTypeMap = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
};
function replaceTransitionType(transition) {
	if (typeof transition.type === "string") transition.type = transitionTypeMap[transition.type];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var WithPromise = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((resolve) => {
			this.resolve = resolve;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	/**
	* Allows the animation to be awaited.
	*
	* @deprecated Use `finished` instead.
	*/
	then(onResolve, onReject) {
		return this.finished.then(onResolve, onReject);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
var percentToProgress = (percent) => percent / 100;
var JSAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.state = "idle";
		this.startTime = null;
		this.isStopped = false;
		/**
		* The current time of the animation.
		*/
		this.currentTime = 0;
		/**
		* The time at which the animation was paused.
		*/
		this.holdTime = null;
		/**
		* Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
		*/
		this.playbackSpeed = 1;
		/**
		* Reusable state object for the delay phase to avoid
		* allocating a new object every frame.
		*/
		this.delayState = {
			done: false,
			value: void 0
		};
		/**
		* This method is bound to the instance to fix a pattern where
		* animation.stop is returned as a reference from a useEffect.
		*/
		this.stop = () => {
			const { motionValue } = this.options;
			if (motionValue && motionValue.updatedAt !== time.now()) this.tick(time.now());
			this.isStopped = true;
			if (this.state === "idle") return;
			this.teardown();
			this.options.onStop?.();
		};
		activeAnimations.mainThread++;
		this.options = options;
		this.initAnimation();
		this.play();
		if (options.autoplay === false) this.pause();
	}
	initAnimation() {
		const { options } = this;
		replaceTransitionType(options);
		const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
		let { keyframes: keyframes$1 } = options;
		const generatorFactory = type || keyframes;
		if (process.env.NODE_ENV !== "production" && generatorFactory !== keyframes) invariant(keyframes$1.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`, "spring-two-frames");
		if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
			this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
			keyframes$1 = [0, 100];
		}
		const generator = generatorFactory({
			...options,
			keyframes: keyframes$1
		});
		/**
		* If we have a mirror repeat type we need to create a second generator that outputs the
		* mirrored (not reversed) animation and later ping pong between the two generators.
		*/
		if (repeatType === "mirror") this.mirroredGenerator = generatorFactory({
			...options,
			keyframes: [...keyframes$1].reverse(),
			velocity: -velocity
		});
		/**
		* If duration is undefined and we have repeat options,
		* we need to calculate a duration from the generator.
		*
		* We set it to the generator itself to cache the duration.
		* Any timeline resolver will need to have already precalculated
		* the duration by this step.
		*/
		if (generator.calculatedDuration === null) generator.calculatedDuration = calcGeneratorDuration(generator);
		const { calculatedDuration } = generator;
		this.calculatedDuration = calculatedDuration;
		this.resolvedDuration = calculatedDuration + repeatDelay;
		this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
		this.generator = generator;
	}
	updateTime(timestamp) {
		const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
		if (this.holdTime !== null) this.currentTime = this.holdTime;
		else this.currentTime = animationTime;
	}
	tick(timestamp, sample = false) {
		const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
		if (this.startTime === null) return generator.next(0);
		const { delay = 0, keyframes, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
		/**
		* requestAnimationFrame timestamps can come through as lower than
		* the startTime as set by performance.now(). Here we prevent this,
		* though in the future it could be possible to make setting startTime
		* a pending operation that gets resolved here.
		*/
		if (this.speed > 0) this.startTime = Math.min(this.startTime, timestamp);
		else if (this.speed < 0) this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
		if (sample) this.currentTime = timestamp;
		else this.updateTime(timestamp);
		const timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
		const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
		this.currentTime = Math.max(timeWithoutDelay, 0);
		if (this.state === "finished" && this.holdTime === null) this.currentTime = totalDuration;
		let elapsed = this.currentTime;
		let frameGenerator = generator;
		if (repeat) {
			/**
			* Get the current progress (0-1) of the animation. If t is >
			* than duration we'll get values like 2.5 (midway through the
			* third iteration)
			*/
			const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
			/**
			* Get the current iteration (0 indexed). For instance the floor of
			* 2.5 is 2.
			*/
			let currentIteration = Math.floor(progress);
			/**
			* Get the current progress of the iteration by taking the remainder
			* so 2.5 is 0.5 through iteration 2
			*/
			let iterationProgress = progress % 1;
			/**
			* If iteration progress is 1 we count that as the end
			* of the previous iteration.
			*/
			if (!iterationProgress && progress >= 1) iterationProgress = 1;
			iterationProgress === 1 && currentIteration--;
			currentIteration = Math.min(currentIteration, repeat + 1);
			if (Boolean(currentIteration % 2)) {
				if (repeatType === "reverse") {
					iterationProgress = 1 - iterationProgress;
					if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
				} else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
			}
			elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
		}
		/**
		* If we're in negative time, set state as the initial keyframe.
		* This prevents delay: x, duration: 0 animations from finishing
		* instantly.
		*/
		let state;
		if (isInDelayPhase) {
			this.delayState.value = keyframes[0];
			state = this.delayState;
		} else state = frameGenerator.next(elapsed);
		if (mixKeyframes && !isInDelayPhase) state.value = mixKeyframes(state.value);
		let { done } = state;
		if (!isInDelayPhase && calculatedDuration !== null) done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
		const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
		if (isAnimationFinished && type !== inertia) state.value = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
		if (onUpdate) onUpdate(state.value);
		if (isAnimationFinished) this.finish();
		return state;
	}
	/**
	* Allows the returned animation to be awaited or promise-chained. Currently
	* resolves when the animation finishes at all but in a future update could/should
	* reject if its cancels.
	*/
	then(resolve, reject) {
		return this.finished.then(resolve, reject);
	}
	get duration() {
		return /* @__PURE__ */ millisecondsToSeconds(this.calculatedDuration);
	}
	get iterationDuration() {
		const { delay = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(newTime) {
		newTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		this.currentTime = newTime;
		if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) this.holdTime = newTime;
		else if (this.driver) this.startTime = this.driver.now() - newTime / this.playbackSpeed;
		if (this.driver) this.driver.start(false);
		else {
			this.startTime = 0;
			this.state = "paused";
			this.holdTime = newTime;
			this.tick(newTime);
		}
	}
	/**
	* Returns the generator's velocity at the current time in units/second.
	* Uses the analytical derivative when available (springs), avoiding
	* the MotionValue's frame-dependent velocity estimation.
	*/
	getGeneratorVelocity() {
		const t = this.currentTime;
		if (t <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(t);
		const current = this.generator.next(t).value;
		return getGeneratorVelocity((s) => this.generator.next(s).value, t, current);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(newSpeed) {
		const hasChanged = this.playbackSpeed !== newSpeed;
		if (hasChanged && this.driver) this.updateTime(time.now());
		this.playbackSpeed = newSpeed;
		if (hasChanged && this.driver) this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	play() {
		if (this.isStopped) return;
		const { driver = frameloopDriver, startTime } = this.options;
		if (!this.driver) this.driver = driver((timestamp) => this.tick(timestamp));
		this.options.onPlay?.();
		const now = this.driver.now();
		if (this.state === "finished") {
			this.updateFinished();
			this.startTime = now;
		} else if (this.holdTime !== null) this.startTime = now - this.holdTime;
		else if (!this.startTime) this.startTime = startTime ?? now;
		if (this.state === "finished" && this.speed < 0) this.startTime += this.calculatedDuration;
		this.holdTime = null;
		/**
		* Set playState to running only after we've used it in
		* the previous logic.
		*/
		this.state = "running";
		this.driver.start();
	}
	pause() {
		this.state = "paused";
		this.updateTime(time.now());
		this.holdTime = this.currentTime;
	}
	complete() {
		if (this.state !== "running") this.play();
		this.state = "finished";
		this.holdTime = null;
	}
	finish() {
		this.notifyFinished();
		this.teardown();
		this.state = "finished";
		this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null;
		this.startTime = 0;
		this.tick(0);
		this.teardown();
		this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle";
		this.stopDriver();
		this.startTime = this.holdTime = null;
		activeAnimations.mainThread--;
	}
	stopDriver() {
		if (!this.driver) return;
		this.driver.stop();
		this.driver = void 0;
	}
	sample(sampleTime) {
		this.startTime = 0;
		return this.tick(sampleTime, true);
	}
	attachTimeline(timeline) {
		if (this.options.allowFlatten) {
			this.options.type = "keyframes";
			this.options.ease = "linear";
			this.initAnimation();
		}
		this.driver?.stop();
		return timeline.observe(this);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes) {
	for (let i = 1; i < keyframes.length; i++) keyframes[i] ?? (keyframes[i] = keyframes[i - 1]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var radToDeg = (rad) => rad * 180 / Math.PI;
var rotate = (v) => {
	return rebaseAngle(radToDeg(Math.atan2(v[1], v[0])));
};
var matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
	rotate,
	rotateZ: rotate,
	skewX: (v) => radToDeg(Math.atan(v[1])),
	skewY: (v) => radToDeg(Math.atan(v[2])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
};
var rebaseAngle = (angle) => {
	angle = angle % 360;
	if (angle < 0) angle += 360;
	return angle;
};
var rotateZ = rotate;
var scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
var scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
var matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scale: (v) => (scaleX(v) + scaleY(v)) / 2,
	rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
	rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (v) => radToDeg(Math.atan(v[4])),
	skewY: (v) => radToDeg(Math.atan(v[1])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
	return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
	if (!transform || transform === "none") return defaultTransformValue(name);
	const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
	let parsers;
	let match;
	if (matrix3dMatch) {
		parsers = matrix3dParsers;
		match = matrix3dMatch;
	} else {
		const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		parsers = matrix2dParsers;
		match = matrix2dMatch;
	}
	if (!match) return defaultTransformValue(name);
	const valueParser = parsers[name];
	const values = match[1].split(",").map(convertTransformToNumber);
	return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
var readTransformValue = (instance, name) => {
	const { transform = "none" } = getComputedStyle(instance);
	return parseValueFromTransform(transform, name);
};
function convertTransformToNumber(value) {
	return parseFloat(value.trim());
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
/**
* Generate a list of every possible transform key.
*/
var transformPropOrder = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
];
/**
* A quick lookup for transform props.
*
* `pathRotation` is a transform for routing purposes (skipped from raw
* style application, wired to the transform composite, flags transform
* dirty) but is intentionally NOT in `transformPropOrder` — it is
* composed onto `rotate` at the build sites, not serialized in its own
* slot, and must stay out of the order-array consumers (parse-transform,
* unit-conversion, keys-position).
*/
var transformProps = /*@__PURE__*/ (() => new Set([...transformPropOrder, "pathRotation"]))();
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var isNumOrPxType = (v) => v === number || v === px;
var transformKeys = new Set([
	"x",
	"y",
	"z"
]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
	const removedTransforms = [];
	nonTranslationalTransformKeys.forEach((key) => {
		const value = visualElement.getValue(key);
		if (value !== void 0) {
			removedTransforms.push([key, value.get()]);
			value.set(key.startsWith("scale") ? 1 : 0);
		}
	});
	return removedTransforms;
}
var positionalValues = {
	width: ({ x }, { paddingLeft = "0", paddingRight = "0", boxSizing }) => {
		const width = x.max - x.min;
		return boxSizing === "border-box" ? width : width - parseFloat(paddingLeft) - parseFloat(paddingRight);
	},
	height: ({ y }, { paddingTop = "0", paddingBottom = "0", boxSizing }) => {
		const height = y.max - y.min;
		return boxSizing === "border-box" ? height : height - parseFloat(paddingTop) - parseFloat(paddingBottom);
	},
	top: (_bbox, { top }) => parseFloat(top),
	left: (_bbox, { left }) => parseFloat(left),
	bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
	right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
	x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
	y: (_bbox, { transform }) => parseValueFromTransform(transform, "y")
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */ new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
var isForced = false;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
		const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
		const transformsToRestore = /* @__PURE__ */ new Map();
		/**
		* Write pass
		* If we're measuring elements we want to remove bounding box-changing transforms.
		*/
		elementsToMeasure.forEach((element) => {
			const removedTransforms = removeNonTranslationalTransform(element);
			if (!removedTransforms.length) return;
			transformsToRestore.set(element, removedTransforms);
			element.render();
		});
		resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
		elementsToMeasure.forEach((element) => {
			element.render();
			const restore = transformsToRestore.get(element);
			if (restore) restore.forEach(([key, value]) => {
				element.getValue(key)?.set(value);
			});
		});
		resolversToMeasure.forEach((resolver) => resolver.measureEndState());
		resolversToMeasure.forEach((resolver) => {
			if (resolver.suspendedScrollY !== void 0) window.scrollTo(0, resolver.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = false;
	isScheduled = false;
	toResolve.forEach((resolver) => resolver.complete(isForced));
	toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((resolver) => {
		resolver.readKeyframes();
		if (resolver.needsMeasurement) anyNeedsMeasurement = true;
	});
}
function flushKeyframeResolvers() {
	isForced = true;
	readAllKeyframes();
	measureAllKeyframes();
	isForced = false;
}
var KeyframeResolver = class {
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
		this.state = "pending";
		/**
		* Track whether this resolver is async. If it is, it'll be added to the
		* resolver queue and flushed in the next frame. Resolvers that aren't going
		* to trigger read/write thrashing don't need to be async.
		*/
		this.isAsync = false;
		/**
		* Track whether this resolver needs to perform a measurement
		* to resolve its keyframes.
		*/
		this.needsMeasurement = false;
		this.unresolvedKeyframes = [...unresolvedKeyframes];
		this.onComplete = onComplete;
		this.name = name;
		this.motionValue = motionValue;
		this.element = element;
		this.isAsync = isAsync;
	}
	scheduleResolve() {
		this.state = "scheduled";
		if (this.isAsync) {
			toResolve.add(this);
			if (!isScheduled) {
				isScheduled = true;
				frame.read(readAllKeyframes);
				frame.resolveKeyframes(measureAllKeyframes);
			}
		} else {
			this.readKeyframes();
			this.complete();
		}
	}
	readKeyframes() {
		const { unresolvedKeyframes, name, element, motionValue } = this;
		if (unresolvedKeyframes[0] === null) {
			const currentValue = motionValue?.get();
			const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
			if (currentValue !== void 0) unresolvedKeyframes[0] = currentValue;
			else if (element && name) {
				const valueAsRead = element.readValue(name, finalKeyframe);
				if (valueAsRead !== void 0 && valueAsRead !== null) unresolvedKeyframes[0] = valueAsRead;
			}
			if (unresolvedKeyframes[0] === void 0) unresolvedKeyframes[0] = finalKeyframe;
			if (motionValue && currentValue === void 0) motionValue.set(unresolvedKeyframes[0]);
		}
		fillWildcards(unresolvedKeyframes);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(isForcedComplete = false) {
		this.state = "complete";
		this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
		toResolve.delete(this);
	}
	cancel() {
		if (this.state === "scheduled") {
			toResolve.delete(this);
			this.state = "pending";
		}
	}
	resume() {
		if (this.state === "pending") this.scheduleResolve();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
var isCSSVar = (name) => name.startsWith("--");
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function setStyle(element, name, value) {
	isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/flags.mjs
/**
* Add the ability for test suites to manually set support flags
* to better test more environments.
*/
var supportsFlags = {};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
	const memoized = /* @__PURE__ */ memo(callback);
	return () => supportsFlags[supportsFlag] ?? memoized();
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var supportsLinearEasing = /*@__PURE__*/ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch (e) {
		return false;
	}
	return true;
}, "linearEasing");
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
var supportedWaapiEasing = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ cubicBezierAsString([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ cubicBezierAsString([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ cubicBezierAsString([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ cubicBezierAsString([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mapEasingToNativeEasing(easing, duration) {
	if (!easing) return;
	else if (typeof easing === "function") return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
	else if (/* @__PURE__ */ isBezierDefinition(easing)) return cubicBezierAsString(easing);
	else if (Array.isArray(easing)) return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
	else return supportedWaapiEasing[easing];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeOut", times } = {}, pseudoElement = void 0) {
	const keyframeOptions = { [valueName]: keyframes };
	if (times) keyframeOptions.offset = times;
	const easing = mapEasingToNativeEasing(ease, duration);
	/**
	* If this is an easing array, apply to keyframes, not animation as a whole
	*/
	if (Array.isArray(easing)) keyframeOptions.easing = easing;
	if (statsBuffer.value) activeAnimations.waapi++;
	const options = {
		delay,
		duration,
		easing: !Array.isArray(easing) ? easing : "linear",
		fill: "both",
		iterations: repeat + 1,
		direction: repeatType === "reverse" ? "alternate" : "normal"
	};
	if (pseudoElement) options.pseudoElement = pseudoElement;
	const animation = element.animate(keyframeOptions, options);
	if (statsBuffer.value) animation.finished.finally(() => {
		activeAnimations.waapi--;
	});
	return animation;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
	return typeof type === "function" && "applyToOptions" in type;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function applyGeneratorOptions({ type, ...options }) {
	if (isGenerator(type) && supportsLinearEasing()) return type.applyToOptions(options);
	else {
		options.duration ?? (options.duration = 300);
		options.ease ?? (options.ease = "easeOut");
	}
	return options;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
/**
* NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
*/
var NativeAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.finishedTime = null;
		this.isStopped = false;
		/**
		* Tracks a manually-set start time that takes precedence over WAAPI's
		* dynamic startTime. This is cleared when play() or time setter is called,
		* allowing WAAPI to take over timing.
		*/
		this.manualStartTime = null;
		if (!options) return;
		const { element, name, keyframes, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
		this.isPseudoElement = Boolean(pseudoElement);
		this.allowFlatten = allowFlatten;
		this.options = options;
		invariant(typeof options.type !== "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
		const transition = applyGeneratorOptions(options);
		this.animation = startWaapiAnimation(element, name, keyframes, transition, pseudoElement);
		if (transition.autoplay === false) this.animation.pause();
		this.animation.onfinish = () => {
			this.finishedTime = this.time;
			if (!pseudoElement) {
				const keyframe = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
				if (this.updateMotionValue) this.updateMotionValue(keyframe);
				/**
				* If we can, we want to commit the final style as set by the user,
				* rather than the computed keyframe value supplied by the animation.
				* We always do this, even when a motion value is present, to prevent
				* a visual flash in Firefox where the WAAPI animation's fill is removed
				* during cancel() before the scheduled render can apply the correct value.
				*/
				setStyle(element, name, keyframe);
				this.animation.cancel();
			}
			onComplete?.();
			this.notifyFinished();
		};
	}
	play() {
		if (this.isStopped) return;
		this.manualStartTime = null;
		this.animation.play();
		if (this.state === "finished") this.updateFinished();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch (e) {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = true;
		const { state } = this;
		if (state === "idle" || state === "finished") return;
		if (this.updateMotionValue) this.updateMotionValue();
		else this.commitStyles();
		if (!this.isPseudoElement) this.cancel();
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* In this method, we commit styles back to the DOM before cancelling
	* the animation.
	*
	* This is designed to be overridden by NativeAnimationExtended, which
	* will create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to also correctly calculate velocity for any subsequent animation
	* while deferring the commit until the next animation frame.
	*/
	commitStyles() {
		const element = this.options?.element;
		if (!this.isPseudoElement && element?.isConnected) this.animation.commitStyles?.();
	}
	get duration() {
		const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ millisecondsToSeconds(Number(duration));
	}
	get iterationDuration() {
		const { delay = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(newTime) {
		const wasFinished = this.finishedTime !== null;
		this.manualStartTime = null;
		this.finishedTime = null;
		this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		if (wasFinished) this.animation.pause();
	}
	/**
	* The playback speed of the animation.
	* 1 = normal speed, 2 = double speed, 0.5 = half speed.
	*/
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(newSpeed) {
		if (newSpeed < 0) this.finishedTime = null;
		this.animation.playbackRate = newSpeed;
	}
	get state() {
		return this.finishedTime !== null ? "finished" : this.animation.playState;
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(newStartTime) {
		this.manualStartTime = this.animation.startTime = newStartTime;
	}
	/**
	* Attaches a timeline to the animation, for instance the `ScrollTimeline`.
	*/
	attachTimeline({ timeline, rangeStart, rangeEnd, observe }) {
		if (this.allowFlatten) this.animation.effect?.updateTiming({ easing: "linear" });
		this.animation.onfinish = null;
		if (timeline && supportsScrollTimeline()) {
			this.animation.timeline = timeline;
			if (rangeStart) this.animation.rangeStart = rangeStart;
			if (rangeEnd) this.animation.rangeEnd = rangeEnd;
			return noop;
		} else return observe(this);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
var unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(key) {
	return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
	if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) transition.ease = unsupportedEasingFunctions[transition.ease];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
/**
* 10ms is chosen here as it strikes a balance between smooth
* results (more than one keyframe per frame at 60fps) and
* keyframe quantity.
*/
var sampleDelta = 10;
var NativeAnimationExtended = class extends NativeAnimation {
	constructor(options) {
		/**
		* The base NativeAnimation function only supports a subset
		* of Motion easings, and WAAPI also only supports some
		* easing functions via string/cubic-bezier definitions.
		*
		* This function replaces those unsupported easing functions
		* with a JS easing function. This will later get compiled
		* to a linear() easing function.
		*/
		replaceStringEasing(options);
		/**
		* Ensure we replace the transition type with a generator function
		* before passing to WAAPI.
		*
		* TODO: Does this have a better home? It could be shared with
		* JSAnimation.
		*/
		replaceTransitionType(options);
		super(options);
		/**
		* Only set startTime when the animation should autoplay.
		* Setting startTime on a paused WAAPI animation unpauses it
		* (per the WAAPI spec), which breaks autoplay: false.
		*/
		if (options.startTime !== void 0 && options.autoplay !== false) this.startTime = options.startTime;
		this.options = options;
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* Rather than read committed styles back out of the DOM, we can
	* create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to calculate velocity for any subsequent animation.
	*/
	updateMotionValue(value) {
		const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
		if (!motionValue) return;
		if (value !== void 0) {
			motionValue.set(value);
			return;
		}
		const sampleAnimation = new JSAnimation({
			...options,
			autoplay: false
		});
		/**
		* Use wall-clock elapsed time for sampling.
		* Under CPU load, WAAPI's currentTime may not reflect actual
		* elapsed time, causing incorrect sampling and visual jumps.
		*/
		const sampleTime = Math.max(sampleDelta, time.now() - this.startTime);
		const delta = clamp(0, sampleDelta, sampleTime - sampleDelta);
		const current = sampleAnimation.sample(sampleTime).value;
		/**
		* Write the estimated value to inline style so it persists
		* after cancel(), covering the async gap before the next
		* animation starts.
		*/
		const { name } = this.options;
		if (element && name) setStyle(element, name, current);
		motionValue.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, current, delta);
		sampleAnimation.stop();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
/**
* Check if a value is animatable. Examples:
*
* ✅: 100, "100px", "#fff"
* ❌: "block", "url(2.jpg)"
* @param value
*
* @internal
*/
var isAnimatable = (value, name) => {
	if (name === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) return true;
	return false;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function hasKeyframesChanged(keyframes) {
	const current = keyframes[0];
	if (keyframes.length === 1) return true;
	for (let i = 0; i < keyframes.length; i++) if (keyframes[i] !== current) return true;
}
function canAnimate(keyframes, name, type, velocity) {
	/**
	* Check if we're able to animate between the start and end keyframes,
	* and throw a warning if we're attempting to animate between one that's
	* animatable and another that isn't.
	*/
	const originKeyframe = keyframes[0];
	if (originKeyframe === null) return false;
	/**
	* These aren't traditionally animatable but we do support them.
	* In future we could look into making this more generic or replacing
	* this function with mix() === mixImmediate
	*/
	if (name === "display" || name === "visibility") return true;
	const targetKeyframe = keyframes[keyframes.length - 1];
	const isOriginAnimatable = isAnimatable(originKeyframe, name);
	const isTargetAnimatable = isAnimatable(targetKeyframe, name);
	warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`, "value-not-animatable");
	if (!isOriginAnimatable || !isTargetAnimatable) return false;
	return hasKeyframesChanged(keyframes) || (type === "spring" || isGenerator(type)) && velocity;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function makeAnimationInstant(options) {
	options.duration = 0;
	options.type = "keyframes";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
/**
* A list of values that can be hardware-accelerated.
*/
var acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]);
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
var browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes) {
	for (let i = 0; i < keyframes.length; i++) if (typeof keyframes[i] === "string" && browserColorFunctions.test(keyframes[i])) return true;
	return false;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var colorProperties = new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]);
var supportsWaapi = /*@__PURE__*/ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(options) {
	const { motionValue, name, repeatDelay, repeatType, damping, type, keyframes } = options;
	/**
	* We use this check instead of isHTMLElement() because we explicitly
	* **don't** want elements in different timing contexts (i.e. popups)
	* to be accelerated, as it's not possible to sync these animations
	* properly with those driven from the main window frameloop.
	*/
	if (!(motionValue?.owner?.current instanceof HTMLElement)) return false;
	const { onUpdate, transformTemplate } = motionValue.owner.getProps();
	return supportsWaapi() && name && (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes)) && (name !== "transform" || !transformTemplate) && !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
/**
* Maximum time allowed between an animation being created and it being
* resolved for us to use the latter as the start time.
*
* This is to ensure that while we prefer to "start" an animation as soon
* as it's triggered, we also want to avoid a visual jump if there's a big delay
* between these two moments.
*/
var MAX_RESOLVE_DELAY = 40;
var AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes, name, motionValue, element, ...options }) {
		super();
		/**
		* Bound to support return animation.stop pattern
		*/
		this.stop = () => {
			if (this._animation) {
				this._animation.stop();
				this.stopTimeline?.();
			}
			this.keyframeResolver?.cancel();
		};
		this.createdAt = time.now();
		const optionsWithDefaults = {
			autoplay,
			delay,
			type,
			repeat,
			repeatDelay,
			repeatType,
			name,
			motionValue,
			element,
			...options
		};
		const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
		this.keyframeResolver = new KeyframeResolver$1(keyframes, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue, element);
		this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(keyframes, finalKeyframe, options, sync) {
		this.keyframeResolver = void 0;
		const { name, type, velocity, delay, isHandoff, onUpdate } = options;
		this.resolvedAt = time.now();
		/**
		* If we can't animate this value with the resolved keyframes
		* then we should complete it immediately.
		*/
		let canAnimateValue = true;
		if (!canAnimate(keyframes, name, type, velocity)) {
			canAnimateValue = false;
			if (MotionGlobalConfig.instantAnimations || !delay) onUpdate?.(getFinalKeyframe(keyframes, options, finalKeyframe));
			keyframes[0] = keyframes[keyframes.length - 1];
			makeAnimationInstant(options);
			options.repeat = 0;
		}
		const resolvedOptions = {
			startTime: sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe,
			...options,
			keyframes
		};
		/**
		* Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
		* WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
		* optimised animation.
		*
		* Also skip WAAPI when keyframes aren't animatable, as the resolved
		* values may not be valid CSS and would trigger browser warnings.
		*/
		const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(resolvedOptions);
		const element = resolvedOptions.motionValue?.owner?.current;
		let animation;
		if (useWaapi) try {
			animation = new NativeAnimationExtended({
				...resolvedOptions,
				element
			});
		} catch {
			animation = new JSAnimation(resolvedOptions);
		}
		else animation = new JSAnimation(resolvedOptions);
		animation.finished.then(() => {
			this.notifyFinished();
		}).catch(noop);
		if (this.pendingTimeline) {
			this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
			this.pendingTimeline = void 0;
		}
		this._animation = animation;
	}
	get finished() {
		if (!this._animation) return this._finished;
		else return this.animation.finished;
	}
	then(onResolve, _onReject) {
		return this.finished.finally(onResolve).then(() => {});
	}
	get animation() {
		if (!this._animation) {
			this.keyframeResolver?.resume();
			flushKeyframeResolvers();
		}
		return this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(newTime) {
		this.animation.time = newTime;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(newSpeed) {
		this.animation.speed = newSpeed;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(timeline) {
		if (this._animation) this.stopTimeline = this.animation.attachTimeline(timeline);
		else this.pendingTimeline = timeline;
		return () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		if (this._animation) this.animation.cancel();
		this.keyframeResolver?.cancel();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
	const index = Array.from(children).sort((a, b) => a.sortNodePosition(b)).indexOf(child);
	const numChildren = children.size;
	const maxStaggerDuration = (numChildren - 1) * staggerChildren;
	return typeof delayChildren === "function" ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/index.mjs
/**
* Maximum time between the value of two frames, beyond which we
* assume the velocity has since been 0.
*/
var MAX_VELOCITY_DELTA = 30;
var isFloat = (value) => {
	return !isNaN(parseFloat(value));
};
var collectMotionValues = { current: void 0 };
/**
* `MotionValue` is used to track the state and velocity of motion values.
*
* @public
*/
var MotionValue = class {
	/**
	* @param init - The initiating value
	* @param config - Optional configuration options
	*
	* -  `transformer`: A function to transform incoming values with.
	*/
	constructor(init, options = {}) {
		/**
		* Tracks whether this value can output a velocity. Currently this is only true
		* if the value is numerical, but we might be able to widen the scope here and support
		* other value types.
		*
		* @internal
		*/
		this.canTrackVelocity = null;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		this.updateAndNotify = (v) => {
			const currentTime = time.now();
			/**
			* If we're updating the value during another frame or eventloop
			* than the previous frame, then the we set the previous frame value
			* to current.
			*/
			if (this.updatedAt !== currentTime) this.setPrevFrameValue();
			this.prev = this.current;
			this.setCurrent(v);
			if (this.current !== this.prev) {
				this.events.change?.notify(this.current);
				if (this.dependents) for (const dependent of this.dependents) dependent.dirty();
			}
		};
		this.hasAnimated = false;
		this.setCurrent(init);
		this.owner = options.owner;
	}
	setCurrent(current) {
		this.current = current;
		this.updatedAt = time.now();
		if (this.canTrackVelocity === null && current !== void 0) this.canTrackVelocity = isFloat(this.current);
	}
	setPrevFrameValue(prevFrameValue = this.current) {
		this.prevFrameValue = prevFrameValue;
		this.prevUpdatedAt = this.updatedAt;
	}
	/**
	* Adds a function that will be notified when the `MotionValue` is updated.
	*
	* It returns a function that, when called, will cancel the subscription.
	*
	* When calling `onChange` inside a React component, it should be wrapped with the
	* `useEffect` hook. As it returns an unsubscribe function, this should be returned
	* from the `useEffect` function to ensure you don't add duplicate subscribers..
	*
	* ```jsx
	* export const MyComponent = () => {
	*   const x = useMotionValue(0)
	*   const y = useMotionValue(0)
	*   const opacity = useMotionValue(1)
	*
	*   useEffect(() => {
	*     function updateOpacity() {
	*       const maxXY = Math.max(x.get(), y.get())
	*       const newOpacity = transform(maxXY, [0, 100], [1, 0])
	*       opacity.set(newOpacity)
	*     }
	*
	*     const unsubscribeX = x.on("change", updateOpacity)
	*     const unsubscribeY = y.on("change", updateOpacity)
	*
	*     return () => {
	*       unsubscribeX()
	*       unsubscribeY()
	*     }
	*   }, [])
	*
	*   return <motion.div style={{ x }} />
	* }
	* ```
	*
	* @param subscriber - A function that receives the latest value.
	* @returns A function that, when called, will cancel this subscription.
	*
	* @deprecated
	*/
	onChange(subscription) {
		if (process.env.NODE_ENV !== "production") warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
		return this.on("change", subscription);
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		const unsubscribe = this.events[eventName].add(callback);
		if (eventName === "change") return () => {
			unsubscribe();
			/**
			* If we have no more change listeners by the start
			* of the next frame, stop active animations.
			*/
			frame.read(() => {
				if (!this.events.change.getSize()) this.stop();
			});
		};
		return unsubscribe;
	}
	clearListeners() {
		for (const eventManagers in this.events) this.events[eventManagers].clear();
	}
	/**
	* Attaches a passive effect to the `MotionValue`.
	*/
	attach(passiveEffect, stopPassiveEffect) {
		this.passiveEffect = passiveEffect;
		this.stopPassiveEffect = stopPassiveEffect;
	}
	/**
	* Sets the state of the `MotionValue`.
	*
	* @remarks
	*
	* ```jsx
	* const x = useMotionValue(0)
	* x.set(10)
	* ```
	*
	* @param latest - Latest value to set.
	* @param render - Whether to notify render subscribers. Defaults to `true`
	*
	* @public
	*/
	set(v) {
		if (!this.passiveEffect) this.updateAndNotify(v);
		else this.passiveEffect(v, this.updateAndNotify);
	}
	setWithVelocity(prev, current, delta) {
		this.set(current);
		this.prev = void 0;
		this.prevFrameValue = prev;
		this.prevUpdatedAt = this.updatedAt - delta;
	}
	/**
	* Set the state of the `MotionValue`, stopping any active animations,
	* effects, and resets velocity to `0`.
	*/
	jump(v, endAnimation = true) {
		this.updateAndNotify(v);
		this.prev = v;
		this.prevUpdatedAt = this.prevFrameValue = void 0;
		endAnimation && this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(dependent) {
		if (!this.dependents) this.dependents = /* @__PURE__ */ new Set();
		this.dependents.add(dependent);
	}
	removeDependent(dependent) {
		if (this.dependents) this.dependents.delete(dependent);
	}
	/**
	* Returns the latest state of `MotionValue`
	*
	* @returns - The latest state of `MotionValue`
	*
	* @public
	*/
	get() {
		if (collectMotionValues.current) collectMotionValues.current.push(this);
		return this.current;
	}
	/**
	* @public
	*/
	getPrevious() {
		return this.prev;
	}
	/**
	* Returns the latest velocity of `MotionValue`
	*
	* @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
	*
	* @public
	*/
	getVelocity() {
		const currentTime = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return /* @__PURE__ */ velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
	}
	/**
	* Registers a new animation to control this `MotionValue`. Only one
	* animation can drive a `MotionValue` at one time.
	*
	* ```jsx
	* value.start()
	* ```
	*
	* @param animation - A function that starts the provided animation
	*/
	start(startAnimation) {
		this.stop();
		return new Promise((resolve) => {
			this.hasAnimated = true;
			this.animation = startAnimation(resolve);
			if (this.events.animationStart) this.events.animationStart.notify();
		}).then(() => {
			if (this.events.animationComplete) this.events.animationComplete.notify();
			this.clearAnimation();
		});
	}
	/**
	* Stop the currently active animation.
	*
	* @public
	*/
	stop() {
		if (this.animation) {
			this.animation.stop();
			if (this.events.animationCancel) this.events.animationCancel.notify();
		}
		this.clearAnimation();
	}
	/**
	* Returns `true` if this value is currently animating.
	*
	* @public
	*/
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	/**
	* Destroy and clean up subscribers to this `MotionValue`.
	*
	* The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
	* handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
	* created a `MotionValue` via the `motionValue` function.
	*
	* @public
	*/
	destroy() {
		this.dependents?.clear();
		this.events.destroy?.notify();
		this.clearListeners();
		this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
};
function motionValue(init, options) {
	return new MotionValue(init, options);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
/**
* If `transition` has `inherit: true`, shallow-merge it with
* `parentTransition` (child keys win) and strip the `inherit` key.
* Otherwise return `transition` unchanged.
*/
function resolveTransition(transition, parentTransition) {
	if (transition?.inherit && parentTransition) {
		const { inherit: _, ...rest } = transition;
		return {
			...parentTransition,
			...rest
		};
	}
	return transition;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
	const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
	if (valueTransition !== transition) return resolveTransition(valueTransition, transition);
	return valueTransition;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
	type: "spring",
	stiffness: 550,
	damping: target === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
});
var keyframesTransition = {
	type: "keyframes",
	duration: .8
};
/**
* Default easing curve is a slightly shallower version of
* the default browser easing curve.
*/
var ease = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
};
var getDefaultTransition = (valueKey, { keyframes }) => {
	if (keyframes.length > 2) return keyframesTransition;
	else if (transformProps.has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
	return ease;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var orchestrationKeys = new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
/**
* Decide whether a transition is defined on a given Transition.
* This filters out orchestration options and returns true
* if any options are left.
*/
function isTransitionDefined(transition) {
	for (const key in transition) if (!orchestrationKeys.has(key)) return true;
	return false;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
	const valueTransition = getValueTransition(transition, name) || {};
	/**
	* Most transition values are currently completely overwritten by value-specific
	* transitions. In the future it'd be nicer to blend these transitions. But for now
	* delay actually does inherit from the root transition if not value-specific.
	*/
	const delay = valueTransition.delay || transition.delay || 0;
	/**
	* Elapsed isn't a public transition option but can be passed through from
	* optimized appear effects in milliseconds.
	*/
	let { elapsed = 0 } = transition;
	elapsed = elapsed - /* @__PURE__ */ secondsToMilliseconds(delay);
	const options = {
		keyframes: Array.isArray(target) ? target : [null, target],
		ease: "easeOut",
		velocity: value.getVelocity(),
		...valueTransition,
		delay: -elapsed,
		onUpdate: (v) => {
			value.set(v);
			valueTransition.onUpdate && valueTransition.onUpdate(v);
		},
		onComplete: () => {
			onComplete();
			valueTransition.onComplete && valueTransition.onComplete();
		},
		name,
		motionValue: value,
		element: isHandoff ? void 0 : element
	};
	/**
	* If there's no transition defined for this value, we can generate
	* unique transition settings for this value.
	*/
	if (!isTransitionDefined(valueTransition)) Object.assign(options, getDefaultTransition(name, options));
	/**
	* Both WAAPI and our internal animation functions use durations
	* as defined by milliseconds, while our external API defines them
	* as seconds.
	*/
	options.duration && (options.duration = /* @__PURE__ */ secondsToMilliseconds(options.duration));
	options.repeatDelay && (options.repeatDelay = /* @__PURE__ */ secondsToMilliseconds(options.repeatDelay));
	/**
	* Support deprecated way to set initial value. Prefer keyframe syntax.
	*/
	if (options.from !== void 0) options.keyframes[0] = options.from;
	let shouldSkip = false;
	if (options.type === false || options.duration === 0 && !options.repeatDelay) {
		makeAnimationInstant(options);
		if (options.delay === 0) shouldSkip = true;
	}
	if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations || valueTransition.skipAnimations) {
		shouldSkip = true;
		makeAnimationInstant(options);
		options.delay = 0;
	}
	/**
	* If the transition type or easing has been explicitly set by the user
	* then we don't want to allow flattening the animation.
	*/
	options.allowFlatten = !valueTransition.type && !valueTransition.ease;
	/**
	* If we can or must skip creating the animation, and apply only
	* the final keyframe, do so. We also check once keyframes are resolved but
	* this early check prevents the need to create an animation at all.
	*/
	if (shouldSkip && !isHandoff && value.get() !== void 0) {
		const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
		if (finalKeyframe !== void 0) {
			frame.update(() => {
				options.onUpdate(finalKeyframe);
				options.onComplete();
			});
			return;
		}
	}
	return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
/**
* Parse Framer's special CSS variable format into a CSS token and a fallback.
*
* ```
* `var(--foo, #fff)` => [`--foo`, '#fff']
* ```
*
* @param current
*/
var splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
	const match = splitCSSVariableRegex.exec(current);
	if (!match) return [,];
	const [, token1, token2, fallback] = match;
	return [`--${token1 ?? token2}`, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
	invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	const [token, fallback] = parseCSSVariable(current);
	if (!token) return;
	const resolved = window.getComputedStyle(element).getPropertyValue(token);
	if (resolved) {
		const trimmed = resolved.trim();
		return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
	}
	return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
	const state = [{}, {}];
	visualElement?.values.forEach((value, key) => {
		state[0][key] = value.get();
		state[1][key] = value.getVelocity();
	});
	return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
	/**
	* If the variant definition is a function, resolve.
	*/
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	/**
	* If the variant definition is a variant label, or
	* the function returned a variant label, resolve.
	*/
	if (typeof definition === "string") definition = props.variants && props.variants[definition];
	/**
	* At this point we've resolved both functions and variant labels,
	* but the resolved variant label might itself have been a function.
	* If so, resolve. This can only have returned a valid target object.
	*/
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	return definition;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
	const props = visualElement.getProps();
	return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var positionalKeys = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]);
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
	return Array.isArray(v);
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/setters.mjs
/**
* Set VisualElement's MotionValue, creating a new MotionValue for it if
* it doesn't exist.
*/
function setMotionValue(visualElement, key, value) {
	if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
	else visualElement.addValue(key, motionValue(value));
}
function resolveFinalValueInKeyframes(v) {
	return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
	let { transitionEnd = {}, transition = {}, ...target } = resolveVariant(visualElement, definition) || {};
	target = {
		...target,
		...transitionEnd
	};
	for (const key in target) setMotionValue(visualElement, key, resolveFinalValueInKeyframes(target[key]));
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/is.mjs
function isWillChangeMotionValue(value) {
	return Boolean(isMotionValue(value) && value.add);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
	const willChange = visualElement.getValue("willChange");
	/**
	* It could be that a user has set willChange to a regular MotionValue,
	* in which case we can't add the value to it.
	*/
	if (isWillChangeMotionValue(willChange)) return willChange.add(key);
	else if (!willChange && MotionGlobalConfig.WillChange) {
		const newWillChange = new MotionGlobalConfig.WillChange("auto");
		visualElement.addValue("willChange", newWillChange);
		newWillChange.add(key);
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function camelToDash(str) {
	return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}
var optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId");
//#endregion
//#region node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
	return visualElement.props[optimizedAppearDataAttribute];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
/**
* Decide whether we should block this animation. Previously, we achieved this
* just by checking whether the key was listed in protectedKeys, but this
* posed problems if an animation was triggered by afterChildren and protectedKeys
* had been set to true in the meantime.
*/
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
	const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
	needsAnimating[key] = false;
	return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
	let { transition, transitionEnd, ...target } = targetAndTransition;
	const defaultTransition = visualElement.getDefaultTransition();
	transition = transition ? resolveTransition(transition, defaultTransition) : defaultTransition;
	const reduceMotion = transition?.reduceMotion;
	const skipAnimations = transition?.skipAnimations;
	if (transitionOverride) transition = transitionOverride;
	const animations = [];
	const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
	const path = transition?.path;
	if (path) path.animateVisualElement(visualElement, target, transition, delay, animations);
	for (const key in target) {
		const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
		const valueTarget = target[key];
		if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
		const valueTransition = {
			delay,
			...getValueTransition(transition || {}, key)
		};
		if (skipAnimations) valueTransition.skipAnimations = true;
		/**
		* If the value is already at the defined target, skip the animation.
		* We still re-assert the value via frame.update to take precedence
		* over any stale transitionEnd callbacks from previous animations.
		*/
		const currentValue = value.get();
		if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
			frame.update(() => value.set(valueTarget));
			continue;
		}
		/**
		* If this is the first time a value is being animated, check
		* to see if we're handling off from an existing animation.
		*/
		let isHandoff = false;
		if (window.MotionHandoffAnimation) {
			const appearId = getOptimisedAppearId(visualElement);
			if (appearId) {
				const startTime = window.MotionHandoffAnimation(appearId, key, frame);
				if (startTime !== null) {
					valueTransition.startTime = startTime;
					isHandoff = true;
				}
			}
		}
		addValueToWillChange(visualElement, key);
		const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
		value.start(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
		const animation = value.animation;
		if (animation) animations.push(animation);
	}
	if (transitionEnd) {
		const applyTransitionEnd = () => frame.update(() => {
			transitionEnd && setTarget(visualElement, transitionEnd);
		});
		if (animations.length) Promise.all(animations).then(applyTransitionEnd);
		else applyTransitionEnd();
	}
	return animations;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
	const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? visualElement.presenceContext?.custom : void 0);
	let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
	if (options.transitionOverride) transition = options.transitionOverride;
	/**
	* If we have a variant, create a callback that runs it as an animation.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
	/**
	* If we have children, create a callback that runs all their animations.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
		const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
		return animateChildren(visualElement, variant, forwardDelay, delayChildren, staggerChildren, staggerDirection, options);
	} : () => Promise.resolve();
	/**
	* If the transition explicitly defines a "when" option, we need to resolve either
	* this animation or all children animations before playing the other.
	*/
	const { when } = transition;
	if (when) {
		const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
		return first().then(() => last());
	} else return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
}
function animateChildren(visualElement, variant, delay = 0, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
	const animations = [];
	for (const child of visualElement.variantChildren) {
		child.notify("AnimationStart", variant);
		animations.push(animateVariant(child, variant, {
			...options,
			delay: delay + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(visualElement.variantChildren, child, delayChildren, staggerChildren, staggerDirection)
		}).then(() => child.notify("AnimationComplete", variant)));
	}
	return Promise.all(animations);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
	visualElement.notify("AnimationStart", definition);
	let animation;
	if (Array.isArray(definition)) {
		const animations = definition.map((variant) => animateVariant(visualElement, variant, options));
		animation = Promise.all(animations);
	} else if (typeof definition === "string") animation = animateVariant(visualElement, definition, options);
	else {
		const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
		animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
	}
	return animation.then(() => {
		visualElement.notify("AnimationComplete", definition);
	});
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/auto.mjs
/**
* ValueType for "auto"
*/
var auto = {
	test: (v) => v === "auto",
	parse: (v) => v
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/test.mjs
/**
* Tests a provided value against a ValueType
*/
var testValueType = (v) => (type) => type.test(v);
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/dimensions.mjs
/**
* A list of value types commonly used for dimensions
*/
var dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
];
/**
* Tests a dimensional value against the list of dimension ValueTypes
*/
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function isNone(value) {
	if (typeof value === "number") return value === 0;
	else if (value !== null) return value === "none" || value === "0" || isZeroValueString(value);
	else return true;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
/**
* Properties that should default to 1 or 100%
*/
var maxDefaults = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(v) {
	const [name, value] = v.slice(0, -1).split("(");
	if (name === "drop-shadow") return v;
	const [number] = value.match(floatRegex) || [];
	if (!number) return v;
	const unit = value.replace(number, "");
	let defaultValue = maxDefaults.has(name) ? 1 : 0;
	if (number !== value) defaultValue *= 100;
	return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
	...complex,
	getAnimatableNone: (v) => {
		const functions = v.match(functionRegex);
		return functions ? functions.map(applyDefaultFilter).join(" ") : v;
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/mask.mjs
var mask = {
	...complex,
	getAnimatableNone: (v) => {
		const parsed = complex.parse(v);
		return complex.createTransformer(v)(parsed.map((v) => typeof v === "number" ? 0 : typeof v === "object" ? {
			...v,
			alpha: 1
		} : v));
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/int.mjs
var int = {
	...number,
	transform: Math.round
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/maps/number.mjs
var numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	inset: px,
	insetBlock: px,
	insetBlockStart: px,
	insetBlockEnd: px,
	insetInline: px,
	insetInlineStart: px,
	insetInlineEnd: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	paddingBlock: px,
	paddingBlockStart: px,
	paddingBlockEnd: px,
	paddingInline: px,
	paddingInlineStart: px,
	paddingInlineEnd: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	marginBlock: px,
	marginBlockStart: px,
	marginBlockEnd: px,
	marginInline: px,
	marginInlineStart: px,
	marginInlineEnd: px,
	fontSize: px,
	backgroundPositionX: px,
	backgroundPositionY: px,
	rotate: degrees,
	/**
	* Internal channel for `transition.path` orientToPath. Composed onto
	* `rotate` at the transform-build sites so the user's `rotate` is
	* never read or overwritten. Not part of `transformPropOrder`.
	*/
	pathRotation: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
/**
* A map of default value types for common values
*/
var defaultValueTypes = {
	...numberValueTypes,
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter,
	mask,
	WebkitMask: mask
};
/**
* Gets the default ValueType for the provided value key
*/
var getDefaultValueType = (key) => defaultValueTypes[key];
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
var customTypes = /*@__PURE__*/ new Set([filter, mask]);
function getAnimatableNone(key, value) {
	let defaultValueType = getDefaultValueType(key);
	if (!customTypes.has(defaultValueType)) defaultValueType = complex;
	return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
/**
* If we encounter keyframes like "none" or "0" and we also have keyframes like
* "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
* the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
* zero equivalents, i.e. "#fff0" or "0px 0px".
*/
var invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
	let i = 0;
	let animatableTemplate = void 0;
	while (i < unresolvedKeyframes.length && !animatableTemplate) {
		const keyframe = unresolvedKeyframes[i];
		if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) animatableTemplate = unresolvedKeyframes[i];
		i++;
	}
	if (animatableTemplate && name) for (const noneIndex of noneKeyframeIndexes) unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
		super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
	}
	readKeyframes() {
		const { unresolvedKeyframes, element, name } = this;
		if (!element || !element.current) return;
		super.readKeyframes();
		/**
		* If any keyframe is a CSS variable, we need to find its value by sampling the element
		*/
		for (let i = 0; i < unresolvedKeyframes.length; i++) {
			let keyframe = unresolvedKeyframes[i];
			if (typeof keyframe === "string") {
				keyframe = keyframe.trim();
				if (isCSSVariableToken(keyframe)) {
					const resolved = getVariableValue(keyframe, element.current);
					if (resolved !== void 0) unresolvedKeyframes[i] = resolved;
					if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
				}
			}
		}
		/**
		* Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
		* This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
		* have a far bigger performance impact.
		*/
		this.resolveNoneKeyframes();
		/**
		* Check to see if unit type has changed. If so schedule jobs that will
		* temporarily set styles to the destination keyframes.
		* Skip if we have more than two keyframes or this isn't a positional value.
		* TODO: We can throw if there are multiple keyframes and the value type changes.
		*/
		if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) return;
		const [origin, target] = unresolvedKeyframes;
		const originType = findDimensionValueType(origin);
		const targetType = findDimensionValueType(target);
		if (containsCSSVariable(origin) !== containsCSSVariable(target) && positionalValues[name]) {
			this.needsMeasurement = true;
			return;
		}
		/**
		* Either we don't recognise these value types or we can animate between them.
		*/
		if (originType === targetType) return;
		/**
		* If both values are numbers or pixels, we can animate between them by
		* converting them to numbers.
		*/
		if (isNumOrPxType(originType) && isNumOrPxType(targetType)) for (let i = 0; i < unresolvedKeyframes.length; i++) {
			const value = unresolvedKeyframes[i];
			if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
		}
		else if (positionalValues[name])
 /**
		* Else, the only way to resolve this is by measuring the element.
		*/
		this.needsMeasurement = true;
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes, name } = this;
		const noneKeyframeIndexes = [];
		for (let i = 0; i < unresolvedKeyframes.length; i++) if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
		if (noneKeyframeIndexes.length) makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
	}
	measureInitialState() {
		const { element, unresolvedKeyframes, name } = this;
		if (!element || !element.current) return;
		if (name === "height") this.suspendedScrollY = window.pageYOffset;
		this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
		unresolvedKeyframes[0] = this.measuredOrigin;
		const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
		if (measureKeyframe !== void 0) element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
	}
	measureEndState() {
		const { element, name, unresolvedKeyframes } = this;
		if (!element || !element.current) return;
		const value = element.getValue(name);
		value && value.jump(this.measuredOrigin, false);
		const finalKeyframeIndex = unresolvedKeyframes.length - 1;
		const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
		unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
		if (finalKeyframe !== null && this.finalKeyframe === void 0) this.finalKeyframe = finalKeyframe;
		if (this.removedTransforms?.length) this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
			element.getValue(unsetTransformName).set(unsetTransformValue);
		});
		this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
	if (elementOrSelector == null) return [];
	if (elementOrSelector instanceof EventTarget) return [elementOrSelector];
	else if (typeof elementOrSelector === "string") {
		let root = document;
		if (scope) root = scope.current;
		const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
		return elements ? Array.from(elements) : [];
	}
	return Array.from(elementOrSelector).filter((element) => element != null);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
/**
* Provided a value and a ValueType, returns the value as that value type.
*/
var getValueAsType = (value, type) => {
	return type && typeof value === "number" ? type.transform(value) : value;
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-html-element.mjs
/**
* Checks if an element is an HTML element in a way
* that works across iframes
*/
function isHTMLElement(element) {
	return isObject(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var isDragging = {
	x: false,
	y: false
};
function isDragActive() {
	return isDragging.x || isDragging.y;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function setDragLock(axis) {
	if (axis === "x" || axis === "y") if (isDragging[axis]) return null;
	else {
		isDragging[axis] = true;
		return () => {
			isDragging[axis] = false;
		};
	}
	else if (isDragging.x || isDragging.y) return null;
	else {
		isDragging.x = isDragging.y = true;
		return () => {
			isDragging.x = isDragging.y = false;
		};
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function setupGesture(elementOrSelector, options) {
	const elements = resolveElements(elementOrSelector);
	const gestureAbortController = new AbortController();
	const eventOptions = {
		passive: true,
		...options,
		signal: gestureAbortController.signal
	};
	const cancel = () => gestureAbortController.abort();
	return [
		elements,
		eventOptions,
		cancel
	];
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/hover.mjs
function isValidHover(event) {
	return !(event.pointerType === "touch" || isDragActive());
}
/**
* Create a hover gesture. hover() is different to .addEventListener("pointerenter")
* in that it has an easier syntax, filters out polyfilled touch events, interoperates
* with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
*
* @public
*/
function hover(elementOrSelector, onHoverStart, options = {}) {
	const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
	elements.forEach((element) => {
		let isPressed = false;
		let deferredHoverEnd = false;
		let hoverEndCallback;
		const removePointerLeave = () => {
			element.removeEventListener("pointerleave", onPointerLeave);
		};
		const endHover = (event) => {
			if (hoverEndCallback) {
				hoverEndCallback(event);
				hoverEndCallback = void 0;
			}
			removePointerLeave();
		};
		const onPointerUp = (event) => {
			isPressed = false;
			window.removeEventListener("pointerup", onPointerUp);
			window.removeEventListener("pointercancel", onPointerUp);
			if (deferredHoverEnd) {
				deferredHoverEnd = false;
				endHover(event);
			}
		};
		const onPointerDown = () => {
			isPressed = true;
			window.addEventListener("pointerup", onPointerUp, eventOptions);
			window.addEventListener("pointercancel", onPointerUp, eventOptions);
		};
		const onPointerLeave = (leaveEvent) => {
			if (leaveEvent.pointerType === "touch") return;
			if (isPressed) {
				deferredHoverEnd = true;
				return;
			}
			endHover(leaveEvent);
		};
		const onPointerEnter = (enterEvent) => {
			if (!isValidHover(enterEvent)) return;
			deferredHoverEnd = false;
			const onHoverEnd = onHoverStart(element, enterEvent);
			if (typeof onHoverEnd !== "function") return;
			hoverEndCallback = onHoverEnd;
			element.addEventListener("pointerleave", onPointerLeave, eventOptions);
		};
		element.addEventListener("pointerenter", onPointerEnter, eventOptions);
		element.addEventListener("pointerdown", onPointerDown, eventOptions);
	});
	return cancel;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
/**
* Recursively traverse up the tree to check whether the provided child node
* is the parent or a descendant of it.
*
* @param parent - Element to find
* @param child - Element to test against parent
*/
var isNodeOrChild = (parent, child) => {
	if (!child) return false;
	else if (parent === child) return true;
	else return isNodeOrChild(parent, child.parentElement);
};
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
	if (event.pointerType === "mouse") return typeof event.button !== "number" || event.button <= 0;
	else
 /**
	* isPrimary is true for all mice buttons, whereas every touch point
	* is regarded as its own input. So subsequent concurrent touch points
	* will be false.
	*
	* Specifically match against false here as incomplete versions of
	* PointerEvents in very old browser might have it set as undefined.
	*/
	return event.isPrimary !== false;
};
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
var keyboardAccessibleElements = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
/**
* Checks if an element is natively keyboard accessible (focusable).
* Used by the press gesture to determine if we need to add tabIndex.
*/
function isElementKeyboardAccessible(element) {
	return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
}
var textInputElements = new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
/**
* Checks if an element has text selection or direct interaction behavior
* that should block drag gestures from starting.
*
* This specifically targets form controls where the user might want to select
* text or interact with the control (e.g., sliders, dropdowns).
*
* Buttons and links are NOT included because they don't have click-and-move
* actions of their own - they only respond to click events, so dragging
* should still work when initiated from these elements.
*/
function isElementTextInput(element) {
	return textInputElements.has(element.tagName) || element.isContentEditable === true;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var isPressing = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
/**
* Filter out events that are not "Enter" keys.
*/
function filterEvents(callback) {
	return (event) => {
		if (event.key !== "Enter") return;
		callback(event);
	};
}
function firePointerEvent(target, type) {
	target.dispatchEvent(new PointerEvent("pointer" + type, {
		isPrimary: true,
		bubbles: true
	}));
}
var enableKeyboardPress = (focusEvent, eventOptions) => {
	const element = focusEvent.currentTarget;
	if (!element) return;
	const handleKeydown = filterEvents(() => {
		if (isPressing.has(element)) return;
		firePointerEvent(element, "down");
		const handleKeyup = filterEvents(() => {
			firePointerEvent(element, "up");
		});
		const handleBlur = () => firePointerEvent(element, "cancel");
		element.addEventListener("keyup", handleKeyup, eventOptions);
		element.addEventListener("blur", handleBlur, eventOptions);
	});
	element.addEventListener("keydown", handleKeydown, eventOptions);
	/**
	* Add an event listener that fires on blur to remove the keydown events.
	*/
	element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/index.mjs
/**
* Filter out events that are not primary pointer events, or are triggering
* while a Motion gesture is active.
*/
function isValidPressEvent(event) {
	return isPrimaryPointer(event) && !isDragActive();
}
var claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
/**
* Create a press gesture.
*
* Press is different to `"pointerdown"`, `"pointerup"` in that it
* automatically filters out secondary pointer events like right
* click and multitouch.
*
* It also adds accessibility support for keyboards, where
* an element with a press gesture will receive focus and
*  trigger on Enter `"keydown"` and `"keyup"` events.
*
* This is different to a browser's `"click"` event, which does
* respond to keyboards but only for the `"click"` itself, rather
* than the press start and end/cancel. The element also needs
* to be focusable for this to work, whereas a press gesture will
* make an element focusable by default.
*
* @public
*/
function press(targetOrSelector, onPressStart, options = {}) {
	const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
	const startPress = (startEvent) => {
		const target = startEvent.currentTarget;
		if (!isValidPressEvent(startEvent)) return;
		if (claimedPointerDownEvents.has(startEvent)) return;
		isPressing.add(target);
		if (options.stopPropagation) claimedPointerDownEvents.add(startEvent);
		const onPressEnd = onPressStart(target, startEvent);
		const onPointerEnd = (endEvent, success) => {
			window.removeEventListener("pointerup", onPointerUp);
			window.removeEventListener("pointercancel", onPointerCancel);
			if (isPressing.has(target)) isPressing.delete(target);
			if (!isValidPressEvent(endEvent)) return;
			if (typeof onPressEnd === "function") onPressEnd(endEvent, { success });
		};
		const onPointerUp = (upEvent) => {
			onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || isNodeOrChild(target, upEvent.target));
		};
		const onPointerCancel = (cancelEvent) => {
			onPointerEnd(cancelEvent, false);
		};
		window.addEventListener("pointerup", onPointerUp, eventOptions);
		window.addEventListener("pointercancel", onPointerCancel, eventOptions);
	};
	targets.forEach((target) => {
		(options.useGlobalTarget ? window : target).addEventListener("pointerdown", startPress, eventOptions);
		if (isHTMLElement(target)) {
			target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
			if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) target.tabIndex = 0;
		}
	});
	return cancelEvents;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
/**
* Checks if an element is an SVG element in a way
* that works across iframes
*/
function isSVGElement(element) {
	return isObject(element) && "ownerSVGElement" in element;
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/handle-element.mjs
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var observer;
var getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
	if (borderBoxSize && borderBoxSize[0]) return borderBoxSize[0][borderBoxAxis + "Size"];
	else if (isSVGElement(target) && "getBBox" in target) return target.getBBox()[svgAxis];
	else return target[htmlAxis];
};
var getWidth = /*@__PURE__*/ getSize("inline", "width", "offsetWidth");
var getHeight = /*@__PURE__*/ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
	resizeHandlers.get(target)?.forEach((handler) => {
		handler(target, {
			get width() {
				return getWidth(target, borderBoxSize);
			},
			get height() {
				return getHeight(target, borderBoxSize);
			}
		});
	});
}
function notifyAll(entries) {
	entries.forEach(notifyTarget);
}
function createResizeObserver() {
	if (typeof ResizeObserver === "undefined") return;
	observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
	if (!observer) createResizeObserver();
	const elements = resolveElements(target);
	elements.forEach((element) => {
		let elementHandlers = resizeHandlers.get(element);
		if (!elementHandlers) {
			elementHandlers = /* @__PURE__ */ new Set();
			resizeHandlers.set(element, elementHandlers);
		}
		elementHandlers.add(handler);
		observer?.observe(element);
	});
	return () => {
		elements.forEach((element) => {
			const elementHandlers = resizeHandlers.get(element);
			elementHandlers?.delete(handler);
			if (!elementHandlers?.size) observer?.unobserve(element);
		});
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */ new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
	windowResizeHandler = () => {
		const info = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		windowCallbacks.forEach((callback) => callback(info));
	};
	window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
	windowCallbacks.add(callback);
	if (!windowResizeHandler) createWindowResizeHandler();
	return () => {
		windowCallbacks.delete(callback);
		if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
			window.removeEventListener("resize", windowResizeHandler);
			windowResizeHandler = void 0;
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/resize/index.mjs
function resize(a, b) {
	return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
/**
* Checks if an element is specifically an SVGSVGElement (the root SVG element)
* in a way that works across iframes
*/
function isSVGSVGElement(element) {
	return isSVGElement(element) && element.tagName === "svg";
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/find.mjs
/**
* A list of all ValueTypes
*/
var valueTypes = [
	...dimensionValueTypes,
	color,
	complex
];
/**
* Tests a value against the list of ValueTypes
*/
var findValueType = (v) => valueTypes.find(testValueType(v));
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
});
var createDelta = () => ({
	x: createAxisDelta(),
	y: createAxisDelta()
});
var createAxis = () => ({
	min: 0,
	max: 0
});
var createBox = () => ({
	x: createAxis(),
	y: createAxis()
});
//#endregion
//#region node_modules/motion-dom/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function isAnimationControls(v) {
	return v !== null && typeof v === "object" && typeof v.start === "function";
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
/**
* Decides if the supplied variable is variant label
*/
function isVariantLabel(v) {
	return typeof v === "string" || Array.isArray(v);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
];
var variantProps = ["initial", ...variantPriorityOrder];
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
	return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
	return Boolean(isControllingVariants(props) || props.variants);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
/**
* Updates motion values from props changes.
* Uses `any` type for element to avoid circular dependencies with VisualElement.
*/
function updateMotionValuesFromProps(element, next, prev) {
	for (const key in next) {
		const nextValue = next[key];
		const prevValue = prev[key];
		if (isMotionValue(nextValue))
 /**
		* If this is a motion value found in props or style, we want to add it
		* to our visual element's motion value map.
		*/
		element.addValue(key, nextValue);
		else if (isMotionValue(prevValue))
 /**
		* If we're swapping from a motion value to a static value,
		* create a new motion value from that
		*/
		element.addValue(key, motionValue(nextValue, { owner: element }));
		else if (prevValue !== nextValue)
 /**
		* If this is a flat value that has changed, update the motion value
		* or create one if it doesn't exist. We only want to do this if we're
		* not handling the value with our animation state.
		*/
		if (element.hasValue(key)) {
			const existingValue = element.getValue(key);
			if (existingValue.liveStyle === true) existingValue.jump(nextValue);
			else if (!existingValue.hasAnimated) existingValue.set(nextValue);
		} else {
			const latestValue = element.getStaticValue(key);
			element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
		}
	}
	for (const key in prev) if (next[key] === void 0) element.removeValue(key);
	return next;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs
var isBrowser = typeof window !== "undefined";
function initPrefersReducedMotion() {
	hasReducedMotionListener.current = true;
	if (!isBrowser) return;
	if (window.matchMedia) {
		const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
		const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
		motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
		setReducedMotionPreferences();
	} else prefersReducedMotion.current = false;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/VisualElement.mjs
var propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
];
/**
* Static feature definitions - can be injected by framework layer
*/
var featureDefinitions = {};
/**
* Set feature definitions for all VisualElements.
* This should be called by the framework layer (e.g., framer-motion) during initialization.
*/
function setFeatureDefinitions(definitions) {
	featureDefinitions = definitions;
}
/**
* Get the current feature definitions
*/
function getFeatureDefinitions() {
	return featureDefinitions;
}
/**
* A VisualElement is an imperative abstraction around UI elements such as
* HTMLElement, SVGElement, Three.Object3D etc.
*/
var VisualElement = class {
	/**
	* This method takes React props and returns found MotionValues. For example, HTML
	* MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
	*
	* This isn't an abstract method as it needs calling in the constructor, but it is
	* intended to be one.
	*/
	scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
		return {};
	}
	constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}) {
		/**
		* A reference to the current underlying Instance, e.g. a HTMLElement
		* or Three.Mesh etc.
		*/
		this.current = null;
		/**
		* A set containing references to this VisualElement's children.
		*/
		this.children = /* @__PURE__ */ new Set();
		/**
		* Determine what role this visual element should take in the variant tree.
		*/
		this.isVariantNode = false;
		this.isControllingVariants = false;
		/**
		* Decides whether this VisualElement should animate in reduced motion
		* mode.
		*
		* TODO: This is currently set on every individual VisualElement but feels
		* like it could be set globally.
		*/
		this.shouldReduceMotion = null;
		/**
		* Decides whether animations should be skipped for this VisualElement.
		* Useful for E2E tests and visual regression testing.
		*/
		this.shouldSkipAnimations = false;
		/**
		* A map of all motion values attached to this visual element. Motion
		* values are source of truth for any given animated value. A motion
		* value might be provided externally by the component via props.
		*/
		this.values = /* @__PURE__ */ new Map();
		this.KeyframeResolver = KeyframeResolver;
		/**
		* Cleanup functions for active features (hover/tap/exit etc)
		*/
		this.features = {};
		/**
		* A map of every subscription that binds the provided or generated
		* motion values onChange listeners to this visual element.
		*/
		this.valueSubscriptions = /* @__PURE__ */ new Map();
		/**
		* A reference to the previously-provided motion values as returned
		* from scrapeMotionValuesFromProps. We use the keys in here to determine
		* if any motion values need to be removed after props are updated.
		*/
		this.prevMotionValues = {};
		/**
		* Track whether this element has been mounted before, to detect
		* remounts after Suspense unmount/remount cycles.
		*/
		this.hasBeenMounted = false;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		/**
		* An object containing an unsubscribe function for each prop event subscription.
		* For example, every "Update" event can have multiple subscribers via
		* VisualElement.on(), but only one of those can be defined via the onUpdate prop.
		*/
		this.propEventSubscriptions = {};
		this.notifyUpdate = () => this.notify("Update", this.latestValues);
		this.render = () => {
			if (!this.current) return;
			this.triggerBuild();
			this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
		};
		this.renderScheduledAt = 0;
		this.scheduleRender = () => {
			const now = time.now();
			if (this.renderScheduledAt < now) {
				this.renderScheduledAt = now;
				frame.render(this.render, false, true);
			}
		};
		const { latestValues, renderState } = visualState;
		this.latestValues = latestValues;
		this.baseTarget = { ...latestValues };
		this.initialValues = props.initial ? { ...latestValues } : {};
		this.renderState = renderState;
		this.parent = parent;
		this.props = props;
		this.presenceContext = presenceContext;
		this.depth = parent ? parent.depth + 1 : 0;
		this.reducedMotionConfig = reducedMotionConfig;
		this.skipAnimationsConfig = skipAnimations;
		this.options = options;
		this.blockInitialAnimation = Boolean(blockInitialAnimation);
		this.isControllingVariants = isControllingVariants(props);
		this.isVariantNode = isVariantNode(props);
		if (this.isVariantNode) this.variantChildren = /* @__PURE__ */ new Set();
		this.manuallyAnimateOnMount = Boolean(parent && parent.current);
		/**
		* Any motion values that are provided to the element when created
		* aren't yet bound to the element, as this would technically be impure.
		* However, we iterate through the motion values and set them to the
		* initial values for this component.
		*
		* TODO: This is impure and we should look at changing this to run on mount.
		* Doing so will break some tests but this isn't necessarily a breaking change,
		* more a reflection of the test.
		*/
		const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
		for (const key in initialMotionValues) {
			const value = initialMotionValues[key];
			if (latestValues[key] !== void 0 && isMotionValue(value)) value.set(latestValues[key]);
		}
	}
	mount(instance) {
		/**
		* If this element has been mounted before (e.g. after a Suspense
		* unmount/remount), reset motion values to their initial state
		* so animations replay correctly from initial → animate.
		*/
		if (this.hasBeenMounted) for (const key in this.initialValues) {
			this.values.get(key)?.jump(this.initialValues[key]);
			this.latestValues[key] = this.initialValues[key];
		}
		this.current = instance;
		visualElementStore.set(instance, this);
		if (this.projection && !this.projection.instance) this.projection.mount(instance);
		if (this.parent && this.isVariantNode && !this.isControllingVariants) this.removeFromVariantTree = this.parent.addVariantChild(this);
		this.values.forEach((value, key) => this.bindToMotionValue(key, value));
		/**
		* Determine reduced motion preference. Only initialize the matchMedia
		* listener if we actually need the dynamic value (i.e., when config
		* is neither "never" nor "always").
		*/
		if (this.reducedMotionConfig === "never") this.shouldReduceMotion = false;
		else if (this.reducedMotionConfig === "always") this.shouldReduceMotion = true;
		else {
			if (!hasReducedMotionListener.current) initPrefersReducedMotion();
			this.shouldReduceMotion = prefersReducedMotion.current;
		}
		if (process.env.NODE_ENV !== "production") warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
		/**
		* Set whether animations should be skipped based on the config.
		*/
		this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
		this.parent?.addChild(this);
		this.update(this.props, this.presenceContext);
		this.hasBeenMounted = true;
	}
	unmount() {
		this.projection && this.projection.unmount();
		cancelFrame(this.notifyUpdate);
		cancelFrame(this.render);
		this.valueSubscriptions.forEach((remove) => remove());
		this.valueSubscriptions.clear();
		this.removeFromVariantTree && this.removeFromVariantTree();
		this.parent?.removeChild(this);
		for (const key in this.events) this.events[key].clear();
		for (const key in this.features) {
			const feature = this.features[key];
			if (feature) {
				feature.unmount();
				feature.isMounted = false;
			}
		}
		this.current = null;
	}
	addChild(child) {
		this.children.add(child);
		this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set());
		this.enteringChildren.add(child);
	}
	removeChild(child) {
		this.children.delete(child);
		this.enteringChildren && this.enteringChildren.delete(child);
	}
	bindToMotionValue(key, value) {
		if (this.valueSubscriptions.has(key)) this.valueSubscriptions.get(key)();
		if (value.accelerate && acceleratedValues.has(key) && this.current instanceof HTMLElement) {
			const { factory, keyframes, times, ease, duration } = value.accelerate;
			const animation = new NativeAnimation({
				element: this.current,
				name: key,
				keyframes,
				times,
				ease,
				duration: /* @__PURE__ */ secondsToMilliseconds(duration)
			});
			const cleanup = factory(animation);
			this.valueSubscriptions.set(key, () => {
				cleanup();
				animation.cancel();
			});
			return;
		}
		const valueIsTransform = transformProps.has(key);
		if (valueIsTransform && this.onBindTransform) this.onBindTransform();
		const removeOnChange = value.on("change", (latestValue) => {
			this.latestValues[key] = latestValue;
			this.props.onUpdate && frame.preRender(this.notifyUpdate);
			if (valueIsTransform && this.projection) this.projection.isTransformDirty = true;
			this.scheduleRender();
		});
		let removeSyncCheck;
		if (typeof window !== "undefined" && window.MotionCheckAppearSync) removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
		this.valueSubscriptions.set(key, () => {
			removeOnChange();
			if (removeSyncCheck) removeSyncCheck();
		});
	}
	sortNodePosition(other) {
		/**
		* If these nodes aren't even of the same type we can't compare their depth.
		*/
		if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
		return this.sortInstanceNodePosition(this.current, other.current);
	}
	updateFeatures() {
		let key = "animation";
		for (key in featureDefinitions) {
			const featureDefinition = featureDefinitions[key];
			if (!featureDefinition) continue;
			const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
			/**
			* If this feature is enabled but not active, make a new instance.
			*/
			if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) this.features[key] = new FeatureConstructor(this);
			/**
			* If we have a feature, mount or update it.
			*/
			if (this.features[key]) {
				const feature = this.features[key];
				if (feature.isMounted) feature.update();
				else {
					feature.mount();
					feature.isMounted = true;
				}
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	/**
	* Measure the current viewport box with or without transforms.
	* Only measures axis-aligned boxes, rotate and skew must be manually
	* removed with a re-render to work.
	*/
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(key) {
		return this.latestValues[key];
	}
	setStaticValue(key, value) {
		this.latestValues[key] = value;
	}
	/**
	* Update the provided props. Ensure any newly-added motion values are
	* added to our map, old ones removed, and listeners updated.
	*/
	update(props, presenceContext) {
		if (props.transformTemplate || this.props.transformTemplate) this.scheduleRender();
		this.prevProps = this.props;
		this.props = props;
		this.prevPresenceContext = this.presenceContext;
		this.presenceContext = presenceContext;
		/**
		* Update prop event handlers ie onAnimationStart, onAnimationComplete
		*/
		for (let i = 0; i < propEventHandlers.length; i++) {
			const key = propEventHandlers[i];
			if (this.propEventSubscriptions[key]) {
				this.propEventSubscriptions[key]();
				delete this.propEventSubscriptions[key];
			}
			const listener = props["on" + key];
			if (listener) this.propEventSubscriptions[key] = this.on(key, listener);
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
		if (this.handleChildMotionValue) this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	/**
	* Returns the variant definition with a given name.
	*/
	getVariant(name) {
		return this.props.variants ? this.props.variants[name] : void 0;
	}
	/**
	* Returns the defined default transition on this component.
	*/
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	/**
	* Add a child visual element to our set of children.
	*/
	addVariantChild(child) {
		const closestVariantNode = this.getClosestVariantNode();
		if (closestVariantNode) {
			closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
			return () => closestVariantNode.variantChildren.delete(child);
		}
	}
	/**
	* Add a motion value and bind it to this visual element.
	*/
	addValue(key, value) {
		const existingValue = this.values.get(key);
		if (value !== existingValue) {
			if (existingValue) this.removeValue(key);
			this.bindToMotionValue(key, value);
			this.values.set(key, value);
			this.latestValues[key] = value.get();
		}
	}
	/**
	* Remove a motion value and unbind any active subscriptions.
	*/
	removeValue(key) {
		this.values.delete(key);
		const unsubscribe = this.valueSubscriptions.get(key);
		if (unsubscribe) {
			unsubscribe();
			this.valueSubscriptions.delete(key);
		}
		delete this.latestValues[key];
		this.removeValueFromRenderState(key, this.renderState);
	}
	/**
	* Check whether we have a motion value for this key
	*/
	hasValue(key) {
		return this.values.has(key);
	}
	getValue(key, defaultValue) {
		if (this.props.values && this.props.values[key]) return this.props.values[key];
		let value = this.values.get(key);
		if (value === void 0 && defaultValue !== void 0) {
			value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
			this.addValue(key, value);
		}
		return value;
	}
	/**
	* If we're trying to animate to a previously unencountered value,
	* we need to check for it in our state and as a last resort read it
	* directly from the instance (which might have performance implications).
	*/
	readValue(key, target) {
		let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
		if (value !== void 0 && value !== null) {
			if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) value = parseFloat(value);
			else if (!findValueType(value) && complex.test(target)) value = getAnimatableNone(key, target);
			this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
		}
		return isMotionValue(value) ? value.get() : value;
	}
	/**
	* Set the base target to later animate back to. This is currently
	* only hydrated on creation and when we first read a value.
	*/
	setBaseTarget(key, value) {
		this.baseTarget[key] = value;
	}
	/**
	* Find the base target for a value thats been removed from all animation
	* props.
	*/
	getBaseTarget(key) {
		const { initial } = this.props;
		let valueFromInitial;
		if (typeof initial === "string" || typeof initial === "object") {
			const variant = resolveVariantFromProps(this.props, initial, this.presenceContext?.custom);
			if (variant) valueFromInitial = variant[key];
		}
		/**
		* If this value still exists in the current initial variant, read that.
		*/
		if (initial && valueFromInitial !== void 0) return valueFromInitial;
		/**
		* Alternatively, if this VisualElement config has defined a getBaseTarget
		* so we can read the value from an alternative source, try that.
		*/
		const target = this.getBaseTargetFromProps(this.props, key);
		if (target !== void 0 && !isMotionValue(target)) return target;
		/**
		* If the value was initially defined on initial, but it doesn't any more,
		* return undefined. Otherwise return the value as initially read from the DOM.
		*/
		return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		return this.events[eventName].add(callback);
	}
	notify(eventName, ...args) {
		if (this.events[eventName]) this.events[eventName].notify(...args);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments);
		this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(a, b) {
		/**
		* compareDocumentPosition returns a bitmask, by using the bitwise &
		* we're returning true if 2 in that bitmask is set to true. 2 is set
		* to true if b preceeds a.
		*/
		return a.compareDocumentPosition(b) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(props, key) {
		const style = props.style;
		return style ? style[key] : void 0;
	}
	removeValueFromRenderState(key, { vars, style }) {
		delete vars[key];
		delete style[key];
	}
	handleChildMotionValue() {
		if (this.childSubscription) {
			this.childSubscription();
			delete this.childSubscription;
		}
		const { children } = this.props;
		if (isMotionValue(children)) this.childSubscription = children.on("change", (latest) => {
			if (this.current) this.current.textContent = `${latest}`;
		});
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/Feature.mjs
/**
* Feature base class for extending VisualElement functionality.
* Features are plugins that can be mounted/unmounted to add behavior
* like gestures, animations, or layout tracking.
*/
var Feature = class {
	constructor(node) {
		this.isMounted = false;
		this.node = node;
	}
	update() {}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
/**
* Bounding boxes tend to be defined as top, left, right, bottom. For various operations
* it's easier to consider each axis individually. This function returns a bounding box
* as a map of single-axis min/max values.
*/
function convertBoundingBoxToBox({ top, left, right, bottom }) {
	return {
		x: {
			min: left,
			max: right
		},
		y: {
			min: top,
			max: bottom
		}
	};
}
function convertBoxToBoundingBox({ x, y }) {
	return {
		top: y.min,
		right: x.max,
		bottom: y.max,
		left: x.min
	};
}
/**
* Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
* provided by Framer to allow measured points to be corrected for device scaling. This is used
* when measuring DOM elements and DOM event points.
*/
function transformBoxPoints(point, transformPoint) {
	if (!transformPoint) return point;
	const topLeft = transformPoint({
		x: point.left,
		y: point.top
	});
	const bottomRight = transformPoint({
		x: point.right,
		y: point.bottom
	});
	return {
		top: topLeft.y,
		left: topLeft.x,
		bottom: bottomRight.y,
		right: bottomRight.x
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale) {
	return scale === void 0 || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
	return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
	return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
	return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
	return value && value !== "0%";
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
/**
* Scales a point based on a factor and an originPoint
*/
function scalePoint(point, scale, originPoint) {
	return originPoint + scale * (point - originPoint);
}
/**
* Applies a translate/scale delta to a point
*/
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
	if (boxScale !== void 0) point = scalePoint(point, boxScale, originPoint);
	return scalePoint(point, scale, originPoint) + translate;
}
/**
* Applies a translate/scale delta to an axis
*/
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
	axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Applies a translate/scale delta to a box
*/
function applyBoxDelta(box, { x, y }) {
	applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
	applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
* Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
* in a tree upon our box before then calculating how to project it into our desired viewport-relative box
*
* This is the final nested loop within updateLayoutDelta for future refactoring
*/
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
	const treeLength = treePath.length;
	if (!treeLength) return;
	treeScale.x = treeScale.y = 1;
	let node;
	let delta;
	for (let i = 0; i < treeLength; i++) {
		node = treePath[i];
		delta = node.projectionDelta;
		/**
		* TODO: Prefer to remove this, but currently we have motion components with
		* display: contents in Framer.
		*/
		const { visualElement } = node.options;
		if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") continue;
		if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
			translateAxis(box.x, -node.scroll.offset.x);
			translateAxis(box.y, -node.scroll.offset.y);
		}
		if (delta) {
			treeScale.x *= delta.x.scale;
			treeScale.y *= delta.y.scale;
			applyBoxDelta(box, delta);
		}
		if (isSharedTransition && hasTransform(node.latestValues)) transformBox(box, node.latestValues, node.layout?.layoutBox);
	}
	/**
	* Snap tree scale back to 1 if it's within a non-perceivable threshold.
	* This will help reduce useless scales getting rendered.
	*/
	if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) treeScale.x = 1;
	if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) treeScale.y = 1;
}
function translateAxis(axis, distance) {
	axis.min += distance;
	axis.max += distance;
}
/**
* Apply a transform to an axis from the latest resolved motion values.
* This function basically acts as a bridge between a flat motion value map
* and applyAxisDelta
*/
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = .5) {
	applyAxisDelta(axis, axisTranslate, axisScale, mixNumber$1(axis.min, axis.max, axisOrigin), boxScale);
}
function resolveAxisTranslate(value, axis) {
	if (typeof value === "string") return parseFloat(value) / 100 * (axis.max - axis.min);
	return value;
}
/**
* Apply a transform to a box from the latest resolved motion values.
*/
function transformBox(box, transform, sourceBox) {
	const resolveBox = sourceBox ?? box;
	transformAxis(box.x, resolveAxisTranslate(transform.x, resolveBox.x), transform.scaleX, transform.scale, transform.originX);
	transformAxis(box.y, resolveAxisTranslate(transform.y, resolveBox.y), transform.scaleY, transform.scale, transform.originY);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint) {
	return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
	const viewportBox = measureViewportBox(element, transformPagePoint);
	const { scroll } = rootProjectionNode;
	if (scroll) {
		translateAxis(viewportBox.x, scroll.offset.x);
		translateAxis(viewportBox.y, scroll.offset.y);
	}
	return viewportBox;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
/**
* Build a CSS transform style from individual x/y/scale etc properties.
*
* This outputs with a default order of transforms/scales/rotations, this can be customised by
* providing a transformTemplate function.
*/
function buildTransform(latestValues, transform, transformTemplate) {
	let transformString = "";
	let transformIsDefault = true;
	/**
	* Loop over all possible transforms in order, adding the ones that
	* are present to the transform string.
	*/
	for (let i = 0; i < numTransforms; i++) {
		const key = transformPropOrder[i];
		const value = latestValues[key];
		if (value === void 0) continue;
		let valueIsDefault = true;
		if (typeof value === "number") valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
		else {
			const parsed = parseFloat(value);
			valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
		}
		if (!valueIsDefault || transformTemplate) {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (!valueIsDefault) {
				transformIsDefault = false;
				const transformName = translateAlias[key] || key;
				transformString += `${transformName}(${valueAsType}) `;
			}
			if (transformTemplate) transform[key] = valueAsType;
		}
	}
	const pathRotation = latestValues.pathRotation;
	if (pathRotation) {
		transformIsDefault = false;
		transformString += `rotate(${getValueAsType(pathRotation, numberValueTypes.pathRotation)}) `;
	}
	transformString = transformString.trim();
	if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
	else if (transformIsDefault) transformString = "none";
	return transformString;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
	const { style, vars, transformOrigin } = state;
	let hasTransform = false;
	let hasTransformOrigin = false;
	/**
	* Loop over all our latest animated values and decide whether to handle them
	* as a style or CSS variable.
	*
	* Transforms and transform origins are kept separately for further processing.
	*/
	for (const key in latestValues) {
		const value = latestValues[key];
		if (transformProps.has(key)) {
			hasTransform = true;
			continue;
		} else if (isCSSVariableName(key)) {
			vars[key] = value;
			continue;
		} else {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (key.startsWith("origin")) {
				hasTransformOrigin = true;
				transformOrigin[key] = valueAsType;
			} else style[key] = valueAsType;
		}
	}
	if (!latestValues.transform) {
		if (hasTransform || transformTemplate) style.transform = buildTransform(latestValues, state.transform, transformTemplate);
		else if (style.transform)
 /**
		* If we have previously created a transform but currently don't have any,
		* reset transform style to none.
		*/
		style.transform = "none";
	}
	/**
	* Build a transformOrigin style. Uses the same defaults as the browser for
	* undefined origins.
	*/
	if (hasTransformOrigin) {
		const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
		style.transformOrigin = `${originX} ${originY} ${originZ}`;
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
	const elementStyle = element.style;
	let key;
	for (key in style) elementStyle[key] = style[key];
	projection?.applyProjectionStyles(elementStyle, styleProp);
	for (key in vars) elementStyle.setProperty(key, vars[key]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
	if (axis.max === axis.min) return 0;
	return pixels / (axis.max - axis.min) * 100;
}
/**
* We always correct borderRadius as a percentage rather than pixels to reduce paints.
* For example, if you are projecting a box that is 100px wide with a 10px borderRadius
* into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
* borderRadius in both states. If we animate between the two in pixels that will trigger
* a paint each time. If we animate between the two in percentage we'll avoid a paint.
*/
var correctBorderRadius = { correct: (latest, node) => {
	if (!node.target) return latest;
	/**
	* If latest is a string, if it's a percentage we can return immediately as it's
	* going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
	*/
	if (typeof latest === "string") if (px.test(latest)) latest = parseFloat(latest);
	else return latest;
	return `${pixelsToPercent(latest, node.target.x)}% ${pixelsToPercent(latest, node.target.y)}%`;
} };
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = { correct: (latest, { treeScale, projectionDelta }) => {
	const original = latest;
	const shadow = complex.parse(latest);
	if (shadow.length > 5) return original;
	const template = complex.createTransformer(latest);
	const offset = typeof shadow[0] !== "number" ? 1 : 0;
	const xScale = projectionDelta.x.scale * treeScale.x;
	const yScale = projectionDelta.y.scale * treeScale.y;
	shadow[0 + offset] /= xScale;
	shadow[1 + offset] /= yScale;
	/**
	* Ideally we'd correct x and y scales individually, but because blur and
	* spread apply to both we have to take a scale average and apply that instead.
	* We could potentially improve the outcome of this by incorporating the ratio between
	* the two scales.
	*/
	const averageScale = mixNumber$1(xScale, yScale, .5);
	if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
	if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
	return template(shadow);
} };
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {
	borderRadius: {
		...correctBorderRadius,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: correctBorderRadius,
	borderTopRightRadius: correctBorderRadius,
	borderBottomLeftRadius: correctBorderRadius,
	borderBottomRightRadius: correctBorderRadius,
	boxShadow: correctBoxShadow
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout, layoutId }) {
	return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
	const style = props.style;
	const prevStyle = prevProps?.style;
	const newValues = {};
	if (!style) return newValues;
	for (const key in style) if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) newValues[key] = style[key];
	return newValues;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle$1(element) {
	return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "html";
		this.renderInstance = renderHTML;
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
		else {
			const computedStyle = getComputedStyle$1(instance);
			const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
			return typeof value === "string" ? value.trim() : value;
		}
	}
	measureInstanceViewportBox(instance, { transformPagePoint }) {
		return measureViewportBox(instance, transformPagePoint);
	}
	build(renderState, latestValues, props) {
		buildHTMLStyles(renderState, latestValues, props.transformTemplate);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
};
var camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
/**
* Build SVG path properties. Uses the path's measured length to convert
* our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
* and stroke-dasharray attributes.
*
* This function is mutative to reduce per-frame GC.
*
* Note: We use unitless values for stroke-dasharray and stroke-dashoffset
* because Safari incorrectly scales px values when the page is zoomed.
*/
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
	attrs.pathLength = 1;
	const keys = useDashCase ? dashKeys : camelKeys;
	attrs[keys.offset] = `${-offset}`;
	attrs[keys.array] = `${length} ${spacing}`;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
/**
* CSS Motion Path properties that should remain as CSS styles on SVG elements.
*/
var cssMotionPathProperties = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
/**
* Build SVG visual attributes, like cx and style.transform
*/
function buildSVGAttrs(state, { attrX, attrY, attrScale, pathLength, pathSpacing = 1, pathOffset = 0, ...latest }, isSVGTag, transformTemplate, styleProp) {
	buildHTMLStyles(state, latest, transformTemplate);
	/**
	* For svg tags we just want to make sure viewBox is animatable and treat all the styles
	* as normal HTML tags.
	*/
	if (isSVGTag) {
		if (state.style.viewBox) state.attrs.viewBox = state.style.viewBox;
		return;
	}
	state.attrs = state.style;
	state.style = {};
	const { attrs, style } = state;
	/**
	* However, we apply transforms as CSS transforms.
	* So if we detect a transform, transformOrigin we take it from attrs and copy it into style.
	*/
	if (attrs.transform) {
		style.transform = attrs.transform;
		delete attrs.transform;
	}
	if (style.transform || attrs.transformOrigin) {
		style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
		delete attrs.transformOrigin;
	}
	if (style.transform) {
		/**
		* SVG's element transform-origin uses its own median as a reference.
		* Therefore, transformBox becomes a fill-box
		*/
		style.transformBox = styleProp?.transformBox ?? "fill-box";
		delete attrs.transformBox;
	}
	for (const key of cssMotionPathProperties) if (attrs[key] !== void 0) {
		style[key] = attrs[key];
		delete attrs[key];
	}
	if (attrX !== void 0) attrs.x = attrX;
	if (attrY !== void 0) attrs.y = attrY;
	if (attrScale !== void 0) attrs.scale = attrScale;
	if (pathLength !== void 0) buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
/**
* A set of attribute names that are always read/written as camel case.
*/
var camelCaseAttributes = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
	renderHTML(element, renderState, void 0, projection);
	for (const key in renderState.attrs) element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
	const newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	for (const key in props) if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
		const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
		newValues[targetKey] = props[key];
	}
	return newValues;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "svg";
		this.isSVGTag = false;
		this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(props, key) {
		return props[key];
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) {
			const defaultType = getDefaultValueType(key);
			return defaultType ? defaultType.default || 0 : 0;
		}
		key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
		return instance.getAttribute(key);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps(props, prevProps, visualElement);
	}
	build(renderState, latestValues, props) {
		buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
	}
	renderInstance(instance, renderState, styleProp, projection) {
		renderSVG(instance, renderState, styleProp, projection);
	}
	mount(instance) {
		this.isSVGTag = isSVGTag(instance.tagName);
		super.mount(instance);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/get-variant-context.mjs
var numVariantProps = variantProps.length;
/**
* Get variant context from a visual element's parent chain.
* Uses `any` type for visualElement to avoid circular dependencies.
*/
function getVariantContext(visualElement) {
	if (!visualElement) return void 0;
	if (!visualElement.isControllingVariants) {
		const context = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
		if (visualElement.props.initial !== void 0) context.initial = visualElement.props.initial;
		return context;
	}
	const context = {};
	for (let i = 0; i < numVariantProps; i++) {
		const name = variantProps[i];
		const prop = visualElement.props[name];
		if (isVariantLabel(prop) || prop === false) context[name] = prop;
	}
	return context;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
	if (!Array.isArray(prev)) return false;
	const prevLength = prev.length;
	if (prevLength !== next.length) return false;
	for (let i = 0; i < prevLength; i++) if (prev[i] !== next[i]) return false;
	return true;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function createAnimateFunction(visualElement) {
	return (animations) => {
		return Promise.all(animations.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
	};
}
function createAnimationState(visualElement) {
	let animate = createAnimateFunction(visualElement);
	let state = createState();
	let isInitialRender = true;
	/**
	* Track whether the animation state has been reset (e.g. via StrictMode
	* double-invocation or Suspense unmount/remount). On the first
	* animateChanges() call after a reset we need to behave like the initial
	* render for variant-inheritance checks, even though isInitialRender is
	* already false.
	*/
	let wasReset = false;
	/**
	* This function will be used to reduce the animation definitions for
	* each active animation type into an object of resolved values for it.
	*/
	const buildResolvedTypeValues = (type) => (acc, definition) => {
		const resolved = resolveVariant(visualElement, definition, type === "exit" ? visualElement.presenceContext?.custom : void 0);
		if (resolved) {
			const { transition, transitionEnd, ...target } = resolved;
			acc = {
				...acc,
				...target,
				...transitionEnd
			};
		}
		return acc;
	};
	/**
	* This just allows us to inject mocked animation functions
	* @internal
	*/
	function setAnimateFunction(makeAnimator) {
		animate = makeAnimator(visualElement);
	}
	/**
	* When we receive new props, we need to:
	* 1. Create a list of protected keys for each type. This is a directory of
	*    value keys that are currently being "handled" by types of a higher priority
	*    so that whenever an animation is played of a given type, these values are
	*    protected from being animated.
	* 2. Determine if an animation type needs animating.
	* 3. Determine if any values have been removed from a type and figure out
	*    what to animate those to.
	*/
	function animateChanges(changedActiveType) {
		const { props } = visualElement;
		const context = getVariantContext(visualElement.parent) || {};
		/**
		* A list of animations that we'll build into as we iterate through the animation
		* types. This will get executed at the end of the function.
		*/
		const animations = [];
		/**
		* Keep track of which values have been removed. Then, as we hit lower priority
		* animation types, we can check if they contain removed values and animate to that.
		*/
		const removedKeys = /* @__PURE__ */ new Set();
		/**
		* A dictionary of all encountered keys. This is an object to let us build into and
		* copy it without iteration. Each time we hit an animation type we set its protected
		* keys - the keys its not allowed to animate - to the latest version of this object.
		*/
		let encounteredKeys = {};
		/**
		* If a variant has been removed at a given index, and this component is controlling
		* variant animations, we want to ensure lower-priority variants are forced to animate.
		*/
		let removedVariantIndex = Infinity;
		/**
		* Iterate through all animation types in reverse priority order. For each, we want to
		* detect which values it's handling and whether or not they've changed (and therefore
		* need to be animated). If any values have been removed, we want to detect those in
		* lower priority props and flag for animation.
		*/
		for (let i = 0; i < numAnimationTypes; i++) {
			const type = reversePriorityOrder[i];
			const typeState = state[type];
			const prop = props[type] !== void 0 ? props[type] : context[type];
			const propIsVariant = isVariantLabel(prop);
			/**
			* If this type has *just* changed isActive status, set activeDelta
			* to that status. Otherwise set to null.
			*/
			const activeDelta = type === changedActiveType ? typeState.isActive : null;
			if (activeDelta === false) removedVariantIndex = i;
			/**
			* If this prop is an inherited variant, rather than been set directly on the
			* component itself, we want to make sure we allow the parent to trigger animations.
			*
			* TODO: Can probably change this to a !isControllingVariants check
			*/
			let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
			if (isInherited && (isInitialRender || wasReset) && visualElement.manuallyAnimateOnMount) isInherited = false;
			/**
			* Set all encountered keys so far as the protected keys for this type. This will
			* be any key that has been animated or otherwise handled by active, higher-priortiy types.
			*/
			typeState.protectedKeys = { ...encounteredKeys };
			if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") continue;
			/**
			* If exit is already active and wasn't just activated, skip
			* re-processing to prevent interrupting running exit animations.
			* Re-resolving exit with a changed custom value can start new
			* value animations that stop the originals, leaving the exit
			* animation promise unresolved and the component stuck in the DOM.
			*/
			if (type === "exit" && typeState.isActive && activeDelta !== true) {
				if (typeState.prevResolvedValues) encounteredKeys = {
					...encounteredKeys,
					...typeState.prevResolvedValues
				};
				continue;
			}
			/**
			* As we go look through the values defined on this type, if we detect
			* a changed value or a value that was removed in a higher priority, we set
			* this to true and add this prop to the animation list.
			*/
			const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
			let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
			let handledRemovedValues = false;
			/**
			* As animations can be set as variant lists, variants or target objects, we
			* coerce everything to an array if it isn't one already
			*/
			const definitionList = Array.isArray(prop) ? prop : [prop];
			/**
			* Build an object of all the resolved values. We'll use this in the subsequent
			* animateChanges calls to determine whether a value has changed.
			*/
			let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
			if (activeDelta === false) resolvedValues = {};
			/**
			* Now we need to loop through all the keys in the prev prop and this prop,
			* and decide:
			* 1. If the value has changed, and needs animating
			* 2. If it has been removed, and needs adding to the removedKeys set
			* 3. If it has been removed in a higher priority type and needs animating
			* 4. If it hasn't been removed in a higher priority but hasn't changed, and
			*    needs adding to the type's protectedKeys list.
			*/
			const { prevResolvedValues = {} } = typeState;
			const allKeys = {
				...prevResolvedValues,
				...resolvedValues
			};
			const markToAnimate = (key) => {
				shouldAnimateType = true;
				if (removedKeys.has(key)) {
					handledRemovedValues = true;
					removedKeys.delete(key);
				}
				typeState.needsAnimating[key] = true;
				const motionValue = visualElement.getValue(key);
				if (motionValue) motionValue.liveStyle = false;
			};
			for (const key in allKeys) {
				const next = resolvedValues[key];
				const prev = prevResolvedValues[key];
				if (encounteredKeys.hasOwnProperty(key)) continue;
				/**
				* If the value has changed, we probably want to animate it.
				*/
				let valueHasChanged = false;
				if (isKeyframesTarget(next) && isKeyframesTarget(prev)) valueHasChanged = !shallowCompare(next, prev) || variantDidChange;
				else valueHasChanged = next !== prev;
				if (valueHasChanged) if (next !== void 0 && next !== null) markToAnimate(key);
				else removedKeys.add(key);
				else if (next !== void 0 && removedKeys.has(key))
 /**
				* If next hasn't changed and it isn't undefined, we want to check if it's
				* been removed by a higher priority
				*/
				markToAnimate(key);
				else
 /**
				* If it hasn't changed, we add it to the list of protected values
				* to ensure it doesn't get animated.
				*/
				typeState.protectedKeys[key] = true;
			}
			/**
			* Update the typeState so next time animateChanges is called we can compare the
			* latest prop and resolvedValues to these.
			*/
			typeState.prevProp = prop;
			typeState.prevResolvedValues = resolvedValues;
			if (typeState.isActive) encounteredKeys = {
				...encounteredKeys,
				...resolvedValues
			};
			if ((isInitialRender || wasReset) && visualElement.blockInitialAnimation) shouldAnimateType = false;
			/**
			* If this is an inherited prop we want to skip this animation
			* unless the inherited variants haven't changed on this render.
			*/
			const willAnimateViaParent = isInherited && variantDidChange;
			if (shouldAnimateType && (!willAnimateViaParent || handledRemovedValues)) animations.push(...definitionList.map((animation) => {
				const options = { type };
				/**
				* If we're performing the initial animation, but we're not
				* rendering at the same time as the variant-controlling parent,
				* we want to use the parent's transition to calculate the stagger.
				*/
				if (typeof animation === "string" && (isInitialRender || wasReset) && !willAnimateViaParent && visualElement.manuallyAnimateOnMount && visualElement.parent) {
					const { parent } = visualElement;
					const parentVariant = resolveVariant(parent, animation);
					if (parent.enteringChildren && parentVariant) {
						const { delayChildren } = parentVariant.transition || {};
						options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
					}
				}
				return {
					animation,
					options
				};
			}));
		}
		/**
		* If there are some removed value that haven't been dealt with,
		* we need to create a new animation that falls back either to the value
		* defined in the style prop, or the last read value.
		*/
		if (removedKeys.size) {
			const fallbackAnimation = {};
			/**
			* If the initial prop contains a transition we can use that, otherwise
			* allow the animation function to use the visual element's default.
			*/
			if (typeof props.initial !== "boolean") {
				const initialTransition = resolveVariant(visualElement, Array.isArray(props.initial) ? props.initial[0] : props.initial);
				if (initialTransition && initialTransition.transition) fallbackAnimation.transition = initialTransition.transition;
			}
			removedKeys.forEach((key) => {
				const fallbackTarget = visualElement.getBaseTarget(key);
				const motionValue = visualElement.getValue(key);
				if (motionValue) motionValue.liveStyle = true;
				fallbackAnimation[key] = fallbackTarget ?? null;
			});
			animations.push({ animation: fallbackAnimation });
		}
		let shouldAnimate = Boolean(animations.length);
		if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) shouldAnimate = false;
		isInitialRender = false;
		wasReset = false;
		return shouldAnimate ? animate(animations) : Promise.resolve();
	}
	/**
	* Change whether a certain animation type is active.
	*/
	function setActive(type, isActive) {
		if (state[type].isActive === isActive) return Promise.resolve();
		visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
		state[type].isActive = isActive;
		const animations = animateChanges(type);
		for (const key in state) state[key].protectedKeys = {};
		return animations;
	}
	return {
		animateChanges,
		setActive,
		setAnimateFunction,
		getState: () => state,
		reset: () => {
			state = createState();
			wasReset = true;
		}
	};
}
function checkVariantsDidChange(prev, next) {
	if (typeof next === "string") return next !== prev;
	else if (Array.isArray(next)) return !shallowCompare(next, prev);
	return false;
}
function createTypeState(isActive = false) {
	return {
		isActive,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function createState() {
	return {
		animate: createTypeState(true),
		whileInView: createTypeState(),
		whileHover: createTypeState(),
		whileTap: createTypeState(),
		whileDrag: createTypeState(),
		whileFocus: createTypeState(),
		exit: createTypeState()
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
/**
* Reset an axis to the provided origin box.
*
* This is a mutative operation.
*/
function copyAxisInto(axis, originAxis) {
	axis.min = originAxis.min;
	axis.max = originAxis.max;
}
/**
* Reset a box to the provided origin box.
*
* This is a mutative operation.
*/
function copyBoxInto(box, originBox) {
	copyAxisInto(box.x, originBox.x);
	copyAxisInto(box.y, originBox.y);
}
/**
* Reset a delta to the provided origin box.
*
* This is a mutative operation.
*/
function copyAxisDeltaInto(delta, originDelta) {
	delta.translate = originDelta.translate;
	delta.scale = originDelta.scale;
	delta.originPoint = originDelta.originPoint;
	delta.origin = originDelta.origin;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var SCALE_MIN = .9999;
var SCALE_MAX = 1.0001;
var TRANSLATE_MIN = -.01;
var TRANSLATE_MAX = .01;
function calcLength(axis) {
	return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
	return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = .5) {
	delta.origin = origin;
	delta.originPoint = mixNumber$1(source.min, source.max, delta.origin);
	delta.scale = calcLength(target) / calcLength(source);
	delta.translate = mixNumber$1(target.min, target.max, delta.origin) - delta.originPoint;
	if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) delta.scale = 1;
	if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
	calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
	calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent, anchor = 0) {
	target.min = (anchor ? mixNumber$1(parent.min, parent.max, anchor) : parent.min) + relative.min;
	target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent, anchor) {
	calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
	calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
}
function calcRelativeAxisPosition(target, layout, parent, anchor = 0) {
	const anchorPoint = anchor ? mixNumber$1(parent.min, parent.max, anchor) : parent.min;
	target.min = layout.min - anchorPoint;
	target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent, anchor) {
	calcRelativeAxisPosition(target.x, layout.x, parent.x, anchor?.x);
	calcRelativeAxisPosition(target.y, layout.y, parent.y, anchor?.y);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
/**
* Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
*/
function removePointDelta(point, translate, scale, originPoint, boxScale) {
	point -= translate;
	point = scalePoint(point, 1 / scale, originPoint);
	if (boxScale !== void 0) point = scalePoint(point, 1 / boxScale, originPoint);
	return point;
}
/**
* Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
*/
function removeAxisDelta(axis, translate = 0, scale = 1, origin = .5, boxScale, originAxis = axis, sourceAxis = axis) {
	if (percent.test(translate)) {
		translate = parseFloat(translate);
		translate = mixNumber$1(sourceAxis.min, sourceAxis.max, translate / 100) - sourceAxis.min;
	}
	if (typeof translate !== "number") return;
	let originPoint = mixNumber$1(originAxis.min, originAxis.max, origin);
	if (axis === originAxis) originPoint -= translate;
	axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
	removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
* The names of the motion values we want to apply as translation, scale and origin.
*/
var xKeys = [
	"x",
	"scaleX",
	"originX"
];
var yKeys = [
	"y",
	"scaleY",
	"originY"
];
/**
* Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
	removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
	removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
	return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
	return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
	return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
	return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
	return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
	return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
	return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
	return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
	return [callback("x"), callback("y")];
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
	let transform = "";
	/**
	* The translations we use to calculate are always relative to the viewport coordinate space.
	* But when we apply scales, we also scale the coordinate space of an element and its children.
	* For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
	* to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
	*/
	const xTranslate = delta.x.translate / treeScale.x;
	const yTranslate = delta.y.translate / treeScale.y;
	const zTranslate = latestTransform?.z || 0;
	if (xTranslate || yTranslate || zTranslate) transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
	/**
	* Apply scale correction for the tree transform.
	* This will apply scale to the screen-orientated axes.
	*/
	if (treeScale.x !== 1 || treeScale.y !== 1) transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
	if (latestTransform) {
		const { transformPerspective, rotate, pathRotation, rotateX, rotateY, skewX, skewY } = latestTransform;
		if (transformPerspective) transform = `perspective(${transformPerspective}px) ${transform}`;
		if (rotate) transform += `rotate(${rotate}deg) `;
		if (pathRotation) transform += `rotate(${pathRotation}deg) `;
		if (rotateX) transform += `rotateX(${rotateX}deg) `;
		if (rotateY) transform += `rotateY(${rotateY}deg) `;
		if (skewX) transform += `skewX(${skewX}deg) `;
		if (skewY) transform += `skewY(${skewY}deg) `;
	}
	/**
	* Apply scale to match the size of the element to the size we want it.
	* This will apply scale to the element-orientated axes.
	*/
	const elementScaleX = delta.x.scale * treeScale.x;
	const elementScaleY = delta.y.scale * treeScale.y;
	if (elementScaleX !== 1 || elementScaleY !== 1) transform += `scale(${elementScaleX}, ${elementScaleY})`;
	return transform || "none";
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var borderLabels = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomLeftRadius",
	"borderBottomRightRadius"
];
var numBorders = borderLabels.length;
var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
	if (shouldCrossfadeOpacity) {
		target.opacity = mixNumber$1(0, lead.opacity ?? 1, easeCrossfadeIn(progress));
		target.opacityExit = mixNumber$1(follow.opacity ?? 1, 0, easeCrossfadeOut(progress));
	} else if (isOnlyMember) target.opacity = mixNumber$1(follow.opacity ?? 1, lead.opacity ?? 1, progress);
	/**
	* Mix border radius
	*/
	for (let i = 0; i < numBorders; i++) {
		const borderLabel = borderLabels[i];
		let followRadius = getRadius(follow, borderLabel);
		let leadRadius = getRadius(lead, borderLabel);
		if (followRadius === void 0 && leadRadius === void 0) continue;
		followRadius || (followRadius = 0);
		leadRadius || (leadRadius = 0);
		if (followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius)) {
			target[borderLabel] = Math.max(mixNumber$1(asNumber(followRadius), asNumber(leadRadius), progress), 0);
			if (percent.test(leadRadius) || percent.test(followRadius)) target[borderLabel] += "%";
		} else target[borderLabel] = leadRadius;
	}
	/**
	* Mix rotation
	*/
	if (follow.rotate || lead.rotate) target.rotate = mixNumber$1(follow.rotate || 0, lead.rotate || 0, progress);
}
function getRadius(values, radiusName) {
	return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /*@__PURE__*/ compress(0, .5, circOut);
var easeCrossfadeOut = /*@__PURE__*/ compress(.5, .95, noop);
function compress(min, max, easing) {
	return (p) => {
		if (p < min) return 0;
		if (p > max) return 1;
		return easing(/* @__PURE__ */ progress(min, max, p));
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes, options) {
	const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
	motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
	return motionValue$1.animation;
}
//#endregion
//#region node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
	target.addEventListener(eventName, handler, options);
	return () => target.removeEventListener(eventName, handler);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs
var FlatTree = class {
	constructor() {
		this.children = [];
		this.isDirty = false;
	}
	add(child) {
		addUniqueItem(this.children, child);
		this.isDirty = true;
	}
	remove(child) {
		removeItem(this.children, child);
		this.isDirty = true;
	}
	forEach(callback) {
		this.isDirty && this.children.sort(compareByDepth);
		this.isDirty = false;
		this.children.forEach(callback);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/delay.mjs
/**
* Timeout defined in ms
*/
function delay(callback, timeout) {
	const start = time.now();
	const checkElapsed = ({ timestamp }) => {
		const elapsed = timestamp - start;
		if (elapsed >= timeout) {
			cancelFrame(checkElapsed);
			callback(elapsed - timeout);
		}
	};
	frame.setup(checkElapsed, true);
	return () => cancelFrame(checkElapsed);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
/**
* If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
*/
function resolveMotionValue(value) {
	return isMotionValue(value) ? value.get() : value;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var NodeStack = class {
	constructor() {
		this.members = [];
	}
	add(node) {
		addUniqueItem(this.members, node);
		for (let i = this.members.length - 1; i >= 0; i--) {
			const member = this.members[i];
			if (member === node || member === this.lead || member === this.prevLead) continue;
			const inst = member.instance;
			if ((!inst || inst.isConnected === false) && !member.snapshot) {
				removeItem(this.members, member);
				member.unmount();
			}
		}
		node.scheduleRender();
	}
	remove(node) {
		removeItem(this.members, node);
		if (node === this.prevLead) this.prevLead = void 0;
		if (node === this.lead) {
			const prevLead = this.members[this.members.length - 1];
			if (prevLead) this.promote(prevLead);
		}
	}
	relegate(node) {
		for (let i = this.members.indexOf(node) - 1; i >= 0; i--) {
			const member = this.members[i];
			if (member.isPresent !== false && member.instance?.isConnected !== false) {
				this.promote(member);
				return true;
			}
		}
		return false;
	}
	promote(node, preserveFollowOpacity) {
		const prevLead = this.lead;
		if (node === prevLead) return;
		this.prevLead = prevLead;
		this.lead = node;
		node.show();
		if (prevLead) {
			prevLead.updateSnapshot();
			node.scheduleRender();
			const { layoutDependency: prevDep } = prevLead.options;
			const { layoutDependency: nextDep } = node.options;
			if (prevDep === void 0 || prevDep !== nextDep) {
				node.resumeFrom = prevLead;
				if (preserveFollowOpacity) prevLead.preserveOpacity = true;
				if (prevLead.snapshot) {
					node.snapshot = prevLead.snapshot;
					node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
				}
				if (node.root?.isUpdating) node.isLayoutDirty = true;
			}
			if (node.options.crossfade === false) prevLead.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((member) => {
			member.options.onExitComplete?.();
			member.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((member) => member.instance && member.scheduleRender(false));
	}
	removeLeadSnapshot() {
		if (this.lead?.snapshot) this.lead.snapshot = void 0;
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/state.mjs
/**
* This should only ever be modified on the client otherwise it'll
* persist through server requests. If we need instanced states we
* could lazy-init via root.
*/
var globalProjectionState = {
	/**
	* Global flag as to whether the tree has animated since the last time
	* we resized the window
	*/
	hasAnimatedSinceResize: true,
	/**
	* We set this to true once, on the first update. Any nodes added to the tree beyond that
	* update will be given a `data-projection-id` attribute.
	*/
	hasEverUpdated: false
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs
var metrics = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
};
var transformAxes = [
	"",
	"X",
	"Y",
	"Z"
];
/**
* We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
* which has a noticeable difference in spring animations
*/
var animationTarget = 1e3;
var id$1 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
	const { latestValues } = visualElement;
	if (latestValues[key]) {
		values[key] = latestValues[key];
		visualElement.setStaticValue(key, 0);
		if (sharedAnimationValues) sharedAnimationValues[key] = 0;
	}
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
	projectionNode.hasCheckedOptimisedAppear = true;
	if (projectionNode.root === projectionNode) return;
	const { visualElement } = projectionNode.options;
	if (!visualElement) return;
	const appearId = getOptimisedAppearId(visualElement);
	if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
		const { layout, layoutId } = projectionNode.options;
		window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout || layoutId));
	}
	const { parent } = projectionNode;
	if (parent && !parent.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(parent);
}
function createProjectionNode$1({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
	return class ProjectionNode {
		constructor(latestValues = {}, parent = defaultParent?.()) {
			/**
			* A unique ID generated for every projection node.
			*/
			this.id = id$1++;
			/**
			* An id that represents a unique session instigated by startUpdate.
			*/
			this.animationId = 0;
			this.animationCommitId = 0;
			/**
			* A Set containing all this component's children. This is used to iterate
			* through the children.
			*
			* TODO: This could be faster to iterate as a flat array stored on the root node.
			*/
			this.children = /* @__PURE__ */ new Set();
			/**
			* Options for the node. We use this to configure what kind of layout animations
			* we should perform (if any).
			*/
			this.options = {};
			/**
			* We use this to detect when its safe to shut down part of a projection tree.
			* We have to keep projecting children for scale correction and relative projection
			* until all their parents stop performing layout animations.
			*/
			this.isTreeAnimating = false;
			this.isAnimationBlocked = false;
			/**
			* Flag to true if we think this layout has been changed. We can't always know this,
			* currently we set it to true every time a component renders, or if it has a layoutDependency
			* if that has changed between renders. Additionally, components can be grouped by LayoutGroup
			* and if one node is dirtied, they all are.
			*/
			this.isLayoutDirty = false;
			/**
			* Flag to true if we think the projection calculations for this node needs
			* recalculating as a result of an updated transform or layout animation.
			*/
			this.isProjectionDirty = false;
			/**
			* Flag to true if the layout *or* transform has changed. This then gets propagated
			* throughout the projection tree, forcing any element below to recalculate on the next frame.
			*/
			this.isSharedProjectionDirty = false;
			/**
			* Flag transform dirty. This gets propagated throughout the whole tree but is only
			* respected by shared nodes.
			*/
			this.isTransformDirty = false;
			/**
			* Block layout updates for instant layout transitions throughout the tree.
			*/
			this.updateManuallyBlocked = false;
			this.updateBlockedByResize = false;
			/**
			* Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
			* call.
			*/
			this.isUpdating = false;
			/**
			* If this is an SVG element we currently disable projection transforms
			*/
			this.isSVG = false;
			/**
			* Flag to true (during promotion) if a node doing an instant layout transition needs to reset
			* its projection styles.
			*/
			this.needsReset = false;
			/**
			* Flags whether this node should have its transform reset prior to measuring.
			*/
			this.shouldResetTransform = false;
			/**
			* Store whether this node has been checked for optimised appear animations. As
			* effects fire bottom-up, and we want to look up the tree for appear animations,
			* this makes sure we only check each path once, stopping at nodes that
			* have already been checked.
			*/
			this.hasCheckedOptimisedAppear = false;
			/**
			* An object representing the calculated contextual/accumulated/tree scale.
			* This will be used to scale calculcated projection transforms, as these are
			* calculated in screen-space but need to be scaled for elements to layoutly
			* make it to their calculated destinations.
			*
			* TODO: Lazy-init
			*/
			this.treeScale = {
				x: 1,
				y: 1
			};
			/**
			*
			*/
			this.eventHandlers = /* @__PURE__ */ new Map();
			this.hasTreeAnimated = false;
			this.layoutVersion = 0;
			this.updateScheduled = false;
			this.scheduleUpdate = () => this.update();
			this.projectionUpdateScheduled = false;
			this.checkUpdateFailed = () => {
				if (this.isUpdating) {
					this.isUpdating = false;
					this.clearAllSnapshots();
				}
			};
			/**
			* This is a multi-step process as shared nodes might be of different depths. Nodes
			* are sorted by depth order, so we need to resolve the entire tree before moving to
			* the next step.
			*/
			this.updateProjection = () => {
				this.projectionUpdateScheduled = false;
				/**
				* Reset debug counts. Manually resetting rather than creating a new
				* object each frame.
				*/
				if (statsBuffer.value) metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
				this.nodes.forEach(propagateDirtyNodes);
				this.nodes.forEach(resolveTargetDelta);
				this.nodes.forEach(calcProjection);
				this.nodes.forEach(cleanDirtyNodes);
				if (statsBuffer.addProjectionMetrics) statsBuffer.addProjectionMetrics(metrics);
			};
			/**
			* Frame calculations
			*/
			this.resolvedRelativeTargetAt = 0;
			this.linkedParentVersion = 0;
			this.hasProjected = false;
			this.isVisible = true;
			this.animationProgress = 0;
			/**
			* Shared layout
			*/
			this.sharedNodes = /* @__PURE__ */ new Map();
			this.latestValues = latestValues;
			this.root = parent ? parent.root || parent : this;
			this.path = parent ? [...parent.path, parent] : [];
			this.parent = parent;
			this.depth = parent ? parent.depth + 1 : 0;
			for (let i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = true;
			if (this.root === this) this.nodes = new FlatTree();
		}
		addEventListener(name, handler) {
			if (!this.eventHandlers.has(name)) this.eventHandlers.set(name, new SubscriptionManager());
			return this.eventHandlers.get(name).add(handler);
		}
		notifyListeners(name, ...args) {
			const subscriptionManager = this.eventHandlers.get(name);
			subscriptionManager && subscriptionManager.notify(...args);
		}
		hasListeners(name) {
			return this.eventHandlers.has(name);
		}
		/**
		* Lifecycles
		*/
		mount(instance) {
			if (this.instance) return;
			this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
			this.instance = instance;
			const { layoutId, layout, visualElement } = this.options;
			if (visualElement && !visualElement.current) visualElement.mount(instance);
			this.root.nodes.add(this);
			this.parent && this.parent.children.add(this);
			if (this.root.hasTreeAnimated && (layout || layoutId)) this.isLayoutDirty = true;
			if (attachResizeListener) {
				let cancelDelay;
				let innerWidth = 0;
				const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
				frame.read(() => {
					innerWidth = window.innerWidth;
				});
				attachResizeListener(instance, () => {
					const newInnerWidth = window.innerWidth;
					if (newInnerWidth === innerWidth) return;
					innerWidth = newInnerWidth;
					this.root.updateBlockedByResize = true;
					cancelDelay && cancelDelay();
					cancelDelay = delay(resizeUnblockUpdate, 250);
					if (globalProjectionState.hasAnimatedSinceResize) {
						globalProjectionState.hasAnimatedSinceResize = false;
						this.nodes.forEach(finishAnimation);
					}
				});
			}
			if (layoutId) this.root.registerSharedNode(layoutId, this);
			if (this.options.animate !== false && visualElement && (layoutId || layout)) this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0;
					this.relativeTarget = void 0;
					return;
				}
				const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
				const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
				/**
				* The target layout of the element might stay the same,
				* but its position relative to its parent has changed.
				*/
				const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
				/**
				* If the layout hasn't seemed to have changed, it might be that the
				* element is visually in the same place in the document but its position
				* relative to its parent has indeed changed. So here we check for that.
				*/
				const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
				if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
					if (this.resumeFrom) {
						this.resumingFrom = this.resumeFrom;
						this.resumingFrom.resumingFrom = void 0;
					}
					const animationOptions = {
						...getValueTransition(layoutTransition, "layout"),
						onPlay: onLayoutAnimationStart,
						onComplete: onLayoutAnimationComplete
					};
					if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
						animationOptions.delay = 0;
						animationOptions.type = false;
					}
					this.startAnimation(animationOptions);
					/**
					* Set animation origin after starting animation to avoid layout jump
					* caused by stopping previous layout animation
					*/
					this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged, animationOptions.path);
				} else {
					/**
					* If the layout hasn't changed and we have an animation that hasn't started yet,
					* finish it immediately. Otherwise it will be animating from a location
					* that was probably never committed to screen and look like a jumpy box.
					*/
					if (!hasLayoutChanged) finishAnimation(this);
					if (this.isLead() && this.options.onExitComplete) this.options.onExitComplete();
				}
				this.targetLayout = newLayout;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate();
			this.root.nodes.remove(this);
			const stack = this.getStack();
			stack && stack.remove(this);
			this.parent && this.parent.children.delete(this);
			this.instance = void 0;
			this.eventHandlers.clear();
			cancelFrame(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = true;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = false;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
		}
		startUpdate() {
			if (this.isUpdateBlocked()) return;
			this.isUpdating = true;
			this.nodes && this.nodes.forEach(resetSkewAndRotation);
			this.animationId++;
		}
		getTransformTemplate() {
			const { visualElement } = this.options;
			return visualElement && visualElement.getProps().transformTemplate;
		}
		willUpdate(shouldNotifyListeners = true) {
			this.root.hasTreeAnimated = true;
			if (this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			/**
			* If we're running optimised appear animations then these must be
			* cancelled before measuring the DOM. This is so we can measure
			* the true layout of the element rather than the WAAPI animation
			* which will be unaffected by the resetSkewAndRotate step.
			*
			* Note: This is a DOM write. Worst case scenario is this is sandwiched
			* between other snapshot reads which will cause unnecessary style recalculations.
			* This has to happen here though, as we don't yet know which nodes will need
			* snapshots in startUpdate(), but we only want to cancel optimised animations
			* if a layout animation measurement is actually going to be affected by them.
			*/
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(this);
			!this.root.isUpdating && this.root.startUpdate();
			if (this.isLayoutDirty) return;
			this.isLayoutDirty = true;
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				node.shouldResetTransform = true;
				/**
				* Percentage translates resolve against layoutBox dimensions,
				* so ancestors with them must be re-measured after transform reset.
				*/
				if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") node.isLayoutDirty = true;
				node.updateScroll("snapshot");
				if (node.options.layoutRoot) node.willUpdate(false);
			}
			const { layoutId, layout } = this.options;
			if (layoutId === void 0 && !layout) return;
			const transformTemplate = this.getTransformTemplate();
			this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
			this.updateSnapshot();
			shouldNotifyListeners && this.notifyListeners("willUpdate");
		}
		update() {
			this.updateScheduled = false;
			if (this.isUpdateBlocked()) {
				const wasBlockedByResize = this.updateBlockedByResize;
				this.unblockUpdate();
				this.updateBlockedByResize = false;
				this.clearAllSnapshots();
				/**
				* When blocked by resize, still measure layouts so
				* callbacks like onLayoutMeasure fire (e.g. Reorder).
				* Skip notifyLayoutUpdate to prevent animations.
				*/
				if (wasBlockedByResize) this.nodes.forEach(forceLayoutMeasure);
				this.nodes.forEach(clearMeasurements);
				return;
			}
			/**
			* If this is a repeat of didUpdate then ignore the animation.
			*/
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(clearIsLayoutDirty);
				return;
			}
			this.animationCommitId = this.animationId;
			if (!this.isUpdating) this.nodes.forEach(clearIsLayoutDirty);
			else {
				this.isUpdating = false;
				/**
				* Ensure animation-blocked nodes (e.g. during drag)
				* get measured even when memoized (willUpdate skipped).
				*/
				this.nodes.forEach(ensureDraggedNodesSnapshotted);
				/**
				* Write
				*/
				this.nodes.forEach(resetTransformStyle);
				/**
				* Read ==================
				*/
				this.nodes.forEach(updateLayout);
				/**
				* Write
				*/
				this.nodes.forEach(notifyLayoutUpdate);
			}
			this.clearAllSnapshots();
			/**
			* Manually flush any pending updates. Ideally
			* we could leave this to the following requestAnimationFrame but this seems
			* to leave a flash of incorrectly styled content.
			*/
			const now = time.now();
			frameData.delta = clamp(0, 1e3 / 60, now - frameData.timestamp);
			frameData.timestamp = now;
			frameData.isProcessing = true;
			frameSteps.update.process(frameData);
			frameSteps.preRender.process(frameData);
			frameSteps.render.process(frameData);
			frameData.isProcessing = false;
		}
		didUpdate() {
			if (!this.updateScheduled) {
				this.updateScheduled = true;
				microtask.read(this.scheduleUpdate);
			}
		}
		clearAllSnapshots() {
			this.nodes.forEach(clearSnapshot);
			this.sharedNodes.forEach(removeLeadSnapshots);
		}
		scheduleUpdateProjection() {
			if (!this.projectionUpdateScheduled) {
				this.projectionUpdateScheduled = true;
				frame.preRender(this.updateProjection, false, true);
			}
		}
		scheduleCheckAfterUnmount() {
			/**
			* If the unmounting node is in a layoutGroup and did trigger a willUpdate,
			* we manually call didUpdate to give a chance to the siblings to animate.
			* Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
			*/
			frame.postRender(() => {
				if (this.isLayoutDirty) this.root.didUpdate();
				else this.root.checkUpdateFailed();
			});
		}
		/**
		* Update measurements
		*/
		updateSnapshot() {
			if (this.snapshot || !this.instance) return;
			this.snapshot = this.measure();
			if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) this.snapshot = void 0;
		}
		updateLayout() {
			if (!this.instance) return;
			this.updateScroll();
			if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) return;
			/**
			* When a node is mounted, it simply resumes from the prevLead's
			* snapshot instead of taking a new one, but the ancestors scroll
			* might have updated while the prevLead is unmounted. We need to
			* update the scroll again to make sure the layout we measure is
			* up to date.
			*/
			if (this.resumeFrom && !this.resumeFrom.instance) for (let i = 0; i < this.path.length; i++) this.path[i].updateScroll();
			const prevLayout = this.layout;
			this.layout = this.measure(false);
			this.layoutVersion++;
			if (!this.layoutCorrected) this.layoutCorrected = createBox();
			this.isLayoutDirty = false;
			this.projectionDelta = void 0;
			this.notifyListeners("measure", this.layout.layoutBox);
			const { visualElement } = this.options;
			visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
		}
		updateScroll(phase = "measure") {
			let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) needsMeasurement = false;
			if (needsMeasurement && this.instance) {
				const isRoot = checkIsScrollRoot(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase,
					isRoot,
					offset: measureScroll(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : isRoot
				};
			}
		}
		resetTransform() {
			if (!resetTransform) return;
			const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
			const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
			const transformTemplate = this.getTransformTemplate();
			const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
			const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
			if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
				resetTransform(this.instance, transformTemplateValue);
				this.shouldResetTransform = false;
				this.scheduleRender();
			}
		}
		measure(removeTransform = true) {
			const pageBox = this.measurePageBox();
			let layoutBox = this.removeElementScroll(pageBox);
			/**
			* Measurements taken during the pre-render stage
			* still have transforms applied so we remove them
			* via calculation.
			*/
			if (removeTransform) layoutBox = this.removeTransform(layoutBox);
			roundBox(layoutBox);
			return {
				animationId: this.root.animationId,
				measuredBox: pageBox,
				layoutBox,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			const { visualElement } = this.options;
			if (!visualElement) return createBox();
			const box = visualElement.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot))) {
				const { scroll } = this.root;
				if (scroll) {
					translateAxis(box.x, scroll.offset.x);
					translateAxis(box.y, scroll.offset.y);
				}
			}
			return box;
		}
		removeElementScroll(box) {
			const boxWithoutScroll = createBox();
			copyBoxInto(boxWithoutScroll, box);
			if (this.scroll?.wasRoot) return boxWithoutScroll;
			/**
			* Performance TODO: Keep a cumulative scroll offset down the tree
			* rather than loop back up the path.
			*/
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				const { scroll, options } = node;
				if (node !== this.root && scroll && options.layoutScroll) {
					/**
					* If this is a new scroll root, we want to remove all previous scrolls
					* from the viewport box.
					*/
					if (scroll.wasRoot) copyBoxInto(boxWithoutScroll, box);
					translateAxis(boxWithoutScroll.x, scroll.offset.x);
					translateAxis(boxWithoutScroll.y, scroll.offset.y);
				}
			}
			return boxWithoutScroll;
		}
		applyTransform(box, transformOnly = false, output) {
			const withTransforms = output || createBox();
			copyBoxInto(withTransforms, box);
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
					translateAxis(withTransforms.x, -node.scroll.offset.x);
					translateAxis(withTransforms.y, -node.scroll.offset.y);
				}
				if (!hasTransform(node.latestValues)) continue;
				transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
			}
			if (hasTransform(this.latestValues)) transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
			return withTransforms;
		}
		removeTransform(box) {
			const boxWithoutTransform = createBox();
			copyBoxInto(boxWithoutTransform, box);
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				if (!hasTransform(node.latestValues)) continue;
				let sourceBox;
				if (node.instance) {
					hasScale(node.latestValues) && node.updateSnapshot();
					sourceBox = createBox();
					copyBoxInto(sourceBox, node.measurePageBox());
				}
				removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
			}
			if (hasTransform(this.latestValues)) removeBoxTransforms(boxWithoutTransform, this.latestValues);
			return boxWithoutTransform;
		}
		setTargetDelta(delta) {
			this.targetDelta = delta;
			this.root.scheduleUpdateProjection();
			this.isProjectionDirty = true;
		}
		setOptions(options) {
			this.options = {
				...this.options,
				...options,
				crossfade: options.crossfade !== void 0 ? options.crossfade : true
			};
		}
		clearMeasurements() {
			this.scroll = void 0;
			this.layout = void 0;
			this.snapshot = void 0;
			this.prevTransformTemplateValue = void 0;
			this.targetDelta = void 0;
			this.target = void 0;
			this.isLayoutDirty = false;
		}
		forceRelativeParentToResolveTarget() {
			if (!this.relativeParent) return;
			/**
			* If the parent target isn't up-to-date, force it to update.
			* This is an unfortunate de-optimisation as it means any updating relative
			* projection will cause all the relative parents to recalculate back
			* up the tree.
			*/
			if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) this.relativeParent.resolveTargetDelta(true);
		}
		resolveTargetDelta(forceRecalculation = false) {
			/**
			* Once the dirty status of nodes has been spread through the tree, we also
			* need to check if we have a shared node of a different depth that has itself
			* been dirtied.
			*/
			const lead = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
			this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
			this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			if (!(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			const { layout, layoutId } = this.options;
			/**
			* If we have no layout, we can't perform projection, so early return
			*/
			if (!this.layout || !(layout || layoutId)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			const relativeParent = this.getClosestProjectingParent();
			if (relativeParent && this.linkedParentVersion !== relativeParent.layoutVersion && !relativeParent.options.layoutRoot) this.removeRelativeTarget();
			/**
			* If we don't have a targetDelta but do have a layout, we can attempt to resolve
			* a relativeParent. This will allow a component to perform scale correction
			* even if no animation has started.
			*/
			if (!this.targetDelta && !this.relativeTarget) if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
			else this.removeRelativeTarget();
			/**
			* If we have no relative target or no target delta our target isn't valid
			* for this frame.
			*/
			if (!this.relativeTarget && !this.targetDelta) return;
			/**
			* Lazy-init target data structure
			*/
			if (!this.target) {
				this.target = createBox();
				this.targetWithTransforms = createBox();
			}
			/**
			* If we've got a relative box for this component, resolve it into a target relative to the parent.
			*/
			if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
				this.forceRelativeParentToResolveTarget();
				calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0);
			} else if (this.targetDelta) {
				if (Boolean(this.resumingFrom)) this.applyTransform(this.layout.layoutBox, false, this.target);
				else copyBoxInto(this.target, this.layout.layoutBox);
				applyBoxDelta(this.target, this.targetDelta);
			} else
 /**
			* If no target, use own layout as target
			*/
			copyBoxInto(this.target, this.layout.layoutBox);
			/**
			* If we've been told to attempt to resolve a relative target, do so.
			*/
			if (this.attemptToResolveRelativeTarget) {
				this.attemptToResolveRelativeTarget = false;
				if (this.options.layoutAnchor !== false && relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
				else this.relativeParent = this.relativeTarget = void 0;
			}
			/**
			* Increase debug counter for resolved target deltas
			*/
			if (statsBuffer.value) metrics.calculatedTargetDeltas++;
		}
		getClosestProjectingParent() {
			if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) return;
			if (this.parent.isProjecting()) return this.parent;
			else return this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(relativeParent, layout, parentLayout) {
			this.relativeParent = relativeParent;
			this.linkedParentVersion = relativeParent.layoutVersion;
			this.forceRelativeParentToResolveTarget();
			this.relativeTarget = createBox();
			this.relativeTargetOrigin = createBox();
			calcRelativePosition(this.relativeTargetOrigin, layout, parentLayout, this.options.layoutAnchor || void 0);
			copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			const lead = this.getLead();
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			let canSkip = true;
			/**
			* If this is a normal layout animation and neither this node nor its nearest projecting
			* is dirty then we can't skip.
			*/
			if (this.isProjectionDirty || this.parent?.isProjectionDirty) canSkip = false;
			/**
			* If this is a shared layout animation and this node's shared projection is dirty then
			* we can't skip.
			*/
			if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) canSkip = false;
			/**
			* If we have resolved the target this frame we must recalculate the
			* projection to ensure it visually represents the internal calculations.
			*/
			if (this.resolvedRelativeTargetAt === frameData.timestamp) canSkip = false;
			if (canSkip) return;
			const { layout, layoutId } = this.options;
			/**
			* If this section of the tree isn't animating we can
			* delete our target sources for the following frame.
			*/
			this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
			if (!this.isTreeAnimating) this.targetDelta = this.relativeTarget = void 0;
			if (!this.layout || !(layout || layoutId)) return;
			/**
			* Reset the corrected box with the latest values from box, as we're then going
			* to perform mutative operations on it.
			*/
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			/**
			* Record previous tree scales before updating.
			*/
			const prevTreeScaleX = this.treeScale.x;
			const prevTreeScaleY = this.treeScale.y;
			/**
			* Apply all the parent deltas to this box to produce the corrected box. This
			* is the layout box, as it will appear on screen as a result of the transforms of its parents.
			*/
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
			/**
			* If this layer needs to perform scale correction but doesn't have a target,
			* use the layout as the target.
			*/
			if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
				lead.target = lead.layout.layoutBox;
				lead.targetWithTransforms = createBox();
			}
			const { target } = lead;
			if (!target) {
				/**
				* If we don't have a target to project into, but we were previously
				* projecting, we want to remove the stored transform and schedule
				* a render to ensure the elements reflect the removed transform.
				*/
				if (this.prevProjectionDelta) {
					this.createProjectionDeltas();
					this.scheduleRender();
				}
				return;
			}
			if (!this.projectionDelta || !this.prevProjectionDelta) this.createProjectionDeltas();
			else {
				copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
				copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
			}
			/**
			* Update the delta between the corrected box and the target box before user-set transforms were applied.
			* This will allow us to calculate the corrected borderRadius and boxShadow to compensate
			* for our layout reprojection, but still allow them to be scaled correctly by the user.
			* It might be that to simplify this we may want to accept that user-set scale is also corrected
			* and we wouldn't have to keep and calc both deltas, OR we could support a user setting
			* to allow people to choose whether these styles are corrected based on just the
			* layout reprojection or the final bounding box.
			*/
			calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
			if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
				this.hasProjected = true;
				this.scheduleRender();
				this.notifyListeners("projectionUpdate", target);
			}
			/**
			* Increase debug counter for recalculated projections
			*/
			if (statsBuffer.value) metrics.calculatedProjections++;
		}
		hide() {
			this.isVisible = false;
		}
		show() {
			this.isVisible = true;
		}
		scheduleRender(notifyAll = true) {
			this.options.visualElement?.scheduleRender();
			if (notifyAll) {
				const stack = this.getStack();
				stack && stack.scheduleRender();
			}
			if (this.resumingFrom && !this.resumingFrom.instance) this.resumingFrom = void 0;
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = createDelta();
			this.projectionDelta = createDelta();
			this.projectionDeltaWithTransform = createDelta();
		}
		setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false, pathFn) {
			const snapshot = this.snapshot;
			const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
			const mixedValues = { ...this.latestValues };
			const targetDelta = createDelta();
			if (!this.relativeParent || !this.relativeParent.options.layoutRoot) this.relativeTarget = this.relativeTargetOrigin = void 0;
			this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
			const relativeLayout = createBox();
			const isSharedLayoutAnimation = (snapshot ? snapshot.source : void 0) !== (this.layout ? this.layout.source : void 0);
			const stack = this.getStack();
			const isOnlyMember = !stack || stack.members.length <= 1;
			const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let prevRelativeTarget;
			const interpolate = pathFn?.interpolateProjection(delta);
			this.mixTargetDelta = (latest) => {
				const progress = latest / 1e3;
				const point = interpolate?.(progress);
				if (point) {
					targetDelta.x.translate = point.x;
					targetDelta.x.scale = mixNumber$1(delta.x.scale, 1, progress);
					targetDelta.x.origin = delta.x.origin;
					targetDelta.x.originPoint = delta.x.originPoint;
					targetDelta.y.translate = point.y;
					targetDelta.y.scale = mixNumber$1(delta.y.scale, 1, progress);
					targetDelta.y.origin = delta.y.origin;
					targetDelta.y.originPoint = delta.y.originPoint;
				} else {
					mixAxisDeltaLinear(targetDelta.x, delta.x, progress);
					mixAxisDeltaLinear(targetDelta.y, delta.y, progress);
				}
				this.setTargetDelta(targetDelta);
				if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
					calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0);
					mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
					/**
					* If this is an unchanged relative target we can consider the
					* projection not dirty.
					*/
					if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) this.isProjectionDirty = false;
					if (!prevRelativeTarget) prevRelativeTarget = createBox();
					copyBoxInto(prevRelativeTarget, this.relativeTarget);
				}
				if (isSharedLayoutAnimation) {
					this.animationValues = mixedValues;
					mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
				}
				if (point && point.rotate !== void 0) {
					if (!this.animationValues) this.animationValues = mixedValues;
					this.animationValues.pathRotation = point.rotate;
				}
				this.root.scheduleUpdateProjection();
				this.scheduleRender();
				this.animationProgress = progress;
			};
			this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(options) {
			this.notifyListeners("animationStart");
			this.currentAnimation?.stop();
			this.resumingFrom?.currentAnimation?.stop();
			if (this.pendingAnimation) {
				cancelFrame(this.pendingAnimation);
				this.pendingAnimation = void 0;
			}
			/**
			* Start the animation in the next frame to have a frame with progress 0,
			* where the target is the same as when the animation started, so we can
			* calculate the relative positions correctly for instant transitions.
			*/
			this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = true;
				activeAnimations.layout++;
				this.motionValue || (this.motionValue = motionValue(0));
				this.motionValue.jump(0, false);
				this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
					...options,
					velocity: 0,
					isSync: true,
					onUpdate: (latest) => {
						this.mixTargetDelta(latest);
						options.onUpdate && options.onUpdate(latest);
					},
					onStop: () => {
						activeAnimations.layout--;
					},
					onComplete: () => {
						activeAnimations.layout--;
						options.onComplete && options.onComplete();
						this.completeAnimation();
					}
				});
				if (this.resumingFrom) this.resumingFrom.currentAnimation = this.currentAnimation;
				this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			if (this.resumingFrom) {
				this.resumingFrom.currentAnimation = void 0;
				this.resumingFrom.preserveOpacity = void 0;
			}
			const stack = this.getStack();
			stack && stack.exitAnimationComplete();
			this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
			this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			if (this.currentAnimation) {
				this.mixTargetDelta && this.mixTargetDelta(animationTarget);
				this.currentAnimation.stop();
			}
			this.completeAnimation();
		}
		applyTransformsToTarget() {
			const lead = this.getLead();
			let { targetWithTransforms, target, layout, latestValues } = lead;
			if (!targetWithTransforms || !target || !layout) return;
			/**
			* If we're only animating position, and this element isn't the lead element,
			* then instead of projecting into the lead box we instead want to calculate
			* a new target that aligns the two boxes but maintains the layout shape.
			*/
			if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
				target = this.target || createBox();
				const xLength = calcLength(this.layout.layoutBox.x);
				target.x.min = lead.target.x.min;
				target.x.max = target.x.min + xLength;
				const yLength = calcLength(this.layout.layoutBox.y);
				target.y.min = lead.target.y.min;
				target.y.max = target.y.min + yLength;
			}
			copyBoxInto(targetWithTransforms, target);
			/**
			* Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
			* This is the final box that we will then project into by calculating a transform delta and
			* applying it to the corrected box.
			*/
			transformBox(targetWithTransforms, latestValues);
			/**
			* Update the delta between the corrected box and the final target box, after
			* user-set transforms are applied to it. This will be used by the renderer to
			* create a transform style that will reproject the element from its layout layout
			* into the desired bounding box.
			*/
			calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
		}
		registerSharedNode(layoutId, node) {
			if (!this.sharedNodes.has(layoutId)) this.sharedNodes.set(layoutId, new NodeStack());
			this.sharedNodes.get(layoutId).add(node);
			const config = node.options.initialPromotionConfig;
			node.promote({
				transition: config ? config.transition : void 0,
				preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
			});
		}
		isLead() {
			const stack = this.getStack();
			return stack ? stack.lead === this : true;
		}
		getLead() {
			const { layoutId } = this.options;
			return layoutId ? this.getStack()?.lead || this : this;
		}
		getPrevLead() {
			const { layoutId } = this.options;
			return layoutId ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			const { layoutId } = this.options;
			if (layoutId) return this.root.sharedNodes.get(layoutId);
		}
		promote({ needsReset, transition, preserveFollowOpacity } = {}) {
			const stack = this.getStack();
			if (stack) stack.promote(this, preserveFollowOpacity);
			if (needsReset) {
				this.projectionDelta = void 0;
				this.needsReset = true;
			}
			if (transition) this.setOptions({ transition });
		}
		relegate() {
			const stack = this.getStack();
			if (stack) return stack.relegate(this);
			else return false;
		}
		resetSkewAndRotation() {
			const { visualElement } = this.options;
			if (!visualElement) return;
			let hasDistortingTransform = false;
			/**
			* An unrolled check for rotation values. Most elements don't have any rotation and
			* skipping the nested loop and new object creation is 50% faster.
			*/
			const { latestValues } = visualElement;
			if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) hasDistortingTransform = true;
			if (!hasDistortingTransform) return;
			const resetValues = {};
			if (latestValues.z) resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
			for (let i = 0; i < transformAxes.length; i++) {
				resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
				resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
			}
			visualElement.render();
			for (const key in resetValues) {
				visualElement.setStaticValue(key, resetValues[key]);
				if (this.animationValues) this.animationValues[key] = resetValues[key];
			}
			visualElement.scheduleRender();
		}
		applyProjectionStyles(targetStyle, styleProp) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				targetStyle.visibility = "hidden";
				return;
			}
			const transformTemplate = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = false;
				targetStyle.visibility = "";
				targetStyle.opacity = "";
				targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
				targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
				return;
			}
			const lead = this.getLead();
			if (!this.projectionDelta || !this.layout || !lead.target) {
				if (this.options.layoutId) {
					targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
					targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
				}
				if (this.hasProjected && !hasTransform(this.latestValues)) {
					targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
					this.hasProjected = false;
				}
				return;
			}
			targetStyle.visibility = "";
			const valuesToRender = lead.animationValues || lead.latestValues;
			this.applyTransformsToTarget();
			let transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
			if (transformTemplate) transform = transformTemplate(valuesToRender, transform);
			targetStyle.transform = transform;
			const { x, y } = this.projectionDelta;
			targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
			if (lead.animationValues)
 /**
			* If the lead component is animating, assign this either the entering/leaving
			* opacity
			*/
			targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
			else
 /**
			* Or we're not animating at all, set the lead component to its layout
			* opacity and other components to hidden.
			*/
			targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
			/**
			* Apply scale correction
			*/
			for (const key in scaleCorrectors) {
				if (valuesToRender[key] === void 0) continue;
				const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
				/**
				* Only apply scale correction to the value if we have an
				* active projection transform. Otherwise these values become
				* vulnerable to distortion if the element changes size without
				* a corresponding layout animation.
				*/
				const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
				if (applyTo) {
					const num = applyTo.length;
					for (let i = 0; i < num; i++) targetStyle[applyTo[i]] = corrected;
				} else if (isCSSVariable) this.options.visualElement.renderState.vars[key] = corrected;
				else targetStyle[key] = corrected;
			}
			/**
			* Disable pointer events on follow components. This is to ensure
			* that if a follow component covers a lead component it doesn't block
			* pointer events on the lead.
			*/
			if (this.options.layoutId) targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((node) => node.currentAnimation?.stop());
			this.root.nodes.forEach(clearMeasurements);
			this.root.sharedNodes.clear();
		}
	};
}
function updateLayout(node) {
	node.updateLayout();
}
function notifyLayoutUpdate(node) {
	const snapshot = node.resumeFrom?.snapshot || node.snapshot;
	if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
		const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
		const { animationType } = node.options;
		const isShared = snapshot.source !== node.layout.source;
		if (animationType === "size") eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length = calcLength(axisSnapshot);
			axisSnapshot.min = layout[axis].min;
			axisSnapshot.max = axisSnapshot.min + length;
		});
		else if (animationType === "x" || animationType === "y") {
			const snapAxis = animationType === "x" ? "y" : "x";
			copyAxisInto(isShared ? snapshot.measuredBox[snapAxis] : snapshot.layoutBox[snapAxis], layout[snapAxis]);
		} else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length = calcLength(layout[axis]);
			axisSnapshot.max = axisSnapshot.min + length;
			/**
			* Ensure relative target gets resized and rerendererd
			*/
			if (node.relativeTarget && !node.currentAnimation) {
				node.isProjectionDirty = true;
				node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
			}
		});
		const layoutDelta = createDelta();
		calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
		const visualDelta = createDelta();
		if (isShared) calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
		else calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
		const hasLayoutChanged = !isDeltaZero(layoutDelta);
		let hasRelativeLayoutChanged = false;
		if (!node.resumeFrom) {
			const relativeParent = node.getClosestProjectingParent();
			/**
			* If the relativeParent is itself resuming from a different element then
			* the relative snapshot is not relavent
			*/
			if (relativeParent && !relativeParent.resumeFrom) {
				const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
				if (parentSnapshot && parentLayout) {
					const anchor = node.options.layoutAnchor || void 0;
					const relativeSnapshot = createBox();
					calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
					const relativeLayout = createBox();
					calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox, anchor);
					if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) hasRelativeLayoutChanged = true;
					if (relativeParent.options.layoutRoot) {
						node.relativeTarget = relativeLayout;
						node.relativeTargetOrigin = relativeSnapshot;
						node.relativeParent = relativeParent;
					}
				}
			}
		}
		node.notifyListeners("didUpdate", {
			layout,
			snapshot,
			delta: visualDelta,
			layoutDelta,
			hasLayoutChanged,
			hasRelativeLayoutChanged
		});
	} else if (node.isLead()) {
		const { onExitComplete } = node.options;
		onExitComplete && onExitComplete();
	}
	/**
	* Clearing transition
	* TODO: Investigate why this transition is being passed in as {type: false } from Framer
	* and why we need it at all
	*/
	node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
	/**
	* Increase debug counter for nodes encountered this frame
	*/
	if (statsBuffer.value) metrics.nodes++;
	if (!node.parent) return;
	/**
	* If this node isn't projecting, propagate isProjectionDirty. It will have
	* no performance impact but it will allow the next child that *is* projecting
	* but *isn't* dirty to just check its parent to see if *any* ancestor needs
	* correcting.
	*/
	if (!node.isProjecting()) node.isProjectionDirty = node.parent.isProjectionDirty;
	/**
	* Propagate isSharedProjectionDirty and isTransformDirty
	* throughout the whole tree. A future revision can take another look at
	* this but for safety we still recalcualte shared nodes.
	*/
	node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
	node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
	node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
	node.clearSnapshot();
}
function clearMeasurements(node) {
	node.clearMeasurements();
}
function forceLayoutMeasure(node) {
	node.isLayoutDirty = true;
	node.updateLayout();
}
function clearIsLayoutDirty(node) {
	node.isLayoutDirty = false;
}
/**
* When a node is animation-blocked (e.g. during drag) and its component
* didn't re-render (memoized), willUpdate() is never called so there's
* no snapshot. Use the previous layout as a snapshot and mark dirty so
* resetTransform/updateLayout/notifyLayoutUpdate process it normally.
*/
function ensureDraggedNodesSnapshotted(node) {
	if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
		node.snapshot = node.layout;
		node.isLayoutDirty = true;
	}
}
function resetTransformStyle(node) {
	const { visualElement } = node.options;
	if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) visualElement.notify("BeforeLayoutMeasure");
	node.resetTransform();
}
function finishAnimation(node) {
	node.finishAnimation();
	node.targetDelta = node.relativeTarget = node.target = void 0;
	node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
	node.resolveTargetDelta();
}
function calcProjection(node) {
	node.calcProjection();
}
function resetSkewAndRotation(node) {
	node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
	stack.removeLeadSnapshot();
}
function mixAxisDeltaLinear(output, delta, p) {
	output.translate = mixNumber$1(delta.translate, 0, p);
	output.scale = mixNumber$1(delta.scale, 1, p);
	output.origin = delta.origin;
	output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
	output.min = mixNumber$1(from.min, to.min, p);
	output.max = mixNumber$1(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
	mixAxis(output.x, from.x, to.x, p);
	mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
	return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
};
var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
/**
* Measured bounding boxes must be rounded in Safari and
* left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
* can appear to jump.
*/
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
	axis.min = roundPoint(axis.min);
	axis.max = roundPoint(axis.max);
}
function roundBox(box) {
	roundAxis(box.x);
	roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
	return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout), .2);
}
function checkNodeWasScrollRoot(node) {
	return node !== node.root && node.scroll?.wasRoot;
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode$1({
	attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => true
});
//#endregion
//#region node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = { current: void 0 };
var HTMLProjectionNode = createProjectionNode$1({
	measureScroll: (instance) => ({
		x: instance.scrollLeft,
		y: instance.scrollTop
	}),
	defaultParent: () => {
		if (!rootProjectionNode.current) {
			const documentNode = new DocumentProjectionNode({});
			documentNode.mount(window);
			documentNode.setOptions({ layoutScroll: true });
			rootProjectionNode.current = documentNode;
		}
		return rootProjectionNode.current;
	},
	resetTransform: (instance, value) => {
		instance.style.transform = value !== void 0 ? value : "none";
	},
	checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
/**
* @public
*/
var MotionConfigContext = (0, import_react.createContext)({
	transformPagePoint: (p) => p,
	isStatic: false,
	reducedMotion: "never"
});
//#endregion
//#region node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
/**
* When a component is the child of `AnimatePresence`, it can use `usePresence`
* to access information about whether it's still present in the React tree.
*
* ```jsx
* import { usePresence } from "framer-motion"
*
* export const Component = () => {
*   const [isPresent, safeToRemove] = usePresence()
*
*   useEffect(() => {
*     !isPresent && setTimeout(safeToRemove, 1000)
*   }, [isPresent])
*
*   return <div />
* }
* ```
*
* If `isPresent` is `false`, it means that a component has been removed from the tree,
* but `AnimatePresence` won't really remove it until `safeToRemove` has been called.
*
* @public
*/
function usePresence(subscribe = true) {
	const context = (0, import_react.useContext)(PresenceContext);
	if (context === null) return [true, null];
	const { isPresent, onExitComplete, register } = context;
	const id = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		if (subscribe) return register(id);
	}, [subscribe]);
	const safeToRemove = (0, import_react.useCallback)(() => subscribe && onExitComplete && onExitComplete(id), [
		id,
		onExitComplete,
		subscribe
	]);
	return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/LazyContext.mjs
var LazyContext = (0, import_react.createContext)({ strict: false });
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
};
var isInitialized = false;
/**
* Initialize feature definitions with isEnabled checks.
* This must be called before any motion components are rendered.
*/
function initFeatureDefinitions() {
	if (isInitialized) return;
	const initialFeatureDefinitions = {};
	for (const key in featureProps) initialFeatureDefinitions[key] = { isEnabled: (props) => featureProps[key].some((name) => !!props[name]) };
	setFeatureDefinitions(initialFeatureDefinitions);
	isInitialized = true;
}
/**
* Get the current feature definitions, initializing if needed.
*/
function getInitializedFeatureDefinitions() {
	initFeatureDefinitions();
	return getFeatureDefinitions();
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
	const featureDefinitions = getInitializedFeatureDefinitions();
	for (const key in features) featureDefinitions[key] = {
		...featureDefinitions[key],
		...features[key]
	};
	setFeatureDefinitions(featureDefinitions);
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
/**
* A list of all valid MotionProps.
*
* @privateRemarks
* This doesn't throw if a `MotionProp` name is missing - it should.
*/
var validMotionProps = new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"variants",
	"transition",
	"transformTemplate",
	"custom",
	"inherit",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"globalTapTarget",
	"propagate",
	"ignoreStrict",
	"viewport"
]);
/**
* Check whether a prop name is a valid `MotionProp` key.
*
* @param key - Name of the property to check
* @returns `true` is key is a valid `MotionProp`.
*
* @public
*/
function isValidMotionProp(key) {
	return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
//#endregion
//#region __vite-optional-peer-dep:@emotion/is-prop-valid:framer-motion
var is_prop_valid_framer_motion_exports = /* @__PURE__ */ __exportAll({ default: () => is_prop_valid_framer_motion_default });
var is_prop_valid_framer_motion_default;
var init_is_prop_valid_framer_motion = __esmMin((() => {
	is_prop_valid_framer_motion_default = {};
	throw new Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`);
}));
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
	if (typeof isValidProp !== "function") return;
	shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
/**
* Emotion and Styled Components both allow users to pass through arbitrary props to their components
* to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
* of these should be passed to the underlying DOM node.
*
* However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
* as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
* passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
* `@emotion/is-prop-valid`, however to fix this problem we need to use it.
*
* By making it an optionalDependency we can offer this functionality only in the situations where it's
* actually required.
*/
try {
	loadExternalIsValidProp((init_is_prop_valid_framer_motion(), __toCommonJS(is_prop_valid_framer_motion_exports)).default);
} catch {}
function filterProps(props, isDom, forwardMotionProps) {
	const filteredProps = {};
	for (const key in props) {
		/**
		* values is considered a valid prop by Emotion, so if it's present
		* this will be rendered out to the DOM unless explicitly filtered.
		*
		* We check the type as it could be used with the `feColorMatrix`
		* element, which we support.
		*/
		if (key === "values" && typeof props.values === "object") continue;
		if (isMotionValue(props[key])) continue;
		if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) filteredProps[key] = props[key];
	}
	return filteredProps;
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var MotionContext = /* @__PURE__ */ (0, import_react.createContext)({});
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
	if (isControllingVariants(props)) {
		const { initial, animate } = props;
		return {
			initial: initial === false || isVariantLabel(initial) ? initial : void 0,
			animate: isVariantLabel(animate) ? animate : void 0
		};
	}
	return props.inherit !== false ? context : {};
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
	const { initial, animate } = getCurrentTreeVariants(props, (0, import_react.useContext)(MotionContext));
	return (0, import_react.useMemo)(() => ({
		initial,
		animate
	}), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
	return Array.isArray(prop) ? prop.join(" ") : prop;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
	for (const key in source) if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) target[key] = source[key];
}
function useInitialMotionValues({ transformTemplate }, visualState) {
	return (0, import_react.useMemo)(() => {
		const state = createHtmlRenderState();
		buildHTMLStyles(state, visualState, transformTemplate);
		return Object.assign({}, state.vars, state.style);
	}, [visualState]);
}
function useStyle(props, visualState) {
	const styleProp = props.style || {};
	const style = {};
	/**
	* Copy non-Motion Values straight into style
	*/
	copyRawValuesOnly(style, styleProp, props);
	Object.assign(style, useInitialMotionValues(props, visualState));
	return style;
}
function useHTMLProps(props, visualState) {
	const htmlProps = {};
	const style = useStyle(props, visualState);
	if (props.drag && props.dragListener !== false) {
		htmlProps.draggable = false;
		style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
		style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
	}
	if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) htmlProps.tabIndex = 0;
	htmlProps.style = style;
	return htmlProps;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component) {
	const visualProps = (0, import_react.useMemo)(() => {
		const state = createSvgRenderState();
		buildSVGAttrs(state, visualState, isSVGTag(Component), props.transformTemplate, props.style);
		return {
			...state.attrs,
			style: { ...state.style }
		};
	}, [visualState]);
	if (props.style) {
		const rawStyles = {};
		copyRawValuesOnly(rawStyles, props.style, props);
		visualProps.style = {
			...rawStyles,
			...visualProps.style
		};
	}
	return visualProps;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
/**
* We keep these listed separately as we use the lowercase tag names as part
* of the runtime bundle to detect SVG components
*/
var lowercaseSVGElements = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component) {
	if (typeof Component !== "string" || Component.includes("-")) return false;
	else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/u.test(Component)) return true;
	return false;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function useRender(Component, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG) {
	const visualProps = (isSVG ?? isSVGComponent(Component) ? useSVGProps : useHTMLProps)(props, latestValues, isStatic, Component);
	const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
	const elementProps = Component !== import_react.Fragment ? {
		...filteredProps,
		...visualProps,
		ref
	} : {};
	/**
	* If component has been handed a motion value as its child,
	* memoise its initial value and render that. Subsequent updates
	* will be handled by the onChange handler
	*/
	const { children } = props;
	const renderedChildren = (0, import_react.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
	return (0, import_react.createElement)(Component, {
		...elementProps,
		children: renderedChildren
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps, createRenderState }, props, context, presenceContext) {
	return {
		latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
		renderState: createRenderState()
	};
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
	const values = {};
	const motionValues = scrapeMotionValues(props, {});
	for (const key in motionValues) values[key] = resolveMotionValue(motionValues[key]);
	let { initial, animate } = props;
	const isControllingVariants$1 = isControllingVariants(props);
	const isVariantNode$1 = isVariantNode(props);
	if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
		if (initial === void 0) initial = context.initial;
		if (animate === void 0) animate = context.animate;
	}
	let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
	isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
	const variantToSet = isInitialAnimationBlocked ? animate : initial;
	if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
		const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
		for (let i = 0; i < list.length; i++) {
			const resolved = resolveVariantFromProps(props, list[i]);
			if (resolved) {
				const { transitionEnd, transition, ...target } = resolved;
				for (const key in target) {
					let valueTarget = target[key];
					if (Array.isArray(valueTarget)) {
						/**
						* Take final keyframe if the initial animation is blocked because
						* we want to initialise at the end of that blocked animation.
						*/
						const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
						valueTarget = valueTarget[index];
					}
					if (valueTarget !== null) values[key] = valueTarget;
				}
				for (const key in transitionEnd) values[key] = transitionEnd[key];
			}
		}
	}
	return values;
}
var makeUseVisualState = (config) => (props, isStatic) => {
	const context = (0, import_react.useContext)(MotionContext);
	const presenceContext = (0, import_react.useContext)(PresenceContext);
	const make = () => makeState(config, props, context, presenceContext);
	return isStatic ? make() : useConstant(make);
};
//#endregion
//#region node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
var useHTMLVisualState = /*@__PURE__*/ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
});
//#endregion
//#region node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
var useSVGVisualState = /*@__PURE__*/ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
});
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
/**
* Creates a ref function that, when called, hydrates the provided
* external ref and VisualElement.
*/
function useMotionRef(visualState, visualElement, externalRef) {
	/**
	* Store externalRef in a ref to avoid including it in the useCallback
	* dependency array. Including externalRef in dependencies causes issues
	* with libraries like Radix UI that create new callback refs on each render
	* when using asChild - this would cause the callback to be recreated,
	* triggering element remounts and breaking AnimatePresence exit animations.
	*/
	const externalRefContainer = (0, import_react.useRef)(externalRef);
	(0, import_react.useInsertionEffect)(() => {
		externalRefContainer.current = externalRef;
	});
	const refCleanup = (0, import_react.useRef)(null);
	return (0, import_react.useCallback)((instance) => {
		if (instance) visualState.onMount?.(instance);
		if (visualElement) instance ? visualElement.mount(instance) : visualElement.unmount();
		const ref = externalRefContainer.current;
		if (typeof ref === "function") if (instance) {
			const cleanup = ref(instance);
			if (typeof cleanup === "function") refCleanup.current = cleanup;
		} else if (refCleanup.current) {
			refCleanup.current();
			refCleanup.current = null;
		} else ref(instance);
		else if (ref) ref.current = instance;
	}, [visualElement]);
}
//#endregion
//#region node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
/**
* Internal, exported only for usage in Framer
*/
var SwitchLayoutGroupContext = (0, import_react.createContext)({});
//#endregion
//#region node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
	return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
	const { visualElement: parent } = (0, import_react.useContext)(MotionContext);
	const lazyContext = (0, import_react.useContext)(LazyContext);
	const presenceContext = (0, import_react.useContext)(PresenceContext);
	const motionConfig = (0, import_react.useContext)(MotionConfigContext);
	const reducedMotionConfig = motionConfig.reducedMotion;
	const skipAnimations = motionConfig.skipAnimations;
	const visualElementRef = (0, import_react.useRef)(null);
	/**
	* Track whether the component has been through React's commit phase.
	* Used to detect when LazyMotion features load after the component has mounted.
	*/
	const hasMountedOnce = (0, import_react.useRef)(false);
	/**
	* If we haven't preloaded a renderer, check to see if we have one lazy-loaded
	*/
	createVisualElement = createVisualElement || lazyContext.renderer;
	if (!visualElementRef.current && createVisualElement) {
		visualElementRef.current = createVisualElement(Component, {
			visualState,
			parent,
			props,
			presenceContext,
			blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
			reducedMotionConfig,
			skipAnimations,
			isSVG
		});
		/**
		* If the component has already mounted before features loaded (e.g. via
		* LazyMotion with async feature loading), we need to force the initial
		* animation to run. Otherwise state changes that occurred before features
		* loaded will be lost and the element will snap to its final state.
		*/
		if (hasMountedOnce.current && visualElementRef.current) visualElementRef.current.manuallyAnimateOnMount = true;
	}
	const visualElement = visualElementRef.current;
	/**
	* Load Motion gesture and animation features. These are rendered as renderless
	* components so each feature can optionally make use of React lifecycle methods.
	*/
	const initialLayoutGroupConfig = (0, import_react.useContext)(SwitchLayoutGroupContext);
	if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
	const isMounted = (0, import_react.useRef)(false);
	(0, import_react.useInsertionEffect)(() => {
		/**
		* Check the component has already mounted before calling
		* `update` unnecessarily. This ensures we skip the initial update.
		*/
		if (visualElement && isMounted.current) visualElement.update(props, presenceContext);
	});
	/**
	* Cache this value as we want to know whether HandoffAppearAnimations
	* was present on initial render - it will be deleted after this.
	*/
	const optimisedAppearId = props[optimizedAppearDataAttribute];
	const wantsHandoff = (0, import_react.useRef)(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
	useIsomorphicLayoutEffect(() => {
		/**
		* Track that this component has mounted. This is used to detect when
		* LazyMotion features load after the component has already committed.
		*/
		hasMountedOnce.current = true;
		if (!visualElement) return;
		isMounted.current = true;
		window.MotionIsMounted = true;
		visualElement.updateFeatures();
		visualElement.scheduleRenderMicrotask();
		/**
		* Ideally this function would always run in a useEffect.
		*
		* However, if we have optimised appear animations to handoff from,
		* it needs to happen synchronously to ensure there's no flash of
		* incorrect styles in the event of a hydration error.
		*
		* So if we detect a situtation where optimised appear animations
		* are running, we use useLayoutEffect to trigger animations.
		*/
		if (wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
	});
	(0, import_react.useEffect)(() => {
		if (!visualElement) return;
		if (!wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
		if (wantsHandoff.current) {
			queueMicrotask(() => {
				window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
			});
			wantsHandoff.current = false;
		}
		/**
		* Now we've finished triggering animations for this element we
		* can wipe the enteringChildren set for the next render.
		*/
		visualElement.enteringChildren = void 0;
	});
	return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
	const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
	visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
	visualElement.projection.setOptions({
		layoutId,
		layout,
		alwaysMeasureLayout: Boolean(drag) || dragConstraints && isRefObject(dragConstraints),
		visualElement,
		/**
		* TODO: Update options in an effect. This could be tricky as it'll be too late
		* to update by the time layout animations run.
		* We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
		* ensuring it gets called if there's no potential layout animations.
		*
		*/
		animationType: typeof layout === "string" ? layout : "both",
		initialPromotionConfig,
		crossfade: layoutCrossfade,
		layoutScroll,
		layoutRoot,
		layoutAnchor
	});
}
function getClosestProjectingNode(visualElement) {
	if (!visualElement) return void 0;
	return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/index.mjs
/**
* Create a `motion` component.
*
* This function accepts a Component argument, which can be either a string (ie "div"
* for `motion.div`), or an actual React component.
*
* Alongside this is a config option which provides a way of rendering the provided
* component "offline", or outside the React render cycle.
*/
function createMotionComponent(Component, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
	preloadedFeatures && loadFeatures(preloadedFeatures);
	/**
	* Determine whether to use SVG or HTML rendering based on:
	* 1. Explicit `type` option (highest priority)
	* 2. Auto-detection via `isSVGComponent`
	*/
	const isSVG = type ? type === "svg" : isSVGComponent(Component);
	const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
	function MotionDOMComponent(props, externalRef) {
		/**
		* If we need to measure the element we load this functionality in a
		* separate class component in order to gain access to getSnapshotBeforeUpdate.
		*/
		let MeasureLayout;
		const configAndProps = {
			...(0, import_react.useContext)(MotionConfigContext),
			...props,
			layoutId: useLayoutId(props)
		};
		const { isStatic } = configAndProps;
		const context = useCreateMotionContext(props);
		const visualState = useVisualState(props, isStatic);
		if (!isStatic && typeof window !== "undefined") {
			useStrictMode(configAndProps, preloadedFeatures);
			const layoutProjection = getProjectionFunctionality(configAndProps);
			MeasureLayout = layoutProjection.MeasureLayout;
			/**
			* Create a VisualElement for this component. A VisualElement provides a common
			* interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
			* providing a way of rendering to these APIs outside of the React render loop
			* for more performant animations and interactions
			*/
			context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
		}
		/**
		* The mount order and hierarchy is specific to ensure our element ref
		* is hydrated by the time features fire their effects.
		*/
		return (0, import_jsx_runtime.jsxs)(MotionContext.Provider, {
			value: context,
			children: [MeasureLayout && context.visualElement ? (0, import_jsx_runtime.jsx)(MeasureLayout, {
				visualElement: context.visualElement,
				...configAndProps
			}) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG)]
		});
	}
	MotionDOMComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${Component.displayName ?? Component.name ?? ""})`}`;
	const ForwardRefMotionComponent = (0, import_react.forwardRef)(MotionDOMComponent);
	ForwardRefMotionComponent[motionComponentSymbol] = Component;
	return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
	const layoutGroupId = (0, import_react.useContext)(LayoutGroupContext).id;
	return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
	const isStrict = (0, import_react.useContext)(LazyContext).strict;
	/**
	* If we're in development mode, check to make sure we're not rendering a motion component
	* as a child of LazyMotion, as this will break the file-size benefits of using it.
	*/
	if (process.env.NODE_ENV !== "production" && preloadedFeatures && isStrict) {
		const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		configAndProps.ignoreStrict ? warning(false, strictMessage, "lazy-strict-mode") : invariant(false, strictMessage, "lazy-strict-mode");
	}
}
function getProjectionFunctionality(props) {
	const { drag, layout } = getInitializedFeatureDefinitions();
	if (!drag && !layout) return {};
	const combined = {
		...drag,
		...layout
	};
	return {
		MeasureLayout: drag?.isEnabled(props) || layout?.isEnabled(props) ? combined.MeasureLayout : void 0,
		ProjectionNode: combined.ProjectionNode
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createMotionProxy(preloadedFeatures, createVisualElement) {
	if (typeof Proxy === "undefined") return createMotionComponent;
	/**
	* A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
	* Rather than generating them anew every render.
	*/
	const componentCache = /* @__PURE__ */ new Map();
	const factory = (Component, options) => {
		return createMotionComponent(Component, options, preloadedFeatures, createVisualElement);
	};
	/**
	* Support for deprecated`motion(Component)` pattern
	*/
	const deprecatedFactoryFunction = (Component, options) => {
		if (process.env.NODE_ENV !== "production") warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
		return factory(Component, options);
	};
	return new Proxy(deprecatedFactoryFunction, { 
	/**
	* Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
	* The prop name is passed through as `key` and we can use that to generate a `motion`
	* DOM component with that name.
	*/
get: (_target, key) => {
		if (key === "create") return factory;
		/**
		* If this element doesn't exist in the component cache, create it and cache.
		*/
		if (!componentCache.has(key)) componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
		return componentCache.get(key);
	} });
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component, options) => {
	return options.isSVG ?? isSVGComponent(Component) ? new SVGVisualElement(options) : new HTMLVisualElement(options, { allowProjection: Component !== import_react.Fragment });
};
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
	/**
	* We dynamically generate the AnimationState manager as it contains a reference
	* to the underlying animation library. We only want to load that if we load this,
	* so people can optionally code split it out using the `m` component.
	*/
	constructor(node) {
		super(node);
		node.animationState || (node.animationState = createAnimationState(node));
	}
	updateAnimationControlsSubscription() {
		const { animate } = this.node.getProps();
		if (isAnimationControls(animate)) this.unmountControls = animate.subscribe(this.node);
	}
	/**
	* Subscribe any provided AnimationControls to the component's VisualElement
	*/
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate } = this.node.getProps();
		const { animate: prevAnimate } = this.node.prevProps || {};
		if (animate !== prevAnimate) this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset();
		this.unmountControls?.();
	}
};
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;
var ExitAnimationFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.id = id++;
		this.isExitComplete = false;
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent, onExitComplete } = this.node.presenceContext;
		const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || isPresent === prevIsPresent) return;
		if (isPresent && prevIsPresent === false) {
			/**
			* When re-entering, if the exit animation already completed
			* (element is at rest), reset to initial values so the enter
			* animation replays from the correct position.
			*/
			if (this.isExitComplete) {
				const { initial, custom } = this.node.getProps();
				if (typeof initial === "string" || typeof initial === "object" && initial !== null && !Array.isArray(initial)) {
					const resolved = resolveVariant(this.node, initial, custom);
					if (resolved) {
						const { transition, transitionEnd, ...target } = resolved;
						for (const key in target) this.node.getValue(key)?.jump(target[key]);
					}
				}
				this.node.animationState.reset();
				this.node.animationState.animateChanges();
			} else this.node.animationState.setActive("exit", false);
			this.isExitComplete = false;
			return;
		}
		const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
		if (onExitComplete && !isPresent) exitAnimation.then(() => {
			this.isExitComplete = true;
			onExitComplete(this.id);
		});
	}
	mount() {
		const { register, onExitComplete } = this.node.presenceContext || {};
		if (onExitComplete) onExitComplete(this.id);
		if (register) this.unmount = register(this.id);
	}
	unmount() {}
};
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
	animation: { Feature: AnimationFeature },
	exit: { Feature: ExitAnimationFeature }
};
//#endregion
//#region node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event) {
	return { point: {
		x: event.pageX,
		y: event.pageY
	} };
}
var addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
//#endregion
//#region node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
	return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({ current }) => {
	return current ? current.ownerDocument.defaultView : null;
};
//#endregion
//#region node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
	const xDelta = distance(a.x, b.x);
	const yDelta = distance(a.y, b.y);
	return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var overflowStyles = /*#__PURE__*/ new Set(["auto", "scroll"]);
/**
* @internal
*/
var PanSession = class {
	constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}) {
		/**
		* @internal
		*/
		this.startEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEventInfo = null;
		/**
		* Raw (untransformed) event info, re-transformed each frame
		* so transformPagePoint sees the current parent matrix.
		* @internal
		*/
		this.lastRawMoveEventInfo = null;
		/**
		* @internal
		*/
		this.handlers = {};
		/**
		* @internal
		*/
		this.contextWindow = window;
		/**
		* Scroll positions of scrollable ancestors and window.
		* @internal
		*/
		this.scrollPositions = /* @__PURE__ */ new Map();
		/**
		* Cleanup function for scroll listeners.
		* @internal
		*/
		this.removeScrollListeners = null;
		this.onElementScroll = (event) => {
			this.handleScroll(event.target);
		};
		this.onWindowScroll = () => {
			this.handleScroll(window);
		};
		this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			if (this.lastRawMoveEventInfo) this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
			const info = getPanInfo(this.lastMoveEventInfo, this.history);
			const isPanStarted = this.startEvent !== null;
			const isDistancePastThreshold = distance2D(info.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!isPanStarted && !isDistancePastThreshold) return;
			const { point } = info;
			const { timestamp } = frameData;
			this.history.push({
				...point,
				timestamp
			});
			const { onStart, onMove } = this.handlers;
			if (!isPanStarted) {
				onStart && onStart(this.lastMoveEvent, info);
				this.startEvent = this.lastMoveEvent;
			}
			onMove && onMove(this.lastMoveEvent, info);
		};
		this.handlePointerMove = (event, info) => {
			this.lastMoveEvent = event;
			this.lastRawMoveEventInfo = info;
			this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
			frame.update(this.updatePoint, true);
		};
		this.handlePointerUp = (event, info) => {
			this.end();
			const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
			if (this.dragSnapToOrigin || !this.startEvent) resumeAnimation && resumeAnimation();
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			const panInfo = getPanInfo(event.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info, this.transformPagePoint), this.history);
			if (this.startEvent && onEnd) onEnd(event, panInfo);
			onSessionEnd && onSessionEnd(event, panInfo);
		};
		if (!isPrimaryPointer(event)) return;
		this.dragSnapToOrigin = dragSnapToOrigin;
		this.handlers = handlers;
		this.transformPagePoint = transformPagePoint;
		this.distanceThreshold = distanceThreshold;
		this.contextWindow = contextWindow || window;
		const initialInfo = transformPoint(extractEventInfo(event), this.transformPagePoint);
		const { point } = initialInfo;
		const { timestamp } = frameData;
		this.history = [{
			...point,
			timestamp
		}];
		const { onSessionStart } = handlers;
		onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
		this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
		if (element) this.startScrollTracking(element);
	}
	/**
	* Start tracking scroll on ancestors and window.
	*/
	startScrollTracking(element) {
		let current = element.parentElement;
		while (current) {
			const style = getComputedStyle(current);
			if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) this.scrollPositions.set(current, {
				x: current.scrollLeft,
				y: current.scrollTop
			});
			current = current.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		});
		window.addEventListener("scroll", this.onElementScroll, { capture: true });
		window.addEventListener("scroll", this.onWindowScroll);
		this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: true });
			window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	/**
	* Handle scroll compensation during drag.
	*
	* For element scroll: adjusts history origin since pageX/pageY doesn't change.
	* For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
	*/
	handleScroll(target) {
		const initial = this.scrollPositions.get(target);
		if (!initial) return;
		const isWindow = target === window;
		const current = isWindow ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: target.scrollLeft,
			y: target.scrollTop
		};
		const delta = {
			x: current.x - initial.x,
			y: current.y - initial.y
		};
		if (delta.x === 0 && delta.y === 0) return;
		if (isWindow) {
			if (this.lastMoveEventInfo) {
				this.lastMoveEventInfo.point.x += delta.x;
				this.lastMoveEventInfo.point.y += delta.y;
			}
		} else if (this.history.length > 0) {
			this.history[0].x -= delta.x;
			this.history[0].y -= delta.y;
		}
		this.scrollPositions.set(target, current);
		frame.update(this.updatePoint, true);
	}
	updateHandlers(handlers) {
		this.handlers = handlers;
	}
	end() {
		this.removeListeners && this.removeListeners();
		this.removeScrollListeners && this.removeScrollListeners();
		this.scrollPositions.clear();
		cancelFrame(this.updatePoint);
	}
};
function transformPoint(info, transformPagePoint) {
	return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
	return {
		x: a.x - b.x,
		y: a.y - b.y
	};
}
function getPanInfo({ point }, history) {
	return {
		point,
		delta: subtractPoint(point, lastDevicePoint(history)),
		offset: subtractPoint(point, startDevicePoint(history)),
		velocity: getVelocity(history, .1)
	};
}
function startDevicePoint(history) {
	return history[0];
}
function lastDevicePoint(history) {
	return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
	if (history.length < 2) return {
		x: 0,
		y: 0
	};
	let i = history.length - 1;
	let timestampedPoint = null;
	const lastPoint = lastDevicePoint(history);
	while (i >= 0) {
		timestampedPoint = history[i];
		if (lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta)) break;
		i--;
	}
	if (!timestampedPoint) return {
		x: 0,
		y: 0
	};
	/**
	* If the selected point is the pointer-down origin (history[0]),
	* there are better movement points available, and the time gap
	* is suspiciously large (>2x timeDelta), use the next point instead.
	* This prevents stale pointer-down points from diluting velocity
	* in hold-then-flick gestures.
	*/
	if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta) * 2) timestampedPoint = history[1];
	const time = /* @__PURE__ */ millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
	if (time === 0) return {
		x: 0,
		y: 0
	};
	const currentVelocity = {
		x: (lastPoint.x - timestampedPoint.x) / time,
		y: (lastPoint.y - timestampedPoint.y) / time
	};
	if (currentVelocity.x === Infinity) currentVelocity.x = 0;
	if (currentVelocity.y === Infinity) currentVelocity.y = 0;
	return currentVelocity;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
/**
* Apply constraints to a point. These constraints are both physical along an
* axis, and an elastic factor that determines how much to constrain the point
* by if it does lie outside the defined parameters.
*/
function applyConstraints(point, { min, max }, elastic) {
	if (min !== void 0 && point < min) point = elastic ? mixNumber$1(min, point, elastic.min) : Math.max(point, min);
	else if (max !== void 0 && point > max) point = elastic ? mixNumber$1(max, point, elastic.max) : Math.min(point, max);
	return point;
}
/**
* Calculate constraints in terms of the viewport when defined relatively to the
* measured axis. This is measured from the nearest edge, so a max constraint of 200
* on an axis with a max value of 300 would return a constraint of 500 - axis length
*/
function calcRelativeAxisConstraints(axis, min, max) {
	return {
		min: min !== void 0 ? axis.min + min : void 0,
		max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
	};
}
/**
* Calculate constraints in terms of the viewport when
* defined relatively to the measured bounding box.
*/
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
	return {
		x: calcRelativeAxisConstraints(layoutBox.x, left, right),
		y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative axis
*/
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
	let min = constraintsAxis.min - layoutAxis.min;
	let max = constraintsAxis.max - layoutAxis.max;
	if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) [min, max] = [max, min];
	return {
		min,
		max
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative box
*/
function calcViewportConstraints(layoutBox, constraintsBox) {
	return {
		x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
		y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
	};
}
/**
* Calculate a transform origin relative to the source axis, between 0-1, that results
* in an asthetically pleasing scale/transform needed to project from source to target.
*/
function calcOrigin(source, target) {
	let origin = .5;
	const sourceLength = calcLength(source);
	const targetLength = calcLength(target);
	if (targetLength > sourceLength) origin = /* @__PURE__ */ progress(target.min, target.max - sourceLength, source.min);
	else if (sourceLength > targetLength) origin = /* @__PURE__ */ progress(source.min, source.max - targetLength, target.min);
	return clamp(0, 1, origin);
}
/**
* Rebase the calculated viewport constraints relative to the layout.min point.
*/
function rebaseAxisConstraints(layout, constraints) {
	const relativeConstraints = {};
	if (constraints.min !== void 0) relativeConstraints.min = constraints.min - layout.min;
	if (constraints.max !== void 0) relativeConstraints.max = constraints.max - layout.min;
	return relativeConstraints;
}
var defaultElastic = .35;
/**
* Accepts a dragElastic prop and returns resolved elastic values for each axis.
*/
function resolveDragElastic(dragElastic = defaultElastic) {
	if (dragElastic === false) dragElastic = 0;
	else if (dragElastic === true) dragElastic = defaultElastic;
	return {
		x: resolveAxisElastic(dragElastic, "left", "right"),
		y: resolveAxisElastic(dragElastic, "top", "bottom")
	};
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
	return {
		min: resolvePointElastic(dragElastic, minLabel),
		max: resolvePointElastic(dragElastic, maxLabel)
	};
}
function resolvePointElastic(dragElastic, label) {
	return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
	constructor(visualElement) {
		this.openDragLock = null;
		this.isDragging = false;
		this.currentDirection = null;
		this.originPoint = {
			x: 0,
			y: 0
		};
		/**
		* The permitted boundaries of travel, in pixels.
		*/
		this.constraints = false;
		this.hasMutatedConstraints = false;
		/**
		* The per-axis resolved elastic values.
		*/
		this.elastic = createBox();
		/**
		* The latest pointer event. Used as fallback when the `cancel` and `stop` functions are called without arguments.
		*/
		this.latestPointerEvent = null;
		/**
		* The latest pan info. Used as fallback when the `cancel` and `stop` functions are called without arguments.
		*/
		this.latestPanInfo = null;
		this.visualElement = visualElement;
	}
	start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
		/**
		* Don't start dragging if this component is exiting
		*/
		const { presenceContext } = this.visualElement;
		if (presenceContext && presenceContext.isPresent === false) return;
		const onSessionStart = (event) => {
			if (snapToCursor) this.snapToCursor(extractEventInfo(event).point);
			this.stopAnimation();
		};
		const onStart = (event, info) => {
			const { drag, dragPropagation, onDragStart } = this.getProps();
			if (drag && !dragPropagation) {
				if (this.openDragLock) this.openDragLock();
				this.openDragLock = setDragLock(drag);
				if (!this.openDragLock) return;
			}
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			this.isDragging = true;
			this.currentDirection = null;
			this.resolveConstraints();
			if (this.visualElement.projection) {
				this.visualElement.projection.isAnimationBlocked = true;
				this.visualElement.projection.target = void 0;
			}
			/**
			* Record gesture origin and pointer offset
			*/
			eachAxis((axis) => {
				let current = this.getAxisMotionValue(axis).get() || 0;
				/**
				* If the MotionValue is a percentage value convert to px
				*/
				if (percent.test(current)) {
					const { projection } = this.visualElement;
					if (projection && projection.layout) {
						const measuredAxis = projection.layout.layoutBox[axis];
						if (measuredAxis) current = calcLength(measuredAxis) * (parseFloat(current) / 100);
					}
				}
				this.originPoint[axis] = current;
			});
			if (onDragStart) frame.update(() => onDragStart(event, info), false, true);
			addValueToWillChange(this.visualElement, "transform");
			const { animationState } = this.visualElement;
			animationState && animationState.setActive("whileDrag", true);
		};
		const onMove = (event, info) => {
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
			if (!dragPropagation && !this.openDragLock) return;
			const { offset } = info;
			if (dragDirectionLock && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(offset);
				if (this.currentDirection !== null) onDirectionLock && onDirectionLock(this.currentDirection);
				return;
			}
			this.updateAxis("x", info.point, offset);
			this.updateAxis("y", info.point, offset);
			/**
			* Ideally we would leave the renderer to fire naturally at the end of
			* this frame but if the element is about to change layout as the result
			* of a re-render we want to ensure the browser can read the latest
			* bounding box to ensure the pointer and element don't fall out of sync.
			*/
			this.visualElement.render();
			/**
			* This must fire after the render call as it might trigger a state
			* change which itself might trigger a layout update.
			*/
			if (onDrag) frame.update(() => onDrag(event, info), false, true);
		};
		const onSessionEnd = (event, info) => {
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			this.stop(event, info);
			this.latestPointerEvent = null;
			this.latestPanInfo = null;
		};
		const resumeAnimation = () => {
			const { dragSnapToOrigin: snap } = this.getProps();
			if (snap || this.constraints) this.startAnimation({
				x: 0,
				y: 0
			});
		};
		const { dragSnapToOrigin } = this.getProps();
		this.panSession = new PanSession(originEvent, {
			onSessionStart,
			onStart,
			onMove,
			onSessionEnd,
			resumeAnimation
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin,
			distanceThreshold,
			contextWindow: getContextWindow(this.visualElement),
			element: this.visualElement.current
		});
	}
	/**
	* @internal
	*/
	stop(event, panInfo) {
		const finalEvent = event || this.latestPointerEvent;
		const finalPanInfo = panInfo || this.latestPanInfo;
		const isDragging = this.isDragging;
		this.cancel();
		if (!isDragging || !finalPanInfo || !finalEvent) return;
		const { velocity } = finalPanInfo;
		this.startAnimation(velocity);
		const { onDragEnd } = this.getProps();
		if (onDragEnd) frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
	}
	/**
	* @internal
	*/
	cancel() {
		this.isDragging = false;
		const { projection, animationState } = this.visualElement;
		if (projection) projection.isAnimationBlocked = false;
		this.endPanSession();
		const { dragPropagation } = this.getProps();
		if (!dragPropagation && this.openDragLock) {
			this.openDragLock();
			this.openDragLock = null;
		}
		animationState && animationState.setActive("whileDrag", false);
	}
	/**
	* Clean up the pan session without modifying other drag state.
	* This is used during unmount to ensure event listeners are removed
	* without affecting projection animations or drag locks.
	* @internal
	*/
	endPanSession() {
		this.panSession && this.panSession.end();
		this.panSession = void 0;
	}
	updateAxis(axis, _point, offset) {
		const { drag } = this.getProps();
		if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
		const axisValue = this.getAxisMotionValue(axis);
		let next = this.originPoint[axis] + offset[axis];
		if (this.constraints && this.constraints[axis]) next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
		axisValue.set(next);
	}
	resolveConstraints() {
		const { dragConstraints, dragElastic } = this.getProps();
		const layout = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
		const prevConstraints = this.constraints;
		if (dragConstraints && isRefObject(dragConstraints)) {
			if (!this.constraints) this.constraints = this.resolveRefConstraints();
		} else if (dragConstraints && layout) this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
		else this.constraints = false;
		this.elastic = resolveDragElastic(dragElastic);
		/**
		* If we're outputting to external MotionValues, we want to rebase the measured constraints
		* from viewport-relative to component-relative. This only applies to relative (non-ref)
		* constraints, as ref-based constraints from calcViewportConstraints are already in the
		* correct coordinate space for the motion value transform offset.
		*/
		if (prevConstraints !== this.constraints && !isRefObject(dragConstraints) && layout && this.constraints && !this.hasMutatedConstraints) eachAxis((axis) => {
			if (this.constraints !== false && this.getAxisMotionValue(axis)) this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
		});
	}
	resolveRefConstraints() {
		const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
		if (!constraints || !isRefObject(constraints)) return false;
		const constraintsElement = constraints.current;
		invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		const { projection } = this.visualElement;
		if (!projection || !projection.layout) return false;
		/**
		* Refresh the root scroll offset so the constraint's viewport box
		* translates to correct page coordinates. The scroll captured at
		* drag mount can be stale if the document was scrolled afterwards —
		* e.g. via the browser restoring scroll on refresh, or an ancestor
		* layout effect running after this element's mount (#2829).
		*
		* Clear the cached scroll first so `updateScroll` bypasses its
		* per-animationId cache and re-reads the live value.
		*/
		if (projection.root) {
			projection.root.scroll = void 0;
			projection.root.updateScroll();
		}
		const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
		let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
		/**
		* If there's an onMeasureDragConstraints listener we call it and
		* if different constraints are returned, set constraints to that
		*/
		if (onMeasureDragConstraints) {
			const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
			this.hasMutatedConstraints = !!userConstraints;
			if (userConstraints) measuredConstraints = convertBoundingBoxToBox(userConstraints);
		}
		return measuredConstraints;
	}
	startAnimation(velocity) {
		const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
		const constraints = this.constraints || {};
		const momentumAnimations = eachAxis((axis) => {
			if (!shouldDrag(axis, drag, this.currentDirection)) return;
			let transition = constraints && constraints[axis] || {};
			if (dragSnapToOrigin === true || dragSnapToOrigin === axis) transition = {
				min: 0,
				max: 0
			};
			/**
			* Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
			* of spring animations so we should look into adding a disable spring option to `inertia`.
			* We could do something here where we affect the `bounceStiffness` and `bounceDamping`
			* using the value of `dragElastic`.
			*/
			const bounceStiffness = dragElastic ? 200 : 1e6;
			const bounceDamping = dragElastic ? 40 : 1e7;
			const inertia = {
				type: "inertia",
				velocity: dragMomentum ? velocity[axis] : 0,
				bounceStiffness,
				bounceDamping,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...dragTransition,
				...transition
			};
			return this.startAxisValueAnimation(axis, inertia);
		});
		return Promise.all(momentumAnimations).then(onDragTransitionEnd);
	}
	startAxisValueAnimation(axis, transition) {
		const axisValue = this.getAxisMotionValue(axis);
		addValueToWillChange(this.visualElement, axis);
		return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
	}
	stopAnimation() {
		eachAxis((axis) => this.getAxisMotionValue(axis).stop());
	}
	/**
	* Drag works differently depending on which props are provided.
	*
	* - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
	* - Otherwise, we apply the delta to the x/y motion values.
	*/
	getAxisMotionValue(axis) {
		const dragKey = `_drag${axis.toUpperCase()}`;
		const externalMotionValue = this.visualElement.getProps()[dragKey];
		return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, this.visualElement.latestValues[axis] ?? 0);
	}
	snapToCursor(point) {
		eachAxis((axis) => {
			const { drag } = this.getProps();
			if (!shouldDrag(axis, drag, this.currentDirection)) return;
			const { projection } = this.visualElement;
			const axisValue = this.getAxisMotionValue(axis);
			if (projection && projection.layout) {
				const { min, max } = projection.layout.layoutBox[axis];
				/**
				* The layout measurement includes the current transform value,
				* so we need to add it back to get the correct snap position.
				* This fixes an issue where elements with initial coordinates
				* would snap to the wrong position on the first drag.
				*/
				const current = axisValue.get() || 0;
				axisValue.set(point[axis] - mixNumber$1(min, max, .5) + current);
			}
		});
	}
	/**
	* When the viewport resizes we want to check if the measured constraints
	* have changed and, if so, reposition the element within those new constraints
	* relative to where it was before the resize.
	*/
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag, dragConstraints } = this.getProps();
		const { projection } = this.visualElement;
		if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
		/**
		* Stop current animations as there can be visual glitching if we try to do
		* this mid-animation
		*/
		this.stopAnimation();
		/**
		* Record the relative position of the dragged element relative to the
		* constraints box and save as a progress value.
		*/
		const boxProgress = {
			x: 0,
			y: 0
		};
		eachAxis((axis) => {
			const axisValue = this.getAxisMotionValue(axis);
			if (axisValue && this.constraints !== false) {
				const latest = axisValue.get();
				boxProgress[axis] = calcOrigin({
					min: latest,
					max: latest
				}, this.constraints[axis]);
			}
		});
		/**
		* Update the layout of this element and resolve the latest drag constraints
		*/
		const { transformTemplate } = this.visualElement.getProps();
		this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
		projection.root && projection.root.updateScroll();
		projection.updateLayout();
		/**
		* Reset constraints so resolveConstraints() will recalculate them
		* with the freshly measured layout rather than returning the cached value.
		*/
		this.constraints = false;
		this.resolveConstraints();
		/**
		* For each axis, calculate the current progress of the layout axis
		* within the new constraints.
		*/
		eachAxis((axis) => {
			if (!shouldDrag(axis, drag, null)) return;
			/**
			* Calculate a new transform based on the previous box progress
			*/
			const axisValue = this.getAxisMotionValue(axis);
			const { min, max } = this.constraints[axis];
			axisValue.set(mixNumber$1(min, max, boxProgress[axis]));
		});
		/**
		* Flush the updated transform to the DOM synchronously to prevent
		* a visual flash at the element's CSS layout position (0,0) when
		* the transform was stripped for measurement.
		*/
		this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		const element = this.visualElement.current;
		/**
		* Attach a pointerdown event listener on this DOM element to initiate drag tracking.
		*/
		const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
			const { drag, dragListener = true } = this.getProps();
			const target = event.target;
			/**
			* Only block drag if clicking on a text input child element
			* (input, textarea, select, contenteditable) where users might
			* want to select text or interact with the control.
			*
			* Buttons and links don't block drag since they don't have
			* click-and-move actions of their own.
			*/
			const isClickingTextInputChild = target !== element && isElementTextInput(target);
			if (drag && dragListener && !isClickingTextInputChild) this.start(event);
		});
		/**
		* If using ref-based constraints, observe both the draggable element
		* and the constraint container for size changes via ResizeObserver.
		* Setup is deferred because dragConstraints.current is null when
		* addListeners first runs (React hasn't committed the ref yet).
		*/
		let stopResizeObservers;
		const measureDragConstraints = () => {
			const { dragConstraints } = this.getProps();
			if (isRefObject(dragConstraints) && dragConstraints.current) {
				this.constraints = this.resolveRefConstraints();
				if (!stopResizeObservers) stopResizeObservers = startResizeObservers(element, dragConstraints.current, () => this.scalePositionWithinConstraints());
			}
		};
		const { projection } = this.visualElement;
		const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
		if (projection && !projection.layout) {
			projection.root && projection.root.updateScroll();
			projection.updateLayout();
		}
		frame.read(measureDragConstraints);
		/**
		* Attach a window resize listener to scale the draggable target within its defined
		* constraints as the window resizes.
		*/
		const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
		/**
		* If the element's layout changes, calculate the delta and apply that to
		* the drag gesture's origin point.
		*/
		const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
			if (this.isDragging && hasLayoutChanged) {
				eachAxis((axis) => {
					const motionValue = this.getAxisMotionValue(axis);
					if (!motionValue) return;
					this.originPoint[axis] += delta[axis].translate;
					motionValue.set(motionValue.get() + delta[axis].translate);
				});
				this.visualElement.render();
			}
		}));
		return () => {
			stopResizeListener();
			stopPointerListener();
			stopMeasureLayoutListener();
			stopLayoutUpdateListener && stopLayoutUpdateListener();
			stopResizeObservers && stopResizeObservers();
		};
	}
	getProps() {
		const props = this.visualElement.getProps();
		const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
		return {
			...props,
			drag,
			dragDirectionLock,
			dragPropagation,
			dragConstraints,
			dragElastic,
			dragMomentum
		};
	}
};
function skipFirstCall(callback) {
	let isFirst = true;
	return () => {
		if (isFirst) {
			isFirst = false;
			return;
		}
		callback();
	};
}
function startResizeObservers(element, constraintsElement, onResize) {
	const stopElement = resize(element, skipFirstCall(onResize));
	const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
	return () => {
		stopElement();
		stopContainer();
	};
}
function shouldDrag(direction, drag, currentDirection) {
	return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
* Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
* than the provided threshold, return `null`.
*
* @param offset - The x/y offset from origin.
* @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
*/
function getCurrentDirection(offset, lockThreshold = 10) {
	let direction = null;
	if (Math.abs(offset.y) > lockThreshold) direction = "y";
	else if (Math.abs(offset.x) > lockThreshold) direction = "x";
	return direction;
}
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
	constructor(node) {
		super(node);
		this.removeGroupControls = noop;
		this.removeListeners = noop;
		this.controls = new VisualElementDragControls(node);
	}
	mount() {
		const { dragControls } = this.node.getProps();
		if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
		this.removeListeners = this.controls.addListeners() || noop;
	}
	update() {
		const { dragControls } = this.node.getProps();
		const { dragControls: prevDragControls } = this.node.prevProps || {};
		if (dragControls !== prevDragControls) {
			this.removeGroupControls();
			if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
		}
	}
	unmount() {
		this.removeGroupControls();
		this.removeListeners();
		/**
		* In React 19, during list reorder reconciliation, components may
		* briefly unmount and remount while the drag is still active. If we're
		* actively dragging, we should NOT end the pan session - it will
		* continue tracking pointer events via its window-level listeners.
		*
		* The pan session will be properly cleaned up when:
		* 1. The drag ends naturally (pointerup/pointercancel)
		* 2. The component is truly removed from the DOM
		*/
		if (!this.controls.isDragging) this.controls.endPanSession();
	}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
	if (handler) frame.update(() => handler(event, info), false, true);
};
var PanGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.removePointerDownListener = noop;
	}
	onPointerDown(pointerDownEvent) {
		this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: getContextWindow(this.node)
		});
	}
	createPanHandlers() {
		const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(onPanSessionStart),
			onStart: asyncHandler(onPanStart),
			onMove: asyncHandler(onPan),
			onEnd: (event, info) => {
				delete this.session;
				if (onPanEnd) frame.postRender(() => onPanEnd(event, info));
			}
		};
	}
	mount() {
		this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener();
		this.session && this.session.end();
	}
};
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
/**
* Track whether we've taken any snapshots yet. If not,
* we can safely skip notification of didUpdate.
*
* Difficult to capture in a test but to prevent flickering
* we must set this to true either on update or unmount.
* Running `next-env/layout-id` in Safari will show this behaviour if broken.
*/
var hasTakenAnySnapshot = false;
var MeasureLayoutWithContext = class extends import_react.Component {
	/**
	* This only mounts projection nodes for components that
	* need measuring, we might want to do it for all components
	* in order to incorporate transforms
	*/
	componentDidMount() {
		const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
		const { projection } = visualElement;
		if (projection) {
			if (layoutGroup.group) layoutGroup.group.add(projection);
			if (switchLayoutGroup && switchLayoutGroup.register && layoutId) switchLayoutGroup.register(projection);
			if (hasTakenAnySnapshot) projection.root.didUpdate();
			projection.addEventListener("animationComplete", () => {
				this.safeToRemove();
			});
			projection.setOptions({
				...projection.options,
				layoutDependency: this.props.layoutDependency,
				onExitComplete: () => this.safeToRemove()
			});
		}
		globalProjectionState.hasEverUpdated = true;
	}
	getSnapshotBeforeUpdate(prevProps) {
		const { layoutDependency, visualElement, drag, isPresent } = this.props;
		const { projection } = visualElement;
		if (!projection) return null;
		/**
		* TODO: We use this data in relegate to determine whether to
		* promote a previous element. There's no guarantee its presence data
		* will have updated by this point - if a bug like this arises it will
		* have to be that we markForRelegation and then find a new lead some other way,
		* perhaps in didUpdate
		*/
		projection.isPresent = isPresent;
		if (prevProps.layoutDependency !== layoutDependency) projection.setOptions({
			...projection.options,
			layoutDependency
		});
		hasTakenAnySnapshot = true;
		if (drag || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) projection.willUpdate();
		else this.safeToRemove();
		if (prevProps.isPresent !== isPresent) {
			if (isPresent) projection.promote();
			else if (!projection.relegate())
 /**
			* If there's another stack member taking over from this one,
			* it's in charge of the exit animation and therefore should
			* be in charge of the safe to remove. Otherwise we call it here.
			*/
			frame.postRender(() => {
				const stack = projection.getStack();
				if (!stack || !stack.members.length) this.safeToRemove();
			});
		}
		return null;
	}
	componentDidUpdate() {
		const { visualElement, layoutAnchor } = this.props;
		const { projection } = visualElement;
		if (projection) {
			projection.options.layoutAnchor = layoutAnchor;
			projection.root.didUpdate();
			microtask.postRender(() => {
				if (!projection.currentAnimation && projection.isLead()) this.safeToRemove();
			});
		}
	}
	componentWillUnmount() {
		const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
		const { projection } = visualElement;
		hasTakenAnySnapshot = true;
		if (projection) {
			projection.scheduleCheckAfterUnmount();
			if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
			if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
		}
	}
	safeToRemove() {
		const { safeToRemove } = this.props;
		safeToRemove && safeToRemove();
	}
	render() {
		return null;
	}
};
function MeasureLayout(props) {
	const [isPresent, safeToRemove] = usePresence();
	const layoutGroup = (0, import_react.useContext)(LayoutGroupContext);
	return (0, import_jsx_runtime.jsx)(MeasureLayoutWithContext, {
		...props,
		layoutGroup,
		switchLayoutGroup: (0, import_react.useContext)(SwitchLayoutGroupContext),
		isPresent,
		safeToRemove
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
	pan: { Feature: PanGesture },
	drag: {
		Feature: DragGesture,
		ProjectionNode: HTMLProjectionNode,
		MeasureLayout
	}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/hover.mjs
function handleHoverEvent(node, event, lifecycle) {
	const { props } = node;
	if (node.animationState && props.whileHover) node.animationState.setActive("whileHover", lifecycle === "Start");
	const callback = props["onHover" + lifecycle];
	if (callback) frame.postRender(() => callback(event, extractEventInfo(event)));
}
var HoverGesture = class extends Feature {
	mount() {
		const { current } = this.node;
		if (!current) return;
		this.unmount = hover(current, (_element, startEvent) => {
			handleHoverEvent(this.node, startEvent, "Start");
			return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
		});
	}
	unmount() {}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.isActive = false;
	}
	onFocus() {
		let isFocusVisible = false;
		/**
		* If this element doesn't match focus-visible then don't
		* apply whileHover. But, if matches throws that focus-visible
		* is not a valid selector then in that browser outline styles will be applied
		* to the element by default and we want to match that behaviour with whileFocus.
		*/
		try {
			isFocusVisible = this.node.current.matches(":focus-visible");
		} catch (e) {
			isFocusVisible = true;
		}
		if (!isFocusVisible || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", true);
		this.isActive = true;
	}
	onBlur() {
		if (!this.isActive || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", false);
		this.isActive = false;
	}
	mount() {
		this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region node_modules/framer-motion/dist/es/gestures/press.mjs
function handlePressEvent(node, event, lifecycle) {
	const { props } = node;
	if (node.current instanceof HTMLButtonElement && node.current.disabled) return;
	if (node.animationState && props.whileTap) node.animationState.setActive("whileTap", lifecycle === "Start");
	const callback = props["onTap" + (lifecycle === "End" ? "" : lifecycle)];
	if (callback) frame.postRender(() => callback(event, extractEventInfo(event)));
}
var PressGesture = class extends Feature {
	mount() {
		const { current } = this.node;
		if (!current) return;
		const { globalTapTarget, propagate } = this.node.props;
		this.unmount = press(current, (_element, startEvent) => {
			handlePressEvent(this.node, startEvent, "Start");
			return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
		}, {
			useGlobalTarget: globalTapTarget,
			stopPropagation: propagate?.tap === false
		});
	}
	unmount() {}
};
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
/**
* Map an IntersectionHandler callback to an element. We only ever make one handler for one
* element, so even though these handlers might all be triggered by different
* observers, we can keep them in the same map.
*/
var observerCallbacks = /* @__PURE__ */ new WeakMap();
/**
* Multiple observers can be created for multiple element/document roots. Each with
* different settings. So here we store dictionaries of observers to each root,
* using serialised settings (threshold/margin) as lookup keys.
*/
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
	const callback = observerCallbacks.get(entry.target);
	callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
	entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
	const lookupRoot = root || document;
	/**
	* If we don't have an observer lookup map for this root, create one.
	*/
	if (!observers.has(lookupRoot)) observers.set(lookupRoot, {});
	const rootObservers = observers.get(lookupRoot);
	const key = JSON.stringify(options);
	/**
	* If we don't have an observer for this combination of root and settings,
	* create one.
	*/
	if (!rootObservers[key]) rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
		root,
		...options
	});
	return rootObservers[key];
}
function observeIntersection(element, options, callback) {
	const rootInteresectionObserver = initIntersectionObserver(options);
	observerCallbacks.set(element, callback);
	rootInteresectionObserver.observe(element);
	return () => {
		observerCallbacks.delete(element);
		rootInteresectionObserver.unobserve(element);
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
	some: 0,
	all: 1
};
var InViewFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.hasEnteredView = false;
		this.isInView = false;
	}
	startObserver() {
		this.stopObserver?.();
		const { viewport = {} } = this.node.getProps();
		const { root, margin: rootMargin, amount = "some", once } = viewport;
		const options = {
			root: root ? root.current : void 0,
			rootMargin,
			threshold: typeof amount === "number" ? amount : thresholdNames[amount]
		};
		const onIntersectionUpdate = (entry) => {
			const { isIntersecting } = entry;
			/**
			* If there's been no change in the viewport state, early return.
			*/
			if (this.isInView === isIntersecting) return;
			this.isInView = isIntersecting;
			/**
			* Handle hasEnteredView. If this is only meant to run once, and
			* element isn't visible, early return. Otherwise set hasEnteredView to true.
			*/
			if (once && !isIntersecting && this.hasEnteredView) return;
			else if (isIntersecting) this.hasEnteredView = true;
			if (this.node.animationState) this.node.animationState.setActive("whileInView", isIntersecting);
			/**
			* Use the latest committed props rather than the ones in scope
			* when this observer is created
			*/
			const { onViewportEnter, onViewportLeave } = this.node.getProps();
			const callback = isIntersecting ? onViewportEnter : onViewportLeave;
			callback && callback(entry);
		};
		this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver === "undefined") return;
		const { props, prevProps } = this.node;
		if ([
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(props, prevProps))) this.startObserver();
	}
	unmount() {
		this.stopObserver?.();
		this.hasEnteredView = false;
		this.isInView = false;
	}
};
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
	return (name) => viewport[name] !== prevViewport[name];
}
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
	inView: { Feature: InViewFeature },
	tap: { Feature: PressGesture },
	focus: { Feature: FocusGesture },
	hover: { Feature: HoverGesture }
};
//#endregion
//#region node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = { layout: {
	ProjectionNode: HTMLProjectionNode,
	MeasureLayout
} };
//#endregion
//#region node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = /*@__PURE__*/ createMotionProxy({
	...animations,
	...gestureAnimations,
	...drag,
	...layout
}, createDomVisualElement);
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/context.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = (0, import_react.createContext)({});
var useLucideContext = () => (0, import_react.useContext)(LucideContext);
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
	const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
	return (0, import_react.createElement)("svg", {
		ref,
		...defaultAttributes,
		width: size ?? contextSize ?? defaultAttributes.width,
		height: size ?? contextSize ?? defaultAttributes.height,
		stroke: color ?? contextColor,
		strokeWidth: calculatedStrokeWidth,
		className: mergeClasses("lucide", contextClass, className),
		...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Camera = createLucideIcon("camera", [["path", {
	d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
	key: "18u6gg"
}], ["circle", {
	cx: "12",
	cy: "13",
	r: "3",
	key: "1vg3eu"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var House = createLucideIcon("house", [["path", {
	d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
	key: "5wwlr5"
}], ["path", {
	d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
	key: "r6nss1"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Images = createLucideIcon("images", [
	["path", {
		d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16",
		key: "9kzy35"
	}],
	["path", {
		d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2",
		key: "1t0f0t"
	}],
	["circle", {
		cx: "13",
		cy: "7",
		r: "1",
		fill: "currentColor",
		key: "1obus6"
	}],
	["rect", {
		x: "8",
		y: "2",
		width: "14",
		height: "14",
		rx: "2",
		key: "1gvhby"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Upload = createLucideIcon("upload", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m17 8-5-5-5 5",
		key: "7q97r8"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}]
]);
//#endregion
//#region src/components/wedding/BottomNav.tsx
var import_dist = require_dist();
var navItems = [
	{
		path: "/",
		icon: House,
		label: "Home"
	},
	{
		path: "/photobooth",
		icon: Camera,
		label: "Photobooth"
	},
	{
		path: "/gallery",
		icon: Images,
		label: "Galleria"
	},
	{
		path: "/upload",
		icon: Upload,
		label: "Carica"
	}
];
function BottomNav() {
	const { pathname } = (0, import_dist.useLocation)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "fixed bottom-0 left-0 right-0 z-50 safe-area-bottom",
		style: {
			background: "rgba(255,253,249,0.97)",
			backdropFilter: "blur(12px)",
			borderTop: "1px solid #DFC98A"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-around px-2 py-2 max-w-lg mx-auto",
			children: navItems.map(({ path, icon: Icon, label }) => {
				const active = pathname === path;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dist.Link, {
					to: path,
					className: "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-[60px]",
					style: {
						color: active ? "#C9A84C" : "#7A6652",
						background: active ? "rgba(201,168,76,0.1)" : "transparent"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 22,
							strokeWidth: active ? 2 : 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-medium tracking-wide",
							style: { fontFamily: "Lato, sans-serif" },
							children: label
						}),
						active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-1 h-1 rounded-full",
							style: { background: "#C9A84C" }
						})
					]
				}, path);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-safe-area-inset-bottom" })]
	});
}
//#endregion
//#region src/components/wedding/WeddingDecorations.tsx
/**
* SVG decorative components for the wedding app.
* Cornici dorate, rose bianche, gypsophila.
*/
function GoldCornerFrame({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `absolute inset-0 pointer-events-none ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute top-0 left-0 w-16 h-16 opacity-70",
				viewBox: "0 0 64 64",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M2 2 L2 24 M2 2 L24 2",
						stroke: "#C9A84C",
						strokeWidth: "1.5",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M2 2 L14 14",
						stroke: "#C9A84C",
						strokeWidth: "0.8",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "2",
						cy: "2",
						r: "2",
						fill: "#C9A84C"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "14",
						cy: "14",
						r: "1.5",
						fill: "#E8D5A3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M8 2 Q10 6 14 8",
						stroke: "#C9A84C",
						strokeWidth: "0.6",
						fill: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M2 8 Q6 10 8 14",
						stroke: "#C9A84C",
						strokeWidth: "0.6",
						fill: "none"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute top-0 right-0 w-16 h-16 opacity-70",
				viewBox: "0 0 64 64",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M62 2 L62 24 M62 2 L40 2",
						stroke: "#C9A84C",
						strokeWidth: "1.5",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M62 2 L50 14",
						stroke: "#C9A84C",
						strokeWidth: "0.8",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "62",
						cy: "2",
						r: "2",
						fill: "#C9A84C"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "14",
						r: "1.5",
						fill: "#E8D5A3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M56 2 Q54 6 50 8",
						stroke: "#C9A84C",
						strokeWidth: "0.6",
						fill: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M62 8 Q58 10 56 14",
						stroke: "#C9A84C",
						strokeWidth: "0.6",
						fill: "none"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute bottom-0 left-0 w-16 h-16 opacity-70",
				viewBox: "0 0 64 64",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M2 62 L2 40 M2 62 L24 62",
						stroke: "#C9A84C",
						strokeWidth: "1.5",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M2 62 L14 50",
						stroke: "#C9A84C",
						strokeWidth: "0.8",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "2",
						cy: "62",
						r: "2",
						fill: "#C9A84C"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "14",
						cy: "50",
						r: "1.5",
						fill: "#E8D5A3"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute bottom-0 right-0 w-16 h-16 opacity-70",
				viewBox: "0 0 64 64",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M62 62 L62 40 M62 62 L40 62",
						stroke: "#C9A84C",
						strokeWidth: "1.5",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M62 62 L50 50",
						stroke: "#C9A84C",
						strokeWidth: "0.8",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "62",
						cy: "62",
						r: "2",
						fill: "#C9A84C"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "50",
						r: "1.5",
						fill: "#E8D5A3"
					})
				]
			})
		]
	});
}
function RoseWhite({ className = "", size = 48 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		width: size,
		height: size,
		viewBox: "0 0 48 48",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "24",
				cy: "14",
				rx: "6",
				ry: "10",
				fill: "white",
				stroke: "#E8D5A3",
				strokeWidth: "0.5",
				opacity: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "34",
				cy: "20",
				rx: "6",
				ry: "10",
				fill: "white",
				stroke: "#E8D5A3",
				strokeWidth: "0.5",
				opacity: "0.9",
				transform: "rotate(60 34 20)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "34",
				cy: "32",
				rx: "6",
				ry: "10",
				fill: "white",
				stroke: "#E8D5A3",
				strokeWidth: "0.5",
				opacity: "0.9",
				transform: "rotate(120 34 32)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "24",
				cy: "36",
				rx: "6",
				ry: "10",
				fill: "white",
				stroke: "#E8D5A3",
				strokeWidth: "0.5",
				opacity: "0.9",
				transform: "rotate(180 24 36)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "14",
				cy: "32",
				rx: "6",
				ry: "10",
				fill: "white",
				stroke: "#E8D5A3",
				strokeWidth: "0.5",
				opacity: "0.9",
				transform: "rotate(240 14 32)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "14",
				cy: "20",
				rx: "6",
				ry: "10",
				fill: "white",
				stroke: "#E8D5A3",
				strokeWidth: "0.5",
				opacity: "0.9",
				transform: "rotate(300 14 20)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "7",
				fill: "white",
				stroke: "#E8D5A3",
				strokeWidth: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "4",
				fill: "#FAF7F2",
				stroke: "#E8D5A3",
				strokeWidth: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 40 Q16 46 12 44 Q14 40 20 40Z",
				fill: "#8FBC8F",
				opacity: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 40 Q32 46 36 44 Q34 40 28 40Z",
				fill: "#8FBC8F",
				opacity: "0.6"
			})
		]
	});
}
function Gypsophila({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		width: "120",
		height: "60",
		viewBox: "0 0 120 60",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 55 Q50 40 30 25",
				stroke: "#C8D8B0",
				strokeWidth: "0.8",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 55 Q55 38 40 20",
				stroke: "#C8D8B0",
				strokeWidth: "0.8",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 55 Q60 35 55 15",
				stroke: "#C8D8B0",
				strokeWidth: "0.8",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 55 Q65 38 75 20",
				stroke: "#C8D8B0",
				strokeWidth: "0.8",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 55 Q70 40 90 25",
				stroke: "#C8D8B0",
				strokeWidth: "0.8",
				fill: "none"
			}),
			[
				[30, 25],
				[40, 20],
				[55, 15],
				[75, 20],
				[90, 25],
				[25, 18],
				[45, 12],
				[60, 8],
				[80, 14],
				[95, 18],
				[35, 30],
				[50, 25],
				[70, 28],
				[85, 32]
			].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "2.5",
				fill: "white",
				stroke: "#E8D5A3",
				strokeWidth: "0.4"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "1",
				fill: "#FAF7F2"
			})] }, i))
		]
	});
}
function GoldDivider({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-3 ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent to-primary/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 2 L13.5 9 L20 8 L14.5 13 L17 20 L12 16 L7 20 L9.5 13 L4 8 L10.5 9 Z",
					fill: "#C9A84C",
					opacity: "0.8"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-gradient-to-l from-transparent to-primary/60" })
		]
	});
}
function MonogramFrame({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 200 220",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "\r\n          M100 185\r\n          C70 160 25 125 25 80\r\n          C25 45 50 25 78 25\r\n          C92 25 102 35 100 42\r\n          C98 35 108 25 122 25\r\n          C150 25 175 45 175 80\r\n          C175 125 130 160 100 185\r\n        ",
				stroke: "#C9A84C",
				strokeWidth: "2",
				fill: "none",
				opacity: "0.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "\r\n          M100 175\r\n          C74 154 38 122 38 84\r\n          C38 55 57 38 80 38\r\n          C92 38 100 45 100 52\r\n          C100 45 108 38 120 38\r\n          C143 38 162 55 162 84\r\n          C162 122 126 154 100 175\r\n        ",
				stroke: "#E8D5A3",
				strokeWidth: "1",
				fill: "none",
				opacity: "0.8"
			}),
			[
				[100, 18],
				[55, 38],
				[145, 38],
				[30, 90],
				[170, 90],
				[60, 155],
				[140, 155],
				[100, 188]
			].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "2.5",
				fill: "#C9A84C",
				opacity: "0.75"
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(58 55)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "0",
						cy: "0",
						r: "3",
						fill: "#C9A84C",
						opacity: "0.8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "0",
						cy: "-6",
						rx: "3",
						ry: "5",
						fill: "white"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "5",
						cy: "-2",
						rx: "3",
						ry: "5",
						fill: "white",
						transform: "rotate(60 5 -2)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "5",
						cy: "4",
						rx: "3",
						ry: "5",
						fill: "white",
						transform: "rotate(120 5 4)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "0",
						cy: "6",
						rx: "3",
						ry: "5",
						fill: "white"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "-5",
						cy: "4",
						rx: "3",
						ry: "5",
						fill: "white",
						transform: "rotate(60 -5 4)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "-5",
						cy: "-2",
						rx: "3",
						ry: "5",
						fill: "white",
						transform: "rotate(120 -5 -2)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(142 55)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "0",
						cy: "0",
						r: "3",
						fill: "#C9A84C",
						opacity: "0.8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "0",
						cy: "-6",
						rx: "3",
						ry: "5",
						fill: "white"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "5",
						cy: "-2",
						rx: "3",
						ry: "5",
						fill: "white",
						transform: "rotate(60 5 -2)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "5",
						cy: "4",
						rx: "3",
						ry: "5",
						fill: "white",
						transform: "rotate(120 5 4)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "0",
						cy: "6",
						rx: "3",
						ry: "5",
						fill: "white"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "-5",
						cy: "4",
						rx: "3",
						ry: "5",
						fill: "white",
						transform: "rotate(60 -5 4)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "-5",
						cy: "-2",
						rx: "3",
						ry: "5",
						fill: "white",
						transform: "rotate(120 -5 -2)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "102",
				r: "48",
				stroke: "#C9A84C",
				strokeWidth: "1",
				opacity: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "102",
				r: "43",
				stroke: "#E8D5A3",
				strokeWidth: "0.8",
				opacity: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 50 Q100 58 108 50",
				stroke: "#C9A84C",
				strokeWidth: "1",
				fill: "none",
				opacity: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 154 Q100 146 108 154",
				stroke: "#C9A84C",
				strokeWidth: "1",
				fill: "none",
				opacity: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "48",
				r: "2.5",
				fill: "#C9A84C",
				opacity: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "156",
				r: "2.5",
				fill: "#C9A84C",
				opacity: "0.8"
			})
		]
	});
}
//#endregion
export { require_react as S, useConstant as _, RoseWhite as a, require_jsx_runtime as b, Images as c, motion as d, usePresence as f, useIsomorphicLayoutEffect as g, PresenceContext as h, MonogramFrame as i, Camera as l, isHTMLElement as m, GoldDivider as n, BottomNav as o, MotionConfigContext as p, Gypsophila as r, Upload as s, GoldCornerFrame as t, createLucideIcon as u, LayoutGroupContext as v, require_react_dom as x, require_dist as y };
