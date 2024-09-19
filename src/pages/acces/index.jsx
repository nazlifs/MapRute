/* import { useState, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import axios from 'axios';

const MapComponent = () => {
  const [startLocation, setStartLocation] = useState('London');
  const [endLocation, setEndLocation] = useState('Manchester');
  const [startCoords, setStartCoords] = useState([1.0530032074264406, 99.78451536745514]);
  const [endCoords, setEndCoords] = useState([1.294138942396708, 99.44570747984092]);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchCoordinates = async (location) => {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
          params: {
            q: location,
            format: 'json',
            limit: 1
          }
        });
        return response.data[0] ? [parseFloat(response.data[0].lat), parseFloat(response.data[0].lon)] : null;
      } catch (error) {
        console.error('Error fetching coordinates:', error);
        return null;
      }
    };

    const updateMap = async () => {
      const startCoords = await fetchCoordinates(startLocation);
      const endCoords = await fetchCoordinates(endLocation);

      if (startCoords && endCoords) {
        setStartCoords(startCoords);
        setEndCoords(endCoords);
      }
    };

    updateMap();
  }, [startLocation, endLocation]);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView(startCoords, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.Routing.control({
        waypoints: [
          L.latLng(startCoords),
          L.latLng(endCoords)
        ],
        routeWhileDragging: true,
      }).addTo(map);

      // Cleanup on component unmount
      return () => map.remove();
    }
  }, [startCoords, endCoords]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStartLocation(e.target.startLocation.value);
    setEndLocation(e.target.endLocation.value);
  };

  return (
    <div id='acces' className=' m-auto'>
      <h2 className="mx-auto text-center text-3xl font-bold mb-4">Acces</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex px-5 py-5 gap-5'>
          <label>
            Start Location:
            <input type="text" className='border-2 mr-2 rounded-md px-2' name="startLocation" defaultValue={startLocation} />
          </label>
          <label>
            End Location:
            <input type="text" className='border-2 mr-2 rounded-md px-2' name="endLocation" defaultValue={endLocation} />
          </label>
        <button type="submit" className='bg-gray-800 rounded-md text-white px-5'>Update Route</button>
        </div>
      </form>
      <div id="map" style={{ height: '50vh', width: '100%' }} ref={mapRef} />
    </div>
  );
};

export default MapComponent;*/

