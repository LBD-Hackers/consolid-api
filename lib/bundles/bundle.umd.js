(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('stream'), require('http'), require('url'), require('https'), require('zlib'), require('events'), require('buffer'), require('util')) :
  typeof define === 'function' && define.amd ? define(['exports', 'stream', 'http', 'url', 'https', 'zlib', 'events', 'buffer', 'util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ifc-lbd"] = {}, global.Stream$2, global.http, global.Url, global.require$$1, global.zlib, global.require$$0$2, global.require$$0$1, global.require$$5));
})(this, (function (exports, Stream$2, http, Url, require$$1, zlib, require$$0$2, require$$0$1, require$$5) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _mergeNamespaces(n, m) {
    m.forEach(function (e) {
      e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
        if (k !== 'default' && !(k in n)) {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    });
    return Object.freeze(n);
  }

  var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream$2);
  var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
  var Url__default = /*#__PURE__*/_interopDefaultLegacy(Url);
  var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
  var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);
  var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$2);
  var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
  var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);

  function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator$1(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty$3(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * Verify whether a given SolidDataset includes metadata about where it was sent to.
   *
   * @param dataset A [[SolidDataset]] that may have metadata attached about the Resource it was retrieved from.
   * @returns True if `dataset` includes metadata about the Resource it was sent to, false if not.
   * @since 0.2.0
   */
  function hasResourceInfo(resource) {
      const potentialResourceInfo = resource;
      return (typeof potentialResourceInfo === "object" &&
          typeof potentialResourceInfo.internal_resourceInfo === "object");
  }
  /**
   * Verify whether a given SolidDataset includes metadata about where it was retrieved from.
   *
   * @param dataset A [[SolidDataset]] that may have metadata attached about the Resource it was retrieved from.
   * @returns True if `dataset` includes metadata about the Resource it was retrieved from, false if not.
   * @since 0.6.0
   */
  function hasServerResourceInfo(resource) {
      const potentialResourceInfo = resource;
      return (typeof potentialResourceInfo === "object" &&
          typeof potentialResourceInfo.internal_resourceInfo === "object" &&
          typeof potentialResourceInfo.internal_resourceInfo.linkedResources ===
              "object");
  }
  /** @internal */
  function hasChangelog(dataset) {
      const potentialChangeLog = dataset;
      return (typeof potentialChangeLog.internal_changeLog === "object" &&
          Array.isArray(potentialChangeLog.internal_changeLog.additions) &&
          Array.isArray(potentialChangeLog.internal_changeLog.deletions));
  }
  /**
   * Errors thrown by solid-client extend this class, and can thereby be distinguished from errors
   * thrown in lower-level libraries.
   * @since 1.2.0
   */
  class SolidClientError extends Error {
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /** @internal */
  function internal_toIriString(iri) {
      return typeof iri === "string" ? iri : iri.value;
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * @ignore Internal fallback for when no fetcher is provided; not to be used downstream.
   */
  const fetch$1 = async (resource, init) => {
      /* istanbul ignore if: `require` is always defined in the unit test environment */
      if (typeof window === "object" && typeof require !== "function") {
          return await window.fetch(resource, init);
      }
      /* istanbul ignore if: `require` is always defined in the unit test environment */
      if (typeof require !== "function") {
          // When using Node.js with ES Modules, require is not defined:
          const crossFetchModule = await Promise.resolve().then(function () { return crossFetch; });
          const fetch = crossFetchModule.default;
          return fetch(resource, init);
      }
      // Implementation note: it's up to the client application to resolve these module names to the
      // respective npm packages. At least one commonly used tool (Webpack) is only able to do that if
      // the module names are literal strings.
      // Additionally, Webpack throws a warning in a way that halts compilation for at least Next.js
      // when using native Javascript dynamic imports (`import()`), whereas `require()` just logs a
      // warning. Since the use of package names instead of file names requires a bundles anyway, this
      // should not have any practical consequences. For more background, see:
      // https://github.com/webpack/webpack/issues/7713
      let fetch;
      // Unfortunately solid-client-authn-browser does not support a default session yet.
      // Once it does, we can auto-detect if it is available and use it as follows:
      // try {
      //   fetch = require("solid-client-authn-browser").fetch;
      // } catch (e) {
      // When enabling the above, make sure to add a similar try {...} catch block using `import`
      // statements in the elseif above.
      // eslint-disable-next-line prefer-const
      fetch = require("cross-fetch");
      // }
      return await fetch(resource, init);
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var COMPATIBLE_ENCODING_PATTERN = /^utf-?8|ascii|utf-?16-?le|ucs-?2|base-?64|latin-?1$/i;
  var WS_TRIM_PATTERN = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  var WS_CHAR_PATTERN = /\s|\uFEFF|\xA0/;
  var WS_FOLD_PATTERN = /\r?\n[\x20\x09]+/g;
  var DELIMITER_PATTERN = /[;,"]/;
  var WS_DELIMITER_PATTERN = /[;,"]|\s/;

  /**
   * Token character pattern
   * @type {RegExp}
   * @see https://tools.ietf.org/html/rfc7230#section-3.2.6
   */
  var TOKEN_PATTERN = /^[!#$%&'*+\-\.^_`|~\da-zA-Z]+$/;

  var STATE = {
    IDLE: 1 << 0,
    URI: 1 << 1,
    ATTR: 1 << 2,
  };

  function trim( value ) {
    return value.replace( WS_TRIM_PATTERN, '' )
  }

  function hasWhitespace( value ) {
    return WS_CHAR_PATTERN.test( value )
  }

  function skipWhitespace( value, offset ) {
    while( hasWhitespace( value[offset] ) ) {
      offset++;
    }
    return offset
  }

  function needsQuotes( value ) {
    return WS_DELIMITER_PATTERN.test( value ) ||
      !TOKEN_PATTERN.test( value )
  }

  class Link {

    /**
     * Link
     * @constructor
     * @param {String} [value]
     * @returns {Link}
     */
    constructor( value ) {

      /** @type {Array} URI references */
      this.refs = [];

      if( value ) {
        this.parse( value );
      }

    }

    /**
     * Get refs with given relation type
     * @param {String} value
     * @returns {Array<Object>}
     */
    rel( value ) {

      var links = [];
      var type = value.toLowerCase();

      for( var i = 0; i < this.refs.length; i++ ) {
        if( this.refs[ i ].rel.toLowerCase() === type ) {
          links.push( this.refs[ i ] );
        }
      }

      return links

    }

    /**
     * Get refs where given attribute has a given value
     * @param {String} attr
     * @param {String} value
     * @returns {Array<Object>}
     */
    get( attr, value ) {

      attr = attr.toLowerCase();

      var links = [];

      for( var i = 0; i < this.refs.length; i++ ) {
        if( this.refs[ i ][ attr ] === value ) {
          links.push( this.refs[ i ] );
        }
      }

      return links

    }

    set( link ) {
      this.refs.push( link );
      return this
    }

    has( attr, value ) {

      attr = attr.toLowerCase();

      for( var i = 0; i < this.refs.length; i++ ) {
        if( this.refs[ i ][ attr ] === value ) {
          return true
        }
      }

      return false

    }

    parse( value, offset ) {

      offset = offset || 0;
      value = offset ? value.slice( offset ) : value;

      // Trim & unfold folded lines
      value = trim( value ).replace( WS_FOLD_PATTERN, '' );

      var state = STATE.IDLE;
      var length = value.length;
      var offset = 0;
      var ref = null;

      while( offset < length ) {
        if( state === STATE.IDLE ) {
          if( hasWhitespace( value[offset] ) ) {
            offset++;
            continue
          } else if( value[offset] === '<' ) {
            if( ref != null ) {
              ref.rel != null ?
                this.refs.push( ...Link.expandRelations( ref ) ) :
                this.refs.push( ref );
            }
            var end = value.indexOf( '>', offset );
            if( end === -1 ) throw new Error( 'Expected end of URI delimiter at offset ' + offset )
            ref = { uri: value.slice( offset + 1, end ) };
            // this.refs.push( ref )
            offset = end;
            state = STATE.URI;
          } else {
            throw new Error( 'Unexpected character "' + value[offset] + '" at offset ' + offset )
          }
          offset++;
        } else if( state === STATE.URI ) {
          if( hasWhitespace( value[offset] ) ) {
            offset++;
            continue
          } else if( value[offset] === ';' ) {
            state = STATE.ATTR;
            offset++;
          } else if( value[offset] === ',' ) {
            state = STATE.IDLE;
            offset++;
          } else {
            throw new Error( 'Unexpected character "' + value[offset] + '" at offset ' + offset )
          }
        } else if( state === STATE.ATTR ) {
          if( value[offset] ===';' || hasWhitespace( value[offset] ) ) {
            offset++;
            continue
          }
          var end = value.indexOf( '=', offset );
          if( end === -1 ) throw new Error( 'Expected attribute delimiter at offset ' + offset )
          var attr = trim( value.slice( offset, end ) ).toLowerCase();
          var attrValue = '';
          offset = end + 1;
          offset = skipWhitespace( value, offset );
          if( value[offset] === '"' ) {
            offset++;
            while( offset < length ) {
              if( value[offset] === '"' ) {
                offset++; break
              }
              if( value[offset] === '\\' ) {
                offset++;
              }
              attrValue += value[offset];
              offset++;
            }
          } else {
            var end = offset + 1;
            while( !DELIMITER_PATTERN.test( value[end] ) && end < length ) {
              end++;
            }
            attrValue = value.slice( offset, end );
            offset = end;
          }
          if( ref[ attr ] && Link.isSingleOccurenceAttr( attr ) ) ; else if( attr[ attr.length - 1 ] === '*' ) {
            ref[ attr ] = Link.parseExtendedValue( attrValue );
          } else {
            attrValue = attr === 'type' ?
              attrValue.toLowerCase() : attrValue;
            if( ref[ attr ] != null ) {
              if( Array.isArray( ref[ attr ] ) ) {
                ref[ attr ].push( attrValue );
              } else {
                ref[ attr ] = [ ref[ attr ], attrValue ];
              }
            } else {
              ref[ attr ] = attrValue;
            }
          }
          switch( value[offset] ) {
            case ',': state = STATE.IDLE; break
            case ';': state = STATE.ATTR; break
          }
          offset++;
        } else {
          throw new Error( 'Unknown parser state "' + state + '"' )
        }
      }

      if( ref != null ) {
        ref.rel != null ?
          this.refs.push( ...Link.expandRelations( ref ) ) :
          this.refs.push( ref );
      }

      ref = null;

      return this

    }

    toString() {

      var refs = [];
      var link = '';
      var ref = null;

      for( var i = 0; i < this.refs.length; i++ ) {
        ref = this.refs[i];
        link = Object.keys( this.refs[i] ).reduce( function( link, attr ) {
          if( attr === 'uri' ) return link
          return link + '; ' + Link.formatAttribute( attr, ref[ attr ] )
        }, '<' + ref.uri + '>' );
        refs.push( link );
      }

      return refs.join( ', ' )

    }

  }

  /**
   * Determines whether an encoding can be
   * natively handled with a `Buffer`
   * @param {String} value
   * @returns {Boolean}
   */
  Link.isCompatibleEncoding = function( value ) {
    return COMPATIBLE_ENCODING_PATTERN.test( value )
  };

  Link.parse = function( value, offset ) {
    return new Link().parse( value, offset )
  };

  Link.isSingleOccurenceAttr = function( attr ) {
    return attr === 'rel' || attr === 'type' || attr === 'media' ||
      attr === 'title' || attr === 'title*'
  };

  Link.isTokenAttr = function( attr ) {
    return attr === 'rel' || attr === 'type' || attr === 'anchor'
  };

  Link.escapeQuotes = function( value ) {
    return value.replace( /"/g, '\\"' )
  };

  Link.expandRelations = function( ref ) {
    var rels = ref.rel.split( ' ' );
    return rels.map( function( rel ) {
      var value = Object.assign( {}, ref );
      value.rel = rel;
      return value
    })
  };

  /**
   * Parses an extended value and attempts to decode it
   * @internal
   * @param {String} value
   * @return {Object}
   */
  Link.parseExtendedValue = function( value ) {
    var parts = /([^']+)?(?:'([^']+)')?(.+)/.exec( value );
    return {
      language: parts[2].toLowerCase(),
      encoding: Link.isCompatibleEncoding( parts[1] ) ?
        null : parts[1].toLowerCase(),
      value: Link.isCompatibleEncoding( parts[1] ) ?
        decodeURIComponent( parts[3] ) : parts[3]
    }
  };

  /**
   * Format a given extended attribute and it's value
   * @param {String} attr
   * @param {Object} data
   * @return {String}
   */
  Link.formatExtendedAttribute = function( attr, data ) {

    var encoding = ( data.encoding || 'utf-8' ).toUpperCase();
    var language = data.language || 'en';

    var encodedValue = '';

    if( Buffer.isBuffer( data.value ) && Link.isCompatibleEncoding( encoding ) ) {
      encodedValue = data.value.toString( encoding );
    } else if( Buffer.isBuffer( data.value ) ) {
      encodedValue = data.value.toString( 'hex' )
        .replace( /[0-9a-f]{2}/gi, '%$1' );
    } else {
      encodedValue = encodeURIComponent( data.value );
    }

    return attr + '=' + encoding + '\'' +
      language + '\'' + encodedValue

  };

  /**
   * Format a given attribute and it's value
   * @param {String} attr
   * @param {String|Object} value
   * @return {String}
   */
  Link.formatAttribute = function( attr, value ) {

    if( Array.isArray( value ) ) {
      return value.map(( item ) => {
        return Link.formatAttribute( attr, item )
      }).join( '; ' )
    }

    if( attr[ attr.length - 1 ] === '*' || typeof value !== 'string' ) {
      return Link.formatExtendedAttribute( attr, value )
    }

    if( Link.isTokenAttr( attr ) ) {
      value = needsQuotes( value ) ?
        '"' + Link.escapeQuotes( value ) + '"' :
        Link.escapeQuotes( value );
    } else if( needsQuotes( value ) ) {
      value = encodeURIComponent( value );
      // We don't need to escape <SP> <,> <;> within quotes
      value = value
        .replace( /%20/g, ' ' )
        .replace( /%2C/g, ',' )
        .replace( /%3B/g, ';' );

      value = '"' + value + '"';
    }

    return attr + '=' + value

  };

  var link = Link;

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * @internal
   */
  function internal_parseResourceInfo(response) {
      var _a, _b, _c;
      const contentTypeParts = (_b = (_a = response.headers.get("Content-Type")) === null || _a === void 0 ? void 0 : _a.split(";")) !== null && _b !== void 0 ? _b : [];
      // If the server offers a Turtle or JSON-LD serialisation on its own accord,
      // that tells us whether it is RDF data that the server can understand
      // (and hence can be updated with a PATCH request with SPARQL INSERT and DELETE statements),
      // in which case our SolidDataset-related functions should handle it.
      // For more context, see https://github.com/inrupt/solid-client-js/pull/214.
      const isSolidDataset = contentTypeParts.length > 0 &&
          ["text/turtle", "application/ld+json"].includes(contentTypeParts[0]);
      const resourceInfo = {
          sourceIri: response.url,
          isRawData: !isSolidDataset,
          contentType: (_c = response.headers.get("Content-Type")) !== null && _c !== void 0 ? _c : undefined,
          linkedResources: {},
      };
      const linkHeader = response.headers.get("Link");
      if (linkHeader) {
          const parsedLinks = link.parse(linkHeader);
          // Set ACL link
          const aclLinks = parsedLinks.get("rel", "acl");
          if (aclLinks.length === 1) {
              resourceInfo.aclUrl = new URL(aclLinks[0].uri, resourceInfo.sourceIri).href;
          }
          // Parse all link headers and expose them in a standard way
          // (this can replace the parsing of the ACL link above):
          resourceInfo.linkedResources = parsedLinks.refs.reduce((rels, ref) => {
              var _a;
              var _b;
              (_a = rels[_b = ref.rel]) !== null && _a !== void 0 ? _a : (rels[_b] = []);
              rels[ref.rel].push(new URL(ref.uri, resourceInfo.sourceIri).href);
              return rels;
          }, resourceInfo.linkedResources);
      }
      const wacAllowHeader = response.headers.get("WAC-Allow");
      if (wacAllowHeader) {
          resourceInfo.permissions = parseWacAllowHeader(wacAllowHeader);
      }
      return resourceInfo;
  }
  /**
   * Parse a WAC-Allow header into user and public access booleans.
   *
   * @param wacAllowHeader A WAC-Allow header in the format `user="read append write control",public="read"`
   * @see https://github.com/solid/solid-spec/blob/cb1373a369398d561b909009bd0e5a8c3fec953b/api-rest.md#wac-allow-headers
   */
  function parseWacAllowHeader(wacAllowHeader) {
      function parsePermissionStatement(permissionStatement) {
          const permissions = permissionStatement.split(" ");
          const writePermission = permissions.includes("write");
          return writePermission
              ? {
                  read: permissions.includes("read"),
                  append: true,
                  write: true,
                  control: permissions.includes("control"),
              }
              : {
                  read: permissions.includes("read"),
                  append: permissions.includes("append"),
                  write: false,
                  control: permissions.includes("control"),
              };
      }
      function getStatementFor(header, scope) {
          const relevantEntries = header
              .split(",")
              .map((rawEntry) => rawEntry.split("="))
              .filter((parts) => parts.length === 2 && parts[0].trim() === scope);
          // There should only be one statement with the given scope:
          if (relevantEntries.length !== 1) {
              return "";
          }
          const relevantStatement = relevantEntries[0][1].trim();
          // The given statement should be wrapped in double quotes to be valid:
          if (relevantStatement.charAt(0) !== '"' ||
              relevantStatement.charAt(relevantStatement.length - 1) !== '"') {
              return "";
          }
          // Return the statment without the wrapping quotes, e.g.: read append write control
          return relevantStatement.substring(1, relevantStatement.length - 1);
      }
      return {
          user: parsePermissionStatement(getStatementFor(wacAllowHeader, "user")),
          public: parsePermissionStatement(getStatementFor(wacAllowHeader, "public")),
      };
  }
  /** @hidden Used to instantiate a separate instance from input parameters */
  function internal_cloneResource(resource) {
      let clonedResource;
      if (typeof resource.slice === "function") {
          // If given Resource is a File:
          clonedResource = Object.assign(resource.slice(), Object.assign({}, resource));
      }
      else {
          // If it is just a plain object containing metadata:
          clonedResource = Object.assign({}, resource);
      }
      return clonedResource;
  }
  /** @internal */
  function internal_isUnsuccessfulResponse(response) {
      return !response.ok;
  }
  function internal_isAuthenticationFailureResponse(response) {
      return response.status === 401 || response.status === 403;
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  // TODO: These should be replaced by auto-generated constants,
  //       if we can ensure that unused constants will be excluded from bundles.
  /** @hidden */
  const acl = {
      Authorization: "http://www.w3.org/ns/auth/acl#Authorization",
      AuthenticatedAgent: "http://www.w3.org/ns/auth/acl#AuthenticatedAgent",
      accessTo: "http://www.w3.org/ns/auth/acl#accessTo",
      agent: "http://www.w3.org/ns/auth/acl#agent",
      agentGroup: "http://www.w3.org/ns/auth/acl#agentGroup",
      agentClass: "http://www.w3.org/ns/auth/acl#agentClass",
      default: "http://www.w3.org/ns/auth/acl#default",
      defaultForNew: "http://www.w3.org/ns/auth/acl#defaultForNew",
      mode: "http://www.w3.org/ns/auth/acl#mode",
      origin: "http://www.w3.org/ns/auth/acl#origin",
  };
  /** @hidden */
  const rdf$3 = {
      type: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
  };
  /** @hidden */
  const ldp = {
      BasicContainer: "http://www.w3.org/ns/ldp#BasicContainer",
      Container: "http://www.w3.org/ns/ldp#Container",
      Resource: "http://www.w3.org/ns/ldp#Resource",
      contains: "http://www.w3.org/ns/ldp#contains",
  };
  /** @hidden */
  const foaf = {
      Agent: "http://xmlns.com/foaf/0.1/Agent",
      primaryTopic: "http://xmlns.com/foaf/0.1/primaryTopic",
      isPrimaryTopicOf: "http://xmlns.com/foaf/0.1/isPrimaryTopicOf",
  };
  /** @hidden */
  const acp = {
      AccessControlResource: "http://www.w3.org/ns/solid/acp#AccessControlResource",
      Policy: "http://www.w3.org/ns/solid/acp#Policy",
      AccessControl: "http://www.w3.org/ns/solid/acp#AccessControl",
      Read: "http://www.w3.org/ns/solid/acp#Read",
      Append: "http://www.w3.org/ns/solid/acp#Append",
      Write: "http://www.w3.org/ns/solid/acp#Write",
      /** @deprecated Removed from the ACP proposal, to be replaced by Matchers. */
      Rule: "http://www.w3.org/ns/solid/acp#Rule",
      Matcher: "http://www.w3.org/ns/solid/acp#Matcher",
      accessControl: "http://www.w3.org/ns/solid/acp#accessControl",
      memberAccessControl: "http://www.w3.org/ns/solid/acp#memberAccessControl",
      apply: "http://www.w3.org/ns/solid/acp#apply",
      /** @deprecated Removed from the ACP proposal, to be replaced by memberAccessControls. */
      applyMembers: "http://www.w3.org/ns/solid/acp#applyMembers",
      allow: "http://www.w3.org/ns/solid/acp#allow",
      deny: "http://www.w3.org/ns/solid/acp#deny",
      allOf: "http://www.w3.org/ns/solid/acp#allOf",
      anyOf: "http://www.w3.org/ns/solid/acp#anyOf",
      noneOf: "http://www.w3.org/ns/solid/acp#noneOf",
      access: "http://www.w3.org/ns/solid/acp#access",
      /** @deprecated Removed from the ACP proposal, to be replaced by memberAccessControls. */
      accessMembers: "http://www.w3.org/ns/solid/acp#accessMembers",
      agent: "http://www.w3.org/ns/solid/acp#agent",
      group: "http://www.w3.org/ns/solid/acp#group",
      client: "http://www.w3.org/ns/solid/acp#client",
      PublicAgent: "http://www.w3.org/ns/solid/acp#PublicAgent",
      AuthenticatedAgent: "http://www.w3.org/ns/solid/acp#AuthenticatedAgent",
      CreatorAgent: "http://www.w3.org/ns/solid/acp#CreatorAgent",
  };

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /** @ignore For internal use only. */
  const internal_defaultFetchOptions = {
      fetch: fetch$1,
  };
  /**
   * Retrieve the information about a resource (e.g. access permissions) without
   * fetching the resource itself.
   *
   * @param url URL to fetch Resource metadata from.
   * @param options Optional parameter `options.fetch`: An alternative `fetch` function to make the HTTP request, compatible with the browser-native [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters).
   * @returns Promise resolving to the metadata describing the given Resource, or rejecting if fetching it failed.
   * @since 0.4.0
   */
  async function getResourceInfo(url, options = Object.assign(Object.assign({}, internal_defaultFetchOptions), { ignoreAuthenticationErrors: false })) {
      var _a;
      const config = Object.assign(Object.assign({}, internal_defaultFetchOptions), options);
      const response = await config.fetch(url, { method: "HEAD" });
      return responseToResourceInfo(response, {
          ignoreAuthenticationErrors: (_a = options.ignoreAuthenticationErrors) !== null && _a !== void 0 ? _a : false,
      });
  }
  /**
   * Parse Solid metadata from a Response obtained by fetching a Resource from a Solid Pod,
   *
   * @param response A Fetch API Response. See {@link https://developer.mozilla.org/en-US/docs/Web/API/Response MDN}.
   * @returns Resource metadata readable by functions such as [[getSourceUrl]].
   * @hidden This interface is not exposed yet until we've tried it out in practice.
   */
  function responseToResourceInfo(response, options = { ignoreAuthenticationErrors: false }) {
      if (internal_isUnsuccessfulResponse(response) &&
          (!internal_isAuthenticationFailureResponse(response) ||
              !options.ignoreAuthenticationErrors)) {
          throw new FetchError$1(`Fetching the metadata of the Resource at [${response.url}] failed: [${response.status}] [${response.statusText}].`, response);
      }
      const resourceInfo = internal_parseResourceInfo(response);
      return { internal_resourceInfo: resourceInfo };
  }
  /**
   * @param resource Resource for which to check whether it is a Container.
   * @returns Whether `resource` is a Container.
   */
  function isContainer(resource) {
      const containerUrl = hasResourceInfo(resource)
          ? getSourceUrl(resource)
          : internal_toIriString(resource);
      return containerUrl.endsWith("/");
  }
  /**
   * @param resource Resource for which to determine the Content Type.
   * @returns The Content Type, if known, or null if not known.
   */
  function getContentType$1(resource) {
      var _a;
      return (_a = resource.internal_resourceInfo.contentType) !== null && _a !== void 0 ? _a : null;
  }
  function getSourceUrl(resource) {
      if (hasResourceInfo(resource)) {
          return resource.internal_resourceInfo.sourceIri;
      }
      return null;
  }
  /** @hidden Alias of getSourceUrl for those who prefer to use IRI terminology. */
  const getSourceIri = getSourceUrl;
  /**
   * Get the URLs of Resources linked to the given Resource.
   *
   * Solid servers can link Resources to each other. For example, in servers
   * implementing Web Access Control, Resources can have an Access Control List
   * Resource linked to it via the `acl` relation.
   *
   * @param resource A Resource fetched from a Solid Pod.
   * @returns The URLs of Resources linked to the given Resource, indexed by the key that links them.
   * @since 1.7.0
   */
  function getLinkedResourceUrlAll(resource) {
      return resource.internal_resourceInfo.linkedResources;
  }
  /**
   * Extends the regular JavaScript error object with access to the status code and status message.
   * @since 1.2.0
   */
  class FetchError$1 extends SolidClientError {
      constructor(message, errorResponse) {
          super(message);
          this.response = errorResponse;
      }
      get statusCode() {
          return this.response.status;
      }
      get statusText() {
          return this.response.statusText;
      }
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  const defaultGetFileOptions = {
      fetch: fetch$1,
  };
  const RESERVED_HEADERS = ["Slug", "If-None-Match", "Content-Type"];
  /**
   * Some of the headers must be set by the library, rather than directly.
   */
  function containsReserved(header) {
      return RESERVED_HEADERS.some((reserved) => header[reserved] !== undefined);
  }
  /**
   * ```{note} This function is still experimental and subject to change, even in a non-major release.
   * ```
   *
   * Retrieves a file from a URL and returns the file as a blob.
   *
   * For example:
   *
   * ```
   * const fileBlob = await getFile("https://pod.example.com/some/file", { fetch: fetch });
   * ```
   *
   * For additional examples, see
   * [Read/Write Files](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/read-write-files/#retrieve-a-file).
   *
   * @param url The URL of the file to return
   * @param options Fetching options: a custom fetcher and/or headers.
   * @returns The file as a blob.
   */
  async function getFile(input, options = defaultGetFileOptions) {
      const config = Object.assign(Object.assign({}, defaultGetFileOptions), options);
      const url = internal_toIriString(input);
      const response = await config.fetch(url, config.init);
      if (internal_isUnsuccessfulResponse(response)) {
          throw new FetchError$1(`Fetching the File failed: [${response.status}] [${response.statusText}].`, response);
      }
      const resourceInfo = internal_parseResourceInfo(response);
      const data = await response.blob();
      const fileWithResourceInfo = Object.assign(data, {
          internal_resourceInfo: resourceInfo,
      });
      return fileWithResourceInfo;
  }
  /**
   * ```{note} This function is still experimental and subject to change, even in a non-major release.
   * ```
   * Deletes a file at a given URL.
   *
   * For example:
   *
   * ```
   * await deleteFile( "https://pod.example.com/some/file", { fetch: fetch });
   * ```
   *
   * For additional examples, see
   * [Read/Write Files](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/read-write-files/#delete-a-file).
   *
   * @param file The URL of the file to delete
   */
  async function deleteFile(file, options = defaultGetFileOptions) {
      const config = Object.assign(Object.assign({}, defaultGetFileOptions), options);
      const url = hasResourceInfo(file)
          ? internal_toIriString(getSourceIri(file))
          : internal_toIriString(file);
      const response = await config.fetch(url, Object.assign(Object.assign({}, config.init), { method: "DELETE" }));
      if (internal_isUnsuccessfulResponse(response)) {
          throw new FetchError$1(`Deleting the file at [${url}] failed: [${response.status}] [${response.statusText}].`, response);
      }
  }
  /**
   * ```{note} This function is still experimental and subject to change, even in a non-major release.
   * ```
   *
   * Saves a file at a given URL. If a file already exists at the URL,
   * the function overwrites the existing file.
   *
   * For example:
   *
   * ```
   * const savedFile = await overwriteFile(
   *   "https://pod.example.com/some/container/myFile.txt",
   *   new Blob(["This is a plain piece of text"], { type: "plain/text" }),
   *   { contentType: "text/plain", fetch: fetch }
   * );
   * ```
   *
   * For additional example, see
   * [Read/Write Files](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/read-write-files/#write-a-file-to-a-specific-url).
   *
   * *Recommended:* In the `options` parameter, you can specify the
   * [media type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
   * of the file in the `contentType`.  If unspecified, the function uses the default type of
   * `application/octet-stream`, indicating a binary data file.
   *
   * When saving a file with [[overwriteFile]], the Solid server creates any
   * intermediary Containers as needed; i.e., the Containers do not
   * need to be created in advance. For example, when saving a file to the target URL of
   * https://example.pod/container/resource, if https://example.pod/container/ does not exist,
   * the container is created as part of the save.
   *
   * @param fileUrl The URL where the file is saved.
   * @param file The file to be written.
   * @param options Additional parameters for file creation (e.g., media type).
   */
  async function overwriteFile(fileUrl, file, options = defaultGetFileOptions) {
      const fileUrlString = internal_toIriString(fileUrl);
      const response = await writeFile(fileUrlString, file, "PUT", options);
      if (internal_isUnsuccessfulResponse(response)) {
          throw new FetchError$1(`Overwriting the file at [${fileUrlString}] failed: [${response.status}] [${response.statusText}].`, response);
      }
      const blobClone = internal_cloneResource(file);
      const resourceInfo = internal_parseResourceInfo(response);
      resourceInfo.sourceIri = fileUrlString;
      resourceInfo.isRawData = true;
      return Object.assign(blobClone, { internal_resourceInfo: resourceInfo });
  }
  function isHeadersArray(headers) {
      return Array.isArray(headers);
  }
  /**
   * The return type of this function is misleading: it should ONLY be used to check
   * whether an object has a forEach method that returns <key, value> pairs.
   *
   * @param headers A headers object that might have a forEach
   */
  function hasHeadersObjectForEach(headers) {
      return typeof headers.forEach === "function";
  }
  /**
   * @hidden
   * This function feels unnecessarily complicated, but is required in order to
   * have Headers according to type definitions in both Node and browser environments.
   * This might require a fix upstream to be cleaned up.
   *
   * @param headersToFlatten A structure containing headers potentially in several formats
   */
  function flattenHeaders(headersToFlatten) {
      if (typeof headersToFlatten === "undefined") {
          return {};
      }
      let flatHeaders = {};
      if (isHeadersArray(headersToFlatten)) {
          headersToFlatten.forEach(([key, value]) => {
              flatHeaders[key] = value;
          });
          // Note that the following line must be a elsif, because string[][] has a forEach,
          // but it returns string[] instead of <key, value>
      }
      else if (hasHeadersObjectForEach(headersToFlatten)) {
          headersToFlatten.forEach((value, key) => {
              flatHeaders[key] = value;
          });
      }
      else {
          // If the headers are already a Record<string, string>,
          // they can directly be returned.
          flatHeaders = headersToFlatten;
      }
      return flatHeaders;
  }
  /**
   * Internal function that performs the actual write HTTP query, either POST
   * or PUT depending on the use case.
   *
   * @param fileUrl The URL where the file is saved
   * @param file The file to be written
   * @param method The HTTP method
   * @param options Additional parameters for file creation (e.g. a slug, or media type)
   */
  async function writeFile(targetUrl, file, method, options) {
      var _a, _b;
      const config = Object.assign(Object.assign({}, defaultGetFileOptions), options);
      const headers = flattenHeaders((_b = (_a = config.init) === null || _a === void 0 ? void 0 : _a.headers) !== null && _b !== void 0 ? _b : {});
      if (containsReserved(headers)) {
          throw new Error(`No reserved header (${RESERVED_HEADERS.join(", ")}) should be set in the optional RequestInit.`);
      }
      // If a slug is in the parameters, set the request headers accordingly
      if (config.slug !== undefined) {
          headers["Slug"] = config.slug;
      }
      headers["Content-Type"] = getContentType(file, options.contentType);
      const targetUrlString = internal_toIriString(targetUrl);
      return await config.fetch(targetUrlString, Object.assign(Object.assign({}, config.init), { headers,
          method, body: file }));
  }
  function getContentType(file, contentTypeOverride) {
      if (typeof contentTypeOverride === "string") {
          return contentTypeOverride;
      }
      const fileType = typeof file === "object" &&
          file !== null &&
          typeof file.type === "string" &&
          file.type.length > 0
          ? file.type
          : undefined;
      return fileType !== null && fileType !== void 0 ? fileType : "application/octet-stream";
  }

  class BlankNode$2 {
    constructor (id) {
      this.value = id || ('b' + (++BlankNode$2.nextId));
    }

    equals (other) {
      return !!other && other.termType === this.termType && other.value === this.value
    }
  }

  BlankNode$2.prototype.termType = 'BlankNode';

  BlankNode$2.nextId = 0;

  var BlankNode_1 = BlankNode$2;

  class DefaultGraph$3 {
    equals (other) {
      return !!other && other.termType === this.termType
    }
  }

  DefaultGraph$3.prototype.termType = 'DefaultGraph';
  DefaultGraph$3.prototype.value = '';

  var DefaultGraph_1 = DefaultGraph$3;

  function fromTerm$1 (original) {
    if (!original) {
      return null
    }

    if (original.termType === 'BlankNode') {
      return this.blankNode(original.value)
    }

    if (original.termType === 'DefaultGraph') {
      return this.defaultGraph()
    }

    if (original.termType === 'Literal') {
      return this.literal(original.value, original.language || this.namedNode(original.datatype.value))
    }

    if (original.termType === 'NamedNode') {
      return this.namedNode(original.value)
    }

    if (original.termType === 'Quad') {
      const subject = this.fromTerm(original.subject);
      const predicate = this.fromTerm(original.predicate);
      const object = this.fromTerm(original.object);
      const graph = this.fromTerm(original.graph);

      return this.quad(subject, predicate, object, graph)
    }

    if (original.termType === 'Variable') {
      return this.variable(original.value)
    }

    throw new Error(`unknown termType ${original.termType}`)
  }

  var fromTerm_1 = fromTerm$1;

  class NamedNode$3 {
    constructor (iri) {
      this.value = iri;
    }

    equals (other) {
      return !!other && other.termType === this.termType && other.value === this.value
    }
  }

  NamedNode$3.prototype.termType = 'NamedNode';

  var NamedNode_1 = NamedNode$3;

  const NamedNode$2 = NamedNode_1;

  class Literal$2 {
    constructor (value, language, datatype) {
      this.value = value;
      this.datatype = Literal$2.stringDatatype;
      this.language = '';

      if (language) {
        this.language = language;
        this.datatype = Literal$2.langStringDatatype;
      } else if (datatype) {
        this.datatype = datatype;
      }
    }

    equals (other) {
      return !!other && other.termType === this.termType && other.value === this.value &&
        other.language === this.language && other.datatype.equals(this.datatype)
    }
  }

  Literal$2.prototype.termType = 'Literal';

  Literal$2.langStringDatatype = new NamedNode$2('http://www.w3.org/1999/02/22-rdf-syntax-ns#langString');
  Literal$2.stringDatatype = new NamedNode$2('http://www.w3.org/2001/XMLSchema#string');

  var Literal_1 = Literal$2;

  const DefaultGraph$2 = DefaultGraph_1;

  class Quad$2 {
    constructor (subject, predicate, object, graph) {
      this.subject = subject;
      this.predicate = predicate;
      this.object = object;

      if (graph) {
        this.graph = graph;
      } else {
        this.graph = new DefaultGraph$2();
      }
    }

    equals (other) {
      // `|| !other.termType` is for backwards-compatibility with old factories without RDF* support.
      return !!other && (other.termType === 'Quad' || !other.termType) &&
        other.subject.equals(this.subject) && other.predicate.equals(this.predicate) &&
        other.object.equals(this.object) && other.graph.equals(this.graph)
    }
  }

  Quad$2.prototype.termType = 'Quad';
  Quad$2.prototype.value = '';

  var Quad_1 = Quad$2;

  class Variable$2 {
    constructor (name) {
      this.value = name;
    }

    equals (other) {
      return !!other && other.termType === this.termType && other.value === this.value
    }
  }

  Variable$2.prototype.termType = 'Variable';

  var Variable_1 = Variable$2;

  const BlankNode$1 = BlankNode_1;
  const DefaultGraph$1 = DefaultGraph_1;
  const fromTermRaw = fromTerm_1;
  const Literal$1 = Literal_1;
  const NamedNode$1 = NamedNode_1;
  const Quad$1 = Quad_1;
  const Variable$1 = Variable_1;

  function namedNode$1 (value) {
    return new NamedNode$1(value)
  }

  function blankNode$1 (value) {
    return new BlankNode$1(value)
  }

  function literal$1 (value, languageOrDatatype) {
    if (typeof languageOrDatatype === 'string') {
      if (languageOrDatatype.indexOf(':') === -1) {
        return new Literal$1(value, languageOrDatatype)
      }

      return new Literal$1(value, null, DataFactory$3.namedNode(languageOrDatatype))
    }

    return new Literal$1(value, null, languageOrDatatype)
  }

  function variable$1 (value) {
    return new Variable$1(value)
  }

  function defaultGraph$1 () {
    return DataFactory$3.defaultGraphInstance
  }

  function triple (subject, predicate, object) {
    return DataFactory$3.quad(subject, predicate, object)
  }

  function quad$1 (subject, predicate, object, graph) {
    return new Quad$1(subject, predicate, object, graph || DataFactory$3.defaultGraphInstance)
  }

  function fromTerm (original) {
    return fromTermRaw.call(DataFactory$3, original)
  }

  function fromQuad (original) {
    return fromTermRaw.call(DataFactory$3, original)
  }

  const DataFactory$3 = {
    namedNode: namedNode$1,
    blankNode: blankNode$1,
    literal: literal$1,
    variable: variable$1,
    defaultGraph: defaultGraph$1,
    triple,
    quad: quad$1,
    fromTerm,
    fromQuad,
    defaultGraphInstance: new DefaultGraph$1()
  };

  var DataFactory_1 = DataFactory$3;

  const DataFactory$2 = DataFactory_1;

  var dataModel = DataFactory$2;

  function isString$1 (s) {
    return typeof s === 'string' || s instanceof String
  }

  const xsdString = 'http://www.w3.org/2001/XMLSchema#string';

  function termToId$1 (term) {
    if (typeof term === 'string') {
      return term
    }

    if (!term) {
      return ''
    }

    if (typeof term.id !== 'undefined' && term.termType !== 'Quad') {
      return term.id
    }

    let subject, predicate, object, graph;

    // Term instantiated with another library
    switch (term.termType) {
      case 'NamedNode':
        return term.value

      case 'BlankNode':
        return `_:${term.value}`

      case 'Variable':
        return `?${term.value}`

      case 'DefaultGraph':
        return ''

      case 'Literal':
        if (term.language) {
          return `"${term.value}"@${term.language}`
        }

        return `"${term.value}"${term.datatype && term.datatype.value !== xsdString ? `^^${term.datatype.value}` : ''}`

      case 'Quad':
        // To identify RDF* quad components, we escape quotes by doubling them.
        // This avoids the overhead of backslash parsing of Turtle-like syntaxes.
        subject = escapeQuotes$1(termToId$1(term.subject));
        predicate = escapeQuotes$1(termToId$1(term.predicate));
        object = escapeQuotes$1(termToId$1(term.object));
        graph = term.graph.termType === 'DefaultGraph' ? '' : ` ${termToId$1(term.graph)}`;

        return `<<${subject} ${predicate} ${object}${graph}>>`

      default:
        throw new Error(`Unexpected termType: ${term.termType}`)
    }
  }

  const escapedLiteral$1 = /^"(.*".*)(?="[^"]*$)/;

  function escapeQuotes$1 (id) {
    return id.replace(escapedLiteral$1, (_, quoted) => `"${quoted.replace(/"/g, '""')}`)
  }

  class DatasetCore$1 {
    constructor (quads) {
      // The number of quads is initially zero
      this._size = 0;
      // `_graphs` contains subject, predicate, and object indexes per graph
      this._graphs = Object.create(null);
      // `_ids` maps entities such as `http://xmlns.com/foaf/0.1/name` to numbers,
      // saving memory by using only numbers as keys in `_graphs`
      this._id = 0;
      this._ids = Object.create(null);
      this._ids['><'] = 0; // dummy entry, so the first actual key is non-zero
      this._entities = Object.create(null); // inverse of `_ids`

      this._quads = new Map();

      // Add quads if passed
      if (quads) {
        for (const quad of quads) {
          this.add(quad);
        }
      }
    }

    get size () {
      // Return the quad count if if was cached
      let size = this._size;

      if (size !== null) {
        return size
      }

      // Calculate the number of quads by counting to the deepest level
      size = 0;
      const graphs = this._graphs;
      let subjects, subject;

      for (const graphKey in graphs) {
        for (const subjectKey in (subjects = graphs[graphKey].subjects)) {
          for (const predicateKey in (subject = subjects[subjectKey])) {
            size += Object.keys(subject[predicateKey]).length;
          }
        }
      }

      this._size = size;

      return this._size
    }

    add (quad) {
      // Convert terms to internal string representation
      let subject = termToId$1(quad.subject);
      let predicate = termToId$1(quad.predicate);
      let object = termToId$1(quad.object);
      const graph = termToId$1(quad.graph);

      // Find the graph that will contain the triple
      let graphItem = this._graphs[graph];
      // Create the graph if it doesn't exist yet
      if (!graphItem) {
        graphItem = this._graphs[graph] = { subjects: {}, predicates: {}, objects: {} };
        // Freezing a graph helps subsequent `add` performance,
        // and properties will never be modified anyway
        Object.freeze(graphItem);
      }

      // Since entities can often be long IRIs, we avoid storing them in every index.
      // Instead, we have a separate index that maps entities to numbers,
      // which are then used as keys in the other indexes.
      const ids = this._ids;
      const entities = this._entities;
      subject = ids[subject] || (ids[entities[++this._id] = subject] = this._id);
      predicate = ids[predicate] || (ids[entities[++this._id] = predicate] = this._id);
      object = ids[object] || (ids[entities[++this._id] = object] = this._id);

      this._addToIndex(graphItem.subjects, subject, predicate, object);
      this._addToIndex(graphItem.predicates, predicate, object, subject);
      this._addToIndex(graphItem.objects, object, subject, predicate);

      this._setQuad(subject, predicate, object, graph, quad);

      // The cached quad count is now invalid
      this._size = null;

      return this
    }

    delete (quad) {
      // Convert terms to internal string representation
      let subject = termToId$1(quad.subject);
      let predicate = termToId$1(quad.predicate);
      let object = termToId$1(quad.object);
      const graph = termToId$1(quad.graph);

      // Find internal identifiers for all components
      // and verify the quad exists.
      const ids = this._ids;
      const graphs = this._graphs;
      let graphItem, subjects, predicates;

      if (!(subject = ids[subject]) || !(predicate = ids[predicate]) ||
        !(object = ids[object]) || !(graphItem = graphs[graph]) ||
        !(subjects = graphItem.subjects[subject]) ||
        !(predicates = subjects[predicate]) ||
        !(object in predicates)
      ) {
        return this
      }

      // Remove it from all indexes
      this._removeFromIndex(graphItem.subjects, subject, predicate, object);
      this._removeFromIndex(graphItem.predicates, predicate, object, subject);
      this._removeFromIndex(graphItem.objects, object, subject, predicate);

      if (this._size !== null) {
        this._size--;
      }

      this._deleteQuad(subject, predicate, object, graph);

      // Remove the graph if it is empty
      for (subject in graphItem.subjects) { // eslint-disable-line no-unreachable-loop
        return this
      }

      delete graphs[graph];

      return this
    }

    has (quad) {
      // Convert terms to internal string representation
      const subject = termToId$1(quad.subject);
      const predicate = termToId$1(quad.predicate);
      const object = termToId$1(quad.object);
      const graph = termToId$1(quad.graph);

      const graphItem = this._graphs[graph];

      if (!graphItem) {
        return false
      }

      const ids = this._ids;
      let subjectId, predicateId, objectId;

      // Translate IRIs to internal index keys.
      if (
        (isString$1(subject) && !(subjectId = ids[subject])) ||
        (isString$1(predicate) && !(predicateId = ids[predicate])) ||
        (isString$1(object) && !(objectId = ids[object]))
      ) {
        return false
      }

      return this._countInIndex(graphItem.objects, objectId, subjectId, predicateId) === 1
    }

    match (subject, predicate, object, graph) {
      return this._createDataset(this._match(subject, predicate, object, graph))
    }

    [Symbol.iterator] () {
      return this._match()[Symbol.iterator]()
    }

    // ## Private methods

    // ### `_addToIndex` adds a quad to a three-layered index.
    // Returns if the index has changed, if the entry did not already exist.
    _addToIndex (index0, key0, key1, key2) {
      // Create layers as necessary
      const index1 = index0[key0] || (index0[key0] = {});
      const index2 = index1[key1] || (index1[key1] = {});
      // Setting the key to _any_ value signals the presence of the quad
      const existed = key2 in index2;

      if (!existed) {
        index2[key2] = null;
      }

      return !existed
    }

    // ### `_removeFromIndex` removes a quad from a three-layered index
    _removeFromIndex (index0, key0, key1, key2) {
      // Remove the quad from the index
      const index1 = index0[key0];
      const index2 = index1[key1];
      delete index2[key2];

      // Remove intermediary index layers if they are empty
      for (const key in index2) { // eslint-disable-line no-unreachable-loop
        return
      }

      delete index1[key1];

      for (const key in index1) { // eslint-disable-line no-unreachable-loop
        return
      }

      delete index0[key0];
    }

    // ### `_findInIndex` finds a set of quads in a three-layered index.
    // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
    // Any of these keys can be undefined, which is interpreted as a wildcard.
    // `name0`, `name1`, and `name2` are the names of the keys at each level,
    // used when reconstructing the resulting quad
    // (for instance: _subject_, _predicate_, and _object_).
    // Finally, `graph` will be the graph of the created quads.
    // If `callback` is given, each result is passed through it
    // and iteration halts when it returns truthy for any quad.
    // If instead `array` is given, each result is added to the array.
    _findInIndex (index0, key0, key1, key2, name0, name1, name2, graph, callback, array) {
      let tmp, index1, index2;

      // If a key is specified, use only that part of index 0.
      if (key0) {
        (tmp = index0, index0 = {})[key0] = tmp[key0];
      }

      for (const value0 in index0) {
        index1 = index0[value0];

        if (index1) {
          // If a key is specified, use only that part of index 1.
          if (key1) {
            (tmp = index1, index1 = {})[key1] = tmp[key1];
          }

          for (const value1 in index1) {
            index2 = index1[value1];

            if (index2) {
              // If a key is specified, use only that part of index 2, if it exists.
              const values = key2 ? (key2 in index2 ? [key2] : []) : Object.keys(index2);
              // Create quads for all items found in index 2.
              for (let l = 0; l < values.length; l++) {
                const parts = {
                  [name0]: value0,
                  [name1]: value1,
                  [name2]: values[l]
                };

                const quad = this._getQuad(parts.subject, parts.predicate, parts.object, graph);

                if (array) {
                  array.push(quad);
                } else if (callback(quad)) {
                  return true
                }
              }
            }
          }
        }
      }

      return array
    }

    // ### `_countInIndex` counts matching quads in a three-layered index.
    // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
    // Any of these keys can be undefined, which is interpreted as a wildcard.
    _countInIndex (index0, key0, key1, key2) {
      let count = 0;
      let tmp, index1, index2;

      // If a key is specified, count only that part of index 0
      if (key0) {
        (tmp = index0, index0 = {})[key0] = tmp[key0];
      }

      for (const value0 in index0) {
        index1 = index0[value0];

        if (index1) {
          // If a key is specified, count only that part of index 1
          if (key1) {
            (tmp = index1, index1 = {})[key1] = tmp[key1];
          }

          for (const value1 in index1) {
            index2 = index1[value1];

            if (index2) {
              if (key2) {
                // If a key is specified, count the quad if it exists
                (key2 in index2) && count++;
              } else {
                // Otherwise, count all quads
                count += Object.keys(index2).length;
              }
            }
          }
        }
      }

      return count
    }

    // ### `_getGraphs` returns an array with the given graph,
    // or all graphs if the argument is null or undefined.
    _getGraphs (graph) {
      if (!isString$1(graph)) {
        return this._graphs
      }

      return {
        [graph]: this._graphs[graph]
      }
    }

    _match (subject, predicate, object, graph) {
      // Convert terms to internal string representation
      subject = subject && termToId$1(subject);
      predicate = predicate && termToId$1(predicate);
      object = object && termToId$1(object);
      graph = graph && termToId$1(graph);

      const quads = [];
      const graphs = this._getGraphs(graph);
      const ids = this._ids;
      let content, subjectId, predicateId, objectId;

      // Translate IRIs to internal index keys.
      if (
        (isString$1(subject) && !(subjectId = ids[subject])) ||
        (isString$1(predicate) && !(predicateId = ids[predicate])) ||
        (isString$1(object) && !(objectId = ids[object]))
      ) {
        return quads
      }

      for (const graphId in graphs) {
        content = graphs[graphId];

        // Only if the specified graph contains triples, there can be results
        if (content) {
          // Choose the optimal index, based on what fields are present
          if (subjectId) {
            if (objectId) {
              // If subject and object are given, the object index will be the fastest
              this._findInIndex(content.objects, objectId, subjectId, predicateId, 'object', 'subject', 'predicate', graphId, null, quads);
            } else {
              // If only subject and possibly predicate are given, the subject index will be the fastest
              this._findInIndex(content.subjects, subjectId, predicateId, null, 'subject', 'predicate', 'object', graphId, null, quads);
            }
          } else if (predicateId) {
            // if only predicate and possibly object are given, the predicate index will be the fastest
            this._findInIndex(content.predicates, predicateId, objectId, null, 'predicate', 'object', 'subject', graphId, null, quads);
          } else if (objectId) {
            // If only object is given, the object index will be the fastest
            this._findInIndex(content.objects, objectId, null, null, 'object', 'subject', 'predicate', graphId, null, quads);
          } else {
            // If nothing is given, iterate subjects and predicates first
            this._findInIndex(content.subjects, null, null, null, 'subject', 'predicate', 'object', graphId, null, quads);
          }
        }
      }

      return quads
    }

    _getQuad (subjectId, predicateId, objectId, graphId) {
      return this._quads.get(this._toId(subjectId, predicateId, objectId, graphId))
    }

    _setQuad (subjectId, predicateId, objectId, graphId, quad) {
      this._quads.set(this._toId(subjectId, predicateId, objectId, graphId), quad);
    }

    _deleteQuad (subjectId, predicateId, objectId, graphId) {
      this._quads.delete(this._toId(subjectId, predicateId, objectId, graphId));
    }

    _createDataset (quads) {
      return new this.constructor(quads)
    }

    _toId (subjectId, predicateId, objectId, graphId) {
      return `${subjectId}:${predicateId}:${objectId}:${graphId}`
    }
  }

  var DatasetCore_1 = DatasetCore$1;

  const rdf$2 = dataModel;
  const DatasetCore = DatasetCore_1;

  function dataset (quads) {
    return new DatasetCore(quads)
  }

  var dataset_1 = Object.assign({ dataset }, rdf$2);

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  dataset_1.dataset;
  const localNodeSkolemPrefix = "https://inrupt.com/.well-known/sdk-local-node/";
  /**
   * Runtime freezing might be too much overhead;
   * if so, this function allows us to replace it by a function
   * that merely marks its input as Readonly<> for static analysis.
   */
  const freeze = Object.freeze;
  function isLocalNodeIri(iri) {
      return (iri.substring(0, localNodeSkolemPrefix.length) === localNodeSkolemPrefix);
  }
  function getLocalNodeName(localNodeIri) {
      return localNodeIri.substring(localNodeSkolemPrefix.length);
  }
  function getLocalNodeIri(localNodeName) {
      return `${localNodeSkolemPrefix}${localNodeName}`;
  }
  function isBlankNodeId(value) {
      return typeof value === "string" && value.substring(0, 2) === "_:";
  }
  function getBlankNodeValue(blankNodeId) {
      return blankNodeId.substring(2);
  }
  function getBlankNodeId(blankNode) {
      return `_:${blankNode.value}`;
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * IRIs of the XML Schema data types we support
   */
  const xmlSchemaTypes = {
      boolean: "http://www.w3.org/2001/XMLSchema#boolean",
      dateTime: "http://www.w3.org/2001/XMLSchema#dateTime",
      date: "http://www.w3.org/2001/XMLSchema#date",
      time: "http://www.w3.org/2001/XMLSchema#time",
      decimal: "http://www.w3.org/2001/XMLSchema#decimal",
      integer: "http://www.w3.org/2001/XMLSchema#integer",
      string: "http://www.w3.org/2001/XMLSchema#string",
      langString: "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
  };
  /**
   * @internal
   * @param value Value to serialise.
   * @returns String representation of `value`.
   * @see https://www.w3.org/TR/xmlschema-2/#boolean-lexical-representation
   */
  function serializeBoolean(value) {
      return value ? "true" : "false";
  }
  /**
   * @internal
   * @param value Value to deserialise.
   * @returns Deserialized boolean, or null if the given value is not a valid serialised boolean.
   * @see https://www.w3.org/TR/xmlschema-2/#boolean-lexical-representation
   */
  function deserializeBoolean(value) {
      if (value === "true" || value === "1") {
          return true;
      }
      else if (value === "false" || value === "0") {
          return false;
      }
      else {
          return null;
      }
  }
  /**
   * @internal
   * @param value Value to serialise.
   * @returns String representation of `value` in UTC.
   * @see https://www.w3.org/TR/xmlschema-2/#time-lexical-repr
   */
  function serializeTime(value) {
      let millisecondString;
      let timezoneString;
      if (value.millisecond) {
          if (value.millisecond < 10) {
              millisecondString = "00" + value.millisecond;
          }
          else if (value.millisecond < 100) {
              millisecondString = "0" + value.millisecond;
          }
          else {
              millisecondString = value.millisecond;
          }
      }
      if (typeof value.timezoneHourOffset === "number") {
          const timezoneFormatted = Math.abs(value.timezoneHourOffset) < 10
              ? "0" + Math.abs(value.timezoneHourOffset)
              : Math.abs(value.timezoneHourOffset);
          timezoneString =
              value.timezoneHourOffset >= 0
                  ? "+" + timezoneFormatted
                  : "-" + timezoneFormatted;
          if (value.timezoneMinuteOffset) {
              timezoneString =
                  timezoneString +
                      ":" +
                      (value.timezoneMinuteOffset < 10
                          ? "0" + value.timezoneMinuteOffset
                          : value.timezoneMinuteOffset);
          }
          else {
              timezoneString = timezoneString + ":00";
          }
      }
      return ((value.hour < 10 ? "0" + value.hour : value.hour) +
          ":" +
          (value.minute < 10 ? "0" + value.minute : value.minute) +
          ":" +
          (value.second < 10 ? "0" + value.second : value.second) +
          (value.millisecond ? "." + millisecondString : "") +
          (timezoneString ? timezoneString : ""));
  }
  /**
   * @internal
   * @param literalString Value to deserialise.
   * @returns Deserialized time, or null if the given value is not a valid serialised datetime.
   * @see https://www.w3.org/TR/xmlschema-2/#time-lexical-repr
   */
  function deserializeTime(literalString) {
      // Time in the format described at
      // https://www.w3.org/TR/xmlschema-2/#time-lexical-repr
      // \d\d:\d\d:\d\d - Two digits for the hour, minute and second, respectively, separated by a `:`.
      //                  Example: "13:37:42".
      // (\.\d+)? - Optionally a `.` followed by one or more digits representing milliseconds.
      //            Example: ".1337".
      // (Z|(\+|-)\d\d:\d\d) - The letter Z indicating UTC, or a `+` or `-` followed by two digits for
      //                       the hour offset and two for the minute offset, separated by a `:`.
      //                       Example: "+13:37".
      const timeRegEx = /\d\d:\d\d:\d\d(\.\d+)?(Z|(\+|-)\d\d:\d\d)?/;
      if (!timeRegEx.test(literalString)) {
          return null;
      }
      const [timeString, timezoneString] = splitTimeFromTimezone(literalString);
      const [hourString, minuteString, timeRest] = timeString.split(":");
      let utcHours = Number.parseInt(hourString, 10);
      let utcMinutes = Number.parseInt(minuteString, 10);
      const [secondString, optionalMillisecondString] = timeRest.split(".");
      const utcSeconds = Number.parseInt(secondString, 10);
      const utcMilliseconds = optionalMillisecondString
          ? Number.parseInt(optionalMillisecondString, 10)
          : undefined;
      if (utcMinutes >= 60) {
          utcHours = utcHours + 1;
          utcMinutes = utcMinutes - 60;
      }
      const deserializedTime = {
          hour: utcHours,
          minute: utcMinutes,
          second: utcSeconds,
      };
      if (typeof utcMilliseconds === "number") {
          deserializedTime.millisecond = utcMilliseconds;
      }
      if (typeof timezoneString === "string") {
          const [hourOffset, minuteOffset] = getTimezoneOffsets(timezoneString);
          if (typeof hourOffset !== "number" ||
              hourOffset > 24 ||
              typeof minuteOffset !== "number" ||
              minuteOffset > 59) {
              return null;
          }
          deserializedTime.timezoneHourOffset = hourOffset;
          deserializedTime.timezoneMinuteOffset = minuteOffset;
      }
      return deserializedTime;
  }
  /**
   * @internal
   * @param value Value to serialise.
   * @returns String representation of `value`.
   * @see https://www.w3.org/TR/xmlschema-2/#dateTime-lexical-representation
   */
  function serializeDatetime(value) {
      // Although the XML Schema DateTime is not _exactly_ an ISO 8601 string
      // (see https://www.w3.org/TR/xmlschema-2/#deviantformats),
      // the deviations only affect the parsing, not the serialisation.
      // Therefore, we can just use .toISOString():
      return value.toISOString();
  }
  /**
   * @internal
   * @param value Value to deserialise.
   * @returns Deserialized datetime, or null if the given value is not a valid serialised datetime.
   * @see https://www.w3.org/TR/xmlschema-2/#dateTime-lexical-representation
   */
  function deserializeDatetime(literalString) {
      // DateTime in the format described at
      // https://www.w3.org/TR/xmlschema-2/#dateTime-lexical-representation
      // (without constraints on the value).
      // -? - An optional leading `-`.
      // \d{4,}- - Four or more digits followed by a `-` representing the year. Example: "3000-".
      // \d\d-\d\d - Two digits representing the month and two representing the day of the month,
      //             separated by a `-`. Example: "11-03".
      // T - The letter T, separating the date from the time.
      // \d\d:\d\d:\d\d - Two digits for the hour, minute and second, respectively, separated by a `:`.
      //                  Example: "13:37:42".
      // (\.\d+)? - Optionally a `.` followed by one or more digits representing milliseconds.
      //            Example: ".1337".
      // (Z|(\+|-)\d\d:\d\d) - The letter Z indicating UTC, or a `+` or `-` followed by two digits for
      //                       the hour offset and two for the minute offset, separated by a `:`.
      //                       Example: "+13:37".
      const datetimeRegEx = /-?\d{4,}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(Z|(\+|-)\d\d:\d\d)?/;
      if (!datetimeRegEx.test(literalString)) {
          return null;
      }
      const [signedDateString, rest] = literalString.split("T");
      // The date string can optionally be prefixed with `-`,
      // in which case the year is negative:
      const [yearMultiplier, dateString] = signedDateString.charAt(0) === "-"
          ? [-1, signedDateString.substring(1)]
          : [1, signedDateString];
      const [yearString, monthString, dayString] = dateString.split("-");
      const utcFullYear = Number.parseInt(yearString, 10) * yearMultiplier;
      const utcMonth = Number.parseInt(monthString, 10) - 1;
      const utcDate = Number.parseInt(dayString, 10);
      const [timeString, timezoneString] = splitTimeFromTimezone(rest);
      const [hourOffset, minuteOffset] = typeof timezoneString === "string"
          ? getTimezoneOffsets(timezoneString)
          : [0, 0];
      const [hourString, minuteString, timeRest] = timeString.split(":");
      const utcHours = Number.parseInt(hourString, 10) + hourOffset;
      const utcMinutes = Number.parseInt(minuteString, 10) + minuteOffset;
      const [secondString, optionalMillisecondString] = timeRest.split(".");
      const utcSeconds = Number.parseInt(secondString, 10);
      const utcMilliseconds = optionalMillisecondString
          ? Number.parseInt(optionalMillisecondString, 10)
          : 0;
      const date = new Date(Date.UTC(utcFullYear, utcMonth, utcDate, utcHours, utcMinutes, utcSeconds, utcMilliseconds));
      // For the year, values from 0 to 99 map to the years 1900 to 1999. Since the serialisation
      // always writes out the years fully, we should correct this to actually map to the years 0 to 99.
      // See
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#Individual_date_and_time_component_values
      if (utcFullYear >= 0 && utcFullYear < 100) {
          // Note that we base it on the calculated year, rather than the year that was actually read.
          // This is because the year might actually differ from the value listed in the serialisation,
          // i.e. when moving the timezone offset to UTC pushes it into a different year:
          date.setUTCFullYear(date.getUTCFullYear() - 1900);
      }
      return date;
  }
  /**
   * @internal
   * @param value Value to serialise.
   * @returns String representation of `value`.
   * @see https://www.w3.org/TR/xmlschema-2/#date-lexical-representation
   */
  function serializeDate(value) {
      const year = value.getFullYear();
      const month = value.getMonth() + 1;
      const day = value.getDate();
      const [_, timezone] = splitTimeFromTimezone(value.toISOString());
      return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}${timezone}`;
  }
  /**
   * @internal
   * @param value Value to deserialise.
   * @returns Deserialized datetime, or null if the given value is not a valid serialised datetime.
   * @see https://www.w3.org/TR/xmlschema-2/#date-lexical-representation
   */
  function deserializeDate(literalString) {
      // Date in the format described at
      // https://www.w3.org/TR/xmlschema-2/#date-lexical-representation
      // (without constraints on the value).
      // -? - An optional leading `-`.
      // \d{4,}- - Four or more digits followed by a `-` representing the year. Example: "3000-".
      // \d\d-\d\d - Two digits representing the month and two representing the day of the month,
      //             separated by a `-`. Example: "11-03".
      // (Z|(\+|-)\d\d:\d\d) - Optionally, the letter Z indicating UTC, or a `+` or `-` followed by two digits for
      //                       the hour offset and two for the minute offset, separated by a `:`.
      //                       Example: "+13:37".
      const dateRegEx = /-?\d{4,}-\d\d-\d\d(Z|(\+|-)\d\d:\d\d)?/;
      if (!dateRegEx.test(literalString)) {
          return null;
      }
      const signedDateString = literalString;
      // The date string can optionally be prefixed with `-`,
      // in which case the year is negative:
      const [yearMultiplier, dateString] = signedDateString.charAt(0) === "-"
          ? [-1, signedDateString.substring(1)]
          : [1, signedDateString];
      const [yearString, monthString, dayAndTimezoneString] = dateString.split("-");
      const dayString = dayAndTimezoneString.length > 2
          ? dayAndTimezoneString.substring(0, 2)
          : dayAndTimezoneString;
      const utcFullYear = Number.parseInt(yearString, 10) * yearMultiplier;
      const utcMonth = Number.parseInt(monthString, 10) - 1;
      const utcDate = Number.parseInt(dayString, 10);
      const hour = 12;
      // setting at 12:00 avoids all timezones
      const date = new Date(Date.UTC(utcFullYear, utcMonth, utcDate, hour));
      // For the year, values from 0 to 99 map to the years 1900 to 1999. Since the serialisation
      // always writes out the years fully, we should correct this to actually map to the years 0 to 99.
      // See
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#Individual_date_and_time_component_values
      if (utcFullYear >= 0 && utcFullYear < 100) {
          date.setUTCFullYear(date.getUTCFullYear() - 1900);
      }
      return date;
  }
  /**
   * @param timeString An XML Schema time string.
   * @returns A tuple [timeString, timezoneString].
   * @see https://www.w3.org/TR/xmlschema-2/#time-lexical-repr
   */
  function splitTimeFromTimezone(timeString) {
      if (timeString.endsWith("Z")) {
          return [timeString.substring(0, timeString.length - 1), "Z"];
      }
      const splitOnPlus = timeString.split("+");
      const splitOnMinus = timeString.split("-");
      if (splitOnPlus.length === 1 && splitOnMinus.length === 1) {
          return [splitOnPlus[0], undefined];
      }
      return splitOnPlus.length > splitOnMinus.length
          ? [splitOnPlus[0], "+" + splitOnPlus[1]]
          : [splitOnMinus[0], "-" + splitOnMinus[1]];
  }
  /**
   * @param timezoneString Lexical representation of a time zone in XML Schema.
   * @returns A tuple of the hour and minute offset of the time zone.
   * @see https://www.w3.org/TR/xmlschema-2/#dateTime-timezones
   */
  function getTimezoneOffsets(timezoneString) {
      if (timezoneString === "Z") {
          return [0, 0];
      }
      const multiplier = timezoneString.charAt(0) === "+" ? 1 : -1;
      const [hourString, minuteString] = timezoneString.substring(1).split(":");
      const hours = Number.parseInt(hourString, 10);
      const minutes = Number.parseInt(minuteString, 10);
      return [hours * multiplier, minutes * multiplier];
  }
  /**
   * @internal
   * @param value Value to serialise.
   * @returns String representation of `value`.
   * @see https://www.w3.org/TR/xmlschema-2/#decimal-lexical-representation
   */
  function serializeDecimal(value) {
      return value.toString();
  }
  /**
   * @internal
   * @param value Value to deserialise.
   * @returns Deserialized decimal, or null if the given value is not a valid serialised decimal.
   * @see https://www.w3.org/TR/xmlschema-2/#decimal-lexical-representation
   */
  function deserializeDecimal(literalString) {
      const deserialized = Number.parseFloat(literalString);
      if (Number.isNaN(deserialized)) {
          return null;
      }
      return deserialized;
  }
  /**
   * @internal
   * @param value Value to serialise.
   * @returns String representation of `value`.
   */
  function serializeInteger(value) {
      return value.toString();
  }
  /**
   * @internal
   * @param value Value to deserialise.
   * @returns Deserialized integer, or null if the given value is not a valid serialised integer.
   */
  function deserializeInteger(literalString) {
      const deserialized = Number.parseInt(literalString, 10);
      if (Number.isNaN(deserialized)) {
          return null;
      }
      return deserialized;
  }
  /**
   * @internal
   * @param locale Locale to transform into a consistent format.
   */
  function normalizeLocale(locale) {
      return locale.toLowerCase();
  }
  /**
   * @internal Library users shouldn't need to be exposed to raw NamedNodes.
   * @param value The value that might or might not be a Named Node.
   * @returns Whether `value` is a Named Node.
   */
  function isNamedNode$1(value) {
      return isTerm(value) && value.termType === "NamedNode";
  }
  /**
   * @internal Library users shouldn't need to be exposed to raw Literals.
   * @param value The value that might or might not be a Literal.
   * @returns Whether `value` is a Literal.
   */
  function isLiteral$1(value) {
      return isTerm(value) && value.termType === "Literal";
  }
  /**
   * @internal Library users shouldn't need to be exposed to raw Terms.
   * @param value The value that might or might not be a Term.
   * @returns Whether `value` is a Term.
   */
  function isTerm(value) {
      return (value !== null &&
          typeof value === "object" &&
          typeof value.termType === "string" &&
          typeof value.value === "string" &&
          typeof value.equals === "function");
  }
  /**
   * @internal Library users shouldn't need to be exposed to LocalNodes.
   * @param value The value that might or might not be a Node with no known IRI yet.
   * @returns Whether `value` is a Node with no known IRI yet.
   */
  function isLocalNode(value) {
      return isNamedNode$1(value) && isLocalNodeIri(value.value);
  }
  /**
   * Ensure that a given value is a valid URL.
   *
   * @internal Library users shouldn't need to be exposed to raw URLs.
   * @param iri The value of which to verify that it is a valid URL.
   */
  function internal_isValidUrl(iri) {
      const iriString = internal_toIriString(iri);
      // If the runtime environment supports URL, instantiate one.
      // If the given IRI is not a valid URL, it will throw an error.
      // See: https://developer.mozilla.org/en-US/docs/Web/API/URL
      /* istanbul ignore if [URL is available in our testing environment, so we cannot test the alternative] */
      if (typeof URL !== "function") {
          // If we can't validate the URL, do not throw an error:
          return true;
      }
      try {
          new URL(iriString);
      }
      catch (_a) {
          return false;
      }
      return true;
  }
  /**
   * @internal Utility method; library users should not need to interact with LocalNodes directly.
   * @param localNode The LocalNode to resolve to a NamedNode.
   * @param resourceIri The Resource in which the Node will be saved.
   */
  function resolveIriForLocalNode(localNode, resourceIri) {
      return DataFactory$1.namedNode(resolveLocalIri(getLocalNodeName(localNode.value), resourceIri));
  }
  /**
   * @internal API for internal use only.
   * @param name The name identifying a Thing.
   * @param resourceIri The Resource in which the Thing can be found.
   */
  function resolveLocalIri(name, resourceIri) {
      /* istanbul ignore if [The URL interface is available in the testing environment, so we cannot test this] */
      if (typeof URL !== "function") {
          throw new Error("The URL interface is not available, so an IRI cannot be determined.");
      }
      const thingIri = new URL(resourceIri);
      thingIri.hash = name;
      return thingIri.href;
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  const DataFactory$1 = dataModel;
  function addRdfJsQuadToDataset(dataset, quad, quadParseOptions = {}) {
      var _a;
      const supportedGraphTypes = [
          "NamedNode",
          "DefaultGraph",
      ];
      if (!supportedGraphTypes.includes(quad.graph.termType)) {
          throw new Error(`Cannot parse Quads with nodes of type [${quad.graph.termType}] as their Graph node.`);
      }
      const graphId = quad.graph.termType === "DefaultGraph" ? "default" : quad.graph.value;
      const graph = (_a = dataset.graphs[graphId]) !== null && _a !== void 0 ? _a : {};
      return freeze(Object.assign(Object.assign({}, dataset), { graphs: freeze(Object.assign(Object.assign({}, dataset.graphs), { [graphId]: addRdfJsQuadToGraph(graph, quad, quadParseOptions) })) }));
  }
  function addRdfJsQuadToGraph(graph, quad, quadParseOptions) {
      var _a;
      const supportedSubjectTypes = [
          "NamedNode",
          "BlankNode",
      ];
      if (!supportedSubjectTypes.includes(quad.subject.termType)) {
          throw new Error(`Cannot parse Quads with nodes of type [${quad.subject.termType}] as their Subject node.`);
      }
      const subjectIri = quad.subject.termType === "BlankNode"
          ? `_:${quad.subject.value}`
          : quad.subject.value;
      const subject = (_a = graph[subjectIri]) !== null && _a !== void 0 ? _a : {
          type: "Subject",
          url: subjectIri,
          predicates: {},
      };
      return freeze(Object.assign(Object.assign({}, graph), { [subjectIri]: addRdfJsQuadToSubject(subject, quad, quadParseOptions) }));
  }
  function addRdfJsQuadToSubject(subject, quad, quadParseOptions) {
      return freeze(Object.assign(Object.assign({}, subject), { predicates: addRdfJsQuadToPredicates(subject.predicates, quad, quadParseOptions) }));
  }
  function addRdfJsQuadToPredicates(predicates, quad, quadParseOptions) {
      var _a;
      const supportedPredicateTypes = [
          "NamedNode",
      ];
      if (!supportedPredicateTypes.includes(quad.predicate.termType)) {
          throw new Error(`Cannot parse Quads with nodes of type [${quad.predicate.termType}] as their Predicate node.`);
      }
      const predicateIri = quad.predicate.value;
      const objects = (_a = predicates[predicateIri]) !== null && _a !== void 0 ? _a : {};
      return freeze(Object.assign(Object.assign({}, predicates), { [predicateIri]: addRdfJsQuadToObjects(objects, quad, quadParseOptions) }));
  }
  function addRdfJsQuadToObjects(objects, quad, quadParseOptions) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (quad.object.termType === "NamedNode") {
          const namedNodes = freeze([
              ...((_a = objects.namedNodes) !== null && _a !== void 0 ? _a : []),
              quad.object.value,
          ]);
          return freeze(Object.assign(Object.assign({}, objects), { namedNodes: namedNodes }));
      }
      if (quad.object.termType === "Literal") {
          if (quad.object.datatype.value === xmlSchemaTypes.langString) {
              const locale = quad.object.language.toLowerCase();
              const thisLocaleStrings = freeze([
                  ...((_c = (_b = objects.langStrings) === null || _b === void 0 ? void 0 : _b[locale]) !== null && _c !== void 0 ? _c : []),
                  quad.object.value,
              ]);
              const langStrings = freeze(Object.assign(Object.assign({}, ((_d = objects.langStrings) !== null && _d !== void 0 ? _d : {})), { [locale]: thisLocaleStrings }));
              return freeze(Object.assign(Object.assign({}, objects), { langStrings: langStrings }));
          }
          // If the Object is a non-langString Literal
          const thisTypeValues = freeze([
              ...((_f = (_e = objects.literals) === null || _e === void 0 ? void 0 : _e[quad.object.datatype.value]) !== null && _f !== void 0 ? _f : []),
              quad.object.value,
          ]);
          const literals = freeze(Object.assign(Object.assign({}, ((_g = objects.literals) !== null && _g !== void 0 ? _g : {})), { [quad.object.datatype.value]: thisTypeValues }));
          return freeze(Object.assign(Object.assign({}, objects), { literals: literals }));
      }
      if (quad.object.termType === "BlankNode") {
          const blankNodePredicates = getPredicatesForBlankNode(quad.object, quadParseOptions);
          const blankNodes = freeze([
              ...((_h = objects.blankNodes) !== null && _h !== void 0 ? _h : []),
              blankNodePredicates,
          ]);
          return freeze(Object.assign(Object.assign({}, objects), { blankNodes: blankNodes }));
      }
      throw new Error(`Objects of type [${quad.object.termType}] are not supported.`);
  }
  function getPredicatesForBlankNode(node, quadParseOptions) {
      var _a, _b;
      const chainBlankNodes = (_a = quadParseOptions.chainBlankNodes) !== null && _a !== void 0 ? _a : [];
      if (chainBlankNodes.find((chainBlankNode) => chainBlankNode.equals(node)) ===
          undefined) {
          // If this Blank Node is not used to provide nested values for another Subject,
          // just return its identifier.
          // That identifier will also be listed among the Subjects in the Graph.
          return getBlankNodeId(node);
      }
      /* istanbul ignore next: If there are chain nodes, there will always be other Quads, so the `?? []` can't be reached: */
      const quads = (_b = quadParseOptions.otherQuads) !== null && _b !== void 0 ? _b : [];
      const quadsWithNodeAsSubject = quads.filter((quad) => quad.subject.equals(node));
      // First add the Quads with regular Objects
      const predicates = quadsWithNodeAsSubject
          .filter((quad) => !isBlankNode$1(quad.object))
          .reduce((predicatesAcc, quad) => {
          var _a;
          const supportedPredicateTypes = [
              "NamedNode",
          ];
          if (!supportedPredicateTypes.includes(quad.predicate.termType)) {
              throw new Error(`Cannot parse Quads with nodes of type [${quad.predicate.termType}] as their Predicate node.`);
          }
          const objects = (_a = predicatesAcc[quad.predicate.value]) !== null && _a !== void 0 ? _a : {};
          return freeze(Object.assign(Object.assign({}, predicatesAcc), { [quad.predicate.value]: addRdfJsQuadToObjects(objects, quad, quadParseOptions) }));
      }, {});
      // And then also add the Quads that have another Blank Node as the Object
      // in addition to the Blank Node `node` as the Subject:
      const blankNodeObjectQuads = quadsWithNodeAsSubject.filter((quad) => isBlankNode$1(quad.object));
      return blankNodeObjectQuads.reduce((predicatesAcc, quad) => {
          var _a, _b;
          const supportedPredicateTypes = [
              "NamedNode",
          ];
          if (!supportedPredicateTypes.includes(quad.predicate.termType)) {
              throw new Error(`Cannot parse Quads with nodes of type [${quad.predicate.termType}] as their Predicate node.`);
          }
          /* istanbul ignore next: The `?? {}` doesn't get hit; presumably it's initialised above. */
          const objects = (_a = predicatesAcc[quad.predicate.value]) !== null && _a !== void 0 ? _a : {};
          /* istanbul ignore next: The `?? []` doesn't get hit; presumably it's initialised above. */
          const blankNodes = (_b = objects.blankNodes) !== null && _b !== void 0 ? _b : [];
          return freeze(Object.assign(Object.assign({}, predicatesAcc), { 
              // The BlankNode assertions are valid because we filtered on BlankNodes above:
              [quad.predicate.value]: Object.assign(Object.assign({}, objects), { blankNodes: [
                      ...blankNodes,
                      getPredicatesForBlankNode(quad.object, quadParseOptions),
                  ] }) }));
      }, predicates);
  }
  /**
   * Given an array of Quads, returns all Blank Nodes that are used in a single chain of Nodes.
   *
   * This allows you to obtain which Blank Nodes are involved in e.g. RDF lists.
   * This is useful because those can be represented as nested data that will have
   * a deterministic structure, whereas a representation of Blank Nodes that
   * create a cycle or are re-used will need ad-hoc, non-deterministic identifiers
   * to allow for representation without inifinite nesting.
   */
  function getChainBlankNodes(quads) {
      // All Blank Nodes that occur in Subject position:
      const blankNodeSubjects = quads
          .map((quad) => quad.subject)
          .filter(isBlankNode$1);
      // All Blank Nodes that occur in Object position:
      const blankNodeObjects = quads.map((quad) => quad.object).filter(isBlankNode$1);
      // Makes sure that all given Nodes are the same,
      // which will be used to verify that a set of Quads all have the same Subject:
      function everyNodeTheSame(nodes) {
          // This could potentially be made more performant by mapping every term
          // to their value and using native JS comparisons, assuming every node is
          // either a Blank or a Named Node.
          return nodes.every((otherNode) => nodes.every((anotherNode) => otherNode.equals(anotherNode)));
      }
      // Get all Blank Nodes that are part of a cycle in the graph:
      const cycleBlankNodes = [];
      blankNodeObjects.forEach((blankNodeObject) => {
          cycleBlankNodes.push(...getCycleBlankNodes(blankNodeObject, quads));
      });
      // Get Blank Nodes that are used to provide nested values for a single Subject,
      // which we'll represent as nested values as well
      // (this allows us to avoid generating a non-deterministic, ad-hoc identifier
      // for those Blank Nodes).
      // We'll do this by taking all Blank Nodes in the given Quads...
      const chainBlankNodes = blankNodeSubjects
          .concat(blankNodeObjects)
          .filter((blankNode) => {
          // ....removing those Blank Nodes that are part of a cycle...
          if (cycleBlankNodes.some((cycleBlankNode) => cycleBlankNode.equals(blankNode))) {
              return false;
          }
          // ...and then returning only those Blank Nodes that only occur in the
          // Object position for a single Subject, i.e. that are part of a single
          // chain:
          const subjectsWithThisNodeAsObject = quads
              .filter((quad) => quad.object.equals(blankNode))
              .map((quad) => quad.subject);
          return (subjectsWithThisNodeAsObject.length > 0 &&
              everyNodeTheSame(subjectsWithThisNodeAsObject));
      });
      return chainBlankNodes;
  }
  function toRdfJsQuads(dataset, options = {}) {
      var _a;
      const quads = [];
      const dataFactory = (_a = options.dataFactory) !== null && _a !== void 0 ? _a : dataModel;
      Object.keys(dataset.graphs).forEach((graphIri) => {
          const graph = dataset.graphs[graphIri];
          const graphNode = graphIri === "default"
              ? dataFactory.defaultGraph()
              : dataFactory.namedNode(graphIri);
          Object.keys(graph).forEach((subjectIri) => {
              const predicates = graph[subjectIri].predicates;
              const subjectNode = isBlankNodeId(subjectIri)
                  ? dataFactory.blankNode(getBlankNodeValue(subjectIri))
                  : dataFactory.namedNode(subjectIri);
              quads.push(...subjectToRdfJsQuads(predicates, subjectNode, graphNode, options));
          });
      });
      return quads;
  }
  function subjectToRdfJsQuads(predicates, subjectNode, graphNode, options = {}) {
      var _a;
      const quads = [];
      const dataFactory = (_a = options.dataFactory) !== null && _a !== void 0 ? _a : dataModel;
      Object.keys(predicates).forEach((predicateIri) => {
          var _a, _b, _c, _d;
          const predicateNode = dataFactory.namedNode(predicateIri);
          const langStrings = (_a = predicates[predicateIri].langStrings) !== null && _a !== void 0 ? _a : {};
          const namedNodes = (_b = predicates[predicateIri].namedNodes) !== null && _b !== void 0 ? _b : [];
          const literals = (_c = predicates[predicateIri].literals) !== null && _c !== void 0 ? _c : {};
          const blankNodes = (_d = predicates[predicateIri].blankNodes) !== null && _d !== void 0 ? _d : [];
          const literalTypes = Object.keys(literals);
          literalTypes.forEach((typeIri) => {
              const typeNode = dataFactory.namedNode(typeIri);
              const literalValues = literals[typeIri];
              literalValues.forEach((value) => {
                  const literalNode = dataFactory.literal(value, typeNode);
                  quads.push(dataFactory.quad(subjectNode, predicateNode, literalNode, graphNode));
              });
          });
          const locales = Object.keys(langStrings);
          locales.forEach((locale) => {
              const localeValues = langStrings[locale];
              localeValues.forEach((value) => {
                  const langStringNode = dataFactory.literal(value, locale);
                  quads.push(dataFactory.quad(subjectNode, predicateNode, langStringNode, graphNode));
              });
          });
          namedNodes.forEach((namedNodeIri) => {
              const node = dataFactory.namedNode(namedNodeIri);
              quads.push(dataFactory.quad(subjectNode, predicateNode, node, graphNode));
          });
          blankNodes.forEach((blankNodeIdOrPredicates) => {
              if (isBlankNodeId(blankNodeIdOrPredicates)) {
                  const blankNode = dataFactory.blankNode(getBlankNodeValue(blankNodeIdOrPredicates));
                  quads.push(dataFactory.quad(subjectNode, predicateNode, blankNode, graphNode));
              }
              else {
                  const node = dataFactory.blankNode();
                  const blankNodeObjectQuad = dataFactory.quad(subjectNode, predicateNode, node, graphNode);
                  const blankNodeSubjectQuads = subjectToRdfJsQuads(blankNodeIdOrPredicates, node, graphNode);
                  quads.push(blankNodeObjectQuad);
                  quads.push(...blankNodeSubjectQuads);
              }
          });
      });
      return quads;
  }
  /**
   * A recursive function that finds all Blank Nodes in an array of Quads that create a cycle in the graph.
   *
   * This function will traverse the graph starting from `currentNode`, keeping
   * track of all the Blank Nodes it encounters twice while doing so, and
   * returning those.
   */
  function getCycleBlankNodes(currentNode, quads, traversedBlankNodes = []) {
      // If we've encountered `currentNode` before, all the Blank Nodes we've
      // encountered so far are part of a cycle. Return those.
      if (traversedBlankNodes.find((traversedBlankNode) => traversedBlankNode.equals(currentNode)) !== undefined) {
          return traversedBlankNodes;
      }
      // Find all Blank Nodes that are connected to `currentNode`:
      const blankNodeObjects = quads
          .filter((quad) => quad.subject.equals(currentNode) && isBlankNode$1(quad.object))
          .map((quad) => quad.object);
      // If no Blank Nodes are connected to `currentNode`, and `currentNode` is not
      // part of a cycle, we're done; the currently traversed Nodes do not form a
      // cycle:
      if (blankNodeObjects.length === 0) {
          return [];
      }
      // Store that we've traversed `currentNode`, then move on to all the Blank
      // Nodes connected to it, which will then take up the role of `currentNode`:
      const nextTraversedNodes = [...traversedBlankNodes, currentNode];
      const cycleBlankNodeArrays = blankNodeObjects.map((nextNode) => getCycleBlankNodes(nextNode, quads, nextTraversedNodes));
      // Collect all the cycle Blank Nodes found in those traverals,
      // then return them:
      const allCycleBlankNodes = [];
      for (const cycleBlankNodes of cycleBlankNodeArrays) {
          allCycleBlankNodes.push(...cycleBlankNodes);
      }
      return allCycleBlankNodes;
  }
  function isBlankNode$1(term) {
      return term.termType === "BlankNode";
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * ```{note} This function is still experimental and subject to change, even
   * in a non-major release.
   * ```
   * This returns a parser that transforms a JSON-LD string into a set of RDFJS quads.
   *
   * @returns A Parser object.
   * @since 1.15.0
   */
  const getTurtleParser = () => {
      const onQuadCallbacks = [];
      const onCompleteCallbacks = [];
      const onErrorCallbacks = [];
      return {
          onQuad: (callback) => {
              onQuadCallbacks.push(callback);
          },
          onError: (callback) => {
              onErrorCallbacks.push(callback);
          },
          onComplete: (callback) => {
              onCompleteCallbacks.push(callback);
          },
          parse: async (source, resourceInfo) => {
              const parser = await getParser(getSourceUrl(resourceInfo));
              parser.parse(source, (error, quad, _prefixes) => {
                  if (error) {
                      onErrorCallbacks.forEach((callback) => callback(error));
                  }
                  else if (quad) {
                      onQuadCallbacks.forEach((callback) => callback(quad));
                  }
                  else {
                      onCompleteCallbacks.forEach((callback) => callback());
                  }
              });
          },
      };
  };
  async function getParser(baseIri) {
      const n3 = await loadN3();
      return new n3.Parser({ format: "text/turtle", baseIRI: baseIri });
  }
  /**
   * @param quads Triples that should be serialised to Turtle
   * @internal Utility method for internal use; not part of the public API.
   */
  async function triplesToTurtle(quads) {
      const n3 = await loadN3();
      const format = "text/turtle";
      const writer = new n3.Writer({ format: format });
      // Remove any potentially lingering references to Named Graphs in Quads;
      // they'll be determined by the URL the Turtle will be sent to:
      const triples = quads.map((quad) => DataFactory$1.quad(quad.subject, quad.predicate, quad.object, undefined));
      writer.addQuads(triples);
      const writePromise = new Promise((resolve, reject) => {
          writer.end((error, result) => {
              /* istanbul ignore if [n3.js doesn't actually pass an error nor a result, apparently: https://github.com/rdfjs/N3.js/blob/62682e48c02d8965b4d728cb5f2cbec6b5d1b1b8/src/N3Writer.js#L290] */
              if (error) {
                  return reject(error);
              }
              resolve(result);
          });
      });
      const rawTurtle = await writePromise;
      return rawTurtle;
  }
  async function loadN3() {
      // When loaded via Webpack or another bundler that looks at the `modules` field in package.json,
      // N3 serves up ES modules with named exports.
      // However, when it is loaded in Node, it serves up a CommonJS module, which, when imported from
      // a Node ES module, is in the shape of a default export that is an object with all the named
      // exports as its properties.
      // This means that if we were to import the default module, our code would fail in Webpack,
      // whereas if we imported the named exports, our code would fail in Node.
      // As a workaround, we use a dynamic import. This way, we can use the same syntax in every
      // environment, where the differences between the environments are in whether the returned object
      // includes a `default` property that contains all exported functions, or whether those functions
      // are available on the returned object directly. We can then respond to those different
      // situations at runtime.
      // Unfortunately, that does mean that tree shaking will not work until N3 also provides ES modules
      // for Node, or adds a default export for Webpack. See
      // https://github.com/rdfjs/N3.js/issues/196
      const n3Module = await Promise.resolve().then(function () { return index; });
      /* istanbul ignore if: the package provides named exports in the unit test environment */
      if (typeof n3Module.default !== "undefined") {
          return n3Module.default;
      }
      return n3Module;
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /** @hidden For internal use only. */
  function internal_getReadableValue(value) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (isNamedNode$1(value)) {
          return `<${value.value}> (URL)`;
      }
      if (isLiteral$1(value)) {
          /* istanbul ignore if: thingAsMarkdown always instantiates a NamedNode, so we can't hit this code path in tests. */
          if (!isNamedNode$1(value.datatype)) {
              return `[${value.value}] (RDF/JS Literal of unknown type)`;
          }
          let val;
          switch (value.datatype.value) {
              case xmlSchemaTypes.boolean:
                  val =
                      (_b = (_a = deserializeBoolean(value.value)) === null || _a === void 0 ? void 0 : _a.valueOf()) !== null && _b !== void 0 ? _b : `Invalid data: \`${value.value}\``;
                  return val + " (boolean)";
              case xmlSchemaTypes.dateTime:
                  val =
                      (_d = (_c = deserializeDatetime(value.value)) === null || _c === void 0 ? void 0 : _c.toUTCString()) !== null && _d !== void 0 ? _d : `Invalid data: \`${value.value}\``;
                  return val + " (datetime)";
              case xmlSchemaTypes.decimal:
                  val =
                      (_f = (_e = deserializeDecimal(value.value)) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : `Invalid data: \`${value.value}\``;
                  return val + " (decimal)";
              case xmlSchemaTypes.integer:
                  val =
                      (_h = (_g = deserializeInteger(value.value)) === null || _g === void 0 ? void 0 : _g.toString()) !== null && _h !== void 0 ? _h : `Invalid data: \`${value.value}\``;
                  return val + " (integer)";
              case xmlSchemaTypes.langString:
                  return `"${value.value}" (${value.language} string)`;
              case xmlSchemaTypes.string:
                  return `"${value.value}" (string)`;
              default:
                  return `[${value.value}] (RDF/JS Literal of type: \`${value.datatype.value}\`)`;
          }
      }
      /* istanbul ignore else: thingAsMarkdown doesn't generate other Nodes, so we can't hit this path in tests. */
      if (value.termType === "BlankNode") {
          return `[${value.value}] (RDF/JS BlankNode)`;
      }
      /* istanbul ignore next: thingAsMarkdown doesn't generate Quad Nodes, so we can't hit this path in tests. */
      if (value.termType === "Quad") {
          return `??? (nested RDF* Quad)`;
      }
      /* istanbul ignore else: The if statements are exhaustive; if not, TypeScript will complain. */
      /* istanbul ignore next: thingAsMarkdown doesn't generate Variable Nodes, so we can't hit this path in tests. */
      if (value.termType === "Variable") {
          return `?${value.value} (RDF/JS Variable)`;
      }
      /* istanbul ignore next: The if statements are exhaustive; if not, TypeScript will complain. */
      return value;
  }
  /**
   * @hidden
   */
  function internal_throwIfNotThing(thing) {
      if (!isThing(thing)) {
          throw new ThingExpectedError(thing);
      }
  }
  /**
   * @hidden
   * @param solidDataset
   */
  function internal_addAdditionsToChangeLog(solidDataset, additions) {
      const changeLog = hasChangelog(solidDataset)
          ? solidDataset.internal_changeLog
          : /* istanbul ignore next: This function always gets called after addDeletionsToChangeLog, so the ChangeLog always already exists in tests: */
              { additions: [], deletions: [] };
      const [newAdditions, newDeletions] = additions
          .filter((addition) => !containsBlankNode(addition))
          .reduce(([additionsAcc, deletionsAcc], addition) => {
          const existingDeletion = deletionsAcc.find((deletion) => deletion.equals(addition));
          if (typeof existingDeletion !== "undefined") {
              return [
                  additionsAcc,
                  deletionsAcc.filter((deletion) => !deletion.equals(addition)),
              ];
          }
          return [additionsAcc.concat(addition), deletionsAcc];
      }, [changeLog.additions, changeLog.deletions]);
      return freeze(Object.assign(Object.assign({}, solidDataset), { internal_changeLog: {
              additions: newAdditions,
              deletions: newDeletions,
          } }));
  }
  /**
   * @hidden
   * @param solidDataset
   */
  function internal_addDeletionsToChangeLog(solidDataset, deletions) {
      const changeLog = hasChangelog(solidDataset)
          ? solidDataset.internal_changeLog
          : { additions: [], deletions: [] };
      const [newAdditions, newDeletions] = deletions
          .filter((deletion) => !containsBlankNode(deletion))
          .reduce(([additionsAcc, deletionsAcc], deletion) => {
          const existingAddition = additionsAcc.find((addition) => addition.equals(deletion));
          if (typeof existingAddition !== "undefined") {
              return [
                  additionsAcc.filter((addition) => !addition.equals(deletion)),
                  deletionsAcc,
              ];
          }
          return [additionsAcc, deletionsAcc.concat(deletion)];
      }, [changeLog.additions, changeLog.deletions]);
      return freeze(Object.assign(Object.assign({}, solidDataset), { internal_changeLog: {
              additions: newAdditions,
              deletions: newDeletions,
          } }));
  }
  /**
   * Enforces the presence of a Changelog for a given dataset. If a changelog is
   * already present, it is unchanged. Otherwise, an empty changelog is created.
   * @hidden
   * @param solidDataset
   */
  function internal_withChangeLog(solidDataset) {
      const newSolidDataset = hasChangelog(solidDataset)
          ? solidDataset
          : freeze(Object.assign(Object.assign({}, solidDataset), { internal_changeLog: { additions: [], deletions: [] } }));
      return newSolidDataset;
  }
  /**
   * We don't currently support reading and writing Blank Nodes, so this function can be used to skip those Quads.
   *
   * This is needed because we cannot reconcile Blank Nodes in additions and
   * deletions. Down the road, we should do a diff before saving a SolidDataset
   * against a saved copy of the originally-fetched one, based on our own data
   * structures, which should make it easier to reconcile.
   */
  function containsBlankNode(quad) {
      return (quad.subject.termType === "BlankNode" ||
          quad.object.termType === "BlankNode");
  }

  /**
   * Returns the URL value of the specified Property from a [[Thing]].
   * If the Property is not present or its value is not of type URL, returns null.
   * If the Property has multiple URL values, returns one of its URL values.
   *
   * @param thing The [[Thing]] to read a URL value from.
   * @param property The Property whose URL value to return.
   * @returns A URL value for the given Property if present, or null if the Property is not present or the value is not of type URL.
   */
  function getUrl(thing, property) {
      var _a, _b, _c;
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      const predicateUrl = internal_toIriString(property);
      const firstUrl = (_c = (_b = (_a = thing.predicates[predicateUrl]) === null || _a === void 0 ? void 0 : _a.namedNodes) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : null;
      if (firstUrl === null) {
          return null;
      }
      return isLocalNodeIri(firstUrl) ? `#${getLocalNodeName(firstUrl)}` : firstUrl;
  }
  /** @hidden Alias of [[getUrl]] for those who prefer IRI terminology. */
  const getIri = getUrl;
  /**
   * Returns the URL values of the specified Property from a [[Thing]].
   * If the Property is not present, returns an empty array.
   * If the Property's value is not of type URL, omits that value in the array.
   *
   * @param thing The [[Thing]] to read the URL values from.
   * @param property The Property whose URL values to return.
   * @returns An array of URL values for the given Property.
   */
  function getUrlAll(thing, property) {
      var _a, _b, _c;
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      const predicateUrl = internal_toIriString(property);
      return ((_c = (_b = (_a = thing.predicates[predicateUrl]) === null || _a === void 0 ? void 0 : _a.namedNodes) === null || _b === void 0 ? void 0 : _b.map((iri) => isLocalNodeIri(iri) ? `#${getLocalNodeName(iri)}` : iri)) !== null && _c !== void 0 ? _c : []);
  }
  /** @hidden Alias of [[getUrlAll]] for those who prefer IRI terminology. */
  const getIriAll = getUrlAll;
  /**
   * @param thing The [[Thing]] to read the NamedNode values from.
   * @param property The given Property for which you want the NamedNode values.
   * @returns The NamedNode values for the given Property.
   * @ignore This should not be needed due to the other get*() functions. If you do find yourself needing it, please file a feature request for your use case.
   * @see https://rdf.js.org/data-model-spec/#namednode-interface
   */
  function getNamedNodeAll(thing, property) {
      const iriStrings = getIriAll(thing, property);
      return iriStrings.map((iriString) => DataFactory$1.namedNode(iriString));
  }
  /**
   * @param thing The [[Thing]] to read the Literal values from.
   * @param property The given Property for which you want the Literal values.
   * @returns The Literal values for the given Property.
   * @ignore This should not be needed due to the other get*All() functions. If you do find yourself needing it, please file a feature request for your use case.
   * @see https://rdf.js.org/data-model-spec/#literal-interface
   */
  function getLiteralAll(thing, property) {
      var _a, _b, _c, _d;
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      const predicateIri = internal_toIriString(property);
      let literals = [];
      const langStrings = (_b = (_a = thing.predicates[predicateIri]) === null || _a === void 0 ? void 0 : _a.langStrings) !== null && _b !== void 0 ? _b : {};
      const locales = Object.keys(langStrings);
      for (const locale of locales) {
          const stringsInLocale = langStrings[locale];
          const localeLiterals = stringsInLocale.map((langString) => DataFactory$1.literal(langString, locale));
          literals = literals.concat(localeLiterals);
      }
      const otherLiterals = (_d = (_c = thing.predicates[predicateIri]) === null || _c === void 0 ? void 0 : _c.literals) !== null && _d !== void 0 ? _d : {};
      const dataTypes = Object.keys(otherLiterals);
      for (const dataType of dataTypes) {
          const values = otherLiterals[dataType];
          const typeNode = DataFactory$1.namedNode(dataType);
          const dataTypeLiterals = values.map((value) => DataFactory$1.literal(value, typeNode));
          literals = literals.concat(dataTypeLiterals);
      }
      return literals;
  }
  /**
   * @param thing The [[Thing]] to read the raw RDF/JS values from.
   * @param property The given Property for which you want the raw values.
   * @returns The Terms for the given Property.
   * @ignore This should not be needed due to the other get*() functions. If you do find yourself needing it, please file a feature request for your use case.
   * @see https://rdf.js.org/data-model-spec/
   * @since 0.3.0
   */
  function getTermAll(thing, property) {
      var _a, _b;
      internal_throwIfNotThing(thing);
      const namedNodes = getNamedNodeAll(thing, property);
      const literals = getLiteralAll(thing, property);
      const predicateIri = internal_toIriString(property);
      const blankNodeValues = (_b = (_a = thing.predicates[predicateIri]) === null || _a === void 0 ? void 0 : _a.blankNodes) !== null && _b !== void 0 ? _b : [];
      const blankNodes = blankNodeValues.map((rawBlankNode) => {
          const blankNodeName = isBlankNodeId(rawBlankNode)
              ? getBlankNodeValue(rawBlankNode)
              : undefined;
          return DataFactory$1.blankNode(blankNodeName);
      });
      const terms = namedNodes
          .concat(literals)
          .concat(blankNodes);
      return terms;
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * Extract Quads with a given Subject from a [[SolidDataset]] into a [[Thing]].
   *
   * @param solidDataset The [[SolidDataset]] to extract the [[Thing]] from.
   * @param thingUrl The URL of the desired [[Thing]].
   * @param options Not yet implemented.
   */
  function getThing(solidDataset, thingUrl, options = {}) {
      var _a;
      if (!internal_isValidUrl(thingUrl)) {
          throw new ValidThingUrlExpectedError(thingUrl);
      }
      const graph = typeof options.scope !== "undefined"
          ? internal_toIriString(options.scope)
          : "default";
      const thingsByIri = (_a = solidDataset.graphs[graph]) !== null && _a !== void 0 ? _a : {};
      const thingIri = internal_toIriString(thingUrl);
      const resolvedThingIri = isLocalNodeIri(thingIri) && hasServerResourceInfo(solidDataset)
          ? resolveLocalIri(getLocalNodeName(thingIri), getSourceUrl(solidDataset))
          : thingIri;
      const thing = thingsByIri[resolvedThingIri];
      if (typeof thing === "undefined") {
          return null;
      }
      return thing;
  }
  /**
   * Get all [[Thing]]s about which a [[SolidDataset]] contains Quads.
   *
   * @param solidDataset The [[SolidDataset]] to extract the [[Thing]]s from.
   * @param options Not yet implemented.
   */
  function getThingAll(solidDataset, options = { acceptBlankNodes: false }) {
      var _a;
      const graph = typeof options.scope !== "undefined"
          ? internal_toIriString(options.scope)
          : "default";
      const thingsByIri = (_a = solidDataset.graphs[graph]) !== null && _a !== void 0 ? _a : {};
      return Object.values(thingsByIri).filter((thing) => !isBlankNodeId(thing.url) || options.acceptBlankNodes);
  }
  /**
   * Insert a [[Thing]] into a [[SolidDataset]], replacing previous instances of that Thing.
   *
   * @param solidDataset The SolidDataset to insert a Thing into.
   * @param thing The Thing to insert into the given SolidDataset.
   * @returns A new SolidDataset equal to the given SolidDataset, but with the given Thing.
   */
  function setThing(solidDataset, thing) {
      var _a;
      const thingIri = isThingLocal(thing) && hasServerResourceInfo(solidDataset)
          ? resolveLocalIri(getLocalNodeName(thing.url), getSourceUrl(solidDataset))
          : thing.url;
      const defaultGraph = solidDataset.graphs.default;
      const updatedDefaultGraph = freeze(Object.assign(Object.assign({}, defaultGraph), { [thingIri]: freeze(Object.assign(Object.assign({}, thing), { url: thingIri })) }));
      const updatedGraphs = freeze(Object.assign(Object.assign({}, solidDataset.graphs), { default: updatedDefaultGraph }));
      const subjectNode = DataFactory$1.namedNode(thingIri);
      const deletedThingPredicates = (_a = solidDataset.graphs.default[thingIri]) === null || _a === void 0 ? void 0 : _a.predicates;
      const deletions = typeof deletedThingPredicates !== "undefined"
          ? subjectToRdfJsQuads(deletedThingPredicates, subjectNode, DataFactory$1.defaultGraph())
          : [];
      const additions = subjectToRdfJsQuads(thing.predicates, subjectNode, DataFactory$1.defaultGraph());
      return internal_addAdditionsToChangeLog(internal_addDeletionsToChangeLog(freeze(Object.assign(Object.assign({}, solidDataset), { graphs: updatedGraphs })), deletions), additions);
  }
  /**
   * Remove a Thing from a SolidDataset.
   *
   * @param solidDataset The SolidDataset to remove a Thing from.
   * @param thing The Thing to remove from `solidDataset`.
   * @returns A new [[SolidDataset]] equal to the input SolidDataset, excluding the given Thing.
   */
  function removeThing(solidDataset, thing) {
      var _a;
      let thingIri;
      if (isNamedNode$1(thing)) {
          thingIri = thing.value;
      }
      else if (typeof thing === "string") {
          thingIri =
              isLocalNodeIri(thing) && hasServerResourceInfo(solidDataset)
                  ? resolveLocalIri(getLocalNodeName(thing), getSourceUrl(solidDataset))
                  : thing;
      }
      else if (isThingLocal(thing)) {
          thingIri = thing.url;
      }
      else {
          thingIri = asIri(thing);
      }
      const defaultGraph = solidDataset.graphs.default;
      const updatedDefaultGraph = Object.assign({}, defaultGraph);
      delete updatedDefaultGraph[thingIri];
      const updatedGraphs = freeze(Object.assign(Object.assign({}, solidDataset.graphs), { default: freeze(updatedDefaultGraph) }));
      const subjectNode = DataFactory$1.namedNode(thingIri);
      const deletedThingPredicates = (_a = solidDataset.graphs.default[thingIri]) === null || _a === void 0 ? void 0 : _a.predicates;
      const deletions = typeof deletedThingPredicates !== "undefined"
          ? subjectToRdfJsQuads(deletedThingPredicates, subjectNode, DataFactory$1.defaultGraph())
          : [];
      return internal_addDeletionsToChangeLog(freeze(Object.assign(Object.assign({}, solidDataset), { graphs: updatedGraphs })), deletions);
  }
  function createThing(options = {}) {
      var _a;
      if (typeof options.url !== "undefined") {
          const url = options.url;
          if (!internal_isValidUrl(url)) {
              throw new ValidThingUrlExpectedError(url);
          }
          const thing = freeze({
              type: "Subject",
              predicates: freeze({}),
              url: url,
          });
          return thing;
      }
      const name = (_a = options.name) !== null && _a !== void 0 ? _a : generateName();
      const localNodeIri = getLocalNodeIri(name);
      const thing = freeze({
          type: "Subject",
          predicates: freeze({}),
          url: localNodeIri,
      });
      return thing;
  }
  /**
   * @param input An value that might be a [[Thing]].
   * @returns Whether `input` is a Thing.
   * @since 0.2.0
   */
  function isThing(input) {
      return (typeof input === "object" &&
          input !== null &&
          typeof input.type === "string" &&
          input.type === "Subject");
  }
  function asUrl(thing, baseUrl) {
      if (isThingLocal(thing)) {
          if (typeof baseUrl === "undefined") {
              throw new Error("The URL of a Thing that has not been persisted cannot be determined without a base URL.");
          }
          return resolveLocalIri(getLocalNodeName(thing.url), baseUrl);
      }
      return thing.url;
  }
  /** @hidden Alias of [[asUrl]] for those who prefer IRI terminology. */
  const asIri = asUrl;
  /**
   * Gets a human-readable representation of the given Thing to aid debugging.
   *
   * Note that changes to the exact format of the return value are not considered a breaking change;
   * it is intended to aid in debugging, not as a serialisation method that can be reliably parsed.
   *
   * @param thing The Thing to get a human-readable representation of.
   * @since 0.3.0
   */
  function thingAsMarkdown(thing) {
      let thingAsMarkdown = "";
      if (isThingLocal(thing)) {
          thingAsMarkdown += `## Thing (no URL yet — identifier: \`#${getLocalNodeName(thing.url)}\`)\n`;
      }
      else {
          thingAsMarkdown += `## Thing: ${thing.url}\n`;
      }
      const predicateIris = Object.keys(thing.predicates);
      if (predicateIris.length === 0) {
          thingAsMarkdown += "\n<empty>\n";
      }
      else {
          for (const predicate of predicateIris) {
              thingAsMarkdown += `\nProperty: ${predicate}\n`;
              const values = getTermAll(thing, predicate);
              values.forEach((value) => {
                  thingAsMarkdown += `- ${internal_getReadableValue(value)}\n`;
              });
          }
      }
      return thingAsMarkdown;
  }
  /**
   * @param thing The [[Thing]] of which a URL might or might not be known.
   * @return `true` if `thing` has no known URL yet.
   * @since 1.7.0
   */
  function isThingLocal(thing) {
      return isLocalNodeIri(thing.url);
  }
  /**
   * This error is thrown when a function expected to receive a [[Thing]] but received something else.
   * @since 1.2.0
   */
  class ThingExpectedError extends SolidClientError {
      constructor(receivedValue) {
          const message = `Expected a Thing, but received: [${receivedValue}].`;
          super(message);
          this.receivedValue = receivedValue;
      }
  }
  /**
   * This error is thrown when a function expected to receive a valid URL to identify a property but received something else.
   */
  class ValidPropertyUrlExpectedError extends SolidClientError {
      constructor(receivedValue) {
          const value = isNamedNode$1(receivedValue)
              ? receivedValue.value
              : receivedValue;
          const message = `Expected a valid URL to identify a property, but received: [${value}].`;
          super(message);
          this.receivedProperty = value;
      }
  }
  /**
   * This error is thrown when a function expected to receive a valid URL value but received something else.
   */
  class ValidValueUrlExpectedError extends SolidClientError {
      constructor(receivedValue) {
          const value = isNamedNode$1(receivedValue)
              ? receivedValue.value
              : receivedValue;
          const message = `Expected a valid URL value, but received: [${value}].`;
          super(message);
          this.receivedValue = value;
      }
  }
  /**
   * This error is thrown when a function expected to receive a valid URL to identify a [[Thing]] but received something else.
   */
  class ValidThingUrlExpectedError extends SolidClientError {
      constructor(receivedValue) {
          const value = isNamedNode$1(receivedValue)
              ? receivedValue.value
              : receivedValue;
          const message = `Expected a valid URL to identify a Thing, but received: [${value}].`;
          super(message);
          this.receivedValue = value;
      }
  }
  /**
   * Generate a string that can be used as the unique identifier for a Thing
   *
   * This function works by starting with a date string (so that Things can be
   * sorted chronologically), followed by a random number generated by taking a
   * random number between 0 and 1, and cutting off the `0.`.
   *
   * @internal
   * @returns An string that's likely to be unique
   */
  const generateName = () => {
      return (Date.now().toString() + Math.random().toString().substring("0.".length));
  };

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * This function normalizes IRIs as managed by the server to ease accurate comparison.
   * @param iri
   * @hidden
   */
  function normalizeServerSideIri(iri) {
      const iriObj = new URL(iri);
      iriObj.hash = "";
      return iriObj.href;
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * Initialise a new [[SolidDataset]] in memory.
   *
   * @returns An empty [[SolidDataset]].
   */
  function createSolidDataset() {
      return freeze({
          type: "Dataset",
          graphs: {
              default: {},
          },
      });
  }
  /**
   * @hidden This interface is not exposed yet until we've tried it out in practice.
   */
  async function responseToSolidDataset(response, parseOptions = {}) {
      if (internal_isUnsuccessfulResponse(response)) {
          throw new FetchError$1(`Fetching the SolidDataset at [${response.url}] failed: [${response.status}] [${response.statusText}].`, response);
      }
      const resourceInfo = responseToResourceInfo(response);
      const parsers = Object.assign({ "text/turtle": getTurtleParser() }, parseOptions.parsers);
      const contentType = getContentType$1(resourceInfo);
      if (contentType === null) {
          throw new Error(`Could not determine the content type of the Resource at [${getSourceUrl(resourceInfo)}].`);
      }
      const mimeType = contentType.split(";")[0];
      const parser = parsers[mimeType];
      if (typeof parser === "undefined") {
          throw new Error(`The Resource at [${getSourceUrl(resourceInfo)}] has a MIME type of [${mimeType}], but the only parsers available are for the following MIME types: [${Object.keys(parsers).join(", ")}].`);
      }
      const data = await response.text();
      const parsingPromise = new Promise((resolve, reject) => {
          let solidDataset = freeze({
              graphs: freeze({ default: freeze({}) }),
              type: "Dataset",
          });
          // While Quads without Blank Nodes can be added to the SolidDataset as we
          // encounter them, to parse Quads with Blank Nodes, we'll have to wait until
          // we've seen all the Quads, so that we can reconcile equal Blank Nodes.
          const quadsWithBlankNodes = [];
          const allQuads = [];
          parser.onError((error) => {
              reject(new Error(`Encountered an error parsing the Resource at [${getSourceUrl(resourceInfo)}] with content type [${contentType}]: ${error}`));
          });
          parser.onQuad((quad) => {
              allQuads.push(quad);
              if (quad.subject.termType === "BlankNode" ||
                  quad.object.termType === "BlankNode") {
                  // Quads with Blank Nodes will be parsed when all Quads are known,
                  // so that equal Blank Nodes can be reconciled:
                  quadsWithBlankNodes.push(quad);
              }
              else {
                  solidDataset = addRdfJsQuadToDataset(solidDataset, quad);
              }
          });
          parser.onComplete(async () => {
              // If a Resource contains more than this number of Blank Nodes,
              // we consider the detection of chains (O(n^2), I think) to be too
              // expensive, and just incorporate them as regular Blank Nodes with
              // non-deterministic, ad-hoc identifiers into the SolidDataset:
              const maxBlankNodesToDetectChainsFor = 20;
              // Some Blank Nodes only serve to use a set of Quads as the Object for a
              // single Subject. Those Quads will be added to the SolidDataset when
              // their Subject's Blank Node is encountered in the Object position.
              const chainBlankNodes = quadsWithBlankNodes.length <= maxBlankNodesToDetectChainsFor
                  ? getChainBlankNodes(quadsWithBlankNodes)
                  : [];
              const quadsWithoutChainBlankNodeSubjects = quadsWithBlankNodes.filter((quad) => chainBlankNodes.every((chainBlankNode) => !chainBlankNode.equals(quad.subject)));
              solidDataset = quadsWithoutChainBlankNodeSubjects.reduce((datasetAcc, quad) => addRdfJsQuadToDataset(datasetAcc, quad, {
                  otherQuads: allQuads,
                  chainBlankNodes: chainBlankNodes,
              }), solidDataset);
              const solidDatasetWithResourceInfo = freeze(Object.assign(Object.assign({}, solidDataset), resourceInfo));
              resolve(solidDatasetWithResourceInfo);
          });
          parser.parse(data, resourceInfo);
      });
      return await parsingPromise;
  }
  /**
   * Fetch a SolidDataset from the given URL. Currently requires the SolidDataset to be available as [Turtle](https://www.w3.org/TR/turtle/).
   *
   * @param url URL to fetch a [[SolidDataset]] from.
   * @param options Optional parameter `options.fetch`: An alternative `fetch` function to make the HTTP request, compatible with the browser-native [fetch API](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters).
   * @returns Promise resolving to a [[SolidDataset]] containing the data at the given Resource, or rejecting if fetching it failed.
   */
  async function getSolidDataset(url, options = internal_defaultFetchOptions) {
      var _a;
      url = internal_toIriString(url);
      const config = Object.assign(Object.assign({}, internal_defaultFetchOptions), options);
      const parserContentTypes = Object.keys((_a = options.parsers) !== null && _a !== void 0 ? _a : {});
      const acceptedContentTypes = parserContentTypes.length > 0
          ? parserContentTypes.join(", ")
          : "text/turtle";
      const response = await config.fetch(url, {
          headers: {
              Accept: acceptedContentTypes,
          },
      });
      if (internal_isUnsuccessfulResponse(response)) {
          throw new FetchError$1(`Fetching the Resource at [${url}] failed: [${response.status}] [${response.statusText}].`, response);
      }
      const solidDataset = await responseToSolidDataset(response, options);
      return solidDataset;
  }
  /**
   * Create a SPARQL UPDATE Patch request from a [[SolidDataset]] with a changelog.
   * @param solidDataset the [[SolidDataset]] that has been locally updated, and that should be persisted.
   * @returns an HTTP PATCH request configuration object, aligned with the [fetch API](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters), containing a SPARQL UPDATE.
   * @hidden
   */
  async function prepareSolidDatasetUpdate(solidDataset) {
      const deleteStatement = solidDataset.internal_changeLog.deletions.length > 0
          ? `DELETE DATA {${(await triplesToTurtle(solidDataset.internal_changeLog.deletions.map(getNamedNodesForLocalNodes))).trim()}};`
          : "";
      const insertStatement = solidDataset.internal_changeLog.additions.length > 0
          ? `INSERT DATA {${(await triplesToTurtle(solidDataset.internal_changeLog.additions.map(getNamedNodesForLocalNodes))).trim()}};`
          : "";
      return {
          method: "PATCH",
          body: `${deleteStatement} ${insertStatement}`,
          headers: {
              "Content-Type": "application/sparql-update",
          },
      };
  }
  /**
   * Create a Put request to write a locally created [[SolidDataset]] to a Pod.
   * @param solidDataset the [[SolidDataset]] that has been locally updated, and that should be persisted.
   * @returns an HTTP PUT request configuration object, aligned with the [fetch API](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters), containing a serialization of the [[SolidDataset]].
   * @hidden
   */
  async function prepareSolidDatasetCreation(solidDataset) {
      return {
          method: "PUT",
          body: await triplesToTurtle(toRdfJsQuads(solidDataset).map(getNamedNodesForLocalNodes)),
          headers: {
              "Content-Type": "text/turtle",
              "If-None-Match": "*",
              Link: `<${ldp.Resource}>; rel="type"`,
          },
      };
  }
  /**
   * Given a SolidDataset, store it in a Solid Pod (overwriting the existing data at the given URL).
   *
   * A SolidDataset keeps track of the data changes compared to the data in the Pod; i.e.,
   * the changelog tracks both the old value and new values of the property being modified. This
   * function applies the changes to the current SolidDataset. If the old value specified in the
   * changelog does not correspond to the value currently in the Pod, this function will throw an
   * error.
   * The SolidDataset returned by this function will contain the data sent to the Pod, and a ChangeLog
   * up-to-date with the saved data. Note that if the data on the server was modified in between the
   * first fetch and saving it, the updated data will not be reflected in the returned SolidDataset.
   * To make sure you have the latest data, call [[getSolidDataset]] again after saving the data.
   *
   * The Solid server will create any intermediary Containers that do not exist yet, so they do not
   * need to be created in advance. For example, if the target URL is
   * https://example.pod/container/resource and https://example.pod/container/ does not exist yet,
   * it will exist after this function resolves successfully.
   *
   * @param url URL to save `solidDataset` to.
   * @param solidDataset The [[SolidDataset]] to save.
   * @param options Optional parameter `options.fetch`: An alternative `fetch` function to make the HTTP request, compatible with the browser-native [fetch API](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters).
   * @returns A Promise resolving to a [[SolidDataset]] containing the stored data, or rejecting if saving it failed.
   */
  async function saveSolidDatasetAt(url, solidDataset, options = internal_defaultFetchOptions) {
      url = internal_toIriString(url);
      const config = Object.assign(Object.assign({}, internal_defaultFetchOptions), options);
      const datasetWithChangelog = internal_withChangeLog(solidDataset);
      const requestInit = isUpdate(datasetWithChangelog, url)
          ? await prepareSolidDatasetUpdate(datasetWithChangelog)
          : await prepareSolidDatasetCreation(datasetWithChangelog);
      const response = await config.fetch(url, requestInit);
      if (internal_isUnsuccessfulResponse(response)) {
          const diagnostics = isUpdate(datasetWithChangelog, url)
              ? "The changes that were sent to the Pod are listed below.\n\n" +
                  changeLogAsMarkdown(datasetWithChangelog)
              : "The SolidDataset that was sent to the Pod is listed below.\n\n" +
                  solidDatasetAsMarkdown(datasetWithChangelog);
          throw new FetchError$1(`Storing the Resource at [${url}] failed: [${response.status}] [${response.statusText}].\n\n` +
              diagnostics, response);
      }
      const resourceInfo = Object.assign(Object.assign({}, internal_parseResourceInfo(response)), { isRawData: false });
      const storedDataset = freeze(Object.assign(Object.assign({}, solidDataset), { internal_changeLog: { additions: [], deletions: [] }, internal_resourceInfo: resourceInfo }));
      const storedDatasetWithResolvedIris = resolveLocalIrisInSolidDataset(storedDataset);
      return storedDatasetWithResolvedIris;
  }
  /**
   * Create a Container at the given URL. Some content may optionally be specified,
   * e.g. to add metadata describing the container.
   *
   * Throws an error if creating the Container failed, e.g. because the current user does not have
   * permissions to, or because the Container already exists.
   *
   * Note that a Solid server will automatically create the necessary Containers when storing a
   * Resource; i.e. there is no need to call this function if it is immediately followed by
   * [[saveSolidDatasetAt]] or [[overwriteFile]].
   *
   * @param url URL of the empty Container that is to be created.
   * @param options Optional parameter `options.fetch`: An alternative `fetch` function to make the HTTP request, compatible with the browser-native [fetch API](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters).
   * @param solidDataset Optional parameter - if provided we use this dataset as the body of the HTT request, meaning it's data is included in the Container resource.
   * @since 0.2.0
   */
  async function createContainerAt(url, options = internal_defaultFetchOptions) {
      var _a;
      url = internal_toIriString(url);
      url = url.endsWith("/") ? url : url + "/";
      const config = Object.assign(Object.assign({}, internal_defaultFetchOptions), options);
      const response = await config.fetch(url, {
          method: "PUT",
          body: config.initialContent
              ? await triplesToTurtle(toRdfJsQuads(config.initialContent).map(getNamedNodesForLocalNodes))
              : undefined,
          headers: {
              Accept: "text/turtle",
              "Content-Type": "text/turtle",
              "If-None-Match": "*",
              // This header should not be required to create a Container,
              // but ESS currently expects it:
              Link: `<${ldp.BasicContainer}>; rel="type"`,
          },
      });
      if (internal_isUnsuccessfulResponse(response)) {
          if (response.status === 409 &&
              response.statusText === "Conflict" &&
              (await response.text()).trim() ===
                  internal_NSS_CREATE_CONTAINER_SPEC_NONCOMPLIANCE_DETECTION_ERROR_MESSAGE_TO_WORKAROUND_THEIR_ISSUE_1465) {
              return createContainerWithNssWorkaroundAt(url, options);
          }
          const containerType = config.initialContent === undefined ? "empty" : "non-empty";
          throw new FetchError$1(`Creating the ${containerType} Container at [${url}] failed: [${response.status}] [${response.statusText}].`, response);
      }
      const resourceInfo = internal_parseResourceInfo(response);
      const containerDataset = freeze(Object.assign(Object.assign({}, ((_a = options.initialContent) !== null && _a !== void 0 ? _a : createSolidDataset())), { internal_changeLog: { additions: [], deletions: [] }, internal_resourceInfo: resourceInfo }));
      return containerDataset;
  }
  /**
   * Unfortunately Node Solid Server does not confirm to the Solid spec when it comes to Container
   * creation. When we make the (valid, according to the Solid protocol) request to create a
   * Container, NSS responds with the following exact error message. Thus, when we encounter exactly
   * this message, we use an NSS-specific workaround ([[createContainerWithNssWorkaroundAt]]). Both
   * this constant and that workaround should be removed once the NSS issue has been fixed and
   * no versions of NSS with the issue are in common use/supported anymore.
   *
   * @see https://github.com/solid/node-solid-server/issues/1465
   * @internal
   */
  const internal_NSS_CREATE_CONTAINER_SPEC_NONCOMPLIANCE_DETECTION_ERROR_MESSAGE_TO_WORKAROUND_THEIR_ISSUE_1465 = "Can't write file: PUT not supported on containers, use POST instead";
  /**
   * Unfortunately Node Solid Server does not confirm to the Solid spec when it comes to Container
   * creation. As a workaround, we create a dummy file _inside_ the desired Container (which should
   * create the desired Container on the fly), and then delete it again.
   *
   * @see https://github.com/solid/node-solid-server/issues/1465
   */
  const createContainerWithNssWorkaroundAt = async (url, options) => {
      url = internal_toIriString(url);
      const config = Object.assign(Object.assign({}, internal_defaultFetchOptions), options);
      let existingContainer;
      try {
          existingContainer = await getResourceInfo(url, options);
      }
      catch (e) {
          // To create the Container, we'd want it to not exist yet. In other words, we'd expect to get
          // a 404 error here in the happy path - so do nothing if that's the case.
          if (!(e instanceof FetchError$1) || e.statusCode !== 404) {
              // (But if we get an error other than a 404, just throw that error like we usually would.)
              throw e;
          }
      }
      if (typeof existingContainer !== "undefined") {
          throw new Error(`The Container at [${url}] already exists, and therefore cannot be created again.`);
      }
      const dummyUrl = url + ".dummy";
      const createResponse = await config.fetch(dummyUrl, {
          method: "PUT",
          headers: {
              Accept: "text/turtle",
              "Content-Type": "text/turtle",
          },
      });
      if (internal_isUnsuccessfulResponse(createResponse)) {
          throw new FetchError$1(`Creating the empty Container at [${url}] failed: [${createResponse.status}] [${createResponse.statusText}].`, createResponse);
      }
      await config.fetch(dummyUrl, { method: "DELETE" });
      const containerInfoResponse = await config.fetch(url, { method: "HEAD" });
      const resourceInfo = internal_parseResourceInfo(containerInfoResponse);
      const containerDataset = freeze(Object.assign(Object.assign({}, createSolidDataset()), { internal_changeLog: { additions: [], deletions: [] }, internal_resourceInfo: resourceInfo }));
      return containerDataset;
  };
  function isSourceIriEqualTo(dataset, iri) {
      return (normalizeServerSideIri(dataset.internal_resourceInfo.sourceIri) ===
          normalizeServerSideIri(iri));
  }
  function isUpdate(solidDataset, url) {
      return (hasChangelog(solidDataset) &&
          hasResourceInfo(solidDataset) &&
          typeof solidDataset.internal_resourceInfo.sourceIri === "string" &&
          isSourceIriEqualTo(solidDataset, url));
  }
  /**
   * Deletes the Container at a given URL.
   *
   * @param file The (URL of the) Container to delete
   * @since 0.6.0
   */
  async function deleteContainer(container, options = internal_defaultFetchOptions) {
      const url = hasResourceInfo(container)
          ? internal_toIriString(getSourceUrl(container))
          : internal_toIriString(container);
      if (!isContainer(container)) {
          throw new Error(`You're trying to delete the Container at [${url}], but Container URLs should end in a \`/\`. Are you sure this is a Container?`);
      }
      const config = Object.assign(Object.assign({}, internal_defaultFetchOptions), options);
      const response = await config.fetch(url, { method: "DELETE" });
      if (internal_isUnsuccessfulResponse(response)) {
          throw new FetchError$1(`Deleting the Container at [${url}] failed: [${response.status}] [${response.statusText}].`, response);
      }
  }
  /**
   * Given a [[SolidDataset]] representing a Container (see [[isContainer]]), fetch the URLs of all
   * contained resources.
   * If the solidDataset given is not a container, or is missing resourceInfo, throw an error.
   *
   * @param solidDataset The container from which to fetch all contained Resource URLs.
   * @returns A list of URLs, each of which points to a contained Resource of the given SolidDataset.
   * @since 1.3.0
   */
  function getContainedResourceUrlAll(solidDataset) {
      const container = getThing(solidDataset, getSourceUrl(solidDataset));
      // See https://www.w3.org/TR/2015/REC-ldp-20150226/#h-ldpc-http_post:
      // > a containment triple MUST be added to the state of the LDPC whose subject is the LDPC URI,
      // > whose predicate is ldp:contains and whose object is the URI for the newly created document
      return container !== null ? getIriAll(container, ldp.contains) : [];
  }
  /**
   * Gets a human-readable representation of the given SolidDataset to aid debugging.
   *
   * Note that changes to the exact format of the return value are not considered a breaking change;
   * it is intended to aid in debugging, not as a serialisation method that can be reliably parsed.
   *
   * @param solidDataset The [[SolidDataset]] to get a human-readable representation of.
   * @since 0.3.0
   */
  function solidDatasetAsMarkdown(solidDataset) {
      let readableSolidDataset = "";
      if (hasResourceInfo(solidDataset)) {
          readableSolidDataset += `# SolidDataset: ${getSourceUrl(solidDataset)}\n`;
      }
      else {
          readableSolidDataset += `# SolidDataset (no URL yet)\n`;
      }
      const things = getThingAll(solidDataset);
      if (things.length === 0) {
          readableSolidDataset += "\n<empty>\n";
      }
      else {
          things.forEach((thing) => {
              readableSolidDataset += "\n" + thingAsMarkdown(thing);
              if (hasChangelog(solidDataset)) {
                  readableSolidDataset +=
                      "\n" + getReadableChangeLogSummary(solidDataset, thing) + "\n";
              }
          });
      }
      return readableSolidDataset;
  }
  /**
   * Gets a human-readable representation of the local changes to a Resource to aid debugging.
   *
   * Note that changes to the exact format of the return value are not considered a breaking change;
   * it is intended to aid in debugging, not as a serialisation method that can be reliably parsed.
   *
   * @param solidDataset The Resource of which to get a human-readable representation of the changes applied to it locally.
   * @since 0.3.0
   */
  function changeLogAsMarkdown(solidDataset) {
      if (!hasResourceInfo(solidDataset)) {
          return "This is a newly initialized SolidDataset, so there is no source to compare it to.";
      }
      if (!hasChangelog(solidDataset) ||
          (solidDataset.internal_changeLog.additions.length === 0 &&
              solidDataset.internal_changeLog.deletions.length === 0)) {
          return (`## Changes compared to ${getSourceUrl(solidDataset)}\n\n` +
              `This SolidDataset has not been modified since it was fetched from ${getSourceUrl(solidDataset)}.\n`);
      }
      let readableChangeLog = `## Changes compared to ${getSourceUrl(solidDataset)}\n`;
      const changeLogsByThingAndProperty = sortChangeLogByThingAndProperty(solidDataset);
      Object.keys(changeLogsByThingAndProperty).forEach((thingUrl) => {
          readableChangeLog += `\n### Thing: ${thingUrl}\n`;
          const changeLogByProperty = changeLogsByThingAndProperty[thingUrl];
          Object.keys(changeLogByProperty).forEach((propertyUrl) => {
              readableChangeLog += `\nProperty: ${propertyUrl}\n`;
              const deleted = changeLogByProperty[propertyUrl].deleted;
              const added = changeLogByProperty[propertyUrl].added;
              if (deleted.length > 0) {
                  readableChangeLog += "- Removed:\n";
                  deleted.forEach((deletedValue) => (readableChangeLog += `  - ${internal_getReadableValue(deletedValue)}\n`));
              }
              if (added.length > 0) {
                  readableChangeLog += "- Added:\n";
                  added.forEach((addedValue) => (readableChangeLog += `  - ${internal_getReadableValue(addedValue)}\n`));
              }
          });
      });
      return readableChangeLog;
  }
  function sortChangeLogByThingAndProperty(solidDataset) {
      const changeLogsByThingAndProperty = {};
      solidDataset.internal_changeLog.deletions.forEach((deletion) => {
          var _a, _b;
          var _c;
          const subjectNode = isLocalNode(deletion.subject)
              ? /* istanbul ignore next: Unsaved deletions should be removed from the additions list instead, so this code path shouldn't be hit: */
                  resolveIriForLocalNode(deletion.subject, getSourceUrl(solidDataset))
              : deletion.subject;
          if (!isNamedNode$1(subjectNode) || !isNamedNode$1(deletion.predicate)) {
              return;
          }
          const thingUrl = internal_toIriString(subjectNode);
          const propertyUrl = internal_toIriString(deletion.predicate);
          (_a = changeLogsByThingAndProperty[thingUrl]) !== null && _a !== void 0 ? _a : (changeLogsByThingAndProperty[thingUrl] = {});
          (_b = (_c = changeLogsByThingAndProperty[thingUrl])[propertyUrl]) !== null && _b !== void 0 ? _b : (_c[propertyUrl] = {
              added: [],
              deleted: [],
          });
          changeLogsByThingAndProperty[thingUrl][propertyUrl].deleted.push(deletion.object);
      });
      solidDataset.internal_changeLog.additions.forEach((addition) => {
          var _a, _b;
          var _c;
          const subjectNode = isLocalNode(addition.subject)
              ? /* istanbul ignore next: setThing already resolves local Subjects when adding them, so this code path should never be hit. */
                  resolveIriForLocalNode(addition.subject, getSourceUrl(solidDataset))
              : addition.subject;
          if (!isNamedNode$1(subjectNode) || !isNamedNode$1(addition.predicate)) {
              return;
          }
          const thingUrl = internal_toIriString(subjectNode);
          const propertyUrl = internal_toIriString(addition.predicate);
          (_a = changeLogsByThingAndProperty[thingUrl]) !== null && _a !== void 0 ? _a : (changeLogsByThingAndProperty[thingUrl] = {});
          (_b = (_c = changeLogsByThingAndProperty[thingUrl])[propertyUrl]) !== null && _b !== void 0 ? _b : (_c[propertyUrl] = {
              added: [],
              deleted: [],
          });
          changeLogsByThingAndProperty[thingUrl][propertyUrl].added.push(addition.object);
      });
      return changeLogsByThingAndProperty;
  }
  function getReadableChangeLogSummary(solidDataset, thing) {
      const subject = DataFactory$1.namedNode(thing.url);
      const nrOfAdditions = solidDataset.internal_changeLog.additions.reduce((count, addition) => (addition.subject.equals(subject) ? count + 1 : count), 0);
      const nrOfDeletions = solidDataset.internal_changeLog.deletions.reduce((count, deletion) => (deletion.subject.equals(subject) ? count + 1 : count), 0);
      const additionString = nrOfAdditions === 1
          ? "1 new value added"
          : nrOfAdditions + " new values added";
      const deletionString = nrOfDeletions === 1 ? "1 value removed" : nrOfDeletions + " values removed";
      return `(${additionString} / ${deletionString})`;
  }
  function getNamedNodesForLocalNodes(quad) {
      const subject = isNamedNode$1(quad.subject)
          ? getNamedNodeFromLocalNode(quad.subject)
          : /* istanbul ignore next: We don't allow non-NamedNodes as the Subject, so this code path should never be hit: */
              quad.subject;
      const object = isNamedNode$1(quad.object)
          ? getNamedNodeFromLocalNode(quad.object)
          : quad.object;
      return DataFactory$1.quad(subject, quad.predicate, object, quad.graph);
  }
  function getNamedNodeFromLocalNode(node) {
      if (isLocalNodeIri(node.value)) {
          return DataFactory$1.namedNode("#" + getLocalNodeName(node.value));
      }
      return node;
  }
  function resolveLocalIrisInSolidDataset(solidDataset) {
      const resourceIri = getSourceUrl(solidDataset);
      const defaultGraph = solidDataset.graphs.default;
      const thingIris = Object.keys(defaultGraph);
      const updatedDefaultGraph = thingIris.reduce((graphAcc, thingIri) => {
          const resolvedThing = resolveLocalIrisInThing(graphAcc[thingIri], resourceIri);
          const resolvedThingIri = isLocalNodeIri(thingIri)
              ? `${resourceIri}#${getLocalNodeName(thingIri)}`
              : thingIri;
          const updatedGraph = Object.assign({}, graphAcc);
          delete updatedGraph[thingIri];
          updatedGraph[resolvedThingIri] = resolvedThing;
          return freeze(updatedGraph);
      }, defaultGraph);
      const updatedGraphs = freeze(Object.assign(Object.assign({}, solidDataset.graphs), { default: updatedDefaultGraph }));
      return freeze(Object.assign(Object.assign({}, solidDataset), { graphs: updatedGraphs }));
  }
  function resolveLocalIrisInThing(thing, baseIri) {
      const predicateIris = Object.keys(thing.predicates);
      const updatedPredicates = predicateIris.reduce((predicatesAcc, predicateIri) => {
          var _a;
          const namedNodes = (_a = predicatesAcc[predicateIri].namedNodes) !== null && _a !== void 0 ? _a : [];
          if (namedNodes.every((namedNode) => !isLocalNodeIri(namedNode))) {
              // This Predicate has no local node Objects, so return it unmodified:
              return predicatesAcc;
          }
          const updatedNamedNodes = freeze(namedNodes.map((namedNode) => isLocalNodeIri(namedNode)
              ? `${baseIri}#${getLocalNodeName(namedNode)}`
              : namedNode));
          const updatedPredicate = freeze(Object.assign(Object.assign({}, predicatesAcc[predicateIri]), { namedNodes: updatedNamedNodes }));
          return freeze(Object.assign(Object.assign({}, predicatesAcc), { [predicateIri]: updatedPredicate }));
      }, thing.predicates);
      return freeze(Object.assign(Object.assign({}, thing), { predicates: updatedPredicates, url: isLocalNodeIri(thing.url)
              ? `${baseIri}#${getLocalNodeName(thing.url)}`
              : thing.url }));
  }

  var nodePonyfill$1 = {exports: {}};

  // Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

  // fix for "Readable" isn't a named export issue
  const Readable$2 = Stream__default["default"].Readable;

  const BUFFER = Symbol('buffer');
  const TYPE = Symbol('type');

  class Blob {
  	constructor() {
  		this[TYPE] = '';

  		const blobParts = arguments[0];
  		const options = arguments[1];

  		const buffers = [];
  		let size = 0;

  		if (blobParts) {
  			const a = blobParts;
  			const length = Number(a.length);
  			for (let i = 0; i < length; i++) {
  				const element = a[i];
  				let buffer;
  				if (element instanceof Buffer) {
  					buffer = element;
  				} else if (ArrayBuffer.isView(element)) {
  					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
  				} else if (element instanceof ArrayBuffer) {
  					buffer = Buffer.from(element);
  				} else if (element instanceof Blob) {
  					buffer = element[BUFFER];
  				} else {
  					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
  				}
  				size += buffer.length;
  				buffers.push(buffer);
  			}
  		}

  		this[BUFFER] = Buffer.concat(buffers);

  		let type = options && options.type !== undefined && String(options.type).toLowerCase();
  		if (type && !/[^\u0020-\u007E]/.test(type)) {
  			this[TYPE] = type;
  		}
  	}
  	get size() {
  		return this[BUFFER].length;
  	}
  	get type() {
  		return this[TYPE];
  	}
  	text() {
  		return Promise.resolve(this[BUFFER].toString());
  	}
  	arrayBuffer() {
  		const buf = this[BUFFER];
  		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  		return Promise.resolve(ab);
  	}
  	stream() {
  		const readable = new Readable$2();
  		readable._read = function () {};
  		readable.push(this[BUFFER]);
  		readable.push(null);
  		return readable;
  	}
  	toString() {
  		return '[object Blob]';
  	}
  	slice() {
  		const size = this.size;

  		const start = arguments[0];
  		const end = arguments[1];
  		let relativeStart, relativeEnd;
  		if (start === undefined) {
  			relativeStart = 0;
  		} else if (start < 0) {
  			relativeStart = Math.max(size + start, 0);
  		} else {
  			relativeStart = Math.min(start, size);
  		}
  		if (end === undefined) {
  			relativeEnd = size;
  		} else if (end < 0) {
  			relativeEnd = Math.max(size + end, 0);
  		} else {
  			relativeEnd = Math.min(end, size);
  		}
  		const span = Math.max(relativeEnd - relativeStart, 0);

  		const buffer = this[BUFFER];
  		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
  		const blob = new Blob([], { type: arguments[2] });
  		blob[BUFFER] = slicedBuffer;
  		return blob;
  	}
  }

  Object.defineProperties(Blob.prototype, {
  	size: { enumerable: true },
  	type: { enumerable: true },
  	slice: { enumerable: true }
  });

  Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
  	value: 'Blob',
  	writable: false,
  	enumerable: false,
  	configurable: true
  });

  /**
   * fetch-error.js
   *
   * FetchError interface for operational errors
   */

  /**
   * Create FetchError instance
   *
   * @param   String      message      Error message for human
   * @param   String      type         Error type for machine
   * @param   String      systemError  For Node.js system error
   * @return  FetchError
   */
  function FetchError(message, type, systemError) {
    Error.call(this, message);

    this.message = message;
    this.type = type;

    // when err.type is `system`, err.code contains system error code
    if (systemError) {
      this.code = this.errno = systemError.code;
    }

    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
  }

  FetchError.prototype = Object.create(Error.prototype);
  FetchError.prototype.constructor = FetchError;
  FetchError.prototype.name = 'FetchError';

  let convert;
  try {
  	convert = require('encoding').convert;
  } catch (e) {}

  const INTERNALS = Symbol('Body internals');

  // fix an issue where "PassThrough" isn't a named export for node <10
  const PassThrough$1 = Stream__default["default"].PassThrough;

  /**
   * Body mixin
   *
   * Ref: https://fetch.spec.whatwg.org/#body
   *
   * @param   Stream  body  Readable stream
   * @param   Object  opts  Response options
   * @return  Void
   */
  function Body(body) {
  	var _this = this;

  	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
  	    _ref$size = _ref.size;

  	let size = _ref$size === undefined ? 0 : _ref$size;
  	var _ref$timeout = _ref.timeout;
  	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

  	if (body == null) {
  		// body is undefined or null
  		body = null;
  	} else if (isURLSearchParams(body)) {
  		// body is a URLSearchParams
  		body = Buffer.from(body.toString());
  	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
  		// body is ArrayBuffer
  		body = Buffer.from(body);
  	} else if (ArrayBuffer.isView(body)) {
  		// body is ArrayBufferView
  		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
  	} else if (body instanceof Stream__default["default"]) ; else {
  		// none of the above
  		// coerce to string then buffer
  		body = Buffer.from(String(body));
  	}
  	this[INTERNALS] = {
  		body,
  		disturbed: false,
  		error: null
  	};
  	this.size = size;
  	this.timeout = timeout;

  	if (body instanceof Stream__default["default"]) {
  		body.on('error', function (err) {
  			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
  			_this[INTERNALS].error = error;
  		});
  	}
  }

  Body.prototype = {
  	get body() {
  		return this[INTERNALS].body;
  	},

  	get bodyUsed() {
  		return this[INTERNALS].disturbed;
  	},

  	/**
    * Decode response as ArrayBuffer
    *
    * @return  Promise
    */
  	arrayBuffer() {
  		return consumeBody.call(this).then(function (buf) {
  			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  		});
  	},

  	/**
    * Return raw response as Blob
    *
    * @return Promise
    */
  	blob() {
  		let ct = this.headers && this.headers.get('content-type') || '';
  		return consumeBody.call(this).then(function (buf) {
  			return Object.assign(
  			// Prevent copying
  			new Blob([], {
  				type: ct.toLowerCase()
  			}), {
  				[BUFFER]: buf
  			});
  		});
  	},

  	/**
    * Decode response as json
    *
    * @return  Promise
    */
  	json() {
  		var _this2 = this;

  		return consumeBody.call(this).then(function (buffer) {
  			try {
  				return JSON.parse(buffer.toString());
  			} catch (err) {
  				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
  			}
  		});
  	},

  	/**
    * Decode response as text
    *
    * @return  Promise
    */
  	text() {
  		return consumeBody.call(this).then(function (buffer) {
  			return buffer.toString();
  		});
  	},

  	/**
    * Decode response as buffer (non-spec api)
    *
    * @return  Promise
    */
  	buffer() {
  		return consumeBody.call(this);
  	},

  	/**
    * Decode response as text, while automatically detecting the encoding and
    * trying to decode to UTF-8 (non-spec api)
    *
    * @return  Promise
    */
  	textConverted() {
  		var _this3 = this;

  		return consumeBody.call(this).then(function (buffer) {
  			return convertBody(buffer, _this3.headers);
  		});
  	}
  };

  // In browsers, all properties are enumerable.
  Object.defineProperties(Body.prototype, {
  	body: { enumerable: true },
  	bodyUsed: { enumerable: true },
  	arrayBuffer: { enumerable: true },
  	blob: { enumerable: true },
  	json: { enumerable: true },
  	text: { enumerable: true }
  });

  Body.mixIn = function (proto) {
  	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
  		// istanbul ignore else: future proof
  		if (!(name in proto)) {
  			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
  			Object.defineProperty(proto, name, desc);
  		}
  	}
  };

  /**
   * Consume and convert an entire Body to a Buffer.
   *
   * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
   *
   * @return  Promise
   */
  function consumeBody() {
  	var _this4 = this;

  	if (this[INTERNALS].disturbed) {
  		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
  	}

  	this[INTERNALS].disturbed = true;

  	if (this[INTERNALS].error) {
  		return Body.Promise.reject(this[INTERNALS].error);
  	}

  	let body = this.body;

  	// body is null
  	if (body === null) {
  		return Body.Promise.resolve(Buffer.alloc(0));
  	}

  	// body is blob
  	if (isBlob(body)) {
  		body = body.stream();
  	}

  	// body is buffer
  	if (Buffer.isBuffer(body)) {
  		return Body.Promise.resolve(body);
  	}

  	// istanbul ignore if: should never happen
  	if (!(body instanceof Stream__default["default"])) {
  		return Body.Promise.resolve(Buffer.alloc(0));
  	}

  	// body is stream
  	// get ready to actually consume the body
  	let accum = [];
  	let accumBytes = 0;
  	let abort = false;

  	return new Body.Promise(function (resolve, reject) {
  		let resTimeout;

  		// allow timeout on slow response body
  		if (_this4.timeout) {
  			resTimeout = setTimeout(function () {
  				abort = true;
  				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
  			}, _this4.timeout);
  		}

  		// handle stream errors
  		body.on('error', function (err) {
  			if (err.name === 'AbortError') {
  				// if the request was aborted, reject with this Error
  				abort = true;
  				reject(err);
  			} else {
  				// other errors, such as incorrect content-encoding
  				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
  			}
  		});

  		body.on('data', function (chunk) {
  			if (abort || chunk === null) {
  				return;
  			}

  			if (_this4.size && accumBytes + chunk.length > _this4.size) {
  				abort = true;
  				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
  				return;
  			}

  			accumBytes += chunk.length;
  			accum.push(chunk);
  		});

  		body.on('end', function () {
  			if (abort) {
  				return;
  			}

  			clearTimeout(resTimeout);

  			try {
  				resolve(Buffer.concat(accum, accumBytes));
  			} catch (err) {
  				// handle streams that have accumulated too much data (issue #414)
  				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
  			}
  		});
  	});
  }

  /**
   * Detect buffer encoding and convert to target encoding
   * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
   *
   * @param   Buffer  buffer    Incoming buffer
   * @param   String  encoding  Target encoding
   * @return  String
   */
  function convertBody(buffer, headers) {
  	if (typeof convert !== 'function') {
  		throw new Error('The package `encoding` must be installed to use the textConverted() function');
  	}

  	const ct = headers.get('content-type');
  	let charset = 'utf-8';
  	let res, str;

  	// header
  	if (ct) {
  		res = /charset=([^;]*)/i.exec(ct);
  	}

  	// no charset in content type, peek at response body for at most 1024 bytes
  	str = buffer.slice(0, 1024).toString();

  	// html5
  	if (!res && str) {
  		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
  	}

  	// html4
  	if (!res && str) {
  		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
  		if (!res) {
  			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
  			if (res) {
  				res.pop(); // drop last quote
  			}
  		}

  		if (res) {
  			res = /charset=(.*)/i.exec(res.pop());
  		}
  	}

  	// xml
  	if (!res && str) {
  		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
  	}

  	// found charset
  	if (res) {
  		charset = res.pop();

  		// prevent decode issues when sites use incorrect encoding
  		// ref: https://hsivonen.fi/encoding-menu/
  		if (charset === 'gb2312' || charset === 'gbk') {
  			charset = 'gb18030';
  		}
  	}

  	// turn raw buffers into a single utf-8 buffer
  	return convert(buffer, 'UTF-8', charset).toString();
  }

  /**
   * Detect a URLSearchParams object
   * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
   *
   * @param   Object  obj     Object to detect by type or brand
   * @return  String
   */
  function isURLSearchParams(obj) {
  	// Duck-typing as a necessary condition.
  	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
  		return false;
  	}

  	// Brand-checking and more duck-typing as optional condition.
  	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
  }

  /**
   * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
   * @param  {*} obj
   * @return {boolean}
   */
  function isBlob(obj) {
  	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
  }

  /**
   * Clone body given Res/Req instance
   *
   * @param   Mixed  instance  Response or Request instance
   * @return  Mixed
   */
  function clone(instance) {
  	let p1, p2;
  	let body = instance.body;

  	// don't allow cloning a used body
  	if (instance.bodyUsed) {
  		throw new Error('cannot clone body after it is used');
  	}

  	// check that body is a stream and not form-data object
  	// note: we can't clone the form-data object without having it as a dependency
  	if (body instanceof Stream__default["default"] && typeof body.getBoundary !== 'function') {
  		// tee instance body
  		p1 = new PassThrough$1();
  		p2 = new PassThrough$1();
  		body.pipe(p1);
  		body.pipe(p2);
  		// set instance body to teed body and return the other teed body
  		instance[INTERNALS].body = p1;
  		body = p2;
  	}

  	return body;
  }

  /**
   * Performs the operation "extract a `Content-Type` value from |object|" as
   * specified in the specification:
   * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
   *
   * This function assumes that instance.body is present.
   *
   * @param   Mixed  instance  Any options.body input
   */
  function extractContentType(body) {
  	if (body === null) {
  		// body is null
  		return null;
  	} else if (typeof body === 'string') {
  		// body is string
  		return 'text/plain;charset=UTF-8';
  	} else if (isURLSearchParams(body)) {
  		// body is a URLSearchParams
  		return 'application/x-www-form-urlencoded;charset=UTF-8';
  	} else if (isBlob(body)) {
  		// body is blob
  		return body.type || null;
  	} else if (Buffer.isBuffer(body)) {
  		// body is buffer
  		return null;
  	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
  		// body is ArrayBuffer
  		return null;
  	} else if (ArrayBuffer.isView(body)) {
  		// body is ArrayBufferView
  		return null;
  	} else if (typeof body.getBoundary === 'function') {
  		// detect form data input from form-data module
  		return `multipart/form-data;boundary=${body.getBoundary()}`;
  	} else if (body instanceof Stream__default["default"]) {
  		// body is stream
  		// can't really do much about this
  		return null;
  	} else {
  		// Body constructor defaults other things to string
  		return 'text/plain;charset=UTF-8';
  	}
  }

  /**
   * The Fetch Standard treats this as if "total bytes" is a property on the body.
   * For us, we have to explicitly get it with a function.
   *
   * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
   *
   * @param   Body    instance   Instance of Body
   * @return  Number?            Number of bytes, or null if not possible
   */
  function getTotalBytes(instance) {
  	const body = instance.body;


  	if (body === null) {
  		// body is null
  		return 0;
  	} else if (isBlob(body)) {
  		return body.size;
  	} else if (Buffer.isBuffer(body)) {
  		// body is buffer
  		return body.length;
  	} else if (body && typeof body.getLengthSync === 'function') {
  		// detect form data input from form-data module
  		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
  		body.hasKnownLength && body.hasKnownLength()) {
  			// 2.x
  			return body.getLengthSync();
  		}
  		return null;
  	} else {
  		// body is stream
  		return null;
  	}
  }

  /**
   * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
   *
   * @param   Body    instance   Instance of Body
   * @return  Void
   */
  function writeToStream(dest, instance) {
  	const body = instance.body;


  	if (body === null) {
  		// body is null
  		dest.end();
  	} else if (isBlob(body)) {
  		body.stream().pipe(dest);
  	} else if (Buffer.isBuffer(body)) {
  		// body is buffer
  		dest.write(body);
  		dest.end();
  	} else {
  		// body is stream
  		body.pipe(dest);
  	}
  }

  // expose Promise
  Body.Promise = global.Promise;

  /**
   * headers.js
   *
   * Headers class offers convenient helpers
   */

  const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
  const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

  function validateName(name) {
  	name = `${name}`;
  	if (invalidTokenRegex.test(name) || name === '') {
  		throw new TypeError(`${name} is not a legal HTTP header name`);
  	}
  }

  function validateValue(value) {
  	value = `${value}`;
  	if (invalidHeaderCharRegex.test(value)) {
  		throw new TypeError(`${value} is not a legal HTTP header value`);
  	}
  }

  /**
   * Find the key in the map object given a header name.
   *
   * Returns undefined if not found.
   *
   * @param   String  name  Header name
   * @return  String|Undefined
   */
  function find(map, name) {
  	name = name.toLowerCase();
  	for (const key in map) {
  		if (key.toLowerCase() === name) {
  			return key;
  		}
  	}
  	return undefined;
  }

  const MAP = Symbol('map');
  class Headers {
  	/**
    * Headers class
    *
    * @param   Object  headers  Response headers
    * @return  Void
    */
  	constructor() {
  		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

  		this[MAP] = Object.create(null);

  		if (init instanceof Headers) {
  			const rawHeaders = init.raw();
  			const headerNames = Object.keys(rawHeaders);

  			for (const headerName of headerNames) {
  				for (const value of rawHeaders[headerName]) {
  					this.append(headerName, value);
  				}
  			}

  			return;
  		}

  		// We don't worry about converting prop to ByteString here as append()
  		// will handle it.
  		if (init == null) ; else if (typeof init === 'object') {
  			const method = init[Symbol.iterator];
  			if (method != null) {
  				if (typeof method !== 'function') {
  					throw new TypeError('Header pairs must be iterable');
  				}

  				// sequence<sequence<ByteString>>
  				// Note: per spec we have to first exhaust the lists then process them
  				const pairs = [];
  				for (const pair of init) {
  					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
  						throw new TypeError('Each header pair must be iterable');
  					}
  					pairs.push(Array.from(pair));
  				}

  				for (const pair of pairs) {
  					if (pair.length !== 2) {
  						throw new TypeError('Each header pair must be a name/value tuple');
  					}
  					this.append(pair[0], pair[1]);
  				}
  			} else {
  				// record<ByteString, ByteString>
  				for (const key of Object.keys(init)) {
  					const value = init[key];
  					this.append(key, value);
  				}
  			}
  		} else {
  			throw new TypeError('Provided initializer must be an object');
  		}
  	}

  	/**
    * Return combined header value given name
    *
    * @param   String  name  Header name
    * @return  Mixed
    */
  	get(name) {
  		name = `${name}`;
  		validateName(name);
  		const key = find(this[MAP], name);
  		if (key === undefined) {
  			return null;
  		}

  		return this[MAP][key].join(', ');
  	}

  	/**
    * Iterate over all headers
    *
    * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
    * @param   Boolean   thisArg   `this` context for callback function
    * @return  Void
    */
  	forEach(callback) {
  		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  		let pairs = getHeaders(this);
  		let i = 0;
  		while (i < pairs.length) {
  			var _pairs$i = pairs[i];
  			const name = _pairs$i[0],
  			      value = _pairs$i[1];

  			callback.call(thisArg, value, name, this);
  			pairs = getHeaders(this);
  			i++;
  		}
  	}

  	/**
    * Overwrite header values given name
    *
    * @param   String  name   Header name
    * @param   String  value  Header value
    * @return  Void
    */
  	set(name, value) {
  		name = `${name}`;
  		value = `${value}`;
  		validateName(name);
  		validateValue(value);
  		const key = find(this[MAP], name);
  		this[MAP][key !== undefined ? key : name] = [value];
  	}

  	/**
    * Append a value onto existing header
    *
    * @param   String  name   Header name
    * @param   String  value  Header value
    * @return  Void
    */
  	append(name, value) {
  		name = `${name}`;
  		value = `${value}`;
  		validateName(name);
  		validateValue(value);
  		const key = find(this[MAP], name);
  		if (key !== undefined) {
  			this[MAP][key].push(value);
  		} else {
  			this[MAP][name] = [value];
  		}
  	}

  	/**
    * Check for header name existence
    *
    * @param   String   name  Header name
    * @return  Boolean
    */
  	has(name) {
  		name = `${name}`;
  		validateName(name);
  		return find(this[MAP], name) !== undefined;
  	}

  	/**
    * Delete all header values given name
    *
    * @param   String  name  Header name
    * @return  Void
    */
  	delete(name) {
  		name = `${name}`;
  		validateName(name);
  		const key = find(this[MAP], name);
  		if (key !== undefined) {
  			delete this[MAP][key];
  		}
  	}

  	/**
    * Return raw headers (non-spec api)
    *
    * @return  Object
    */
  	raw() {
  		return this[MAP];
  	}

  	/**
    * Get an iterator on keys.
    *
    * @return  Iterator
    */
  	keys() {
  		return createHeadersIterator(this, 'key');
  	}

  	/**
    * Get an iterator on values.
    *
    * @return  Iterator
    */
  	values() {
  		return createHeadersIterator(this, 'value');
  	}

  	/**
    * Get an iterator on entries.
    *
    * This is the default iterator of the Headers object.
    *
    * @return  Iterator
    */
  	[Symbol.iterator]() {
  		return createHeadersIterator(this, 'key+value');
  	}
  }
  Headers.prototype.entries = Headers.prototype[Symbol.iterator];

  Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
  	value: 'Headers',
  	writable: false,
  	enumerable: false,
  	configurable: true
  });

  Object.defineProperties(Headers.prototype, {
  	get: { enumerable: true },
  	forEach: { enumerable: true },
  	set: { enumerable: true },
  	append: { enumerable: true },
  	has: { enumerable: true },
  	delete: { enumerable: true },
  	keys: { enumerable: true },
  	values: { enumerable: true },
  	entries: { enumerable: true }
  });

  function getHeaders(headers) {
  	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

  	const keys = Object.keys(headers[MAP]).sort();
  	return keys.map(kind === 'key' ? function (k) {
  		return k.toLowerCase();
  	} : kind === 'value' ? function (k) {
  		return headers[MAP][k].join(', ');
  	} : function (k) {
  		return [k.toLowerCase(), headers[MAP][k].join(', ')];
  	});
  }

  const INTERNAL = Symbol('internal');

  function createHeadersIterator(target, kind) {
  	const iterator = Object.create(HeadersIteratorPrototype);
  	iterator[INTERNAL] = {
  		target,
  		kind,
  		index: 0
  	};
  	return iterator;
  }

  const HeadersIteratorPrototype = Object.setPrototypeOf({
  	next() {
  		// istanbul ignore if
  		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
  			throw new TypeError('Value of `this` is not a HeadersIterator');
  		}

  		var _INTERNAL = this[INTERNAL];
  		const target = _INTERNAL.target,
  		      kind = _INTERNAL.kind,
  		      index = _INTERNAL.index;

  		const values = getHeaders(target, kind);
  		const len = values.length;
  		if (index >= len) {
  			return {
  				value: undefined,
  				done: true
  			};
  		}

  		this[INTERNAL].index = index + 1;

  		return {
  			value: values[index],
  			done: false
  		};
  	}
  }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

  Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
  	value: 'HeadersIterator',
  	writable: false,
  	enumerable: false,
  	configurable: true
  });

  /**
   * Export the Headers object in a form that Node.js can consume.
   *
   * @param   Headers  headers
   * @return  Object
   */
  function exportNodeCompatibleHeaders(headers) {
  	const obj = Object.assign({ __proto__: null }, headers[MAP]);

  	// http.request() only supports string as Host header. This hack makes
  	// specifying custom Host header possible.
  	const hostHeaderKey = find(headers[MAP], 'Host');
  	if (hostHeaderKey !== undefined) {
  		obj[hostHeaderKey] = obj[hostHeaderKey][0];
  	}

  	return obj;
  }

  /**
   * Create a Headers object from an object of headers, ignoring those that do
   * not conform to HTTP grammar productions.
   *
   * @param   Object  obj  Object of headers
   * @return  Headers
   */
  function createHeadersLenient(obj) {
  	const headers = new Headers();
  	for (const name of Object.keys(obj)) {
  		if (invalidTokenRegex.test(name)) {
  			continue;
  		}
  		if (Array.isArray(obj[name])) {
  			for (const val of obj[name]) {
  				if (invalidHeaderCharRegex.test(val)) {
  					continue;
  				}
  				if (headers[MAP][name] === undefined) {
  					headers[MAP][name] = [val];
  				} else {
  					headers[MAP][name].push(val);
  				}
  			}
  		} else if (!invalidHeaderCharRegex.test(obj[name])) {
  			headers[MAP][name] = [obj[name]];
  		}
  	}
  	return headers;
  }

  const INTERNALS$1 = Symbol('Response internals');

  // fix an issue where "STATUS_CODES" aren't a named export for node <10
  const STATUS_CODES = http__default["default"].STATUS_CODES;

  /**
   * Response class
   *
   * @param   Stream  body  Readable stream
   * @param   Object  opts  Response options
   * @return  Void
   */
  class Response {
  	constructor() {
  		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  		Body.call(this, body, opts);

  		const status = opts.status || 200;
  		const headers = new Headers(opts.headers);

  		if (body != null && !headers.has('Content-Type')) {
  			const contentType = extractContentType(body);
  			if (contentType) {
  				headers.append('Content-Type', contentType);
  			}
  		}

  		this[INTERNALS$1] = {
  			url: opts.url,
  			status,
  			statusText: opts.statusText || STATUS_CODES[status],
  			headers,
  			counter: opts.counter
  		};
  	}

  	get url() {
  		return this[INTERNALS$1].url || '';
  	}

  	get status() {
  		return this[INTERNALS$1].status;
  	}

  	/**
    * Convenience property representing if the request ended normally
    */
  	get ok() {
  		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  	}

  	get redirected() {
  		return this[INTERNALS$1].counter > 0;
  	}

  	get statusText() {
  		return this[INTERNALS$1].statusText;
  	}

  	get headers() {
  		return this[INTERNALS$1].headers;
  	}

  	/**
    * Clone this response
    *
    * @return  Response
    */
  	clone() {
  		return new Response(clone(this), {
  			url: this.url,
  			status: this.status,
  			statusText: this.statusText,
  			headers: this.headers,
  			ok: this.ok,
  			redirected: this.redirected
  		});
  	}
  }

  Body.mixIn(Response.prototype);

  Object.defineProperties(Response.prototype, {
  	url: { enumerable: true },
  	status: { enumerable: true },
  	ok: { enumerable: true },
  	redirected: { enumerable: true },
  	statusText: { enumerable: true },
  	headers: { enumerable: true },
  	clone: { enumerable: true }
  });

  Object.defineProperty(Response.prototype, Symbol.toStringTag, {
  	value: 'Response',
  	writable: false,
  	enumerable: false,
  	configurable: true
  });

  const INTERNALS$2 = Symbol('Request internals');

  // fix an issue where "format", "parse" aren't a named export for node <10
  const parse_url = Url__default["default"].parse;
  const format_url = Url__default["default"].format;

  const streamDestructionSupported = 'destroy' in Stream__default["default"].Readable.prototype;

  /**
   * Check if a value is an instance of Request.
   *
   * @param   Mixed   input
   * @return  Boolean
   */
  function isRequest$2(input) {
  	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
  }

  function isAbortSignal(signal) {
  	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
  	return !!(proto && proto.constructor.name === 'AbortSignal');
  }

  /**
   * Request class
   *
   * @param   Mixed   input  Url or Request instance
   * @param   Object  init   Custom options
   * @return  Void
   */
  class Request {
  	constructor(input) {
  		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  		let parsedURL;

  		// normalize input
  		if (!isRequest$2(input)) {
  			if (input && input.href) {
  				// in order to support Node.js' Url objects; though WHATWG's URL objects
  				// will fall into this branch also (since their `toString()` will return
  				// `href` property anyway)
  				parsedURL = parse_url(input.href);
  			} else {
  				// coerce input to a string before attempting to parse
  				parsedURL = parse_url(`${input}`);
  			}
  			input = {};
  		} else {
  			parsedURL = parse_url(input.url);
  		}

  		let method = init.method || input.method || 'GET';
  		method = method.toUpperCase();

  		if ((init.body != null || isRequest$2(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
  			throw new TypeError('Request with GET/HEAD method cannot have body');
  		}

  		let inputBody = init.body != null ? init.body : isRequest$2(input) && input.body !== null ? clone(input) : null;

  		Body.call(this, inputBody, {
  			timeout: init.timeout || input.timeout || 0,
  			size: init.size || input.size || 0
  		});

  		const headers = new Headers(init.headers || input.headers || {});

  		if (inputBody != null && !headers.has('Content-Type')) {
  			const contentType = extractContentType(inputBody);
  			if (contentType) {
  				headers.append('Content-Type', contentType);
  			}
  		}

  		let signal = isRequest$2(input) ? input.signal : null;
  		if ('signal' in init) signal = init.signal;

  		if (signal != null && !isAbortSignal(signal)) {
  			throw new TypeError('Expected signal to be an instanceof AbortSignal');
  		}

  		this[INTERNALS$2] = {
  			method,
  			redirect: init.redirect || input.redirect || 'follow',
  			headers,
  			parsedURL,
  			signal
  		};

  		// node-fetch-only options
  		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
  		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
  		this.counter = init.counter || input.counter || 0;
  		this.agent = init.agent || input.agent;
  	}

  	get method() {
  		return this[INTERNALS$2].method;
  	}

  	get url() {
  		return format_url(this[INTERNALS$2].parsedURL);
  	}

  	get headers() {
  		return this[INTERNALS$2].headers;
  	}

  	get redirect() {
  		return this[INTERNALS$2].redirect;
  	}

  	get signal() {
  		return this[INTERNALS$2].signal;
  	}

  	/**
    * Clone this request
    *
    * @return  Request
    */
  	clone() {
  		return new Request(this);
  	}
  }

  Body.mixIn(Request.prototype);

  Object.defineProperty(Request.prototype, Symbol.toStringTag, {
  	value: 'Request',
  	writable: false,
  	enumerable: false,
  	configurable: true
  });

  Object.defineProperties(Request.prototype, {
  	method: { enumerable: true },
  	url: { enumerable: true },
  	headers: { enumerable: true },
  	redirect: { enumerable: true },
  	clone: { enumerable: true },
  	signal: { enumerable: true }
  });

  /**
   * Convert a Request to Node.js http request options.
   *
   * @param   Request  A Request instance
   * @return  Object   The options object to be passed to http.request
   */
  function getNodeRequestOptions(request) {
  	const parsedURL = request[INTERNALS$2].parsedURL;
  	const headers = new Headers(request[INTERNALS$2].headers);

  	// fetch step 1.3
  	if (!headers.has('Accept')) {
  		headers.set('Accept', '*/*');
  	}

  	// Basic fetch
  	if (!parsedURL.protocol || !parsedURL.hostname) {
  		throw new TypeError('Only absolute URLs are supported');
  	}

  	if (!/^https?:$/.test(parsedURL.protocol)) {
  		throw new TypeError('Only HTTP(S) protocols are supported');
  	}

  	if (request.signal && request.body instanceof Stream__default["default"].Readable && !streamDestructionSupported) {
  		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
  	}

  	// HTTP-network-or-cache fetch steps 2.4-2.7
  	let contentLengthValue = null;
  	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
  		contentLengthValue = '0';
  	}
  	if (request.body != null) {
  		const totalBytes = getTotalBytes(request);
  		if (typeof totalBytes === 'number') {
  			contentLengthValue = String(totalBytes);
  		}
  	}
  	if (contentLengthValue) {
  		headers.set('Content-Length', contentLengthValue);
  	}

  	// HTTP-network-or-cache fetch step 2.11
  	if (!headers.has('User-Agent')) {
  		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
  	}

  	// HTTP-network-or-cache fetch step 2.15
  	if (request.compress && !headers.has('Accept-Encoding')) {
  		headers.set('Accept-Encoding', 'gzip,deflate');
  	}

  	let agent = request.agent;
  	if (typeof agent === 'function') {
  		agent = agent(parsedURL);
  	}

  	if (!headers.has('Connection') && !agent) {
  		headers.set('Connection', 'close');
  	}

  	// HTTP-network fetch step 4.2
  	// chunked encoding is handled by Node.js

  	return Object.assign({}, parsedURL, {
  		method: request.method,
  		headers: exportNodeCompatibleHeaders(headers),
  		agent
  	});
  }

  /**
   * abort-error.js
   *
   * AbortError interface for cancelled requests
   */

  /**
   * Create AbortError instance
   *
   * @param   String      message      Error message for human
   * @return  AbortError
   */
  function AbortError(message) {
    Error.call(this, message);

    this.type = 'aborted';
    this.message = message;

    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
  }

  AbortError.prototype = Object.create(Error.prototype);
  AbortError.prototype.constructor = AbortError;
  AbortError.prototype.name = 'AbortError';

  // fix an issue where "PassThrough", "resolve" aren't a named export for node <10
  const PassThrough$1$1 = Stream__default["default"].PassThrough;
  const resolve_url = Url__default["default"].resolve;

  /**
   * Fetch function
   *
   * @param   Mixed    url   Absolute url or Request instance
   * @param   Object   opts  Fetch options
   * @return  Promise
   */
  function fetch(url, opts) {

  	// allow custom promise
  	if (!fetch.Promise) {
  		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
  	}

  	Body.Promise = fetch.Promise;

  	// wrap http.request into fetch
  	return new fetch.Promise(function (resolve, reject) {
  		// build request object
  		const request = new Request(url, opts);
  		const options = getNodeRequestOptions(request);

  		const send = (options.protocol === 'https:' ? require$$1__default["default"] : http__default["default"]).request;
  		const signal = request.signal;

  		let response = null;

  		const abort = function abort() {
  			let error = new AbortError('The user aborted a request.');
  			reject(error);
  			if (request.body && request.body instanceof Stream__default["default"].Readable) {
  				request.body.destroy(error);
  			}
  			if (!response || !response.body) return;
  			response.body.emit('error', error);
  		};

  		if (signal && signal.aborted) {
  			abort();
  			return;
  		}

  		const abortAndFinalize = function abortAndFinalize() {
  			abort();
  			finalize();
  		};

  		// send request
  		const req = send(options);
  		let reqTimeout;

  		if (signal) {
  			signal.addEventListener('abort', abortAndFinalize);
  		}

  		function finalize() {
  			req.abort();
  			if (signal) signal.removeEventListener('abort', abortAndFinalize);
  			clearTimeout(reqTimeout);
  		}

  		if (request.timeout) {
  			req.once('socket', function (socket) {
  				reqTimeout = setTimeout(function () {
  					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
  					finalize();
  				}, request.timeout);
  			});
  		}

  		req.on('error', function (err) {
  			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
  			finalize();
  		});

  		req.on('response', function (res) {
  			clearTimeout(reqTimeout);

  			const headers = createHeadersLenient(res.headers);

  			// HTTP fetch step 5
  			if (fetch.isRedirect(res.statusCode)) {
  				// HTTP fetch step 5.2
  				const location = headers.get('Location');

  				// HTTP fetch step 5.3
  				const locationURL = location === null ? null : resolve_url(request.url, location);

  				// HTTP fetch step 5.5
  				switch (request.redirect) {
  					case 'error':
  						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
  						finalize();
  						return;
  					case 'manual':
  						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
  						if (locationURL !== null) {
  							// handle corrupted header
  							try {
  								headers.set('Location', locationURL);
  							} catch (err) {
  								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
  								reject(err);
  							}
  						}
  						break;
  					case 'follow':
  						// HTTP-redirect fetch step 2
  						if (locationURL === null) {
  							break;
  						}

  						// HTTP-redirect fetch step 5
  						if (request.counter >= request.follow) {
  							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
  							finalize();
  							return;
  						}

  						// HTTP-redirect fetch step 6 (counter increment)
  						// Create a new Request object.
  						const requestOpts = {
  							headers: new Headers(request.headers),
  							follow: request.follow,
  							counter: request.counter + 1,
  							agent: request.agent,
  							compress: request.compress,
  							method: request.method,
  							body: request.body,
  							signal: request.signal,
  							timeout: request.timeout,
  							size: request.size
  						};

  						// HTTP-redirect fetch step 9
  						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
  							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
  							finalize();
  							return;
  						}

  						// HTTP-redirect fetch step 11
  						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
  							requestOpts.method = 'GET';
  							requestOpts.body = undefined;
  							requestOpts.headers.delete('content-length');
  						}

  						// HTTP-redirect fetch step 15
  						resolve(fetch(new Request(locationURL, requestOpts)));
  						finalize();
  						return;
  				}
  			}

  			// prepare response
  			res.once('end', function () {
  				if (signal) signal.removeEventListener('abort', abortAndFinalize);
  			});
  			let body = res.pipe(new PassThrough$1$1());

  			const response_options = {
  				url: request.url,
  				status: res.statusCode,
  				statusText: res.statusMessage,
  				headers: headers,
  				size: request.size,
  				timeout: request.timeout,
  				counter: request.counter
  			};

  			// HTTP-network fetch step 12.1.1.3
  			const codings = headers.get('Content-Encoding');

  			// HTTP-network fetch step 12.1.1.4: handle content codings

  			// in following scenarios we ignore compression support
  			// 1. compression support is disabled
  			// 2. HEAD request
  			// 3. no Content-Encoding header
  			// 4. no content response (204)
  			// 5. content not modified response (304)
  			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
  				response = new Response(body, response_options);
  				resolve(response);
  				return;
  			}

  			// For Node v6+
  			// Be less strict when decoding compressed responses, since sometimes
  			// servers send slightly invalid responses that are still accepted
  			// by common browsers.
  			// Always using Z_SYNC_FLUSH is what cURL does.
  			const zlibOptions = {
  				flush: zlib__default["default"].Z_SYNC_FLUSH,
  				finishFlush: zlib__default["default"].Z_SYNC_FLUSH
  			};

  			// for gzip
  			if (codings == 'gzip' || codings == 'x-gzip') {
  				body = body.pipe(zlib__default["default"].createGunzip(zlibOptions));
  				response = new Response(body, response_options);
  				resolve(response);
  				return;
  			}

  			// for deflate
  			if (codings == 'deflate' || codings == 'x-deflate') {
  				// handle the infamous raw deflate response from old servers
  				// a hack for old IIS and Apache servers
  				const raw = res.pipe(new PassThrough$1$1());
  				raw.once('data', function (chunk) {
  					// see http://stackoverflow.com/questions/37519828
  					if ((chunk[0] & 0x0F) === 0x08) {
  						body = body.pipe(zlib__default["default"].createInflate());
  					} else {
  						body = body.pipe(zlib__default["default"].createInflateRaw());
  					}
  					response = new Response(body, response_options);
  					resolve(response);
  				});
  				return;
  			}

  			// for br
  			if (codings == 'br' && typeof zlib__default["default"].createBrotliDecompress === 'function') {
  				body = body.pipe(zlib__default["default"].createBrotliDecompress());
  				response = new Response(body, response_options);
  				resolve(response);
  				return;
  			}

  			// otherwise, use response as-is
  			response = new Response(body, response_options);
  			resolve(response);
  		});

  		writeToStream(req, request);
  	});
  }
  /**
   * Redirect code matching
   *
   * @param   Number   code  Status code
   * @return  Boolean
   */
  fetch.isRedirect = function (code) {
  	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
  };

  // expose Promise
  fetch.Promise = global.Promise;

  var lib$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': fetch,
    Headers: Headers,
    Request: Request,
    Response: Response,
    FetchError: FetchError
  });

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(lib$1);

  (function (module, exports) {
  const nodeFetch = require$$0;
  const realFetch = nodeFetch.default || nodeFetch;

  const fetch = function (url, options) {
    // Support schemaless URIs on the server for parity with the browser.
    // Ex: //github.com/ -> https://github.com/
    if (/^\/\//.test(url)) {
      url = 'https:' + url;
    }
    return realFetch.call(this, url, options)
  };

  fetch.ponyfill = true;

  module.exports = exports = fetch;
  exports.fetch = fetch;
  exports.Headers = nodeFetch.Headers;
  exports.Request = nodeFetch.Request;
  exports.Response = nodeFetch.Response;

  // Needed for TypeScript consumers without esModuleInterop.
  exports.default = fetch;
  }(nodePonyfill$1, nodePonyfill$1.exports));

  var nodePonyfill = nodePonyfill$1.exports;

  var crossFetch = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': nodePonyfill
  }, [nodePonyfill$1.exports]));

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * Create a new Thing with a URL added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setUrl]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to add a URL value to.
   * @param property Property for which to add the given URL value.
   * @param url URL to add to `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   */
  const addUrl = (thing, property, url) => {
      var _a, _b;
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      if (!isThing(url) && !internal_isValidUrl(url)) {
          throw new ValidValueUrlExpectedError(url);
      }
      const predicateIri = internal_toIriString(property);
      const existingPredicate = (_a = thing.predicates[predicateIri]) !== null && _a !== void 0 ? _a : {};
      const existingNamedNodes = (_b = existingPredicate.namedNodes) !== null && _b !== void 0 ? _b : [];
      let iriToAdd;
      if (isNamedNode$1(url)) {
          iriToAdd = url.value;
      }
      else if (typeof url === "string") {
          iriToAdd = url;
      }
      else if (isThingLocal(url)) {
          iriToAdd = url.url;
      }
      else {
          iriToAdd = asIri(url);
      }
      const updatedNamedNodes = freeze(existingNamedNodes.concat(internal_toIriString(iriToAdd)));
      const updatedPredicate = freeze(Object.assign(Object.assign({}, existingPredicate), { namedNodes: updatedNamedNodes }));
      const updatedPredicates = freeze(Object.assign(Object.assign({}, thing.predicates), { [predicateIri]: updatedPredicate }));
      const updatedThing = freeze(Object.assign(Object.assign({}, thing), { predicates: updatedPredicates }));
      return updatedThing;
  };
  /** @hidden Alias for [[addUrl]] for those who prefer IRI terminology. */
  const addIri = addUrl;
  /**
   * Create a new Thing with a boolean added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setBoolean]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to add a boolean value to.
   * @param property Property for which to add the given boolean value.
   * @param value Boolean to add to `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   */
  const addBoolean = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addLiteralOfType(thing, property, serializeBoolean(value), xmlSchemaTypes.boolean);
  };
  /**
   * Create a new Thing with a datetime added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setDatetime]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to add a datetime value to.
   * @param property Property for which to add the given datetime value.
   * @param value Datetime to add to `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   */
  const addDatetime = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addLiteralOfType(thing, property, serializeDatetime(value), xmlSchemaTypes.dateTime);
  };
  /**
   * Create a new Thing with a date added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setDate]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to add a date value to.
   * @param property Property for which to add the given date value.
   * @param value Date to add to `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   * @since 1.10.0
   */
  const addDate = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addLiteralOfType(thing, property, serializeDate(value), xmlSchemaTypes.date);
  };
  /**
   * Create a new Thing with a time added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setDatetime]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to add a datetime value to.
   * @param property Property for which to add the given datetime value.
   * @param value time to add to `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   * @since 1.10.0
   */
  const addTime = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addLiteralOfType(thing, property, serializeTime(value), xmlSchemaTypes.time);
  };
  /**
   * Create a new Thing with a decimal added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setDecimal]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to add a decimal value to.
   * @param property Property for which to add the given decimal value.
   * @param value Decimal to add to `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   */
  const addDecimal = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addLiteralOfType(thing, property, serializeDecimal(value), xmlSchemaTypes.decimal);
  };
  /**
   * Create a new Thing with an integer added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setInteger]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to add an integer value to.
   * @param property Property for which to add the given integer value.
   * @param value Integer to add to `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   */
  const addInteger = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addLiteralOfType(thing, property, serializeInteger(value), xmlSchemaTypes.integer);
  };
  /**
   * Create a new Thing with a localised string added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setStringWithLocale]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to add a localised string value to.
   * @param property Property for which to add the given string value.
   * @param value String to add to `thing` for the given `property`.
   * @param locale Locale of the added string.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   */
  function addStringWithLocale(thing, property, value, locale) {
      var _a, _b, _c;
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      const predicateIri = internal_toIriString(property);
      const normalizedLocale = normalizeLocale(locale);
      const existingPredicate = (_a = thing.predicates[predicateIri]) !== null && _a !== void 0 ? _a : {};
      const existingLangStrings = (_b = existingPredicate.langStrings) !== null && _b !== void 0 ? _b : {};
      const existingStringsInLocale = (_c = existingLangStrings[normalizedLocale]) !== null && _c !== void 0 ? _c : [];
      const updatedStringsInLocale = freeze(existingStringsInLocale.concat(value));
      const updatedLangStrings = freeze(Object.assign(Object.assign({}, existingLangStrings), { [normalizedLocale]: updatedStringsInLocale }));
      const updatedPredicate = freeze(Object.assign(Object.assign({}, existingPredicate), { langStrings: updatedLangStrings }));
      const updatedPredicates = freeze(Object.assign(Object.assign({}, thing.predicates), { [predicateIri]: updatedPredicate }));
      const updatedThing = freeze(Object.assign(Object.assign({}, thing), { predicates: updatedPredicates }));
      return updatedThing;
  }
  /**
   * Create a new Thing with an unlocalised string added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setStringNoLocale]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to add an unlocalised string value to.
   * @param property Property for which to add the given string value.
   * @param value String to add to `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   */
  const addStringNoLocale = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addLiteralOfType(thing, property, value, xmlSchemaTypes.string);
  };
  /**
   * Create a new Thing with a Named Node added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setNamedNode]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @ignore This should not be needed due to the other add*() functions. If you do find yourself needing it, please file a feature request for your use case.
   * @param thing The [[Thing]] to add a Named Node to.
   * @param property Property for which to add a value.
   * @param value The Named Node to add.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   */
  function addNamedNode(thing, property, value) {
      return addUrl(thing, property, value.value);
  }
  /**
   * Create a new Thing with a Literal added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setLiteral]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @ignore This should not be needed due to the other add*() functions. If you do find yourself needing it, please file a feature request for your use case.
   * @param thing The [[Thing]] to add a Literal to.
   * @param property Property for which to add a value.
   * @param value The Literal to add.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   */
  function addLiteral(thing, property, value) {
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      const typeIri = value.datatype.value;
      if (typeIri === xmlSchemaTypes.langString) {
          return addStringWithLocale(thing, property, value.value, value.language);
      }
      return addLiteralOfType(thing, property, value.value, value.datatype.value);
  }
  /**
   * Creates a new Thing with a Term added for a Property.
   *
   * This preserves existing values for the given Property. To replace them, see [[setTerm]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @ignore This should not be needed due to the other add*() functions. If you do find yourself needing it, please file a feature request for your use case.
   * @param thing The [[Thing]] to add a Term to.
   * @param property Property for which to add a value.
   * @param value The Term to add.
   * @returns A new Thing equal to the input Thing with the given value added for the given Property.
   * @since 0.3.0
   */
  function addTerm(thing, property, value) {
      var _a, _b;
      if (value.termType === "NamedNode") {
          return addNamedNode(thing, property, value);
      }
      if (value.termType === "Literal") {
          return addLiteral(thing, property, value);
      }
      if (value.termType === "BlankNode") {
          internal_throwIfNotThing(thing);
          if (!internal_isValidUrl(property)) {
              throw new ValidPropertyUrlExpectedError(property);
          }
          const predicateIri = internal_toIriString(property);
          const existingPredicate = (_a = thing.predicates[predicateIri]) !== null && _a !== void 0 ? _a : {};
          const existingBlankNodes = (_b = existingPredicate.blankNodes) !== null && _b !== void 0 ? _b : [];
          const updatedBlankNodes = freeze(existingBlankNodes.concat(getBlankNodeId(value)));
          const updatedPredicate = freeze(Object.assign(Object.assign({}, existingPredicate), { blankNodes: updatedBlankNodes }));
          const updatedPredicates = freeze(Object.assign(Object.assign({}, thing.predicates), { [predicateIri]: updatedPredicate }));
          const updatedThing = freeze(Object.assign(Object.assign({}, thing), { predicates: updatedPredicates }));
          return updatedThing;
      }
      throw new Error(`Term type [${value.termType}] is not supported by @inrupt/solid-client.`);
  }
  function addLiteralOfType(thing, property, value, type) {
      var _a, _b, _c;
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      const predicateIri = internal_toIriString(property);
      const existingPredicate = (_a = thing.predicates[predicateIri]) !== null && _a !== void 0 ? _a : {};
      const existingLiterals = (_b = existingPredicate.literals) !== null && _b !== void 0 ? _b : {};
      const existingValuesOfType = (_c = existingLiterals[type]) !== null && _c !== void 0 ? _c : [];
      const updatedValuesOfType = freeze(existingValuesOfType.concat(value));
      const updatedLiterals = freeze(Object.assign(Object.assign({}, existingLiterals), { [type]: updatedValuesOfType }));
      const updatedPredicate = freeze(Object.assign(Object.assign({}, existingPredicate), { literals: updatedLiterals }));
      const updatedPredicates = freeze(Object.assign(Object.assign({}, thing.predicates), { [predicateIri]: updatedPredicate }));
      const updatedThing = freeze(Object.assign(Object.assign({}, thing), { predicates: updatedPredicates }));
      return updatedThing;
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  function removeAll(thing, property) {
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      const predicateIri = internal_toIriString(property);
      const newPredicates = Object.assign({}, thing.predicates);
      delete newPredicates[predicateIri];
      return freeze(Object.assign(Object.assign({}, thing), { predicates: freeze(newPredicates) }));
  }
  /**
   * Create a new Thing with the given URL removed for the given Property.
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to remove a URL value from.
   * @param property Property for which to remove the given URL value.
   * @param value URL to remove from `thing` for the given `Property`.
   * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
   */
  const removeUrl = (thing, property, value) => {
      var _a, _b, _c;
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      const predicateIri = internal_toIriString(property);
      if (!isThing(value) && !internal_isValidUrl(value)) {
          throw new ValidValueUrlExpectedError(value);
      }
      const iriToRemove = isNamedNode$1(value)
          ? value.value
          : typeof value === "string"
              ? value
              : asIri(value);
      const updatedNamedNodes = freeze((_c = (_b = (_a = thing.predicates[predicateIri]) === null || _a === void 0 ? void 0 : _a.namedNodes) === null || _b === void 0 ? void 0 : _b.filter((namedNode) => namedNode.toLowerCase() !== iriToRemove.toLowerCase())) !== null && _c !== void 0 ? _c : []);
      const updatedPredicate = freeze(Object.assign(Object.assign({}, thing.predicates[predicateIri]), { namedNodes: updatedNamedNodes }));
      const updatedPredicates = freeze(Object.assign(Object.assign({}, thing.predicates), { [predicateIri]: updatedPredicate }));
      return freeze(Object.assign(Object.assign({}, thing), { predicates: updatedPredicates }));
  };
  /** @hidden Alias of [[removeUrl]] for those who prefer IRI terminology. */
  const removeIri = removeUrl;
  /**
   * Create a new Thing with the given boolean removed for the given Property.
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to remove a boolean value from.
   * @param property Property for which to remove the given boolean value.
   * @param value Boolean to remove from `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
   */
  const removeBoolean = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return removeLiteralMatching(thing, property, xmlSchemaTypes.boolean, (foundBoolean) => deserializeBoolean(foundBoolean) === value);
  };
  /**
   * Create a new Thing with the given datetime removed for the given Property.
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to remove a datetime value from.
   * @param property Property for which to remove the given datetime value.
   * @param value Datetime to remove from `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
   */
  const removeDatetime = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return removeLiteralMatching(thing, property, xmlSchemaTypes.dateTime, (foundDatetime) => { var _a; return ((_a = deserializeDatetime(foundDatetime)) === null || _a === void 0 ? void 0 : _a.getTime()) === value.getTime(); });
  };
  /**
   * Create a new Thing with the given date removed for the given Property.
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to remove a date value from.
   * @param property Property for which to remove the given date value.
   * @param value Date to remove from `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
   * @since 1.10.0
   */
  const removeDate = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return removeLiteralMatching(thing, property, xmlSchemaTypes.date, function (foundDate) {
          const deserializedDate = deserializeDate(foundDate);
          if (deserializedDate) {
              return (deserializedDate.getFullYear() === value.getFullYear() &&
                  deserializedDate.getMonth() === value.getMonth() &&
                  deserializedDate.getDate() === value.getDate());
          }
          else {
              return false;
          }
      });
  };
  /**
   * Create a new Thing with the given datetime removed for the given Property.
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to remove a datetime value from.
   * @param property Property for which to remove the given datetime value.
   * @param value Time to remove from `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
   * @since 1.10.0
   */
  const removeTime = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return removeLiteralMatching(thing, property, xmlSchemaTypes.time, function (foundTime) {
          const deserializedTime = deserializeTime(foundTime);
          if (deserializedTime) {
              return (deserializedTime.hour === value.hour &&
                  deserializedTime.minute === value.minute &&
                  deserializedTime.second === value.second &&
                  deserializedTime.millisecond === value.millisecond &&
                  deserializedTime.timezoneHourOffset === value.timezoneHourOffset &&
                  deserializedTime.timezoneMinuteOffset === value.timezoneMinuteOffset);
          }
          else {
              return false;
          }
      });
  };
  /**
   * Create a new Thing with the given decimal removed for the given Property.
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to remove a decimal value from.
   * @param property Property for which to remove the given decimal value.
   * @param value Decimal to remove from `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
   */
  const removeDecimal = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return removeLiteralMatching(thing, property, xmlSchemaTypes.decimal, (foundDecimal) => deserializeDecimal(foundDecimal) === value);
  };
  /**
   * Create a new Thing with the given integer removed for the given Property.
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to remove an integer value from.
   * @param property Property for which to remove the given integer value.
   * @param value Integer to remove from `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
   */
  const removeInteger = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return removeLiteralMatching(thing, property, xmlSchemaTypes.integer, (foundInteger) => deserializeInteger(foundInteger) === value);
  };
  /**
   * Create a new Thing with the given localised string removed for the given Property.
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to remove a localised string value from.
   * @param property Property for which to remove the given localised string value.
   * @param value String to remove from `thing` for the given `property`.
   * @param locale Locale of the string to remove.
   * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
   */
  function removeStringWithLocale(thing, property, value, locale) {
      var _a, _b;
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      const predicateIri = internal_toIriString(property);
      const existingLangStrings = (_b = (_a = thing.predicates[predicateIri]) === null || _a === void 0 ? void 0 : _a.langStrings) !== null && _b !== void 0 ? _b : {};
      const matchingLocale = Object.keys(existingLangStrings).find((existingLocale) => normalizeLocale(existingLocale) === normalizeLocale(locale) &&
          Array.isArray(existingLangStrings[existingLocale]) &&
          existingLangStrings[existingLocale].length > 0);
      if (typeof matchingLocale !== "string") {
          // Nothing to remove.
          return thing;
      }
      const existingStringsInLocale = existingLangStrings[matchingLocale];
      const updatedStringsInLocale = freeze(existingStringsInLocale.filter((existingString) => existingString !== value));
      const updatedLangStrings = freeze(Object.assign(Object.assign({}, existingLangStrings), { [matchingLocale]: updatedStringsInLocale }));
      const updatedPredicate = freeze(Object.assign(Object.assign({}, thing.predicates[predicateIri]), { langStrings: updatedLangStrings }));
      const updatedPredicates = freeze(Object.assign(Object.assign({}, thing.predicates), { [predicateIri]: updatedPredicate }));
      return freeze(Object.assign(Object.assign({}, thing), { predicates: updatedPredicates }));
  }
  /**
   * Create a new Thing with the given unlocalised string removed for the given Property.
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to remove an unlocalised string value from.
   * @param property Property for which to remove the given string value.
   * @param value String to remove from `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
   */
  const removeStringNoLocale = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return removeLiteralMatching(thing, property, xmlSchemaTypes.string, (foundString) => foundString === value);
  };
  /**
   * @ignore This should not be needed due to the other remove*() functions. If you do find yourself needing it, please file a feature request for your use case.
   * @param thing Thing to remove a NamedNode value from.
   * @param property Property for which to remove the given NamedNode value.
   * @param value NamedNode to remove from `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
   */
  function removeNamedNode(thing, property, value) {
      return removeUrl(thing, property, value.value);
  }
  /**
   * @ignore This should not be needed due to the other remove*() functions. If you do find yourself needing it, please file a feature request for your use case.
   * @param thing Thing to remove a Literal value from.
   * @param property Property for which to remove the given Literal value.
   * @param value Literal to remove from `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with the given value removed for the given Property.
   */
  function removeLiteral(thing, property, value) {
      var _a, _b, _c;
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      const typeIri = value.datatype.value;
      if (typeIri === xmlSchemaTypes.langString) {
          return removeStringWithLocale(thing, property, value.value, value.language);
      }
      const predicateIri = internal_toIriString(property);
      const existingPredicateValues = (_a = thing.predicates[predicateIri]) !== null && _a !== void 0 ? _a : {};
      const existingLiterals = (_b = existingPredicateValues.literals) !== null && _b !== void 0 ? _b : {};
      const existingValuesOfType = (_c = existingLiterals[typeIri]) !== null && _c !== void 0 ? _c : [];
      const updatedValues = freeze(existingValuesOfType.filter((existingValue) => existingValue !== value.value));
      const updatedLiterals = freeze(Object.assign(Object.assign({}, existingLiterals), { [typeIri]: updatedValues }));
      const updatedPredicate = freeze(Object.assign(Object.assign({}, existingPredicateValues), { literals: updatedLiterals }));
      const updatedPredicates = freeze(Object.assign(Object.assign({}, thing.predicates), { [predicateIri]: updatedPredicate }));
      const updatedThing = freeze(Object.assign(Object.assign({}, thing), { predicates: updatedPredicates }));
      return updatedThing;
  }
  /**
   * @param thing Thing to remove a Literal value from.
   * @param property Property for which to remove the given Literal value.
   * @param type Data type that the Literal should be stored as.
   * @param matcher Function that returns true if the given value is an equivalent serialisation of the value to remove. For example, when removing a `false` boolean, the matcher should return true for both "0" and "false".
   */
  function removeLiteralMatching(thing, property, type, matcher) {
      var _a, _b, _c;
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      const predicateIri = internal_toIriString(property);
      const existingPredicateValues = (_a = thing.predicates[predicateIri]) !== null && _a !== void 0 ? _a : {};
      const existingLiterals = (_b = existingPredicateValues.literals) !== null && _b !== void 0 ? _b : {};
      const existingValuesOfType = (_c = existingLiterals[type]) !== null && _c !== void 0 ? _c : [];
      const updatedValues = freeze(existingValuesOfType.filter((existingValue) => !matcher(existingValue)));
      const updatedLiterals = freeze(Object.assign(Object.assign({}, existingLiterals), { [type]: updatedValues }));
      const updatedPredicate = freeze(Object.assign(Object.assign({}, existingPredicateValues), { literals: updatedLiterals }));
      const updatedPredicates = freeze(Object.assign(Object.assign({}, thing.predicates), { [predicateIri]: updatedPredicate }));
      const updatedThing = freeze(Object.assign(Object.assign({}, thing), { predicates: updatedPredicates }));
      return updatedThing;
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * Create a new Thing with existing values replaced by the given URL for the given Property.
   *
   * To preserve existing values, see [[addUrl]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to set a URL value on.
   * @param property Property for which to set the given URL value.
   * @param url URL to set on `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   */
  const setUrl = (thing, property, url) => {
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      if (!isThing(url) && !internal_isValidUrl(url)) {
          throw new ValidValueUrlExpectedError(url);
      }
      return addUrl(removeAll(thing, property), property, url);
  };
  /** @hidden Alias of [[setUrl]] for those who prefer IRI terminology. */
  const setIri = setUrl;
  /**
   * Create a new Thing with existing values replaced by the given boolean for the given Property.
   *
   * To preserve existing values, see [[addBoolean]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to set a boolean value on.
   * @param property Property for which to set the given boolean value.
   * @param value Boolean to set on `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   */
  const setBoolean = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addBoolean(removeAll(thing, property), property, value);
  };
  /**
   * Create a new Thing with existing values replaced by the given datetime for the given Property.
   *
   * To preserve existing values, see [[addDatetime]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to set an datetime value on.
   * @param property Property for which to set the given datetime value.
   * @param value Datetime to set on `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   */
  const setDatetime = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addDatetime(removeAll(thing, property), property, value);
  };
  /**
   * Create a new Thing with existing values replaced by the given date for the given Property.
   *
   * To preserve existing values, see [[addDate]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to set an date value on.
   * @param property Property for which to set the given date value.
   * @param value Date to set on `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   * @since 1.10.0
   */
  const setDate = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addDate(removeAll(thing, property), property, value);
  };
  /**
   * Create a new Thing with existing values replaced by the given time for the given Property.
   *
   * To preserve existing values, see [[addTime]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to set an time value on.
   * @param property Property for which to set the given time value.
   * @param value time to set on `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   * @since 1.10.0
   */
  const setTime = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addTime(removeAll(thing, property), property, value);
  };
  /**
   * Create a new Thing with existing values replaced by the given decimal for the given Property.
   *
   * To preserve existing values, see [[addDecimal]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to set a decimal value on.
   * @param property Property for which to set the given decimal value.
   * @param value Decimal to set on `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   */
  const setDecimal = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addDecimal(removeAll(thing, property), property, value);
  };
  /**
   * Create a new Thing with existing values replaced by the given integer for the given Property.
   *
   * To preserve existing values, see [[addInteger]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to set an integer value on.
   * @param property Property for which to set the given integer value.
   * @param value Integer to set on `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   */
  const setInteger = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addInteger(removeAll(thing, property), property, value);
  };
  /**
   * Create a new Thing with existing values replaced by the given localised string for the given Property.
   *
   * To preserve existing values, see [[addStringWithLocale]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to set a localised string value on.
   * @param property Property for which to set the given localised string value.
   * @param value Localised string to set on `thing` for the given `property`.
   * @param locale Locale of the added string.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   */
  function setStringWithLocale(thing, property, value, locale) {
      internal_throwIfNotThing(thing);
      return addStringWithLocale(removeAll(thing, property), property, value, locale);
  }
  /**
   * Create a new Thing with existing values replaced by the given unlocalised string for the given Property.
   *
   * To preserve existing values, see [[addStringNoLocale]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @param thing Thing to set an unlocalised string value on.
   * @param property Property for which to set the given unlocalised string value.
   * @param value Unlocalised string to set on `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   */
  const setStringNoLocale = (thing, property, value) => {
      internal_throwIfNotThing(thing);
      return addStringNoLocale(removeAll(thing, property), property, value);
  };
  /**
   * Create a new Thing with existing values replaced by the given Named Node for the given Property.
   *
   * This replaces existing values for the given Property. To preserve them, see [[addNamedNode]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @ignore This should not be needed due to the other set*() functions. If you do find yourself needing it, please file a feature request for your use case.
   * @param thing The [[Thing]] to set a NamedNode on.
   * @param property Property for which to set the value.
   * @param value The NamedNode to set on `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   */
  function setNamedNode(thing, property, value) {
      internal_throwIfNotThing(thing);
      return addNamedNode(removeAll(thing, property), property, value);
  }
  /**
   * Create a new Thing with existing values replaced by the given Literal for the given Property.
   *
   * This replaces existing values for the given Property. To preserve them, see [[addLiteral]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @ignore This should not be needed due to the other set*() functions. If you do find yourself needing it, please file a feature request for your use case.
   * @param thing The [[Thing]] to set a Literal on.
   * @param property Property for which to set the value.
   * @param value The Literal to set on `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   */
  function setLiteral(thing, property, value) {
      internal_throwIfNotThing(thing);
      return addLiteral(removeAll(thing, property), property, value);
  }
  /**
   * Creates a new Thing with existing values replaced by the given Term for the given Property.
   *
   * This replaces existing values for the given Property. To preserve them, see [[addTerm]].
   *
   * The original `thing` is not modified; this function returns a cloned Thing with updated values.
   *
   * @ignore This should not be needed due to the other set*() functions. If you do find yourself needing it, please file a feature request for your use case.
   * @param thing The [[Thing]] to set a Term on.
   * @param property Property for which to set the value.
   * @param value The raw RDF/JS value to set on `thing` for the given `property`.
   * @returns A new Thing equal to the input Thing with existing values replaced by the given value for the given Property.
   * @since 0.3.0
   */
  function setTerm(thing, property, value) {
      internal_throwIfNotThing(thing);
      if (!internal_isValidUrl(property)) {
          throw new ValidPropertyUrlExpectedError(property);
      }
      return addTerm(removeAll(thing, property), property, value);
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * Create or modify a [[Thing]], setting multiple properties in a single expresssion.
   *
   * For example, you can create a new Thing and initialise several properties as follows:
   *
   *     const me = buildThing()
   *       .addUrl(rdf.type, schema.Person)
   *       .addStringNoLocale(schema.givenName, "Vincent")
   *       .build();
   *
   * Take note of the final call to `.build()` to obtain the actual Thing.
   *
   * @param init Optionally pass an existing [[Thing]] to modify the properties of. If left empty, `buildThing` will initialise a new Thing.
   * @returns a [[ThingBuilder]], a Fluent API that allows you to set multiple properties in a single expression.
   * @since 1.9.0
   */
  function buildThing(init = createThing()) {
      let thing = isThing(init) ? init : createThing(init);
      function getAdder(adder) {
          return (property, value) => {
              thing = adder(thing, property, value);
              return builder;
          };
      }
      function getSetter(setter) {
          return (property, value) => {
              thing = setter(thing, property, value);
              return builder;
          };
      }
      function getRemover(remover) {
          return (property, value) => {
              thing = remover(thing, property, value);
              return builder;
          };
      }
      const builder = {
          build: () => thing,
          addUrl: getAdder(addUrl),
          addIri: getAdder(addIri),
          addBoolean: getAdder(addBoolean),
          addDatetime: getAdder(addDatetime),
          addDate: getAdder(addDate),
          addTime: getAdder(addTime),
          addDecimal: getAdder(addDecimal),
          addInteger: getAdder(addInteger),
          addStringNoLocale: getAdder(addStringNoLocale),
          addStringEnglish: (property, value) => {
              thing = addStringWithLocale(thing, property, value, "en");
              return builder;
          },
          addStringWithLocale: (property, value, locale) => {
              thing = addStringWithLocale(thing, property, value, locale);
              return builder;
          },
          addNamedNode: getAdder(addNamedNode),
          addLiteral: getAdder(addLiteral),
          addTerm: getAdder(addTerm),
          setUrl: getSetter(setUrl),
          setIri: getSetter(setIri),
          setBoolean: getSetter(setBoolean),
          setDatetime: getSetter(setDatetime),
          setDate: getSetter(setDate),
          setTime: getSetter(setTime),
          setDecimal: getSetter(setDecimal),
          setInteger: getSetter(setInteger),
          setStringNoLocale: getSetter(setStringNoLocale),
          setStringEnglish: (property, value) => {
              thing = setStringWithLocale(thing, property, value, "en");
              return builder;
          },
          setStringWithLocale: (property, value, locale) => {
              thing = setStringWithLocale(thing, property, value, locale);
              return builder;
          },
          setNamedNode: getSetter(setNamedNode),
          setLiteral: getSetter(setLiteral),
          setTerm: getSetter(setTerm),
          removeAll: (property) => {
              thing = removeAll(thing, property);
              return builder;
          },
          removeUrl: getRemover(removeUrl),
          removeIri: getRemover(removeIri),
          removeBoolean: getRemover(removeBoolean),
          removeDatetime: getRemover(removeDatetime),
          removeDate: getRemover(removeDate),
          removeTime: getRemover(removeTime),
          removeDecimal: getRemover(removeDecimal),
          removeInteger: getRemover(removeInteger),
          removeStringNoLocale: getRemover(removeStringNoLocale),
          removeStringEnglish: (property, value) => buildThing(removeStringWithLocale(thing, property, value, "en")),
          removeStringWithLocale: (property, value, locale) => buildThing(removeStringWithLocale(thing, property, value, locale)),
          removeNamedNode: getRemover(removeNamedNode),
          removeLiteral: getRemover(removeLiteral),
      };
      return builder;
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * @param linkedAccessResource A Resource exposed via the Link header of another Resource with rel="acl".
   * @returns Whether that Resource is an ACP ACR or not (in which case it's likely a WAC ACL).
   */
  function isAcr(linkedAccessResource) {
      const relTypeLinks = getLinkedResourceUrlAll(linkedAccessResource)["type"];
      return (Array.isArray(relTypeLinks) &&
          relTypeLinks.includes(acp.AccessControlResource));
  }

  /**
   * Copyright 2021 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * This (currently internal) function fetches the ACL indicated in the [[WithServerResourceInfo]]
   * attached to a resource.
   *
   * @internal
   * @param resourceInfo The Resource info with the ACL URL
   * @param options Optional parameter `options.fetch`: An alternative `fetch` function to make the HTTP request, compatible with the browser-native [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters).
   */
  async function internal_fetchAcl(resourceInfo, options = internal_defaultFetchOptions) {
      if (!hasAccessibleAcl(resourceInfo)) {
          return {
              resourceAcl: null,
              fallbackAcl: null,
          };
      }
      try {
          const resourceAcl = await internal_fetchResourceAcl(resourceInfo, options);
          const acl = resourceAcl === null
              ? {
                  resourceAcl: null,
                  fallbackAcl: await internal_fetchFallbackAcl(resourceInfo, options),
              }
              : { resourceAcl: resourceAcl, fallbackAcl: null };
          return acl;
      }
      catch (e) {
          /* istanbul ignore else: fetchResourceAcl swallows all non-AclIsAcrErrors */
          if (e instanceof AclIsAcrError) {
              return {
                  resourceAcl: null,
                  fallbackAcl: null,
              };
          }
          /* istanbul ignore next: fetchResourceAcl swallows all non-AclIsAcrErrors */
          throw e;
      }
  }
  /** @internal */
  async function internal_fetchResourceAcl(dataset, options = internal_defaultFetchOptions) {
      if (!hasAccessibleAcl(dataset)) {
          return null;
      }
      try {
          const aclSolidDataset = await getSolidDataset(dataset.internal_resourceInfo.aclUrl, options);
          if (isAcr(aclSolidDataset)) {
              throw new AclIsAcrError(dataset, aclSolidDataset);
          }
          return freeze(Object.assign(Object.assign({}, aclSolidDataset), { internal_accessTo: getSourceUrl(dataset) }));
      }
      catch (e) {
          if (e instanceof AclIsAcrError) {
              throw e;
          }
          // Since a Solid server adds a `Link` header to an ACL even if that ACL does not exist,
          // failure to fetch the ACL is expected to happen - we just return `null` and let callers deal
          // with it.
          return null;
      }
  }
  /** @internal */
  async function internal_fetchFallbackAcl(resource, options = internal_defaultFetchOptions) {
      const resourceUrl = new URL(getSourceUrl(resource));
      const resourcePath = resourceUrl.pathname;
      // Note: we're currently assuming that the Origin is the root of the Pod. However, it is not yet
      //       set in stone that that will always be the case. We might need to check the Container's
      //       metadata at some point in time to check whether it is actually the root of the Pod.
      //       See: https://github.com/solid/specification/issues/153#issuecomment-624630022
      if (resourcePath === "/") {
          // We're already at the root, so there's no Container we can retrieve:
          return null;
      }
      const containerPath = internal_getContainerPath(resourcePath);
      const containerIri = new URL(containerPath, resourceUrl.origin).href;
      const containerInfo = await getResourceInfo(containerIri, options);
      if (!hasAccessibleAcl(containerInfo)) {
          // If the current user does not have access to this Container's ACL,
          // we cannot determine whether its ACL is the one that applies. Thus, return null:
          return null;
      }
      const containerAcl = await internal_fetchResourceAcl(containerInfo, options);
      if (containerAcl === null) {
          return internal_fetchFallbackAcl(containerInfo, options);
      }
      return containerAcl;
  }
  /**
   * Given the path to a Resource, get the URL of the Container one level up in the hierarchy.
   * @param resourcePath The path of the Resource of which we need to determine the Container's path.
   * @hidden For internal use only.
   */
  function internal_getContainerPath(resourcePath) {
      const resourcePathWithoutTrailingSlash = resourcePath.substring(resourcePath.length - 1) === "/"
          ? resourcePath.substring(0, resourcePath.length - 1)
          : resourcePath;
      const containerPath = resourcePath.substring(0, resourcePathWithoutTrailingSlash.lastIndexOf("/")) + "/";
      return containerPath;
  }
  /** @internal */
  function internal_getAclRules(aclDataset) {
      const things = getThingAll(aclDataset);
      return things.filter(isAclRule);
  }
  function isAclRule(thing) {
      return getIriAll(thing, rdf$3.type).includes(acl.Authorization);
  }
  /** @internal */
  function internal_getDefaultAclRulesForResource(aclRules, resource) {
      return aclRules.filter((rule) => isDefaultForResource(rule, resource));
  }
  function isDefaultForResource(aclRule, resource) {
      return (getIriAll(aclRule, acl.default).includes(resource) ||
          getIriAll(aclRule, acl.defaultForNew).includes(resource));
  }
  /** @internal */
  function internal_removeEmptyAclRules(aclDataset) {
      const aclRules = internal_getAclRules(aclDataset);
      const aclRulesToRemove = aclRules.filter(isEmptyAclRule);
      // Is this too clever? It iterates over aclRulesToRemove, one by one removing them from aclDataset.
      const updatedAclDataset = aclRulesToRemove.reduce(removeThing, aclDataset);
      return updatedAclDataset;
  }
  function isEmptyAclRule(aclRule) {
      // If there are Quads in there unrelated to Access Control,
      // this is not an empty ACL rule that can be deleted:
      if (subjectToRdfJsQuads(aclRule.predicates, DataFactory$1.namedNode(aclRule.url), DataFactory$1.defaultGraph()).some((quad) => !isAclQuad(quad))) {
          return false;
      }
      // If the rule does not apply to any Resource, it is no longer working:
      if (getIri(aclRule, acl.accessTo) === null &&
          getIri(aclRule, acl.default) === null &&
          getIri(aclRule, acl.defaultForNew) === null) {
          return true;
      }
      // If the rule does not specify Access Modes, it is no longer working:
      if (getIri(aclRule, acl.mode) === null) {
          return true;
      }
      // If the rule does not specify whom it applies to, it is no longer working:
      if (getIri(aclRule, acl.agent) === null &&
          getIri(aclRule, acl.agentGroup) === null &&
          getIri(aclRule, acl.agentClass) === null) {
          return true;
      }
      return false;
  }
  function isAclQuad(quad) {
      const predicate = quad.predicate;
      const object = quad.object;
      if (predicate.equals(DataFactory$1.namedNode(rdf$3.type)) &&
          object.equals(DataFactory$1.namedNode(acl.Authorization))) {
          return true;
      }
      if (predicate.equals(DataFactory$1.namedNode(acl.accessTo)) ||
          predicate.equals(DataFactory$1.namedNode(acl.default)) ||
          predicate.equals(DataFactory$1.namedNode(acl.defaultForNew))) {
          return true;
      }
      if (predicate.equals(DataFactory$1.namedNode(acl.mode)) &&
          Object.values(internal_accessModeIriStrings).some((mode) => object.equals(DataFactory$1.namedNode(mode)))) {
          return true;
      }
      if (predicate.equals(DataFactory$1.namedNode(acl.agent)) ||
          predicate.equals(DataFactory$1.namedNode(acl.agentGroup)) ||
          predicate.equals(DataFactory$1.namedNode(acl.agentClass))) {
          return true;
      }
      if (predicate.equals(DataFactory$1.namedNode(acl.origin))) {
          return true;
      }
      return false;
  }
  /**
   * IRIs of potential Access Modes
   * @internal
   */
  const internal_accessModeIriStrings = {
      read: "http://www.w3.org/ns/auth/acl#Read",
      append: "http://www.w3.org/ns/auth/acl#Append",
      write: "http://www.w3.org/ns/auth/acl#Write",
      control: "http://www.w3.org/ns/auth/acl#Control",
  };
  /**
   * Initialises a new ACL Rule that grants some access - but does not yet specify to whom.
   *
   * @hidden This is an internal utility function that should not be used directly by downstreams.
   * @param access Access mode that this Rule will grant
   */
  function internal_initialiseAclRule(access) {
      let newRule = createThing();
      newRule = setIri(newRule, rdf$3.type, acl.Authorization);
      if (access.read) {
          newRule = addIri(newRule, acl.mode, internal_accessModeIriStrings.read);
      }
      if (access.append && !access.write) {
          newRule = addIri(newRule, acl.mode, internal_accessModeIriStrings.append);
      }
      if (access.write) {
          newRule = addIri(newRule, acl.mode, internal_accessModeIriStrings.write);
      }
      if (access.control) {
          newRule = addIri(newRule, acl.mode, internal_accessModeIriStrings.control);
      }
      return newRule;
  }
  /**
   * Creates a new ACL Rule with the same ACL values as the input ACL Rule, but having a different IRI.
   *
   * Note that non-ACL values will not be copied over.
   *
   * @hidden This is an internal utility function that should not be used directly by downstreams.
   * @param sourceRule ACL rule to duplicate.
   */
  function internal_duplicateAclRule(sourceRule) {
      let targetRule = createThing();
      targetRule = setIri(targetRule, rdf$3.type, acl.Authorization);
      function copyIris(inputRule, outputRule, predicate) {
          return getIriAll(inputRule, predicate).reduce((outputRule, iriTarget) => addIri(outputRule, predicate, iriTarget), outputRule);
      }
      targetRule = copyIris(sourceRule, targetRule, acl.accessTo);
      targetRule = copyIris(sourceRule, targetRule, acl.default);
      targetRule = copyIris(sourceRule, targetRule, acl.defaultForNew);
      targetRule = copyIris(sourceRule, targetRule, acl.agent);
      targetRule = copyIris(sourceRule, targetRule, acl.agentGroup);
      targetRule = copyIris(sourceRule, targetRule, acl.agentClass);
      targetRule = copyIris(sourceRule, targetRule, acl.origin);
      targetRule = copyIris(sourceRule, targetRule, acl.mode);
      return targetRule;
  }
  function internal_setAcl(resource, acl) {
      return Object.assign(internal_cloneResource(resource), { internal_acl: acl });
  }
  const supportedActorPredicates = [
      acl.agent,
      acl.agentClass,
      acl.agentGroup,
      acl.origin,
  ];
  /**
   * Given an ACL Rule, returns two new ACL Rules that cover all the input Rule's use cases,
   * except for giving the given Actor access to the given Resource.
   *
   * @param rule The ACL Rule that should no longer apply for a given Actor to a given Resource.
   * @param actor The Actor that should be removed from the Rule for the given Resource.
   * @param resourceIri The Resource to which the Rule should no longer apply for the given Actor.
   * @returns A tuple with the original ACL Rule without the given Actor, and a new ACL Rule for the given Actor for the remaining Resources, respectively.
   */
  function internal_removeActorFromRule(rule, actor, actorPredicate, resourceIri, ruleType) {
      // If the existing Rule does not apply to the given Actor, we don't need to split up.
      // Without this check, we'd be creating a new rule for the given Actor (ruleForOtherTargets)
      // that would give it access it does not currently have:
      if (!getIriAll(rule, actorPredicate).includes(actor)) {
          const emptyRule = internal_initialiseAclRule({
              read: false,
              append: false,
              write: false,
              control: false,
          });
          return [rule, emptyRule];
      }
      // The existing rule will keep applying to Actors other than the given one:
      const ruleWithoutActor = removeIri(rule, actorPredicate, actor);
      // The actor might have been given other access in the existing rule, so duplicate it...
      let ruleForOtherTargets = internal_duplicateAclRule(rule);
      // ...but remove access to the original Resource...
      ruleForOtherTargets = removeIri(ruleForOtherTargets, ruleType === "resource" ? acl.accessTo : acl.default, resourceIri);
      // Prevents the legacy predicate 'acl:defaultForNew' to lead to privilege escalation
      if (ruleType === "default") {
          ruleForOtherTargets = removeIri(ruleForOtherTargets, acl.defaultForNew, resourceIri);
      }
      // ...and only apply the new Rule to the given Actor (because the existing Rule covers the others):
      ruleForOtherTargets = setIri(ruleForOtherTargets, actorPredicate, actor);
      supportedActorPredicates
          .filter((predicate) => predicate !== actorPredicate)
          .forEach((predicate) => {
          ruleForOtherTargets = removeAll(ruleForOtherTargets, predicate);
      });
      return [ruleWithoutActor, ruleForOtherTargets];
  }
  /**
   * ```{note}
   * This function is still experimental and subject to change, even in a non-major release.
   * ```
   * Modifies the resource ACL (Access Control List) to set the Access Modes for the given Agent.
   * Specifically, the function returns a new resource ACL initialised with the given ACL and
   * new rules for the Actor's access.
   *
   * If rules for Actor's access already exist in the given ACL, in the returned ACL,
   * they are replaced by the new rules.
   *
   * This function does not modify:
   *
   * - Access Modes granted indirectly to Actors through other ACL rules, e.g., public or group-specific permissions.
   * - Access Modes granted to Actors for the child Resources if the associated Resource is a Container.
   * - The original ACL.
   *
   * @param aclDataset The SolidDataset that contains Access-Control List rules.
   * @param actor The Actor to grant specific Access Modes.
   * @param access The Access Modes to grant to the Actor for the Resource.
   * @returns A new resource ACL initialised with the given `aclDataset` and `access` for the `agent`.
   */
  function internal_setActorAccess(aclDataset, access, actorPredicate, accessType, actor) {
      // First make sure that none of the pre-existing rules in the given ACL SolidDataset
      // give the Agent access to the Resource:
      let filteredAcl = aclDataset;
      getThingAll(aclDataset).forEach((aclRule) => {
          // Obtain both the Rule that no longer includes the given Actor,
          // and a new Rule that includes all ACL Quads
          // that do not pertain to the given Actor-Resource combination.
          // Note that usually, the latter will no longer include any meaningful statements;
          // we'll clean them up afterwards.
          const [filteredRule, remainingRule] = internal_removeActorFromRule(aclRule, actor, actorPredicate, aclDataset.internal_accessTo, accessType);
          filteredAcl = setThing(filteredAcl, filteredRule);
          filteredAcl = setThing(filteredAcl, remainingRule);
      });
      // Create a new Rule that only grants the given Actor the given Access Modes:
      let newRule = internal_initialiseAclRule(access);
      newRule = setIri(newRule, accessType === "resource" ? acl.accessTo : acl.default, aclDataset.internal_accessTo);
      newRule = setIri(newRule, actorPredicate, actor);
      const updatedAcl = setThing(filteredAcl, newRule);
      // Remove any remaining Rules that do not contain any meaningful statements:
      return internal_removeEmptyAclRules(updatedAcl);
  }
  /**
   * This error indicates that, if we're following a Link with rel="acl",
   * it does not result in a WAC ACL, but in an ACP ACR.
   */
  class AclIsAcrError extends Error {
      constructor(sourceResource, aclResource) {
          super(`[${getSourceIri(sourceResource)}] is governed by Access Control Policies in [${getSourceIri(aclResource)}] rather than by Web Access Control.`);
      }
  }

  /**
   * ```{note} The Web Access Control specification is not yet finalised. As such, this
   * function is still experimental and subject to change, even in a non-major release.
   * ```
   *
   * Verifies whether the given Resource has a resource ACL (Access Control List) attached.
   *
   * The [[hasResourceAcl]] function checks that:
   * - a given Resource has a resource ACL attached, and
   * - the user calling [[hasResourceAcl]] has Control access to the Resource.
   *
   * To retrieve a Resource with its ACLs, see [[getSolidDatasetWithAcl]].
   *
   * @param resource A Resource that might have an ACL attached.
   * @returns `true` if the Resource has a resource ACL attached that is accessible by the user.
   */
  function hasResourceAcl(resource) {
      return (resource.internal_acl.resourceAcl !== null &&
          getSourceUrl(resource) ===
              resource.internal_acl.resourceAcl.internal_accessTo &&
          resource.internal_resourceInfo.aclUrl ===
              getSourceUrl(resource.internal_acl.resourceAcl));
  }
  /**
   * Experimental: fetch a SolidDataset and its associated Access Control List.
   *
   * This is an experimental function that fetches both a Resource, the linked ACL Resource (if
   * available), and the ACL that applies to it if the linked ACL Resource is not available. This can
   * result in many HTTP requests being executed, in lieu of the Solid spec mandating servers to
   * provide this info in a single request. Therefore, and because this function is still
   * experimental, prefer [[getSolidDataset]] instead.
   *
   * If the Resource does not advertise the ACL Resource (because the authenticated user does not have
   * access to it), the `acl` property in the returned value will be null. `acl.resourceAcl` will be
   * undefined if the Resource's linked ACL Resource could not be fetched (because it does not exist),
   * and `acl.fallbackAcl` will be null if the applicable Container's ACL is not accessible to the
   * authenticated user.
   *
   * @param url URL of the SolidDataset to fetch.
   * @param options Optional parameter `options.fetch`: An alternative `fetch` function to make the HTTP request, compatible with the browser-native [fetch API](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters).
   * @returns A SolidDataset and the ACLs that apply to it, if available to the authenticated user.
   */
  async function getSolidDatasetWithAcl(url, options = internal_defaultFetchOptions) {
      const solidDataset = await getSolidDataset(url, options);
      const acl = await internal_fetchAcl(solidDataset, options);
      return internal_setAcl(solidDataset, acl);
  }
  /**
   * ```{note} This function is still experimental and subject to change, even in a non-major release.
   * ```
   *
   * Retrieves a file, its resource ACL (Access Control List) if available,
   * and its fallback ACL from a URL and returns them as a blob.
   *
   * If the user calling the function does not have access to the file's resource ACL,
   * [[hasAccessibleAcl]] on the returned blob returns false.
   * If the user has access to the file's resource ACL but the resource ACL does not exist,
   * [[getResourceAcl]] on the returned blob returns null.
   * If the fallback ACL is inaccessible by the user,
   * [[getFallbackAcl]] on the returned blob returns null.
   *
   * ```{tip}
   * To retrieve the ACLs, the function results in multiple HTTP requests rather than a single
   * request as mandated by the Solid spec. As such, prefer [[getFile]] instead if you do not need the ACL.
   * ```
   *
   * @param url The URL of the fetched file
   * @param options Fetching options: a custom fetcher and/or headers.
   * @returns A file and its ACLs, if available to the authenticated user, as a blob.
   * @since 0.2.0
   */
  async function getFileWithAcl(input, options = internal_defaultFetchOptions) {
      const file = await getFile(input, options);
      const acl = await internal_fetchAcl(file, options);
      return internal_setAcl(file, acl);
  }
  function getResourceAcl(resource) {
      if (!hasResourceAcl(resource)) {
          return null;
      }
      return resource.internal_acl.resourceAcl;
  }
  /**
   * ```{note} The Web Access Control specification is not yet finalised. As such, this
   * function is still experimental and subject to change, even in a non-major release.
   * ```
   *
   * Verifies whether the given Resource has a fallback ACL (Access Control List) attached.
   *
   * A fallback ACL for a Resource is inherited from the Resource's parent Container
   * (or another of its ancestor Containers) and applies if the Resource does
   * not have its own resource ACL.
   *
   * The [[hasFallbackAcl]] function checks that:
   * - a given Resource has a fallback ACL attached, and
   * - the user calling [[hasFallbackAcl]] has Control access to the Container
   * from which the Resource inherits its ACL.
   *
   * To retrieve a Resource with its ACLs, see [[getSolidDatasetWithAcl]].
   *
   * @param resource A [[SolidDataset]] that might have a fallback ACL attached.
   *
   * @returns `true` if the Resource has a fallback ACL attached that is accessible to the user.
   */
  function hasFallbackAcl(resource) {
      return resource.internal_acl.fallbackAcl !== null;
  }
  /**
   * ```{note} The Web Access Control specification is not yet finalised. As such, this
   * function is still experimental and subject to change, even in a non-major release.
   * ```
   *
   * Creates an empty resource ACL (Access Control List) for a given Resource.
   *
   * @param targetResource A Resource that does not have its own ACL yet (see [[hasResourceAcl]]).
   * @returns An empty resource ACL for the given Resource.
   */
  function createAcl(targetResource) {
      const emptyResourceAcl = freeze(Object.assign(Object.assign({}, createSolidDataset()), { internal_accessTo: getSourceUrl(targetResource), internal_resourceInfo: {
              sourceIri: targetResource.internal_resourceInfo.aclUrl,
              isRawData: false,
              linkedResources: {},
          } }));
      return emptyResourceAcl;
  }
  /**
   * ```{note} The Web Access Control specification is not yet finalised. As such, this
   * function is still experimental and subject to change, even in a non-major release.
   * ```
   *
   * Creates a resource ACL (Access Control List), initialised from the fallback ACL
   * inherited from the given Resource's Container (or another of its ancestor Containers).
   * That is, the new ACL has the same rules/entries as the fallback ACL that currently
   * applies to the Resource.
   *
   * @param resource A Resource without its own resource ACL (see [[hasResourceAcl]]) but with an accessible fallback ACL (see [[hasFallbackAcl]]).
   * @returns A resource ACL initialised with the rules/entries from the Resource's fallback ACL.
   */
  function createAclFromFallbackAcl(resource) {
      const emptyResourceAcl = createAcl(resource);
      const fallbackAclRules = internal_getAclRules(resource.internal_acl.fallbackAcl);
      const defaultAclRules = internal_getDefaultAclRulesForResource(fallbackAclRules, resource.internal_acl.fallbackAcl.internal_accessTo);
      const newAclRules = defaultAclRules.map((rule) => {
          rule = removeAll(rule, acl.default);
          rule = removeAll(rule, acl.defaultForNew);
          rule = setIri(rule, acl.accessTo, getSourceUrl(resource));
          rule = setIri(rule, acl.default, getSourceUrl(resource));
          return rule;
      });
      // Iterate over every ACL Rule we want to import, inserting them into `emptyResourceAcl` one by one:
      const initialisedResourceAcl = newAclRules.reduce(setThing, emptyResourceAcl);
      return initialisedResourceAcl;
  }
  /**
   * ```{note} The Web Access Control specification is not yet finalised. As such, this
   * function is still experimental and subject to change, even in a non-major release.
   * ```
   *
   * Saves the resource ACL for a Resource.
   *
   * @param resource The Resource to which the given resource ACL applies.
   * @param resourceAcl An [[AclDataset]] whose ACL Rules will apply to `resource`.
   * @param options Optional parameter `options.fetch`: An alternative `fetch` function to make the HTTP request, compatible with the browser-native [fetch API](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters).
   */
  async function saveAclFor(resource, resourceAcl, options = internal_defaultFetchOptions) {
      if (!hasAccessibleAcl(resource)) {
          throw new Error(`Could not determine the location of the ACL for the Resource at [${getSourceUrl(resource)}]; possibly the current user does not have Control access to that Resource. Try calling \`hasAccessibleAcl()\` before calling \`saveAclFor()\`.`);
      }
      const savedDataset = await saveSolidDatasetAt(resource.internal_resourceInfo.aclUrl, resourceAcl, options);
      const savedAclDataset = Object.assign(Object.assign({}, savedDataset), { internal_accessTo: getSourceUrl(resource) });
      return savedAclDataset;
  }
  /**
   * Given a [[SolidDataset]], verify whether its Access Control List is accessible to the current user.
   *
   * This should generally only be true for SolidDatasets fetched by
   * [[getSolidDatasetWithAcl]].
   *
   * Please note that the Web Access Control specification is not yet finalised, and hence, this
   * function is still experimental and can change in a non-major release.
   *
   * @param dataset A [[SolidDataset]].
   * @returns Whether the given `dataset` has a an ACL that is accessible to the current user.
   */
  function hasAccessibleAcl(dataset) {
      return typeof dataset.internal_resourceInfo.aclUrl === "string";
  }

  /**
   * ```{note}
   * This function is still experimental and subject to change, even in a non-major release.
   * ```
   * Modifies the resource ACL (Access Control List) to set the Access Modes for the given Agent.
   * Specifically, the function returns a new resource ACL initialised with the given ACL and
   * new rules for the Agent's access.
   *
   * If rules for Agent's access already exist in the given ACL, in the returned ACL,
   * they are replaced by the new rules.
   *
   * This function does not modify:
   *
   * - Access Modes granted indirectly to Agents through other ACL rules, e.g., public or group-specific permissions.
   * - Access Modes granted to Agents for the child Resources if the associated Resource is a Container.
   * - The original ACL.
   *
   * @param aclDataset The SolidDataset that contains Access-Control List rules.
   * @param agent The Agent to grant specific Access Modes.
   * @param access The Access Modes to grant to the Agent for the Resource.
   * @returns A new resource ACL initialised with the given `aclDataset` and `access` for the `agent`.
   */
  function setAgentResourceAccess(aclDataset, agent, access) {
      return internal_setActorAccess(aclDataset, access, acl.agent, "resource", agent);
  }

  /**
   * ```{note}
   * This function is still experimental and subject to change, even in a non-major release.
   * ```
   *
   * Modifies the resource ACL (Access Control List) to set the Access Modes for the public.
   * Specifically, the function returns a new resource ACL (Access Control List) initialised
   * with the given resource ACL and new rules for the given public access.
   *
   * If rules for public access already exist in the given ACL, in the *returned* ACL,
   * they are replaced by the new rules.
   *
   * This function does not modify:
   * - Access Modes granted to Agents through other ACL rules, e.g., agent- or group-specific permissions.
   * - Access Modes to child Resources if the associated Resource is a Container.
   * - The original ACL.
   *
   * @param aclDataset The SolidDataset that contains Access Control List rules.
   * @param access The Access Modes to grant to the public.
   * @returns A new resource ACL initialised with the given `aclDataset` and public `access`.
   */
  function setPublicResourceAccess(aclDataset, access) {
      return internal_setActorAccess(aclDataset, access, acl.agentClass, "resource", foaf.Agent);
  }

  var ResourceType;

  (function (ResourceType) {
    ResourceType["FILE"] = "file";
    ResourceType["DATASET"] = "dataset";
    ResourceType["CONTAINER"] = "container";
  })(ResourceType || (ResourceType = {}));

  var Mimetype;

  (function (Mimetype) {
    Mimetype["NTriples"] = "application/n-triples";
    Mimetype["Turtle"] = "text/turtle";
    Mimetype["NQuads"] = "application/n-quads";
    Mimetype["Trig"] = "application/trig";
    Mimetype["SPARQLJSON"] = "application/sparql-results+json";
    Mimetype["JSONLD"] = "application/ld+json";
    Mimetype["DLOG"] = "application/x.datalog";
    Mimetype["Text"] = "text/plain";
  })(Mimetype || (Mimetype = {}));

  var AccessService = /*#__PURE__*/function () {
    function AccessService(fetch) {
      var verbose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck$1(this, AccessService);

      _defineProperty$3(this, "verbose", false);

      this.fetch = fetch;
      this.verbose = verbose;
    } // Make a resource public


    _createClass$1(AccessService, [{
      key: "makePublic",
      value: function () {
        var _makePublic = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resourceURL) {
          var accessRights;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  accessRights = {
                    read: true,
                    append: true,
                    write: false,
                    control: false
                  };
                  return _context.abrupt("return", this.setResourceAccess(resourceURL, accessRights, ResourceType.CONTAINER));

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function makePublic(_x) {
          return _makePublic.apply(this, arguments);
        }

        return makePublic;
      }()
    }, {
      key: "makeFilePublic",
      value: function () {
        var _makeFilePublic = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resourceURL) {
          var accessRights;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  accessRights = {
                    read: true,
                    append: true,
                    write: false,
                    control: false
                  };
                  return _context2.abrupt("return", this.setResourceAccess(resourceURL, accessRights, ResourceType.FILE));

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function makeFilePublic(_x2) {
          return _makeFilePublic.apply(this, arguments);
        }

        return makeFilePublic;
      }()
    }, {
      key: "setResourceAccess",
      value: function () {
        var _setResourceAccess = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resourceURL, accessRights, type, userWebID) {
          var resourceWithAcl, resourceAcl, updatedAcl, newAccess;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(type == ResourceType.DATASET || type == ResourceType.CONTAINER)) {
                    _context3.next = 4;
                    break;
                  }

                  _context3.next = 3;
                  return getSolidDatasetWithAcl(resourceURL, {
                    fetch: this.fetch
                  });

                case 3:
                  resourceWithAcl = _context3.sent;

                case 4:
                  if (!(type == ResourceType.FILE)) {
                    _context3.next = 8;
                    break;
                  }

                  _context3.next = 7;
                  return getFileWithAcl(resourceURL, {
                    fetch: this.fetch
                  });

                case 7:
                  resourceWithAcl = _context3.sent;

                case 8:
                  _context3.next = 10;
                  return this.getResourceAcl(resourceWithAcl);

                case 10:
                  resourceAcl = _context3.sent;

                  // If no user webID provided, set the public access
                  if (!userWebID || userWebID == undefined) {
                    updatedAcl = setPublicResourceAccess(resourceAcl, accessRights);
                  } // If user webID provided, set the access for that particular user
                  else {
                    updatedAcl = setAgentResourceAccess(resourceAcl, userWebID, accessRights);
                  } // Save ACL


                  _context3.next = 14;
                  return saveAclFor(resourceWithAcl, updatedAcl, {
                    fetch: this.fetch
                  });

                case 14:
                  newAccess = _context3.sent;
                  this.verbose && this.logAccessInfo(accessRights, resourceURL);
                  return _context3.abrupt("return", newAccess);

                case 17:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function setResourceAccess(_x3, _x4, _x5, _x6) {
          return _setResourceAccess.apply(this, arguments);
        }

        return setResourceAccess;
      }() // Obtain the SolidDataset's own ACL, if available,
      // or initialise a new one, if possible:

    }, {
      key: "getResourceAcl",
      value: function () {
        var _getResourceAcl2 = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(datasetWithAcl) {
          var resourceAcl;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (hasResourceAcl(datasetWithAcl)) {
                    _context4.next = 8;
                    break;
                  }

                  if (hasAccessibleAcl(datasetWithAcl)) {
                    _context4.next = 3;
                    break;
                  }

                  throw new Error("The current user does not have permission to change access rights to this Resource.");

                case 3:
                  if (hasFallbackAcl(datasetWithAcl)) {
                    _context4.next = 5;
                    break;
                  }

                  throw new Error("The current user does not have permission to see who currently has access to this Resource.");

                case 5:
                  resourceAcl = createAclFromFallbackAcl(datasetWithAcl);
                  _context4.next = 9;
                  break;

                case 8:
                  resourceAcl = getResourceAcl(datasetWithAcl);

                case 9:
                  return _context4.abrupt("return", resourceAcl);

                case 10:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        function getResourceAcl$1(_x7) {
          return _getResourceAcl2.apply(this, arguments);
        }

        return getResourceAcl$1;
      }()
    }, {
      key: "logAccessInfo",
      value: function logAccessInfo(access, resource) {
        var agent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

        if (access === null) {
          console.log("Could not load access details for this Resource.");
        } else {
          if (!agent) console.log("".concat(agent, "'s Access:: "), JSON.stringify(access));else console.log("Public Access:: ", JSON.stringify(access));
          console.log("...", agent, access.read ? 'CAN' : 'CANNOT', "read the Resource", resource);
          console.log("...", agent, access.append ? 'CAN' : 'CANNOT', "add data to the Resource", resource);
          console.log("...", agent, access.write ? 'CAN' : 'CANNOT', "change data in the Resource", resource);

          if ('controlRead' in access) {
            console.log("...", agent, access.controlRead ? 'CAN' : 'CANNOT', "see access to the Resource", resource);
            console.log("...", agent, access.controlWrite ? 'CAN' : 'CANNOT', "change access to the Resource", resource);
          } else {
            console.log("...", agent, access.control ? 'CAN' : 'CANNOT', "change access to the Resource", resource);
          }
        }
      }
    }]);

    return AccessService;
  }();

  var lib = {};

  var urlJoin$1 = {};

  var constants = {};

  Object.defineProperty(constants, "__esModule", { value: true });
  constants.DELIMITER_PATH = '/';
  constants.DELIMITER_URL_PARTS = '?';
  constants.DELIMITER_SEARCH_PARAMS = '&';
  constants.DELIMITER_SEARCH_VALUES = '=';

  Object.defineProperty(urlJoin$1, "__esModule", { value: true });
  const constants_1 = constants;
  const trimRegex = /^\/|\/$/g;
  const trimPath = (path = '') => path.replace(trimRegex, '');
  const trimPathNotFirst = (path = '', index) => (index === 0 ? path : path.replace(trimRegex, ''));
  class UrlJoin {
      constructor(baseUrl, paths) {
          this.baseUrl = baseUrl;
          this.paths = paths;
          this.params = null;
      }
      toString() {
          const hasBaseUrl = this.baseUrl !== null && this.baseUrl !== undefined;
          let resultUrl = [this.baseUrl, ...this.paths]
              .filter(Boolean)
              .map(hasBaseUrl ? trimPath : trimPathNotFirst)
              .join(constants_1.DELIMITER_PATH);
          if (this.hasParams()) {
              const queryParams = Object.keys(this.params)
                  .map(key => {
                  return encodeURIComponent(key) + constants_1.DELIMITER_SEARCH_VALUES + encodeURIComponent(this.params[key]);
              })
                  .join(constants_1.DELIMITER_SEARCH_PARAMS);
              resultUrl += constants_1.DELIMITER_URL_PARTS + queryParams;
          }
          return resultUrl;
      }
      queryParams(params) {
          this.params = params;
          return this;
      }
      hasParams() {
          return !!this.params && Object.keys(this.params).length > 0;
      }
  }
  urlJoin$1.UrlJoin = UrlJoin;

  var urlJoinFunc = {};

  Object.defineProperty(urlJoinFunc, "__esModule", { value: true });
  const urlJoin_1 = urlJoin$1;
  function urlJoin(baseUrl, ...paths) {
      return new urlJoin_1.UrlJoin(baseUrl, paths).toString();
  }
  urlJoinFunc.urlJoin = urlJoin;
  function urlJoinP(baseUrl, paths, params = {}) {
      return new urlJoin_1.UrlJoin(baseUrl, paths).queryParams(params).toString();
  }
  urlJoinFunc.urlJoinP = urlJoinP;

  (function (exports) {
  function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  __export(urlJoin$1);
  __export(urlJoinFunc);
  }(lib));

  var DataService = /*#__PURE__*/function () {
    function DataService(fetch) {
      var verbose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck$1(this, DataService);

      _defineProperty$3(this, "verbose", false);

      this.fetch = fetch;
      this.verbose = verbose;
      this.accessService = new AccessService(fetch);
    }
    /**
     * FILES
     */
    // Upload File to the targetFileURL.
    // If the targetFileURL exists, overwrite the file.
    // If the targetFileURL does not exist, create the file at the location.


    _createClass$1(DataService, [{
      key: "writeFileToPod",
      value: function () {
        var _writeFileToPod = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file, targetFileURL) {
          var makePublic,
              contentType,
              savedFile,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  makePublic = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
                  contentType = _args.length > 3 && _args[3] !== undefined ? _args[3] : Mimetype.Text;
                  _context.next = 4;
                  return overwriteFile(targetFileURL, // URL for the file.
                  file, // File
                  {
                    contentType: contentType,
                    fetch: this.fetch
                  } // mimetype if known, fetch from the authenticated session
                  );

                case 4:
                  savedFile = _context.sent;
                  this.verbose && console.log("File saved at ".concat(getSourceUrl(savedFile)));

                  if (!makePublic) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 9;
                  return this.accessService.makeFilePublic(targetFileURL);

                case 9:
                  return _context.abrupt("return", savedFile);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function writeFileToPod(_x, _x2) {
          return _writeFileToPod.apply(this, arguments);
        }

        return writeFileToPod;
      }()
    }, {
      key: "getFile",
      value: function () {
        var _getFile2 = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fileURL) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.verbose && console.log("Getting file ".concat(fileURL, "..."));
                  return _context2.abrupt("return", getFile(fileURL, // File in Pod to Read
                  {
                    fetch: this.fetch
                  } // fetch from authenticated session
                  ));

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function getFile$1(_x3) {
          return _getFile2.apply(this, arguments);
        }

        return getFile$1;
      }()
    }, {
      key: "deleteFile",
      value: function () {
        var _deleteFile2 = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(fileURL) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.verbose && console.log("Deleting file ".concat(fileURL, "..."));
                  return _context3.abrupt("return", deleteFile(fileURL, // File in Pod to Read
                  {
                    fetch: this.fetch
                  } // fetch from authenticated session
                  ));

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function deleteFile$1(_x4) {
          return _deleteFile2.apply(this, arguments);
        }

        return deleteFile$1;
      }()
      /**
       * CONTAINERS
       */

    }, {
      key: "deleteContainer",
      value: function () {
        var _deleteContainer2 = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(containerURL) {
          var includeSubContainers,
              dataset,
              containerResources,
              _iterator,
              _step,
              resource,
              _args4 = arguments;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  includeSubContainers = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : true;

                  if (!includeSubContainers) {
                    _context4.next = 31;
                    break;
                  }

                  console.log("Deleting container ".concat(containerURL, " including its subfolders..."));
                  _context4.next = 5;
                  return getSolidDataset(containerURL, {
                    fetch: this.fetch
                  });

                case 5:
                  dataset = _context4.sent;
                  _context4.next = 8;
                  return getContainedResourceUrlAll(dataset);

                case 8:
                  containerResources = _context4.sent;
                  // Delete resources (containers and files)
                  _iterator = _createForOfIteratorHelper(containerResources);
                  _context4.prev = 10;

                  _iterator.s();

                case 12:
                  if ((_step = _iterator.n()).done) {
                    _context4.next = 23;
                    break;
                  }

                  resource = _step.value;

                  if (!isContainer(resource)) {
                    _context4.next = 19;
                    break;
                  }

                  _context4.next = 17;
                  return this.deleteContainer(resource, true);

                case 17:
                  _context4.next = 21;
                  break;

                case 19:
                  _context4.next = 21;
                  return this.deleteFile(resource);

                case 21:
                  _context4.next = 12;
                  break;

                case 23:
                  _context4.next = 28;
                  break;

                case 25:
                  _context4.prev = 25;
                  _context4.t0 = _context4["catch"](10);

                  _iterator.e(_context4.t0);

                case 28:
                  _context4.prev = 28;

                  _iterator.f();

                  return _context4.finish(28);

                case 31:
                  console.log("Deleting container ".concat(containerURL, "..."));
                  return _context4.abrupt("return", deleteContainer(containerURL, {
                    fetch: this.fetch
                  }));

                case 33:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this, [[10, 25, 28, 31]]);
        }));

        function deleteContainer$1(_x5) {
          return _deleteContainer2.apply(this, arguments);
        }

        return deleteContainer$1;
      }()
    }, {
      key: "createContainer",
      value: function () {
        var _createContainer = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(containerURL) {
          var makePublic,
              datasetWithAcl,
              _args5 = arguments;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  makePublic = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;
                  this.verbose && console.log("Creating container ".concat(containerURL, "..."));
                  _context5.next = 4;
                  return createContainerAt(containerURL, // File in Pod to Read
                  {
                    fetch: this.fetch
                  } // fetch from authenticated session
                  );

                case 4:
                  datasetWithAcl = _context5.sent;

                  if (!makePublic) {
                    _context5.next = 8;
                    break;
                  }

                  _context5.next = 8;
                  return this.accessService.makePublic(containerURL);

                case 8:
                  return _context5.abrupt("return", datasetWithAcl);

                case 9:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function createContainer(_x6) {
          return _createContainer.apply(this, arguments);
        }

        return createContainer;
      }()
    }]);

    return DataService;
  }();

  var sparkMd5 = {exports: {}};

  (function (module, exports) {
  (function (factory) {
      {
          // Node/CommonJS
          module.exports = factory();
      }
  }(function (undefined$1) {

      /*
       * Fastest md5 implementation around (JKM md5).
       * Credits: Joseph Myers
       *
       * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
       * @see http://jsperf.com/md5-shootout/7
       */

      /* this function is much faster,
        so if possible we use it. Some IEs
        are the only ones I know of that
        need the idiotic second function,
        generated by an if clause.  */
      var hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

      function md5cycle(x, k) {
          var a = x[0],
              b = x[1],
              c = x[2],
              d = x[3];

          a += (b & c | ~b & d) + k[0] - 680876936 | 0;
          a  = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[1] - 389564586 | 0;
          d  = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[2] + 606105819 | 0;
          c  = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
          b  = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[4] - 176418897 | 0;
          a  = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
          d  = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
          c  = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[7] - 45705983 | 0;
          b  = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
          a  = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
          d  = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[10] - 42063 | 0;
          c  = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
          b  = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
          a  = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[13] - 40341101 | 0;
          d  = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
          c  = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
          b  = (b << 22 | b >>> 10) + c | 0;

          a += (b & d | c & ~d) + k[1] - 165796510 | 0;
          a  = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
          d  = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[11] + 643717713 | 0;
          c  = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[0] - 373897302 | 0;
          b  = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[5] - 701558691 | 0;
          a  = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[10] + 38016083 | 0;
          d  = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[15] - 660478335 | 0;
          c  = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[4] - 405537848 | 0;
          b  = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[9] + 568446438 | 0;
          a  = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
          d  = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[3] - 187363961 | 0;
          c  = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
          b  = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
          a  = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[2] - 51403784 | 0;
          d  = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
          c  = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
          b  = (b << 20 | b >>> 12) + c | 0;

          a += (b ^ c ^ d) + k[5] - 378558 | 0;
          a  = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
          d  = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
          c  = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[14] - 35309556 | 0;
          b  = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
          a  = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
          d  = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[7] - 155497632 | 0;
          c  = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
          b  = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[13] + 681279174 | 0;
          a  = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[0] - 358537222 | 0;
          d  = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[3] - 722521979 | 0;
          c  = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[6] + 76029189 | 0;
          b  = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[9] - 640364487 | 0;
          a  = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[12] - 421815835 | 0;
          d  = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[15] + 530742520 | 0;
          c  = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[2] - 995338651 | 0;
          b  = (b << 23 | b >>> 9) + c | 0;

          a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
          a  = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
          d  = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
          c  = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
          b  = (b << 21 |b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
          a  = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
          d  = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
          c  = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
          b  = (b << 21 |b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
          a  = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
          d  = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
          c  = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
          b  = (b << 21 |b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
          a  = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
          d  = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
          c  = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
          b  = (b << 21 | b >>> 11) + c | 0;

          x[0] = a + x[0] | 0;
          x[1] = b + x[1] | 0;
          x[2] = c + x[2] | 0;
          x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
          var md5blks = [],
              i; /* Andy King said do it this way. */

          for (i = 0; i < 64; i += 4) {
              md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
          }
          return md5blks;
      }

      function md5blk_array(a) {
          var md5blks = [],
              i; /* Andy King said do it this way. */

          for (i = 0; i < 64; i += 4) {
              md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
          }
          return md5blks;
      }

      function md51(s) {
          var n = s.length,
              state = [1732584193, -271733879, -1732584194, 271733878],
              i,
              length,
              tail,
              tmp,
              lo,
              hi;

          for (i = 64; i <= n; i += 64) {
              md5cycle(state, md5blk(s.substring(i - 64, i)));
          }
          s = s.substring(i - 64);
          length = s.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
          }
          tail[i >> 2] |= 0x80 << ((i % 4) << 3);
          if (i > 55) {
              md5cycle(state, tail);
              for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
              }
          }

          // Beware that the final length might not fit in 32 bits so we take care of that
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;

          tail[14] = lo;
          tail[15] = hi;

          md5cycle(state, tail);
          return state;
      }

      function md51_array(a) {
          var n = a.length,
              state = [1732584193, -271733879, -1732584194, 271733878],
              i,
              length,
              tail,
              tmp,
              lo,
              hi;

          for (i = 64; i <= n; i += 64) {
              md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
          }

          // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
          // containing the last element of the parent array if the sub array specified starts
          // beyond the length of the parent array - weird.
          // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
          a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

          length = a.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= a[i] << ((i % 4) << 3);
          }

          tail[i >> 2] |= 0x80 << ((i % 4) << 3);
          if (i > 55) {
              md5cycle(state, tail);
              for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
              }
          }

          // Beware that the final length might not fit in 32 bits so we take care of that
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;

          tail[14] = lo;
          tail[15] = hi;

          md5cycle(state, tail);

          return state;
      }

      function rhex(n) {
          var s = '',
              j;
          for (j = 0; j < 4; j += 1) {
              s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
          }
          return s;
      }

      function hex(x) {
          var i;
          for (i = 0; i < x.length; i += 1) {
              x[i] = rhex(x[i]);
          }
          return x.join('');
      }

      // In some cases the fast add32 function cannot be used..
      if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') ;

      // ---------------------------------------------------

      /**
       * ArrayBuffer slice polyfill.
       *
       * @see https://github.com/ttaubert/node-arraybuffer-slice
       */

      if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
          (function () {
              function clamp(val, length) {
                  val = (val | 0) || 0;

                  if (val < 0) {
                      return Math.max(val + length, 0);
                  }

                  return Math.min(val, length);
              }

              ArrayBuffer.prototype.slice = function (from, to) {
                  var length = this.byteLength,
                      begin = clamp(from, length),
                      end = length,
                      num,
                      target,
                      targetArray,
                      sourceArray;

                  if (to !== undefined$1) {
                      end = clamp(to, length);
                  }

                  if (begin > end) {
                      return new ArrayBuffer(0);
                  }

                  num = end - begin;
                  target = new ArrayBuffer(num);
                  targetArray = new Uint8Array(target);

                  sourceArray = new Uint8Array(this, begin, num);
                  targetArray.set(sourceArray);

                  return target;
              };
          })();
      }

      // ---------------------------------------------------

      /**
       * Helpers.
       */

      function toUtf8(str) {
          if (/[\u0080-\uFFFF]/.test(str)) {
              str = unescape(encodeURIComponent(str));
          }

          return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
          var length = str.length,
             buff = new ArrayBuffer(length),
             arr = new Uint8Array(buff),
             i;

          for (i = 0; i < length; i += 1) {
              arr[i] = str.charCodeAt(i);
          }

          return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
          return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
          var result = new Uint8Array(first.byteLength + second.byteLength);

          result.set(new Uint8Array(first));
          result.set(new Uint8Array(second), first.byteLength);

          return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
          var bytes = [],
              length = hex.length,
              x;

          for (x = 0; x < length - 1; x += 2) {
              bytes.push(parseInt(hex.substr(x, 2), 16));
          }

          return String.fromCharCode.apply(String, bytes);
      }

      // ---------------------------------------------------

      /**
       * SparkMD5 OOP implementation.
       *
       * Use this class to perform an incremental md5, otherwise use the
       * static methods instead.
       */

      function SparkMD5() {
          // call reset to init the instance
          this.reset();
      }

      /**
       * Appends a string.
       * A conversion will be applied if an utf8 string is detected.
       *
       * @param {String} str The string to be appended
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.append = function (str) {
          // Converts the string to utf8 bytes if necessary
          // Then append as binary
          this.appendBinary(toUtf8(str));

          return this;
      };

      /**
       * Appends a binary string.
       *
       * @param {String} contents The binary string to be appended
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.appendBinary = function (contents) {
          this._buff += contents;
          this._length += contents.length;

          var length = this._buff.length,
              i;

          for (i = 64; i <= length; i += 64) {
              md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
          }

          this._buff = this._buff.substring(i - 64);

          return this;
      };

      /**
       * Finishes the incremental computation, reseting the internal state and
       * returning the result.
       *
       * @param {Boolean} raw True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.prototype.end = function (raw) {
          var buff = this._buff,
              length = buff.length,
              i,
              tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ret;

          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
          }

          this._finish(tail, length);
          ret = hex(this._hash);

          if (raw) {
              ret = hexToBinaryString(ret);
          }

          this.reset();

          return ret;
      };

      /**
       * Resets the internal state of the computation.
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.reset = function () {
          this._buff = '';
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];

          return this;
      };

      /**
       * Gets the internal state of the computation.
       *
       * @return {Object} The state
       */
      SparkMD5.prototype.getState = function () {
          return {
              buff: this._buff,
              length: this._length,
              hash: this._hash.slice()
          };
      };

      /**
       * Gets the internal state of the computation.
       *
       * @param {Object} state The state
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.setState = function (state) {
          this._buff = state.buff;
          this._length = state.length;
          this._hash = state.hash;

          return this;
      };

      /**
       * Releases memory used by the incremental buffer and other additional
       * resources. If you plan to use the instance again, use reset instead.
       */
      SparkMD5.prototype.destroy = function () {
          delete this._hash;
          delete this._buff;
          delete this._length;
      };

      /**
       * Finish the final calculation based on the tail.
       *
       * @param {Array}  tail   The tail (will be modified)
       * @param {Number} length The length of the remaining buffer
       */
      SparkMD5.prototype._finish = function (tail, length) {
          var i = length,
              tmp,
              lo,
              hi;

          tail[i >> 2] |= 0x80 << ((i % 4) << 3);
          if (i > 55) {
              md5cycle(this._hash, tail);
              for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
              }
          }

          // Do the final computation based on the tail and length
          // Beware that the final length may not fit in 32 bits so we take care of that
          tmp = this._length * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;

          tail[14] = lo;
          tail[15] = hi;
          md5cycle(this._hash, tail);
      };

      /**
       * Performs the md5 hash on a string.
       * A conversion will be applied if utf8 string is detected.
       *
       * @param {String}  str The string
       * @param {Boolean} [raw] True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.hash = function (str, raw) {
          // Converts the string to utf8 bytes if necessary
          // Then compute it using the binary function
          return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      /**
       * Performs the md5 hash on a binary string.
       *
       * @param {String}  content The binary string
       * @param {Boolean} [raw]     True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.hashBinary = function (content, raw) {
          var hash = md51(content),
              ret = hex(hash);

          return raw ? hexToBinaryString(ret) : ret;
      };

      // ---------------------------------------------------

      /**
       * SparkMD5 OOP implementation for array buffers.
       *
       * Use this class to perform an incremental md5 ONLY for array buffers.
       */
      SparkMD5.ArrayBuffer = function () {
          // call reset to init the instance
          this.reset();
      };

      /**
       * Appends an array buffer.
       *
       * @param {ArrayBuffer} arr The array to be appended
       *
       * @return {SparkMD5.ArrayBuffer} The instance itself
       */
      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
          var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
              length = buff.length,
              i;

          this._length += arr.byteLength;

          for (i = 64; i <= length; i += 64) {
              md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
          }

          this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

          return this;
      };

      /**
       * Finishes the incremental computation, reseting the internal state and
       * returning the result.
       *
       * @param {Boolean} raw True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
          var buff = this._buff,
              length = buff.length,
              tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              i,
              ret;

          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= buff[i] << ((i % 4) << 3);
          }

          this._finish(tail, length);
          ret = hex(this._hash);

          if (raw) {
              ret = hexToBinaryString(ret);
          }

          this.reset();

          return ret;
      };

      /**
       * Resets the internal state of the computation.
       *
       * @return {SparkMD5.ArrayBuffer} The instance itself
       */
      SparkMD5.ArrayBuffer.prototype.reset = function () {
          this._buff = new Uint8Array(0);
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];

          return this;
      };

      /**
       * Gets the internal state of the computation.
       *
       * @return {Object} The state
       */
      SparkMD5.ArrayBuffer.prototype.getState = function () {
          var state = SparkMD5.prototype.getState.call(this);

          // Convert buffer to a string
          state.buff = arrayBuffer2Utf8Str(state.buff);

          return state;
      };

      /**
       * Gets the internal state of the computation.
       *
       * @param {Object} state The state
       *
       * @return {SparkMD5.ArrayBuffer} The instance itself
       */
      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
          // Convert string to buffer
          state.buff = utf8Str2ArrayBuffer(state.buff, true);

          return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      /**
       * Performs the md5 hash on an array buffer.
       *
       * @param {ArrayBuffer} arr The array buffer
       * @param {Boolean}     [raw] True to get the raw string, false to get the hex one
       *
       * @return {String} The result
       */
      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
          var hash = md51_array(new Uint8Array(arr)),
              ret = hex(hash);

          return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
  }));
  }(sparkMd5));

  function computeChecksumMd5(file) {
    return new Promise(function (resolve, reject) {
      var chunkSize = 5242880; // Read in chunks of 5MB

      var spark = new sparkMd5.exports.ArrayBuffer();
      var fileReader = new FileReader();
      var cursor = 0; // current cursor in file

      fileReader.onerror = function () {
        reject('MD5 computation failed - error reading the file');
      }; // read chunk starting at `cursor` into memory


      function processChunk(chunk_start) {
        var chunk_end = Math.min(file.size, chunk_start + chunkSize);
        fileReader.readAsArrayBuffer(file.slice(chunk_start, chunk_end));
      } // when it's available in memory, process it
      // If using TS >= 3.6, you can use `FileReaderProgressEvent` type instead 
      // of `any` for `e` variable, otherwise stick with `any`
      // See https://github.com/Microsoft/TypeScript/issues/25510


      fileReader.onload = function (e) {
        spark.append(e.target.result); // Accumulate chunk to md5 computation

        cursor += chunkSize; // Move past this chunk

        if (cursor < file.size) {
          // Enqueue next chunk to be accumulated
          processChunk(cursor);
        } else {
          // Computation ended, last chunk has been processed. Return as Promise value.
          // This returns the base64 encoded md5 hash, which is what
          // Rails ActiveStorage or cloud services expect
          // resolve(btoa(spark.end(true)));
          // If you prefer the hexdigest form (looking like
          // '7cf530335b8547945f1a48880bc421b2'), replace the above line with:
          resolve(spark.end());
        }
      };

      processChunk(0);
    });
  }

  /**
   * MIT License
   *
   * Copyright 2020 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the &quot;Software&quot;), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */

  /**
   * MIT License
   *
   * Copyright 2020 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the &quot;Software&quot;), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * Generated by the artifact generator [@inrupt/artifact-generator], version [1.0.4]
   * as part of artifact: [vocab-common-rdf], version: [1.0.3]
   * on 'Sunday, October 3, 2021 12:33 AM'.
   *
   * Vocabulary built from vocab list file: [common-rdf/vocab-common-rdf.yml].
   *
   * DCAT is an RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web. By using DCAT to describe datasets in data catalogs, publishers increase discoverability and enable applications easily to consume metadata from multiple catalogs. It further enables decentralized publishing of catalogs and facilitates federated dataset search across sites. Aggregated DCAT metadata can serve as a manifest file to facilitate digital preservation. DCAT is defined at http://www.w3.org/TR/vocab-dcat/. Any variance between that normative document and this schema is an error in this schema.
   */
  // We prefix our local variables with underscores to (hopefully!) prevent
  // potential names clashes with terms from vocabularies.
  var _NAMESPACE$x = "http://www.w3.org/ns/dcat#";
  function _NS$x(localName) {
      return (_NAMESPACE$x + localName);
  }
  /**
   * DCAT is an RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web. By using DCAT to describe datasets in data catalogs, publishers increase discoverability and enable applications easily to consume metadata from multiple catalogs. It further enables decentralized publishing of catalogs and facilitates federated dataset search across sites. Aggregated DCAT metadata can serve as a manifest file to facilitate digital preservation. DCAT is defined at http://www.w3.org/TR/vocab-dcat/. Any variance between that normative document and this schema is an error in this schema.
   */
  var DCAT = {
      PREFIX: "dcat",
      NAMESPACE: _NAMESPACE$x,
      PREFIX_AND_NAMESPACE: { "dcat": "http://www.w3.org/ns/dcat#" },
      NS: _NS$x,
      // *****************
      // All the Classes.
      // *****************
      /**
       * A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog).
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      Catalog: _NS$x("Catalog"),
      /**
       * A collection of data, published or curated by a single source, and available for access or download in one or more representations.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      Dataset: _NS$x("Dataset"),
      /**
       * Resource published or curated by a single agent.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       */
      Resource: _NS$x("Resource"),
      /**
       * A record in a data catalog, describing the registration of a single dataset or data service.
       *
       * This term provides multilingual descriptions, but has a mismatch between its labels and comments, with [9] labels in languages [ar, cs, da, el, en, es, fr, it, ja], but [8] comments in languages [cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      CatalogRecord: _NS$x("CatalogRecord"),
      /**
       * A site or end-point providing operations related to the discovery of, access to, or processing functions on, data or related resources.
       *
       * This term provides multilingual descriptions, but has a mismatch between its labels and comments, with [4] labels in languages [da, en, es, it], but [5] comments in languages [cs, da, en, es, it].
       */
      DataService: _NS$x("DataService"),
      /**
       * A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways, including natural language, media-type or format, schematic organization, temporal and spatial resolution, level of detail or profiles (which might specify any or all of the above).
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      Distribution: _NS$x("Distribution"),
      /**
       * An association class for attaching additional information to a relationship between DCAT Resources.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       */
      Relationship: _NS$x("Relationship"),
      /**
       * A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       *
       * See also:
       *  - http://www.w3.org/ns/dcat#hadRole
       */
      Role: _NS$x("Role"),
      // *******************
      // All the Properties.
      // *******************
      /**
       * The function of an entity or agent with respect to another entity or resource.
       *
       * This term provides multilingual descriptions, but has a mismatch between its labels and comments, with [4] labels in languages [cs, da, en, it], but [5] comments in languages [cs, da, en, es, it].
       */
      hadRole: _NS$x("hadRole"),
      /**
       * A site or end-point that gives access to the distribution of the dataset.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       */
      accessService: _NS$x("accessService"),
      /**
       * A URL of a resource that gives access to a distribution of the dataset. E.g. landing page, feed, SPARQL endpoint. Use for all cases except a simple download link, in which case downloadURL is preferred.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      accessURL: _NS$x("accessURL"),
      /**
       * The root location or primary endpoint of the service (a web-resolvable IRI).
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       */
      endpointURL: _NS$x("endpointURL"),
      /**
       * The geographic bounding box of a resource.
       *
       * This term has [5] labels (in languages [cs, da, en, es, it]), but no long-form descriptions at all (i.e., the vocabulary doesn&#x27;t provide any &#x27;rdfs:comment&#x27; or &#x27;dcterms:description&#x27; meta-data).
       */
      bbox: _NS$x("bbox"),
      /**
       * The size of a distribution in bytes.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      byteSize: _NS$x("byteSize"),
      /**
       * A catalog whose contents are of interest in the context of this catalog.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       */
      catalog: _NS$x("catalog"),
      /**
       * The geographic center (centroid) of a resource.
       *
       * This term has [5] labels (in languages [cs, da, en, es, it]), but no long-form descriptions at all (i.e., the vocabulary doesn&#x27;t provide any &#x27;rdfs:comment&#x27; or &#x27;dcterms:description&#x27; meta-data).
       */
      centroid: _NS$x("centroid"),
      /**
       * The compression format of the distribution in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       *
       * Defined by the vocabulary: https://www.w3.org/TR/vocab-dcat-2/
       */
      compressFormat: _NS$x("compressFormat"),
      /**
       * Relevant contact information for the catalogued resource. Use of vCard is recommended.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      contactPoint: _NS$x("contactPoint"),
      /**
       * A collection of data that is listed in the catalog.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      dataset: _NS$x("dataset"),
      /**
       * An available distribution of the dataset.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      distribution: _NS$x("distribution"),
      /**
       * The URL of the downloadable file in a given format. E.g. CSV file or RDF file. The format is indicated by the distribution's dct:format and/or dcat:mediaType.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      downloadURL: _NS$x("downloadURL"),
      /**
       * The end of the period.
       *
       * This term has [5] labels (in languages [cs, da, en, es, it]), but no long-form descriptions at all (i.e., the vocabulary doesn&#x27;t provide any &#x27;rdfs:comment&#x27; or &#x27;dcterms:description&#x27; meta-data).
       */
      endDate: _NS$x("endDate"),
      /**
       * A description of the service end-point, including its operations, parameters etc.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       */
      endpointDescription: _NS$x("endpointDescription"),
      /**
       * A keyword or tag describing a resource.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      keyword: _NS$x("keyword"),
      /**
       * A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      landingPage: _NS$x("landingPage"),
      /**
       * The media type of the distribution as defined by IANA
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      mediaType: _NS$x("mediaType"),
      /**
       * The package format of the distribution in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       *
       * Defined by the vocabulary: https://www.w3.org/TR/vocab-dcat-2/
       */
      packageFormat: _NS$x("packageFormat"),
      /**
       * Link to a description of a relationship with another resource.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       */
      qualifiedRelation: _NS$x("qualifiedRelation"),
      /**
       * A record describing the registration of a single dataset or data service that is part of the catalog.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      record: _NS$x("record"),
      /**
       * A collection of data that this DataService can distribute.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       */
      servesDataset: _NS$x("servesDataset"),
      /**
       * A site or endpoint that is listed in the catalog.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       */
      service: _NS$x("service"),
      /**
       * minimum spatial separation resolvable in a dataset, measured in meters.
       *
       * This term has [6] labels and comments, in the languages [cs, da, en-GB, en-US, es, it].
       */
      spatialResolutionInMeters: _NS$x("spatialResolutionInMeters"),
      /**
       * The start of the period
       *
       * This term has [4] labels (in languages [cs, da, en, it]), but no long-form descriptions at all (i.e., the vocabulary doesn&#x27;t provide any &#x27;rdfs:comment&#x27; or &#x27;dcterms:description&#x27; meta-data).
       */
      startDate: _NS$x("startDate"),
      /**
       * minimum time period resolvable in a dataset.
       *
       * This term has [5] labels and comments, in the languages [cs, da, en, es, it].
       */
      temporalResolution: _NS$x("temporalResolution"),
      /**
       * A main category of the resource. A resource can have multiple themes.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      theme: _NS$x("theme"),
      /**
       * The knowledge organization system (KOS) used to classify catalog's datasets.
       *
       * This term has [9] labels and comments, in the languages [ar, cs, da, el, en, es, fr, it, ja].
       *
       * Defined by the vocabulary: http://www.w3.org/TR/vocab-dcat/
       */
      themeTaxonomy: _NS$x("themeTaxonomy"),
  };

  /**
   * MIT License
   *
   * Copyright 2020 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the &quot;Software&quot;), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * Generated by the artifact generator [@inrupt/artifact-generator], version [1.0.4]
   * as part of artifact: [vocab-common-rdf], version: [1.0.3]
   * on 'Sunday, October 3, 2021 12:33 AM'.
   *
   * Vocabulary built from vocab list file: [common-rdf/vocab-common-rdf.yml].
   *
   * [Generator provided] - RDF (Resource Description Framework) - a framework for representing information in the Web
   */
  // We prefix our local variables with underscores to (hopefully!) prevent
  // potential names clashes with terms from vocabularies.
  var _NAMESPACE$g = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
  function _NS$g(localName) {
      return (_NAMESPACE$g + localName);
  }
  /**
   * [Generator provided] - RDF (Resource Description Framework) - a framework for representing information in the Web
   */
  var RDF$1 = {
      PREFIX: "rdf",
      NAMESPACE: _NAMESPACE$g,
      PREFIX_AND_NAMESPACE: { "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#" },
      NS: _NS$g,
      // *****************
      // All the Classes.
      // *****************
      /**
       * The class of RDF properties.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      Property: _NS$g("Property"),
      /**
       * The datatype of RDF literals storing fragments of HTML content
       *
       * This term provides descriptions only with no explicit locale.
       *
       * See also:
       *  - http://www.w3.org/TR/rdf11-concepts/#section-html
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      HTML: _NS$g("HTML"),
      /**
       * The datatype of language-tagged string values
       *
       * This term provides descriptions only with no explicit locale.
       *
       * See also:
       *  - http://www.w3.org/TR/rdf11-concepts/#section-Graph-Literal
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      langString: _NS$g("langString"),
      /**
       * The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2
       *
       * This term provides descriptions only with no explicit locale.
       *
       * See also:
       *  - http://www.w3.org/TR/rdf-plain-literal/
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      PlainLiteral: _NS$g("PlainLiteral"),
      /**
       * The class of RDF statements.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      Statement: _NS$g("Statement"),
      /**
       * The class of unordered containers.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      Bag: _NS$g("Bag"),
      /**
       * The class of ordered containers.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      Seq: _NS$g("Seq"),
      /**
       * The class of containers of alternatives.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      Alt: _NS$g("Alt"),
      /**
       * The class of RDF Lists.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      List: _NS$g("List"),
      /**
       * The datatype of XML literal values.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      XMLLiteral: _NS$g("XMLLiteral"),
      /**
       * The datatype of RDF literals storing JSON content.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * See also:
       *  - https://www.w3.org/TR/json-ld11/#the-rdf-json-datatype
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      JSON: _NS$g("JSON"),
      /**
       * A class representing a compound literal.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * See also:
       *  - https://www.w3.org/TR/json-ld11/#the-rdf-compoundliteral-class-and-the-rdf-language-and-rdf-direction-properties
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      CompoundLiteral: _NS$g("CompoundLiteral"),
      // *******************
      // All the Properties.
      // *******************
      /**
       * The subject is an instance of a class.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      type: _NS$g("type"),
      /**
       * The subject of the subject RDF statement.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      subject: _NS$g("subject"),
      /**
       * The predicate of the subject RDF statement.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      predicate: _NS$g("predicate"),
      /**
       * The object of the subject RDF statement.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      object: _NS$g("object"),
      /**
       * Idiomatic property used for structured values.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      value: _NS$g("value"),
      /**
       * The empty list, with no items in it. If the rest of a list is nil then the list has no more items in it.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      nil: _NS$g("nil"),
      /**
       * The first item in the subject RDF list.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      first: _NS$g("first"),
      /**
       * The rest of the subject RDF list after the first item.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      rest: _NS$g("rest"),
      /**
       * The language component of a CompoundLiteral.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * See also:
       *  - https://www.w3.org/TR/json-ld11/#the-rdf-compoundliteral-class-and-the-rdf-language-and-rdf-direction-properties
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      language: _NS$g("language"),
      /**
       * The base direction component of a CompoundLiteral.
       *
       * This term provides descriptions only with no explicit locale.
       *
       * See also:
       *  - https://www.w3.org/TR/json-ld11/#the-rdf-compoundliteral-class-and-the-rdf-language-and-rdf-direction-properties
       *
       * Defined by the vocabulary: http://www.w3.org/1999/02/22-rdf-syntax-ns#
       */
      direction: _NS$g("direction"),
  };

  /**
   * MIT License
   *
   * Copyright 2020 Inrupt Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the &quot;Software&quot;), to deal in
   * the Software without restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  /**
   * Generated by the artifact generator [@inrupt/artifact-generator], version [1.0.4]
   * as part of artifact: [vocab-common-rdf], version: [1.0.3]
   * on 'Sunday, October 3, 2021 12:33 AM'.
   *
   * Vocabulary built from vocab list file: [common-rdf/vocab-common-rdf.yml].
   *
   * Inrupt extension to Schema.org terms providing
   multilingual alternative names (i.e., labels) and translations for comments
   (e.g., for use directly as labels or tool-tips in user interfaces or error
   messages). This extension very deliberately cherry-picks the individual terms
   from Schema.org that Inrupt currently deem generally useful for Solid and Solid
   applications (meaning we can provide a much cleaner, less noisy and smaller
   bundle size when generating programming language artifacts that provide
   convenient constants for just these selected terms, rather than including the
   over 2,500 terms currently defined in Schema.org).
   */
  // We prefix our local variables with underscores to (hopefully!) prevent
  // potential names clashes with terms from vocabularies.
  var _NAMESPACE$d = "http://schema.org/";
  function _NS$d(localName) {
      return (_NAMESPACE$d + localName);
  }
  /**
   * Inrupt extension to Schema.org terms providing
   multilingual alternative names (i.e., labels) and translations for comments
   (e.g., for use directly as labels or tool-tips in user interfaces or error
   messages). This extension very deliberately cherry-picks the individual terms
   from Schema.org that Inrupt currently deem generally useful for Solid and Solid
   applications (meaning we can provide a much cleaner, less noisy and smaller
   bundle size when generating programming language artifacts that provide
   convenient constants for just these selected terms, rather than including the
   over 2,500 terms currently defined in Schema.org).
   */
  var SCHEMA_INRUPT = {
      PREFIX: "schema-inrupt",
      NAMESPACE: _NAMESPACE$d,
      PREFIX_AND_NAMESPACE: { "schema-inrupt": "http://schema.org/" },
      NS: _NS$d,
      // *****************
      // All the Classes.
      // *****************
      /**
       * A person (alive, dead, undead, or fictional).
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      Person: _NS$d("Person"),
      /**
       * Data type: URL.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      URL: _NS$d("URL"),
      /**
       * Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      MedicalTherapy: _NS$d("MedicalTherapy"),
      /**
       * An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      EducationalOccupationalCredential: _NS$d("EducationalOccupationalCredential"),
      /**
       * The mailing address.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      PostalAddress: _NS$d("PostalAddress"),
      /**
       * Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.
       *
       * This term has [5] labels and comments, in the languages [NoLocale, de, es, fr, it].
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      Product: _NS$d("Product"),
      // *******************
      // All the Properties.
      // *******************
      /**
       * An alias for the item.
       *
       * This term has [6] labels and comments, in the languages [NoLocale, de, en, es, fr, it].
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      alternateName: _NS$d("alternateName"),
      /**
       * Given name. In the U.S., the first name of a Person.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      givenName: _NS$d("givenName"),
      /**
       * Family name. In the U.S., the last name of a Person.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      familyName: _NS$d("familyName"),
      /**
       * An additional name for a Person, can be used for a middle name.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      additionalName: _NS$d("additionalName"),
      /**
       * A license document that applies to this content, typically indicated by URL.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      license: _NS$d("license"),
      /**
       * The name of the item.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      name: _NS$d("name"),
      /**
       * The textual content of this CreativeWork.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      text: _NS$d("text"),
      /**
       * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
            
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * See also:
       *  - https://schema.org/docs/datamodel.html#identifierBg
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      identifier: _NS$d("identifier"),
      /**
       * A description of the item.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      description: _NS$d("description"),
      /**
       * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * See also:
       *  - https://schema.org/ImageObject
       *  - https://schema.org/URL
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      image: _NS$d("image"),
      /**
       * URL of the item.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      url: _NS$d("url"),
      /**
       * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      startTime: _NS$d("startTime"),
      /**
       * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      endTime: _NS$d("endTime"),
      /**
       * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      startDate: _NS$d("startDate"),
      /**
       * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      endDate: _NS$d("endDate"),
      /**
       * Email address.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      email: _NS$d("email"),
      /**
       * A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      primaryPrevention: _NS$d("primaryPrevention"),
      /**
       * Specific qualifications required for this role or Occupation.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      qualifications: _NS$d("qualifications"),
      /**
       * A person or organization attending the event.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      attendee: _NS$d("attendee"),
      /**
       * Physical address of the item.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      address: _NS$d("address"),
      /**
       * The street address. For example, 1600 Amphitheatre Pkwy.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      streetAddress: _NS$d("streetAddress"),
      /**
       * The locality in which the street address is, and which is in the region. For example, Mountain View.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      addressLocality: _NS$d("addressLocality"),
      /**
       * The region in which the locality is, and which is in the country. For example, California or another appropriate first-level [Administrative division](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country)
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      addressRegion: _NS$d("addressRegion"),
      /**
       * The postal code. For example, 94043.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      postalCode: _NS$d("postalCode"),
      /**
       * The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      addressCountry: _NS$d("addressCountry"),
      /**
       * Password, PIN, or access code needed for delivery (e.g. from a locker).
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      accessCode: _NS$d("accessCode"),
      /**
       * The identifier for the account the payment will be applied to.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      accountId: _NS$d("accountId"),
      /**
       * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      serialNumber: _NS$d("serialNumber"),
      /**
       * The product identifier, such as ISBN. For example: ``` meta itemprop="productID" content="isbn:123-456-789" ```.
       *
       * This term provides multilingual descriptions, with [6] labels in languages [NoLocale, de, en, es, fr, it], but [5] comments in languages [NoLocale, de, es, fr, it] (so the difference is only between English and NoLocale, which we consider the same).
       *
       * Defined by the vocabulary: https://w3id.org/inrupt/vocab/extension/schema#
       */
      productID: _NS$d("productID"),
  };

  var _NAMESPACE = "https://standards.iso.org/iso/21598/-1/ed-1/en/Container#";

  function _NS(localName) {
    return _NAMESPACE + localName;
  }

  var ICDD_C = {
    PREFIX: "container",
    NAMESPACE: _NAMESPACE,
    PREFIX_AND_NAMESPACE: {
      "container": "https://standards.iso.org/iso/21598/-1/ed-1/en/Container#"
    },
    NS: _NS,
    ContainerDescription: _NS("ContainerDescription"),
    Document: _NS("Document"),
    containsDocument: _NS("containsDocument"),
    creationDate: _NS("creationDate"),
    filename: _NS("filename"),
    format: _NS("format"),
    modificationDate: _NS("modificationDate")
  };

  var ICDDService = /*#__PURE__*/function () {
    function ICDDService(fetch) {
      var verbose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck$1(this, ICDDService);

      _defineProperty$3(this, "verbose", false);

      this.fetch = fetch;
      this.verbose = verbose;
      this.accessService = new AccessService(fetch);
      this.dataService = new DataService(fetch);
    }

    _createClass$1(ICDDService, [{
      key: "initICDD",
      value: function () {
        var _initICDD = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rootURL, icddName) {
          var _this = this;

          var makePublic,
              baseURL,
              folderURLs,
              createFolderPromises,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  makePublic = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
                  // Create main folder
                  baseURL = lib.urlJoin(rootURL, encodeURIComponent(icddName), "/"); // Might fail if folders already exist

                  this.verbose && console.time("Created root container for ICDD...");
                  _context.prev = 3;
                  _context.next = 6;
                  return this.dataService.createContainer(baseURL, makePublic);

                case 6:
                  _context.next = 12;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](3);
                  this.verbose && console.log("Could not create container ".concat(baseURL));
                  throw _context.t0;

                case 12:
                  this.verbose && console.timeEnd("Created root container for ICDD..."); // Create subfolders

                  this.verbose && console.time("Created ICDD subfolders...");
                  folderURLs = ["ontology_resources", "payload_triples", "payload_documents"].map(function (f) {
                    return lib.urlJoin(rootURL, icddName, f, "/");
                  });
                  createFolderPromises = [];
                  folderURLs.forEach(function (url) {
                    createFolderPromises.push(_this.dataService.createContainer(url, makePublic));
                  });
                  this.verbose && console.timeEnd("Created ICDD subfolders..."); // Might fail if folders already exist

                  _context.prev = 18;
                  _context.next = 21;
                  return Promise.all(createFolderPromises);

                case 21:
                  _context.next = 27;
                  break;

                case 23:
                  _context.prev = 23;
                  _context.t1 = _context["catch"](18);
                  console.log("Could not create sub-containers");
                  throw _context.t1;

                case 27:
                  // Add index.rdf
                  // Might fail if folders already exist
                  this.verbose && console.time("Created index.rdf...");
                  _context.prev = 28;
                  _context.next = 31;
                  return this.buildIndex(baseURL, icddName, makePublic);

                case 31:
                  _context.next = 37;
                  break;

                case 33:
                  _context.prev = 33;
                  _context.t2 = _context["catch"](28);
                  console.log("Could not create index-file");
                  throw _context.t2;

                case 37:
                  this.verbose && console.timeEnd("Created index.rdf...");
                  return _context.abrupt("return", "DONE");

                case 39:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 8], [18, 23], [28, 33]]);
        }));

        function initICDD(_x, _x2) {
          return _initICDD.apply(this, arguments);
        }

        return initICDD;
      }()
    }, {
      key: "deleteICDD",
      value: function () {
        var _deleteICDD = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(icddURL) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.dataService.deleteContainer(icddURL);

                case 2:
                  return _context2.abrupt("return", "DONE");

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function deleteICDD(_x3) {
          return _deleteICDD.apply(this, arguments);
        }

        return deleteICDD;
      }()
    }, {
      key: "addPayloadDocuments",
      value: function () {
        var _addPayloadDocuments = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(icddRootURL, files) {
          var makePublic,
              _args3 = arguments;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  makePublic = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : false;
                  return _context3.abrupt("return", this.addFiles(icddRootURL, "payload_documents", files, makePublic));

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function addPayloadDocuments(_x4, _x5) {
          return _addPayloadDocuments.apply(this, arguments);
        }

        return addPayloadDocuments;
      }()
    }, {
      key: "addPayloadTriples",
      value: function () {
        var _addPayloadTriples = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(icddRootURL, files) {
          var makePublic,
              _args4 = arguments;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  makePublic = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : false;
                  return _context4.abrupt("return", this.addFiles(icddRootURL, "payload_triples", files, makePublic));

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function addPayloadTriples(_x6, _x7) {
          return _addPayloadTriples.apply(this, arguments);
        }

        return addPayloadTriples;
      }()
    }, {
      key: "addOntologyResources",
      value: function () {
        var _addOntologyResources = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(icddRootURL, files) {
          var makePublic,
              _args5 = arguments;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  makePublic = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : false;
                  return _context5.abrupt("return", this.addFiles(icddRootURL, "ontology_resources", files, makePublic));

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function addOntologyResources(_x8, _x9) {
          return _addOntologyResources.apply(this, arguments);
        }

        return addOntologyResources;
      }()
    }, {
      key: "addFiles",
      value: function () {
        var _addFiles = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(icddRootURL, subfolder, files) {
          var _this2 = this;

          var makePublic,
              containerURL,
              md5Promises,
              md5Hashes,
              uploadFilePromises,
              _args6 = arguments;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  makePublic = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : false;
                  containerURL = lib.urlJoin(icddRootURL, subfolder, "/"); // 1. Calculate md5 hashes of files

                  md5Promises = [];
                  files.forEach(function (file) {
                    return md5Promises.push(computeChecksumMd5(file));
                  });
                  _context6.next = 6;
                  return Promise.all(md5Promises);

                case 6:
                  md5Hashes = _context6.sent;
                  // 2. Upload the files and append them to index file while doing so
                  uploadFilePromises = [];
                  files.forEach(function (file, i) {
                    var fileExtension = file.name.split('.').pop() || "txt";
                    var fileName = "".concat(md5Hashes[i], ".").concat(fileExtension); // Append file to index.rdf

                    uploadFilePromises.push(_this2.addFileToIndex(icddRootURL, fileName, fileExtension, subfolder)); // Upload file to payload_documents

                    var fileURL = lib.urlJoin(containerURL, fileName);
                    uploadFilePromises.push(_this2.dataService.writeFileToPod(file, fileURL, makePublic));
                  });
                  _context6.next = 11;
                  return Promise.all(uploadFilePromises);

                case 11:
                  return _context6.abrupt("return", "DONE");

                case 12:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        function addFiles(_x10, _x11, _x12) {
          return _addFiles.apply(this, arguments);
        }

        return addFiles;
      }()
    }, {
      key: "buildIndex",
      value: function () {
        var _buildIndex = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(rootURL, icddName) {
          var makePublic,
              indexDataset,
              now,
              containerDescription,
              datasetWithAcl,
              _args7 = arguments;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  makePublic = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : true;
                  indexDataset = createSolidDataset(); // Create container description
                  // Use various add functions to add properties to the Thing
                  // Note: solid-client functions do not modify objects passed in as arguments. 
                  // Instead the functions return new objects with the modifications.

                  now = new Date();
                  containerDescription = buildThing(createThing()) // Build new resource (ID created by SDK)
                  .addUrl(RDF$1.type, ICDD_C.ContainerDescription) // Define type
                  .addStringNoLocale(SCHEMA_INRUPT.name, icddName) // Define name
                  .addDatetime(ICDD_C.creationDate, now) // Set creation date
                  .addDatetime(ICDD_C.modificationDate, now) // Set modification date
                  .build(); // Update SolidDataset with the containerDescription Thing.
                  // Note: solid-client functions do not modify objects passed in as arguments. 
                  // Instead the functions return new objects with the modifications.

                  indexDataset = setThing(indexDataset, containerDescription); // Save the SolidDataset at the specified URL.
                  // The function returns a SolidDataset that reflects your sent data

                  _context7.next = 7;
                  return saveSolidDatasetAt(lib.urlJoin(rootURL, "index"), indexDataset, {
                    fetch: this.fetch
                  });

                case 7:
                  datasetWithAcl = _context7.sent;

                  if (!makePublic) {
                    _context7.next = 11;
                    break;
                  }

                  _context7.next = 11;
                  return this.accessService.makePublic(lib.urlJoin(rootURL, "index"));

                case 11:
                  return _context7.abrupt("return", datasetWithAcl);

                case 12:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        function buildIndex(_x13, _x14) {
          return _buildIndex.apply(this, arguments);
        }

        return buildIndex;
      }()
    }, {
      key: "addFileToIndex",
      value: function () {
        var _addFileToIndex = _asyncToGenerator$1( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(icddRootURL, fileName, format, subfolder) {
          var now, filePath, indexDataset, newDocument, containerDescription, datasetWithAcl;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  now = new Date();
                  filePath = "/".concat(subfolder, "/").concat(fileName); // Get dataset

                  _context8.next = 4;
                  return getSolidDataset(lib.urlJoin(icddRootURL, "index"), {
                    fetch: this.fetch
                  });

                case 4:
                  indexDataset = _context8.sent;
                  // Add document
                  newDocument = buildThing(createThing()) // Build new resource (ID created by SDK)
                  .addUrl(RDF$1.type, ICDD_C.Document) // Define type
                  .addStringNoLocale(ICDD_C.format, format) // Set format
                  .addStringNoLocale(ICDD_C.filename, fileName) // Set file name
                  .addStringNoLocale(DCAT.downloadURL, filePath) // Set file path (Why is relative URI not supported?)
                  .addDatetime(ICDD_C.creationDate, now) // Set creation date
                  .addDatetime(ICDD_C.modificationDate, now) // Set modification date
                  .build();
                  indexDataset = setThing(indexDataset, newDocument); // Get container description

                  containerDescription = getThingAll(indexDataset).find(function (item) {
                    return getUrlAll(item, RDF$1.type).indexOf(ICDD_C.ContainerDescription) != -1;
                  }); // Make changes to container description

                  if (containerDescription != undefined) {
                    // Update modification date
                    containerDescription = setDatetime(containerDescription, ICDD_C.modificationDate, now); // Add reference to new document

                    containerDescription = addUrl(containerDescription, ICDD_C.containsDocument, newDocument); // Update dataset

                    indexDataset = setThing(indexDataset, containerDescription);
                  } // Save the SolidDataset at the specified URL.
                  // The function returns a SolidDataset that reflects your sent data


                  _context8.next = 11;
                  return saveSolidDatasetAt(lib.urlJoin(icddRootURL, "index"), indexDataset, {
                    fetch: this.fetch
                  });

                case 11:
                  datasetWithAcl = _context8.sent;
                  return _context8.abrupt("return", datasetWithAcl);

                case 13:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        function addFileToIndex(_x15, _x16, _x17, _x18) {
          return _addFileToIndex.apply(this, arguments);
        }

        return addFileToIndex;
      }()
    }]);

    return ICDDService;
  }();

  //     public fetch;
  //     public verbose: boolean = false;
  //     public icddService: ICDDService;
  //     constructor(fetch: any, verbose: boolean = false){
  //         this.fetch = fetch;
  //         this.verbose = verbose;
  //         this.icddService = new ICDDService(fetch, verbose);
  //     }
  //     initICDD(rootURL: string, icddName: string, makePublic: boolean = true){
  //         return this.icddService.initICDD(rootURL, icddName, makePublic)
  //     }
  // }

  exports.Consolid = void 0;

  (function (_Consolid) {
    _Consolid.ICDDService = ICDDService;
  })(exports.Consolid || (exports.Consolid = {}));

  const RDF  = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
      XSD  = 'http://www.w3.org/2001/XMLSchema#',
      SWAP = 'http://www.w3.org/2000/10/swap/';

  var namespaces = {
    xsd: {
      decimal: `${XSD}decimal`,
      boolean: `${XSD}boolean`,
      double:  `${XSD}double`,
      integer: `${XSD}integer`,
      string:  `${XSD}string`,
    },
    rdf: {
      type:       `${RDF}type`,
      nil:        `${RDF}nil`,
      first:      `${RDF}first`,
      rest:       `${RDF}rest`,
      langString: `${RDF}langString`,
    },
    owl: {
      sameAs: 'http://www.w3.org/2002/07/owl#sameAs',
    },
    r: {
      forSome: `${SWAP}reify#forSome`,
      forAll:  `${SWAP}reify#forAll`,
    },
    log: {
      implies: `${SWAP}log#implies`,
    },
  };

  /*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

  let promise;

  var queueMicrotask_1 = typeof queueMicrotask === 'function'
    ? queueMicrotask.bind(typeof window !== 'undefined' ? window : commonjsGlobal)
    // reuse resolved promise, and allocate it lazily
    : cb => (promise || (promise = Promise.resolve()))
      .then(cb)
      .catch(err => setTimeout(() => { throw err }, 0));

  var queueMicrotask$1 = queueMicrotask_1;

  // **N3Lexer** tokenizes N3 documents.

  const { xsd: xsd$2 } = namespaces;

  // Regular expression and replacement string to escape N3 strings
  const escapeSequence = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\([^])/g;
  const escapeReplacements = {
    '\\': '\\', "'": "'", '"': '"',
    'n': '\n', 'r': '\r', 't': '\t', 'f': '\f', 'b': '\b',
    '_': '_', '~': '~', '.': '.', '-': '-', '!': '!', '$': '$', '&': '&',
    '(': '(', ')': ')', '*': '*', '+': '+', ',': ',', ';': ';', '=': '=',
    '/': '/', '?': '?', '#': '#', '@': '@', '%': '%',
  };
  const illegalIriChars = /[\x00-\x20<>\\"\{\}\|\^\`]/;

  const lineModeRegExps = {
    _iri: true,
    _unescapedIri: true,
    _simpleQuotedString: true,
    _langcode: true,
    _blank: true,
    _newline: true,
    _comment: true,
    _whitespace: true,
    _endOfFile: true,
  };
  const invalidRegExp = /$0^/;

  // ## Constructor
  class N3Lexer {
    constructor(options) {
      // ## Regular expressions
      // It's slightly faster to have these as properties than as in-scope variables
      this._iri = /^<((?:[^ <>{}\\]|\\[uU])+)>[ \t]*/; // IRI with escape sequences; needs sanity check after unescaping
      this._unescapedIri = /^<([^\x00-\x20<>\\"\{\}\|\^\`]*)>[ \t]*/; // IRI without escape sequences; no unescaping
      this._simpleQuotedString = /^"([^"\\\r\n]*)"(?=[^"])/; // string without escape sequences
      this._simpleApostropheString = /^'([^'\\\r\n]*)'(?=[^'])/;
      this._langcode = /^@([a-z]+(?:-[a-z0-9]+)*)(?=[^a-z0-9\-])/i;
      this._prefix = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:(?=[#\s<])/;
      this._prefixed = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:((?:(?:[0-:A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])(?:(?:[\.\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])*(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~]))?)?)(?:[ \t]+|(?=\.?[,;!\^\s#()\[\]\{\}"'<>]))/;
      this._variable = /^\?(?:(?:[A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?=[.,;!\^\s#()\[\]\{\}"'<>])/;
      this._blank = /^_:((?:[0-9A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?:[ \t]+|(?=\.?[,;:\s#()\[\]\{\}"'<>]))/;
      this._number = /^[\-+]?(?:(\d+\.\d*|\.?\d+)[eE][\-+]?|\d*(\.)?)\d+(?=\.?[,;:\s#()\[\]\{\}"'<>])/;
      this._boolean = /^(?:true|false)(?=[.,;\s#()\[\]\{\}"'<>])/;
      this._keyword = /^@[a-z]+(?=[\s#<:])/i;
      this._sparqlKeyword = /^(?:PREFIX|BASE|GRAPH)(?=[\s#<])/i;
      this._shortPredicates = /^a(?=[\s#()\[\]\{\}"'<>])/;
      this._newline = /^[ \t]*(?:#[^\n\r]*)?(?:\r\n|\n|\r)[ \t]*/;
      this._comment = /#([^\n\r]*)/;
      this._whitespace = /^[ \t]+/;
      this._endOfFile = /^(?:#[^\n\r]*)?$/;
      options = options || {};

      // In line mode (N-Triples or N-Quads), only simple features may be parsed
      if (this._lineMode = !!options.lineMode) {
        this._n3Mode = false;
        // Don't tokenize special literals
        for (const key in this) {
          if (!(key in lineModeRegExps) && this[key] instanceof RegExp)
            this[key] = invalidRegExp;
        }
      }
      // When not in line mode, enable N3 functionality by default
      else {
        this._n3Mode = options.n3 !== false;
      }
      // Don't output comment tokens by default
      this._comments = !!options.comments;
      // Cache the last tested closing position of long literals
      this._literalClosingPos = 0;
    }

    // ## Private methods

    // ### `_tokenizeToEnd` tokenizes as for as possible, emitting tokens through the callback
    _tokenizeToEnd(callback, inputFinished) {
      // Continue parsing as far as possible; the loop will return eventually
      let input = this._input;
      const outputComments = this._comments;
      while (true) {
        // Count and skip whitespace lines
        let whiteSpaceMatch, comment;
        while (whiteSpaceMatch = this._newline.exec(input)) {
          // Try to find a comment
          if (outputComments && (comment = this._comment.exec(whiteSpaceMatch[0])))
            callback(null, { line: this._line, type: 'comment', value: comment[1], prefix: '' });
          // Advance the input
          input = input.substr(whiteSpaceMatch[0].length, input.length);
          this._line++;
        }
        // Skip whitespace on current line
        if (!whiteSpaceMatch && (whiteSpaceMatch = this._whitespace.exec(input)))
          input = input.substr(whiteSpaceMatch[0].length, input.length);

        // Stop for now if we're at the end
        if (this._endOfFile.test(input)) {
          // If the input is finished, emit EOF
          if (inputFinished) {
            // Try to find a final comment
            if (outputComments && (comment = this._comment.exec(input)))
              callback(null, { line: this._line, type: 'comment', value: comment[1], prefix: '' });
            callback(input = null, { line: this._line, type: 'eof', value: '', prefix: '' });
          }
          return this._input = input;
        }

        // Look for specific token types based on the first character
        const line = this._line, firstChar = input[0];
        let type = '', value = '', prefix = '',
            match = null, matchLength = 0, inconclusive = false;
        switch (firstChar) {
        case '^':
          // We need at least 3 tokens lookahead to distinguish ^^<IRI> and ^^pre:fixed
          if (input.length < 3)
            break;
          // Try to match a type
          else if (input[1] === '^') {
            this._previousMarker = '^^';
            // Move to type IRI or prefixed name
            input = input.substr(2);
            if (input[0] !== '<') {
              inconclusive = true;
              break;
            }
          }
          // If no type, it must be a path expression
          else {
            if (this._n3Mode) {
              matchLength = 1;
              type = '^';
            }
            break;
          }
          // Fall through in case the type is an IRI
        case '<':
          // Try to find a full IRI without escape sequences
          if (match = this._unescapedIri.exec(input))
            type = 'IRI', value = match[1];
          // Try to find a full IRI with escape sequences
          else if (match = this._iri.exec(input)) {
            value = this._unescape(match[1]);
            if (value === null || illegalIriChars.test(value))
              return reportSyntaxError(this);
            type = 'IRI';
          }
          // Try to find a nested triple
          else if (input.length > 1 && input[1] === '<')
            type = '<<', matchLength = 2;
          // Try to find a backwards implication arrow
          else if (this._n3Mode && input.length > 1 && input[1] === '=')
            type = 'inverse', matchLength = 2, value = '>';
          break;

        case '>':
          if (input.length > 1 && input[1] === '>')
            type = '>>', matchLength = 2;
          break;

        case '_':
          // Try to find a blank node. Since it can contain (but not end with) a dot,
          // we always need a non-dot character before deciding it is a blank node.
          // Therefore, try inserting a space if we're at the end of the input.
          if ((match = this._blank.exec(input)) ||
              inputFinished && (match = this._blank.exec(`${input} `)))
            type = 'blank', prefix = '_', value = match[1];
          break;

        case '"':
          // Try to find a literal without escape sequences
          if (match = this._simpleQuotedString.exec(input))
            value = match[1];
          // Try to find a literal wrapped in three pairs of quotes
          else {
            ({ value, matchLength } = this._parseLiteral(input));
            if (value === null)
              return reportSyntaxError(this);
          }
          if (match !== null || matchLength !== 0) {
            type = 'literal';
            this._literalClosingPos = 0;
          }
          break;

        case "'":
          if (!this._lineMode) {
            // Try to find a literal without escape sequences
            if (match = this._simpleApostropheString.exec(input))
              value = match[1];
            // Try to find a literal wrapped in three pairs of quotes
            else {
              ({ value, matchLength } = this._parseLiteral(input));
              if (value === null)
                return reportSyntaxError(this);
            }
            if (match !== null || matchLength !== 0) {
              type = 'literal';
              this._literalClosingPos = 0;
            }
          }
          break;

        case '?':
          // Try to find a variable
          if (this._n3Mode && (match = this._variable.exec(input)))
            type = 'var', value = match[0];
          break;

        case '@':
          // Try to find a language code
          if (this._previousMarker === 'literal' && (match = this._langcode.exec(input)))
            type = 'langcode', value = match[1];
          // Try to find a keyword
          else if (match = this._keyword.exec(input))
            type = match[0];
          break;

        case '.':
          // Try to find a dot as punctuation
          if (input.length === 1 ? inputFinished : (input[1] < '0' || input[1] > '9')) {
            type = '.';
            matchLength = 1;
            break;
          }
          // Fall through to numerical case (could be a decimal dot)

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
          // Try to find a number. Since it can contain (but not end with) a dot,
          // we always need a non-dot character before deciding it is a number.
          // Therefore, try inserting a space if we're at the end of the input.
          if (match = this._number.exec(input) ||
              inputFinished && (match = this._number.exec(`${input} `))) {
            type = 'literal', value = match[0];
            prefix = (typeof match[1] === 'string' ? xsd$2.double :
                      (typeof match[2] === 'string' ? xsd$2.decimal : xsd$2.integer));
          }
          break;

        case 'B':
        case 'b':
        case 'p':
        case 'P':
        case 'G':
        case 'g':
          // Try to find a SPARQL-style keyword
          if (match = this._sparqlKeyword.exec(input))
            type = match[0].toUpperCase();
          else
            inconclusive = true;
          break;

        case 'f':
        case 't':
          // Try to match a boolean
          if (match = this._boolean.exec(input))
            type = 'literal', value = match[0], prefix = xsd$2.boolean;
          else
            inconclusive = true;
          break;

        case 'a':
          // Try to find an abbreviated predicate
          if (match = this._shortPredicates.exec(input))
            type = 'abbreviation', value = 'a';
          else
            inconclusive = true;
          break;

        case '=':
          // Try to find an implication arrow or equals sign
          if (this._n3Mode && input.length > 1) {
            type = 'abbreviation';
            if (input[1] !== '>')
              matchLength = 1, value = '=';
            else
              matchLength = 2, value = '>';
          }
          break;

        case '!':
          if (!this._n3Mode)
            break;
        case ',':
        case ';':
        case '[':
        case ']':
        case '(':
        case ')':
        case '{':
        case '}':
          if (!this._lineMode) {
            matchLength = 1;
            type = firstChar;
          }
          break;

        default:
          inconclusive = true;
        }

        // Some first characters do not allow an immediate decision, so inspect more
        if (inconclusive) {
          // Try to find a prefix
          if ((this._previousMarker === '@prefix' || this._previousMarker === 'PREFIX') &&
              (match = this._prefix.exec(input)))
            type = 'prefix', value = match[1] || '';
          // Try to find a prefixed name. Since it can contain (but not end with) a dot,
          // we always need a non-dot character before deciding it is a prefixed name.
          // Therefore, try inserting a space if we're at the end of the input.
          else if ((match = this._prefixed.exec(input)) ||
                   inputFinished && (match = this._prefixed.exec(`${input} `)))
            type = 'prefixed', prefix = match[1] || '', value = this._unescape(match[2]);
        }

        // A type token is special: it can only be emitted after an IRI or prefixed name is read
        if (this._previousMarker === '^^') {
          switch (type) {
          case 'prefixed': type = 'type';    break;
          case 'IRI':      type = 'typeIRI'; break;
          default:         type = '';
          }
        }

        // What if nothing of the above was found?
        if (!type) {
          // We could be in streaming mode, and then we just wait for more input to arrive.
          // Otherwise, a syntax error has occurred in the input.
          // One exception: error on an unaccounted linebreak (= not inside a triple-quoted literal).
          if (inputFinished || (!/^'''|^"""/.test(input) && /\n|\r/.test(input)))
            return reportSyntaxError(this);
          else
            return this._input = input;
        }

        // Emit the parsed token
        const token = { line: line, type: type, value: value, prefix: prefix };
        callback(null, token);
        this.previousToken = token;
        this._previousMarker = type;
        // Advance to next part to tokenize
        input = input.substr(matchLength || match[0].length, input.length);
      }

      // Signals the syntax error through the callback
      function reportSyntaxError(self) { callback(self._syntaxError(/^\S*/.exec(input)[0])); }
    }

    // ### `_unescape` replaces N3 escape codes by their corresponding characters
    _unescape(item) {
      let invalid = false;
      const replaced = item.replace(escapeSequence, (sequence, unicode4, unicode8, escapedChar) => {
        // 4-digit unicode character
        if (typeof unicode4 === 'string')
          return String.fromCharCode(Number.parseInt(unicode4, 16));
        // 8-digit unicode character
        if (typeof unicode8 === 'string') {
          let charCode = Number.parseInt(unicode8, 16);
          return charCode <= 0xFFFF ? String.fromCharCode(Number.parseInt(unicode8, 16)) :
            String.fromCharCode(0xD800 + ((charCode -= 0x10000) >> 10), 0xDC00 + (charCode & 0x3FF));
        }
        // fixed escape sequence
        if (escapedChar in escapeReplacements)
          return escapeReplacements[escapedChar];
        // invalid escape sequence
        invalid = true;
        return '';
      });
      return invalid ? null : replaced;
    }

    // ### `_parseLiteral` parses a literal into an unescaped value
    _parseLiteral(input) {
      // Ensure we have enough lookahead to identify triple-quoted strings
      if (input.length >= 3) {
        // Identify the opening quote(s)
        const opening = input.match(/^(?:"""|"|'''|'|)/)[0];
        const openingLength = opening.length;

        // Find the next candidate closing quotes
        let closingPos = Math.max(this._literalClosingPos, openingLength);
        while ((closingPos = input.indexOf(opening, closingPos)) > 0) {
          // Count backslashes right before the closing quotes
          let backslashCount = 0;
          while (input[closingPos - backslashCount - 1] === '\\')
            backslashCount++;

          // An even number of backslashes (in particular 0)
          // means these are actual, non-escaped closing quotes
          if (backslashCount % 2 === 0) {
            // Extract and unescape the value
            const raw = input.substring(openingLength, closingPos);
            const lines = raw.split(/\r\n|\r|\n/).length - 1;
            const matchLength = closingPos + openingLength;
            // Only triple-quoted strings can be multi-line
            if (openingLength === 1 && lines !== 0 ||
                openingLength === 3 && this._lineMode)
              break;
            this._line += lines;
            return { value: this._unescape(raw), matchLength };
          }
          closingPos++;
        }
        this._literalClosingPos = input.length - openingLength + 1;
      }
      return { value: '', matchLength: 0 };
    }

    // ### `_syntaxError` creates a syntax error for the given issue
    _syntaxError(issue) {
      this._input = null;
      const err = new Error(`Unexpected "${issue}" on line ${this._line}.`);
      err.context = {
        token: undefined,
        line: this._line,
        previousToken: this.previousToken,
      };
      return err;
    }

    // ### Strips off any starting UTF BOM mark.
    _readStartingBom(input) {
      return input.startsWith('\ufeff') ? input.substr(1) : input;
    }

    // ## Public methods

    // ### `tokenize` starts the transformation of an N3 document into an array of tokens.
    // The input can be a string or a stream.
    tokenize(input, callback) {
      this._line = 1;

      // If the input is a string, continuously emit tokens through the callback until the end
      if (typeof input === 'string') {
        this._input = this._readStartingBom(input);
        // If a callback was passed, asynchronously call it
        if (typeof callback === 'function')
          queueMicrotask$1(() => this._tokenizeToEnd(callback, true));
        // If no callback was passed, tokenize synchronously and return
        else {
          const tokens = [];
          let error;
          this._tokenizeToEnd((e, t) => e ? (error = e) : tokens.push(t), true);
          if (error) throw error;
          return tokens;
        }
      }
      // Otherwise, the input must be a stream
      else {
        this._pendingBuffer = null;
        if (typeof input.setEncoding === 'function')
          input.setEncoding('utf8');
        // Adds the data chunk to the buffer and parses as far as possible
        input.on('data', data => {
          if (this._input !== null && data.length !== 0) {
            // Prepend any previous pending writes
            if (this._pendingBuffer) {
              data = Buffer.concat([this._pendingBuffer, data]);
              this._pendingBuffer = null;
            }
            // Hold if the buffer ends in an incomplete unicode sequence
            if (data[data.length - 1] & 0x80) {
              this._pendingBuffer = data;
            }
            // Otherwise, tokenize as far as possible
            else {
              // Only read a BOM at the start
              if (typeof this._input === 'undefined')
                this._input = this._readStartingBom(typeof data === 'string' ? data : data.toString());
              else
                this._input += data;
              this._tokenizeToEnd(callback, false);
            }
          }
        });
        // Parses until the end
        input.on('end', () => {
          if (typeof this._input === 'string')
            this._tokenizeToEnd(callback, true);
        });
        input.on('error', callback);
      }
    }
  }

  // **N3Util** provides N3 utility functions.

  // Tests whether the given term represents an IRI
  function isNamedNode(term) {
    return !!term && term.termType === 'NamedNode';
  }

  // Tests whether the given term represents a blank node
  function isBlankNode(term) {
    return !!term && term.termType === 'BlankNode';
  }

  // Tests whether the given term represents a literal
  function isLiteral(term) {
    return !!term && term.termType === 'Literal';
  }

  // Tests whether the given term represents a variable
  function isVariable(term) {
    return !!term && term.termType === 'Variable';
  }

  // Tests whether the given term represents the default graph
  function isDefaultGraph(term) {
    return !!term && term.termType === 'DefaultGraph';
  }

  // Tests whether the given quad is in the default graph
  function inDefaultGraph(quad) {
    return isDefaultGraph(quad.graph);
  }

  // Creates a function that prepends the given IRI to a local name
  function prefix(iri, factory) {
    return prefixes({ '': iri }, factory)('');
  }

  // Creates a function that allows registering and expanding prefixes
  function prefixes(defaultPrefixes, factory) {
    // Add all of the default prefixes
    const prefixes = Object.create(null);
    for (const prefix in defaultPrefixes)
      processPrefix(prefix, defaultPrefixes[prefix]);
    // Set the default factory if none was specified
    factory = factory || N3DataFactory;

    // Registers a new prefix (if an IRI was specified)
    // or retrieves a function that expands an existing prefix (if no IRI was specified)
    function processPrefix(prefix, iri) {
      // Create a new prefix if an IRI is specified or the prefix doesn't exist
      if (typeof iri === 'string') {
        // Create a function that expands the prefix
        const cache = Object.create(null);
        prefixes[prefix] = local => {
          return cache[local] || (cache[local] = factory.namedNode(iri + local));
        };
      }
      else if (!(prefix in prefixes)) {
        throw new Error(`Unknown prefix: ${prefix}`);
      }
      return prefixes[prefix];
    }
    return processPrefix;
  }

  var N3Util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isNamedNode: isNamedNode,
    isBlankNode: isBlankNode,
    isLiteral: isLiteral,
    isVariable: isVariable,
    isDefaultGraph: isDefaultGraph,
    inDefaultGraph: inDefaultGraph,
    prefix: prefix,
    prefixes: prefixes
  });

  // N3.js implementations of the RDF/JS core data types
  const { rdf: rdf$1, xsd: xsd$1 } = namespaces;

  // eslint-disable-next-line prefer-const
  let DEFAULTGRAPH$1;
  let _blankNodeCounter = 0;

  const escapedLiteral = /^"(.*".*)(?="[^"]*$)/;
  const quadId = /^<<("(?:""|[^"])*"[^ ]*|[^ ]+) ("(?:""|[^"])*"[^ ]*|[^ ]+) ("(?:""|[^"])*"[^ ]*|[^ ]+) ?("(?:""|[^"])*"[^ ]*|[^ ]+)?>>$/;

  // ## DataFactory singleton
  const DataFactory = {
    namedNode,
    blankNode,
    variable,
    literal,
    defaultGraph,
    quad,
    triple: quad,
  };
  var N3DataFactory = DataFactory;

  // ## Term constructor
  class Term {
    constructor(id) {
      this.id = id;
    }

    // ### The value of this term
    get value() {
      return this.id;
    }

    // ### Implement hashCode for Immutable.js, since we implement `equals`
    // https://immutable-js.com/docs/v4.0.0/ValueObject/#hashCode()
    get hashCode() {
      return 0;
    }

    // ### Returns whether this object represents the same term as the other
    equals(other) {
      // If both terms were created by this library,
      // equality can be computed through ids
      if (other instanceof Term)
        return this.id === other.id;
      // Otherwise, compare term type and value
      return !!other && this.termType === other.termType &&
                        this.value    === other.value;
    }

    // ### Returns a plain object representation of this term
    toJSON() {
      return {
        termType: this.termType,
        value:    this.value,
      };
    }
  }


  // ## NamedNode constructor
  class NamedNode extends Term {
    // ### The term type of this term
    get termType() {
      return 'NamedNode';
    }
  }

  // ## Literal constructor
  class Literal extends Term {
    // ### The term type of this term
    get termType() {
      return 'Literal';
    }

    // ### The text value of this literal
    get value() {
      return this.id.substring(1, this.id.lastIndexOf('"'));
    }

    // ### The language of this literal
    get language() {
      // Find the last quotation mark (e.g., '"abc"@en-us')
      const id = this.id;
      let atPos = id.lastIndexOf('"') + 1;
      // If "@" it follows, return the remaining substring; empty otherwise
      return atPos < id.length && id[atPos++] === '@' ? id.substr(atPos).toLowerCase() : '';
    }

    // ### The datatype IRI of this literal
    get datatype() {
      return new NamedNode(this.datatypeString);
    }

    // ### The datatype string of this literal
    get datatypeString() {
      // Find the last quotation mark (e.g., '"abc"^^http://ex.org/types#t')
      const id = this.id, dtPos = id.lastIndexOf('"') + 1;
      const char = dtPos < id.length ? id[dtPos] : '';
      // If "^" it follows, return the remaining substring
      return char === '^' ? id.substr(dtPos + 2) :
             // If "@" follows, return rdf:langString; xsd:string otherwise
             (char !== '@' ? xsd$1.string : rdf$1.langString);
    }

    // ### Returns whether this object represents the same term as the other
    equals(other) {
      // If both literals were created by this library,
      // equality can be computed through ids
      if (other instanceof Literal)
        return this.id === other.id;
      // Otherwise, compare term type, value, language, and datatype
      return !!other && !!other.datatype &&
                        this.termType === other.termType &&
                        this.value    === other.value    &&
                        this.language === other.language &&
                        this.datatype.value === other.datatype.value;
    }

    toJSON() {
      return {
        termType: this.termType,
        value:    this.value,
        language: this.language,
        datatype: { termType: 'NamedNode', value: this.datatypeString },
      };
    }
  }

  // ## BlankNode constructor
  class BlankNode extends Term {
    constructor(name) {
      super(`_:${name}`);
    }

    // ### The term type of this term
    get termType() {
      return 'BlankNode';
    }

    // ### The name of this blank node
    get value() {
      return this.id.substr(2);
    }
  }

  class Variable extends Term {
    constructor(name) {
      super(`?${name}`);
    }

    // ### The term type of this term
    get termType() {
      return 'Variable';
    }

    // ### The name of this variable
    get value() {
      return this.id.substr(1);
    }
  }

  // ## DefaultGraph constructor
  class DefaultGraph extends Term {
    constructor() {
      super('');
      return DEFAULTGRAPH$1 || this;
    }

    // ### The term type of this term
    get termType() {
      return 'DefaultGraph';
    }

    // ### Returns whether this object represents the same term as the other
    equals(other) {
      // If both terms were created by this library,
      // equality can be computed through strict equality;
      // otherwise, compare term types.
      return (this === other) || (!!other && (this.termType === other.termType));
    }
  }

  // ## DefaultGraph singleton
  DEFAULTGRAPH$1 = new DefaultGraph();


  // ### Constructs a term from the given internal string ID
  function termFromId(id, factory) {
    factory = factory || DataFactory;

    // Falsy value or empty string indicate the default graph
    if (!id)
      return factory.defaultGraph();

    // Identify the term type based on the first character
    switch (id[0]) {
    case '?':
      return factory.variable(id.substr(1));
    case '_':
      return factory.blankNode(id.substr(2));
    case '"':
      // Shortcut for internal literals
      if (factory === DataFactory)
        return new Literal(id);
      // Literal without datatype or language
      if (id[id.length - 1] === '"')
        return factory.literal(id.substr(1, id.length - 2));
      // Literal with datatype or language
      const endPos = id.lastIndexOf('"', id.length - 1);
      return factory.literal(id.substr(1, endPos - 1),
              id[endPos + 1] === '@' ? id.substr(endPos + 2)
                                     : factory.namedNode(id.substr(endPos + 3)));
    case '<':
      const components = quadId.exec(id);
      return factory.quad(
        termFromId(unescapeQuotes(components[1]), factory),
        termFromId(unescapeQuotes(components[2]), factory),
        termFromId(unescapeQuotes(components[3]), factory),
        components[4] && termFromId(unescapeQuotes(components[4]), factory)
      );
    default:
      return factory.namedNode(id);
    }
  }

  // ### Constructs an internal string ID from the given term or ID string
  function termToId(term) {
    if (typeof term === 'string')
      return term;
    if (term instanceof Term && term.termType !== 'Quad')
      return term.id;
    if (!term)
      return DEFAULTGRAPH$1.id;

    // Term instantiated with another library
    switch (term.termType) {
    case 'NamedNode':    return term.value;
    case 'BlankNode':    return `_:${term.value}`;
    case 'Variable':     return `?${term.value}`;
    case 'DefaultGraph': return '';
    case 'Literal':      return `"${term.value}"${
    term.language ? `@${term.language}` :
      (term.datatype && term.datatype.value !== xsd$1.string ? `^^${term.datatype.value}` : '')}`;
    case 'Quad':
      // To identify RDF* quad components, we escape quotes by doubling them.
      // This avoids the overhead of backslash parsing of Turtle-like syntaxes.
      return `<<${
        escapeQuotes(termToId(term.subject))
      } ${
        escapeQuotes(termToId(term.predicate))
      } ${
        escapeQuotes(termToId(term.object))
      }${
        (isDefaultGraph(term.graph)) ? '' : ` ${termToId(term.graph)}`
      }>>`;
    default: throw new Error(`Unexpected termType: ${term.termType}`);
    }
  }


  // ## Quad constructor
  class Quad extends Term {
    constructor(subject, predicate, object, graph) {
      super('');
      this._subject   = subject;
      this._predicate = predicate;
      this._object    = object;
      this._graph     = graph || DEFAULTGRAPH$1;
    }

    // ### The term type of this term
    get termType() {
      return 'Quad';
    }

    get subject() {
      return this._subject;
    }

    get predicate() {
      return this._predicate;
    }

    get object() {
      return this._object;
    }

    get graph() {
      return this._graph;
    }

    // ### Returns a plain object representation of this quad
    toJSON() {
      return {
        termType:  this.termType,
        subject:   this._subject.toJSON(),
        predicate: this._predicate.toJSON(),
        object:    this._object.toJSON(),
        graph:     this._graph.toJSON(),
      };
    }

    // ### Returns whether this object represents the same quad as the other
    equals(other) {
      return !!other && this._subject.equals(other.subject)     &&
                        this._predicate.equals(other.predicate) &&
                        this._object.equals(other.object)       &&
                        this._graph.equals(other.graph);
    }
  }

  // ### Escapes the quotes within the given literal
  function escapeQuotes(id) {
    return id.replace(escapedLiteral, (_, quoted) => `"${quoted.replace(/"/g, '""')}`);
  }

  // ### Unescapes the quotes within the given literal
  function unescapeQuotes(id) {
    return id.replace(escapedLiteral, (_, quoted) => `"${quoted.replace(/""/g, '"')}`);
  }

  // ### Creates an IRI
  function namedNode(iri) {
    return new NamedNode(iri);
  }

  // ### Creates a blank node
  function blankNode(name) {
    return new BlankNode(name || `n3-${_blankNodeCounter++}`);
  }

  // ### Creates a literal
  function literal(value, languageOrDataType) {
    // Create a language-tagged string
    if (typeof languageOrDataType === 'string')
      return new Literal(`"${value}"@${languageOrDataType.toLowerCase()}`);

    // Automatically determine datatype for booleans and numbers
    let datatype = languageOrDataType ? languageOrDataType.value : '';
    if (datatype === '') {
      // Convert a boolean
      if (typeof value === 'boolean')
        datatype = xsd$1.boolean;
      // Convert an integer or double
      else if (typeof value === 'number') {
        if (Number.isFinite(value))
          datatype = Number.isInteger(value) ? xsd$1.integer : xsd$1.double;
        else {
          datatype = xsd$1.double;
          if (!Number.isNaN(value))
            value = value > 0 ? 'INF' : '-INF';
        }
      }
    }

    // Create a datatyped literal
    return (datatype === '' || datatype === xsd$1.string) ?
      new Literal(`"${value}"`) :
      new Literal(`"${value}"^^${datatype}`);
  }

  // ### Creates a variable
  function variable(name) {
    return new Variable(name);
  }

  // ### Returns the default graph
  function defaultGraph() {
    return DEFAULTGRAPH$1;
  }

  // ### Creates a quad
  function quad(subject, predicate, object, graph) {
    return new Quad(subject, predicate, object, graph);
  }

  // **N3Parser** parses N3 documents.

  let blankNodePrefix = 0;

  // ## Constructor
  class N3Parser {
    constructor(options) {
      this._contextStack = [];
      this._graph = null;

      // Set the document IRI
      options = options || {};
      this._setBase(options.baseIRI);
      options.factory && initDataFactory(this, options.factory);

      // Set supported features depending on the format
      const format = (typeof options.format === 'string') ?
                   options.format.match(/\w*$/)[0].toLowerCase() : '',
          isTurtle = /turtle/.test(format), isTriG = /trig/.test(format),
          isNTriples = /triple/.test(format), isNQuads = /quad/.test(format),
          isN3 = this._n3Mode = /n3/.test(format),
          isLineMode = isNTriples || isNQuads;
      if (!(this._supportsNamedGraphs = !(isTurtle || isN3)))
        this._readPredicateOrNamedGraph = this._readPredicate;
      // Support triples in other graphs
      this._supportsQuads = !(isTurtle || isTriG || isNTriples || isN3);
      // Support nesting of triples
      this._supportsRDFStar = format === '' || /star|\*$/.test(format);
      // Disable relative IRIs in N-Triples or N-Quads mode
      if (isLineMode)
        this._resolveRelativeIRI = iri => { return null; };
      this._blankNodePrefix = typeof options.blankNodePrefix !== 'string' ? '' :
                                options.blankNodePrefix.replace(/^(?!_:)/, '_:');
      this._lexer = options.lexer || new N3Lexer({ lineMode: isLineMode, n3: isN3 });
      // Disable explicit quantifiers by default
      this._explicitQuantifiers = !!options.explicitQuantifiers;
    }

    // ## Static class methods

    // ### `_resetBlankNodePrefix` restarts blank node prefix identification
    static _resetBlankNodePrefix() {
      blankNodePrefix = 0;
    }

    // ## Private methods

    // ### `_setBase` sets the base IRI to resolve relative IRIs
    _setBase(baseIRI) {
      if (!baseIRI) {
        this._base = '';
        this._basePath = '';
      }
      else {
        // Remove fragment if present
        const fragmentPos = baseIRI.indexOf('#');
        if (fragmentPos >= 0)
          baseIRI = baseIRI.substr(0, fragmentPos);
        // Set base IRI and its components
        this._base = baseIRI;
        this._basePath   = baseIRI.indexOf('/') < 0 ? baseIRI :
                           baseIRI.replace(/[^\/?]*(?:\?.*)?$/, '');
        baseIRI = baseIRI.match(/^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i);
        this._baseRoot   = baseIRI[0];
        this._baseScheme = baseIRI[1];
      }
    }

    // ### `_saveContext` stores the current parsing context
    // when entering a new scope (list, blank node, formula)
    _saveContext(type, graph, subject, predicate, object) {
      const n3Mode = this._n3Mode;
      this._contextStack.push({
        subject: subject, predicate: predicate, object: object,
        graph: graph, type: type,
        inverse: n3Mode ? this._inversePredicate : false,
        blankPrefix: n3Mode ? this._prefixes._ : '',
        quantified: n3Mode ? this._quantified : null,
      });
      // The settings below only apply to N3 streams
      if (n3Mode) {
        // Every new scope resets the predicate direction
        this._inversePredicate = false;
        // In N3, blank nodes are scoped to a formula
        // (using a dot as separator, as a blank node label cannot start with it)
        this._prefixes._ = (this._graph ? `${this._graph.id.substr(2)}.` : '.');
        // Quantifiers are scoped to a formula
        this._quantified = Object.create(this._quantified);
      }
    }

    // ### `_restoreContext` restores the parent context
    // when leaving a scope (list, blank node, formula)
    _restoreContext() {
      const context = this._contextStack.pop(), n3Mode = this._n3Mode;
      this._subject   = context.subject;
      this._predicate = context.predicate;
      this._object    = context.object;
      this._graph     = context.graph;
      // The settings below only apply to N3 streams
      if (n3Mode) {
        this._inversePredicate = context.inverse;
        this._prefixes._ = context.blankPrefix;
        this._quantified = context.quantified;
      }
    }

    // ### `_readInTopContext` reads a token when in the top context
    _readInTopContext(token) {
      switch (token.type) {
      // If an EOF token arrives in the top context, signal that we're done
      case 'eof':
        if (this._graph !== null)
          return this._error('Unclosed graph', token);
        delete this._prefixes._;
        return this._callback(null, null, this._prefixes);
      // It could be a prefix declaration
      case 'PREFIX':
        this._sparqlStyle = true;
      case '@prefix':
        return this._readPrefix;
      // It could be a base declaration
      case 'BASE':
        this._sparqlStyle = true;
      case '@base':
        return this._readBaseIRI;
      // It could be a graph
      case '{':
        if (this._supportsNamedGraphs) {
          this._graph = '';
          this._subject = null;
          return this._readSubject;
        }
      case 'GRAPH':
        if (this._supportsNamedGraphs)
          return this._readNamedGraphLabel;
      // Otherwise, the next token must be a subject
      default:
        return this._readSubject(token);
      }
    }

    // ### `_readEntity` reads an IRI, prefixed name, blank node, or variable
    _readEntity(token, quantifier) {
      let value;
      switch (token.type) {
      // Read a relative or absolute IRI
      case 'IRI':
      case 'typeIRI':
        const iri = this._resolveIRI(token.value);
        if (iri === null)
          return this._error('Invalid IRI', token);
        value = this._namedNode(iri);
        break;
      // Read a prefixed name
      case 'type':
      case 'prefixed':
        const prefix = this._prefixes[token.prefix];
        if (prefix === undefined)
          return this._error(`Undefined prefix "${token.prefix}:"`, token);
        value = this._namedNode(prefix + token.value);
        break;
      // Read a blank node
      case 'blank':
        value = this._blankNode(this._prefixes[token.prefix] + token.value);
        break;
      // Read a variable
      case 'var':
        value = this._variable(token.value.substr(1));
        break;
      // Everything else is not an entity
      default:
        return this._error(`Expected entity but got ${token.type}`, token);
      }
      // In N3 mode, replace the entity if it is quantified
      if (!quantifier && this._n3Mode && (value.id in this._quantified))
        value = this._quantified[value.id];
      return value;
    }

    // ### `_readSubject` reads a quad's subject
    _readSubject(token) {
      this._predicate = null;
      switch (token.type) {
      case '[':
        // Start a new quad with a new blank node as subject
        this._saveContext('blank', this._graph,
                          this._subject = this._blankNode(), null, null);
        return this._readBlankNodeHead;
      case '(':
        // Start a new list
        this._saveContext('list', this._graph, this.RDF_NIL, null, null);
        this._subject = null;
        return this._readListItem;
      case '{':
        // Start a new formula
        if (!this._n3Mode)
          return this._error('Unexpected graph', token);
        this._saveContext('formula', this._graph,
                          this._graph = this._blankNode(), null, null);
        return this._readSubject;
      case '}':
         // No subject; the graph in which we are reading is closed instead
        return this._readPunctuation(token);
      case '@forSome':
        if (!this._n3Mode)
          return this._error('Unexpected "@forSome"', token);
        this._subject = null;
        this._predicate = this.N3_FORSOME;
        this._quantifier = this._blankNode;
        return this._readQuantifierList;
      case '@forAll':
        if (!this._n3Mode)
          return this._error('Unexpected "@forAll"', token);
        this._subject = null;
        this._predicate = this.N3_FORALL;
        this._quantifier = this._variable;
        return this._readQuantifierList;
      case 'literal':
        if (!this._n3Mode)
          return this._error('Unexpected literal', token);

        if (token.prefix.length === 0) {
          this._literalValue = token.value;
          return this._completeSubjectLiteral;
        }
        else
          this._subject = this._literal(token.value, this._namedNode(token.prefix));

        break;
      case '<<':
        if (!this._supportsRDFStar)
          return this._error('Unexpected RDF* syntax', token);
        this._saveContext('<<', this._graph, null, null, null);
        this._graph = null;
        return this._readSubject;
      default:
        // Read the subject entity
        if ((this._subject = this._readEntity(token)) === undefined)
          return;
        // In N3 mode, the subject might be a path
        if (this._n3Mode)
          return this._getPathReader(this._readPredicateOrNamedGraph);
      }

      // The next token must be a predicate,
      // or, if the subject was actually a graph IRI, a named graph
      return this._readPredicateOrNamedGraph;
    }

    // ### `_readPredicate` reads a quad's predicate
    _readPredicate(token) {
      const type = token.type;
      switch (type) {
      case 'inverse':
        this._inversePredicate = true;
      case 'abbreviation':
        this._predicate = this.ABBREVIATIONS[token.value];
        break;
      case '.':
      case ']':
      case '}':
        // Expected predicate didn't come, must have been trailing semicolon
        if (this._predicate === null)
          return this._error(`Unexpected ${type}`, token);
        this._subject = null;
        return type === ']' ? this._readBlankNodeTail(token) : this._readPunctuation(token);
      case ';':
        // Additional semicolons can be safely ignored
        return this._predicate !== null ? this._readPredicate :
               this._error('Expected predicate but got ;', token);
      case '[':
        if (this._n3Mode) {
          // Start a new quad with a new blank node as subject
          this._saveContext('blank', this._graph, this._subject,
                            this._subject = this._blankNode(), null);
          return this._readBlankNodeHead;
        }
      case 'blank':
        if (!this._n3Mode)
          return this._error('Disallowed blank node as predicate', token);
      default:
        if ((this._predicate = this._readEntity(token)) === undefined)
          return;
      }
      // The next token must be an object
      return this._readObject;
    }

    // ### `_readObject` reads a quad's object
    _readObject(token) {
      switch (token.type) {
      case 'literal':
        // Regular literal, can still get a datatype or language
        if (token.prefix.length === 0) {
          this._literalValue = token.value;
          return this._readDataTypeOrLang;
        }
        // Pre-datatyped string literal (prefix stores the datatype)
        else
          this._object = this._literal(token.value, this._namedNode(token.prefix));
        break;
      case '[':
        // Start a new quad with a new blank node as subject
        this._saveContext('blank', this._graph, this._subject, this._predicate,
                          this._subject = this._blankNode());
        return this._readBlankNodeHead;
      case '(':
        // Start a new list
        this._saveContext('list', this._graph, this._subject, this._predicate, this.RDF_NIL);
        this._subject = null;
        return this._readListItem;
      case '{':
        // Start a new formula
        if (!this._n3Mode)
          return this._error('Unexpected graph', token);
        this._saveContext('formula', this._graph, this._subject, this._predicate,
                          this._graph = this._blankNode());
        return this._readSubject;
      case '<<':
        if (!this._supportsRDFStar)
          return this._error('Unexpected RDF* syntax', token);
        this._saveContext('<<', this._graph, this._subject, this._predicate, null);
        this._graph = null;
        return this._readSubject;
      default:
        // Read the object entity
        if ((this._object = this._readEntity(token)) === undefined)
          return;
        // In N3 mode, the object might be a path
        if (this._n3Mode)
          return this._getPathReader(this._getContextEndReader());
      }
      return this._getContextEndReader();
    }

    // ### `_readPredicateOrNamedGraph` reads a quad's predicate, or a named graph
    _readPredicateOrNamedGraph(token) {
      return token.type === '{' ? this._readGraph(token) : this._readPredicate(token);
    }

    // ### `_readGraph` reads a graph
    _readGraph(token) {
      if (token.type !== '{')
        return this._error(`Expected graph but got ${token.type}`, token);
      // The "subject" we read is actually the GRAPH's label
      this._graph = this._subject, this._subject = null;
      return this._readSubject;
    }

    // ### `_readBlankNodeHead` reads the head of a blank node
    _readBlankNodeHead(token) {
      if (token.type === ']') {
        this._subject = null;
        return this._readBlankNodeTail(token);
      }
      else {
        this._predicate = null;
        return this._readPredicate(token);
      }
    }

    // ### `_readBlankNodeTail` reads the end of a blank node
    _readBlankNodeTail(token) {
      if (token.type !== ']')
        return this._readBlankNodePunctuation(token);

      // Store blank node quad
      if (this._subject !== null)
        this._emit(this._subject, this._predicate, this._object, this._graph);

      // Restore the parent context containing this blank node
      const empty = this._predicate === null;
      this._restoreContext();
      // If the blank node was the object, restore previous context and read punctuation
      if (this._object !== null)
        return this._getContextEndReader();
      // If the blank node was the predicate, continue reading the object
      else if (this._predicate !== null)
        return this._readObject;
      // If the blank node was the subject, continue reading the predicate
      else
        // If the blank node was empty, it could be a named graph label
        return empty ? this._readPredicateOrNamedGraph : this._readPredicateAfterBlank;
    }

    // ### `_readPredicateAfterBlank` reads a predicate after an anonymous blank node
    _readPredicateAfterBlank(token) {
      switch (token.type) {
      case '.':
      case '}':
        // No predicate is coming if the triple is terminated here
        this._subject = null;
        return this._readPunctuation(token);
      default:
        return this._readPredicate(token);
      }
    }

    // ### `_readListItem` reads items from a list
    _readListItem(token) {
      let item = null,                      // The item of the list
          list = null,                      // The list itself
          next = this._readListItem;        // The next function to execute
      const previousList = this._subject,   // The previous list that contains this list
          stack = this._contextStack,       // The stack of parent contexts
          parent = stack[stack.length - 1]; // The parent containing the current list

      switch (token.type) {
      case '[':
        // Stack the current list quad and start a new quad with a blank node as subject
        this._saveContext('blank', this._graph,
                          list = this._blankNode(), this.RDF_FIRST,
                          this._subject = item = this._blankNode());
        next = this._readBlankNodeHead;
        break;
      case '(':
        // Stack the current list quad and start a new list
        this._saveContext('list', this._graph,
                          list = this._blankNode(), this.RDF_FIRST, this.RDF_NIL);
        this._subject = null;
        break;
      case ')':
        // Closing the list; restore the parent context
        this._restoreContext();
        // If this list is contained within a parent list, return the membership quad here.
        // This will be `<parent list element> rdf:first <this list>.`.
        if (stack.length !== 0 && stack[stack.length - 1].type === 'list')
          this._emit(this._subject, this._predicate, this._object, this._graph);
        // Was this list the parent's subject?
        if (this._predicate === null) {
          // The next token is the predicate
          next = this._readPredicate;
          // No list tail if this was an empty list
          if (this._subject === this.RDF_NIL)
            return next;
        }
        // The list was in the parent context's object
        else {
          next = this._getContextEndReader();
          // No list tail if this was an empty list
          if (this._object === this.RDF_NIL)
            return next;
        }
        // Close the list by making the head nil
        list = this.RDF_NIL;
        break;
      case 'literal':
        // Regular literal, can still get a datatype or language
        if (token.prefix.length === 0) {
          this._literalValue = token.value;
          next = this._readListItemDataTypeOrLang;
        }
        // Pre-datatyped string literal (prefix stores the datatype)
        else {
          item = this._literal(token.value, this._namedNode(token.prefix));
          next = this._getContextEndReader();
        }
        break;
      case '{':
        // Start a new formula
        if (!this._n3Mode)
          return this._error('Unexpected graph', token);
        this._saveContext('formula', this._graph, this._subject, this._predicate,
                          this._graph = this._blankNode());
        return this._readSubject;
      default:
        if ((item = this._readEntity(token)) === undefined)
          return;
      }

       // Create a new blank node if no item head was assigned yet
      if (list === null)
        this._subject = list = this._blankNode();

      // Is this the first element of the list?
      if (previousList === null) {
        // This list is either the subject or the object of its parent
        if (parent.predicate === null)
          parent.subject = list;
        else
          parent.object = list;
      }
      else {
        // Continue the previous list with the current list
        this._emit(previousList, this.RDF_REST, list, this._graph);
      }
      // If an item was read, add it to the list
      if (item !== null) {
        // In N3 mode, the item might be a path
        if (this._n3Mode && (token.type === 'IRI' || token.type === 'prefixed')) {
          // Create a new context to add the item's path
          this._saveContext('item', this._graph, list, this.RDF_FIRST, item);
          this._subject = item, this._predicate = null;
          // _readPath will restore the context and output the item
          return this._getPathReader(this._readListItem);
        }
        // Output the item
        this._emit(list, this.RDF_FIRST, item, this._graph);
      }
      return next;
    }

    // ### `_readDataTypeOrLang` reads an _optional_ datatype or language
    _readDataTypeOrLang(token) {
      return this._completeObjectLiteral(token, false);
    }


    // ### `_readListItemDataTypeOrLang` reads an _optional_ datatype or language in a list
    _readListItemDataTypeOrLang(token) {
      return this._completeObjectLiteral(token, true);
    }

    // ### `_completeLiteral` completes a literal with an optional datatype or language
    _completeLiteral(token) {
      // Create a simple string literal by default
      let literal = this._literal(this._literalValue);

      switch (token.type) {
      // Create a datatyped literal
      case 'type':
      case 'typeIRI':
        const datatype = this._readEntity(token);
        if (datatype === undefined) return; // No datatype means an error occurred
        literal = this._literal(this._literalValue, datatype);
        token = null;
        break;
      // Create a language-tagged string
      case 'langcode':
        literal = this._literal(this._literalValue, token.value);
        token = null;
        break;
      }

      return { token, literal };
    }

    // Completes a literal in subject position
    _completeSubjectLiteral(token) {
      this._subject = this._completeLiteral(token).literal;
      return this._readPredicateOrNamedGraph;
    }

    // Completes a literal in object position
    _completeObjectLiteral(token, listItem) {
      const completed = this._completeLiteral(token);
      if (!completed)
        return;
      this._object = completed.literal;

      // If this literal was part of a list, write the item
      // (we could also check the context stack, but passing in a flag is faster)
      if (listItem)
        this._emit(this._subject, this.RDF_FIRST, this._object, this._graph);
      // If the token was consumed, continue with the rest of the input
      if (completed.token === null)
        return this._getContextEndReader();
      // Otherwise, consume the token now
      else {
        this._readCallback = this._getContextEndReader();
        return this._readCallback(completed.token);
      }
    }

    // ### `_readFormulaTail` reads the end of a formula
    _readFormulaTail(token) {
      if (token.type !== '}')
        return this._readPunctuation(token);

      // Store the last quad of the formula
      if (this._subject !== null)
        this._emit(this._subject, this._predicate, this._object, this._graph);

      // Restore the parent context containing this formula
      this._restoreContext();
      // If the formula was the subject, continue reading the predicate.
      // If the formula was the object, read punctuation.
      return this._object === null ? this._readPredicate : this._getContextEndReader();
    }

    // ### `_readPunctuation` reads punctuation between quads or quad parts
    _readPunctuation(token) {
      let next, graph = this._graph;
      const subject = this._subject, inversePredicate = this._inversePredicate;
      switch (token.type) {
      // A closing brace ends a graph
      case '}':
        if (this._graph === null)
          return this._error('Unexpected graph closing', token);
        if (this._n3Mode)
          return this._readFormulaTail(token);
        this._graph = null;
      // A dot just ends the statement, without sharing anything with the next
      case '.':
        this._subject = null;
        next = this._contextStack.length ? this._readSubject : this._readInTopContext;
        if (inversePredicate) this._inversePredicate = false;
        break;
      // Semicolon means the subject is shared; predicate and object are different
      case ';':
        next = this._readPredicate;
        break;
      // Comma means both the subject and predicate are shared; the object is different
      case ',':
        next = this._readObject;
        break;
      default:
        // An entity means this is a quad (only allowed if not already inside a graph)
        if (this._supportsQuads && this._graph === null && (graph = this._readEntity(token)) !== undefined) {
          next = this._readQuadPunctuation;
          break;
        }
        return this._error(`Expected punctuation to follow "${this._object.id}"`, token);
      }
      // A quad has been completed now, so return it
      if (subject !== null) {
        const predicate = this._predicate, object = this._object;
        if (!inversePredicate)
          this._emit(subject, predicate, object,  graph);
        else
          this._emit(object,  predicate, subject, graph);
      }
      return next;
    }

      // ### `_readBlankNodePunctuation` reads punctuation in a blank node
    _readBlankNodePunctuation(token) {
      let next;
      switch (token.type) {
      // Semicolon means the subject is shared; predicate and object are different
      case ';':
        next = this._readPredicate;
        break;
      // Comma means both the subject and predicate are shared; the object is different
      case ',':
        next = this._readObject;
        break;
      default:
        return this._error(`Expected punctuation to follow "${this._object.id}"`, token);
      }
      // A quad has been completed now, so return it
      this._emit(this._subject, this._predicate, this._object, this._graph);
      return next;
    }

    // ### `_readQuadPunctuation` reads punctuation after a quad
    _readQuadPunctuation(token) {
      if (token.type !== '.')
        return this._error('Expected dot to follow quad', token);
      return this._readInTopContext;
    }

    // ### `_readPrefix` reads the prefix of a prefix declaration
    _readPrefix(token) {
      if (token.type !== 'prefix')
        return this._error('Expected prefix to follow @prefix', token);
      this._prefix = token.value;
      return this._readPrefixIRI;
    }

    // ### `_readPrefixIRI` reads the IRI of a prefix declaration
    _readPrefixIRI(token) {
      if (token.type !== 'IRI')
        return this._error(`Expected IRI to follow prefix "${this._prefix}:"`, token);
      const prefixNode = this._readEntity(token);
      this._prefixes[this._prefix] = prefixNode.value;
      this._prefixCallback(this._prefix, prefixNode);
      return this._readDeclarationPunctuation;
    }

    // ### `_readBaseIRI` reads the IRI of a base declaration
    _readBaseIRI(token) {
      const iri = token.type === 'IRI' && this._resolveIRI(token.value);
      if (!iri)
        return this._error('Expected valid IRI to follow base declaration', token);
      this._setBase(iri);
      return this._readDeclarationPunctuation;
    }

    // ### `_readNamedGraphLabel` reads the label of a named graph
    _readNamedGraphLabel(token) {
      switch (token.type) {
      case 'IRI':
      case 'blank':
      case 'prefixed':
        return this._readSubject(token), this._readGraph;
      case '[':
        return this._readNamedGraphBlankLabel;
      default:
        return this._error('Invalid graph label', token);
      }
    }

    // ### `_readNamedGraphLabel` reads a blank node label of a named graph
    _readNamedGraphBlankLabel(token) {
      if (token.type !== ']')
        return this._error('Invalid graph label', token);
      this._subject = this._blankNode();
      return this._readGraph;
    }

    // ### `_readDeclarationPunctuation` reads the punctuation of a declaration
    _readDeclarationPunctuation(token) {
      // SPARQL-style declarations don't have punctuation
      if (this._sparqlStyle) {
        this._sparqlStyle = false;
        return this._readInTopContext(token);
      }

      if (token.type !== '.')
        return this._error('Expected declaration to end with a dot', token);
      return this._readInTopContext;
    }

    // Reads a list of quantified symbols from a @forSome or @forAll statement
    _readQuantifierList(token) {
      let entity;
      switch (token.type) {
      case 'IRI':
      case 'prefixed':
        if ((entity = this._readEntity(token, true)) !== undefined)
          break;
      default:
        return this._error(`Unexpected ${token.type}`, token);
      }
      // Without explicit quantifiers, map entities to a quantified entity
      if (!this._explicitQuantifiers)
        this._quantified[entity.id] = this._quantifier(this._blankNode().value);
      // With explicit quantifiers, output the reified quantifier
      else {
        // If this is the first item, start a new quantifier list
        if (this._subject === null)
          this._emit(this._graph || this.DEFAULTGRAPH, this._predicate,
                     this._subject = this._blankNode(), this.QUANTIFIERS_GRAPH);
        // Otherwise, continue the previous list
        else
          this._emit(this._subject, this.RDF_REST,
                     this._subject = this._blankNode(), this.QUANTIFIERS_GRAPH);
        // Output the list item
        this._emit(this._subject, this.RDF_FIRST, entity, this.QUANTIFIERS_GRAPH);
      }
      return this._readQuantifierPunctuation;
    }

    // Reads punctuation from a @forSome or @forAll statement
    _readQuantifierPunctuation(token) {
      // Read more quantifiers
      if (token.type === ',')
        return this._readQuantifierList;
      // End of the quantifier list
      else {
        // With explicit quantifiers, close the quantifier list
        if (this._explicitQuantifiers) {
          this._emit(this._subject, this.RDF_REST, this.RDF_NIL, this.QUANTIFIERS_GRAPH);
          this._subject = null;
        }
        // Read a dot
        this._readCallback = this._getContextEndReader();
        return this._readCallback(token);
      }
    }

    // ### `_getPathReader` reads a potential path and then resumes with the given function
    _getPathReader(afterPath) {
      this._afterPath = afterPath;
      return this._readPath;
    }

    // ### `_readPath` reads a potential path
    _readPath(token) {
      switch (token.type) {
      // Forward path
      case '!': return this._readForwardPath;
      // Backward path
      case '^': return this._readBackwardPath;
      // Not a path; resume reading where we left off
      default:
        const stack = this._contextStack, parent = stack.length && stack[stack.length - 1];
        // If we were reading a list item, we still need to output it
        if (parent && parent.type === 'item') {
          // The list item is the remaining subejct after reading the path
          const item = this._subject;
          // Switch back to the context of the list
          this._restoreContext();
          // Output the list item
          this._emit(this._subject, this.RDF_FIRST, item, this._graph);
        }
        return this._afterPath(token);
      }
    }

    // ### `_readForwardPath` reads a '!' path
    _readForwardPath(token) {
      let subject, predicate;
      const object = this._blankNode();
      // The next token is the predicate
      if ((predicate = this._readEntity(token)) === undefined)
        return;
      // If we were reading a subject, replace the subject by the path's object
      if (this._predicate === null)
        subject = this._subject, this._subject = object;
      // If we were reading an object, replace the subject by the path's object
      else
        subject = this._object,  this._object  = object;
      // Emit the path's current quad and read its next section
      this._emit(subject, predicate, object, this._graph);
      return this._readPath;
    }

    // ### `_readBackwardPath` reads a '^' path
    _readBackwardPath(token) {
      const subject = this._blankNode();
      let predicate, object;
      // The next token is the predicate
      if ((predicate = this._readEntity(token)) === undefined)
        return;
      // If we were reading a subject, replace the subject by the path's subject
      if (this._predicate === null)
        object = this._subject, this._subject = subject;
      // If we were reading an object, replace the subject by the path's subject
      else
        object = this._object,  this._object  = subject;
      // Emit the path's current quad and read its next section
      this._emit(subject, predicate, object, this._graph);
      return this._readPath;
    }

    // ### `_readRDFStarTailOrGraph` reads the graph of a nested RDF* quad or the end of a nested RDF* triple
    _readRDFStarTailOrGraph(token) {
      if (token.type !== '>>') {
        // An entity means this is a quad (only allowed if not already inside a graph)
        if (this._supportsQuads && this._graph === null && (this._graph = this._readEntity(token)) !== undefined)
          return this._readRDFStarTail;
        return this._error(`Expected >> to follow "${this._object.id}"`, token);
      }
      return this._readRDFStarTail(token);
    }

    // ### `_readRDFStarTail` reads the end of a nested RDF* triple
    _readRDFStarTail(token) {
      if (token.type !== '>>')
        return this._error(`Expected >> but got ${token.type}`, token);
      // Read the quad and restore the previous context
      const quad = this._quad(this._subject, this._predicate, this._object,
        this._graph || this.DEFAULTGRAPH);
      this._restoreContext();
      // If the triple was the subject, continue by reading the predicate.
      if (this._subject === null) {
        this._subject = quad;
        return this._readPredicate;
      }
      // If the triple was the object, read context end.
      else {
        this._object = quad;
        return this._getContextEndReader();
      }
    }

    // ### `_getContextEndReader` gets the next reader function at the end of a context
    _getContextEndReader() {
      const contextStack = this._contextStack;
      if (!contextStack.length)
        return this._readPunctuation;

      switch (contextStack[contextStack.length - 1].type) {
      case 'blank':
        return this._readBlankNodeTail;
      case 'list':
        return this._readListItem;
      case 'formula':
        return this._readFormulaTail;
      case '<<':
        return this._readRDFStarTailOrGraph;
      }
    }

    // ### `_emit` sends a quad through the callback
    _emit(subject, predicate, object, graph) {
      this._callback(null, this._quad(subject, predicate, object, graph || this.DEFAULTGRAPH));
    }

    // ### `_error` emits an error message through the callback
    _error(message, token) {
      const err = new Error(`${message} on line ${token.line}.`);
      err.context = {
        token: token,
        line: token.line,
        previousToken: this._lexer.previousToken,
      };
      this._callback(err);
      this._callback = noop$2;
    }

    // ### `_resolveIRI` resolves an IRI against the base path
    _resolveIRI(iri) {
      return /^[a-z][a-z0-9+.-]*:/i.test(iri) ? iri : this._resolveRelativeIRI(iri);
    }

    // ### `_resolveRelativeIRI` resolves an IRI against the base path,
    // assuming that a base path has been set and that the IRI is indeed relative
    _resolveRelativeIRI(iri) {
      // An empty relative IRI indicates the base IRI
      if (!iri.length)
        return this._base;
      // Decide resolving strategy based in the first character
      switch (iri[0]) {
      // Resolve relative fragment IRIs against the base IRI
      case '#': return this._base + iri;
      // Resolve relative query string IRIs by replacing the query string
      case '?': return this._base.replace(/(?:\?.*)?$/, iri);
      // Resolve root-relative IRIs at the root of the base IRI
      case '/':
        // Resolve scheme-relative IRIs to the scheme
        return (iri[1] === '/' ? this._baseScheme : this._baseRoot) + this._removeDotSegments(iri);
      // Resolve all other IRIs at the base IRI's path
      default:
        // Relative IRIs cannot contain a colon in the first path segment
        return (/^[^/:]*:/.test(iri)) ? null : this._removeDotSegments(this._basePath + iri);
      }
    }

    // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986
    _removeDotSegments(iri) {
      // Don't modify the IRI if it does not contain any dot segments
      if (!/(^|\/)\.\.?($|[/#?])/.test(iri))
        return iri;

      // Start with an imaginary slash before the IRI in order to resolve trailing './' and '../'
      const length = iri.length;
      let result = '', i = -1, pathStart = -1, segmentStart = 0, next = '/';

      while (i < length) {
        switch (next) {
        // The path starts with the first slash after the authority
        case ':':
          if (pathStart < 0) {
            // Skip two slashes before the authority
            if (iri[++i] === '/' && iri[++i] === '/')
              // Skip to slash after the authority
              while ((pathStart = i + 1) < length && iri[pathStart] !== '/')
                i = pathStart;
          }
          break;
        // Don't modify a query string or fragment
        case '?':
        case '#':
          i = length;
          break;
        // Handle '/.' or '/..' path segments
        case '/':
          if (iri[i + 1] === '.') {
            next = iri[++i + 1];
            switch (next) {
            // Remove a '/.' segment
            case '/':
              result += iri.substring(segmentStart, i - 1);
              segmentStart = i + 1;
              break;
            // Remove a trailing '/.' segment
            case undefined:
            case '?':
            case '#':
              return result + iri.substring(segmentStart, i) + iri.substr(i + 1);
            // Remove a '/..' segment
            case '.':
              next = iri[++i + 1];
              if (next === undefined || next === '/' || next === '?' || next === '#') {
                result += iri.substring(segmentStart, i - 2);
                // Try to remove the parent path from result
                if ((segmentStart = result.lastIndexOf('/')) >= pathStart)
                  result = result.substr(0, segmentStart);
                // Remove a trailing '/..' segment
                if (next !== '/')
                  return `${result}/${iri.substr(i + 1)}`;
                segmentStart = i + 1;
              }
            }
          }
        }
        next = iri[++i];
      }
      return result + iri.substring(segmentStart);
    }

    // ## Public methods

    // ### `parse` parses the N3 input and emits each parsed quad through the callback
    parse(input, quadCallback, prefixCallback) {
      // The read callback is the next function to be executed when a token arrives.
      // We start reading in the top context.
      this._readCallback = this._readInTopContext;
      this._sparqlStyle = false;
      this._prefixes = Object.create(null);
      this._prefixes._ = this._blankNodePrefix ? this._blankNodePrefix.substr(2)
                                               : `b${blankNodePrefix++}_`;
      this._prefixCallback = prefixCallback || noop$2;
      this._inversePredicate = false;
      this._quantified = Object.create(null);

      // Parse synchronously if no quad callback is given
      if (!quadCallback) {
        const quads = [];
        let error;
        this._callback = (e, t) => { e ? (error = e) : t && quads.push(t); };
        this._lexer.tokenize(input).every(token => {
          return this._readCallback = this._readCallback(token);
        });
        if (error) throw error;
        return quads;
      }

      // Parse asynchronously otherwise, executing the read callback when a token arrives
      this._callback = quadCallback;
      this._lexer.tokenize(input, (error, token) => {
        if (error !== null)
          this._callback(error), this._callback = noop$2;
        else if (this._readCallback)
          this._readCallback = this._readCallback(token);
      });
    }
  }

  // The empty function
  function noop$2() {}

  // Initializes the parser with the given data factory
  function initDataFactory(parser, factory) {
    // Set factory methods
    const namedNode = factory.namedNode;
    parser._namedNode   = namedNode;
    parser._blankNode   = factory.blankNode;
    parser._literal     = factory.literal;
    parser._variable    = factory.variable;
    parser._quad        = factory.quad;
    parser.DEFAULTGRAPH = factory.defaultGraph();

    // Set common named nodes
    parser.RDF_FIRST  = namedNode(namespaces.rdf.first);
    parser.RDF_REST   = namedNode(namespaces.rdf.rest);
    parser.RDF_NIL    = namedNode(namespaces.rdf.nil);
    parser.N3_FORALL  = namedNode(namespaces.r.forAll);
    parser.N3_FORSOME = namedNode(namespaces.r.forSome);
    parser.ABBREVIATIONS = {
      'a': namedNode(namespaces.rdf.type),
      '=': namedNode(namespaces.owl.sameAs),
      '>': namedNode(namespaces.log.implies),
    };
    parser.QUANTIFIERS_GRAPH = namedNode('urn:n3:quantifiers');
  }
  initDataFactory(N3Parser.prototype, N3DataFactory);

  // **N3Writer** writes N3 documents.

  const DEFAULTGRAPH = N3DataFactory.defaultGraph();

  const { rdf, xsd } = namespaces;

  // Characters in literals that require escaping
  const escape    = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
      escapeAll = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
      escapedCharacters = {
        '\\': '\\\\', '"': '\\"', '\t': '\\t',
        '\n': '\\n', '\r': '\\r', '\b': '\\b', '\f': '\\f',
      };

  // ## Placeholder class to represent already pretty-printed terms
  class SerializedTerm extends Term {
    // Pretty-printed nodes are not equal to any other node
    // (e.g., [] does not equal [])
    equals() {
      return false;
    }
  }

  // ## Constructor
  class N3Writer {
    constructor(outputStream, options) {
      // ### `_prefixRegex` matches a prefixed name or IRI that begins with one of the added prefixes
      this._prefixRegex = /$0^/;

      // Shift arguments if the first argument is not a stream
      if (outputStream && typeof outputStream.write !== 'function')
        options = outputStream, outputStream = null;
      options = options || {};
      this._lists = options.lists;

      // If no output stream given, send the output as string through the end callback
      if (!outputStream) {
        let output = '';
        this._outputStream = {
          write(chunk, encoding, done) { output += chunk; done && done(); },
          end: done => { done && done(null, output); },
        };
        this._endStream = true;
      }
      else {
        this._outputStream = outputStream;
        this._endStream = options.end === undefined ? true : !!options.end;
      }

      // Initialize writer, depending on the format
      this._subject = null;
      if (!(/triple|quad/i).test(options.format)) {
        this._lineMode = false;
        this._graph = DEFAULTGRAPH;
        this._prefixIRIs = Object.create(null);
        options.prefixes && this.addPrefixes(options.prefixes);
        if (options.baseIRI) {
          this._baseMatcher = new RegExp(`^${escapeRegex(options.baseIRI)
            }${options.baseIRI.endsWith('/') ? '' : '[#?]'}`);
          this._baseLength = options.baseIRI.length;
        }
      }
      else {
        this._lineMode = true;
        this._writeQuad = this._writeQuadLine;
      }
    }

    // ## Private methods

    // ### Whether the current graph is the default graph
    get _inDefaultGraph() {
      return DEFAULTGRAPH.equals(this._graph);
    }

    // ### `_write` writes the argument to the output stream
    _write(string, callback) {
      this._outputStream.write(string, 'utf8', callback);
    }

    // ### `_writeQuad` writes the quad to the output stream
    _writeQuad(subject, predicate, object, graph, done) {
      try {
        // Write the graph's label if it has changed
        if (!graph.equals(this._graph)) {
          // Close the previous graph and start the new one
          this._write((this._subject === null ? '' : (this._inDefaultGraph ? '.\n' : '\n}\n')) +
                      (DEFAULTGRAPH.equals(graph) ? '' : `${this._encodeIriOrBlank(graph)} {\n`));
          this._graph = graph;
          this._subject = null;
        }
        // Don't repeat the subject if it's the same
        if (subject.equals(this._subject)) {
          // Don't repeat the predicate if it's the same
          if (predicate.equals(this._predicate))
            this._write(`, ${this._encodeObject(object)}`, done);
          // Same subject, different predicate
          else
            this._write(`;\n    ${
                      this._encodePredicate(this._predicate = predicate)} ${
                      this._encodeObject(object)}`, done);
        }
        // Different subject; write the whole quad
        else
          this._write(`${(this._subject === null ? '' : '.\n') +
                    this._encodeSubject(this._subject = subject)} ${
                    this._encodePredicate(this._predicate = predicate)} ${
                    this._encodeObject(object)}`, done);
      }
      catch (error) { done && done(error); }
    }

    // ### `_writeQuadLine` writes the quad to the output stream as a single line
    _writeQuadLine(subject, predicate, object, graph, done) {
      // Write the quad without prefixes
      delete this._prefixMatch;
      this._write(this.quadToString(subject, predicate, object, graph), done);
    }

    // ### `quadToString` serializes a quad as a string
    quadToString(subject, predicate, object, graph) {
      return  `${this._encodeSubject(subject)} ${
            this._encodeIriOrBlank(predicate)} ${
            this._encodeObject(object)
            }${graph && graph.value ? ` ${this._encodeIriOrBlank(graph)} .\n` : ' .\n'}`;
    }

    // ### `quadsToString` serializes an array of quads as a string
    quadsToString(quads) {
      return quads.map(t => {
        return this.quadToString(t.subject, t.predicate, t.object, t.graph);
      }).join('');
    }

    // ### `_encodeSubject` represents a subject
    _encodeSubject(entity) {
      return entity.termType === 'Quad' ?
        this._encodeQuad(entity) : this._encodeIriOrBlank(entity);
    }

    // ### `_encodeIriOrBlank` represents an IRI or blank node
    _encodeIriOrBlank(entity) {
      // A blank node or list is represented as-is
      if (entity.termType !== 'NamedNode') {
        // If it is a list head, pretty-print it
        if (this._lists && (entity.value in this._lists))
          entity = this.list(this._lists[entity.value]);
        return 'id' in entity ? entity.id : `_:${entity.value}`;
      }
      let iri = entity.value;
      // Use relative IRIs if requested and possible
      if (this._baseMatcher && this._baseMatcher.test(iri))
        iri = iri.substr(this._baseLength);
      // Escape special characters
      if (escape.test(iri))
        iri = iri.replace(escapeAll, characterReplacer);
      // Try to represent the IRI as prefixed name
      const prefixMatch = this._prefixRegex.exec(iri);
      return !prefixMatch ? `<${iri}>` :
             (!prefixMatch[1] ? iri : this._prefixIRIs[prefixMatch[1]] + prefixMatch[2]);
    }

    // ### `_encodeLiteral` represents a literal
    _encodeLiteral(literal) {
      // Escape special characters
      let value = literal.value;
      if (escape.test(value))
        value = value.replace(escapeAll, characterReplacer);

      // Write a language-tagged literal
      if (literal.language)
        return `"${value}"@${literal.language}`;

      // Write dedicated literals per data type
      if (this._lineMode) {
        // Only abbreviate strings in N-Triples or N-Quads
        if (literal.datatype.value === xsd.string)
          return `"${value}"`;
      }
      else {
        // Use common datatype abbreviations in Turtle or TriG
        switch (literal.datatype.value) {
        case xsd.string:
          return `"${value}"`;
        case xsd.boolean:
          if (value === 'true' || value === 'false')
            return value;
          break;
        case xsd.integer:
          if (/^[+-]?\d+$/.test(value))
            return value;
          break;
        case xsd.decimal:
          if (/^[+-]?\d*\.\d+$/.test(value))
            return value;
          break;
        case xsd.double:
          if (/^[+-]?(?:\d+\.\d*|\.?\d+)[eE][+-]?\d+$/.test(value))
            return value;
          break;
        }
      }

      // Write a regular datatyped literal
      return `"${value}"^^${this._encodeIriOrBlank(literal.datatype)}`;
    }

    // ### `_encodePredicate` represents a predicate
    _encodePredicate(predicate) {
      return predicate.value === rdf.type ? 'a' : this._encodeIriOrBlank(predicate);
    }

    // ### `_encodeObject` represents an object
    _encodeObject(object) {
      switch (object.termType) {
      case 'Quad':
        return this._encodeQuad(object);
      case 'Literal':
        return this._encodeLiteral(object);
      default:
        return this._encodeIriOrBlank(object);
      }
    }

    // ### `_encodeQuad` encodes an RDF* quad
    _encodeQuad({ subject, predicate, object, graph }) {
      return `<<${
      this._encodeSubject(subject)} ${
      this._encodePredicate(predicate)} ${
      this._encodeObject(object)}${
      isDefaultGraph(graph) ? '' : ` ${this._encodeIriOrBlank(graph)}`}>>`;
    }

    // ### `_blockedWrite` replaces `_write` after the writer has been closed
    _blockedWrite() {
      throw new Error('Cannot write because the writer has been closed.');
    }

    // ### `addQuad` adds the quad to the output stream
    addQuad(subject, predicate, object, graph, done) {
      // The quad was given as an object, so shift parameters
      if (object === undefined)
        this._writeQuad(subject.subject, subject.predicate, subject.object, subject.graph, predicate);
      // The optional `graph` parameter was not provided
      else if (typeof graph === 'function')
        this._writeQuad(subject, predicate, object, DEFAULTGRAPH, graph);
      // The `graph` parameter was provided
      else
        this._writeQuad(subject, predicate, object, graph || DEFAULTGRAPH, done);
    }

    // ### `addQuads` adds the quads to the output stream
    addQuads(quads) {
      for (let i = 0; i < quads.length; i++)
        this.addQuad(quads[i]);
    }

    // ### `addPrefix` adds the prefix to the output stream
    addPrefix(prefix, iri, done) {
      const prefixes = {};
      prefixes[prefix] = iri;
      this.addPrefixes(prefixes, done);
    }

    // ### `addPrefixes` adds the prefixes to the output stream
    addPrefixes(prefixes, done) {
      // Ignore prefixes if not supported by the serialization
      if (!this._prefixIRIs)
        return done && done();

      // Write all new prefixes
      let hasPrefixes = false;
      for (let prefix in prefixes) {
        let iri = prefixes[prefix];
        if (typeof iri !== 'string')
          iri = iri.value;
        hasPrefixes = true;
        // Finish a possible pending quad
        if (this._subject !== null) {
          this._write(this._inDefaultGraph ? '.\n' : '\n}\n');
          this._subject = null, this._graph = '';
        }
        // Store and write the prefix
        this._prefixIRIs[iri] = (prefix += ':');
        this._write(`@prefix ${prefix} <${iri}>.\n`);
      }
      // Recreate the prefix matcher
      if (hasPrefixes) {
        let IRIlist = '', prefixList = '';
        for (const prefixIRI in this._prefixIRIs) {
          IRIlist += IRIlist ? `|${prefixIRI}` : prefixIRI;
          prefixList += (prefixList ? '|' : '') + this._prefixIRIs[prefixIRI];
        }
        IRIlist = escapeRegex(IRIlist);
        this._prefixRegex = new RegExp(`^(?:${prefixList})[^\/]*$|` +
                                       `^(${IRIlist})([a-zA-Z][\\-_a-zA-Z0-9]*)$`);
      }
      // End a prefix block with a newline
      this._write(hasPrefixes ? '\n' : '', done);
    }

    // ### `blank` creates a blank node with the given content
    blank(predicate, object) {
      let children = predicate, child, length;
      // Empty blank node
      if (predicate === undefined)
        children = [];
      // Blank node passed as blank(Term("predicate"), Term("object"))
      else if (predicate.termType)
        children = [{ predicate: predicate, object: object }];
      // Blank node passed as blank({ predicate: predicate, object: object })
      else if (!('length' in predicate))
        children = [predicate];

      switch (length = children.length) {
      // Generate an empty blank node
      case 0:
        return new SerializedTerm('[]');
      // Generate a non-nested one-triple blank node
      case 1:
        child = children[0];
        if (!(child.object instanceof SerializedTerm))
          return new SerializedTerm(`[ ${this._encodePredicate(child.predicate)} ${
                                  this._encodeObject(child.object)} ]`);
      // Generate a multi-triple or nested blank node
      default:
        let contents = '[';
        // Write all triples in order
        for (let i = 0; i < length; i++) {
          child = children[i];
          // Write only the object is the predicate is the same as the previous
          if (child.predicate.equals(predicate))
            contents += `, ${this._encodeObject(child.object)}`;
          // Otherwise, write the predicate and the object
          else {
            contents += `${(i ? ';\n  ' : '\n  ') +
                      this._encodePredicate(child.predicate)} ${
                      this._encodeObject(child.object)}`;
            predicate = child.predicate;
          }
        }
        return new SerializedTerm(`${contents}\n]`);
      }
    }

    // ### `list` creates a list node with the given content
    list(elements) {
      const length = elements && elements.length || 0, contents = new Array(length);
      for (let i = 0; i < length; i++)
        contents[i] = this._encodeObject(elements[i]);
      return new SerializedTerm(`(${contents.join(' ')})`);
    }

    // ### `end` signals the end of the output stream
    end(done) {
      // Finish a possible pending quad
      if (this._subject !== null) {
        this._write(this._inDefaultGraph ? '.\n' : '\n}\n');
        this._subject = null;
      }
      // Disallow further writing
      this._write = this._blockedWrite;

      // Try to end the underlying stream, ensuring done is called exactly one time
      let singleDone = done && ((error, result) => { singleDone = null, done(error, result); });
      if (this._endStream) {
        try { return this._outputStream.end(singleDone); }
        catch (error) { /* error closing stream */ }
      }
      singleDone && singleDone();
    }
  }

  // Replaces a character by its escaped version
  function characterReplacer(character) {
    // Replace a single character by its escaped version
    let result = escapedCharacters[character];
    if (result === undefined) {
      // Replace a single character with its 4-bit unicode escape sequence
      if (character.length === 1) {
        result = character.charCodeAt(0).toString(16);
        result = '\\u0000'.substr(0, 6 - result.length) + result;
      }
      // Replace a surrogate pair with its 8-bit unicode escape sequence
      else {
        result = ((character.charCodeAt(0) - 0xD800) * 0x400 +
                   character.charCodeAt(1) + 0x2400).toString(16);
        result = '\\U00000000'.substr(0, 10 - result.length) + result;
      }
    }
    return result;
  }

  function escapeRegex(regex) {
    return regex.replace(/[\]\/\(\)\*\+\?\.\\\$]/g, '\\$&');
  }

  var readable = {exports: {}};

  var stream = Stream__default["default"];

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var _require$2 = require$$0__default["default"],
      Buffer$4 = _require$2.Buffer;

  var _require2 = require$$5__default["default"],
      inspect = _require2.inspect;

  var custom = inspect && inspect.custom || 'inspect';

  function copyBuffer(src, target, offset) {
    Buffer$4.prototype.copy.call(src, target, offset);
  }

  var buffer_list =
  /*#__PURE__*/
  function () {
    function BufferList() {
      _classCallCheck(this, BufferList);

      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    _createClass(BufferList, [{
      key: "push",
      value: function push(v) {
        var entry = {
          data: v,
          next: null
        };
        if (this.length > 0) this.tail.next = entry;else this.head = entry;
        this.tail = entry;
        ++this.length;
      }
    }, {
      key: "unshift",
      value: function unshift(v) {
        var entry = {
          data: v,
          next: this.head
        };
        if (this.length === 0) this.tail = entry;
        this.head = entry;
        ++this.length;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (this.length === 0) return;
        var ret = this.head.data;
        if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
        --this.length;
        return ret;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
    }, {
      key: "join",
      value: function join(s) {
        if (this.length === 0) return '';
        var p = this.head;
        var ret = '' + p.data;

        while (p = p.next) {
          ret += s + p.data;
        }

        return ret;
      }
    }, {
      key: "concat",
      value: function concat(n) {
        if (this.length === 0) return Buffer$4.alloc(0);
        var ret = Buffer$4.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;

        while (p) {
          copyBuffer(p.data, ret, i);
          i += p.data.length;
          p = p.next;
        }

        return ret;
      } // Consumes a specified amount of bytes or characters from the buffered data.

    }, {
      key: "consume",
      value: function consume(n, hasStrings) {
        var ret;

        if (n < this.head.data.length) {
          // `slice` is the same for buffers and strings.
          ret = this.head.data.slice(0, n);
          this.head.data = this.head.data.slice(n);
        } else if (n === this.head.data.length) {
          // First chunk is a perfect match.
          ret = this.shift();
        } else {
          // Result spans more than one buffer.
          ret = hasStrings ? this._getString(n) : this._getBuffer(n);
        }

        return ret;
      }
    }, {
      key: "first",
      value: function first() {
        return this.head.data;
      } // Consumes a specified amount of characters from the buffered data.

    }, {
      key: "_getString",
      value: function _getString(n) {
        var p = this.head;
        var c = 1;
        var ret = p.data;
        n -= ret.length;

        while (p = p.next) {
          var str = p.data;
          var nb = n > str.length ? str.length : n;
          if (nb === str.length) ret += str;else ret += str.slice(0, n);
          n -= nb;

          if (n === 0) {
            if (nb === str.length) {
              ++c;
              if (p.next) this.head = p.next;else this.head = this.tail = null;
            } else {
              this.head = p;
              p.data = str.slice(nb);
            }

            break;
          }

          ++c;
        }

        this.length -= c;
        return ret;
      } // Consumes a specified amount of bytes from the buffered data.

    }, {
      key: "_getBuffer",
      value: function _getBuffer(n) {
        var ret = Buffer$4.allocUnsafe(n);
        var p = this.head;
        var c = 1;
        p.data.copy(ret);
        n -= p.data.length;

        while (p = p.next) {
          var buf = p.data;
          var nb = n > buf.length ? buf.length : n;
          buf.copy(ret, ret.length - n, 0, nb);
          n -= nb;

          if (n === 0) {
            if (nb === buf.length) {
              ++c;
              if (p.next) this.head = p.next;else this.head = this.tail = null;
            } else {
              this.head = p;
              p.data = buf.slice(nb);
            }

            break;
          }

          ++c;
        }

        this.length -= c;
        return ret;
      } // Make sure the linked list only shows the minimal necessary information.

    }, {
      key: custom,
      value: function value(_, options) {
        return inspect(this, _objectSpread$1({}, options, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: false
        }));
      }
    }]);

    return BufferList;
  }();

  function destroy(err, cb) {
    var _this = this;

    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;

    if (readableDestroyed || writableDestroyed) {
      if (cb) {
        cb(err);
      } else if (err) {
        if (!this._writableState) {
          process.nextTick(emitErrorNT, this, err);
        } else if (!this._writableState.errorEmitted) {
          this._writableState.errorEmitted = true;
          process.nextTick(emitErrorNT, this, err);
        }
      }

      return this;
    } // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks


    if (this._readableState) {
      this._readableState.destroyed = true;
    } // if this is a duplex stream mark the writable part as destroyed as well


    if (this._writableState) {
      this._writableState.destroyed = true;
    }

    this._destroy(err || null, function (err) {
      if (!cb && err) {
        if (!_this._writableState) {
          process.nextTick(emitErrorAndCloseNT, _this, err);
        } else if (!_this._writableState.errorEmitted) {
          _this._writableState.errorEmitted = true;
          process.nextTick(emitErrorAndCloseNT, _this, err);
        } else {
          process.nextTick(emitCloseNT, _this);
        }
      } else if (cb) {
        process.nextTick(emitCloseNT, _this);
        cb(err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    });

    return this;
  }

  function emitErrorAndCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
  }

  function emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit('close');
  }

  function undestroy() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }

    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  }

  function emitErrorNT(self, err) {
    self.emit('error', err);
  }

  function errorOrDestroy$2(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
  }

  var destroy_1 = {
    destroy: destroy,
    undestroy: undestroy,
    errorOrDestroy: errorOrDestroy$2
  };

  var errors = {};

  const codes = {};

  function createErrorType(code, message, Base) {
    if (!Base) {
      Base = Error;
    }

    function getMessage (arg1, arg2, arg3) {
      if (typeof message === 'string') {
        return message
      } else {
        return message(arg1, arg2, arg3)
      }
    }

    class NodeError extends Base {
      constructor (arg1, arg2, arg3) {
        super(getMessage(arg1, arg2, arg3));
      }
    }

    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;

    codes[code] = NodeError;
  }

  // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      const len = expected.length;
      expected = expected.map((i) => String(i));
      if (len > 2) {
        return `one of ${thing} ${expected.slice(0, len - 1).join(', ')}, or ` +
               expected[len - 1];
      } else if (len === 2) {
        return `one of ${thing} ${expected[0]} or ${expected[1]}`;
      } else {
        return `of ${thing} ${expected[0]}`;
      }
    } else {
      return `of ${thing} ${String(expected)}`;
    }
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
  function startsWith(str, search, pos) {
  	return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
  function endsWith(str, search, this_len) {
  	if (this_len === undefined || this_len > str.length) {
  		this_len = str.length;
  	}
  	return str.substring(this_len - search.length, this_len) === search;
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  function includes(str, search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }

  createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"'
  }, TypeError);
  createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    let determiner;
    if (typeof expected === 'string' && startsWith(expected, 'not ')) {
      determiner = 'must not be';
      expected = expected.replace(/^not /, '');
    } else {
      determiner = 'must be';
    }

    let msg;
    if (endsWith(name, ' argument')) {
      // For cases like 'first argument'
      msg = `The ${name} ${determiner} ${oneOf(expected, 'type')}`;
    } else {
      const type = includes(name, '.') ? 'property' : 'argument';
      msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, 'type')}`;
    }

    msg += `. Received type ${typeof actual}`;
    return msg;
  }, TypeError);
  createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
  createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
    return 'The ' + name + ' method is not implemented'
  });
  createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
  createErrorType('ERR_STREAM_DESTROYED', function (name) {
    return 'Cannot call ' + name + ' after a stream was destroyed';
  });
  createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
  createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
  createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
  createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
  createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
    return 'Unknown encoding: ' + arg
  }, TypeError);
  createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');

  errors.codes = codes;

  var ERR_INVALID_OPT_VALUE = errors.codes.ERR_INVALID_OPT_VALUE;

  function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
  }

  function getHighWaterMark$2(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

    if (hwm != null) {
      if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
        var name = isDuplex ? duplexKey : 'highWaterMark';
        throw new ERR_INVALID_OPT_VALUE(name, hwm);
      }

      return Math.floor(hwm);
    } // Default value


    return state.objectMode ? 16 : 16 * 1024;
  }

  var state = {
    getHighWaterMark: getHighWaterMark$2
  };

  var inherits = {exports: {}};

  var inherits_browser = {exports: {}};

  if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    inherits_browser.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    // old school shim for old browsers
    inherits_browser.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function () {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }

  try {
    var util = require('util');
    /* istanbul ignore next */
    if (typeof util.inherits !== 'function') throw '';
    inherits.exports = util.inherits;
  } catch (e) {
    /* istanbul ignore next */
    inherits.exports = inherits_browser.exports;
  }

  /**
   * For Node.js, simply re-export the core `util.deprecate` function.
   */

  var node = require$$5__default["default"].deprecate;

  var _stream_writable = Writable$1;
  // there will be only 2 of these for each stream


  function CorkedRequest(state) {
    var _this = this;

    this.next = null;
    this.entry = null;

    this.finish = function () {
      onCorkedFinish(_this, state);
    };
  }
  /* </replacement> */

  /*<replacement>*/


  var Duplex$3;
  /*</replacement>*/

  Writable$1.WritableState = WritableState;
  /*<replacement>*/

  var internalUtil = {
    deprecate: node
  };
  /*</replacement>*/

  /*<replacement>*/

  var Stream$1 = stream;
  /*</replacement>*/


  var Buffer$3 = require$$0__default["default"].Buffer;

  var OurUint8Array$1 = commonjsGlobal.Uint8Array || function () {};

  function _uint8ArrayToBuffer$1(chunk) {
    return Buffer$3.from(chunk);
  }

  function _isUint8Array$1(obj) {
    return Buffer$3.isBuffer(obj) || obj instanceof OurUint8Array$1;
  }

  var destroyImpl$1 = destroy_1;

  var _require$1 = state,
      getHighWaterMark$1 = _require$1.getHighWaterMark;

  var _require$codes$3 = errors.codes,
      ERR_INVALID_ARG_TYPE$2 = _require$codes$3.ERR_INVALID_ARG_TYPE,
      ERR_METHOD_NOT_IMPLEMENTED$2 = _require$codes$3.ERR_METHOD_NOT_IMPLEMENTED,
      ERR_MULTIPLE_CALLBACK$1 = _require$codes$3.ERR_MULTIPLE_CALLBACK,
      ERR_STREAM_CANNOT_PIPE = _require$codes$3.ERR_STREAM_CANNOT_PIPE,
      ERR_STREAM_DESTROYED$1 = _require$codes$3.ERR_STREAM_DESTROYED,
      ERR_STREAM_NULL_VALUES = _require$codes$3.ERR_STREAM_NULL_VALUES,
      ERR_STREAM_WRITE_AFTER_END = _require$codes$3.ERR_STREAM_WRITE_AFTER_END,
      ERR_UNKNOWN_ENCODING = _require$codes$3.ERR_UNKNOWN_ENCODING;

  var errorOrDestroy$1 = destroyImpl$1.errorOrDestroy;

  inherits.exports(Writable$1, Stream$1);

  function nop() {}

  function WritableState(options, stream, isDuplex) {
    Duplex$3 = Duplex$3 || _stream_duplex;
    options = options || {}; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex$3; // object stream flag to indicate whether or not this stream
    // contains buffers or objects.

    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()

    this.highWaterMark = getHighWaterMark$1(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

    this.finalCalled = false; // drain event flag.

    this.needDrain = false; // at the start of calling end()

    this.ending = false; // when end() has been called, and returned

    this.ended = false; // when 'finish' is emitted

    this.finished = false; // has it been destroyed

    this.destroyed = false; // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.

    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.

    this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.

    this.length = 0; // a flag to see when we're in the middle of a write.

    this.writing = false; // when true all writes will be buffered until .uncork() call

    this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.

    this.sync = true; // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.

    this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

    this.onwrite = function (er) {
      onwrite(stream, er);
    }; // the callback that the user supplies to write(chunk,encoding,cb)


    this.writecb = null; // the amount that is being written when _write is called.

    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted

    this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams

    this.prefinished = false; // True if the error was already emitted and should not be thrown again

    this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

    this.autoDestroy = !!options.autoDestroy; // count buffered requests

    this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two

    this.corkedRequestsFree = new CorkedRequest(this);
  }

  WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];

    while (current) {
      out.push(current);
      current = current.next;
    }

    return out;
  };

  (function () {
    try {
      Object.defineProperty(WritableState.prototype, 'buffer', {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
      });
    } catch (_) {}
  })(); // Test _writableState for inheritance to account for Duplex streams,
  // whose prototype chain only points to Readable.


  var realHasInstance;

  if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable$1, Symbol.hasInstance, {
      value: function value(object) {
        if (realHasInstance.call(this, object)) return true;
        if (this !== Writable$1) return false;
        return object && object._writableState instanceof WritableState;
      }
    });
  } else {
    realHasInstance = function realHasInstance(object) {
      return object instanceof this;
    };
  }

  function Writable$1(options) {
    Duplex$3 = Duplex$3 || _stream_duplex; // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5

    var isDuplex = this instanceof Duplex$3;
    if (!isDuplex && !realHasInstance.call(Writable$1, this)) return new Writable$1(options);
    this._writableState = new WritableState(options, this, isDuplex); // legacy.

    this.writable = true;

    if (options) {
      if (typeof options.write === 'function') this._write = options.write;
      if (typeof options.writev === 'function') this._writev = options.writev;
      if (typeof options.destroy === 'function') this._destroy = options.destroy;
      if (typeof options.final === 'function') this._final = options.final;
    }

    Stream$1.call(this);
  } // Otherwise people can pipe Writable streams, which is just wrong.


  Writable$1.prototype.pipe = function () {
    errorOrDestroy$1(this, new ERR_STREAM_CANNOT_PIPE());
  };

  function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

    errorOrDestroy$1(stream, er);
    process.nextTick(cb, er);
  } // Checks that a user-supplied chunk is valid, especially for the particular
  // mode the stream is in. Currently this means that `null` is never accepted
  // and undefined/non-string values are only allowed in object mode.


  function validChunk(stream, state, chunk, cb) {
    var er;

    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== 'string' && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE$2('chunk', ['string', 'Buffer'], chunk);
    }

    if (er) {
      errorOrDestroy$1(stream, er);
      process.nextTick(cb, er);
      return false;
    }

    return true;
  }

  Writable$1.prototype.write = function (chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;

    var isBuf = !state.objectMode && _isUint8Array$1(chunk);

    if (isBuf && !Buffer$3.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer$1(chunk);
    }

    if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }

    if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = nop;
    if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
  };

  Writable$1.prototype.cork = function () {
    this._writableState.corked++;
  };

  Writable$1.prototype.uncork = function () {
    var state = this._writableState;

    if (state.corked) {
      state.corked--;
      if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
  };

  Writable$1.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };

  Object.defineProperty(Writable$1.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });

  function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
      chunk = Buffer$3.from(chunk, encoding);
    }

    return chunk;
  }

  Object.defineProperty(Writable$1.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  }); // if we're already writing something, then just put this
  // in the queue, and wait our turn.  Otherwise, call _write
  // If we return false, then we need a drain event, so set that flag.

  function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk(state, chunk, encoding);

      if (chunk !== newChunk) {
        isBuf = true;
        encoding = 'buffer';
        chunk = newChunk;
      }
    }

    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

    if (!ret) state.needDrain = true;

    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = {
        chunk: chunk,
        encoding: encoding,
        isBuf: isBuf,
        callback: cb,
        next: null
      };

      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }

      state.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state, false, len, chunk, encoding, cb);
    }

    return ret;
  }

  function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED$1('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }

  function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;

    if (sync) {
      // defer the callback if we are being called synchronously
      // to avoid piling up things on the stack
      process.nextTick(cb, er); // this can emit finish, and it will always happen
      // after error

      process.nextTick(finishMaybe, stream, state);
      stream._writableState.errorEmitted = true;
      errorOrDestroy$1(stream, er);
    } else {
      // the caller expect this to happen before if
      // it is async
      cb(er);
      stream._writableState.errorEmitted = true;
      errorOrDestroy$1(stream, er); // this can emit finish, but finish must
      // always follow error

      finishMaybe(stream, state);
    }
  }

  function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  }

  function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK$1();
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);else {
      // Check if we're actually ready to finish, but don't emit yet
      var finished = needFinish(state) || stream.destroyed;

      if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer(stream, state);
      }

      if (sync) {
        process.nextTick(afterWrite, stream, state, finished, cb);
      } else {
        afterWrite(stream, state, finished, cb);
      }
    }
  }

  function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
  } // Must force callback to be called on nextTick, so that we don't
  // emit 'drain' before the write() consumer gets the 'false' return
  // value, and has a chance to attach a 'drain' listener.


  function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit('drain');
    }
  } // if there's something in the buffer waiting, then process it


  function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;

    if (stream._writev && entry && entry.next) {
      // Fast case, write everything using _writev()
      var l = state.bufferedRequestCount;
      var buffer = new Array(l);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      var allBuffers = true;

      while (entry) {
        buffer[count] = entry;
        if (!entry.isBuf) allBuffers = false;
        entry = entry.next;
        count += 1;
      }

      buffer.allBuffers = allBuffers;
      doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
      // as the hot path ends with doWrite

      state.pendingcb++;
      state.lastBufferedRequest = null;

      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest(state);
      }

      state.bufferedRequestCount = 0;
    } else {
      // Slow case, write chunks one-by-one
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;
        doWrite(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
        // it means that we need to wait until it does.
        // also, that means that the chunk and cb are currently
        // being processed, so move the buffer counter past them.

        if (state.writing) {
          break;
        }
      }

      if (entry === null) state.lastBufferedRequest = null;
    }

    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  }

  Writable$1.prototype._write = function (chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED$2('_write()'));
  };

  Writable$1.prototype._writev = null;

  Writable$1.prototype.end = function (chunk, encoding, cb) {
    var state = this._writableState;

    if (typeof chunk === 'function') {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }

    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

    if (state.corked) {
      state.corked = 1;
      this.uncork();
    } // ignore unnecessary end() calls.


    if (!state.ending) endWritable(this, state, cb);
    return this;
  };

  Object.defineProperty(Writable$1.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });

  function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  }

  function callFinal(stream, state) {
    stream._final(function (err) {
      state.pendingcb--;

      if (err) {
        errorOrDestroy$1(stream, err);
      }

      state.prefinished = true;
      stream.emit('prefinish');
      finishMaybe(stream, state);
    });
  }

  function prefinish$1(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
      if (typeof stream._final === 'function' && !state.destroyed) {
        state.pendingcb++;
        state.finalCalled = true;
        process.nextTick(callFinal, stream, state);
      } else {
        state.prefinished = true;
        stream.emit('prefinish');
      }
    }
  }

  function finishMaybe(stream, state) {
    var need = needFinish(state);

    if (need) {
      prefinish$1(stream, state);

      if (state.pendingcb === 0) {
        state.finished = true;
        stream.emit('finish');

        if (state.autoDestroy) {
          // In case of duplex streams we need a way to detect
          // if the readable side is ready for autoDestroy as well
          var rState = stream._readableState;

          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream.destroy();
          }
        }
      }
    }

    return need;
  }

  function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);

    if (cb) {
      if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
    }

    state.ended = true;
    stream.writable = false;
  }

  function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;

    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    } // reuse the free corkReq.


    state.corkedRequestsFree.next = corkReq;
  }

  Object.defineProperty(Writable$1.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._writableState === undefined) {
        return false;
      }

      return this._writableState.destroyed;
    },
    set: function set(value) {
      // we ignore the value if the stream
      // has not been initialized yet
      if (!this._writableState) {
        return;
      } // backward compatibility, the user is explicitly
      // managing destroyed


      this._writableState.destroyed = value;
    }
  });
  Writable$1.prototype.destroy = destroyImpl$1.destroy;
  Writable$1.prototype._undestroy = destroyImpl$1.undestroy;

  Writable$1.prototype._destroy = function (err, cb) {
    cb(err);
  };

  /*<replacement>*/

  var objectKeys = Object.keys || function (obj) {
    var keys = [];

    for (var key in obj) {
      keys.push(key);
    }

    return keys;
  };
  /*</replacement>*/


  var _stream_duplex = Duplex$2;

  var Readable$1 = _stream_readable;

  var Writable = _stream_writable;

  inherits.exports(Duplex$2, Readable$1);

  {
    // Allow the keys array to be GC'ed.
    var keys = objectKeys(Writable.prototype);

    for (var v = 0; v < keys.length; v++) {
      var method = keys[v];
      if (!Duplex$2.prototype[method]) Duplex$2.prototype[method] = Writable.prototype[method];
    }
  }

  function Duplex$2(options) {
    if (!(this instanceof Duplex$2)) return new Duplex$2(options);
    Readable$1.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;

    if (options) {
      if (options.readable === false) this.readable = false;
      if (options.writable === false) this.writable = false;

      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once('end', onend);
      }
    }
  }

  Object.defineProperty(Duplex$2.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex$2.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex$2.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  }); // the no-half-open enforcer

  function onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return; // no more data can be written.
    // But allow more writes to happen in this tick.

    process.nextTick(onEndNT, this);
  }

  function onEndNT(self) {
    self.end();
  }

  Object.defineProperty(Duplex$2.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._readableState === undefined || this._writableState === undefined) {
        return false;
      }

      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
      // we ignore the value if the stream
      // has not been initialized yet
      if (this._readableState === undefined || this._writableState === undefined) {
        return;
      } // backward compatibility, the user is explicitly
      // managing destroyed


      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });

  var string_decoder = {};

  var safeBuffer = {exports: {}};

  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

  (function (module, exports) {
  /* eslint-disable node/no-deprecated-api */
  var buffer = require$$0__default["default"];
  var Buffer = buffer.Buffer;

  // alternative to using Object.keys for old browsers
  function copyProps (src, dst) {
    for (var key in src) {
      dst[key] = src[key];
    }
  }
  if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
  } else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
  }

  function SafeBuffer (arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length)
  }

  SafeBuffer.prototype = Object.create(Buffer.prototype);

  // Copy static methods from Buffer
  copyProps(Buffer, SafeBuffer);

  SafeBuffer.from = function (arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
      throw new TypeError('Argument must not be a number')
    }
    return Buffer(arg, encodingOrOffset, length)
  };

  SafeBuffer.alloc = function (size, fill, encoding) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number')
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
      if (typeof encoding === 'string') {
        buf.fill(fill, encoding);
      } else {
        buf.fill(fill);
      }
    } else {
      buf.fill(0);
    }
    return buf
  };

  SafeBuffer.allocUnsafe = function (size) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number')
    }
    return Buffer(size)
  };

  SafeBuffer.allocUnsafeSlow = function (size) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number')
    }
    return buffer.SlowBuffer(size)
  };
  }(safeBuffer, safeBuffer.exports));

  /*<replacement>*/

  var Buffer$2 = safeBuffer.exports.Buffer;
  /*</replacement>*/

  var isEncoding = Buffer$2.isEncoding || function (encoding) {
    encoding = '' + encoding;
    switch (encoding && encoding.toLowerCase()) {
      case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
        return true;
      default:
        return false;
    }
  };

  function _normalizeEncoding(enc) {
    if (!enc) return 'utf8';
    var retried;
    while (true) {
      switch (enc) {
        case 'utf8':
        case 'utf-8':
          return 'utf8';
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return 'utf16le';
        case 'latin1':
        case 'binary':
          return 'latin1';
        case 'base64':
        case 'ascii':
        case 'hex':
          return enc;
        default:
          if (retried) return; // undefined
          enc = ('' + enc).toLowerCase();
          retried = true;
      }
    }
  }
  // Do not cache `Buffer.isEncoding` when checking encoding names as some
  // modules monkey-patch it to support additional encodings
  function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== 'string' && (Buffer$2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
    return nenc || enc;
  }

  // StringDecoder provides an interface for efficiently splitting a series of
  // buffers into a series of JS strings without breaking apart multi-byte
  // characters.
  string_decoder.StringDecoder = StringDecoder$1;
  function StringDecoder$1(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch (this.encoding) {
      case 'utf16le':
        this.text = utf16Text;
        this.end = utf16End;
        nb = 4;
        break;
      case 'utf8':
        this.fillLast = utf8FillLast;
        nb = 4;
        break;
      case 'base64':
        this.text = base64Text;
        this.end = base64End;
        nb = 3;
        break;
      default:
        this.write = simpleWrite;
        this.end = simpleEnd;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer$2.allocUnsafe(nb);
  }

  StringDecoder$1.prototype.write = function (buf) {
    if (buf.length === 0) return '';
    var r;
    var i;
    if (this.lastNeed) {
      r = this.fillLast(buf);
      if (r === undefined) return '';
      i = this.lastNeed;
      this.lastNeed = 0;
    } else {
      i = 0;
    }
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || '';
  };

  StringDecoder$1.prototype.end = utf8End;

  // Returns only complete characters in a Buffer
  StringDecoder$1.prototype.text = utf8Text;

  // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
  StringDecoder$1.prototype.fillLast = function (buf) {
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
  };

  // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
  // continuation byte. If an invalid byte is detected, -2 is returned.
  function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
  }

  // Checks at most 3 bytes at the end of a Buffer in order to detect an
  // incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
  // needed to complete the UTF-8 character (if applicable) are returned.
  function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0) self.lastNeed = nb - 1;
      return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0) self.lastNeed = nb - 2;
      return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0) {
        if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
      }
      return nb;
    }
    return 0;
  }

  // Validates as many continuation bytes for a multi-byte UTF-8 character as
  // needed or are available. If we see a non-continuation byte where we expect
  // one, we "replace" the validated continuation bytes we've seen so far with
  // a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
  // behavior. The continuation byte check is included three times in the case
  // where all of the continuation bytes for a character exist in the same buffer.
  // It is also done this way as a slight performance increase instead of using a
  // loop.
  function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
      self.lastNeed = 0;
      return '\ufffd';
    }
    if (self.lastNeed > 1 && buf.length > 1) {
      if ((buf[1] & 0xC0) !== 0x80) {
        self.lastNeed = 1;
        return '\ufffd';
      }
      if (self.lastNeed > 2 && buf.length > 2) {
        if ((buf[2] & 0xC0) !== 0x80) {
          self.lastNeed = 2;
          return '\ufffd';
        }
      }
    }
  }

  // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
  function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, p, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
  }

  // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
  // partial character, the character's bytes are buffered until the required
  // number of bytes are available.
  function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString('utf8', i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString('utf8', i, end);
  }

  // For UTF-8, a replacement character is added when ending on a partial
  // character.
  function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + '\ufffd';
    return r;
  }

  // UTF-16LE typically needs two bytes per character, but even if we have an even
  // number of bytes available, we need to check if we end on a leading/high
  // surrogate. In that case, we need to wait for the next two bytes in order to
  // decode the last character properly.
  function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
      var r = buf.toString('utf16le', i);
      if (r) {
        var c = r.charCodeAt(r.length - 1);
        if (c >= 0xD800 && c <= 0xDBFF) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
          return r.slice(0, -1);
        }
      }
      return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString('utf16le', i, buf.length - 1);
  }

  // For UTF-16LE we do not explicitly append special replacement characters if we
  // end on a partial character, we simply let v8 handle that.
  function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) {
      var end = this.lastTotal - this.lastNeed;
      return r + this.lastChar.toString('utf16le', 0, end);
    }
    return r;
  }

  function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString('base64', i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
      this.lastChar[0] = buf[buf.length - 1];
    } else {
      this.lastChar[0] = buf[buf.length - 2];
      this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString('base64', i, buf.length - n);
  }

  function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
    return r;
  }

  // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
  function simpleWrite(buf) {
    return buf.toString(this.encoding);
  }

  function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : '';
  }

  var ERR_STREAM_PREMATURE_CLOSE = errors.codes.ERR_STREAM_PREMATURE_CLOSE;

  function once$1(callback) {
    var called = false;
    return function () {
      if (called) return;
      called = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      callback.apply(this, args);
    };
  }

  function noop$1() {}

  function isRequest$1(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
  }

  function eos$1(stream, opts, callback) {
    if (typeof opts === 'function') return eos$1(stream, null, opts);
    if (!opts) opts = {};
    callback = once$1(callback || noop$1);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;

    var onlegacyfinish = function onlegacyfinish() {
      if (!stream.writable) onfinish();
    };

    var writableEnded = stream._writableState && stream._writableState.finished;

    var onfinish = function onfinish() {
      writable = false;
      writableEnded = true;
      if (!readable) callback.call(stream);
    };

    var readableEnded = stream._readableState && stream._readableState.endEmitted;

    var onend = function onend() {
      readable = false;
      readableEnded = true;
      if (!writable) callback.call(stream);
    };

    var onerror = function onerror(err) {
      callback.call(stream, err);
    };

    var onclose = function onclose() {
      var err;

      if (readable && !readableEnded) {
        if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }

      if (writable && !writableEnded) {
        if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
    };

    var onrequest = function onrequest() {
      stream.req.on('finish', onfinish);
    };

    if (isRequest$1(stream)) {
      stream.on('complete', onfinish);
      stream.on('abort', onclose);
      if (stream.req) onrequest();else stream.on('request', onrequest);
    } else if (writable && !stream._writableState) {
      // legacy streams
      stream.on('end', onlegacyfinish);
      stream.on('close', onlegacyfinish);
    }

    stream.on('end', onend);
    stream.on('finish', onfinish);
    if (opts.error !== false) stream.on('error', onerror);
    stream.on('close', onclose);
    return function () {
      stream.removeListener('complete', onfinish);
      stream.removeListener('abort', onclose);
      stream.removeListener('request', onrequest);
      if (stream.req) stream.req.removeListener('finish', onfinish);
      stream.removeListener('end', onlegacyfinish);
      stream.removeListener('close', onlegacyfinish);
      stream.removeListener('finish', onfinish);
      stream.removeListener('end', onend);
      stream.removeListener('error', onerror);
      stream.removeListener('close', onclose);
    };
  }

  var endOfStream = eos$1;

  var _Object$setPrototypeO;

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var finished = endOfStream;

  var kLastResolve = Symbol('lastResolve');
  var kLastReject = Symbol('lastReject');
  var kError = Symbol('error');
  var kEnded = Symbol('ended');
  var kLastPromise = Symbol('lastPromise');
  var kHandlePromise = Symbol('handlePromise');
  var kStream = Symbol('stream');

  function createIterResult(value, done) {
    return {
      value: value,
      done: done
    };
  }

  function readAndResolve(iter) {
    var resolve = iter[kLastResolve];

    if (resolve !== null) {
      var data = iter[kStream].read(); // we defer if data is null
      // we can be expecting either 'end' or
      // 'error'

      if (data !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve(createIterResult(data, false));
      }
    }
  }

  function onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick(readAndResolve, iter);
  }

  function wrapForNext(lastPromise, iter) {
    return function (resolve, reject) {
      lastPromise.then(function () {
        if (iter[kEnded]) {
          resolve(createIterResult(undefined, true));
          return;
        }

        iter[kHandlePromise](resolve, reject);
      }, reject);
    };
  }

  var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
  var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream() {
      return this[kStream];
    },

    next: function next() {
      var _this = this;

      // if we have detected an error in the meanwhile
      // reject straight away
      var error = this[kError];

      if (error !== null) {
        return Promise.reject(error);
      }

      if (this[kEnded]) {
        return Promise.resolve(createIterResult(undefined, true));
      }

      if (this[kStream].destroyed) {
        // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function (resolve, reject) {
          process.nextTick(function () {
            if (_this[kError]) {
              reject(_this[kError]);
            } else {
              resolve(createIterResult(undefined, true));
            }
          });
        });
      } // if we have multiple next() calls
      // we will wait for the previous Promise to finish
      // this logic is optimized to support for await loops,
      // where next() is only called once at a time


      var lastPromise = this[kLastPromise];
      var promise;

      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        // fast path needed to support multiple this.push()
        // without triggering the next() queue
        var data = this[kStream].read();

        if (data !== null) {
          return Promise.resolve(createIterResult(data, false));
        }

        promise = new Promise(this[kHandlePromise]);
      }

      this[kLastPromise] = promise;
      return promise;
    }
  }, _defineProperty$1(_Object$setPrototypeO, Symbol.asyncIterator, function () {
    return this;
  }), _defineProperty$1(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;

    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function (resolve, reject) {
      _this2[kStream].destroy(null, function (err) {
        if (err) {
          reject(err);
          return;
        }

        resolve(createIterResult(undefined, true));
      });
    });
  }), _Object$setPrototypeO), AsyncIteratorPrototype);

  var createReadableStreamAsyncIterator$1 = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;

    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty$1(_Object$create, kStream, {
      value: stream,
      writable: true
    }), _defineProperty$1(_Object$create, kLastResolve, {
      value: null,
      writable: true
    }), _defineProperty$1(_Object$create, kLastReject, {
      value: null,
      writable: true
    }), _defineProperty$1(_Object$create, kError, {
      value: null,
      writable: true
    }), _defineProperty$1(_Object$create, kEnded, {
      value: stream._readableState.endEmitted,
      writable: true
    }), _defineProperty$1(_Object$create, kHandlePromise, {
      value: function value(resolve, reject) {
        var data = iterator[kStream].read();

        if (data) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(data, false));
        } else {
          iterator[kLastResolve] = resolve;
          iterator[kLastReject] = reject;
        }
      },
      writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function (err) {
      if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
        var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
        // returned by next() and store the error

        if (reject !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          reject(err);
        }

        iterator[kError] = err;
        return;
      }

      var resolve = iterator[kLastResolve];

      if (resolve !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(undefined, true));
      }

      iterator[kEnded] = true;
    });
    stream.on('readable', onReadable.bind(null, iterator));
    return iterator;
  };

  var async_iterator = createReadableStreamAsyncIterator$1;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var ERR_INVALID_ARG_TYPE$1 = errors.codes.ERR_INVALID_ARG_TYPE;

  function from$1(Readable, iterable, opts) {
    var iterator;

    if (iterable && typeof iterable.next === 'function') {
      iterator = iterable;
    } else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();else throw new ERR_INVALID_ARG_TYPE$1('iterable', ['Iterable'], iterable);

    var readable = new Readable(_objectSpread({
      objectMode: true
    }, opts)); // Reading boolean to protect against _read
    // being called before last iteration completion.

    var reading = false;

    readable._read = function () {
      if (!reading) {
        reading = true;
        next();
      }
    };

    function next() {
      return _next2.apply(this, arguments);
    }

    function _next2() {
      _next2 = _asyncToGenerator(function* () {
        try {
          var _ref = yield iterator.next(),
              value = _ref.value,
              done = _ref.done;

          if (done) {
            readable.push(null);
          } else if (readable.push((yield value))) {
            next();
          } else {
            reading = false;
          }
        } catch (err) {
          readable.destroy(err);
        }
      });
      return _next2.apply(this, arguments);
    }

    return readable;
  }

  var from_1 = from$1;

  var _stream_readable = Readable;
  /*<replacement>*/

  var Duplex$1;
  /*</replacement>*/

  Readable.ReadableState = ReadableState;
  /*<replacement>*/

  require$$0__default$1["default"].EventEmitter;

  var EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
  };
  /*</replacement>*/

  /*<replacement>*/


  var Stream = stream;
  /*</replacement>*/


  var Buffer$1 = require$$0__default["default"].Buffer;

  var OurUint8Array = commonjsGlobal.Uint8Array || function () {};

  function _uint8ArrayToBuffer(chunk) {
    return Buffer$1.from(chunk);
  }

  function _isUint8Array(obj) {
    return Buffer$1.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  /*<replacement>*/


  var debugUtil = require$$5__default["default"];

  var debug;

  if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog('stream');
  } else {
    debug = function debug() {};
  }
  /*</replacement>*/


  var BufferList = buffer_list;

  var destroyImpl = destroy_1;

  var _require = state,
      getHighWaterMark = _require.getHighWaterMark;

  var _require$codes$2 = errors.codes,
      ERR_INVALID_ARG_TYPE = _require$codes$2.ERR_INVALID_ARG_TYPE,
      ERR_STREAM_PUSH_AFTER_EOF = _require$codes$2.ERR_STREAM_PUSH_AFTER_EOF,
      ERR_METHOD_NOT_IMPLEMENTED$1 = _require$codes$2.ERR_METHOD_NOT_IMPLEMENTED,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes$2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


  var StringDecoder;
  var createReadableStreamAsyncIterator;
  var from;

  inherits.exports(Readable, Stream);

  var errorOrDestroy = destroyImpl.errorOrDestroy;
  var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

  function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.

    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }

  function ReadableState(options, stream, isDuplex) {
    Duplex$1 = Duplex$1 || _stream_duplex;
    options = options || {}; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.

    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex$1; // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away

    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"

    this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()

    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.

    this.sync = true; // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.

    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true; // Should close be emitted on destroy. Defaults to true.

    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

    this.autoDestroy = !!options.autoDestroy; // has it been destroyed

    this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.

    this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

    this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;

    if (options.encoding) {
      if (!StringDecoder) StringDecoder = string_decoder.StringDecoder;
      this.decoder = new StringDecoder(options.encoding);
      this.encoding = options.encoding;
    }
  }

  function Readable(options) {
    Duplex$1 = Duplex$1 || _stream_duplex;
    if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5

    var isDuplex = this instanceof Duplex$1;
    this._readableState = new ReadableState(options, this, isDuplex); // legacy

    this.readable = true;

    if (options) {
      if (typeof options.read === 'function') this._read = options.read;
      if (typeof options.destroy === 'function') this._destroy = options.destroy;
    }

    Stream.call(this);
  }

  Object.defineProperty(Readable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._readableState === undefined) {
        return false;
      }

      return this._readableState.destroyed;
    },
    set: function set(value) {
      // we ignore the value if the stream
      // has not been initialized yet
      if (!this._readableState) {
        return;
      } // backward compatibility, the user is explicitly
      // managing destroyed


      this._readableState.destroyed = value;
    }
  });
  Readable.prototype.destroy = destroyImpl.destroy;
  Readable.prototype._undestroy = destroyImpl.undestroy;

  Readable.prototype._destroy = function (err, cb) {
    cb(err);
  }; // Manually shove something into the read() buffer.
  // This returns true if the highWaterMark has not been hit yet,
  // similar to how Writable.write() returns true if you should
  // write() some more.


  Readable.prototype.push = function (chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;

    if (!state.objectMode) {
      if (typeof chunk === 'string') {
        encoding = encoding || state.defaultEncoding;

        if (encoding !== state.encoding) {
          chunk = Buffer$1.from(chunk, encoding);
          encoding = '';
        }

        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }

    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
  }; // Unshift should *always* be something directly out of read()


  Readable.prototype.unshift = function (chunk) {
    return readableAddChunk(this, chunk, null, true, false);
  };

  function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug('readableAddChunk', chunk);
    var state = stream._readableState;

    if (chunk === null) {
      state.reading = false;
      onEofChunk(stream, state);
    } else {
      var er;
      if (!skipChunkCheck) er = chunkInvalid(state, chunk);

      if (er) {
        errorOrDestroy(stream, er);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer$1.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }

        if (addToFront) {
          if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
        } else if (state.ended) {
          errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state.destroyed) {
          return false;
        } else {
          state.reading = false;

          if (state.decoder && !encoding) {
            chunk = state.decoder.write(chunk);
            if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
          } else {
            addChunk(stream, state, chunk, false);
          }
        }
      } else if (!addToFront) {
        state.reading = false;
        maybeReadMore(stream, state);
      }
    } // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.


    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
  }

  function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
      state.awaitDrain = 0;
      stream.emit('data', chunk);
    } else {
      // update the buffer info.
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
      if (state.needReadable) emitReadable(stream);
    }

    maybeReadMore(stream, state);
  }

  function chunkInvalid(state, chunk) {
    var er;

    if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
    }

    return er;
  }

  Readable.prototype.isPaused = function () {
    return this._readableState.flowing === false;
  }; // backwards compatibility.


  Readable.prototype.setEncoding = function (enc) {
    if (!StringDecoder) StringDecoder = string_decoder.StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

    this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

    var p = this._readableState.buffer.head;
    var content = '';

    while (p !== null) {
      content += decoder.write(p.data);
      p = p.next;
    }

    this._readableState.buffer.clear();

    if (content !== '') this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  }; // Don't raise the hwm > 1GB


  var MAX_HWM = 0x40000000;

  function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
      // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
      n = MAX_HWM;
    } else {
      // Get the next highest power of 2 to prevent increasing hwm excessively in
      // tiny amounts
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }

    return n;
  } // This function is designed to be inlinable, so please take care when making
  // changes to the function body.


  function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;

    if (n !== n) {
      // Only flow one buffer at a time
      if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
    } // If we're asking for more than the current hwm, then raise the hwm.


    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n; // Don't have enough

    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }

    return state.length;
  } // you can override either this method, or the async _read(n) below.


  Readable.prototype.read = function (n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.

    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
      debug('read: emitReadable', state.length, state.ended);
      if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
      return null;
    }

    n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

    if (n === 0 && state.ended) {
      if (state.length === 0) endReadable(this);
      return null;
    } // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.


    var doRead = state.needReadable;
    debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

    if (state.length === 0 || state.length - n < state.highWaterMark) {
      doRead = true;
      debug('length less than watermark', doRead);
    } // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.


    if (state.ended || state.reading) {
      doRead = false;
      debug('reading or ended', doRead);
    } else if (doRead) {
      debug('do read');
      state.reading = true;
      state.sync = true; // if the length is currently zero, then we *need* a readable event.

      if (state.length === 0) state.needReadable = true; // call internal read method

      this._read(state.highWaterMark);

      state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
      // and we need to re-evaluate how much data we can return to the user.

      if (!state.reading) n = howMuchToRead(nOrig, state);
    }

    var ret;
    if (n > 0) ret = fromList(n, state);else ret = null;

    if (ret === null) {
      state.needReadable = state.length <= state.highWaterMark;
      n = 0;
    } else {
      state.length -= n;
      state.awaitDrain = 0;
    }

    if (state.length === 0) {
      // If we have nothing in the buffer, then we want to know
      // as soon as we *do* get something into the buffer.
      if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

      if (nOrig !== n && state.ended) endReadable(this);
    }

    if (ret !== null) this.emit('data', ret);
    return ret;
  };

  function onEofChunk(stream, state) {
    debug('onEofChunk');
    if (state.ended) return;

    if (state.decoder) {
      var chunk = state.decoder.end();

      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }

    state.ended = true;

    if (state.sync) {
      // if we are sync, wait until next tick to emit the data.
      // Otherwise we risk emitting data in the flow()
      // the readable code triggers during a read() call
      emitReadable(stream);
    } else {
      // emit 'readable' now to make sure it gets picked up.
      state.needReadable = false;

      if (!state.emittedReadable) {
        state.emittedReadable = true;
        emitReadable_(stream);
      }
    }
  } // Don't emit readable right away in sync mode, because this can trigger
  // another read() call => stack overflow.  This way, it might trigger
  // a nextTick recursion warning, but that's not so bad.


  function emitReadable(stream) {
    var state = stream._readableState;
    debug('emitReadable', state.needReadable, state.emittedReadable);
    state.needReadable = false;

    if (!state.emittedReadable) {
      debug('emitReadable', state.flowing);
      state.emittedReadable = true;
      process.nextTick(emitReadable_, stream);
    }
  }

  function emitReadable_(stream) {
    var state = stream._readableState;
    debug('emitReadable_', state.destroyed, state.length, state.ended);

    if (!state.destroyed && (state.length || state.ended)) {
      stream.emit('readable');
      state.emittedReadable = false;
    } // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.


    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
  } // at this point, the user has presumably seen the 'readable' event,
  // and called read() to consume some data.  that may have triggered
  // in turn another _read(n) call, in which case reading = true if
  // it's in progress.
  // However, if we're not ended, or reading, and the length < hwm,
  // then go ahead and try to read some more preemptively.


  function maybeReadMore(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      process.nextTick(maybeReadMore_, stream, state);
    }
  }

  function maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
      var len = state.length;
      debug('maybeReadMore read 0');
      stream.read(0);
      if (len === state.length) // didn't get any data, stop spinning.
        break;
    }

    state.readingMore = false;
  } // abstract method.  to be overridden in specific implementation classes.
  // call cb(er, data) where data is <= n in length.
  // for virtual (non-string, non-buffer) streams, "length" is somewhat
  // arbitrary, and perhaps not very meaningful.


  Readable.prototype._read = function (n) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED$1('_read()'));
  };

  Readable.prototype.pipe = function (dest, pipeOpts) {
    var src = this;
    var state = this._readableState;

    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;

      case 1:
        state.pipes = [state.pipes, dest];
        break;

      default:
        state.pipes.push(dest);
        break;
    }

    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
    dest.on('unpipe', onunpipe);

    function onunpipe(readable, unpipeInfo) {
      debug('onunpipe');

      if (readable === src) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }

    function onend() {
      debug('onend');
      dest.end();
    } // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.


    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;

    function cleanup() {
      debug('cleanup'); // cleanup event handlers once the pipe is broken

      dest.removeListener('close', onclose);
      dest.removeListener('finish', onfinish);
      dest.removeListener('drain', ondrain);
      dest.removeListener('error', onerror);
      dest.removeListener('unpipe', onunpipe);
      src.removeListener('end', onend);
      src.removeListener('end', unpipe);
      src.removeListener('data', ondata);
      cleanedUp = true; // if the reader is waiting for a drain event from this
      // specific writer, then it would cause it to never start
      // flowing again.
      // So, if this is awaiting a drain, then we just call it now.
      // If we don't know, then assume that we are waiting for one.

      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }

    src.on('data', ondata);

    function ondata(chunk) {
      debug('ondata');
      var ret = dest.write(chunk);
      debug('dest.write', ret);

      if (ret === false) {
        // If the user unpiped during `dest.write()`, it is possible
        // to get stuck in a permanently paused state if that write
        // also returned false.
        // => Check whether `dest` is still a piping destination.
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
          debug('false write response, pause', state.awaitDrain);
          state.awaitDrain++;
        }

        src.pause();
      }
    } // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.


    function onerror(er) {
      debug('onerror', er);
      unpipe();
      dest.removeListener('error', onerror);
      if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
    } // Make sure our error handler is attached before userland ones.


    prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

    function onclose() {
      dest.removeListener('finish', onfinish);
      unpipe();
    }

    dest.once('close', onclose);

    function onfinish() {
      debug('onfinish');
      dest.removeListener('close', onclose);
      unpipe();
    }

    dest.once('finish', onfinish);

    function unpipe() {
      debug('unpipe');
      src.unpipe(dest);
    } // tell the dest that it's being piped to


    dest.emit('pipe', src); // start the flow if it hasn't been started already.

    if (!state.flowing) {
      debug('pipe resume');
      src.resume();
    }

    return dest;
  };

  function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
      var state = src._readableState;
      debug('pipeOnDrain', state.awaitDrain);
      if (state.awaitDrain) state.awaitDrain--;

      if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
        state.flowing = true;
        flow(src);
      }
    };
  }

  Readable.prototype.unpipe = function (dest) {
    var state = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    }; // if we're not piping anywhere, then do nothing.

    if (state.pipesCount === 0) return this; // just one destination.  most common case.

    if (state.pipesCount === 1) {
      // passed in one, but it's not the right one.
      if (dest && dest !== state.pipes) return this;
      if (!dest) dest = state.pipes; // got a match.

      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest) dest.emit('unpipe', this, unpipeInfo);
      return this;
    } // slow case. multiple pipe destinations.


    if (!dest) {
      // remove all.
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;

      for (var i = 0; i < len; i++) {
        dests[i].emit('unpipe', this, {
          hasUnpiped: false
        });
      }

      return this;
    } // try to find the right one.


    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this, unpipeInfo);
    return this;
  }; // set up data events if they are asked for
  // Ensure readable listeners eventually get something


  Readable.prototype.on = function (ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;

    if (ev === 'data') {
      // update readableListening so that resume() may be a no-op
      // a few lines down. This is needed to support once('readable').
      state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

      if (state.flowing !== false) this.resume();
    } else if (ev === 'readable') {
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.flowing = false;
        state.emittedReadable = false;
        debug('on readable', state.length, state.reading);

        if (state.length) {
          emitReadable(this);
        } else if (!state.reading) {
          process.nextTick(nReadingNextTick, this);
        }
      }
    }

    return res;
  };

  Readable.prototype.addListener = Readable.prototype.on;

  Readable.prototype.removeListener = function (ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);

    if (ev === 'readable') {
      // We need to check if there is someone still listening to
      // readable and reset the state. However this needs to happen
      // after readable has been emitted but before I/O (nextTick) to
      // support once('readable', fn) cycles. This means that calling
      // resume within the same tick will have no
      // effect.
      process.nextTick(updateReadableListening, this);
    }

    return res;
  };

  Readable.prototype.removeAllListeners = function (ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);

    if (ev === 'readable' || ev === undefined) {
      // We need to check if there is someone still listening to
      // readable and reset the state. However this needs to happen
      // after readable has been emitted but before I/O (nextTick) to
      // support once('readable', fn) cycles. This means that calling
      // resume within the same tick will have no
      // effect.
      process.nextTick(updateReadableListening, this);
    }

    return res;
  };

  function updateReadableListening(self) {
    var state = self._readableState;
    state.readableListening = self.listenerCount('readable') > 0;

    if (state.resumeScheduled && !state.paused) {
      // flowing needs to be set to true now, otherwise
      // the upcoming resume will not flow.
      state.flowing = true; // crude way to check if we should resume
    } else if (self.listenerCount('data') > 0) {
      self.resume();
    }
  }

  function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
  } // pause() and resume() are remnants of the legacy readable stream API
  // If the user uses them, then switch into old mode.


  Readable.prototype.resume = function () {
    var state = this._readableState;

    if (!state.flowing) {
      debug('resume'); // we flow only if there is no one listening
      // for readable, but we still have to call
      // resume()

      state.flowing = !state.readableListening;
      resume(this, state);
    }

    state.paused = false;
    return this;
  };

  function resume(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      process.nextTick(resume_, stream, state);
    }
  }

  function resume_(stream, state) {
    debug('resume', state.reading);

    if (!state.reading) {
      stream.read(0);
    }

    state.resumeScheduled = false;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
  }

  Readable.prototype.pause = function () {
    debug('call pause flowing=%j', this._readableState.flowing);

    if (this._readableState.flowing !== false) {
      debug('pause');
      this._readableState.flowing = false;
      this.emit('pause');
    }

    this._readableState.paused = true;
    return this;
  };

  function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);

    while (state.flowing && stream.read() !== null) {
    }
  } // wrap an old-style stream as the async data source.
  // This is *not* part of the readable stream interface.
  // It is an ugly unfortunate mess of history.


  Readable.prototype.wrap = function (stream) {
    var _this = this;

    var state = this._readableState;
    var paused = false;
    stream.on('end', function () {
      debug('wrapped end');

      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) _this.push(chunk);
      }

      _this.push(null);
    });
    stream.on('data', function (chunk) {
      debug('wrapped data');
      if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

      if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

      var ret = _this.push(chunk);

      if (!ret) {
        paused = true;
        stream.pause();
      }
    }); // proxy all the other methods.
    // important when wrapping filters and duplexes.

    for (var i in stream) {
      if (this[i] === undefined && typeof stream[i] === 'function') {
        this[i] = function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
          };
        }(i);
      }
    } // proxy certain important events.


    for (var n = 0; n < kProxyEvents.length; n++) {
      stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    } // when we try to consume some more bytes, simply unpause the
    // underlying stream.


    this._read = function (n) {
      debug('wrapped _read', n);

      if (paused) {
        paused = false;
        stream.resume();
      }
    };

    return this;
  };

  if (typeof Symbol === 'function') {
    Readable.prototype[Symbol.asyncIterator] = function () {
      if (createReadableStreamAsyncIterator === undefined) {
        createReadableStreamAsyncIterator = async_iterator;
      }

      return createReadableStreamAsyncIterator(this);
    };
  }

  Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable.prototype, 'readableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable.prototype, 'readableFlowing', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.flowing;
    },
    set: function set(state) {
      if (this._readableState) {
        this._readableState.flowing = state;
      }
    }
  }); // exposed for testing purposes only.

  Readable._fromList = fromList;
  Object.defineProperty(Readable.prototype, 'readableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.length;
    }
  }); // Pluck off n bytes from an array of buffers.
  // Length is the combined lengths of all the buffers in the list.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.

  function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
      // read it all, truncate the list
      if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      // read part of list
      ret = state.buffer.consume(n, state.decoder);
    }
    return ret;
  }

  function endReadable(stream) {
    var state = stream._readableState;
    debug('endReadable', state.endEmitted);

    if (!state.endEmitted) {
      state.ended = true;
      process.nextTick(endReadableNT, state, stream);
    }
  }

  function endReadableNT(state, stream) {
    debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit('end');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the writable side is ready for autoDestroy as well
        var wState = stream._writableState;

        if (!wState || wState.autoDestroy && wState.finished) {
          stream.destroy();
        }
      }
    }
  }

  if (typeof Symbol === 'function') {
    Readable.from = function (iterable, opts) {
      if (from === undefined) {
        from = from_1;
      }

      return from(Readable, iterable, opts);
    };
  }

  function indexOf(xs, x) {
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x) return i;
    }

    return -1;
  }

  var _stream_transform = Transform$1;

  var _require$codes$1 = errors.codes,
      ERR_METHOD_NOT_IMPLEMENTED = _require$codes$1.ERR_METHOD_NOT_IMPLEMENTED,
      ERR_MULTIPLE_CALLBACK = _require$codes$1.ERR_MULTIPLE_CALLBACK,
      ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes$1.ERR_TRANSFORM_ALREADY_TRANSFORMING,
      ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes$1.ERR_TRANSFORM_WITH_LENGTH_0;

  var Duplex = _stream_duplex;

  inherits.exports(Transform$1, Duplex);

  function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;

    if (cb === null) {
      return this.emit('error', new ERR_MULTIPLE_CALLBACK());
    }

    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) // single equals check for both `null` and `undefined`
      this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;

    if (rs.needReadable || rs.length < rs.highWaterMark) {
      this._read(rs.highWaterMark);
    }
  }

  function Transform$1(options) {
    if (!(this instanceof Transform$1)) return new Transform$1(options);
    Duplex.call(this, options);
    this._transformState = {
      afterTransform: afterTransform.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }; // start out asking for a readable event once data is transformed.

    this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.

    this._readableState.sync = false;

    if (options) {
      if (typeof options.transform === 'function') this._transform = options.transform;
      if (typeof options.flush === 'function') this._flush = options.flush;
    } // When the writable side finishes, then flush out anything remaining.


    this.on('prefinish', prefinish);
  }

  function prefinish() {
    var _this = this;

    if (typeof this._flush === 'function' && !this._readableState.destroyed) {
      this._flush(function (er, data) {
        done(_this, er, data);
      });
    } else {
      done(this, null, null);
    }
  }

  Transform$1.prototype.push = function (chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  }; // This is the part where you do stuff!
  // override this function in implementation classes.
  // 'chunk' is an input chunk.
  //
  // Call `push(newChunk)` to pass along transformed output
  // to the readable side.  You may call 'push' zero or more times.
  //
  // Call `cb(err)` when you are done with this chunk.  If you pass
  // an error, then that'll put the hurt on the whole operation.  If you
  // never call cb(), then you'll never get another chunk.


  Transform$1.prototype._transform = function (chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
  };

  Transform$1.prototype._write = function (chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;

    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
  }; // Doesn't matter what the args are here.
  // _transform does all the work.
  // That we got here means that the readable side wants more data.


  Transform$1.prototype._read = function (n) {
    var ts = this._transformState;

    if (ts.writechunk !== null && !ts.transforming) {
      ts.transforming = true;

      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      // mark that we need a transform, so that any data that comes in
      // will get processed, now that we've asked for it.
      ts.needTransform = true;
    }
  };

  Transform$1.prototype._destroy = function (err, cb) {
    Duplex.prototype._destroy.call(this, err, function (err2) {
      cb(err2);
    });
  };

  function done(stream, er, data) {
    if (er) return stream.emit('error', er);
    if (data != null) // single equals check for both `null` and `undefined`
      stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided

    if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
  }

  var _stream_passthrough = PassThrough;

  var Transform = _stream_transform;

  inherits.exports(PassThrough, Transform);

  function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
  }

  PassThrough.prototype._transform = function (chunk, encoding, cb) {
    cb(null, chunk);
  };

  var eos;

  function once(callback) {
    var called = false;
    return function () {
      if (called) return;
      called = true;
      callback.apply(void 0, arguments);
    };
  }

  var _require$codes = errors.codes,
      ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
      ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

  function noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
  }

  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
  }

  function destroyer(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on('close', function () {
      closed = true;
    });
    if (eos === undefined) eos = endOfStream;
    eos(stream, {
      readable: reading,
      writable: writing
    }, function (err) {
      if (err) return callback(err);
      closed = true;
      callback();
    });
    var destroyed = false;
    return function (err) {
      if (closed) return;
      if (destroyed) return;
      destroyed = true; // request.destroy just do .end - .abort is what we want

      if (isRequest(stream)) return stream.abort();
      if (typeof stream.destroy === 'function') return stream.destroy();
      callback(err || new ERR_STREAM_DESTROYED('pipe'));
    };
  }

  function call(fn) {
    fn();
  }

  function pipe(from, to) {
    return from.pipe(to);
  }

  function popCallback(streams) {
    if (!streams.length) return noop;
    if (typeof streams[streams.length - 1] !== 'function') return noop;
    return streams.pop();
  }

  function pipeline() {
    for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
      streams[_key] = arguments[_key];
    }

    var callback = popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];

    if (streams.length < 2) {
      throw new ERR_MISSING_ARGS('streams');
    }

    var error;
    var destroys = streams.map(function (stream, i) {
      var reading = i < streams.length - 1;
      var writing = i > 0;
      return destroyer(stream, reading, writing, function (err) {
        if (!error) error = err;
        if (err) destroys.forEach(call);
        if (reading) return;
        destroys.forEach(call);
        callback(error);
      });
    });
    return streams.reduce(pipe);
  }

  var pipeline_1 = pipeline;

  (function (module, exports) {
  var Stream = Stream__default["default"];
  if (process.env.READABLE_STREAM === 'disable' && Stream) {
    module.exports = Stream.Readable;
    Object.assign(module.exports, Stream);
    module.exports.Stream = Stream;
  } else {
    exports = module.exports = _stream_readable;
    exports.Stream = Stream || exports;
    exports.Readable = exports;
    exports.Writable = _stream_writable;
    exports.Duplex = _stream_duplex;
    exports.Transform = _stream_transform;
    exports.PassThrough = _stream_passthrough;
    exports.finished = endOfStream;
    exports.pipeline = pipeline_1;
  }
  }(readable, readable.exports));

  // **N3Store** objects store N3 quads by graph in memory.

  // ## Constructor
  class N3Store {
    constructor(quads, options) {
      // The number of quads is initially zero
      this._size = 0;
      // `_graphs` contains subject, predicate, and object indexes per graph
      this._graphs = Object.create(null);
      // `_ids` maps entities such as `http://xmlns.com/foaf/0.1/name` to numbers,
      // saving memory by using only numbers as keys in `_graphs`
      this._id = 0;
      this._ids = Object.create(null);
      this._ids['><'] = 0; // dummy entry, so the first actual key is non-zero
      this._entities = Object.create(null); // inverse of `_ids`
      // `_blankNodeIndex` is the index of the last automatically named blank node
      this._blankNodeIndex = 0;

      // Shift parameters if `quads` is not given
      if (!options && quads && !quads[0])
        options = quads, quads = null;
      options = options || {};
      this._factory = options.factory || N3DataFactory;

      // Add quads if passed
      if (quads)
        this.addQuads(quads);
    }

    // ## Public properties

    // ### `size` returns the number of quads in the store
    get size() {
      // Return the quad count if if was cached
      let size = this._size;
      if (size !== null)
        return size;

      // Calculate the number of quads by counting to the deepest level
      size = 0;
      const graphs = this._graphs;
      let subjects, subject;
      for (const graphKey in graphs)
        for (const subjectKey in (subjects = graphs[graphKey].subjects))
          for (const predicateKey in (subject = subjects[subjectKey]))
            size += Object.keys(subject[predicateKey]).length;
      return this._size = size;
    }

    // ## Private methods

    // ### `_addToIndex` adds a quad to a three-layered index.
    // Returns if the index has changed, if the entry did not already exist.
    _addToIndex(index0, key0, key1, key2) {
      // Create layers as necessary
      const index1 = index0[key0] || (index0[key0] = {});
      const index2 = index1[key1] || (index1[key1] = {});
      // Setting the key to _any_ value signals the presence of the quad
      const existed = key2 in index2;
      if (!existed)
        index2[key2] = null;
      return !existed;
    }

    // ### `_removeFromIndex` removes a quad from a three-layered index
    _removeFromIndex(index0, key0, key1, key2) {
      // Remove the quad from the index
      const index1 = index0[key0], index2 = index1[key1];
      delete index2[key2];

      // Remove intermediary index layers if they are empty
      for (const key in index2) return;
      delete index1[key1];
      for (const key in index1) return;
      delete index0[key0];
    }

    // ### `_findInIndex` finds a set of quads in a three-layered index.
    // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
    // Any of these keys can be undefined, which is interpreted as a wildcard.
    // `name0`, `name1`, and `name2` are the names of the keys at each level,
    // used when reconstructing the resulting quad
    // (for instance: _subject_, _predicate_, and _object_).
    // Finally, `graph` will be the graph of the created quads.
    // If `callback` is given, each result is passed through it
    // and iteration halts when it returns truthy for any quad.
    // If instead `array` is given, each result is added to the array.
    _findInIndex(index0, key0, key1, key2, name0, name1, name2, graph, callback, array) {
      let tmp, index1, index2;
      // Depending on the number of variables, keys or reverse index are faster
      const varCount = !key0 + !key1 + !key2,
          entityKeys = varCount > 1 ? Object.keys(this._ids) : this._entities;

      // If a key is specified, use only that part of index 0.
      if (key0) (tmp = index0, index0 = {})[key0] = tmp[key0];
      for (const value0 in index0) {
        const entity0 = entityKeys[value0];

        if (index1 = index0[value0]) {
          // If a key is specified, use only that part of index 1.
          if (key1) (tmp = index1, index1 = {})[key1] = tmp[key1];
          for (const value1 in index1) {
            const entity1 = entityKeys[value1];

            if (index2 = index1[value1]) {
              // If a key is specified, use only that part of index 2, if it exists.
              const values = key2 ? (key2 in index2 ? [key2] : []) : Object.keys(index2);
              // Create quads for all items found in index 2.
              for (let l = 0; l < values.length; l++) {
                const parts = { subject: null, predicate: null, object: null };
                parts[name0] = termFromId(entity0, this._factory);
                parts[name1] = termFromId(entity1, this._factory);
                parts[name2] = termFromId(entityKeys[values[l]], this._factory);
                const quad = this._factory.quad(
                  parts.subject, parts.predicate, parts.object, termFromId(graph, this._factory));
                if (array)
                  array.push(quad);
                else if (callback(quad))
                  return true;
              }
            }
          }
        }
      }
      return array;
    }

    // ### `_loop` executes the callback on all keys of index 0
    _loop(index0, callback) {
      for (const key0 in index0)
        callback(key0);
    }

    // ### `_loopByKey0` executes the callback on all keys of a certain entry in index 0
    _loopByKey0(index0, key0, callback) {
      let index1, key1;
      if (index1 = index0[key0]) {
        for (key1 in index1)
          callback(key1);
      }
    }

    // ### `_loopByKey1` executes the callback on given keys of all entries in index 0
    _loopByKey1(index0, key1, callback) {
      let key0, index1;
      for (key0 in index0) {
        index1 = index0[key0];
        if (index1[key1])
          callback(key0);
      }
    }

    // ### `_loopBy2Keys` executes the callback on given keys of certain entries in index 2
    _loopBy2Keys(index0, key0, key1, callback) {
      let index1, index2, key2;
      if ((index1 = index0[key0]) && (index2 = index1[key1])) {
        for (key2 in index2)
          callback(key2);
      }
    }

    // ### `_countInIndex` counts matching quads in a three-layered index.
    // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
    // Any of these keys can be undefined, which is interpreted as a wildcard.
    _countInIndex(index0, key0, key1, key2) {
      let count = 0, tmp, index1, index2;

      // If a key is specified, count only that part of index 0
      if (key0) (tmp = index0, index0 = {})[key0] = tmp[key0];
      for (const value0 in index0) {
        if (index1 = index0[value0]) {
          // If a key is specified, count only that part of index 1
          if (key1) (tmp = index1, index1 = {})[key1] = tmp[key1];
          for (const value1 in index1) {
            if (index2 = index1[value1]) {
              // If a key is specified, count the quad if it exists
              if (key2) (key2 in index2) && count++;
              // Otherwise, count all quads
              else count += Object.keys(index2).length;
            }
          }
        }
      }
      return count;
    }

    // ### `_getGraphs` returns an array with the given graph,
    // or all graphs if the argument is null or undefined.
    _getGraphs(graph) {
      if (!isString(graph))
        return this._graphs;
      const graphs = {};
      graphs[graph] = this._graphs[graph];
      return graphs;
    }

    // ### `_uniqueEntities` returns a function that accepts an entity ID
    // and passes the corresponding entity to callback if it hasn't occurred before.
    _uniqueEntities(callback) {
      const uniqueIds = Object.create(null);
      return id => {
        if (!(id in uniqueIds)) {
          uniqueIds[id] = true;
          callback(termFromId(this._entities[id], this._factory));
        }
      };
    }

    // ## Public methods

    // ### `add` adds the specified quad to the dataset.
    // Returns the dataset instance it was called on.
    // Existing quads, as defined in Quad.equals, will be ignored.
    add(quad) {
      this.addQuad(quad);
      return this;
    }

    // ### `addQuad` adds a new quad to the store.
    // Returns if the quad index has changed, if the quad did not already exist.
    addQuad(subject, predicate, object, graph) {
      // Shift arguments if a quad object is given instead of components
      if (!predicate)
        graph = subject.graph, object = subject.object,
          predicate = subject.predicate, subject = subject.subject;

      // Convert terms to internal string representation
      subject = termToId(subject);
      predicate = termToId(predicate);
      object = termToId(object);
      graph = termToId(graph);

      // Find the graph that will contain the triple
      let graphItem = this._graphs[graph];
      // Create the graph if it doesn't exist yet
      if (!graphItem) {
        graphItem = this._graphs[graph] = { subjects: {}, predicates: {}, objects: {} };
        // Freezing a graph helps subsequent `add` performance,
        // and properties will never be modified anyway
        Object.freeze(graphItem);
      }

      // Since entities can often be long IRIs, we avoid storing them in every index.
      // Instead, we have a separate index that maps entities to numbers,
      // which are then used as keys in the other indexes.
      const ids = this._ids;
      const entities = this._entities;
      subject   = ids[subject]   || (ids[entities[++this._id] = subject]   = this._id);
      predicate = ids[predicate] || (ids[entities[++this._id] = predicate] = this._id);
      object    = ids[object]    || (ids[entities[++this._id] = object]    = this._id);

      const changed = this._addToIndex(graphItem.subjects,   subject,   predicate, object);
      this._addToIndex(graphItem.predicates, predicate, object,    subject);
      this._addToIndex(graphItem.objects,    object,    subject,   predicate);

      // The cached quad count is now invalid
      this._size = null;
      return changed;
    }

    // ### `addQuads` adds multiple quads to the store
    addQuads(quads) {
      for (let i = 0; i < quads.length; i++)
        this.addQuad(quads[i]);
    }

    // ### `delete` removes the specified quad from the dataset.
    // Returns the dataset instance it was called on.
    delete(quad) {
      this.removeQuad(quad);
      return this;
    }

    // ### `has` determines whether a dataset includes a certain quad.
    // Returns true or false as appropriate.
    has(quad) {
      const quads = this.getQuads(quad.subject, quad.predicate, quad.object, quad.graph);
      return quads.length !== 0;
    }

    // ### `import` adds a stream of quads to the store
    import(stream) {
      stream.on('data', quad => { this.addQuad(quad); });
      return stream;
    }

    // ### `removeQuad` removes a quad from the store if it exists
    removeQuad(subject, predicate, object, graph) {
      // Shift arguments if a quad object is given instead of components
      if (!predicate)
        graph = subject.graph, object = subject.object,
          predicate = subject.predicate, subject = subject.subject;

      // Convert terms to internal string representation
      subject = termToId(subject);
      predicate = termToId(predicate);
      object = termToId(object);
      graph = termToId(graph);

      // Find internal identifiers for all components
      // and verify the quad exists.
      const ids = this._ids, graphs = this._graphs;
      let graphItem, subjects, predicates;
      if (!(subject    = ids[subject]) || !(predicate = ids[predicate]) ||
          !(object     = ids[object])  || !(graphItem = graphs[graph])  ||
          !(subjects   = graphItem.subjects[subject]) ||
          !(predicates = subjects[predicate]) ||
          !(object in predicates))
        return false;

      // Remove it from all indexes
      this._removeFromIndex(graphItem.subjects,   subject,   predicate, object);
      this._removeFromIndex(graphItem.predicates, predicate, object,    subject);
      this._removeFromIndex(graphItem.objects,    object,    subject,   predicate);
      if (this._size !== null) this._size--;

      // Remove the graph if it is empty
      for (subject in graphItem.subjects) return true;
      delete graphs[graph];
      return true;
    }

    // ### `removeQuads` removes multiple quads from the store
    removeQuads(quads) {
      for (let i = 0; i < quads.length; i++)
        this.removeQuad(quads[i]);
    }

    // ### `remove` removes a stream of quads from the store
    remove(stream) {
      stream.on('data', quad => { this.removeQuad(quad); });
      return stream;
    }

    // ### `removeMatches` removes all matching quads from the store
    // Setting any field to `undefined` or `null` indicates a wildcard.
    removeMatches(subject, predicate, object, graph) {
      const stream = new readable.exports.Readable({ objectMode: true });

      stream._read = () => {
        for (const quad of this.getQuads(subject, predicate, object, graph))
          stream.push(quad);
        stream.push(null);
      };

      return this.remove(stream);
    }

    // ### `deleteGraph` removes all triples with the given graph from the store
    deleteGraph(graph) {
      return this.removeMatches(null, null, null, graph);
    }

    // ### `getQuads` returns an array of quads matching a pattern.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    getQuads(subject, predicate, object, graph) {
      // Convert terms to internal string representation
      subject = subject && termToId(subject);
      predicate = predicate && termToId(predicate);
      object = object && termToId(object);
      graph = graph && termToId(graph);

      const quads = [], graphs = this._getGraphs(graph), ids = this._ids;
      let content, subjectId, predicateId, objectId;

      // Translate IRIs to internal index keys.
      if (isString(subject)   && !(subjectId   = ids[subject])   ||
          isString(predicate) && !(predicateId = ids[predicate]) ||
          isString(object)    && !(objectId    = ids[object]))
        return quads;

      for (const graphId in graphs) {
        // Only if the specified graph contains triples, there can be results
        if (content = graphs[graphId]) {
          // Choose the optimal index, based on what fields are present
          if (subjectId) {
            if (objectId)
              // If subject and object are given, the object index will be the fastest
              this._findInIndex(content.objects, objectId, subjectId, predicateId,
                                'object', 'subject', 'predicate', graphId, null, quads);
            else
              // If only subject and possibly predicate are given, the subject index will be the fastest
              this._findInIndex(content.subjects, subjectId, predicateId, null,
                                'subject', 'predicate', 'object', graphId, null, quads);
          }
          else if (predicateId)
            // If only predicate and possibly object are given, the predicate index will be the fastest
            this._findInIndex(content.predicates, predicateId, objectId, null,
                              'predicate', 'object', 'subject', graphId, null, quads);
          else if (objectId)
            // If only object is given, the object index will be the fastest
            this._findInIndex(content.objects, objectId, null, null,
                              'object', 'subject', 'predicate', graphId, null, quads);
          else
            // If nothing is given, iterate subjects and predicates first
            this._findInIndex(content.subjects, null, null, null,
                              'subject', 'predicate', 'object', graphId, null, quads);
        }
      }
      return quads;
    }

    // ### `match` returns a new dataset that is comprised of all quads in the current instance matching the given arguments.
    // The logic described in Quad Matching is applied for each quad in this dataset to check if it should be included in the output dataset.
    // Note: This method always returns a new DatasetCore, even if that dataset contains no quads.
    // Note: Since a DatasetCore is an unordered set, the order of the quads within the returned sequence is arbitrary.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    // For backwards compatibility, the object return also implements the Readable stream interface.
    match(subject, predicate, object, graph) {
      return new DatasetCoreAndReadableStream(this, subject, predicate, object, graph);
    }

    // ### `countQuads` returns the number of quads matching a pattern.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    countQuads(subject, predicate, object, graph) {
      // Convert terms to internal string representation
      subject = subject && termToId(subject);
      predicate = predicate && termToId(predicate);
      object = object && termToId(object);
      graph = graph && termToId(graph);

      const graphs = this._getGraphs(graph), ids = this._ids;
      let count = 0, content, subjectId, predicateId, objectId;

      // Translate IRIs to internal index keys.
      if (isString(subject)   && !(subjectId   = ids[subject])   ||
          isString(predicate) && !(predicateId = ids[predicate]) ||
          isString(object)    && !(objectId    = ids[object]))
        return 0;

      for (const graphId in graphs) {
        // Only if the specified graph contains triples, there can be results
        if (content = graphs[graphId]) {
          // Choose the optimal index, based on what fields are present
          if (subject) {
            if (object)
              // If subject and object are given, the object index will be the fastest
              count += this._countInIndex(content.objects, objectId, subjectId, predicateId);
            else
              // If only subject and possibly predicate are given, the subject index will be the fastest
              count += this._countInIndex(content.subjects, subjectId, predicateId, objectId);
          }
          else if (predicate) {
            // If only predicate and possibly object are given, the predicate index will be the fastest
            count += this._countInIndex(content.predicates, predicateId, objectId, subjectId);
          }
          else {
            // If only object is possibly given, the object index will be the fastest
            count += this._countInIndex(content.objects, objectId, subjectId, predicateId);
          }
        }
      }
      return count;
    }

    // ### `forEach` executes the callback on all quads.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    forEach(callback, subject, predicate, object, graph) {
      this.some(quad => {
        callback(quad);
        return false;
      }, subject, predicate, object, graph);
    }

    // ### `every` executes the callback on all quads,
    // and returns `true` if it returns truthy for all them.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    every(callback, subject, predicate, object, graph) {
      let some = false;
      const every = !this.some(quad => {
        some = true;
        return !callback(quad);
      }, subject, predicate, object, graph);
      return some && every;
    }

    // ### `some` executes the callback on all quads,
    // and returns `true` if it returns truthy for any of them.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    some(callback, subject, predicate, object, graph) {
      // Convert terms to internal string representation
      subject = subject && termToId(subject);
      predicate = predicate && termToId(predicate);
      object = object && termToId(object);
      graph = graph && termToId(graph);

      const graphs = this._getGraphs(graph), ids = this._ids;
      let content, subjectId, predicateId, objectId;

      // Translate IRIs to internal index keys.
      if (isString(subject)   && !(subjectId   = ids[subject])   ||
          isString(predicate) && !(predicateId = ids[predicate]) ||
          isString(object)    && !(objectId    = ids[object]))
        return false;

      for (const graphId in graphs) {
        // Only if the specified graph contains triples, there can be results
        if (content = graphs[graphId]) {
          // Choose the optimal index, based on what fields are present
          if (subjectId) {
            if (objectId) {
            // If subject and object are given, the object index will be the fastest
              if (this._findInIndex(content.objects, objectId, subjectId, predicateId,
                                    'object', 'subject', 'predicate', graphId, callback, null))
                return true;
            }
            else
              // If only subject and possibly predicate are given, the subject index will be the fastest
              if (this._findInIndex(content.subjects, subjectId, predicateId, null,
                                    'subject', 'predicate', 'object', graphId, callback, null))
                return true;
          }
          else if (predicateId) {
            // If only predicate and possibly object are given, the predicate index will be the fastest
            if (this._findInIndex(content.predicates, predicateId, objectId, null,
                                  'predicate', 'object', 'subject', graphId, callback, null)) {
              return true;
            }
          }
          else if (objectId) {
            // If only object is given, the object index will be the fastest
            if (this._findInIndex(content.objects, objectId, null, null,
                                  'object', 'subject', 'predicate', graphId, callback, null)) {
              return true;
            }
          }
          else
          // If nothing is given, iterate subjects and predicates first
          if (this._findInIndex(content.subjects, null, null, null,
                                'subject', 'predicate', 'object', graphId, callback, null)) {
            return true;
          }
        }
      }
      return false;
    }

    // ### `getSubjects` returns all subjects that match the pattern.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    getSubjects(predicate, object, graph) {
      const results = [];
      this.forSubjects(s => { results.push(s); }, predicate, object, graph);
      return results;
    }

    // ### `forSubjects` executes the callback on all subjects that match the pattern.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    forSubjects(callback, predicate, object, graph) {
      // Convert terms to internal string representation
      predicate = predicate && termToId(predicate);
      object = object && termToId(object);
      graph = graph && termToId(graph);

      const ids = this._ids, graphs = this._getGraphs(graph);
      let content, predicateId, objectId;
      callback = this._uniqueEntities(callback);

      // Translate IRIs to internal index keys.
      if (isString(predicate) && !(predicateId = ids[predicate]) ||
          isString(object)    && !(objectId    = ids[object]))
        return;

      for (graph in graphs) {
        // Only if the specified graph contains triples, there can be results
        if (content = graphs[graph]) {
          // Choose optimal index based on which fields are wildcards
          if (predicateId) {
            if (objectId)
              // If predicate and object are given, the POS index is best.
              this._loopBy2Keys(content.predicates, predicateId, objectId, callback);
            else
              // If only predicate is given, the SPO index is best.
              this._loopByKey1(content.subjects, predicateId, callback);
          }
          else if (objectId)
            // If only object is given, the OSP index is best.
            this._loopByKey0(content.objects, objectId, callback);
          else
            // If no params given, iterate all the subjects
            this._loop(content.subjects, callback);
        }
      }
    }

    // ### `getPredicates` returns all predicates that match the pattern.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    getPredicates(subject, object, graph) {
      const results = [];
      this.forPredicates(p => { results.push(p); }, subject, object, graph);
      return results;
    }

    // ### `forPredicates` executes the callback on all predicates that match the pattern.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    forPredicates(callback, subject, object, graph) {
      // Convert terms to internal string representation
      subject = subject && termToId(subject);
      object = object && termToId(object);
      graph = graph && termToId(graph);

      const ids = this._ids, graphs = this._getGraphs(graph);
      let content, subjectId, objectId;
      callback = this._uniqueEntities(callback);

      // Translate IRIs to internal index keys.
      if (isString(subject) && !(subjectId = ids[subject]) ||
          isString(object)  && !(objectId  = ids[object]))
        return;

      for (graph in graphs) {
        // Only if the specified graph contains triples, there can be results
        if (content = graphs[graph]) {
          // Choose optimal index based on which fields are wildcards
          if (subjectId) {
            if (objectId)
              // If subject and object are given, the OSP index is best.
              this._loopBy2Keys(content.objects, objectId, subjectId, callback);
            else
              // If only subject is given, the SPO index is best.
              this._loopByKey0(content.subjects, subjectId, callback);
          }
          else if (objectId)
            // If only object is given, the POS index is best.
            this._loopByKey1(content.predicates, objectId, callback);
          else
            // If no params given, iterate all the predicates.
            this._loop(content.predicates, callback);
        }
      }
    }

    // ### `getObjects` returns all objects that match the pattern.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    getObjects(subject, predicate, graph) {
      const results = [];
      this.forObjects(o => { results.push(o); }, subject, predicate, graph);
      return results;
    }

    // ### `forObjects` executes the callback on all objects that match the pattern.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    forObjects(callback, subject, predicate, graph) {
      // Convert terms to internal string representation
      subject = subject && termToId(subject);
      predicate = predicate && termToId(predicate);
      graph = graph && termToId(graph);

      const ids = this._ids, graphs = this._getGraphs(graph);
      let content, subjectId, predicateId;
      callback = this._uniqueEntities(callback);

      // Translate IRIs to internal index keys.
      if (isString(subject)   && !(subjectId   = ids[subject]) ||
          isString(predicate) && !(predicateId = ids[predicate]))
        return;

      for (graph in graphs) {
        // Only if the specified graph contains triples, there can be results
        if (content = graphs[graph]) {
          // Choose optimal index based on which fields are wildcards
          if (subjectId) {
            if (predicateId)
              // If subject and predicate are given, the SPO index is best.
              this._loopBy2Keys(content.subjects, subjectId, predicateId, callback);
            else
              // If only subject is given, the OSP index is best.
              this._loopByKey1(content.objects, subjectId, callback);
          }
          else if (predicateId)
            // If only predicate is given, the POS index is best.
            this._loopByKey0(content.predicates, predicateId, callback);
          else
            // If no params given, iterate all the objects.
            this._loop(content.objects, callback);
        }
      }
    }

    // ### `getGraphs` returns all graphs that match the pattern.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    getGraphs(subject, predicate, object) {
      const results = [];
      this.forGraphs(g => { results.push(g); }, subject, predicate, object);
      return results;
    }

    // ### `forGraphs` executes the callback on all graphs that match the pattern.
    // Setting any field to `undefined` or `null` indicates a wildcard.
    forGraphs(callback, subject, predicate, object) {
      for (const graph in this._graphs) {
        this.some(quad => {
          callback(quad.graph);
          return true; // Halt iteration of some()
        }, subject, predicate, object, graph);
      }
    }

    // ### `createBlankNode` creates a new blank node, returning its name
    createBlankNode(suggestedName) {
      let name, index;
      // Generate a name based on the suggested name
      if (suggestedName) {
        name = suggestedName = `_:${suggestedName}`, index = 1;
        while (this._ids[name])
          name = suggestedName + index++;
      }
      // Generate a generic blank node name
      else {
        do { name = `_:b${this._blankNodeIndex++}`; }
        while (this._ids[name]);
      }
      // Add the blank node to the entities, avoiding the generation of duplicates
      this._ids[name] = ++this._id;
      this._entities[this._id] = name;
      return this._factory.blankNode(name.substr(2));
    }

    // ### `extractLists` finds and removes all list triples
    // and returns the items per list.
    extractLists({ remove = false, ignoreErrors = false } = {}) {
      const lists = {}; // has scalar keys so could be a simple Object
      const onError = ignoreErrors ? (() => true) :
                    ((node, message) => { throw new Error(`${node.value} ${message}`); });

      // Traverse each list from its tail
      const tails = this.getQuads(null, namespaces.rdf.rest, namespaces.rdf.nil, null);
      const toRemove = remove ? [...tails] : [];
      tails.forEach(tailQuad => {
        const items = [];             // the members found as objects of rdf:first quads
        let malformed = false;      // signals whether the current list is malformed
        let head;                   // the head of the list (_:b1 in above example)
        let headPos;                // set to subject or object when head is set
        const graph = tailQuad.graph; // make sure list is in exactly one graph

        // Traverse the list from tail to end
        let current = tailQuad.subject;
        while (current && !malformed) {
          const objectQuads = this.getQuads(null, null, current, null);
          const subjectQuads = this.getQuads(current, null, null, null);
          let quad, first = null, rest = null, parent = null;

          // Find the first and rest of this list node
          for (let i = 0; i < subjectQuads.length && !malformed; i++) {
            quad = subjectQuads[i];
            if (!quad.graph.equals(graph))
              malformed = onError(current, 'not confined to single graph');
            else if (head)
              malformed = onError(current, 'has non-list arcs out');

            // one rdf:first
            else if (quad.predicate.value === namespaces.rdf.first) {
              if (first)
                malformed = onError(current, 'has multiple rdf:first arcs');
              else
                toRemove.push(first = quad);
            }

            // one rdf:rest
            else if (quad.predicate.value === namespaces.rdf.rest) {
              if (rest)
                malformed = onError(current, 'has multiple rdf:rest arcs');
              else
                toRemove.push(rest = quad);
            }

            // alien triple
            else if (objectQuads.length)
              malformed = onError(current, 'can\'t be subject and object');
            else {
              head = quad; // e.g. { (1 2 3) :p :o }
              headPos = 'subject';
            }
          }

          // { :s :p (1 2) } arrives here with no head
          // { (1 2) :p :o } arrives here with head set to the list.
          for (let i = 0; i < objectQuads.length && !malformed; ++i) {
            quad = objectQuads[i];
            if (head)
              malformed = onError(current, 'can\'t have coreferences');
            // one rdf:rest
            else if (quad.predicate.value === namespaces.rdf.rest) {
              if (parent)
                malformed = onError(current, 'has incoming rdf:rest arcs');
              else
                parent = quad;
            }
            else {
              head = quad; // e.g. { :s :p (1 2) }
              headPos = 'object';
            }
          }

          // Store the list item and continue with parent
          if (!first)
            malformed = onError(current, 'has no list head');
          else
            items.unshift(first.object);
          current = parent && parent.subject;
        }

        // Don't remove any quads if the list is malformed
        if (malformed)
          remove = false;
        // Store the list under the value of its head
        else if (head)
          lists[head[headPos].value] = items;
      });

      // Remove list quads if requested
      if (remove)
        this.removeQuads(toRemove);
      return lists;
    }

    // ### Store is an iterable.
    // Can be used where iterables are expected: for...of loops, array spread operator,
    // `yield*`, and destructuring assignment (order is not guaranteed).
    *[Symbol.iterator]() {
      yield* this.getQuads();
    }
  }

  // Determines whether the argument is a string
  function isString(s) {
    return typeof s === 'string' || s instanceof String;
  }

  /**
   * A class that implements both DatasetCore and Readable.
   */
  class DatasetCoreAndReadableStream extends readable.exports.Readable {
    constructor(n3Store, subject, predicate, object, graph) {
      super({ objectMode: true });
      Object.assign(this, { n3Store, subject, predicate, object, graph });
    }

    get filtered() {
      if (!this._filtered) {
        const { n3Store, graph, object, predicate, subject } = this;
        const quads = n3Store.getQuads(subject, predicate, object, graph);
        this._filtered = new N3Store(quads, { factory: n3Store._factory });
      }
      return this._filtered;
    }
    get size() {
      return this.filtered.size;
    }

    _read() {
      for (const quad of this.filtered.getQuads())
        this.push(quad);
      this.push(null);
    }

    add(quad) {
      return this.filtered.add(quad);
    }

    delete(quad) {
      return this.filtered.delete(quad);
    }

    has(quad) {
      return this.filtered.has(quad);
    }

    match(subject, predicate, object, graph) {
      return new DatasetCoreAndReadableStream(this.filtered, subject, predicate, object, graph);
    }

    *[Symbol.iterator]() {
      yield* this.filtered.getQuads();
    }
  }

  // **N3StreamParser** parses a text stream into a quad stream.

  // ## Constructor
  class N3StreamParser extends readable.exports.Transform {
    constructor(options) {
      super({ decodeStrings: true });
      this._readableState.objectMode = true;

      // Set up parser with dummy stream to obtain `data` and `end` callbacks
      const parser = new N3Parser(options);
      let onData, onEnd;
      parser.parse({
        on: (event, callback) => {
          switch (event) {
          case 'data': onData = callback; break;
          case 'end':   onEnd = callback; break;
          }
        },
      },
        // Handle quads by pushing them down the pipeline
        (error, quad) => { error && this.emit('error', error) || quad && this.push(quad); },
        // Emit prefixes through the `prefix` event
        (prefix, uri) => { this.emit('prefix', prefix, uri); }
      );

      // Implement Transform methods through parser callbacks
      this._transform = (chunk, encoding, done) => { onData(chunk); done(); };
      this._flush = done => { onEnd(); done(); };
    }

    // ### Parses a stream of strings
    import(stream) {
      stream.on('data',  chunk => { this.write(chunk); });
      stream.on('end',   ()      => { this.end(); });
      stream.on('error', error => { this.emit('error', error); });
      return this;
    }
  }

  // **N3StreamWriter** serializes a quad stream into a text stream.

  // ## Constructor
  class N3StreamWriter extends readable.exports.Transform {
    constructor(options) {
      super({ encoding: 'utf8', writableObjectMode: true });

      // Set up writer with a dummy stream object
      const writer = this._writer = new N3Writer({
        write: (quad, encoding, callback) => { this.push(quad); callback && callback(); },
        end: callback => { this.push(null); callback && callback(); },
      }, options);

      // Implement Transform methods on top of writer
      this._transform = (quad, encoding, done) => { writer.addQuad(quad, done); };
      this._flush = done => { writer.end(done); };
    }

  // ### Serializes a stream of quads
    import(stream) {
      stream.on('data',   quad => { this.write(quad); });
      stream.on('end',    () => { this.end(); });
      stream.on('error',  error => { this.emit('error', error); });
      stream.on('prefix', (prefix, iri) => { this._writer.addPrefix(prefix, iri); });
      return this;
    }
  }

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Lexer: N3Lexer,
    Parser: N3Parser,
    Writer: N3Writer,
    Store: N3Store,
    StreamParser: N3StreamParser,
    StreamWriter: N3StreamWriter,
    Util: N3Util,
    DataFactory: N3DataFactory,
    Term: Term,
    NamedNode: NamedNode,
    Literal: Literal,
    BlankNode: BlankNode,
    Variable: Variable,
    DefaultGraph: DefaultGraph,
    Quad: Quad,
    Triple: Quad,
    termFromId: termFromId,
    termToId: termToId
  });

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bundle.umd.js.map
