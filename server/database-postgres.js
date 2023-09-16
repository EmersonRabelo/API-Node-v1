import { randomUUID } from 'crypto';
import { sql } from './db.js';

export class DatabasePostgres {

	async list(search){
		return search ? 
			await sql`SELECT * FROM videos WHERE title ILIKE ${'%'+search+'%'}` 
			: await sql`SELECT * FROM videos`;
            
	}
    
	async create(video){
		const uuid = randomUUID();

		const {title, description, duration } = video;

		await sql`
            INSERT INTO 
                videos 
                    (id, title, description, duration) 
                VALUES 
                    (${uuid},${title},${description},${duration})
        `;

	}
    
	async update(id, video){
		const {title, description, duration} = video;

		await sql`
            UPDATE 
                videos 
            SET 
                title = ${title}, 
                description = ${description}, 
                duration = ${duration}
            WHERE
                id = ${id}
        `;
	}

	async delete(id){
		await sql`
            DELETE 
                FROM 
                    videos 
                WHERE 
                    id = ${id}
        `;
	}

}
