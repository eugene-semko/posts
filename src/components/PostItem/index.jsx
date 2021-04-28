import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postsReducerSelector } from "../../store/postsReducer";

export function PostItem(props) {
  const { id } = useParams()
  const posts = useSelector(postsReducerSelector.getData)


  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <figure className="text-center">
            <h1>
              {posts[id - 1].title}
            </h1>
            <br></br>
            <h3>
              {posts[id - 1].body}
            </h3>
          </figure>
        </div>
      </div>
    </div>
  );
}
