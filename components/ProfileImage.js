import style from "./ProfileImage.module.css";

export default function ProfileImage() {
  return (
    <div className={style.profileContainer}>
      <div className={style.imageContainer}>
        <img
          itemProp="image"
          alt="Avoonix"
          className={style.profilePicture}
          width="200"
          height="200"
          title="Avoonix"
          src="/images/avoonix/day.png"
        />
      </div>
      <h1 itemProp="name">Avoonix</h1>
    </div>
  );
}
