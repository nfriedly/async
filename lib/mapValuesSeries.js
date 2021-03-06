import mapValuesLimit from './mapValuesLimit';
import doLimit from './internal/doLimit';

/**
 * The same as `mapValues` but runs only a single async operation at a time.
 *
 * @name mapValuesSeries
 * @static
 * @memberOf async
 * @see async.mapValues
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {Function} iteratee - A function to apply to each value in `obj`.
 * The iteratee is passed a `callback(err, transformed)` which must be called
 * once it has completed with an error (which can be `null`) and a
 * transformed value. Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an object of the
 * transformed values from the `obj`. Invoked with (err, result).
 */
export default doLimit(mapValuesLimit, 1);
