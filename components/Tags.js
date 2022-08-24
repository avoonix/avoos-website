import { mdiTag } from "@mdi/js";
import Icon from "@mdi/react";
import classNames from "classnames";
import Link from "next/link";
import styles from "./Artist.module.css";
import tagStyles from "./Tags.module.css";

export default function Tags({ tags }) {

  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.iconContainer}>
          <Icon path={mdiTag} size={1} />
        </div>
        <div>
          <span className="sr-only">Tags: </span>
          <ul className={tagStyles.list}>
            {tags.map(({ id, translation }) => (
              <Link key={id} href={`/gallery/tagged/${id}`}>
                <a>
                  <li className={classNames(tagStyles.badge, "rounded")}>{translation}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
