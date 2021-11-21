const servicesURL = 'https://api-restauran.herokuapp.com/api/servicios';

function getServices() {
    return fetch(servicesURL)
        .then(response => response.json())
        .then(response => {
            const { servicio } = response;
            const services = servicio.map(item => {
                const { public_id, imgURL, descripcion, nombre } = item;

                return { public_id, imgURL, descripcion, nombre };
            });

            return services;
        })
}


export default getServices;