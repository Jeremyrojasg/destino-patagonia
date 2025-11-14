function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const destinos = [
  {
    nombre: "Centro de Ski La Hoya",
    descripcion: "Famoso por su nieve en polvo y paisajes espectaculares. Ideal para amantes de los deportes de invierno.",
    imagen: "/images/lahoya.jpg",
    href: "/destinos/centro-de-ski-la-hoya",
    slug: "centro-de-ski-la-hoya",
    historia: "El Centro de Ski La Hoya, inaugurado en 1974, nació de la visión de pioneros locales que reconocieron el potencial de estas montañas para los deportes de invierno. Ubicado a 1.200 metros sobre el nivel del mar en los faldeos del Cordón Esquel, el centro debe su nombre a la particular formación geográfica que lo alberga, una hoya natural que garantiza excelentes condiciones de nieve. A lo largo de los años, ha sido testigo del crecimiento del turismo en la región y ha acogido importantes competencias nacionales e internacionales.",
    galeria: [
      {
        url: "/images/lahoya-1.jpg",
        alt: "Vista panorámica de las pistas de ski",
        caption: "Pistas principales con vista a la cordillera"
      },
      {
        url: "/images/lahoya-2.jpg",
        alt: "Escuela de ski en acción",
        caption: "Clases de ski para principiantes"
      },
      {
        url: "/images/lahoya-3.jpg",
        alt: "Atardecer en la montaña",
        caption: "Últimos rayos de sol en La Hoya"
      }
    ],
    metaDescripcion: "Descubre el Centro de Ski La Hoya en Esquel, Patagonia Argentina. Pistas de primer nivel, nieve en polvo y paisajes espectaculares para esquiadores de todos los niveles.",
    keywords: ["ski", "nieve", "deportes de invierno", "Esquel", "Patagonia", "La Hoya", "montaña"],
      rating: 4.8,
      coordinates: {
        latitude: -42.83308329950421,
        longitude: -71.25723595609382
      },
  },
  {
    nombre: "Campo de Tulipanes",
    descripcion: "Un espectáculo natural de colores cerca de Trevelin. Abre durante octubre con miles de flores en floración.",
    imagen: "/images/tulipanes.jpg",
    href: "/destinos/campo-de-tulipanes",
    slug: "campo-de-tulipanes",
    historia: "El Campo de Tulipanes de Trevelin es un testimonio vivo de la herencia galesa en la Patagonia. Todo comenzó en la década de 1980 cuando agricultores locales, inspirados por el éxito de los cultivos de tulipanes en los Países Bajos, decidieron experimentar con estos bulbos en el clima patagónico. Para su sorpresa, las condiciones resultaron ideales. Hoy, este campo se ha convertido en un ícono cultural que florece cada octubre, transformando el valle en un espectáculo de colores que atrae a visitantes de todo el mundo.",
    galeria: [
      {
        url: "/images/tulipanes-1.jpg",
        alt: "Campo de tulipanes en plena floración",
        caption: "Mar de tulipanes multicolores"
      },
      {
        url: "/images/tulipanes-2.jpg",
        alt: "Visitantes fotografiando tulipanes",
        caption: "Experiencia fotográfica única"
      },
      {
        url: "/images/tulipanes-3.jpg",
        alt: "Atardecer en el campo de tulipanes",
        caption: "Ocaso entre flores"
      }
    ],
    metaDescripcion: "Visita el espectacular Campo de Tulipanes de Trevelin, Patagonia Argentina. Un festival de colores que florece cada octubre, fusionando la herencia galesa con la belleza natural.",
    keywords: ["tulipanes", "flores", "Trevelin", "Patagonia", "primavera", "herencia galesa", "fotografía"],
      rating: 4.5,
      // Traslados disponibles para este destino
      trasladosAvailable: true,
      trasladosPrecio: { aeropuerto: "Consultar", terminal: "Consultar" },
      coordinates: {
        latitude: -43.16981797843051,
        longitude: -71.50783689635384
      },
  },
  {
    nombre: "Cascadas de Nant y Fall",
    descripcion: "Tres cascadas imponentes rodeadas de bosque nativo. Un paseo imperdible para conectar con la naturaleza.",
    imagen: "/images/nantyfall.jpg",
    href: "/destinos/cascadas-de-nant-y-fall",
    slug: "cascadas-de-nant-y-fall",
    historia: "Las Cascadas de Nant y Fall, cuyo nombre proviene del galés y significa 'Arroyo y Cascada', son un tesoro natural descubierto por los primeros colonos galeses que llegaron a la región en el siglo XIX. El sitio fue un importante punto de encuentro para las comunidades originarias Tehuelche y posteriormente para los colonos galeses, quienes encontraron en estas aguas un recordatorio de su tierra natal. Las tres cascadas, con caídas de hasta 50 metros, se han convertido en un símbolo de la perfecta fusión entre la herencia cultural galesa y la majestuosidad del paisaje patagónico.",
    galeria: [
      {
        url: "/images/nantyfall-1.jpg",
        alt: "Vista panorámica de la cascada principal",
        caption: "La imponente caída principal"
      },
      {
        url: "/images/nantyfall-2.jpg",
        alt: "Sendero entre el bosque nativo",
        caption: "Camino hacia las cascadas"
      },
      {
        url: "/images/nantyfall-3.jpg",
        alt: "Detalle de la flora nativa",
        caption: "Vegetación autóctona del lugar"
      }
    ],
    metaDescripcion: "Explora las místicas Cascadas de Nant y Fall en Trevelin, Patagonia Argentina. Tres majestuosas caídas de agua rodeadas de bosque nativo y rica historia galesa.",
    keywords: ["cascadas", "naturaleza", "Trevelin", "Patagonia", "historia galesa", "senderismo", "bosque nativo"],
      rating: 4.7,
      trasladosAvailable: true,
      trasladosPrecio: { aeropuerto: "Consultar", terminal: "Consultar" },
      coordinates: {
        latitude: -43.19003269079159,
        longitude: -71.47196344765345
      },
  },
  {
    nombre: "Parque Nacional Los Alerces",
    descripcion: "Patrimonio Mundial por la UNESCO. Lagos, montañas y bosques milenarios de alerces.",
    imagen: "/images/losalerces.jpg",
    href: "/destinos/parque-nacional-los-alerces",
    slug: "parque-nacional-los-alerces",
    historia: "El Parque Nacional Los Alerces, establecido en 1937, protege uno de los tesoros naturales más antiguos del planeta: los majestuosos alerces, algunos con más de 3.000 años de antigüedad. Declarado Patrimonio Mundial por la UNESCO en 2017, el parque fue creado inicialmente para proteger los bosques de alerce patagónico (Fitzroya cupressoides), una especie que existía antes de la formación de los Andes. Los pueblos originarios Tehuelche consideraban estas tierras sagradas, y los primeros exploradores europeos quedaron maravillados por la magnitud de estos gigantes verdes. El parque no solo preserva estos árboles milenarios, sino también un complejo sistema de lagos glaciarios y una biodiversidad única.",
    galeria: [
      {
        url: "/images/losalerces-1.jpg",
        alt: "Alerce milenario en el parque",
        caption: "Alerce de más de 2.000 años"
      },
      {
        url: "/images/losalerces-2.jpg",
        alt: "Vista del Lago Futalaufquen",
        caption: "Aguas cristalinas del Lago Futalaufquen"
      },
      {
        url: "/images/losalerces-3.jpg",
        alt: "Sendero en el bosque",
        caption: "Camino entre gigantes verdes"
      }
    ],
    metaDescripcion: "Descubre el Parque Nacional Los Alerces, Patrimonio Mundial UNESCO en la Patagonia Argentina. Hogar de alerces milenarios, lagos glaciares y paisajes únicos.",
    keywords: ["parque nacional", "alerces", "UNESCO", "patrimonio mundial", "naturaleza", "lagos", "montañas", "bosques milenarios"],
    rating: 4.9,
    coordinates: {
      latitude: -42.89370762745705,
      longitude: -71.61739285081244
    },
  },
  {
    nombre: "La Trochita - Viejo Expreso Patagónico",
    descripcion: "Un histórico tren a vapor que recorre paisajes impresionantes entre Esquel y El Maitén.",
    imagen: "/images/trochita.jpg",
    href: "/destinos/la-trochita-viejo-expreso-patagonico",
    slug: "la-trochita-viejo-expreso-patagonico",
    historia: "La Trochita, también conocida como el Viejo Expreso Patagónico, es un legendario tren a vapor que comenzó sus operaciones en 1945. Su nombre deriva de su característica vía angosta de 75 cm de ancho. Este ferrocarril fue vital para el desarrollo de la Patagonia, conectando comunidades aisladas y transportando productos locales. Durante décadas, fue el único medio de transporte confiable en la región durante los duros inviernos. Hoy, conservando sus locomotoras Baldwin y vagones originales de 1922, La Trochita continúa operando como un museo vivo, permitiendo a los visitantes experimentar un viaje en el tiempo a través de la estepa patagónica.",
    galeria: [
      {
        url: "/images/trochita-1.jpg",
        alt: "La Trochita atravesando la estepa",
        caption: "El tren a vapor en pleno recorrido"
      },
      {
        url: "/images/trochita-2.jpg",
        alt: "Interior restaurado del vagón",
        caption: "Vagones originales de 1922"
      },
      {
        url: "/images/trochita-3.jpg",
        alt: "Locomotora en la estación",
        caption: "Histórica locomotora Baldwin"
      }
    ],
    metaDescripcion: "Viaja en La Trochita, el legendario tren a vapor de la Patagonia Argentina. Una experiencia única en un ferrocarril histórico que atraviesa paisajes impresionantes.",
    keywords: ["tren", "vapor", "historia", "Patagonia", "Esquel", "El Maitén", "ferrocarril", "viaje histórico"],
    rating: 4.4,
    coordinates: {
      latitude: -42.90391552823669,
      longitude: -71.3179152154617
    },
  },
  {
    nombre: "Museo Nant Fach - Molino Harinero",
    descripcion: "Un molino histórico que recuerda la tradición agrícola y molinera de la región, convertido en un punto cultural en Trevelin.",
    imagen: "/images/molino.jpg",
    href: "/destinos/molino-harinero-trevelin",
    slug: "molino-harinero-trevelin",
    historia: "El Molino Harinero de Trevelin data de principios del siglo XX y fue clave para el desarrollo agrícola local. Construido por familias de colonos, el molino procesó granos y sustentó la economía rural durante décadas. Actualmente conserva su estructura original y funciona como centro cultural que aloja exposiciones sobre la vida de los colonos y procesos tradicionales de molienda.",
    galeria: [
      { url: "/images/molino-1.jpg", alt: "Fachada del molino harinero", caption: "Molino histórico en Trevelin" },
      { url: "/images/molino-2.jpg", alt: "Detalle de la maquinaria antigua", caption: "Maquinaria de molienda restaurada" },
      { url: "/images/molino-3.jpg", alt: "Exposición en el molino", caption: "Muestra sobre la vida rural" }
    ],
    metaDescripcion: "Visita el Molino Harinero de Trevelin, un ícono histórico de la agricultura local y centro cultural que preserva la tradición molinera de la Patagonia.",
    keywords: ["molino", "Trevelin", "historia", "agricultura", "cultura", "molienda"],
    rating: 4.2,
      trasladosAvailable: true,
      trasladosPrecio: { aeropuerto: "Consultar", terminal: "Consultar" },
    coordinates: {
      latitude: -43.20358911129759,
      longitude: -71.5625298761518
    },
  },
  {
    nombre: "Represa Hidroeléctrica Futaleufú",
    descripcion: "Una imponente obra de ingeniería que regula las aguas y genera energía para la región, con vistas panorámicas y actividades cercanas.",
    imagen: "/images/futaleufu.jpg",
    href: "/destinos/represa-hidroelectrica-futaleufu",
    slug: "represa-hidroelectrica-futaleufu",
    historia: "La represa Futaleufú modernizó el aporte energético de la región y aprovechó la poderosa cuenca del río Futaleufú. Su construcción marcó un hito en la infraestructura local, balanceando necesidades energéticas y conservación. Hoy es un lugar de interés para quienes estudian ingeniería, energía y el impacto ambiental, además de ofrecer miradores y zonas de interpretación.",
    galeria: [
      { url: "/images/futaleufu-1.jpg", alt: "Vista aérea de la represa", caption: "Magnitud de la obra hidráulica" },
      { url: "/images/futaleufu-2.jpg", alt: "Atardecer sobre el embalse", caption: "Reflejos en el embalse" },
      { url: "/images/futaleufu-3.jpg", alt: "Centro de interpretación", caption: "Información sobre energía y medio ambiente" }
    ],
    metaDescripcion: "Conoce la Represa Futaleufú, una obra hidráulica de gran escala en la región que combina ingeniería, energía y paisajes imponentes.",
    keywords: ["represa", "hidroeléctrica", "energía", "Futaleufú", "ingeniería", "embalse"],
    rating: 4.6,
    coordinates: {
      latitude: -43.12953649844018,
      longitude: -71.6299686677103
    },
  },
  {
    nombre: "Viñedos de Nant y Fall",
    descripcion: "Pequeños viñedos boutique que experimentan con variedades adaptadas al clima patagónico, ofreciendo catas y recorridos.",
    imagen: "/images/vinedos-nantyfall.jpg",
    href: "/destinos/vinedos-de-nant-y-fall",
    slug: "vinedos-de-nant-y-fall",
    historia: "Los Viñedos de Nant y Fall son el resultado de la innovación agrícola regional, donde productores locales han adaptado técnicas vitivinícolas para cultivar en altura y clima frío. En los últimos años, estas bodegas boutique han emergido ofreciendo vinos de carácter único y visitas guiadas que conectan al visitante con la tierra y la producción artesanal.",
    galeria: [
      { url: "/images/vinedos-1.jpg", alt: "Filas de viñedos en pendiente", caption: "Terrazas vitivinícolas" },
      { url: "/images/vinedos-2.jpg", alt: "Cata de vinos locales", caption: "Degustación en bodega" },
      { url: "/images/vinedos-3.jpg", alt: "Detalle de uvas patagónicas", caption: "Variedades adaptadas al frío" }
    ],
    metaDescripcion: "Descubre los viñedos boutique de Nant y Fall: catas, recorridos y vinos únicos producidos en la Patagonia.",
    keywords: ["viñedos", "vino", "bodega", "Nant y Fall", "cata", "agroturismo"],
    rating: 4.3,
      trasladosAvailable: true,
      trasladosPrecio: { aeropuerto: "Consultar", terminal: "Consultar" },
    coordinates: {
      latitude: -43.17017990447885,
      longitude: -71.5115043658898
    },
  },
  {
    nombre: "Reserva Urbana La Zeta",
    descripcion: "Un espacio verde aledaño a la ciudad que protege flora local y ofrece senderos, miradores y áreas recreativas para la comunidad.",
    imagen: "/images/reserva-la-zeta.jpg",
    href: "/destinos/reserva-urbana-la-zeta",
    slug: "reserva-urbana-la-zeta",
    historia: "La Reserva Urbana La Zeta nació como respuesta a la necesidad de conservar remanentes de ecosistemas nativos dentro del área urbana. Iniciativas comunitarias y proyectos municipales trabajaron juntos para proteger estos espacios, que hoy son vitales para la biodiversidad local y para ofrecer a la comunidad un lugar de conexión con la naturaleza.",
    galeria: [
      { url: "/images/lazeta-1.jpg", alt: "Sendero en la reserva urbana", caption: "Camino entre vegetación nativa" },
      { url: "/images/lazeta-2.jpg", alt: "Mirador con vista a la ciudad", caption: "Vista urbana desde la reserva" },
      { url: "/images/lazeta-3.jpg", alt: "Area de picnic y recreo", caption: "Espacios para la comunidad" }
    ],
    metaDescripcion: "Visita la Reserva Urbana La Zeta: un pulmón verde de la ciudad que protege flora nativa y ofrece espacios recreativos y senderos.",
    keywords: ["reserva urbana", "naturaleza", "ciudad", "biosfera urbana", "senderismo"],
    rating: 4.0,
    coordinates: {
      latitude: -42.89506102488456,
      longitude: -71.35019640804882
    }
  }
];