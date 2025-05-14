

export default function Facts({image, value, category }) {

    return (
      <>
      <div className="facts">
        <img src={image} alt="icon" />
        <p className="value">{value}</p>
        <p className="category">{category}</p>
     </div>
      </>
    )
  }