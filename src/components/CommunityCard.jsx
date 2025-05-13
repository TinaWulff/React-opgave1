
export default function CommunityCard({image, headline, text, children}) {

  //let {image, headline, text} = props

  return (
    <>
   <article>
    <h2>{children}</h2>
    <img src={image} alt="illustrative icon" />
    {console.log(image)}
    <h3>{headline}</h3>
    <p>{text}</p>
   </article>
    </>
  )
}

