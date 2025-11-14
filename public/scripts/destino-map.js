// Cliente: cargar Leaflet desde CDN dinámicamente y inicializar mapas
(async function() {
  // Cargar CSS de Leaflet
  const leafletCss = document.createElement('link');
  leafletCss.rel = 'stylesheet';
  leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
  document.head.appendChild(leafletCss);

  // Cargar script de Leaflet
  await new Promise((resolve, reject) => {
    if (window.L) return resolve();
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load Leaflet'));
    document.head.appendChild(s);
  });

  // Inicializar mapas
  const mapContainers = document.querySelectorAll('.map-container');
  mapContainers.forEach(container => {
    const lat = parseFloat(container.dataset.lat || '0');
    const lng = parseFloat(container.dataset.lng || '0');
    const title = container.dataset.title || '';

    try {
      const map = L.map(container).setView([lat, lng], 14);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      const marker = L.marker([lat, lng]).addTo(map);
      marker.bindPopup(title);

      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
      const googleMapsButton = L.control({ position: 'bottomright' });
      googleMapsButton.onAdd = function() {
        const div = L.DomUtil.create('div', 'leaflet-control');
        div.innerHTML = `<a href="${googleMapsUrl}" target="_blank" class="bg-white px-3 py-2 rounded shadow hover:bg-gray-100 text-sm">Ver en Google Maps</a>`;
        return div;
      };
      googleMapsButton.addTo(map);
    } catch (err) {
      // Si L no está disponible o hay algún error, mostrar en consola
      console.error('Error inicializando Leaflet:', err);
    }
  });
})();
