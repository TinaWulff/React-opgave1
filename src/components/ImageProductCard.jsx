
export default function ProductGalleryCard({image, link, text}) {

    //let {image, headline, text} = props
  
    return (
      <>
     <article>
      <img src={image} alt="illustrative image" />
      <a href={link}>
        <div>
        <p className="text">{text}</p>
        <p className="readmore">Read more</p>
        </div>
      </a>
     </article>
      </>
    )
  }

