import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";
function Posts() {
  const [value, loading, error] = useCollection(
    collection(db, "posts")
    // .orderBy("timestamp", "desc")
    ,{
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
