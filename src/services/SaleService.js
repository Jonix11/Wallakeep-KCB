import {API, HOST} from "./Util";

export default class SaleService {
    getSales({start, limit, sort, includeTotal = true, tag, price, name}) {
        // Empezamos la query
        let query = "?";

        // Añadimos el start
        query += start ? `start=${start}&` : "";

        // 2. Faltan añadir a la query los demás campos [LISTO]
        query += limit ? `limit=${limit}&` : "";
        query += sort ? `sort=${sort}&` : "";

        query += tag ? `tag=${tag}&` : "";
        // Sumo uno al precio que me pasan y muestro todos los anuncios con precio inferior o igual al indicado.
        const priceLimit = parseInt(price) + 1;
        query += price ? `precio=-${priceLimit}&`: "";
        query += name ? `nombre=${name}&` : "";

        // Eliminamos el último & de la query
        query = query.substr(0, query.length - 1);

        return fetch(`${HOST}/${API}/anuncios${query}`, {
            method: "GET"
        }).then(res => res.json());
    }

    getTags() {
        return fetch(`${HOST}/${API}/anuncios/tags`, {
            method: "GET"
        }).then(res => res.json());
        // 2. Eliminar estas líneas y realizar la llamada a NodePop para obtener todos los tags [LISTO]
    }
}
