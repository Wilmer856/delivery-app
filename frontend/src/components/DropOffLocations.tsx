
interface DropOffLocation {
    id: string,
    name: string,
    coordinates: [number, number]
}

const DropOffLocations: React.FC<{locations:DropOffLocation[], onClickLocation: (coordinates: [number, number]) => void}> = ({locations, onClickLocation}) => {
    return (
    <div>
      <h3>Drop-off Locations</h3>
      <ul>
        {locations.map((location) => (
          <li key={location.id} onClick={() => onClickLocation(location.coordinates)}>
            {location.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropOffLocations;