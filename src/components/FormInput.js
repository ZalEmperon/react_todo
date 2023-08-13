import { useState } from "react";
import Content from "./Content";

const FormInput = () => {
  const [Penjudulan, setPenjudulan] = useState("");
  const [Statusan, setStatusan] = useState(false);
  const [listcol, setListcol] = useState([]);

  function Daftaran(judul, status) {
    this.judul = judul;
    this.status = status;
  }

  const SubmitForm = (event) => {
    event.preventDefault();
    const newList = [...listcol, new Daftaran(Penjudulan, false)];
    setListcol(newList);
  };

  const DeleteData = (index) => {
    const updatedList = [...listcol];
    updatedList.splice(index, 1);
    setListcol(updatedList);
  };

  const ChangeStatus = (UpdateStatus, index)=>{
    const updatedList = [...listcol];
    updatedList[index].status = UpdateStatus;
    setListcol(updatedList);
  }

  return (
    <>
      <div
        className="container mt-5 bg-dark rounded-3 p-3 m-auto"
        style={{ width: "80%" }}>
        <h1 className="text-light">TODO LIST</h1>
        <div className="mb-3">
          <form className="d-flex" role="search" onSubmit={SubmitForm}>
            <input
              type="text"
              className="form-control"
              placeholder="Masukan Judul Aktifitas"
              onChange={(event) => setPenjudulan(event.target.value)}
              required/>
            <button className="btn btn-success ms-3" type="submit">
              Tambah
            </button>
          </form>
          <input
            type="checkbox"
            className="btn-check"
            id="btn-check-2"
            checked={Statusan}
            onChange={(event) => {
              setStatusan(event.target.checked);
            }}/>
          <label
            className={"my-3 btn " + (Statusan ? "btn-primary" : "btn-warning")}
            htmlFor="btn-check-2">
            {Statusan ? "Kembali" : "Tampilkan Sudah Selesai"}
          </label>
        </div>
        <div className="row">
          {Statusan ?
              listcol.filter((list) =>list.status === true)
              .map((list, index) => (
                <Content key={list} judul={list.judul} status={list.status}
                DeleteData={()=>DeleteData(index)} UpdateData={(UpdateStatus)=>ChangeStatus(UpdateStatus, index)} />
              ))
            : listcol.map((list, index) => (
                <Content key={list} judul={list.judul} status={list.status}
                DeleteData={()=>DeleteData(index)} UpdateData={(UpdateStatus)=>ChangeStatus(UpdateStatus, index)}/>
              ))}
        </div>
      </div>
    </>
  );
}

export default FormInput