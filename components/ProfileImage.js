import style from "./ProfileImage.module.css";
import LazyImage from "./LazyImage";

export default function ProfileImage() {
  return (
    <div className={style.profileContainer}>
      <div className={style.imageContainer}>
        <LazyImage
          alt="Avoonix"
          className={style.profilePicture}
          width="200"
          height="200"
          title="Avoonix"
          loaderColor="#e5b6e1"
          src="/images/avoonix/avoo-headshot-sky.png"
          loaderBorderRadius="100%"
        />
      </div>
    </div>
  );
}
