

export default function Facts({icon, value, category }) {

    return (
      <>
      <div className="facts">
        <img src={icon} alt="icon" />
        <p>{value}</p>
        <p>{category}</p>
     </div>
      </>
    )
  }