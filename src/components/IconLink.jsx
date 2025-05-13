

export default function IconLink({link, icon}) {

  return (
    <>
    <a href={link}>
        <img src={icon} alt="Company Icon" />
    </a>
    </>
  )
}