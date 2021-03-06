'use strict';

var resultFactory = require('./assert').Result;

/**
 * Asserts "expected" versus "actual",
 * 'failing' the assertion (via Error) if a difference is found.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} given The actual item
 * @param {function} Assertion function
 * @return AssertResult
 */
module.exports = function test(message, expected, given, assertion) {
    return resultFactory()
        .set('message', message)
        .set('expected', expected)
        .set('given', given)
        .set('assertion', assertion)
        .execute();
};
