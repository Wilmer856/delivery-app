

interface Route {
    id: string;
    name: string;
  }
  
  const RouteList: React.FC<{ routes: Route[], onSelectRoute: (routeId: string) => void }> = ({ routes, onSelectRoute }) => {
    return (
        <div>
            <h3>Routes</h3>
            <ul>
            {routes.map((route) => (
                <li key={route.id} onClick={() => onSelectRoute(route.id)}>
                {route.name}
                </li>
            ))}
            </ul>
        </div>
    );
};
  
  export default RouteList;