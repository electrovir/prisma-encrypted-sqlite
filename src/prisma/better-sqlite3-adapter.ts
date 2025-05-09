// @ts-nocheck

/**
 * This code is originally from the
 * [`@prisma/adapter-better-sqlite3`](https://www.npmjs.com/package/@prisma/adapter-better-sqlite3)
 * package on npm. It was directly copied from
 * https://github.com/prisma/prisma/tree/c40b0fce38f0e65b018f84909c989d5d946f7da8/packages/adapter-better-sqlite3/src.
 *
 * Changes made:
 *
 * - Combined all TypeScript source files into one TypeScript file (without compilation).
 * - Modified the adapter to allow an arbitrary `Database` object.
 *
 * The original code has the following license:
 *
 *                                      Apache License
 *                                Version 2.0, January 2004
 *                             http://www.apache.org/licenses/
 *
 *        TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
 *
 *        1. Definitions.
 *
 *           "License" shall mean the terms and conditions for use, reproduction,
 *           and distribution as defined by Sections 1 through 9 of this document.
 *
 *           "Licensor" shall mean the copyright owner or entity authorized by
 *           the copyright owner that is granting the License.
 *
 *           "Legal Entity" shall mean the union of the acting entity and all
 *           other entities that control, are controlled by, or are under common
 *           control with that entity. For the purposes of this definition,
 *           "control" means (i) the power, direct or indirect, to cause the
 *           direction or management of such entity, whether by contract or
 *           otherwise, or (ii) ownership of fifty percent (50%) or more of the
 *           outstanding shares, or (iii) beneficial ownership of such entity.
 *
 *           "You" (or "Your") shall mean an individual or Legal Entity
 *           exercising permissions granted by this License.
 *
 *           "Source" form shall mean the preferred form for making modifications,
 *           including but not limited to software source code, documentation
 *           source, and configuration files.
 *
 *           "Object" form shall mean any form resulting from mechanical
 *           transformation or translation of a Source form, including but
 *           not limited to compiled object code, generated documentation,
 *           and conversions to other media types.
 *
 *           "Work" shall mean the work of authorship, whether in Source or
 *           Object form, made available under the License, as indicated by a
 *           copyright notice that is included in or attached to the work
 *           (an example is provided in the Appendix below).
 *
 *           "Derivative Works" shall mean any work, whether in Source or Object
 *           form, that is based on (or derived from) the Work and for which the
 *           editorial revisions, annotations, elaborations, or other modifications
 *           represent, as a whole, an original work of authorship. For the purposes
 *           of this License, Derivative Works shall not include works that remain
 *           separable from, or merely link (or bind by name) to the interfaces of,
 *           the Work and Derivative Works thereof.
 *
 *           "Contribution" shall mean any work of authorship, including
 *           the original version of the Work and any modifications or additions
 *           to that Work or Derivative Works thereof, that is intentionally
 *           submitted to Licensor for inclusion in the Work by the copyright owner
 *           or by an individual or Legal Entity authorized to submit on behalf of
 *           the copyright owner. For the purposes of this definition, "submitted"
 *           means any form of electronic, verbal, or written communication sent
 *           to the Licensor or its representatives, including but not limited to
 *           communication on electronic mailing lists, source code control systems,
 *           and issue tracking systems that are managed by, or on behalf of, the
 *           Licensor for the purpose of discussing and improving the Work, but
 *           excluding communication that is conspicuously marked or otherwise
 *           designated in writing by the copyright owner as "Not a Contribution."
 *
 *           "Contributor" shall mean Licensor and any individual or Legal Entity
 *           on behalf of whom a Contribution has been received by Licensor and
 *           subsequently incorporated within the Work.
 *
 *        2. Grant of Copyright License. Subject to the terms and conditions of
 *           this License, each Contributor hereby grants to You a perpetual,
 *           worldwide, non-exclusive, no-charge, royalty-free, irrevocable
 *           copyright license to reproduce, prepare Derivative Works of,
 *           publicly display, publicly perform, sublicense, and distribute the
 *           Work and such Derivative Works in Source or Object form.
 *
 *        3. Grant of Patent License. Subject to the terms and conditions of
 *           this License, each Contributor hereby grants to You a perpetual,
 *           worldwide, non-exclusive, no-charge, royalty-free, irrevocable
 *           (except as stated in this section) patent license to make, have made,
 *           use, offer to sell, sell, import, and otherwise transfer the Work,
 *           where such license applies only to those patent claims licensable
 *           by such Contributor that are necessarily infringed by their
 *           Contribution(s) alone or by combination of their Contribution(s)
 *           with the Work to which such Contribution(s) was submitted. If You
 *           institute patent litigation against any entity (including a
 *           cross-claim or counterclaim in a lawsuit) alleging that the Work
 *           or a Contribution incorporated within the Work constitutes direct
 *           or contributory patent infringement, then any patent licenses
 *           granted to You under this License for that Work shall terminate
 *           as of the date such litigation is filed.
 *
 *        4. Redistribution. You may reproduce and distribute copies of the
 *           Work or Derivative Works thereof in any medium, with or without
 *           modifications, and in Source or Object form, provided that You
 *           meet the following conditions:
 *
 *           (a) You must give any other recipients of the Work or
 *               Derivative Works a copy of this License; and
 *
 *           (b) You must cause any modified files to carry prominent notices
 *               stating that You changed the files; and
 *
 *           (c) You must retain, in the Source form of any Derivative Works
 *               that You distribute, all copyright, patent, trademark, and
 *               attribution notices from the Source form of the Work,
 *               excluding those notices that do not pertain to any part of
 *               the Derivative Works; and
 *
 *           (d) If the Work includes a "NOTICE" text file as part of its
 *               distribution, then any Derivative Works that You distribute must
 *               include a readable copy of the attribution notices contained
 *               within such NOTICE file, excluding those notices that do not
 *               pertain to any part of the Derivative Works, in at least one
 *               of the following places: within a NOTICE text file distributed
 *               as part of the Derivative Works; within the Source form or
 *               documentation, if provided along with the Derivative Works; or,
 *               within a display generated by the Derivative Works, if and
 *               wherever such third-party notices normally appear. The contents
 *               of the NOTICE file are for informational purposes only and
 *               do not modify the License. You may add Your own attribution
 *               notices within Derivative Works that You distribute, alongside
 *               or as an addendum to the NOTICE text from the Work, provided
 *               that such additional attribution notices cannot be construed
 *               as modifying the License.
 *
 *           You may add Your own copyright statement to Your modifications and
 *           may provide additional or different license terms and conditions
 *           for use, reproduction, or distribution of Your modifications, or
 *           for any such Derivative Works as a whole, provided Your use,
 *           reproduction, and distribution of the Work otherwise complies with
 *           the conditions stated in this License.
 *
 *        5. Submission of Contributions. Unless You explicitly state otherwise,
 *           any Contribution intentionally submitted for inclusion in the Work
 *           by You to the Licensor shall be under the terms and conditions of
 *           this License, without any additional terms or conditions.
 *           Notwithstanding the above, nothing herein shall supersede or modify
 *           the terms of any separate license agreement you may have executed
 *           with Licensor regarding such Contributions.
 *
 *        6. Trademarks. This License does not grant permission to use the trade
 *           names, trademarks, service marks, or product names of the Licensor,
 *           except as required for reasonable and customary use in describing the
 *           origin of the Work and reproducing the content of the NOTICE file.
 *
 *        7. Disclaimer of Warranty. Unless required by applicable law or
 *           agreed to in writing, Licensor provides the Work (and each
 *           Contributor provides its Contributions) on an "AS IS" BASIS,
 *           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 *           implied, including, without limitation, any warranties or conditions
 *           of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
 *           PARTICULAR PURPOSE. You are solely responsible for determining the
 *           appropriateness of using or redistributing the Work and assume any
 *           risks associated with Your exercise of permissions under this License.
 *
 *        8. Limitation of Liability. In no event and under no legal theory,
 *           whether in tort (including negligence), contract, or otherwise,
 *           unless required by applicable law (such as deliberate and grossly
 *           negligent acts) or agreed to in writing, shall any Contributor be
 *           liable to You for damages, including any direct, indirect, special,
 *           incidental, or consequential damages of any character arising as a
 *           result of this License or out of the use or inability to use the
 *           Work (including but not limited to damages for loss of goodwill,
 *           work stoppage, computer failure or malfunction, or any and all
 *           other commercial damages or losses), even if such Contributor
 *           has been advised of the possibility of such damages.
 *
 *        9. Accepting Warranty or Additional Liability. While redistributing
 *           the Work or Derivative Works thereof, You may choose to offer,
 *           and charge a fee for, acceptance of support, warranty, indemnity,
 *           or other liability obligations and/or rights consistent with this
 *           License. However, in accepting such obligations, You may act only
 *           on Your own behalf and on Your sole responsibility, not on behalf
 *           of any other Contributor, and only if You agree to indemnify,
 *           defend, and hold each Contributor harmless for any liability
 *           incurred by, or claims asserted against, such Contributor by reason
 *           of your accepting any such warranty or additional liability.
 *
 *        END OF TERMS AND CONDITIONS
 *
 *        APPENDIX: How to apply the Apache License to your work.
 *
 *           To apply the Apache License to your work, attach the following
 *           boilerplate notice, with the fields enclosed by brackets "[]"
 *           replaced with your own identifying information. (Don't include
 *           the brackets!)  The text should be enclosed in the appropriate
 *           comment syntax for the file format. We also recommend that a
 *           file or class name and description of purpose be included on the
 *           same "printed page" as the copyright notice for easier
 *           identification within third-party archives.
 *
 *        Copyright [yyyy] [name of copyright owner]
 *
 *        Licensed under the Apache License, Version 2.0 (the "License");
 *        you may not use this file except in compliance with the License.
 *        You may obtain a copy of the License at
 *
 *            http://www.apache.org/licenses/LICENSE-2.0
 *
 *        Unless required by applicable law or agreed to in writing, software
 *        distributed under the License is distributed on an "AS IS" BASIS,
 *        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *        See the License for the specific language governing permissions and
 *        limitations under the License.
 */

