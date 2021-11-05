import { useContext, useEffect } from "react";
import getServices from "../services/Services/getServices";
import ServicesContext from '../context/ServicesContext';


export function useServices() {
    const { services, setServices } = useContext(ServicesContext);

    useEffect(() => {
        getServices()
            .then(services => {
                setServices(services);
            });
    }, [ setServices ]);

    return { services };
}