import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsThunk } from "../../store/thunk";
import { Link } from "react-router-dom";

export function Posts() {

  const users = useSelector(state => state.postsReducer.users)
  const loading = useSelector(state => state.postsReducer.loading)
  const error = useSelector(state => state.postsReducer.error)
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
            {users.map((user,index) => {
              const link = `/posts/${user.id}`
              return (
                <div>
                  <Link style={style} to = {{pathname:link}}>
                    <h6>{user.title}</h6>
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
