import { useState, ChangeEvent } from "react";

import "../style/Form.scss";

interface File {
  target: {
    files: FileList | null;
  };
}

const Form = () => {
  const [image, setImage] = useState<File | null>(null);

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
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="file">Upload File:</label>
        <input
          className="form-control-file file "
          type="file"
          id="file"
          accept=".jpg"
          multiple
          onChange={handleImageChange}
        />

        <button className="bn5" type="submit">
          Upload
        </button>
      </div>
    </form>
  );
};

export default Form;
