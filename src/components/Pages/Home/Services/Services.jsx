import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-orange-600">Our Services: {services.length}</h3>
                <h2 className="text-5xl">Our service area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <div className="grid grid-cols-3 gap-6">
                    {
                        services.map(service => <ServiceCard
                        key={service._id}
                        service = {service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;