import './CenterHeadline.scss';

export default function CenterHeadline({headline, children, text}) {

    return (
      <>
      <div className="headline-center">
     <h2>{headline}<span>{children}</span>
     </h2>
     <p>{text}</p>
     </div>
      </>
    )
  }