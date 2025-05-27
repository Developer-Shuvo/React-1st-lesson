export default function BikeInfo(props) {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        borderRadius: "5px",
        padding: "",
        marginTop: "60px",
        border: "8px solid green",
      }}
    >
      <h2 style={{ color: "purple", fontSize: "40px" }}>Bike Lover</h2>
      <ul style={{ fontSize: "20px", fontWeight: "bold", color: "blue", justifyContent:"left" }}>
        <li>
          <span style={{ color: "green" }}>Bike Brand :</span> {props.name}
        </li>
        <li>
          <span style={{ color: "green" }}>Horse Power :</span>{" "}
          {props.engine}
        </li>
        <li>
          {" "}
          <span style={{ color: "green" }}>Price :</span>{" "}
          {props.price}
        </li>
      </ul>
    </div>
  );
}