import {
    type ArgType,
    type ColumnType,
    ColumnTypeEnum,
    Debug,
    DriverAdapterError,
    type Error as DriverAdapterErrorObject,
    type IsolationLevel,
    type SqlDriverAdapter,
    type SqlMigrationAwareDriverAdapterFactory,
    type SqlQuery,
    type SqlQueryable,
    type SqlResultSet,
    type Transaction,
    type TransactionOptions,
} from '@prisma/driver-adapter-utils';
import {Mutex} from 'async-mutex';
import {
    type Database as BetterSQLite3,
    type Options as BetterSQLite3Options,
    type Database,
} from 'better-sqlite3';

const packageName = '@prisma/adapter-better-sqlite3';
type StdClient = BetterSQLite3;

type BetterSQLite3ResultSet = {
    declaredTypes: Array<string | null>;
    columnNames: string[];
    values: unknown[][];
};

type BetterSQLite3Meta = {
    /** The total number of rows that were inserted, updated, or deleted by an operation. */
    changes: number;

    /** The rowid of the last row inserted into the database. */
    lastInsertRowid: number | bigint;
};

const LOCK_TAG = Symbol();

class BetterSQLite3Queryable<ClientT extends StdClient> implements SqlQueryable {
    readonly provider = 'sqlite';
    readonly adapterName = packageName;

