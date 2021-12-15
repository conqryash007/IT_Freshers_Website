import React, { useEffect } from "react"
import { useHttp } from "./../../Shared/Hooks/http-hook"
import { useParams } from "react-router"
const width = window.screen.width
export default function Login() {
  const { userId } = useParams()

  const { loading, err, sendRequest, clearError } = useHttp()

  useEffect(() => {
    clearError()
    const apiCall = async () => {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/freshers`
        )
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    apiCall()
  }, [sendRequest, clearError])

  return (
    <div style={{height:"100vh"}}>
      hello
      <div className="card mx-auto my-3 shadow p-3 mb-5 bg-body rounded border border-info border-3" style={{maxWidth:"75vw"}}>
        <div className={`card-body d-flex justify-content-between ${width<=444?"flex-column m-auto":""} `}>
          <h5 className="card-title">
            Hello Ramesh 
          </h5>
          <div className="mx-3">Id:fggh</div>
          <div className="mx-3">Score:10</div>
        </div>
      </div>
      <div className="container bg-light m-auto p-3 shadow p-3 mb-5 bg-body rounded border border-success border-2" style={{maxWidth:"60vw"}}>
        <p className="card-text">Instructions:</p>
            <p>Complete the tasks!</p>
      </div>
      <div className="container my-3" style={{maxWidth:"60vw"}}>
        <ul className="list-group mx-4">
          <li className="list-group-item d-flex justify-content-between align-items-start border border-dark border-2">
            <div className="ms-2 me-auto p-2">
              <div className="fw-bold" style={{pointer:"cursor"}}>Task #1</div>
            </div>
            <span className="p-2">&#10060;</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border border-dark border-2">
            <div className="ms-2 me-auto p-2">
              <div className="fw-bold">Task #2</div>
            </div>
            <span className="p-2">&#9989;</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start  border border-dark border-2">
            <div className="ms-2 me-auto p-2">
              <div className="fw-bold">Task #3</div>
            </div>
            <span className="p-2">&#10060;</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
