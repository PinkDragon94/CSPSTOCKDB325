const { MongoClient } = require('mongodb');
async function connectToMongo() {
    const mongoConnectionString = process.env.MONGO_DB_CONNECTION_STRING;

    if (!mongoConnectionString) {
        throw new Error('MONGO_DB_CONNECTION_STRING environment variable is not set');

    }

    const client = new MongoClient(mongoConnectionString);

    try {
        await client.connect();
        await listDatabases(client);
    } finally {
        await client.close();
    }
}

main().catch(console.error);