    constructor(protected readonly client: ClientT) {}

    /** Execute a query given as SQL, interpolating the given parameters. */
    async queryRaw(query: SqlQuery): Promise<SqlResultSet> {
        const tag = '[js::queryRaw]';
        debug(`${tag} %O`, query);

        const {columnNames, declaredTypes, values} = await this.performIO(query);
        const rows = values as Array<Row>;

        const columnTypes = getColumnTypes(declaredTypes, rows);

        return {
            columnNames,
            columnTypes,
            rows: rows.map((row) => mapRow(row, columnTypes)),
        };
    }

    /**
     * Execute a query given as SQL, interpolating the given parameters and returning the number of
     * affected rows. Note: Queryable expects a u64, but napi.rs only supports u32.
     */
    async executeRaw(query: SqlQuery): Promise<number> {
        const tag = '[js::executeRaw]';
        debug(`${tag} %O`, query);

        return (await this.executeIO(query)).changes;
    }

    /**
     * Run a query against the database, returning the result set. Should the query fail due to a
     * connection error, the connection is marked as unhealthy.
     */
    private executeIO(query: SqlQuery): Promise<BetterSQLite3Meta> {
        try {
            const stmt = this.client
                .prepare(query.sql)
                .bind(mapQueryArgs(query.args, query.argTypes));
            const result = stmt.run();

            return Promise.resolve(result);
        } catch (e) {
            this.onError(e);
        }
    }