import { useState, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L, { point } from 'leaflet';
import 'leaflet-routing-machine';
import axios from 'axios';
import NavbarComp from '../../components/Navbarcomp';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: point(15, 40, true)
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const [startLocation, setStartLocation] = useState('Gunung Tua, Sumatera Utara');
  const [endLocation, setEndLocation] = useState('Danau Tao, Sumatera Utara');
  const [startCoords, setStartCoords] = useState([1.0530032074264406, 99.78451536745514]); // Gunung Tua
  const [endCoords, setEndCoords] = useState([1.294138942396708, 99.44570747984092]); // Danau Tao
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchCoordinates = async (location) => {
      try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: location,
            format: 'json',
            limit: 1
          }
        });
        return response.data[0] ? [parseFloat(response.data[0].lat), parseFloat(response.data[0].lon)] : null;
      } catch (error) {
        console.error('Error fetching coordinates:', error);
        return null;
      }
    };

    const updateMap = async () => {
      const startCoords = await fetchCoordinates(startLocation);
      const endCoords = await fetchCoordinates(endLocation);

      if (startCoords && endCoords) {
        setStartCoords(startCoords);
        setEndCoords(endCoords);

        // titik waypoints
        const exampleWaypoints = [
          [1.0600, 99.7800],
          [1.0800, 99.7900],
          [1.1000, 99.8000],
          [1.1200, 99.8100],
          [1.1400, 99.8200]
        ];

        // implementasi algoritma greedy
        const calculateGreedyRoute = (start, end, waypoints) => {
          const route = [start];
          let currentLocation = start;
          const remainingWaypoints = [...waypoints];

          while (remainingWaypoints.length > 0) {
            const nearestWaypoint = remainingWaypoints.reduce((closest, waypoint) => {
              const distToCurrent = L.latLng(currentLocation).distanceTo(L.latLng(waypoint));
              const distToClosest = L.latLng(currentLocation).distanceTo(L.latLng(closest));
              return distToCurrent < distToClosest ? waypoint : closest;
            }, remainingWaypoints[0]);

            route.push(nearestWaypoint);
            currentLocation = nearestWaypoint;
            remainingWaypoints.splice(remainingWaypoints.indexOf(nearestWaypoint), 1);
          }

          route.push(end);
          return route;
        };

        // Generate routes and find the fastest one
        const greedyRoute = calculateGreedyRoute(startCoords, endCoords, exampleWaypoints);
        
        setRoutes([
          {
            id: 1,
            waypoints: greedyRoute.map(coord => L.latLng(coord)),
            name: 'Greedy Route'
          },
          /*{
            id: 2,
            waypoints: [
              L.latLng(startCoords),
              L.latLng([1.0700, 99.7850]),
              L.latLng([1.0900, 99.7950]),
              L.latLng([1.1200, 99.8150]),
              L.latLng(endCoords)
            ],
            name: 'Alternative Route 1'
          },*/
          {
            id: 3,
            waypoints: [
              L.latLng(startCoords),
              L.latLng([1.0600, 99.7800]),
              L.latLng([1.0800, 99.7900]),
              L.latLng([1.1000, 99.8000]),
              L.latLng([1.1200, 99.8100]),
              L.latLng([1.1400, 99.8200]),
              L.latLng(endCoords)
            ],
            name: 'Alternative Route 2'
          }
        ]);

        // Default select the greedy route
        setSelectedRoute(1);
      }
    };

    updateMap();
  }, [startLocation, endLocation]);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView(startCoords, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Clear existing routing controls and markers
      map.eachLayer(layer => {
        if (layer instanceof L.Routing.Control || layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      if (selectedRoute) {
        const route = routes.find(r => r.id === selectedRoute);
        if (route) {
          // Add route to map
          L.Routing.control({
            waypoints: route.waypoints,
            routeWhileDragging: true,
            router: L.Routing.osrmv1({
              serviceUrl: 'https://router.project-osrm.org/route/v1' // OSRM URL
            })
          }).addTo(map);

          // Add start and end markers
          L.marker(route.waypoints[0]).addTo(map).bindPopup('Start Point');
          L.marker(route.waypoints[route.waypoints.length - 1]).addTo(map).bindPopup('End Point');
        }
      }

      // Cleanup on component unmount
      return () => map.remove();
    }
  }, [startCoords, endCoords, selectedRoute, routes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStartLocation(e.target.startLocation.value);
    setEndLocation(e.target.endLocation.value);
  };

  const handleRouteChange = (e) => {
    setSelectedRoute(parseInt(e.target.value, 10));
  };

  return (
    
    <div id='acces' className=' m-auto'>
        <NavbarComp/>
      <h2 className="mx-auto text-center text-3xl font-bold mb-4">Acces</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex px-5 py-5 gap-5'>
          <label>
            Start Location:
            <input type="text" className='border-2 mr-2 rounded-md px-2' name="startLocation" defaultValue={startLocation} />
          </label>
          <label>
            End Location:
            <input type="text" className='border-2 mr-2 rounded-md px-2' name="endLocation" defaultValue={endLocation} />
          </label>
          <button type="submit" className='bg-gray-800 rounded-md text-white px-5'>Update Route</button>
        </div>
      </form>
      <div className='flex flex-col px-5 py-5'>
        <label>
          Select Route:
          <select onChange={handleRouteChange} value={selectedRoute || ''} className='border-2 rounded-md px-2'>
            <option value="">--Select Route--</option>
            {routes.map(route => (
              <option key={route.id} value={route.id}>{route.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div id="map" style={{ height: '50vh', width: '100%' }} ref={mapRef} />
    </div>
  );
};

export default MapComponent;








