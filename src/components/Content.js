const Content = ({judul, status, DeleteData, UpdateData}) => {
  return (
    <>
      <div className="row">
        <div className={"col-7 my-2 p-2 rounded-4 ms-3 text-" + (status ? "bg-success" : "bg-warning")}>
          <h2>{judul}</h2>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id={"Aktifitas" + judul}
            onChange={(event)=>{UpdateData(event.target.checked)}} checked={status}/>
            <label className="form-check-label" for={"Aktifitas" + judul}>{status ? "Selesai" : "Blum Selesai"}</label>
          </div>
        </div>
        <button className='col-3 col-md-1 my-2 p-2 btn btn-danger rounded-4 ms-2 fw-bold' onClick={DeleteData}>
          X
        </button>
      </div>
    </>
  )
}

export default Content