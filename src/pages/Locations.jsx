import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Lista de oficinas con coordenadas de ubicación
const offices = [
    { id: 1, name: 'Oficina Central', city: 'Bogotá', address: 'Calle 123 #45-67', location: { lat: 4.60971, lng: -74.08175 } },
    { id: 2, name: 'Oficina Norte', city: 'Medellín', address: 'Av. Las Palmas 99-21', location: { lat: 6.25184, lng: -75.56359 } },
    { id: 3, name: 'Oficina Aeropuerto', city: 'Cali', address: 'Aeropuerto El Dorado', location: { lat: 3.4516, lng: -76.53198 } },
];

// Configuración del icono de marcador
const officeIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
});

function OfficePage() {
    // Estado para manejar la oficina seleccionada
    const [selectedOffice, setSelectedOffice] = useState(offices[0]);

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Menú lateral de oficinas */}
            <div className="w-1/4 bg-white p-6 shadow-md overflow-y-auto">
                <header className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">Oficinas</h1>
                </header>
                <div className="space-y-4">
                    {offices.map((office) => (
                        <div
                            key={office.id}
                            className={`p-4 rounded-lg cursor-pointer ${
                                selectedOffice.id === office.id ? 'bg-blue-600 text-white' : 'bg-gray-100'
                            }`}
                            onClick={() => setSelectedOffice(office)}
                        >
                            <h2 className="text-xl font-semibold">{office.name}</h2>
                            <p className="text-sm">{office.city}</p>
                            <p className="text-xs">{office.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mapa de oficinas */}
            <div className="w-3/4 relative">
                <MapContainer center={[selectedOffice.location.lat, selectedOffice.location.lng]} zoom={13} style={{ height: '70vh', width: '90%', marginTop: '5vh', marginLeft: '5%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {offices.map((office) => (
                        <Marker key={office.id} position={[office.location.lat, office.location.lng]} icon={officeIcon}>
                            <Popup>
                                <strong>{office.name}</strong><br />
                                {office.address}<br />
                                {office.city}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}

export default OfficePage;