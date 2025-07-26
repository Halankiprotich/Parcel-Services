
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Parcel
 * 
 */
export type Parcel = $Result.DefaultSelection<Prisma.$ParcelPayload>
/**
 * Model ParcelStatusHistory
 * 
 */
export type ParcelStatusHistory = $Result.DefaultSelection<Prisma.$ParcelStatusHistoryPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model WeightPricing
 * 
 */
export type WeightPricing = $Result.DefaultSelection<Prisma.$WeightPricingPayload>
/**
 * Model SystemSettings
 * 
 */
export type SystemSettings = $Result.DefaultSelection<Prisma.$SystemSettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ParcelStatus: {
  PENDING: 'PENDING',
  PICKED_UP: 'PICKED_UP',
  IN_TRANSIT: 'IN_TRANSIT',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type ParcelStatus = (typeof ParcelStatus)[keyof typeof ParcelStatus]


export const WeightCategory: {
  LIGHT: 'LIGHT',
  MEDIUM: 'MEDIUM',
  HEAVY: 'HEAVY',
  EXTRA_HEAVY: 'EXTRA_HEAVY'
};

export type WeightCategory = (typeof WeightCategory)[keyof typeof WeightCategory]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ParcelStatus = $Enums.ParcelStatus

export const ParcelStatus: typeof $Enums.ParcelStatus

export type WeightCategory = $Enums.WeightCategory

export const WeightCategory: typeof $Enums.WeightCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parcel`: Exposes CRUD operations for the **Parcel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcels
    * const parcels = await prisma.parcel.findMany()
    * ```
    */
  get parcel(): Prisma.ParcelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parcelStatusHistory`: Exposes CRUD operations for the **ParcelStatusHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParcelStatusHistories
    * const parcelStatusHistories = await prisma.parcelStatusHistory.findMany()
    * ```
    */
  get parcelStatusHistory(): Prisma.ParcelStatusHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weightPricing`: Exposes CRUD operations for the **WeightPricing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeightPricings
    * const weightPricings = await prisma.weightPricing.findMany()
    * ```
    */
  get weightPricing(): Prisma.WeightPricingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSettings`: Exposes CRUD operations for the **SystemSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSettings.findMany()
    * ```
    */
  get systemSettings(): Prisma.SystemSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Parcel: 'Parcel',
    ParcelStatusHistory: 'ParcelStatusHistory',
    Notification: 'Notification',
    WeightPricing: 'WeightPricing',
    SystemSettings: 'SystemSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "parcel" | "parcelStatusHistory" | "notification" | "weightPricing" | "systemSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Parcel: {
        payload: Prisma.$ParcelPayload<ExtArgs>
        fields: Prisma.ParcelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParcelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParcelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          findFirst: {
            args: Prisma.ParcelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParcelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          findMany: {
            args: Prisma.ParcelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          create: {
            args: Prisma.ParcelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          createMany: {
            args: Prisma.ParcelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParcelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          delete: {
            args: Prisma.ParcelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          update: {
            args: Prisma.ParcelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          deleteMany: {
            args: Prisma.ParcelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParcelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParcelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          upsert: {
            args: Prisma.ParcelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          aggregate: {
            args: Prisma.ParcelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParcel>
          }
          groupBy: {
            args: Prisma.ParcelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParcelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParcelCountArgs<ExtArgs>
            result: $Utils.Optional<ParcelCountAggregateOutputType> | number
          }
        }
      }
      ParcelStatusHistory: {
        payload: Prisma.$ParcelStatusHistoryPayload<ExtArgs>
        fields: Prisma.ParcelStatusHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParcelStatusHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelStatusHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParcelStatusHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelStatusHistoryPayload>
          }
          findFirst: {
            args: Prisma.ParcelStatusHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelStatusHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParcelStatusHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelStatusHistoryPayload>
          }
          findMany: {
            args: Prisma.ParcelStatusHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelStatusHistoryPayload>[]
          }
          create: {
            args: Prisma.ParcelStatusHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelStatusHistoryPayload>
          }
          createMany: {
            args: Prisma.ParcelStatusHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParcelStatusHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelStatusHistoryPayload>[]
          }
          delete: {
            args: Prisma.ParcelStatusHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelStatusHistoryPayload>
          }
          update: {
            args: Prisma.ParcelStatusHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelStatusHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ParcelStatusHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParcelStatusHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParcelStatusHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelStatusHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ParcelStatusHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelStatusHistoryPayload>
          }
          aggregate: {
            args: Prisma.ParcelStatusHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParcelStatusHistory>
          }
          groupBy: {
            args: Prisma.ParcelStatusHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParcelStatusHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParcelStatusHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ParcelStatusHistoryCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      WeightPricing: {
        payload: Prisma.$WeightPricingPayload<ExtArgs>
        fields: Prisma.WeightPricingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeightPricingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightPricingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeightPricingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightPricingPayload>
          }
          findFirst: {
            args: Prisma.WeightPricingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightPricingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeightPricingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightPricingPayload>
          }
          findMany: {
            args: Prisma.WeightPricingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightPricingPayload>[]
          }
          create: {
            args: Prisma.WeightPricingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightPricingPayload>
          }
          createMany: {
            args: Prisma.WeightPricingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeightPricingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightPricingPayload>[]
          }
          delete: {
            args: Prisma.WeightPricingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightPricingPayload>
          }
          update: {
            args: Prisma.WeightPricingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightPricingPayload>
          }
          deleteMany: {
            args: Prisma.WeightPricingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeightPricingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeightPricingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightPricingPayload>[]
          }
          upsert: {
            args: Prisma.WeightPricingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightPricingPayload>
          }
          aggregate: {
            args: Prisma.WeightPricingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeightPricing>
          }
          groupBy: {
            args: Prisma.WeightPricingGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeightPricingGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeightPricingCountArgs<ExtArgs>
            result: $Utils.Optional<WeightPricingCountAggregateOutputType> | number
          }
        }
      }
      SystemSettings: {
        payload: Prisma.$SystemSettingsPayload<ExtArgs>
        fields: Prisma.SystemSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findMany: {
            args: Prisma.SystemSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          create: {
            args: Prisma.SystemSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          createMany: {
            args: Prisma.SystemSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          update: {
            args: Prisma.SystemSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSettings>
          }
          groupBy: {
            args: Prisma.SystemSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    parcel?: ParcelOmit
    parcelStatusHistory?: ParcelStatusHistoryOmit
    notification?: NotificationOmit
    weightPricing?: WeightPricingOmit
    systemSettings?: SystemSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentParcels: number
    receivedParcels: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentParcels?: boolean | UserCountOutputTypeCountSentParcelsArgs
    receivedParcels?: boolean | UserCountOutputTypeCountReceivedParcelsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentParcelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedParcelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ParcelCountOutputType
   */

  export type ParcelCountOutputType = {
    statusHistory: number
    notifications: number
  }

  export type ParcelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusHistory?: boolean | ParcelCountOutputTypeCountStatusHistoryArgs
    notifications?: boolean | ParcelCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * ParcelCountOutputType without action
   */
  export type ParcelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelCountOutputType
     */
    select?: ParcelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParcelCountOutputType without action
   */
  export type ParcelCountOutputTypeCountStatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelStatusHistoryWhereInput
  }

  /**
   * ParcelCountOutputType without action
   */
  export type ParcelCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    phone: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string | null
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    sentParcels?: boolean | User$sentParcelsArgs<ExtArgs>
    receivedParcels?: boolean | User$receivedParcelsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "phone" | "role" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentParcels?: boolean | User$sentParcelsArgs<ExtArgs>
    receivedParcels?: boolean | User$receivedParcelsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentParcels: Prisma.$ParcelPayload<ExtArgs>[]
      receivedParcels: Prisma.$ParcelPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      phone: string | null
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentParcels<T extends User$sentParcelsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentParcelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedParcels<T extends User$receivedParcelsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedParcelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sentParcels
   */
  export type User$sentParcelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    where?: ParcelWhereInput
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    cursor?: ParcelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * User.receivedParcels
   */
  export type User$receivedParcelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    where?: ParcelWhereInput
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    cursor?: ParcelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Parcel
   */

  export type AggregateParcel = {
    _count: ParcelCountAggregateOutputType | null
    _avg: ParcelAvgAggregateOutputType | null
    _sum: ParcelSumAggregateOutputType | null
    _min: ParcelMinAggregateOutputType | null
    _max: ParcelMaxAggregateOutputType | null
  }

  export type ParcelAvgAggregateOutputType = {
    weight: number | null
    pickupLatitude: number | null
    pickupLongitude: number | null
    deliveryLatitude: number | null
    deliveryLongitude: number | null
    basePrice: number | null
    totalPrice: number | null
  }

  export type ParcelSumAggregateOutputType = {
    weight: number | null
    pickupLatitude: number | null
    pickupLongitude: number | null
    deliveryLatitude: number | null
    deliveryLongitude: number | null
    basePrice: number | null
    totalPrice: number | null
  }

  export type ParcelMinAggregateOutputType = {
    id: string | null
    trackingId: string | null
    description: string | null
    weight: number | null
    category: $Enums.WeightCategory | null
    status: $Enums.ParcelStatus | null
    senderId: string | null
    receiverId: string | null
    pickupAddress: string | null
    pickupLatitude: number | null
    pickupLongitude: number | null
    deliveryAddress: string | null
    deliveryLatitude: number | null
    deliveryLongitude: number | null
    basePrice: number | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    pickedUpAt: Date | null
    deliveredAt: Date | null
  }

  export type ParcelMaxAggregateOutputType = {
    id: string | null
    trackingId: string | null
    description: string | null
    weight: number | null
    category: $Enums.WeightCategory | null
    status: $Enums.ParcelStatus | null
    senderId: string | null
    receiverId: string | null
    pickupAddress: string | null
    pickupLatitude: number | null
    pickupLongitude: number | null
    deliveryAddress: string | null
    deliveryLatitude: number | null
    deliveryLongitude: number | null
    basePrice: number | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    pickedUpAt: Date | null
    deliveredAt: Date | null
  }

  export type ParcelCountAggregateOutputType = {
    id: number
    trackingId: number
    description: number
    weight: number
    category: number
    status: number
    senderId: number
    receiverId: number
    pickupAddress: number
    pickupLatitude: number
    pickupLongitude: number
    deliveryAddress: number
    deliveryLatitude: number
    deliveryLongitude: number
    basePrice: number
    totalPrice: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    pickedUpAt: number
    deliveredAt: number
    _all: number
  }


  export type ParcelAvgAggregateInputType = {
    weight?: true
    pickupLatitude?: true
    pickupLongitude?: true
    deliveryLatitude?: true
    deliveryLongitude?: true
    basePrice?: true
    totalPrice?: true
  }

  export type ParcelSumAggregateInputType = {
    weight?: true
    pickupLatitude?: true
    pickupLongitude?: true
    deliveryLatitude?: true
    deliveryLongitude?: true
    basePrice?: true
    totalPrice?: true
  }

  export type ParcelMinAggregateInputType = {
    id?: true
    trackingId?: true
    description?: true
    weight?: true
    category?: true
    status?: true
    senderId?: true
    receiverId?: true
    pickupAddress?: true
    pickupLatitude?: true
    pickupLongitude?: true
    deliveryAddress?: true
    deliveryLatitude?: true
    deliveryLongitude?: true
    basePrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    pickedUpAt?: true
    deliveredAt?: true
  }

  export type ParcelMaxAggregateInputType = {
    id?: true
    trackingId?: true
    description?: true
    weight?: true
    category?: true
    status?: true
    senderId?: true
    receiverId?: true
    pickupAddress?: true
    pickupLatitude?: true
    pickupLongitude?: true
    deliveryAddress?: true
    deliveryLatitude?: true
    deliveryLongitude?: true
    basePrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    pickedUpAt?: true
    deliveredAt?: true
  }

  export type ParcelCountAggregateInputType = {
    id?: true
    trackingId?: true
    description?: true
    weight?: true
    category?: true
    status?: true
    senderId?: true
    receiverId?: true
    pickupAddress?: true
    pickupLatitude?: true
    pickupLongitude?: true
    deliveryAddress?: true
    deliveryLatitude?: true
    deliveryLongitude?: true
    basePrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    pickedUpAt?: true
    deliveredAt?: true
    _all?: true
  }

  export type ParcelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcel to aggregate.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parcels
    **/
    _count?: true | ParcelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParcelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParcelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParcelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParcelMaxAggregateInputType
  }

  export type GetParcelAggregateType<T extends ParcelAggregateArgs> = {
        [P in keyof T & keyof AggregateParcel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParcel[P]>
      : GetScalarType<T[P], AggregateParcel[P]>
  }




  export type ParcelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelWhereInput
    orderBy?: ParcelOrderByWithAggregationInput | ParcelOrderByWithAggregationInput[]
    by: ParcelScalarFieldEnum[] | ParcelScalarFieldEnum
    having?: ParcelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParcelCountAggregateInputType | true
    _avg?: ParcelAvgAggregateInputType
    _sum?: ParcelSumAggregateInputType
    _min?: ParcelMinAggregateInputType
    _max?: ParcelMaxAggregateInputType
  }

  export type ParcelGroupByOutputType = {
    id: string
    trackingId: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status: $Enums.ParcelStatus
    senderId: string
    receiverId: string
    pickupAddress: string
    pickupLatitude: number | null
    pickupLongitude: number | null
    deliveryAddress: string
    deliveryLatitude: number | null
    deliveryLongitude: number | null
    basePrice: number
    totalPrice: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    pickedUpAt: Date | null
    deliveredAt: Date | null
    _count: ParcelCountAggregateOutputType | null
    _avg: ParcelAvgAggregateOutputType | null
    _sum: ParcelSumAggregateOutputType | null
    _min: ParcelMinAggregateOutputType | null
    _max: ParcelMaxAggregateOutputType | null
  }

  type GetParcelGroupByPayload<T extends ParcelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParcelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParcelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParcelGroupByOutputType[P]>
            : GetScalarType<T[P], ParcelGroupByOutputType[P]>
        }
      >
    >


  export type ParcelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingId?: boolean
    description?: boolean
    weight?: boolean
    category?: boolean
    status?: boolean
    senderId?: boolean
    receiverId?: boolean
    pickupAddress?: boolean
    pickupLatitude?: boolean
    pickupLongitude?: boolean
    deliveryAddress?: boolean
    deliveryLatitude?: boolean
    deliveryLongitude?: boolean
    basePrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    pickedUpAt?: boolean
    deliveredAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    statusHistory?: boolean | Parcel$statusHistoryArgs<ExtArgs>
    notifications?: boolean | Parcel$notificationsArgs<ExtArgs>
    _count?: boolean | ParcelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingId?: boolean
    description?: boolean
    weight?: boolean
    category?: boolean
    status?: boolean
    senderId?: boolean
    receiverId?: boolean
    pickupAddress?: boolean
    pickupLatitude?: boolean
    pickupLongitude?: boolean
    deliveryAddress?: boolean
    deliveryLatitude?: boolean
    deliveryLongitude?: boolean
    basePrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    pickedUpAt?: boolean
    deliveredAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingId?: boolean
    description?: boolean
    weight?: boolean
    category?: boolean
    status?: boolean
    senderId?: boolean
    receiverId?: boolean
    pickupAddress?: boolean
    pickupLatitude?: boolean
    pickupLongitude?: boolean
    deliveryAddress?: boolean
    deliveryLatitude?: boolean
    deliveryLongitude?: boolean
    basePrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    pickedUpAt?: boolean
    deliveredAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectScalar = {
    id?: boolean
    trackingId?: boolean
    description?: boolean
    weight?: boolean
    category?: boolean
    status?: boolean
    senderId?: boolean
    receiverId?: boolean
    pickupAddress?: boolean
    pickupLatitude?: boolean
    pickupLongitude?: boolean
    deliveryAddress?: boolean
    deliveryLatitude?: boolean
    deliveryLongitude?: boolean
    basePrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    pickedUpAt?: boolean
    deliveredAt?: boolean
  }

  export type ParcelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trackingId" | "description" | "weight" | "category" | "status" | "senderId" | "receiverId" | "pickupAddress" | "pickupLatitude" | "pickupLongitude" | "deliveryAddress" | "deliveryLatitude" | "deliveryLongitude" | "basePrice" | "totalPrice" | "createdAt" | "updatedAt" | "deletedAt" | "pickedUpAt" | "deliveredAt", ExtArgs["result"]["parcel"]>
  export type ParcelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    statusHistory?: boolean | Parcel$statusHistoryArgs<ExtArgs>
    notifications?: boolean | Parcel$notificationsArgs<ExtArgs>
    _count?: boolean | ParcelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParcelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParcelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParcelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parcel"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      statusHistory: Prisma.$ParcelStatusHistoryPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trackingId: string
      description: string
      weight: number
      category: $Enums.WeightCategory
      status: $Enums.ParcelStatus
      senderId: string
      receiverId: string
      pickupAddress: string
      pickupLatitude: number | null
      pickupLongitude: number | null
      deliveryAddress: string
      deliveryLatitude: number | null
      deliveryLongitude: number | null
      basePrice: number
      totalPrice: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      pickedUpAt: Date | null
      deliveredAt: Date | null
    }, ExtArgs["result"]["parcel"]>
    composites: {}
  }

  type ParcelGetPayload<S extends boolean | null | undefined | ParcelDefaultArgs> = $Result.GetResult<Prisma.$ParcelPayload, S>

  type ParcelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParcelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParcelCountAggregateInputType | true
    }

  export interface ParcelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parcel'], meta: { name: 'Parcel' } }
    /**
     * Find zero or one Parcel that matches the filter.
     * @param {ParcelFindUniqueArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParcelFindUniqueArgs>(args: SelectSubset<T, ParcelFindUniqueArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parcel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParcelFindUniqueOrThrowArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParcelFindUniqueOrThrowArgs>(args: SelectSubset<T, ParcelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parcel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindFirstArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParcelFindFirstArgs>(args?: SelectSubset<T, ParcelFindFirstArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parcel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindFirstOrThrowArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParcelFindFirstOrThrowArgs>(args?: SelectSubset<T, ParcelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parcels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcels
     * const parcels = await prisma.parcel.findMany()
     * 
     * // Get first 10 Parcels
     * const parcels = await prisma.parcel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parcelWithIdOnly = await prisma.parcel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParcelFindManyArgs>(args?: SelectSubset<T, ParcelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parcel.
     * @param {ParcelCreateArgs} args - Arguments to create a Parcel.
     * @example
     * // Create one Parcel
     * const Parcel = await prisma.parcel.create({
     *   data: {
     *     // ... data to create a Parcel
     *   }
     * })
     * 
     */
    create<T extends ParcelCreateArgs>(args: SelectSubset<T, ParcelCreateArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parcels.
     * @param {ParcelCreateManyArgs} args - Arguments to create many Parcels.
     * @example
     * // Create many Parcels
     * const parcel = await prisma.parcel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParcelCreateManyArgs>(args?: SelectSubset<T, ParcelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parcels and returns the data saved in the database.
     * @param {ParcelCreateManyAndReturnArgs} args - Arguments to create many Parcels.
     * @example
     * // Create many Parcels
     * const parcel = await prisma.parcel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parcels and only return the `id`
     * const parcelWithIdOnly = await prisma.parcel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParcelCreateManyAndReturnArgs>(args?: SelectSubset<T, ParcelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parcel.
     * @param {ParcelDeleteArgs} args - Arguments to delete one Parcel.
     * @example
     * // Delete one Parcel
     * const Parcel = await prisma.parcel.delete({
     *   where: {
     *     // ... filter to delete one Parcel
     *   }
     * })
     * 
     */
    delete<T extends ParcelDeleteArgs>(args: SelectSubset<T, ParcelDeleteArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parcel.
     * @param {ParcelUpdateArgs} args - Arguments to update one Parcel.
     * @example
     * // Update one Parcel
     * const parcel = await prisma.parcel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParcelUpdateArgs>(args: SelectSubset<T, ParcelUpdateArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parcels.
     * @param {ParcelDeleteManyArgs} args - Arguments to filter Parcels to delete.
     * @example
     * // Delete a few Parcels
     * const { count } = await prisma.parcel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParcelDeleteManyArgs>(args?: SelectSubset<T, ParcelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcels
     * const parcel = await prisma.parcel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParcelUpdateManyArgs>(args: SelectSubset<T, ParcelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcels and returns the data updated in the database.
     * @param {ParcelUpdateManyAndReturnArgs} args - Arguments to update many Parcels.
     * @example
     * // Update many Parcels
     * const parcel = await prisma.parcel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parcels and only return the `id`
     * const parcelWithIdOnly = await prisma.parcel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParcelUpdateManyAndReturnArgs>(args: SelectSubset<T, ParcelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parcel.
     * @param {ParcelUpsertArgs} args - Arguments to update or create a Parcel.
     * @example
     * // Update or create a Parcel
     * const parcel = await prisma.parcel.upsert({
     *   create: {
     *     // ... data to create a Parcel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parcel we want to update
     *   }
     * })
     */
    upsert<T extends ParcelUpsertArgs>(args: SelectSubset<T, ParcelUpsertArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelCountArgs} args - Arguments to filter Parcels to count.
     * @example
     * // Count the number of Parcels
     * const count = await prisma.parcel.count({
     *   where: {
     *     // ... the filter for the Parcels we want to count
     *   }
     * })
    **/
    count<T extends ParcelCountArgs>(
      args?: Subset<T, ParcelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParcelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parcel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParcelAggregateArgs>(args: Subset<T, ParcelAggregateArgs>): Prisma.PrismaPromise<GetParcelAggregateType<T>>

    /**
     * Group by Parcel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParcelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParcelGroupByArgs['orderBy'] }
        : { orderBy?: ParcelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParcelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParcelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parcel model
   */
  readonly fields: ParcelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parcel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParcelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    statusHistory<T extends Parcel$statusHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Parcel$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Parcel$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Parcel$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parcel model
   */
  interface ParcelFieldRefs {
    readonly id: FieldRef<"Parcel", 'String'>
    readonly trackingId: FieldRef<"Parcel", 'String'>
    readonly description: FieldRef<"Parcel", 'String'>
    readonly weight: FieldRef<"Parcel", 'Float'>
    readonly category: FieldRef<"Parcel", 'WeightCategory'>
    readonly status: FieldRef<"Parcel", 'ParcelStatus'>
    readonly senderId: FieldRef<"Parcel", 'String'>
    readonly receiverId: FieldRef<"Parcel", 'String'>
    readonly pickupAddress: FieldRef<"Parcel", 'String'>
    readonly pickupLatitude: FieldRef<"Parcel", 'Float'>
    readonly pickupLongitude: FieldRef<"Parcel", 'Float'>
    readonly deliveryAddress: FieldRef<"Parcel", 'String'>
    readonly deliveryLatitude: FieldRef<"Parcel", 'Float'>
    readonly deliveryLongitude: FieldRef<"Parcel", 'Float'>
    readonly basePrice: FieldRef<"Parcel", 'Float'>
    readonly totalPrice: FieldRef<"Parcel", 'Float'>
    readonly createdAt: FieldRef<"Parcel", 'DateTime'>
    readonly updatedAt: FieldRef<"Parcel", 'DateTime'>
    readonly deletedAt: FieldRef<"Parcel", 'DateTime'>
    readonly pickedUpAt: FieldRef<"Parcel", 'DateTime'>
    readonly deliveredAt: FieldRef<"Parcel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parcel findUnique
   */
  export type ParcelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel findUniqueOrThrow
   */
  export type ParcelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel findFirst
   */
  export type ParcelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcels.
     */
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel findFirstOrThrow
   */
  export type ParcelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcels.
     */
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel findMany
   */
  export type ParcelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcels to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel create
   */
  export type ParcelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The data needed to create a Parcel.
     */
    data: XOR<ParcelCreateInput, ParcelUncheckedCreateInput>
  }

  /**
   * Parcel createMany
   */
  export type ParcelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parcels.
     */
    data: ParcelCreateManyInput | ParcelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parcel createManyAndReturn
   */
  export type ParcelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * The data used to create many Parcels.
     */
    data: ParcelCreateManyInput | ParcelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parcel update
   */
  export type ParcelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The data needed to update a Parcel.
     */
    data: XOR<ParcelUpdateInput, ParcelUncheckedUpdateInput>
    /**
     * Choose, which Parcel to update.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel updateMany
   */
  export type ParcelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parcels.
     */
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyInput>
    /**
     * Filter which Parcels to update
     */
    where?: ParcelWhereInput
    /**
     * Limit how many Parcels to update.
     */
    limit?: number
  }

  /**
   * Parcel updateManyAndReturn
   */
  export type ParcelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * The data used to update Parcels.
     */
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyInput>
    /**
     * Filter which Parcels to update
     */
    where?: ParcelWhereInput
    /**
     * Limit how many Parcels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parcel upsert
   */
  export type ParcelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The filter to search for the Parcel to update in case it exists.
     */
    where: ParcelWhereUniqueInput
    /**
     * In case the Parcel found by the `where` argument doesn't exist, create a new Parcel with this data.
     */
    create: XOR<ParcelCreateInput, ParcelUncheckedCreateInput>
    /**
     * In case the Parcel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParcelUpdateInput, ParcelUncheckedUpdateInput>
  }

  /**
   * Parcel delete
   */
  export type ParcelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter which Parcel to delete.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel deleteMany
   */
  export type ParcelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcels to delete
     */
    where?: ParcelWhereInput
    /**
     * Limit how many Parcels to delete.
     */
    limit?: number
  }

  /**
   * Parcel.statusHistory
   */
  export type Parcel$statusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryInclude<ExtArgs> | null
    where?: ParcelStatusHistoryWhereInput
    orderBy?: ParcelStatusHistoryOrderByWithRelationInput | ParcelStatusHistoryOrderByWithRelationInput[]
    cursor?: ParcelStatusHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParcelStatusHistoryScalarFieldEnum | ParcelStatusHistoryScalarFieldEnum[]
  }

  /**
   * Parcel.notifications
   */
  export type Parcel$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Parcel without action
   */
  export type ParcelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
  }


  /**
   * Model ParcelStatusHistory
   */

  export type AggregateParcelStatusHistory = {
    _count: ParcelStatusHistoryCountAggregateOutputType | null
    _min: ParcelStatusHistoryMinAggregateOutputType | null
    _max: ParcelStatusHistoryMaxAggregateOutputType | null
  }

  export type ParcelStatusHistoryMinAggregateOutputType = {
    id: string | null
    parcelId: string | null
    status: $Enums.ParcelStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParcelStatusHistoryMaxAggregateOutputType = {
    id: string | null
    parcelId: string | null
    status: $Enums.ParcelStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParcelStatusHistoryCountAggregateOutputType = {
    id: number
    parcelId: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParcelStatusHistoryMinAggregateInputType = {
    id?: true
    parcelId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParcelStatusHistoryMaxAggregateInputType = {
    id?: true
    parcelId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParcelStatusHistoryCountAggregateInputType = {
    id?: true
    parcelId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParcelStatusHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParcelStatusHistory to aggregate.
     */
    where?: ParcelStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParcelStatusHistories to fetch.
     */
    orderBy?: ParcelStatusHistoryOrderByWithRelationInput | ParcelStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParcelStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParcelStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParcelStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParcelStatusHistories
    **/
    _count?: true | ParcelStatusHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParcelStatusHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParcelStatusHistoryMaxAggregateInputType
  }

  export type GetParcelStatusHistoryAggregateType<T extends ParcelStatusHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateParcelStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParcelStatusHistory[P]>
      : GetScalarType<T[P], AggregateParcelStatusHistory[P]>
  }




  export type ParcelStatusHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelStatusHistoryWhereInput
    orderBy?: ParcelStatusHistoryOrderByWithAggregationInput | ParcelStatusHistoryOrderByWithAggregationInput[]
    by: ParcelStatusHistoryScalarFieldEnum[] | ParcelStatusHistoryScalarFieldEnum
    having?: ParcelStatusHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParcelStatusHistoryCountAggregateInputType | true
    _min?: ParcelStatusHistoryMinAggregateInputType
    _max?: ParcelStatusHistoryMaxAggregateInputType
  }

  export type ParcelStatusHistoryGroupByOutputType = {
    id: string
    parcelId: string
    status: $Enums.ParcelStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ParcelStatusHistoryCountAggregateOutputType | null
    _min: ParcelStatusHistoryMinAggregateOutputType | null
    _max: ParcelStatusHistoryMaxAggregateOutputType | null
  }

  type GetParcelStatusHistoryGroupByPayload<T extends ParcelStatusHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParcelStatusHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParcelStatusHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParcelStatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ParcelStatusHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ParcelStatusHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parcelId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcelStatusHistory"]>

  export type ParcelStatusHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parcelId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcelStatusHistory"]>

  export type ParcelStatusHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parcelId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcelStatusHistory"]>

  export type ParcelStatusHistorySelectScalar = {
    id?: boolean
    parcelId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParcelStatusHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parcelId" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["parcelStatusHistory"]>
  export type ParcelStatusHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
  }
  export type ParcelStatusHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
  }
  export type ParcelStatusHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
  }

  export type $ParcelStatusHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParcelStatusHistory"
    objects: {
      parcel: Prisma.$ParcelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parcelId: string
      status: $Enums.ParcelStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parcelStatusHistory"]>
    composites: {}
  }

  type ParcelStatusHistoryGetPayload<S extends boolean | null | undefined | ParcelStatusHistoryDefaultArgs> = $Result.GetResult<Prisma.$ParcelStatusHistoryPayload, S>

  type ParcelStatusHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParcelStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParcelStatusHistoryCountAggregateInputType | true
    }

  export interface ParcelStatusHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParcelStatusHistory'], meta: { name: 'ParcelStatusHistory' } }
    /**
     * Find zero or one ParcelStatusHistory that matches the filter.
     * @param {ParcelStatusHistoryFindUniqueArgs} args - Arguments to find a ParcelStatusHistory
     * @example
     * // Get one ParcelStatusHistory
     * const parcelStatusHistory = await prisma.parcelStatusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParcelStatusHistoryFindUniqueArgs>(args: SelectSubset<T, ParcelStatusHistoryFindUniqueArgs<ExtArgs>>): Prisma__ParcelStatusHistoryClient<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParcelStatusHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParcelStatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a ParcelStatusHistory
     * @example
     * // Get one ParcelStatusHistory
     * const parcelStatusHistory = await prisma.parcelStatusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParcelStatusHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ParcelStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParcelStatusHistoryClient<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParcelStatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelStatusHistoryFindFirstArgs} args - Arguments to find a ParcelStatusHistory
     * @example
     * // Get one ParcelStatusHistory
     * const parcelStatusHistory = await prisma.parcelStatusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParcelStatusHistoryFindFirstArgs>(args?: SelectSubset<T, ParcelStatusHistoryFindFirstArgs<ExtArgs>>): Prisma__ParcelStatusHistoryClient<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParcelStatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelStatusHistoryFindFirstOrThrowArgs} args - Arguments to find a ParcelStatusHistory
     * @example
     * // Get one ParcelStatusHistory
     * const parcelStatusHistory = await prisma.parcelStatusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParcelStatusHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ParcelStatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParcelStatusHistoryClient<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParcelStatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelStatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParcelStatusHistories
     * const parcelStatusHistories = await prisma.parcelStatusHistory.findMany()
     * 
     * // Get first 10 ParcelStatusHistories
     * const parcelStatusHistories = await prisma.parcelStatusHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parcelStatusHistoryWithIdOnly = await prisma.parcelStatusHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParcelStatusHistoryFindManyArgs>(args?: SelectSubset<T, ParcelStatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParcelStatusHistory.
     * @param {ParcelStatusHistoryCreateArgs} args - Arguments to create a ParcelStatusHistory.
     * @example
     * // Create one ParcelStatusHistory
     * const ParcelStatusHistory = await prisma.parcelStatusHistory.create({
     *   data: {
     *     // ... data to create a ParcelStatusHistory
     *   }
     * })
     * 
     */
    create<T extends ParcelStatusHistoryCreateArgs>(args: SelectSubset<T, ParcelStatusHistoryCreateArgs<ExtArgs>>): Prisma__ParcelStatusHistoryClient<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParcelStatusHistories.
     * @param {ParcelStatusHistoryCreateManyArgs} args - Arguments to create many ParcelStatusHistories.
     * @example
     * // Create many ParcelStatusHistories
     * const parcelStatusHistory = await prisma.parcelStatusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParcelStatusHistoryCreateManyArgs>(args?: SelectSubset<T, ParcelStatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParcelStatusHistories and returns the data saved in the database.
     * @param {ParcelStatusHistoryCreateManyAndReturnArgs} args - Arguments to create many ParcelStatusHistories.
     * @example
     * // Create many ParcelStatusHistories
     * const parcelStatusHistory = await prisma.parcelStatusHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParcelStatusHistories and only return the `id`
     * const parcelStatusHistoryWithIdOnly = await prisma.parcelStatusHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParcelStatusHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ParcelStatusHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParcelStatusHistory.
     * @param {ParcelStatusHistoryDeleteArgs} args - Arguments to delete one ParcelStatusHistory.
     * @example
     * // Delete one ParcelStatusHistory
     * const ParcelStatusHistory = await prisma.parcelStatusHistory.delete({
     *   where: {
     *     // ... filter to delete one ParcelStatusHistory
     *   }
     * })
     * 
     */
    delete<T extends ParcelStatusHistoryDeleteArgs>(args: SelectSubset<T, ParcelStatusHistoryDeleteArgs<ExtArgs>>): Prisma__ParcelStatusHistoryClient<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParcelStatusHistory.
     * @param {ParcelStatusHistoryUpdateArgs} args - Arguments to update one ParcelStatusHistory.
     * @example
     * // Update one ParcelStatusHistory
     * const parcelStatusHistory = await prisma.parcelStatusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParcelStatusHistoryUpdateArgs>(args: SelectSubset<T, ParcelStatusHistoryUpdateArgs<ExtArgs>>): Prisma__ParcelStatusHistoryClient<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParcelStatusHistories.
     * @param {ParcelStatusHistoryDeleteManyArgs} args - Arguments to filter ParcelStatusHistories to delete.
     * @example
     * // Delete a few ParcelStatusHistories
     * const { count } = await prisma.parcelStatusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParcelStatusHistoryDeleteManyArgs>(args?: SelectSubset<T, ParcelStatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParcelStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelStatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParcelStatusHistories
     * const parcelStatusHistory = await prisma.parcelStatusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParcelStatusHistoryUpdateManyArgs>(args: SelectSubset<T, ParcelStatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParcelStatusHistories and returns the data updated in the database.
     * @param {ParcelStatusHistoryUpdateManyAndReturnArgs} args - Arguments to update many ParcelStatusHistories.
     * @example
     * // Update many ParcelStatusHistories
     * const parcelStatusHistory = await prisma.parcelStatusHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParcelStatusHistories and only return the `id`
     * const parcelStatusHistoryWithIdOnly = await prisma.parcelStatusHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParcelStatusHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ParcelStatusHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParcelStatusHistory.
     * @param {ParcelStatusHistoryUpsertArgs} args - Arguments to update or create a ParcelStatusHistory.
     * @example
     * // Update or create a ParcelStatusHistory
     * const parcelStatusHistory = await prisma.parcelStatusHistory.upsert({
     *   create: {
     *     // ... data to create a ParcelStatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParcelStatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends ParcelStatusHistoryUpsertArgs>(args: SelectSubset<T, ParcelStatusHistoryUpsertArgs<ExtArgs>>): Prisma__ParcelStatusHistoryClient<$Result.GetResult<Prisma.$ParcelStatusHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParcelStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelStatusHistoryCountArgs} args - Arguments to filter ParcelStatusHistories to count.
     * @example
     * // Count the number of ParcelStatusHistories
     * const count = await prisma.parcelStatusHistory.count({
     *   where: {
     *     // ... the filter for the ParcelStatusHistories we want to count
     *   }
     * })
    **/
    count<T extends ParcelStatusHistoryCountArgs>(
      args?: Subset<T, ParcelStatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParcelStatusHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParcelStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelStatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParcelStatusHistoryAggregateArgs>(args: Subset<T, ParcelStatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetParcelStatusHistoryAggregateType<T>>

    /**
     * Group by ParcelStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelStatusHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParcelStatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParcelStatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ParcelStatusHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParcelStatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParcelStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParcelStatusHistory model
   */
  readonly fields: ParcelStatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParcelStatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParcelStatusHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parcel<T extends ParcelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParcelDefaultArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParcelStatusHistory model
   */
  interface ParcelStatusHistoryFieldRefs {
    readonly id: FieldRef<"ParcelStatusHistory", 'String'>
    readonly parcelId: FieldRef<"ParcelStatusHistory", 'String'>
    readonly status: FieldRef<"ParcelStatusHistory", 'ParcelStatus'>
    readonly notes: FieldRef<"ParcelStatusHistory", 'String'>
    readonly createdAt: FieldRef<"ParcelStatusHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ParcelStatusHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParcelStatusHistory findUnique
   */
  export type ParcelStatusHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ParcelStatusHistory to fetch.
     */
    where: ParcelStatusHistoryWhereUniqueInput
  }

  /**
   * ParcelStatusHistory findUniqueOrThrow
   */
  export type ParcelStatusHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ParcelStatusHistory to fetch.
     */
    where: ParcelStatusHistoryWhereUniqueInput
  }

  /**
   * ParcelStatusHistory findFirst
   */
  export type ParcelStatusHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ParcelStatusHistory to fetch.
     */
    where?: ParcelStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParcelStatusHistories to fetch.
     */
    orderBy?: ParcelStatusHistoryOrderByWithRelationInput | ParcelStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParcelStatusHistories.
     */
    cursor?: ParcelStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParcelStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParcelStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParcelStatusHistories.
     */
    distinct?: ParcelStatusHistoryScalarFieldEnum | ParcelStatusHistoryScalarFieldEnum[]
  }

  /**
   * ParcelStatusHistory findFirstOrThrow
   */
  export type ParcelStatusHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ParcelStatusHistory to fetch.
     */
    where?: ParcelStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParcelStatusHistories to fetch.
     */
    orderBy?: ParcelStatusHistoryOrderByWithRelationInput | ParcelStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParcelStatusHistories.
     */
    cursor?: ParcelStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParcelStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParcelStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParcelStatusHistories.
     */
    distinct?: ParcelStatusHistoryScalarFieldEnum | ParcelStatusHistoryScalarFieldEnum[]
  }

  /**
   * ParcelStatusHistory findMany
   */
  export type ParcelStatusHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ParcelStatusHistories to fetch.
     */
    where?: ParcelStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParcelStatusHistories to fetch.
     */
    orderBy?: ParcelStatusHistoryOrderByWithRelationInput | ParcelStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParcelStatusHistories.
     */
    cursor?: ParcelStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParcelStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParcelStatusHistories.
     */
    skip?: number
    distinct?: ParcelStatusHistoryScalarFieldEnum | ParcelStatusHistoryScalarFieldEnum[]
  }

  /**
   * ParcelStatusHistory create
   */
  export type ParcelStatusHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ParcelStatusHistory.
     */
    data: XOR<ParcelStatusHistoryCreateInput, ParcelStatusHistoryUncheckedCreateInput>
  }

  /**
   * ParcelStatusHistory createMany
   */
  export type ParcelStatusHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParcelStatusHistories.
     */
    data: ParcelStatusHistoryCreateManyInput | ParcelStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParcelStatusHistory createManyAndReturn
   */
  export type ParcelStatusHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ParcelStatusHistories.
     */
    data: ParcelStatusHistoryCreateManyInput | ParcelStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParcelStatusHistory update
   */
  export type ParcelStatusHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ParcelStatusHistory.
     */
    data: XOR<ParcelStatusHistoryUpdateInput, ParcelStatusHistoryUncheckedUpdateInput>
    /**
     * Choose, which ParcelStatusHistory to update.
     */
    where: ParcelStatusHistoryWhereUniqueInput
  }

  /**
   * ParcelStatusHistory updateMany
   */
  export type ParcelStatusHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParcelStatusHistories.
     */
    data: XOR<ParcelStatusHistoryUpdateManyMutationInput, ParcelStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ParcelStatusHistories to update
     */
    where?: ParcelStatusHistoryWhereInput
    /**
     * Limit how many ParcelStatusHistories to update.
     */
    limit?: number
  }

  /**
   * ParcelStatusHistory updateManyAndReturn
   */
  export type ParcelStatusHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ParcelStatusHistories.
     */
    data: XOR<ParcelStatusHistoryUpdateManyMutationInput, ParcelStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ParcelStatusHistories to update
     */
    where?: ParcelStatusHistoryWhereInput
    /**
     * Limit how many ParcelStatusHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParcelStatusHistory upsert
   */
  export type ParcelStatusHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ParcelStatusHistory to update in case it exists.
     */
    where: ParcelStatusHistoryWhereUniqueInput
    /**
     * In case the ParcelStatusHistory found by the `where` argument doesn't exist, create a new ParcelStatusHistory with this data.
     */
    create: XOR<ParcelStatusHistoryCreateInput, ParcelStatusHistoryUncheckedCreateInput>
    /**
     * In case the ParcelStatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParcelStatusHistoryUpdateInput, ParcelStatusHistoryUncheckedUpdateInput>
  }

  /**
   * ParcelStatusHistory delete
   */
  export type ParcelStatusHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter which ParcelStatusHistory to delete.
     */
    where: ParcelStatusHistoryWhereUniqueInput
  }

  /**
   * ParcelStatusHistory deleteMany
   */
  export type ParcelStatusHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParcelStatusHistories to delete
     */
    where?: ParcelStatusHistoryWhereInput
    /**
     * Limit how many ParcelStatusHistories to delete.
     */
    limit?: number
  }

  /**
   * ParcelStatusHistory without action
   */
  export type ParcelStatusHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelStatusHistory
     */
    select?: ParcelStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParcelStatusHistory
     */
    omit?: ParcelStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelStatusHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    parcelId: string | null
    type: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    parcelId: string | null
    type: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    parcelId: number
    type: number
    subject: number
    message: number
    isRead: number
    sentAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    parcelId?: true
    type?: true
    subject?: true
    message?: true
    isRead?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    parcelId?: true
    type?: true
    subject?: true
    message?: true
    isRead?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    parcelId?: true
    type?: true
    subject?: true
    message?: true
    isRead?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    parcelId: string | null
    type: string
    subject: string | null
    message: string
    isRead: boolean
    sentAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parcelId?: boolean
    type?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parcel?: boolean | Notification$parcelArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parcelId?: boolean
    type?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parcel?: boolean | Notification$parcelArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parcelId?: boolean
    type?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parcel?: boolean | Notification$parcelArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    parcelId?: boolean
    type?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "parcelId" | "type" | "subject" | "message" | "isRead" | "sentAt" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parcel?: boolean | Notification$parcelArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parcel?: boolean | Notification$parcelArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parcel?: boolean | Notification$parcelArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      parcel: Prisma.$ParcelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      parcelId: string | null
      type: string
      subject: string | null
      message: string
      isRead: boolean
      sentAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parcel<T extends Notification$parcelArgs<ExtArgs> = {}>(args?: Subset<T, Notification$parcelArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly parcelId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly subject: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.parcel
   */
  export type Notification$parcelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    where?: ParcelWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model WeightPricing
   */

  export type AggregateWeightPricing = {
    _count: WeightPricingCountAggregateOutputType | null
    _avg: WeightPricingAvgAggregateOutputType | null
    _sum: WeightPricingSumAggregateOutputType | null
    _min: WeightPricingMinAggregateOutputType | null
    _max: WeightPricingMaxAggregateOutputType | null
  }

  export type WeightPricingAvgAggregateOutputType = {
    minWeight: number | null
    maxWeight: number | null
    pricePerKg: number | null
    basePrice: number | null
  }

  export type WeightPricingSumAggregateOutputType = {
    minWeight: number | null
    maxWeight: number | null
    pricePerKg: number | null
    basePrice: number | null
  }

  export type WeightPricingMinAggregateOutputType = {
    id: string | null
    category: $Enums.WeightCategory | null
    minWeight: number | null
    maxWeight: number | null
    pricePerKg: number | null
    basePrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeightPricingMaxAggregateOutputType = {
    id: string | null
    category: $Enums.WeightCategory | null
    minWeight: number | null
    maxWeight: number | null
    pricePerKg: number | null
    basePrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeightPricingCountAggregateOutputType = {
    id: number
    category: number
    minWeight: number
    maxWeight: number
    pricePerKg: number
    basePrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeightPricingAvgAggregateInputType = {
    minWeight?: true
    maxWeight?: true
    pricePerKg?: true
    basePrice?: true
  }

  export type WeightPricingSumAggregateInputType = {
    minWeight?: true
    maxWeight?: true
    pricePerKg?: true
    basePrice?: true
  }

  export type WeightPricingMinAggregateInputType = {
    id?: true
    category?: true
    minWeight?: true
    maxWeight?: true
    pricePerKg?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeightPricingMaxAggregateInputType = {
    id?: true
    category?: true
    minWeight?: true
    maxWeight?: true
    pricePerKg?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeightPricingCountAggregateInputType = {
    id?: true
    category?: true
    minWeight?: true
    maxWeight?: true
    pricePerKg?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeightPricingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightPricing to aggregate.
     */
    where?: WeightPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightPricings to fetch.
     */
    orderBy?: WeightPricingOrderByWithRelationInput | WeightPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeightPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeightPricings
    **/
    _count?: true | WeightPricingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeightPricingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeightPricingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeightPricingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeightPricingMaxAggregateInputType
  }

  export type GetWeightPricingAggregateType<T extends WeightPricingAggregateArgs> = {
        [P in keyof T & keyof AggregateWeightPricing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeightPricing[P]>
      : GetScalarType<T[P], AggregateWeightPricing[P]>
  }




  export type WeightPricingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightPricingWhereInput
    orderBy?: WeightPricingOrderByWithAggregationInput | WeightPricingOrderByWithAggregationInput[]
    by: WeightPricingScalarFieldEnum[] | WeightPricingScalarFieldEnum
    having?: WeightPricingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeightPricingCountAggregateInputType | true
    _avg?: WeightPricingAvgAggregateInputType
    _sum?: WeightPricingSumAggregateInputType
    _min?: WeightPricingMinAggregateInputType
    _max?: WeightPricingMaxAggregateInputType
  }

  export type WeightPricingGroupByOutputType = {
    id: string
    category: $Enums.WeightCategory
    minWeight: number
    maxWeight: number | null
    pricePerKg: number
    basePrice: number
    createdAt: Date
    updatedAt: Date
    _count: WeightPricingCountAggregateOutputType | null
    _avg: WeightPricingAvgAggregateOutputType | null
    _sum: WeightPricingSumAggregateOutputType | null
    _min: WeightPricingMinAggregateOutputType | null
    _max: WeightPricingMaxAggregateOutputType | null
  }

  type GetWeightPricingGroupByPayload<T extends WeightPricingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeightPricingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeightPricingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeightPricingGroupByOutputType[P]>
            : GetScalarType<T[P], WeightPricingGroupByOutputType[P]>
        }
      >
    >


  export type WeightPricingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    minWeight?: boolean
    maxWeight?: boolean
    pricePerKg?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weightPricing"]>

  export type WeightPricingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    minWeight?: boolean
    maxWeight?: boolean
    pricePerKg?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weightPricing"]>

  export type WeightPricingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    minWeight?: boolean
    maxWeight?: boolean
    pricePerKg?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weightPricing"]>

  export type WeightPricingSelectScalar = {
    id?: boolean
    category?: boolean
    minWeight?: boolean
    maxWeight?: boolean
    pricePerKg?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeightPricingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "minWeight" | "maxWeight" | "pricePerKg" | "basePrice" | "createdAt" | "updatedAt", ExtArgs["result"]["weightPricing"]>

  export type $WeightPricingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeightPricing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: $Enums.WeightCategory
      minWeight: number
      maxWeight: number | null
      pricePerKg: number
      basePrice: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weightPricing"]>
    composites: {}
  }

  type WeightPricingGetPayload<S extends boolean | null | undefined | WeightPricingDefaultArgs> = $Result.GetResult<Prisma.$WeightPricingPayload, S>

  type WeightPricingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeightPricingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeightPricingCountAggregateInputType | true
    }

  export interface WeightPricingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeightPricing'], meta: { name: 'WeightPricing' } }
    /**
     * Find zero or one WeightPricing that matches the filter.
     * @param {WeightPricingFindUniqueArgs} args - Arguments to find a WeightPricing
     * @example
     * // Get one WeightPricing
     * const weightPricing = await prisma.weightPricing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeightPricingFindUniqueArgs>(args: SelectSubset<T, WeightPricingFindUniqueArgs<ExtArgs>>): Prisma__WeightPricingClient<$Result.GetResult<Prisma.$WeightPricingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeightPricing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeightPricingFindUniqueOrThrowArgs} args - Arguments to find a WeightPricing
     * @example
     * // Get one WeightPricing
     * const weightPricing = await prisma.weightPricing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeightPricingFindUniqueOrThrowArgs>(args: SelectSubset<T, WeightPricingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeightPricingClient<$Result.GetResult<Prisma.$WeightPricingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightPricing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightPricingFindFirstArgs} args - Arguments to find a WeightPricing
     * @example
     * // Get one WeightPricing
     * const weightPricing = await prisma.weightPricing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeightPricingFindFirstArgs>(args?: SelectSubset<T, WeightPricingFindFirstArgs<ExtArgs>>): Prisma__WeightPricingClient<$Result.GetResult<Prisma.$WeightPricingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightPricing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightPricingFindFirstOrThrowArgs} args - Arguments to find a WeightPricing
     * @example
     * // Get one WeightPricing
     * const weightPricing = await prisma.weightPricing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeightPricingFindFirstOrThrowArgs>(args?: SelectSubset<T, WeightPricingFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeightPricingClient<$Result.GetResult<Prisma.$WeightPricingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeightPricings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightPricingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeightPricings
     * const weightPricings = await prisma.weightPricing.findMany()
     * 
     * // Get first 10 WeightPricings
     * const weightPricings = await prisma.weightPricing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weightPricingWithIdOnly = await prisma.weightPricing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeightPricingFindManyArgs>(args?: SelectSubset<T, WeightPricingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightPricingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeightPricing.
     * @param {WeightPricingCreateArgs} args - Arguments to create a WeightPricing.
     * @example
     * // Create one WeightPricing
     * const WeightPricing = await prisma.weightPricing.create({
     *   data: {
     *     // ... data to create a WeightPricing
     *   }
     * })
     * 
     */
    create<T extends WeightPricingCreateArgs>(args: SelectSubset<T, WeightPricingCreateArgs<ExtArgs>>): Prisma__WeightPricingClient<$Result.GetResult<Prisma.$WeightPricingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeightPricings.
     * @param {WeightPricingCreateManyArgs} args - Arguments to create many WeightPricings.
     * @example
     * // Create many WeightPricings
     * const weightPricing = await prisma.weightPricing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeightPricingCreateManyArgs>(args?: SelectSubset<T, WeightPricingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeightPricings and returns the data saved in the database.
     * @param {WeightPricingCreateManyAndReturnArgs} args - Arguments to create many WeightPricings.
     * @example
     * // Create many WeightPricings
     * const weightPricing = await prisma.weightPricing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeightPricings and only return the `id`
     * const weightPricingWithIdOnly = await prisma.weightPricing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeightPricingCreateManyAndReturnArgs>(args?: SelectSubset<T, WeightPricingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightPricingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeightPricing.
     * @param {WeightPricingDeleteArgs} args - Arguments to delete one WeightPricing.
     * @example
     * // Delete one WeightPricing
     * const WeightPricing = await prisma.weightPricing.delete({
     *   where: {
     *     // ... filter to delete one WeightPricing
     *   }
     * })
     * 
     */
    delete<T extends WeightPricingDeleteArgs>(args: SelectSubset<T, WeightPricingDeleteArgs<ExtArgs>>): Prisma__WeightPricingClient<$Result.GetResult<Prisma.$WeightPricingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeightPricing.
     * @param {WeightPricingUpdateArgs} args - Arguments to update one WeightPricing.
     * @example
     * // Update one WeightPricing
     * const weightPricing = await prisma.weightPricing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeightPricingUpdateArgs>(args: SelectSubset<T, WeightPricingUpdateArgs<ExtArgs>>): Prisma__WeightPricingClient<$Result.GetResult<Prisma.$WeightPricingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeightPricings.
     * @param {WeightPricingDeleteManyArgs} args - Arguments to filter WeightPricings to delete.
     * @example
     * // Delete a few WeightPricings
     * const { count } = await prisma.weightPricing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeightPricingDeleteManyArgs>(args?: SelectSubset<T, WeightPricingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightPricingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeightPricings
     * const weightPricing = await prisma.weightPricing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeightPricingUpdateManyArgs>(args: SelectSubset<T, WeightPricingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightPricings and returns the data updated in the database.
     * @param {WeightPricingUpdateManyAndReturnArgs} args - Arguments to update many WeightPricings.
     * @example
     * // Update many WeightPricings
     * const weightPricing = await prisma.weightPricing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeightPricings and only return the `id`
     * const weightPricingWithIdOnly = await prisma.weightPricing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeightPricingUpdateManyAndReturnArgs>(args: SelectSubset<T, WeightPricingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightPricingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeightPricing.
     * @param {WeightPricingUpsertArgs} args - Arguments to update or create a WeightPricing.
     * @example
     * // Update or create a WeightPricing
     * const weightPricing = await prisma.weightPricing.upsert({
     *   create: {
     *     // ... data to create a WeightPricing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeightPricing we want to update
     *   }
     * })
     */
    upsert<T extends WeightPricingUpsertArgs>(args: SelectSubset<T, WeightPricingUpsertArgs<ExtArgs>>): Prisma__WeightPricingClient<$Result.GetResult<Prisma.$WeightPricingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeightPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightPricingCountArgs} args - Arguments to filter WeightPricings to count.
     * @example
     * // Count the number of WeightPricings
     * const count = await prisma.weightPricing.count({
     *   where: {
     *     // ... the filter for the WeightPricings we want to count
     *   }
     * })
    **/
    count<T extends WeightPricingCountArgs>(
      args?: Subset<T, WeightPricingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeightPricingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeightPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightPricingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeightPricingAggregateArgs>(args: Subset<T, WeightPricingAggregateArgs>): Prisma.PrismaPromise<GetWeightPricingAggregateType<T>>

    /**
     * Group by WeightPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightPricingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeightPricingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeightPricingGroupByArgs['orderBy'] }
        : { orderBy?: WeightPricingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeightPricingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeightPricingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeightPricing model
   */
  readonly fields: WeightPricingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeightPricing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeightPricingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeightPricing model
   */
  interface WeightPricingFieldRefs {
    readonly id: FieldRef<"WeightPricing", 'String'>
    readonly category: FieldRef<"WeightPricing", 'WeightCategory'>
    readonly minWeight: FieldRef<"WeightPricing", 'Float'>
    readonly maxWeight: FieldRef<"WeightPricing", 'Float'>
    readonly pricePerKg: FieldRef<"WeightPricing", 'Float'>
    readonly basePrice: FieldRef<"WeightPricing", 'Float'>
    readonly createdAt: FieldRef<"WeightPricing", 'DateTime'>
    readonly updatedAt: FieldRef<"WeightPricing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeightPricing findUnique
   */
  export type WeightPricingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
    /**
     * Filter, which WeightPricing to fetch.
     */
    where: WeightPricingWhereUniqueInput
  }

  /**
   * WeightPricing findUniqueOrThrow
   */
  export type WeightPricingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
    /**
     * Filter, which WeightPricing to fetch.
     */
    where: WeightPricingWhereUniqueInput
  }

  /**
   * WeightPricing findFirst
   */
  export type WeightPricingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
    /**
     * Filter, which WeightPricing to fetch.
     */
    where?: WeightPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightPricings to fetch.
     */
    orderBy?: WeightPricingOrderByWithRelationInput | WeightPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightPricings.
     */
    cursor?: WeightPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightPricings.
     */
    distinct?: WeightPricingScalarFieldEnum | WeightPricingScalarFieldEnum[]
  }

  /**
   * WeightPricing findFirstOrThrow
   */
  export type WeightPricingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
    /**
     * Filter, which WeightPricing to fetch.
     */
    where?: WeightPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightPricings to fetch.
     */
    orderBy?: WeightPricingOrderByWithRelationInput | WeightPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightPricings.
     */
    cursor?: WeightPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightPricings.
     */
    distinct?: WeightPricingScalarFieldEnum | WeightPricingScalarFieldEnum[]
  }

  /**
   * WeightPricing findMany
   */
  export type WeightPricingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
    /**
     * Filter, which WeightPricings to fetch.
     */
    where?: WeightPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightPricings to fetch.
     */
    orderBy?: WeightPricingOrderByWithRelationInput | WeightPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeightPricings.
     */
    cursor?: WeightPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightPricings.
     */
    skip?: number
    distinct?: WeightPricingScalarFieldEnum | WeightPricingScalarFieldEnum[]
  }

  /**
   * WeightPricing create
   */
  export type WeightPricingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
    /**
     * The data needed to create a WeightPricing.
     */
    data: XOR<WeightPricingCreateInput, WeightPricingUncheckedCreateInput>
  }

  /**
   * WeightPricing createMany
   */
  export type WeightPricingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeightPricings.
     */
    data: WeightPricingCreateManyInput | WeightPricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeightPricing createManyAndReturn
   */
  export type WeightPricingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
    /**
     * The data used to create many WeightPricings.
     */
    data: WeightPricingCreateManyInput | WeightPricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeightPricing update
   */
  export type WeightPricingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
    /**
     * The data needed to update a WeightPricing.
     */
    data: XOR<WeightPricingUpdateInput, WeightPricingUncheckedUpdateInput>
    /**
     * Choose, which WeightPricing to update.
     */
    where: WeightPricingWhereUniqueInput
  }

  /**
   * WeightPricing updateMany
   */
  export type WeightPricingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeightPricings.
     */
    data: XOR<WeightPricingUpdateManyMutationInput, WeightPricingUncheckedUpdateManyInput>
    /**
     * Filter which WeightPricings to update
     */
    where?: WeightPricingWhereInput
    /**
     * Limit how many WeightPricings to update.
     */
    limit?: number
  }

  /**
   * WeightPricing updateManyAndReturn
   */
  export type WeightPricingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
    /**
     * The data used to update WeightPricings.
     */
    data: XOR<WeightPricingUpdateManyMutationInput, WeightPricingUncheckedUpdateManyInput>
    /**
     * Filter which WeightPricings to update
     */
    where?: WeightPricingWhereInput
    /**
     * Limit how many WeightPricings to update.
     */
    limit?: number
  }

  /**
   * WeightPricing upsert
   */
  export type WeightPricingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
    /**
     * The filter to search for the WeightPricing to update in case it exists.
     */
    where: WeightPricingWhereUniqueInput
    /**
     * In case the WeightPricing found by the `where` argument doesn't exist, create a new WeightPricing with this data.
     */
    create: XOR<WeightPricingCreateInput, WeightPricingUncheckedCreateInput>
    /**
     * In case the WeightPricing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeightPricingUpdateInput, WeightPricingUncheckedUpdateInput>
  }

  /**
   * WeightPricing delete
   */
  export type WeightPricingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
    /**
     * Filter which WeightPricing to delete.
     */
    where: WeightPricingWhereUniqueInput
  }

  /**
   * WeightPricing deleteMany
   */
  export type WeightPricingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightPricings to delete
     */
    where?: WeightPricingWhereInput
    /**
     * Limit how many WeightPricings to delete.
     */
    limit?: number
  }

  /**
   * WeightPricing without action
   */
  export type WeightPricingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightPricing
     */
    select?: WeightPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightPricing
     */
    omit?: WeightPricingOmit<ExtArgs> | null
  }


  /**
   * Model SystemSettings
   */

  export type AggregateSystemSettings = {
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  export type SystemSettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemSettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemSettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingsMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemSettingsMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemSettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to aggregate.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type GetSystemSettingsAggregateType<T extends SystemSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSettings[P]>
      : GetScalarType<T[P], AggregateSystemSettings[P]>
  }




  export type SystemSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingsWhereInput
    orderBy?: SystemSettingsOrderByWithAggregationInput | SystemSettingsOrderByWithAggregationInput[]
    by: SystemSettingsScalarFieldEnum[] | SystemSettingsScalarFieldEnum
    having?: SystemSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingsCountAggregateInputType | true
    _min?: SystemSettingsMinAggregateInputType
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type SystemSettingsGroupByOutputType = {
    id: string
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  type GetSystemSettingsGroupByPayload<T extends SystemSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SystemSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["systemSettings"]>

  export type $SystemSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemSettings"]>
    composites: {}
  }

  type SystemSettingsGetPayload<S extends boolean | null | undefined | SystemSettingsDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingsPayload, S>

  type SystemSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingsCountAggregateInputType | true
    }

  export interface SystemSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSettings'], meta: { name: 'SystemSettings' } }
    /**
     * Find zero or one SystemSettings that matches the filter.
     * @param {SystemSettingsFindUniqueArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingsFindUniqueArgs>(args: SelectSubset<T, SystemSettingsFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingsFindUniqueOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingsFindFirstArgs>(args?: SelectSubset<T, SystemSettingsFindFirstArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingsFindManyArgs>(args?: SelectSubset<T, SystemSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSettings.
     * @param {SystemSettingsCreateArgs} args - Arguments to create a SystemSettings.
     * @example
     * // Create one SystemSettings
     * const SystemSettings = await prisma.systemSettings.create({
     *   data: {
     *     // ... data to create a SystemSettings
     *   }
     * })
     * 
     */
    create<T extends SystemSettingsCreateArgs>(args: SelectSubset<T, SystemSettingsCreateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingsCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingsCreateManyArgs>(args?: SelectSubset<T, SystemSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingsCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSettings.
     * @param {SystemSettingsDeleteArgs} args - Arguments to delete one SystemSettings.
     * @example
     * // Delete one SystemSettings
     * const SystemSettings = await prisma.systemSettings.delete({
     *   where: {
     *     // ... filter to delete one SystemSettings
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingsDeleteArgs>(args: SelectSubset<T, SystemSettingsDeleteArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSettings.
     * @param {SystemSettingsUpdateArgs} args - Arguments to update one SystemSettings.
     * @example
     * // Update one SystemSettings
     * const systemSettings = await prisma.systemSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingsUpdateArgs>(args: SelectSubset<T, SystemSettingsUpdateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingsDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingsDeleteManyArgs>(args?: SelectSubset<T, SystemSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingsUpdateManyArgs>(args: SelectSubset<T, SystemSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingsUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSettings.
     * @param {SystemSettingsUpsertArgs} args - Arguments to update or create a SystemSettings.
     * @example
     * // Update or create a SystemSettings
     * const systemSettings = await prisma.systemSettings.upsert({
     *   create: {
     *     // ... data to create a SystemSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSettings we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingsUpsertArgs>(args: SelectSubset<T, SystemSettingsUpsertArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSettings.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingsCountArgs>(
      args?: Subset<T, SystemSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemSettingsAggregateArgs>(args: Subset<T, SystemSettingsAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingsAggregateType<T>>

    /**
     * Group by SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSettings model
   */
  readonly fields: SystemSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemSettings model
   */
  interface SystemSettingsFieldRefs {
    readonly id: FieldRef<"SystemSettings", 'String'>
    readonly key: FieldRef<"SystemSettings", 'String'>
    readonly value: FieldRef<"SystemSettings", 'String'>
    readonly createdAt: FieldRef<"SystemSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSettings findUnique
   */
  export type SystemSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findUniqueOrThrow
   */
  export type SystemSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findFirst
   */
  export type SystemSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findFirstOrThrow
   */
  export type SystemSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findMany
   */
  export type SystemSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings create
   */
  export type SystemSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSettings.
     */
    data: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
  }

  /**
   * SystemSettings createMany
   */
  export type SystemSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings createManyAndReturn
   */
  export type SystemSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings update
   */
  export type SystemSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSettings.
     */
    data: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
    /**
     * Choose, which SystemSettings to update.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings updateMany
   */
  export type SystemSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings updateManyAndReturn
   */
  export type SystemSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings upsert
   */
  export type SystemSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSettings to update in case it exists.
     */
    where: SystemSettingsWhereUniqueInput
    /**
     * In case the SystemSettings found by the `where` argument doesn't exist, create a new SystemSettings with this data.
     */
    create: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
    /**
     * In case the SystemSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
  }

  /**
   * SystemSettings delete
   */
  export type SystemSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter which SystemSettings to delete.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings deleteMany
   */
  export type SystemSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSettings without action
   */
  export type SystemSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ParcelScalarFieldEnum: {
    id: 'id',
    trackingId: 'trackingId',
    description: 'description',
    weight: 'weight',
    category: 'category',
    status: 'status',
    senderId: 'senderId',
    receiverId: 'receiverId',
    pickupAddress: 'pickupAddress',
    pickupLatitude: 'pickupLatitude',
    pickupLongitude: 'pickupLongitude',
    deliveryAddress: 'deliveryAddress',
    deliveryLatitude: 'deliveryLatitude',
    deliveryLongitude: 'deliveryLongitude',
    basePrice: 'basePrice',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    pickedUpAt: 'pickedUpAt',
    deliveredAt: 'deliveredAt'
  };

  export type ParcelScalarFieldEnum = (typeof ParcelScalarFieldEnum)[keyof typeof ParcelScalarFieldEnum]


  export const ParcelStatusHistoryScalarFieldEnum: {
    id: 'id',
    parcelId: 'parcelId',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParcelStatusHistoryScalarFieldEnum = (typeof ParcelStatusHistoryScalarFieldEnum)[keyof typeof ParcelStatusHistoryScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    parcelId: 'parcelId',
    type: 'type',
    subject: 'subject',
    message: 'message',
    isRead: 'isRead',
    sentAt: 'sentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const WeightPricingScalarFieldEnum: {
    id: 'id',
    category: 'category',
    minWeight: 'minWeight',
    maxWeight: 'maxWeight',
    pricePerKg: 'pricePerKg',
    basePrice: 'basePrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeightPricingScalarFieldEnum = (typeof WeightPricingScalarFieldEnum)[keyof typeof WeightPricingScalarFieldEnum]


  export const SystemSettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingsScalarFieldEnum = (typeof SystemSettingsScalarFieldEnum)[keyof typeof SystemSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'WeightCategory'
   */
  export type EnumWeightCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeightCategory'>
    


  /**
   * Reference to a field of type 'WeightCategory[]'
   */
  export type ListEnumWeightCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeightCategory[]'>
    


  /**
   * Reference to a field of type 'ParcelStatus'
   */
  export type EnumParcelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParcelStatus'>
    


  /**
   * Reference to a field of type 'ParcelStatus[]'
   */
  export type ListEnumParcelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParcelStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sentParcels?: ParcelListRelationFilter
    receivedParcels?: ParcelListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    sentParcels?: ParcelOrderByRelationAggregateInput
    receivedParcels?: ParcelOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sentParcels?: ParcelListRelationFilter
    receivedParcels?: ParcelListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ParcelWhereInput = {
    AND?: ParcelWhereInput | ParcelWhereInput[]
    OR?: ParcelWhereInput[]
    NOT?: ParcelWhereInput | ParcelWhereInput[]
    id?: StringFilter<"Parcel"> | string
    trackingId?: StringFilter<"Parcel"> | string
    description?: StringFilter<"Parcel"> | string
    weight?: FloatFilter<"Parcel"> | number
    category?: EnumWeightCategoryFilter<"Parcel"> | $Enums.WeightCategory
    status?: EnumParcelStatusFilter<"Parcel"> | $Enums.ParcelStatus
    senderId?: StringFilter<"Parcel"> | string
    receiverId?: StringFilter<"Parcel"> | string
    pickupAddress?: StringFilter<"Parcel"> | string
    pickupLatitude?: FloatNullableFilter<"Parcel"> | number | null
    pickupLongitude?: FloatNullableFilter<"Parcel"> | number | null
    deliveryAddress?: StringFilter<"Parcel"> | string
    deliveryLatitude?: FloatNullableFilter<"Parcel"> | number | null
    deliveryLongitude?: FloatNullableFilter<"Parcel"> | number | null
    basePrice?: FloatFilter<"Parcel"> | number
    totalPrice?: FloatFilter<"Parcel"> | number
    createdAt?: DateTimeFilter<"Parcel"> | Date | string
    updatedAt?: DateTimeFilter<"Parcel"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
    pickedUpAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    statusHistory?: ParcelStatusHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type ParcelOrderByWithRelationInput = {
    id?: SortOrder
    trackingId?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    category?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    pickupAddress?: SortOrder
    pickupLatitude?: SortOrderInput | SortOrder
    pickupLongitude?: SortOrderInput | SortOrder
    deliveryAddress?: SortOrder
    deliveryLatitude?: SortOrderInput | SortOrder
    deliveryLongitude?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    pickedUpAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    statusHistory?: ParcelStatusHistoryOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type ParcelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trackingId?: string
    AND?: ParcelWhereInput | ParcelWhereInput[]
    OR?: ParcelWhereInput[]
    NOT?: ParcelWhereInput | ParcelWhereInput[]
    description?: StringFilter<"Parcel"> | string
    weight?: FloatFilter<"Parcel"> | number
    category?: EnumWeightCategoryFilter<"Parcel"> | $Enums.WeightCategory
    status?: EnumParcelStatusFilter<"Parcel"> | $Enums.ParcelStatus
    senderId?: StringFilter<"Parcel"> | string
    receiverId?: StringFilter<"Parcel"> | string
    pickupAddress?: StringFilter<"Parcel"> | string
    pickupLatitude?: FloatNullableFilter<"Parcel"> | number | null
    pickupLongitude?: FloatNullableFilter<"Parcel"> | number | null
    deliveryAddress?: StringFilter<"Parcel"> | string
    deliveryLatitude?: FloatNullableFilter<"Parcel"> | number | null
    deliveryLongitude?: FloatNullableFilter<"Parcel"> | number | null
    basePrice?: FloatFilter<"Parcel"> | number
    totalPrice?: FloatFilter<"Parcel"> | number
    createdAt?: DateTimeFilter<"Parcel"> | Date | string
    updatedAt?: DateTimeFilter<"Parcel"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
    pickedUpAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    statusHistory?: ParcelStatusHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "trackingId">

  export type ParcelOrderByWithAggregationInput = {
    id?: SortOrder
    trackingId?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    category?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    pickupAddress?: SortOrder
    pickupLatitude?: SortOrderInput | SortOrder
    pickupLongitude?: SortOrderInput | SortOrder
    deliveryAddress?: SortOrder
    deliveryLatitude?: SortOrderInput | SortOrder
    deliveryLongitude?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    pickedUpAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    _count?: ParcelCountOrderByAggregateInput
    _avg?: ParcelAvgOrderByAggregateInput
    _max?: ParcelMaxOrderByAggregateInput
    _min?: ParcelMinOrderByAggregateInput
    _sum?: ParcelSumOrderByAggregateInput
  }

  export type ParcelScalarWhereWithAggregatesInput = {
    AND?: ParcelScalarWhereWithAggregatesInput | ParcelScalarWhereWithAggregatesInput[]
    OR?: ParcelScalarWhereWithAggregatesInput[]
    NOT?: ParcelScalarWhereWithAggregatesInput | ParcelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parcel"> | string
    trackingId?: StringWithAggregatesFilter<"Parcel"> | string
    description?: StringWithAggregatesFilter<"Parcel"> | string
    weight?: FloatWithAggregatesFilter<"Parcel"> | number
    category?: EnumWeightCategoryWithAggregatesFilter<"Parcel"> | $Enums.WeightCategory
    status?: EnumParcelStatusWithAggregatesFilter<"Parcel"> | $Enums.ParcelStatus
    senderId?: StringWithAggregatesFilter<"Parcel"> | string
    receiverId?: StringWithAggregatesFilter<"Parcel"> | string
    pickupAddress?: StringWithAggregatesFilter<"Parcel"> | string
    pickupLatitude?: FloatNullableWithAggregatesFilter<"Parcel"> | number | null
    pickupLongitude?: FloatNullableWithAggregatesFilter<"Parcel"> | number | null
    deliveryAddress?: StringWithAggregatesFilter<"Parcel"> | string
    deliveryLatitude?: FloatNullableWithAggregatesFilter<"Parcel"> | number | null
    deliveryLongitude?: FloatNullableWithAggregatesFilter<"Parcel"> | number | null
    basePrice?: FloatWithAggregatesFilter<"Parcel"> | number
    totalPrice?: FloatWithAggregatesFilter<"Parcel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Parcel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parcel"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Parcel"> | Date | string | null
    pickedUpAt?: DateTimeNullableWithAggregatesFilter<"Parcel"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"Parcel"> | Date | string | null
  }

  export type ParcelStatusHistoryWhereInput = {
    AND?: ParcelStatusHistoryWhereInput | ParcelStatusHistoryWhereInput[]
    OR?: ParcelStatusHistoryWhereInput[]
    NOT?: ParcelStatusHistoryWhereInput | ParcelStatusHistoryWhereInput[]
    id?: StringFilter<"ParcelStatusHistory"> | string
    parcelId?: StringFilter<"ParcelStatusHistory"> | string
    status?: EnumParcelStatusFilter<"ParcelStatusHistory"> | $Enums.ParcelStatus
    notes?: StringNullableFilter<"ParcelStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"ParcelStatusHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ParcelStatusHistory"> | Date | string
    parcel?: XOR<ParcelScalarRelationFilter, ParcelWhereInput>
  }

  export type ParcelStatusHistoryOrderByWithRelationInput = {
    id?: SortOrder
    parcelId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parcel?: ParcelOrderByWithRelationInput
  }

  export type ParcelStatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParcelStatusHistoryWhereInput | ParcelStatusHistoryWhereInput[]
    OR?: ParcelStatusHistoryWhereInput[]
    NOT?: ParcelStatusHistoryWhereInput | ParcelStatusHistoryWhereInput[]
    parcelId?: StringFilter<"ParcelStatusHistory"> | string
    status?: EnumParcelStatusFilter<"ParcelStatusHistory"> | $Enums.ParcelStatus
    notes?: StringNullableFilter<"ParcelStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"ParcelStatusHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ParcelStatusHistory"> | Date | string
    parcel?: XOR<ParcelScalarRelationFilter, ParcelWhereInput>
  }, "id">

  export type ParcelStatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    parcelId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParcelStatusHistoryCountOrderByAggregateInput
    _max?: ParcelStatusHistoryMaxOrderByAggregateInput
    _min?: ParcelStatusHistoryMinOrderByAggregateInput
  }

  export type ParcelStatusHistoryScalarWhereWithAggregatesInput = {
    AND?: ParcelStatusHistoryScalarWhereWithAggregatesInput | ParcelStatusHistoryScalarWhereWithAggregatesInput[]
    OR?: ParcelStatusHistoryScalarWhereWithAggregatesInput[]
    NOT?: ParcelStatusHistoryScalarWhereWithAggregatesInput | ParcelStatusHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParcelStatusHistory"> | string
    parcelId?: StringWithAggregatesFilter<"ParcelStatusHistory"> | string
    status?: EnumParcelStatusWithAggregatesFilter<"ParcelStatusHistory"> | $Enums.ParcelStatus
    notes?: StringNullableWithAggregatesFilter<"ParcelStatusHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ParcelStatusHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParcelStatusHistory"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    parcelId?: StringNullableFilter<"Notification"> | string | null
    type?: StringFilter<"Notification"> | string
    subject?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parcel?: XOR<ParcelNullableScalarRelationFilter, ParcelWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    parcelId?: SortOrderInput | SortOrder
    type?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    parcel?: ParcelOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    parcelId?: StringNullableFilter<"Notification"> | string | null
    type?: StringFilter<"Notification"> | string
    subject?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parcel?: XOR<ParcelNullableScalarRelationFilter, ParcelWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    parcelId?: SortOrderInput | SortOrder
    type?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    parcelId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    type?: StringWithAggregatesFilter<"Notification"> | string
    subject?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type WeightPricingWhereInput = {
    AND?: WeightPricingWhereInput | WeightPricingWhereInput[]
    OR?: WeightPricingWhereInput[]
    NOT?: WeightPricingWhereInput | WeightPricingWhereInput[]
    id?: StringFilter<"WeightPricing"> | string
    category?: EnumWeightCategoryFilter<"WeightPricing"> | $Enums.WeightCategory
    minWeight?: FloatFilter<"WeightPricing"> | number
    maxWeight?: FloatNullableFilter<"WeightPricing"> | number | null
    pricePerKg?: FloatFilter<"WeightPricing"> | number
    basePrice?: FloatFilter<"WeightPricing"> | number
    createdAt?: DateTimeFilter<"WeightPricing"> | Date | string
    updatedAt?: DateTimeFilter<"WeightPricing"> | Date | string
  }

  export type WeightPricingOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    minWeight?: SortOrder
    maxWeight?: SortOrderInput | SortOrder
    pricePerKg?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeightPricingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    category?: $Enums.WeightCategory
    AND?: WeightPricingWhereInput | WeightPricingWhereInput[]
    OR?: WeightPricingWhereInput[]
    NOT?: WeightPricingWhereInput | WeightPricingWhereInput[]
    minWeight?: FloatFilter<"WeightPricing"> | number
    maxWeight?: FloatNullableFilter<"WeightPricing"> | number | null
    pricePerKg?: FloatFilter<"WeightPricing"> | number
    basePrice?: FloatFilter<"WeightPricing"> | number
    createdAt?: DateTimeFilter<"WeightPricing"> | Date | string
    updatedAt?: DateTimeFilter<"WeightPricing"> | Date | string
  }, "id" | "category">

  export type WeightPricingOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    minWeight?: SortOrder
    maxWeight?: SortOrderInput | SortOrder
    pricePerKg?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeightPricingCountOrderByAggregateInput
    _avg?: WeightPricingAvgOrderByAggregateInput
    _max?: WeightPricingMaxOrderByAggregateInput
    _min?: WeightPricingMinOrderByAggregateInput
    _sum?: WeightPricingSumOrderByAggregateInput
  }

  export type WeightPricingScalarWhereWithAggregatesInput = {
    AND?: WeightPricingScalarWhereWithAggregatesInput | WeightPricingScalarWhereWithAggregatesInput[]
    OR?: WeightPricingScalarWhereWithAggregatesInput[]
    NOT?: WeightPricingScalarWhereWithAggregatesInput | WeightPricingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeightPricing"> | string
    category?: EnumWeightCategoryWithAggregatesFilter<"WeightPricing"> | $Enums.WeightCategory
    minWeight?: FloatWithAggregatesFilter<"WeightPricing"> | number
    maxWeight?: FloatNullableWithAggregatesFilter<"WeightPricing"> | number | null
    pricePerKg?: FloatWithAggregatesFilter<"WeightPricing"> | number
    basePrice?: FloatWithAggregatesFilter<"WeightPricing"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WeightPricing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeightPricing"> | Date | string
  }

  export type SystemSettingsWhereInput = {
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    id?: StringFilter<"SystemSettings"> | string
    key?: StringFilter<"SystemSettings"> | string
    value?: StringFilter<"SystemSettings"> | string
    createdAt?: DateTimeFilter<"SystemSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }

  export type SystemSettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    value?: StringFilter<"SystemSettings"> | string
    createdAt?: DateTimeFilter<"SystemSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }, "id" | "key">

  export type SystemSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingsCountOrderByAggregateInput
    _max?: SystemSettingsMaxOrderByAggregateInput
    _min?: SystemSettingsMinOrderByAggregateInput
  }

  export type SystemSettingsScalarWhereWithAggregatesInput = {
    AND?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    OR?: SystemSettingsScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSettings"> | string
    key?: StringWithAggregatesFilter<"SystemSettings"> | string
    value?: StringWithAggregatesFilter<"SystemSettings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sentParcels?: ParcelCreateNestedManyWithoutSenderInput
    receivedParcels?: ParcelCreateNestedManyWithoutReceiverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sentParcels?: ParcelUncheckedCreateNestedManyWithoutSenderInput
    receivedParcels?: ParcelUncheckedCreateNestedManyWithoutReceiverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentParcels?: ParcelUpdateManyWithoutSenderNestedInput
    receivedParcels?: ParcelUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentParcels?: ParcelUncheckedUpdateManyWithoutSenderNestedInput
    receivedParcels?: ParcelUncheckedUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParcelCreateInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    sender: UserCreateNestedOneWithoutSentParcelsInput
    receiver: UserCreateNestedOneWithoutReceivedParcelsInput
    statusHistory?: ParcelStatusHistoryCreateNestedManyWithoutParcelInput
    notifications?: NotificationCreateNestedManyWithoutParcelInput
  }

  export type ParcelUncheckedCreateInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    senderId: string
    receiverId: string
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    statusHistory?: ParcelStatusHistoryUncheckedCreateNestedManyWithoutParcelInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutParcelInput
  }

  export type ParcelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sender?: UserUpdateOneRequiredWithoutSentParcelsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedParcelsNestedInput
    statusHistory?: ParcelStatusHistoryUpdateManyWithoutParcelNestedInput
    notifications?: NotificationUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusHistory?: ParcelStatusHistoryUncheckedUpdateManyWithoutParcelNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutParcelNestedInput
  }

  export type ParcelCreateManyInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    senderId: string
    receiverId: string
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
  }

  export type ParcelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParcelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParcelStatusHistoryCreateInput = {
    id?: string
    status: $Enums.ParcelStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parcel: ParcelCreateNestedOneWithoutStatusHistoryInput
  }

  export type ParcelStatusHistoryUncheckedCreateInput = {
    id?: string
    parcelId: string
    status: $Enums.ParcelStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelStatusHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcel?: ParcelUpdateOneRequiredWithoutStatusHistoryNestedInput
  }

  export type ParcelStatusHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parcelId?: StringFieldUpdateOperationsInput | string
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelStatusHistoryCreateManyInput = {
    id?: string
    parcelId: string
    status: $Enums.ParcelStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelStatusHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelStatusHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parcelId?: StringFieldUpdateOperationsInput | string
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    subject?: string | null
    message: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    parcel?: ParcelCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    parcelId?: string | null
    type: string
    subject?: string | null
    message: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    parcel?: ParcelUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parcelId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    parcelId?: string | null
    type: string
    subject?: string | null
    message: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parcelId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeightPricingCreateInput = {
    id?: string
    category: $Enums.WeightCategory
    minWeight: number
    maxWeight?: number | null
    pricePerKg: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeightPricingUncheckedCreateInput = {
    id?: string
    category: $Enums.WeightCategory
    minWeight: number
    maxWeight?: number | null
    pricePerKg: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeightPricingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    minWeight?: FloatFieldUpdateOperationsInput | number
    maxWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerKg?: FloatFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeightPricingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    minWeight?: FloatFieldUpdateOperationsInput | number
    maxWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerKg?: FloatFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeightPricingCreateManyInput = {
    id?: string
    category: $Enums.WeightCategory
    minWeight: number
    maxWeight?: number | null
    pricePerKg: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeightPricingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    minWeight?: FloatFieldUpdateOperationsInput | number
    maxWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerKg?: FloatFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeightPricingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    minWeight?: FloatFieldUpdateOperationsInput | number
    maxWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerKg?: FloatFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemSettingsUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateManyInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ParcelListRelationFilter = {
    every?: ParcelWhereInput
    some?: ParcelWhereInput
    none?: ParcelWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParcelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumWeightCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightCategory | EnumWeightCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WeightCategory[] | ListEnumWeightCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightCategory[] | ListEnumWeightCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightCategoryFilter<$PrismaModel> | $Enums.WeightCategory
  }

  export type EnumParcelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusFilter<$PrismaModel> | $Enums.ParcelStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ParcelStatusHistoryListRelationFilter = {
    every?: ParcelStatusHistoryWhereInput
    some?: ParcelStatusHistoryWhereInput
    none?: ParcelStatusHistoryWhereInput
  }

  export type ParcelStatusHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParcelCountOrderByAggregateInput = {
    id?: SortOrder
    trackingId?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    category?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    pickupAddress?: SortOrder
    pickupLatitude?: SortOrder
    pickupLongitude?: SortOrder
    deliveryAddress?: SortOrder
    deliveryLatitude?: SortOrder
    deliveryLongitude?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    pickedUpAt?: SortOrder
    deliveredAt?: SortOrder
  }

  export type ParcelAvgOrderByAggregateInput = {
    weight?: SortOrder
    pickupLatitude?: SortOrder
    pickupLongitude?: SortOrder
    deliveryLatitude?: SortOrder
    deliveryLongitude?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type ParcelMaxOrderByAggregateInput = {
    id?: SortOrder
    trackingId?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    category?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    pickupAddress?: SortOrder
    pickupLatitude?: SortOrder
    pickupLongitude?: SortOrder
    deliveryAddress?: SortOrder
    deliveryLatitude?: SortOrder
    deliveryLongitude?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    pickedUpAt?: SortOrder
    deliveredAt?: SortOrder
  }

  export type ParcelMinOrderByAggregateInput = {
    id?: SortOrder
    trackingId?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    category?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    pickupAddress?: SortOrder
    pickupLatitude?: SortOrder
    pickupLongitude?: SortOrder
    deliveryAddress?: SortOrder
    deliveryLatitude?: SortOrder
    deliveryLongitude?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    pickedUpAt?: SortOrder
    deliveredAt?: SortOrder
  }

  export type ParcelSumOrderByAggregateInput = {
    weight?: SortOrder
    pickupLatitude?: SortOrder
    pickupLongitude?: SortOrder
    deliveryLatitude?: SortOrder
    deliveryLongitude?: SortOrder
    basePrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumWeightCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightCategory | EnumWeightCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WeightCategory[] | ListEnumWeightCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightCategory[] | ListEnumWeightCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightCategoryWithAggregatesFilter<$PrismaModel> | $Enums.WeightCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeightCategoryFilter<$PrismaModel>
    _max?: NestedEnumWeightCategoryFilter<$PrismaModel>
  }

  export type EnumParcelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParcelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParcelStatusFilter<$PrismaModel>
    _max?: NestedEnumParcelStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ParcelScalarRelationFilter = {
    is?: ParcelWhereInput
    isNot?: ParcelWhereInput
  }

  export type ParcelStatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    parcelId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelStatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    parcelId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelStatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    parcelId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelNullableScalarRelationFilter = {
    is?: ParcelWhereInput | null
    isNot?: ParcelWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parcelId?: SortOrder
    type?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parcelId?: SortOrder
    type?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parcelId?: SortOrder
    type?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeightPricingCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    minWeight?: SortOrder
    maxWeight?: SortOrder
    pricePerKg?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeightPricingAvgOrderByAggregateInput = {
    minWeight?: SortOrder
    maxWeight?: SortOrder
    pricePerKg?: SortOrder
    basePrice?: SortOrder
  }

  export type WeightPricingMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    minWeight?: SortOrder
    maxWeight?: SortOrder
    pricePerKg?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeightPricingMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    minWeight?: SortOrder
    maxWeight?: SortOrder
    pricePerKg?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeightPricingSumOrderByAggregateInput = {
    minWeight?: SortOrder
    maxWeight?: SortOrder
    pricePerKg?: SortOrder
    basePrice?: SortOrder
  }

  export type SystemSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelCreateNestedManyWithoutSenderInput = {
    create?: XOR<ParcelCreateWithoutSenderInput, ParcelUncheckedCreateWithoutSenderInput> | ParcelCreateWithoutSenderInput[] | ParcelUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutSenderInput | ParcelCreateOrConnectWithoutSenderInput[]
    createMany?: ParcelCreateManySenderInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type ParcelCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ParcelCreateWithoutReceiverInput, ParcelUncheckedCreateWithoutReceiverInput> | ParcelCreateWithoutReceiverInput[] | ParcelUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutReceiverInput | ParcelCreateOrConnectWithoutReceiverInput[]
    createMany?: ParcelCreateManyReceiverInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ParcelUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ParcelCreateWithoutSenderInput, ParcelUncheckedCreateWithoutSenderInput> | ParcelCreateWithoutSenderInput[] | ParcelUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutSenderInput | ParcelCreateOrConnectWithoutSenderInput[]
    createMany?: ParcelCreateManySenderInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type ParcelUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ParcelCreateWithoutReceiverInput, ParcelUncheckedCreateWithoutReceiverInput> | ParcelCreateWithoutReceiverInput[] | ParcelUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutReceiverInput | ParcelCreateOrConnectWithoutReceiverInput[]
    createMany?: ParcelCreateManyReceiverInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ParcelUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ParcelCreateWithoutSenderInput, ParcelUncheckedCreateWithoutSenderInput> | ParcelCreateWithoutSenderInput[] | ParcelUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutSenderInput | ParcelCreateOrConnectWithoutSenderInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutSenderInput | ParcelUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ParcelCreateManySenderInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutSenderInput | ParcelUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutSenderInput | ParcelUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type ParcelUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ParcelCreateWithoutReceiverInput, ParcelUncheckedCreateWithoutReceiverInput> | ParcelCreateWithoutReceiverInput[] | ParcelUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutReceiverInput | ParcelCreateOrConnectWithoutReceiverInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutReceiverInput | ParcelUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ParcelCreateManyReceiverInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutReceiverInput | ParcelUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutReceiverInput | ParcelUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ParcelUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ParcelCreateWithoutSenderInput, ParcelUncheckedCreateWithoutSenderInput> | ParcelCreateWithoutSenderInput[] | ParcelUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutSenderInput | ParcelCreateOrConnectWithoutSenderInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutSenderInput | ParcelUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ParcelCreateManySenderInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutSenderInput | ParcelUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutSenderInput | ParcelUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type ParcelUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ParcelCreateWithoutReceiverInput, ParcelUncheckedCreateWithoutReceiverInput> | ParcelCreateWithoutReceiverInput[] | ParcelUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutReceiverInput | ParcelCreateOrConnectWithoutReceiverInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutReceiverInput | ParcelUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ParcelCreateManyReceiverInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutReceiverInput | ParcelUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutReceiverInput | ParcelUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentParcelsInput = {
    create?: XOR<UserCreateWithoutSentParcelsInput, UserUncheckedCreateWithoutSentParcelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentParcelsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedParcelsInput = {
    create?: XOR<UserCreateWithoutReceivedParcelsInput, UserUncheckedCreateWithoutReceivedParcelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedParcelsInput
    connect?: UserWhereUniqueInput
  }

  export type ParcelStatusHistoryCreateNestedManyWithoutParcelInput = {
    create?: XOR<ParcelStatusHistoryCreateWithoutParcelInput, ParcelStatusHistoryUncheckedCreateWithoutParcelInput> | ParcelStatusHistoryCreateWithoutParcelInput[] | ParcelStatusHistoryUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: ParcelStatusHistoryCreateOrConnectWithoutParcelInput | ParcelStatusHistoryCreateOrConnectWithoutParcelInput[]
    createMany?: ParcelStatusHistoryCreateManyParcelInputEnvelope
    connect?: ParcelStatusHistoryWhereUniqueInput | ParcelStatusHistoryWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutParcelInput = {
    create?: XOR<NotificationCreateWithoutParcelInput, NotificationUncheckedCreateWithoutParcelInput> | NotificationCreateWithoutParcelInput[] | NotificationUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutParcelInput | NotificationCreateOrConnectWithoutParcelInput[]
    createMany?: NotificationCreateManyParcelInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ParcelStatusHistoryUncheckedCreateNestedManyWithoutParcelInput = {
    create?: XOR<ParcelStatusHistoryCreateWithoutParcelInput, ParcelStatusHistoryUncheckedCreateWithoutParcelInput> | ParcelStatusHistoryCreateWithoutParcelInput[] | ParcelStatusHistoryUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: ParcelStatusHistoryCreateOrConnectWithoutParcelInput | ParcelStatusHistoryCreateOrConnectWithoutParcelInput[]
    createMany?: ParcelStatusHistoryCreateManyParcelInputEnvelope
    connect?: ParcelStatusHistoryWhereUniqueInput | ParcelStatusHistoryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutParcelInput = {
    create?: XOR<NotificationCreateWithoutParcelInput, NotificationUncheckedCreateWithoutParcelInput> | NotificationCreateWithoutParcelInput[] | NotificationUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutParcelInput | NotificationCreateOrConnectWithoutParcelInput[]
    createMany?: NotificationCreateManyParcelInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWeightCategoryFieldUpdateOperationsInput = {
    set?: $Enums.WeightCategory
  }

  export type EnumParcelStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParcelStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSentParcelsNestedInput = {
    create?: XOR<UserCreateWithoutSentParcelsInput, UserUncheckedCreateWithoutSentParcelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentParcelsInput
    upsert?: UserUpsertWithoutSentParcelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentParcelsInput, UserUpdateWithoutSentParcelsInput>, UserUncheckedUpdateWithoutSentParcelsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedParcelsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedParcelsInput, UserUncheckedCreateWithoutReceivedParcelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedParcelsInput
    upsert?: UserUpsertWithoutReceivedParcelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedParcelsInput, UserUpdateWithoutReceivedParcelsInput>, UserUncheckedUpdateWithoutReceivedParcelsInput>
  }

  export type ParcelStatusHistoryUpdateManyWithoutParcelNestedInput = {
    create?: XOR<ParcelStatusHistoryCreateWithoutParcelInput, ParcelStatusHistoryUncheckedCreateWithoutParcelInput> | ParcelStatusHistoryCreateWithoutParcelInput[] | ParcelStatusHistoryUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: ParcelStatusHistoryCreateOrConnectWithoutParcelInput | ParcelStatusHistoryCreateOrConnectWithoutParcelInput[]
    upsert?: ParcelStatusHistoryUpsertWithWhereUniqueWithoutParcelInput | ParcelStatusHistoryUpsertWithWhereUniqueWithoutParcelInput[]
    createMany?: ParcelStatusHistoryCreateManyParcelInputEnvelope
    set?: ParcelStatusHistoryWhereUniqueInput | ParcelStatusHistoryWhereUniqueInput[]
    disconnect?: ParcelStatusHistoryWhereUniqueInput | ParcelStatusHistoryWhereUniqueInput[]
    delete?: ParcelStatusHistoryWhereUniqueInput | ParcelStatusHistoryWhereUniqueInput[]
    connect?: ParcelStatusHistoryWhereUniqueInput | ParcelStatusHistoryWhereUniqueInput[]
    update?: ParcelStatusHistoryUpdateWithWhereUniqueWithoutParcelInput | ParcelStatusHistoryUpdateWithWhereUniqueWithoutParcelInput[]
    updateMany?: ParcelStatusHistoryUpdateManyWithWhereWithoutParcelInput | ParcelStatusHistoryUpdateManyWithWhereWithoutParcelInput[]
    deleteMany?: ParcelStatusHistoryScalarWhereInput | ParcelStatusHistoryScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutParcelNestedInput = {
    create?: XOR<NotificationCreateWithoutParcelInput, NotificationUncheckedCreateWithoutParcelInput> | NotificationCreateWithoutParcelInput[] | NotificationUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutParcelInput | NotificationCreateOrConnectWithoutParcelInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutParcelInput | NotificationUpsertWithWhereUniqueWithoutParcelInput[]
    createMany?: NotificationCreateManyParcelInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutParcelInput | NotificationUpdateWithWhereUniqueWithoutParcelInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutParcelInput | NotificationUpdateManyWithWhereWithoutParcelInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ParcelStatusHistoryUncheckedUpdateManyWithoutParcelNestedInput = {
    create?: XOR<ParcelStatusHistoryCreateWithoutParcelInput, ParcelStatusHistoryUncheckedCreateWithoutParcelInput> | ParcelStatusHistoryCreateWithoutParcelInput[] | ParcelStatusHistoryUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: ParcelStatusHistoryCreateOrConnectWithoutParcelInput | ParcelStatusHistoryCreateOrConnectWithoutParcelInput[]
    upsert?: ParcelStatusHistoryUpsertWithWhereUniqueWithoutParcelInput | ParcelStatusHistoryUpsertWithWhereUniqueWithoutParcelInput[]
    createMany?: ParcelStatusHistoryCreateManyParcelInputEnvelope
    set?: ParcelStatusHistoryWhereUniqueInput | ParcelStatusHistoryWhereUniqueInput[]
    disconnect?: ParcelStatusHistoryWhereUniqueInput | ParcelStatusHistoryWhereUniqueInput[]
    delete?: ParcelStatusHistoryWhereUniqueInput | ParcelStatusHistoryWhereUniqueInput[]
    connect?: ParcelStatusHistoryWhereUniqueInput | ParcelStatusHistoryWhereUniqueInput[]
    update?: ParcelStatusHistoryUpdateWithWhereUniqueWithoutParcelInput | ParcelStatusHistoryUpdateWithWhereUniqueWithoutParcelInput[]
    updateMany?: ParcelStatusHistoryUpdateManyWithWhereWithoutParcelInput | ParcelStatusHistoryUpdateManyWithWhereWithoutParcelInput[]
    deleteMany?: ParcelStatusHistoryScalarWhereInput | ParcelStatusHistoryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutParcelNestedInput = {
    create?: XOR<NotificationCreateWithoutParcelInput, NotificationUncheckedCreateWithoutParcelInput> | NotificationCreateWithoutParcelInput[] | NotificationUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutParcelInput | NotificationCreateOrConnectWithoutParcelInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutParcelInput | NotificationUpsertWithWhereUniqueWithoutParcelInput[]
    createMany?: NotificationCreateManyParcelInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutParcelInput | NotificationUpdateWithWhereUniqueWithoutParcelInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutParcelInput | NotificationUpdateManyWithWhereWithoutParcelInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ParcelCreateNestedOneWithoutStatusHistoryInput = {
    create?: XOR<ParcelCreateWithoutStatusHistoryInput, ParcelUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: ParcelCreateOrConnectWithoutStatusHistoryInput
    connect?: ParcelWhereUniqueInput
  }

  export type ParcelUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: XOR<ParcelCreateWithoutStatusHistoryInput, ParcelUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: ParcelCreateOrConnectWithoutStatusHistoryInput
    upsert?: ParcelUpsertWithoutStatusHistoryInput
    connect?: ParcelWhereUniqueInput
    update?: XOR<XOR<ParcelUpdateToOneWithWhereWithoutStatusHistoryInput, ParcelUpdateWithoutStatusHistoryInput>, ParcelUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type ParcelCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ParcelCreateWithoutNotificationsInput, ParcelUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ParcelCreateOrConnectWithoutNotificationsInput
    connect?: ParcelWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type ParcelUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<ParcelCreateWithoutNotificationsInput, ParcelUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ParcelCreateOrConnectWithoutNotificationsInput
    upsert?: ParcelUpsertWithoutNotificationsInput
    disconnect?: ParcelWhereInput | boolean
    delete?: ParcelWhereInput | boolean
    connect?: ParcelWhereUniqueInput
    update?: XOR<XOR<ParcelUpdateToOneWithWhereWithoutNotificationsInput, ParcelUpdateWithoutNotificationsInput>, ParcelUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWeightCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightCategory | EnumWeightCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WeightCategory[] | ListEnumWeightCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightCategory[] | ListEnumWeightCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightCategoryFilter<$PrismaModel> | $Enums.WeightCategory
  }

  export type NestedEnumParcelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusFilter<$PrismaModel> | $Enums.ParcelStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumWeightCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeightCategory | EnumWeightCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WeightCategory[] | ListEnumWeightCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeightCategory[] | ListEnumWeightCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWeightCategoryWithAggregatesFilter<$PrismaModel> | $Enums.WeightCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeightCategoryFilter<$PrismaModel>
    _max?: NestedEnumWeightCategoryFilter<$PrismaModel>
  }

  export type NestedEnumParcelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParcelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParcelStatusFilter<$PrismaModel>
    _max?: NestedEnumParcelStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ParcelCreateWithoutSenderInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    receiver: UserCreateNestedOneWithoutReceivedParcelsInput
    statusHistory?: ParcelStatusHistoryCreateNestedManyWithoutParcelInput
    notifications?: NotificationCreateNestedManyWithoutParcelInput
  }

  export type ParcelUncheckedCreateWithoutSenderInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    receiverId: string
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    statusHistory?: ParcelStatusHistoryUncheckedCreateNestedManyWithoutParcelInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutParcelInput
  }

  export type ParcelCreateOrConnectWithoutSenderInput = {
    where: ParcelWhereUniqueInput
    create: XOR<ParcelCreateWithoutSenderInput, ParcelUncheckedCreateWithoutSenderInput>
  }

  export type ParcelCreateManySenderInputEnvelope = {
    data: ParcelCreateManySenderInput | ParcelCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ParcelCreateWithoutReceiverInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    sender: UserCreateNestedOneWithoutSentParcelsInput
    statusHistory?: ParcelStatusHistoryCreateNestedManyWithoutParcelInput
    notifications?: NotificationCreateNestedManyWithoutParcelInput
  }

  export type ParcelUncheckedCreateWithoutReceiverInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    senderId: string
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    statusHistory?: ParcelStatusHistoryUncheckedCreateNestedManyWithoutParcelInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutParcelInput
  }

  export type ParcelCreateOrConnectWithoutReceiverInput = {
    where: ParcelWhereUniqueInput
    create: XOR<ParcelCreateWithoutReceiverInput, ParcelUncheckedCreateWithoutReceiverInput>
  }

  export type ParcelCreateManyReceiverInputEnvelope = {
    data: ParcelCreateManyReceiverInput | ParcelCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    subject?: string | null
    message: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parcel?: ParcelCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    parcelId?: string | null
    type: string
    subject?: string | null
    message: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParcelUpsertWithWhereUniqueWithoutSenderInput = {
    where: ParcelWhereUniqueInput
    update: XOR<ParcelUpdateWithoutSenderInput, ParcelUncheckedUpdateWithoutSenderInput>
    create: XOR<ParcelCreateWithoutSenderInput, ParcelUncheckedCreateWithoutSenderInput>
  }

  export type ParcelUpdateWithWhereUniqueWithoutSenderInput = {
    where: ParcelWhereUniqueInput
    data: XOR<ParcelUpdateWithoutSenderInput, ParcelUncheckedUpdateWithoutSenderInput>
  }

  export type ParcelUpdateManyWithWhereWithoutSenderInput = {
    where: ParcelScalarWhereInput
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyWithoutSenderInput>
  }

  export type ParcelScalarWhereInput = {
    AND?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
    OR?: ParcelScalarWhereInput[]
    NOT?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
    id?: StringFilter<"Parcel"> | string
    trackingId?: StringFilter<"Parcel"> | string
    description?: StringFilter<"Parcel"> | string
    weight?: FloatFilter<"Parcel"> | number
    category?: EnumWeightCategoryFilter<"Parcel"> | $Enums.WeightCategory
    status?: EnumParcelStatusFilter<"Parcel"> | $Enums.ParcelStatus
    senderId?: StringFilter<"Parcel"> | string
    receiverId?: StringFilter<"Parcel"> | string
    pickupAddress?: StringFilter<"Parcel"> | string
    pickupLatitude?: FloatNullableFilter<"Parcel"> | number | null
    pickupLongitude?: FloatNullableFilter<"Parcel"> | number | null
    deliveryAddress?: StringFilter<"Parcel"> | string
    deliveryLatitude?: FloatNullableFilter<"Parcel"> | number | null
    deliveryLongitude?: FloatNullableFilter<"Parcel"> | number | null
    basePrice?: FloatFilter<"Parcel"> | number
    totalPrice?: FloatFilter<"Parcel"> | number
    createdAt?: DateTimeFilter<"Parcel"> | Date | string
    updatedAt?: DateTimeFilter<"Parcel"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
    pickedUpAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
  }

  export type ParcelUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ParcelWhereUniqueInput
    update: XOR<ParcelUpdateWithoutReceiverInput, ParcelUncheckedUpdateWithoutReceiverInput>
    create: XOR<ParcelCreateWithoutReceiverInput, ParcelUncheckedCreateWithoutReceiverInput>
  }

  export type ParcelUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ParcelWhereUniqueInput
    data: XOR<ParcelUpdateWithoutReceiverInput, ParcelUncheckedUpdateWithoutReceiverInput>
  }

  export type ParcelUpdateManyWithWhereWithoutReceiverInput = {
    where: ParcelScalarWhereInput
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyWithoutReceiverInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    parcelId?: StringNullableFilter<"Notification"> | string | null
    type?: StringFilter<"Notification"> | string
    subject?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutSentParcelsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    receivedParcels?: ParcelCreateNestedManyWithoutReceiverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentParcelsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    receivedParcels?: ParcelUncheckedCreateNestedManyWithoutReceiverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentParcelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentParcelsInput, UserUncheckedCreateWithoutSentParcelsInput>
  }

  export type UserCreateWithoutReceivedParcelsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sentParcels?: ParcelCreateNestedManyWithoutSenderInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedParcelsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sentParcels?: ParcelUncheckedCreateNestedManyWithoutSenderInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedParcelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedParcelsInput, UserUncheckedCreateWithoutReceivedParcelsInput>
  }

  export type ParcelStatusHistoryCreateWithoutParcelInput = {
    id?: string
    status: $Enums.ParcelStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelStatusHistoryUncheckedCreateWithoutParcelInput = {
    id?: string
    status: $Enums.ParcelStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelStatusHistoryCreateOrConnectWithoutParcelInput = {
    where: ParcelStatusHistoryWhereUniqueInput
    create: XOR<ParcelStatusHistoryCreateWithoutParcelInput, ParcelStatusHistoryUncheckedCreateWithoutParcelInput>
  }

  export type ParcelStatusHistoryCreateManyParcelInputEnvelope = {
    data: ParcelStatusHistoryCreateManyParcelInput | ParcelStatusHistoryCreateManyParcelInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutParcelInput = {
    id?: string
    type: string
    subject?: string | null
    message: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutParcelInput = {
    id?: string
    userId: string
    type: string
    subject?: string | null
    message: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutParcelInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutParcelInput, NotificationUncheckedCreateWithoutParcelInput>
  }

  export type NotificationCreateManyParcelInputEnvelope = {
    data: NotificationCreateManyParcelInput | NotificationCreateManyParcelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSentParcelsInput = {
    update: XOR<UserUpdateWithoutSentParcelsInput, UserUncheckedUpdateWithoutSentParcelsInput>
    create: XOR<UserCreateWithoutSentParcelsInput, UserUncheckedCreateWithoutSentParcelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentParcelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentParcelsInput, UserUncheckedUpdateWithoutSentParcelsInput>
  }

  export type UserUpdateWithoutSentParcelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedParcels?: ParcelUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentParcelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedParcels?: ParcelUncheckedUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedParcelsInput = {
    update: XOR<UserUpdateWithoutReceivedParcelsInput, UserUncheckedUpdateWithoutReceivedParcelsInput>
    create: XOR<UserCreateWithoutReceivedParcelsInput, UserUncheckedCreateWithoutReceivedParcelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedParcelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedParcelsInput, UserUncheckedUpdateWithoutReceivedParcelsInput>
  }

  export type UserUpdateWithoutReceivedParcelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentParcels?: ParcelUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedParcelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentParcels?: ParcelUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParcelStatusHistoryUpsertWithWhereUniqueWithoutParcelInput = {
    where: ParcelStatusHistoryWhereUniqueInput
    update: XOR<ParcelStatusHistoryUpdateWithoutParcelInput, ParcelStatusHistoryUncheckedUpdateWithoutParcelInput>
    create: XOR<ParcelStatusHistoryCreateWithoutParcelInput, ParcelStatusHistoryUncheckedCreateWithoutParcelInput>
  }

  export type ParcelStatusHistoryUpdateWithWhereUniqueWithoutParcelInput = {
    where: ParcelStatusHistoryWhereUniqueInput
    data: XOR<ParcelStatusHistoryUpdateWithoutParcelInput, ParcelStatusHistoryUncheckedUpdateWithoutParcelInput>
  }

  export type ParcelStatusHistoryUpdateManyWithWhereWithoutParcelInput = {
    where: ParcelStatusHistoryScalarWhereInput
    data: XOR<ParcelStatusHistoryUpdateManyMutationInput, ParcelStatusHistoryUncheckedUpdateManyWithoutParcelInput>
  }

  export type ParcelStatusHistoryScalarWhereInput = {
    AND?: ParcelStatusHistoryScalarWhereInput | ParcelStatusHistoryScalarWhereInput[]
    OR?: ParcelStatusHistoryScalarWhereInput[]
    NOT?: ParcelStatusHistoryScalarWhereInput | ParcelStatusHistoryScalarWhereInput[]
    id?: StringFilter<"ParcelStatusHistory"> | string
    parcelId?: StringFilter<"ParcelStatusHistory"> | string
    status?: EnumParcelStatusFilter<"ParcelStatusHistory"> | $Enums.ParcelStatus
    notes?: StringNullableFilter<"ParcelStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"ParcelStatusHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ParcelStatusHistory"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutParcelInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutParcelInput, NotificationUncheckedUpdateWithoutParcelInput>
    create: XOR<NotificationCreateWithoutParcelInput, NotificationUncheckedCreateWithoutParcelInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutParcelInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutParcelInput, NotificationUncheckedUpdateWithoutParcelInput>
  }

  export type NotificationUpdateManyWithWhereWithoutParcelInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutParcelInput>
  }

  export type ParcelCreateWithoutStatusHistoryInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    sender: UserCreateNestedOneWithoutSentParcelsInput
    receiver: UserCreateNestedOneWithoutReceivedParcelsInput
    notifications?: NotificationCreateNestedManyWithoutParcelInput
  }

  export type ParcelUncheckedCreateWithoutStatusHistoryInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    senderId: string
    receiverId: string
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutParcelInput
  }

  export type ParcelCreateOrConnectWithoutStatusHistoryInput = {
    where: ParcelWhereUniqueInput
    create: XOR<ParcelCreateWithoutStatusHistoryInput, ParcelUncheckedCreateWithoutStatusHistoryInput>
  }

  export type ParcelUpsertWithoutStatusHistoryInput = {
    update: XOR<ParcelUpdateWithoutStatusHistoryInput, ParcelUncheckedUpdateWithoutStatusHistoryInput>
    create: XOR<ParcelCreateWithoutStatusHistoryInput, ParcelUncheckedCreateWithoutStatusHistoryInput>
    where?: ParcelWhereInput
  }

  export type ParcelUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: ParcelWhereInput
    data: XOR<ParcelUpdateWithoutStatusHistoryInput, ParcelUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type ParcelUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sender?: UserUpdateOneRequiredWithoutSentParcelsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedParcelsNestedInput
    notifications?: NotificationUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutParcelNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sentParcels?: ParcelCreateNestedManyWithoutSenderInput
    receivedParcels?: ParcelCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sentParcels?: ParcelUncheckedCreateNestedManyWithoutSenderInput
    receivedParcels?: ParcelUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type ParcelCreateWithoutNotificationsInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    sender: UserCreateNestedOneWithoutSentParcelsInput
    receiver: UserCreateNestedOneWithoutReceivedParcelsInput
    statusHistory?: ParcelStatusHistoryCreateNestedManyWithoutParcelInput
  }

  export type ParcelUncheckedCreateWithoutNotificationsInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    senderId: string
    receiverId: string
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    statusHistory?: ParcelStatusHistoryUncheckedCreateNestedManyWithoutParcelInput
  }

  export type ParcelCreateOrConnectWithoutNotificationsInput = {
    where: ParcelWhereUniqueInput
    create: XOR<ParcelCreateWithoutNotificationsInput, ParcelUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentParcels?: ParcelUpdateManyWithoutSenderNestedInput
    receivedParcels?: ParcelUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentParcels?: ParcelUncheckedUpdateManyWithoutSenderNestedInput
    receivedParcels?: ParcelUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ParcelUpsertWithoutNotificationsInput = {
    update: XOR<ParcelUpdateWithoutNotificationsInput, ParcelUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ParcelCreateWithoutNotificationsInput, ParcelUncheckedCreateWithoutNotificationsInput>
    where?: ParcelWhereInput
  }

  export type ParcelUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ParcelWhereInput
    data: XOR<ParcelUpdateWithoutNotificationsInput, ParcelUncheckedUpdateWithoutNotificationsInput>
  }

  export type ParcelUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sender?: UserUpdateOneRequiredWithoutSentParcelsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedParcelsNestedInput
    statusHistory?: ParcelStatusHistoryUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusHistory?: ParcelStatusHistoryUncheckedUpdateManyWithoutParcelNestedInput
  }

  export type ParcelCreateManySenderInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    receiverId: string
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
  }

  export type ParcelCreateManyReceiverInput = {
    id?: string
    trackingId?: string
    description: string
    weight: number
    category: $Enums.WeightCategory
    status?: $Enums.ParcelStatus
    senderId: string
    pickupAddress: string
    pickupLatitude?: number | null
    pickupLongitude?: number | null
    deliveryAddress: string
    deliveryLatitude?: number | null
    deliveryLongitude?: number | null
    basePrice: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    parcelId?: string | null
    type: string
    subject?: string | null
    message: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiver?: UserUpdateOneRequiredWithoutReceivedParcelsNestedInput
    statusHistory?: ParcelStatusHistoryUpdateManyWithoutParcelNestedInput
    notifications?: NotificationUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    receiverId?: StringFieldUpdateOperationsInput | string
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusHistory?: ParcelStatusHistoryUncheckedUpdateManyWithoutParcelNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    receiverId?: StringFieldUpdateOperationsInput | string
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParcelUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sender?: UserUpdateOneRequiredWithoutSentParcelsNestedInput
    statusHistory?: ParcelStatusHistoryUpdateManyWithoutParcelNestedInput
    notifications?: NotificationUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    senderId?: StringFieldUpdateOperationsInput | string
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusHistory?: ParcelStatusHistoryUncheckedUpdateManyWithoutParcelNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: EnumWeightCategoryFieldUpdateOperationsInput | $Enums.WeightCategory
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    senderId?: StringFieldUpdateOperationsInput | string
    pickupAddress?: StringFieldUpdateOperationsInput | string
    pickupLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcel?: ParcelUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    parcelId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    parcelId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelStatusHistoryCreateManyParcelInput = {
    id?: string
    status: $Enums.ParcelStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyParcelInput = {
    id?: string
    userId: string
    type: string
    subject?: string | null
    message: string
    isRead?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelStatusHistoryUpdateWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelStatusHistoryUncheckedUpdateWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelStatusHistoryUncheckedUpdateManyWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}