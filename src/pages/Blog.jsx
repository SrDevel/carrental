import React, { useState } from 'react';

// Datos de ejemplo para el blog con más artículos
const blogPosts = [
    {
        id: 1,
        category: 'rutas',
        title: 'Explorando las Mejores Rutas en la Montaña',
        content: 'Descubre las rutas más fascinantes para explorar en las montañas...',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    },
    {
        id: 2,
        category: 'rutas',
        title: 'Rutas Costeras: Un Viaje Frente al Mar',
        content: 'Conoce las mejores rutas costeras para disfrutar del paisaje marino mientras conduces...',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    },
    {
        id: 3,
        category: 'rutas',
        title: 'Rutas para Desiertos: Aventuras en el Calor',
        content: 'Descubre rutas únicas a través de algunos de los desiertos más impresionantes...',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    },
    {
        id: 4,
        category: 'lifestyle',
        title: 'Vivir el Estilo de Vida de un Viajero',
        content: 'Aprende cómo adoptar un estilo de vida más libre, viajando por el mundo...',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    },
    {
        id: 5,
        category: 'lifestyle',
        title: 'Cómo Viajar con un Estilo Sostenible',
        content: 'Descubre formas de viajar mientras cuidas del planeta y reduces tu huella ecológica...',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    },
    {
        id: 6,
        category: 'lifestyle',
        title: 'Estilo de Vida Minimalista en el Viaje',
        content: 'Descubre cómo vivir con menos y disfrutar más durante tus viajes...',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    },
    {
        id: 7,
        category: 'vehiculos',
        title: 'Los Últimos Modelos de Vehículos para Aventuras',
        content: 'Aquí te presentamos los vehículos ideales para viajes largos y emocionantes...',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    },
    {
        id: 8,
        category: 'vehiculos',
        title: 'Vehículos Eléctricos: La Nueva Forma de Viajar',
        content: 'Explora cómo los vehículos eléctricos están cambiando la forma en que viajamos...',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    },
    {
        id: 9,
        category: 'vehiculos',
        title: 'Camionetas para Terrenos Difíciles',
        content: 'Te mostramos las mejores camionetas para enfrentar terrenos complicados durante tus aventuras...',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    },
];

// Categorías para el submenú
const categories = ['rutas', 'lifestyle', 'vehículos'];

const Blog = () => {
    // Estado para manejar la categoría seleccionada
    const [selectedCategory, setSelectedCategory] = useState('rutas');

    // Filtrar los posts según la categoría seleccionada
    const filteredPosts = blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Submenú de categorías */}
            <div className="bg-white shadow-md p-4">
                <h1 className="text-3xl font-bold text-gray-800 text-center">Blog de Experiencias</h1>
                <div className="flex justify-center space-x-4 mt-4">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`py-2 px-4 rounded-lg ${
                                selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Lista de posts filtrados */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
                            <p className="text-gray-700">{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
