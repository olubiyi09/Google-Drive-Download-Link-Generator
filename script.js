const btn = document.getElementById("btn");
const googleLink = document.getElementById("glink");
const downloadLink = document.getElementById("download-link");
const clearBtn = document.querySelector(".clear");
const form = document.querySelector(".form");

btn.addEventListener("click", generateLink);
clearBtn.addEventListener("click", clearForm);

function generateLink(e) {
  e.preventDefault();

  const googleLinkValue = googleLink.value;
  const confirmLink = googleLink.value.includes(
    "https://drive.google.com/file/d/"
  );

  if (confirmLink == true) {
    const getDownloadLink = googleLink.value
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=download&id="
      )
      .replace("/view?usp=sharing", "");

    downloadLink.value = getDownloadLink;

    function copyText(target) {
      if (target.value == "") {
        alert("Please generate download link");
      } else {
        target.select();
        // document.execCommand("copy");
        navigator.clipboard.writeText(target.value).then(() => {
          alert("Link has been copied to the clipboard");
        });
      }
    }

    const copy = document.querySelector(".copy");
    copy.addEventListener("click", () => {
      return copyText(downloadLink);
    });

    // EMBED AUDIO FUNCTION
    // EMBED AUDIO FUNCTION
    const audio1 = `<audio width="300" height="32" controls="controls" src=""`;
    const audio2 = '"type="audio/mp3"></audio>';
    const embedAudio = document.getElementById("embed-audio");
    embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;
    // console.log(embedAudio.value);

    // COPY AUDIO EMBED CODE
    const copyAudio = document.querySelector(".copy-audio");
    copyAudio.addEventListener("click", () => {
      return copyText(embedAudio);
    });

    // COPY VIDEO EMBED CODE
    const getVideoLink = googleLink.value.replace("/view?usp=sharing", "");

    const video1 = `<iframe src="`;
    const video2 = '/preview" width="560" height="315"></iframe>';

    const embedVideo = document.getElementById("embed-video");
    embedVideo.value = `${video1}${getVideoLink}${video2}`;

    // COPY VIDEO EMBED CODE
    const copyVideo = document.querySelector(".copy-video");
    copyVideo.addEventListener("click", () => {
      return copyText(embedVideo);
    });
  } else {
    alert("Please enter a valid Google Drive File Link");
  }
}

function clearForm() {
  form.reset();
}
