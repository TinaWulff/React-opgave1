
export default function ProductGalleryCard({image, link, text}) {

    //let {image, headline, text} = props
  
    return (
      <>
     <article>
      <img src={image} alt="illustrative icon" />
      <a href={link}>
        <div>
        <p>{text}</p>
        <p className="readmore">Read more</p>
        </div>
      </a>
     </article>
      </>
    )
  }

