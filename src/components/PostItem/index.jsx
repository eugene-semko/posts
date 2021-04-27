import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function PostItem(props) {
  const { id } = useParams()
  const users = useSelector(state => state.postsReducer.users)


  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <figure className="text-center">
            <h1>
              {users[id - 1].title}
            </h1>
            <br></br>
            <h3>
              {users[id - 1].body}
            </h3>
          </figure>
        </div>
      </div>
    </div>
  );
}
