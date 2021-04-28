import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsThunk } from "../../store/thunk";
import { Link } from "react-router-dom";
import { postsReducerSelector } from "../../store/postsReducer";


export function Posts() {

  const {
    posts,
    loading,
    error
  } = useSelector(postsReducerSelector.getData)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsThunk())
  }, [])
  
  if (loading) {
    return <h1>Идет загрузка</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  const style = {
    color: 'black',
    textDecoration: 'none'
  }
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <ul className="list-group-flush">
            {posts.map((post,index) => {
              return (
                <div key={index}>
                  <Link style={style} to = {`/posts/${post.id}`}>
                    <h6>{post.title}</h6>
                  </Link> 
                  <br></br>
                  <br></br>
                </div>
              )
            }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