    /**
     * Run a query against the database, returning the result set. Should the query fail due to a
     * connection error, the connection is marked as unhealthy.
     */
    private performIO(query: SqlQuery): Promise<BetterSQLite3ResultSet> {
        try {
            const stmt = this.client
                .prepare(query.sql)
                .bind(mapQueryArgs(query.args, query.argTypes));

            // Queries that do not return data (e.g. inserts) cannot call stmt.raw()/stmt.columns(). => Use stmt.run() instead.
            if (!stmt.reader) {
                stmt.run();
                return Promise.resolve({
                    columnNames: [],
                    declaredTypes: [],
                    values: [],
                });
            }

            const columns = stmt.columns();

            const resultSet = {
                declaredTypes: columns.map((column) => column.type),
                columnNames: columns.map((column) => column.name),
                values: stmt.raw().all() as unknown[][],
            };

            return Promise.resolve(resultSet);
        } catch (e) {
            this.onError(e);
        }
    }

    protected onError(error: any): never {
        debug('Error in performIO: %O', error);
        throw new DriverAdapterError(convertDriverError(error));
    }
}

class BetterSQLite3Transaction extends BetterSQLite3Queryable<StdClient> implements Transaction {
    constructor(
        client: StdClient,
        readonly options: TransactionOptions,
        readonly unlockParent: () => void,
    ) {
        super(client);
    }

    commit(): Promise<void> {
        debug(`[js::commit]`);
        this.unlockParent();
        return Promise.resolve();
    }

    rollback(): Promise<void> {
        debug(`[js::rollback]`);
        this.unlockParent();
        return Promise.resolve();
    }
}

export class PrismaBetterSQLite3Adapter
    extends BetterSQLite3Queryable<StdClient>
    implements SqlDriverAdapter
{
    [LOCK_TAG] = new Mutex();

    constructor(client: StdClient) {
        super(client);
    }

    executeScript(script: string): Promise<void> {
        try {
            this.client.exec(script);
        } catch (e) {
            this.onError(e);
        }
        return Promise.resolve();
    }

    async startTransaction(isolationLevel?: IsolationLevel): Promise<Transaction> {
        if (isolationLevel && isolationLevel !== 'SERIALIZABLE') {
            throw new DriverAdapterError({
                kind: 'InvalidIsolationLevel',
                level: isolationLevel,
            });
        }

        const options: TransactionOptions = {
            usePhantomQuery: false,
        };

        const tag = '[js::startTransaction]';
        debug('%s options: %O', tag, options);

        try {
            const release = await this[LOCK_TAG].acquire();

            this.client.prepare('BEGIN').run();

            return new BetterSQLite3Transaction(this.client, options, release);
        } catch (e) {
            this.onError(e);
        }
    }

    dispose(): Promise<void> {
        this.client.close();
        return Promise.resolve();
    }
}

type BetterSQLite3InputParams = BetterSQLite3Options & {
    url: ':memory:' | (string & {});
    shadowDatabaseURL?: ':memory:' | (string & {});
};

export class PrismaBetterSQLite3AdapterFactory implements SqlMigrationAwareDriverAdapterFactory {
    readonly provider = 'sqlite';
    readonly adapterName = packageName;

    constructor(private readonly config: BetterSQLite3InputParams & {database: Database}) {}

    connect(): Promise<SqlDriverAdapter> {
        return Promise.resolve(
            new PrismaBetterSQLite3Adapter(
                createBetterSQLite3Client(this.config.database, this.config),
            ),
        );
    }

    connectToShadowDb(): Promise<SqlDriverAdapter> {
        const url = this.config.shadowDatabaseURL ?? ':memory:';
        return Promise.resolve(
            new PrismaBetterSQLite3Adapter(
                createBetterSQLite3Client(this.config.database, {...this.config, url}),
            ),
        );
    }
}

function createBetterSQLite3Client(db: Database, input: BetterSQLite3InputParams): StdClient {
    const {url, ...config} = input;
    const dbPath = url.replace(/^file:/, '');
    // const db = new Database(dbPath, config);
    db.defaultSafeIntegers(true);
    return db;
}

