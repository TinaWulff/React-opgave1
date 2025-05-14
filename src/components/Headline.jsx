import './Headline.scss';


export default function Headline({headline, children, text}) {

  return (
    <>
    <div className="headline">
   <h2>{headline}<br></br><span>{children}</span>
   </h2>
   <p>{text}</p>
   </div>
    </>
  )
}


