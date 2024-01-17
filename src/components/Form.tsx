import { useState, ChangeEvent } from "react";
import axios from "axios";
// import fs from "fs";

import "../style/Form.scss";

interface File {
  target: {
    files: FileList | null;
  };
}

const Form = () => {
  const [image, setImage] = useState();


  const logImages = async () => {
    const formData = new FormData();

    formData.append("image", image);
    formData.append("Content-Type", "application/json");
    formData.append("Accept", "application/json");
    formData.append("Origin", "http://localhost:3000");
    formData.getAll;
    console.log(formData.get("image"));

    const resp = await fetch("http://localhost:8080/api/v1/product", {
      method: "GET",
      body: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    return resp.json();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedImage: File = {
        target: {
          files: e.target.files,
        },
      };
      setImage(selectedImage);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (image && image.target.files) {
      console.log("Selected Files:", image.target.files);
    } else {
      console.log("No files selected");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="bn5 label" htmlFor="file">
            File:
          </label>
          <input
            className="form-control-file file "
            type="file"
            id="file"
            accept=".jpg"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />

          <button className="bn5" type="submit">
            Upload
          </button>
          <button onClick={logImages}>console</button>
        </div>
      </form>
      {/* <img src={image.name} /> */}
    </>
  );
};

export default Form;