export function convertDriverError(error: any): DriverAdapterErrorObject {
    if (typeof error.code !== 'string' || typeof error.message !== 'string') {
        throw error;
    }

    switch (error.code) {
        case 'SQLITE_BUSY':
            return {
                kind: 'SocketTimeout',
            };
        case 'SQLITE_CONSTRAINT_UNIQUE':
        case 'SQLITE_CONSTRAINT_PRIMARYKEY':
            return {
                kind: 'UniqueConstraintViolation',
                fields:
                    error.message
                        .split('constraint failed: ')
                        .at(1)
                        ?.split(', ')
                        .map((field) => field.split('.').pop()!) ?? [],
            };
        case 'SQLITE_CONSTRAINT_NOTNULL':
            return {
                kind: 'NullConstraintViolation',
                fields:
                    error.message
                        .split('constraint failed: ')
                        .at(1)
                        ?.split(', ')
                        .map((field) => field.split('.').pop()!) ?? [],
            };
        case 'SQLITE_CONSTRAINT_FOREIGNKEY':
        case 'SQLITE_CONSTRAINT_TRIGGER':
            return {
                kind: 'ForeignKeyConstraintViolation',
                constraint: {foreignKey: {}},
            };
        default:
            if (error.message.startsWith('no such table')) {
                return {
                    kind: 'TableDoesNotExist',
                    table: error.message.split(': ').pop(),
                };
            } else if (error.message.startsWith('no such column')) {
                return {
                    kind: 'ColumnNotFound',
                    column: error.message.split(': ').pop(),
                };
            } else if (error.message.includes('has no column named ')) {
                return {
                    kind: 'ColumnNotFound',
                    column: error.message.split('has no column named ').pop(),
                };
            }

            throw error;
    }
}

const debug = Debug('prisma:driver-adapter:better-sqlite3:conversion');

type Value = null | string | number | bigint | ArrayBuffer;
export type Row = {
    /**
     * Number of columns in this row.
     *
     * All rows in one {@link ResultSet} have the same number and names of columns.
     */
    length: number;
    /** Columns can be accessed like an array by numeric indexes. */
    [index: number]: Value;
};

// Mirrors sqlite/conversion.rs in quaint
function mapDeclType(declType: string | null): ColumnType | null {
    if (declType === null) {
        return null;
    }

    switch (declType.toUpperCase()) {
        case '':
            return null;
        case 'DECIMAL':
            return ColumnTypeEnum.Numeric;
        case 'FLOAT':
            return ColumnTypeEnum.Float;
        case 'DOUBLE':
        case 'DOUBLE PRECISION':
        case 'NUMERIC':
        case 'REAL':
            return ColumnTypeEnum.Double;
        case 'TINYINT':
        case 'SMALLINT':
        case 'MEDIUMINT':
        case 'INT':
        case 'INTEGER':
        case 'SERIAL':
        case 'INT2':
            return ColumnTypeEnum.Int32;
        case 'BIGINT':
        case 'UNSIGNED BIG INT':
        case 'INT8':
            return ColumnTypeEnum.Int64;
        case 'DATETIME':
        case 'TIMESTAMP':
            return ColumnTypeEnum.DateTime;
        case 'TIME':
            return ColumnTypeEnum.Time;
        case 'DATE':
            return ColumnTypeEnum.Date;
        case 'TEXT':
        case 'CLOB':
        case 'CHARACTER':
        case 'VARCHAR':
        case 'VARYING CHARACTER':
        case 'NCHAR':
        case 'NATIVE CHARACTER':
        case 'NVARCHAR':
            return ColumnTypeEnum.Text;
        case 'BLOB':
            return ColumnTypeEnum.Bytes;
        case 'BOOLEAN':
            return ColumnTypeEnum.Boolean;
        case 'JSONB':
            return ColumnTypeEnum.Json;
        default:
            debug('unknown decltype:', declType);
            return null;
    }
}

function mapDeclaredColumnTypes(
    columnTypes: Array<string | null>,
): [out: Array<ColumnType | null>, empty: Set<number>] {
    const emptyIndices = new Set<number>();
    const result = columnTypes.map((typeName, index) => {
        const mappedType = mapDeclType(typeName);
        if (mappedType === null) {
            emptyIndices.add(index);
        }
        return mappedType;
    });
    return [
        result,
        emptyIndices,
    ];
}

