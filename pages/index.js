import styles from "../styles/Home.module.css";
import { Can } from "../components/Can";

export default function Home() {
  const Post1 = {
    id: 1,
    authorId: 8,
    __type: "Post",
  };
  const Post2 = {
    id: 2,
    authorId: 7,
    __type: "Post",
  };

  const EDT1 = {
    lundi: "oui",
    mardi: "non",
    authorId: 8,
    __type: "EDT",
  };

  return (
    <div className={styles.container}>
      <Can I="create" a="Post">
        <div>create</div>
      </Can>
      <Can I="update" on={Post1}>
        <div>update</div>
      </Can>
      <Can I="delete" on={Post1}>
        <div>delete</div>
      </Can>
      <Can I="read" on={Post1}>
        <div>read 1</div>
      </Can>
      <Can I="read" on={Post2}>
        <div>read 2</div>
      </Can>
      <Can I="create" an="EDT">
        <div>create EDT</div>
      </Can>
      <Can I="read" this={EDT1}>
        <div>read EDT 1</div>
      </Can>
      <Can I="delete" this={EDT1}>
        <div>delete EDT 1</div>
      </Can>
    </div>
  );
}
