window.addEventListener("load", () => {
  const input = document.getElementById("Uploadfile");
  const filewrapper = document.getElementById("filewrapper");

  input.addEventListener("change", (e) => {
    let fileName = e.target.files[0].name;
    let filetype = e.target.value.split(".").pop();
    fileshow(fileName, filetype);
  });

  const fileshow = (fileName, filetype) => {
    const uploaded_fileboxElem = document.createElement("div");
    uploaded_fileboxElem.classList.add("uploaded_filebox");

    filewrapper.append(uploaded_fileboxElem);
  };
});