export function getColumnTypes(declaredTypes: Array<string | null>, rows: Row[]): ColumnType[] {
    const [
        columnTypes,
        emptyIndices,
    ] = mapDeclaredColumnTypes(declaredTypes);

    if (emptyIndices.size === 0) {
        return columnTypes as ColumnType[];
    }

    columnLoop: for (const columnIndex of emptyIndices) {
        // No declared column type in db schema, infer using first non-null value
        for (const row of rows) {
            const candidateValue = row[columnIndex];
            if (candidateValue !== null) {
                columnTypes[columnIndex] = inferColumnType(candidateValue);
                continue columnLoop;
            }
        }

        // No non-null value found for this column, fall back to int32 to mimic what quaint does
        columnTypes[columnIndex] = ColumnTypeEnum.Int32;
    }

    return columnTypes as ColumnType[];
}

function inferColumnType(value: NonNullable<Value>): ColumnType {
    switch (typeof value) {
        case 'string':
            return ColumnTypeEnum.Text;
        case 'bigint':
            return ColumnTypeEnum.Int64;
        case 'boolean':
            return ColumnTypeEnum.Boolean;
        case 'number':
            return ColumnTypeEnum.UnknownNumber;
        case 'object':
            return inferObjectType(value);
        default:
            throw new UnexpectedTypeError(value);
    }
}

function inferObjectType(value: {}): ColumnType {
    if (value instanceof ArrayBuffer) {
        return ColumnTypeEnum.Bytes;
    }
    throw new UnexpectedTypeError(value);
}

class UnexpectedTypeError extends Error {
    name = 'UnexpectedTypeError';
    constructor(value: unknown) {
        const type = typeof value;
        const repr = type === 'object' ? JSON.stringify(value) : String(value);
        super(`unexpected value of type ${type}: ${repr}`);
    }
}

export function mapRow(row: Row, columnTypes: ColumnType[]): unknown[] {
    // `Row` doesn't have map, so we copy the array once and modify it in-place
    // to avoid allocating and copying twice if we used `Array.from(row).map(...)`.
    const result: unknown[] = Array.from(row);

    for (let i = 0; i < result.length; i++) {
        const value = result[i];

        // Convert array buffers to arrays of bytes.
        // Base64 would've been more efficient but would collide with the existing
        // logic that treats string values of type Bytes as raw UTF-8 bytes that was
        // implemented for other adapters.
        if (value instanceof ArrayBuffer || value instanceof Buffer) {
            result[i] = Array.from(new Uint8Array(value));
            continue;
        }

        // If an integer is required and the current number isn't one,
        // discard the fractional part.
        if (
            typeof value === 'number' &&
            (columnTypes[i] === ColumnTypeEnum.Int32 || columnTypes[i] === ColumnTypeEnum.Int64) &&
            !Number.isInteger(value)
        ) {
            result[i] = Math.trunc(value);
            continue;
        }

        // Decode DateTime values saved as numeric timestamps which is the
        // format used by the native quaint sqlite connector.
        if (
            [
                'number',
                'bigint',
            ].includes(typeof value) &&
            columnTypes[i] === ColumnTypeEnum.DateTime
        ) {
            result[i] = new Date(Number(value)).toISOString();
            continue;
        }

        // Convert bigint to string as we can only use JSON-encodable types here.
        if (typeof value === 'bigint') {
            result[i] = value.toString();
            continue;
        }
    }

    return result;
}

export function mapQueryArgs(args: unknown[], argTypes: ArgType[]): unknown[] {
    return args.map((arg, i) => {
        const argType = argTypes[i];
        if (argType === 'Int32') {
            return Number.parseInt(arg as string);
        }

        if (argType === 'Float' || argType === 'Double') {
            return Number.parseFloat(arg as string);
        }

        if (typeof arg === 'boolean') {
            return arg ? 1 : 0; // SQLite does not natively support booleans
        }

        if (arg instanceof Date) {
            return arg
                .toISOString()
                .replace('T', ' ')
                .replace(/\.\d{3}Z$/, '');
        }

        if (arg instanceof Uint8Array) {
            return Buffer.from(arg);
        }

        return arg;
    });
}
