import 'dotenv/config';
import postgres from 'postgres';

// Todas as variaveis de ambiente do são lidas a partir da variavel process.env
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

export const sql = postgres(URL, { ssl: 'require' });