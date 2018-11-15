import { Task } from '@ts-task/task';

/**
 * @ignore
 */
type Errback <ERR> = (err: ERR) => void;

/**
 * @ignore
 */
type ErrbackV <ERR, VAL = void> = (err: ERR, val: VAL) => void;

/**
 * @ignore
 */
export function liftErrbackOverride <F> (fn: any) {
    return liftErrback(fn) as any as F;
}

/**
 * @ignore
 */
export function liftErrback <F extends Function> (fn: F) {
    return function (...args: ArgsFromFunctionWithErrback<Args<F>>) {
        return new Task<ValFromFunctionWithErrback<Args<F>>, ErrFromFunctionWithErrback<Args<F>>>((resolve, reject) => {
            const newArgs = [...args, (err: any, val: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(val);
                }
            }];
            fn.apply(null, newArgs);
        });
    };
}

// tslint:disable:no-magic-numbers
/**
 * @ignore
 */
type FunctionWithErrback <A extends any[]>
    = A extends [any, any, any, any, any, any, any, Errback<infer ERR>] ? TupleConcat6<A[0], A[1], A[2], A[3], A[4], A[5], ERR, void>
    : A extends [any, any, any, any, any, any, any, ErrbackV<infer ERR, infer VAL>] ? TupleConcat6<A[0], A[1], A[2], A[3], A[4], A[5], ERR, VAL>
    : A extends [any, any, any, any, any, any, Errback<infer ERR>] ? TupleConcat5<A[0], A[1], A[2], A[3], A[4], ERR, void>
    : A extends [any, any, any, any, any, any, ErrbackV<infer ERR, infer VAL>] ? TupleConcat5<A[0], A[1], A[2], A[3], A[4], ERR, VAL>
    : A extends [any, any, any, any, any, Errback<infer ERR>] ? TupleConcat4<A[0], A[1], A[2], A[3], ERR, void>
    : A extends [any, any, any, any, any, ErrbackV<infer ERR, infer VAL>] ? TupleConcat4<A[0], A[1], A[2], A[3], ERR, VAL>
    : A extends [any, any, any, any, Errback<infer ERR>] ? TupleConcat3<A[0], A[1], A[2], ERR, void>
    : A extends [any, any, any, any, ErrbackV<infer ERR, infer VAL>] ? TupleConcat3<A[0], A[1], A[2], ERR, VAL>
    : A extends [any, any, any, Errback<infer ERR>] ? TupleConcat2<A[0], A[1], ERR, void>
    : A extends [any, any, any, ErrbackV<infer ERR, infer VAL>] ? TupleConcat2<A[0], A[1], ERR, VAL>
    : A extends [any, any, Errback<infer ERR>] ? TupleConcat2<A[0], A[1], ERR, void>
    : A extends [any, any, ErrbackV<infer ERR, infer VAL>] ? TupleConcat2<A[0], A[1], ERR, VAL>
    : A extends [any, Errback<infer ERR>] ? TupleConcat1<A[0], ERR, void>
    : A extends [any, ErrbackV<infer ERR, infer VAL>] ? TupleConcat1<A[0], ERR, VAL>
    : A extends [Errback<infer ERR>] ? TupleConcat0<ERR, void>
    : A extends [ErrbackV<infer ERR, infer VAL>] ? TupleConcat0<ERR, VAL>
    : unknown
;

/**
 * @ignore
 */
type Args <F extends Function>
    = F extends (...args: infer A) => any ? A
    : []
;

/**
 * @ignore
 */
type ValFromFunctionWithErrback <A extends any[]>
    = A extends [any, any, any, any, any, any, Errback<any>] ? void
    : A extends [any, any, any, any, any, any, ErrbackV<any, infer VAL>] ? VAL
    : A extends [any, any, any, any, any, Errback<any>] ? void
    : A extends [any, any, any, any, any, ErrbackV<any, infer VAL>] ? VAL
    : A extends [any, any, any, any, Errback<any>] ? void
    : A extends [any, any, any, any, ErrbackV<any, infer VAL>] ? VAL
    : A extends [any, any, any, Errback<any>] ? void
    : A extends [any, any, any, ErrbackV<any, infer VAL>] ? VAL
    : A extends [any, any, Errback<any>] ? void
    : A extends [any, any, ErrbackV<any, infer VAL>] ? VAL
    : A extends [any, Errback<any>] ? void
    : A extends [any, ErrbackV<any, infer VAL>] ? VAL
    : A extends [Errback<any>] ? void
    : A extends [ErrbackV<any, infer VAL>] ? VAL
    : unknown
;

/**
 * @ignore
 */
type ErrFromFunctionWithErrback <A extends any[]>
    = A extends [any, any, any, any, any, any, Errback<infer ERR>] ? ERR
    : A extends [any, any, any, any, any, any, ErrbackV<infer ERR, any>] ? ERR
    : A extends [any, any, any, any, any, Errback<infer ERR>] ? ERR
    : A extends [any, any, any, any, any, ErrbackV<infer ERR, any>] ? ERR
    : A extends [any, any, any, any, Errback<infer ERR>] ? ERR
    : A extends [any, any, any, any, ErrbackV<infer ERR, any>] ? ERR
    : A extends [any, any, any, Errback<infer ERR>] ? ERR
    : A extends [any, any, any, ErrbackV<infer ERR, any>] ? ERR
    : A extends [any, any, Errback<infer ERR>] ? ERR
    : A extends [any, any, ErrbackV<infer ERR, any>] ? ERR
    : A extends [any, Errback<infer ERR>] ? ERR
    : A extends [any, ErrbackV<infer ERR, any>] ? ERR
    : A extends [Errback<infer ERR>] ? ERR
    : A extends [ErrbackV<infer ERR, any>] ? ERR
    : unknown
;

/**
 * @ignore
 */
type ArgsFromFunctionWithErrback <A extends any[]>
    = A extends [any, any, any, any, any, any, ErrbackV<any, any>] ? [A[0], A[1], A[2], A[3], A[4], A[5]]
    : A extends [any, any, any, any, any, ErrbackV<any, any>] ? [A[0], A[1], A[2], A[3], A[4]]
    : A extends [any, any, any, any, ErrbackV<any, any>] ? [A[0], A[1], A[2], A[3]]
    : A extends [any, any, any, ErrbackV<any, any>] ? [A[0], A[1], A[2]]
    : A extends [any, any, ErrbackV<any, any>] ? [A[0], A[1]]
    : A extends [any, ErrbackV<any, any>] ? [A[0]]
    : []
;
// tslint:enable:no-magic-numbers

/**
 * @ignore
 */
type TupleConcat0 <ERR, VAL> = [ErrbackV<ERR, VAL>];
/**
 * @ignore
 */
type TupleConcat1 <A, ERR, VAL> = [A, ErrbackV<ERR, VAL>];
/**
 * @ignore
 */
type TupleConcat2 <A, B, ERR, VAL> = [A, B, ErrbackV<ERR, VAL>];
/**
 * @ignore
 */
type TupleConcat3 <A, B, C, ERR, VAL> = [A, B, C, ErrbackV<ERR, VAL>];
/**
 * @ignore
 */
type TupleConcat4 <A, B, C, D, ERR, VAL> = [A, B, C, D, ErrbackV<ERR, VAL>];
/**
 * @ignore
 */
type TupleConcat5 <A, B, C, D, E, ERR, VAL> = [A, B, C, D, E, ErrbackV<ERR, VAL>];
/**
 * @ignore
 */
type TupleConcat6 <A, B, C, D, E, F, ERR, VAL> = [A, B, C, D, E, F, ErrbackV<ERR, VAL>];

