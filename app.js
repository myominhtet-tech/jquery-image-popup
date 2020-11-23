$("#imageGallery").imagePopup({
    overlay: "rgba(0, 100, 0, 0.5)",
    closeButton: {
        src:"images/close.png",
        width:"30px",
        height:"30px"
    },
    imageBorder: "15px solid #ffffff",
    borderRadius: "10px",
    imageWidth: "500px",
    imageHeight: "400px",
    imageCaption: {
        exit: true,
        color: "#fff",
        fontSize: "20px"
    }
});