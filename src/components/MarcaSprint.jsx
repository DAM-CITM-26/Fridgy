
export default function MarcaSprint({ sprint }) {
  return (
    <span
      className={`tag tag-s${sprint}`}
      title={`Se hace en el Sprint ${sprint}`}
    >
      S{sprint}
    </span>
  );
}
