import { randomUUID } from 'crypto';

export class DatabaseMemory {

	#videos = new Map();

	list(search){
		// Array.from() converte uma estrutura de dados que não é um array para um array.
		// Entries neste caso retorna o ID do video, separado das informações do video
		return Array.from(this.#videos.entries())
			.map(infos => {
				const id = infos[0];
				const data = infos[1];

				return {
					id,
					...data
				};
			})
			.filter(video => {
				// Recebendo a parametro search realizamos uma filtragem e retornarmos somente o item ao qual
				// a busca foi feita, se não retornamos a lista completa
				if (search){
					return video.title.includes(search);
				}

				return true;
			});
	}
    
	create(video){
		const videoId = randomUUID();

		return this.#videos.set(videoId, video);
	}
    
	update(id, video){
		return this.#videos.set(id, video);
	}

	delete(id){
		return this.#videos.delete(id);
	}

}
