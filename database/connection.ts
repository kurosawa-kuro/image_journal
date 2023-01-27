require('dotenv').config();
import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool(
        "mysql://root:password@localhost:3306/image_journal?schema=public"
    );

    return connection;
}