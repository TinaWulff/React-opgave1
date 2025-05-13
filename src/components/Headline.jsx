


export default function Headline({headline, children, text}) {

  return (
    <>
    <div className="headline">
   <h2>{headline}<span>{children}</span>
   </h2>
   <p>{text}</p>
   </div>
    </>
  )
}


