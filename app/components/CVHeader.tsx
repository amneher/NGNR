import Image from "next/image";

const CVHeader = ({name, photoURL, intro}: {name: string, photoURL: string | null, intro: string | null}) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        {photoURL && <Image src={photoURL} alt="profile photo" />}
      </div>
      <div>
        { intro && <p>{intro}</p>}
      </div>
    </div>
  )
};
export default CVHeader;