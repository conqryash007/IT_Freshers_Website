import Background from "../imgs/rip2020.jpg"
import avatar from "../imgs/avatar.png"

function DashBoard(props) {
  const { name, email, id, score } = props.user

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="container bg-light border border-5 border-info">
        <h3 className="p-3">Hello</h3>
      </div>
      <div className="d-flex py-5">
        <div
          className="card p-2 m-2 border border-5 border-warning"
          style={{ width: "18rem" }}
        >
          <img src={avatar} className="card-img-top p-4" alt="a user" />
          <div className="card-body m-3">
            <h5 className="card-title text-center">{name}</h5>
            <p className="card-text text-center">
              id:{id} Score:{score}
            </p>
          </div>
        </div>
        <table className="table table-dark table-striped mx-2 my-5 border border-white border-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tasks</th>
              <th scope="col">Completed</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>ff</td>
              <td>ff</td>
              <td>-1</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>ff</td>
              <td>ff</td>
              <td>-1</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>ff</td>
              <td>ff</td>
              <td>-1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashBoard
