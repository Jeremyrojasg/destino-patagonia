import { destinos } from './destinos';

export const tours = [
    {
        id: 1,
        nombre: "Tour Campo & Viñas",
        slug: "tour-campo-y-vinas",
        descripcion: "Descubre la belleza natural y la cultura local en un recorrido que combina la espectacular floración de tulipanes, la tradición vitivinícola de la Patagonia y la majestuosidad de las cascadas.",
        descripcionLarga: "Embárcate en un viaje único que combina la belleza natural y la rica cultura local de la Patagonia. Este tour te llevará a través de campos de tulipanes en flor, viñedos de altura, cascadas naturales y sitios históricos, ofreciendo una experiencia completa de la región.",
        imagen: "/images/tours/tour-campo-vinas.jpg", // Asegúrate de tener esta imagen
        imagenBanner: "/images/tours/tour-campo-vinas-banner.jpg", // Imagen más grande para el banner
        destinos: [
            "campo-de-tulipanes",
            "vinedos-de-nant-y-fall",
            "cascadas-de-nant-y-fall",
            "molino-harinero-trevelin"
        ],
        duracion: "Día completo (8-9 horas)",
        horario: {
            inicio: "09:00",
            fin: "17:30",
            encuentro: "08:45"
        },
        incluye: [
            "Transporte privado desde tu alojamiento",
            "Guía local especializado",
            "Entradas a todos los sitios",
            "Degustación de vinos en viñedo",
            "Almuerzo regional",
            "Seguro de viajero"
        ],
        precio: "Consultar",
        informacionAdicional: [
            "Salidas programadas: Martes a Domingo",
            "Grupos reducidos (máx. 12 personas)",
            "Dificultad: Baja",
            "Apto para todas las edades"
        ],
        itinerario: [
            {
                hora: "09:00",
                actividad: "Recogida en el alojamiento",
                descripcion: "Nuestro guía te recogerá en tu alojamiento para comenzar la aventura."
            },
            {
                hora: "09:45",
                actividad: "Campo de Tulipanes",
                descripcion: "Visita al espectacular campo de tulipanes. Tiempo para fotos y explicación sobre el cultivo."
            },
            {
                hora: "11:30",
                actividad: "Viñas de Nant y Fall",
                descripcion: "Recorrido por los viñedos, explicación del proceso de vinificación y degustación de vinos."
            },
            {
                hora: "13:00",
                actividad: "Almuerzo regional",
                descripcion: "Disfrutaremos de un almuerzo típico con productos locales."
            },
            {
                hora: "14:30",
                actividad: "Cascadas Nant y Fall",
                descripcion: "Caminata suave hasta las cascadas. Tiempo para fotos y descanso."
            },
            {
                hora: "16:00",
                actividad: "Molino Harinero",
                descripcion: "Visita al histórico molino con demostración de molienda tradicional."
            },
            {
                hora: "17:30",
                actividad: "Retorno",
                descripcion: "Regreso a tu alojamiento."
            }
        ],
        recomendaciones: [
            "Usar ropa y calzado cómodo para caminatas suaves",
            "Traer protector solar y gorra",
            "Llevar una botella de agua",
            "Traer abrigo (incluso en verano)",
            "Cámara fotográfica"
        ],
        nivel: {
            dificultad: "Baja",
            esfuerzoFisico: "Moderado",
            caminata: "2-3 km en total",
            terreno: "Mayormente plano con algunas pendientes suaves"
        },
        // Traslados: disponible para este tour
        trasladosAvailable: true,
        trasladosPrecio: {
            aeropuerto: "Consultar",
            terminal: "Consultar"
        },
        getDestinosCompletos() {
            return this.destinos.map(slug => 
                destinos.find(d => d.slug === slug)
            ).filter(Boolean);
        }
    },
    // Aquí puedes agregar más tours siguiendo la misma estructura
];

// Función auxiliar para obtener un tour por su slug
export function getTourBySlug(slug) {
    return tours.find(tour => tour.slug === slug);
}