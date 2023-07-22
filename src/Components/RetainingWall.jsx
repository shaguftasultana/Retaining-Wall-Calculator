import React from "react";
import Slider from "@mui/material/Slider";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const RetainingWall = () => {
  const handleDownloadPDF = () => {
    const retainingWall = document.getElementById("retainingWall");

    html2canvas(retainingWall).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("retaining_wall.pdf");
    });
  };

  const [sliderValue, setSliderValue] = React.useState({
    height: 50,
    top: 0,
    bottom: 0,
    totalLength: 0,
    toeLength: 0,
    thickness: 0,
    shearKeyLength: 0,
    toeDistance: 0,
    shearKeyThickness: 0,
  });

  const handleSliderChange = (event, newValue, sliderName) => {
    console.log(newValue, sliderName, 'updated value')
    setSliderValue((prevSliderValue) => ({
      ...prevSliderValue,
      [sliderName]: newValue,
    }));
  };

  const getRetainingWallStyle = () => {
    const {
      height,
      top,
      bottom,
      totalLength,
      toeLength,
      thickness,
      shearKeyLength,
      toeDistance,
      shearKeyThickness,
    } = sliderValue;

    const stemStyle = {
      // height: `${height}px`,
      // width: "30px",
      // borderTop: `${top}px solid #808080`,
      // borderBottom: `${bottom}px solid #808080`,
      // backgroundColor: "#808080",
      // transform: "rotate(0deg)", // Upside down direction

      borderBottom: `${height}px solid #808080`,
      borderLeft: "0px solid transparent",
      borderRight: `${bottom}px solid transparent`,
      height: 0,
      width: `${top+bottom}px`,
    };

    const baseStyle = {
      width: `${totalLength}px`,
      toeLength: `${toeLength}px`,
      height: `${thickness}px`,
      backgroundColor: "#808080",
    };

    const shearKeyStyle = {
      width: `${shearKeyLength}px`,
      toeDistance: `${toeDistance}px`,
      height: `${shearKeyThickness}px`,
      border: "1px dotted #808080",
      backgroundColor: "#808080",
    };

    return {
      stemStyle,
      baseStyle,
      shearKeyStyle,
    };
  };
  const { stemStyle, baseStyle, shearKeyStyle } = getRetainingWallStyle();
  return (
    <>
      <section className="flex flex-col justify-center items-center font-poppins  lg:py-10 md:py-10 md:px-20 py-10 px-4 ">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
          <div className=" lg:p-4">
            <div className="flex items-center">
              <img src="logo.png" alt="Logo" className="w-10 h-10 mr-2" />
              <h1 className="text-xl font-bold">Retaining Wall</h1>
              <p className="text-md ml-4 font-medium">Beta</p>
            </div>
            <div className="flex flex-row  mt-10 mx-20">
              <p className="text-lg font-medium">LIVE MODEL</p>
              <hr className="w-20 mx-4 my-4  border-black border-t-2" />
            </div>
            <div className="mt-5" id="retainingWall" style={{}}>
              <div className="retaining-wall" style={stemStyle}></div>
              <div className="retaining-wall" style={baseStyle}></div>
              <div className="retaining-wall" style={shearKeyStyle}></div>
            </div>
            <div className="lg:mt-5">
              <div className="flex items-end  justify-end mt-6">
                <button className="bg-blue text-white px-6 py-2 rounded-xl">
                  AI Fix
                </button>
              </div>
              <div className="my-2">
                <h2 className="text-lg font-bold">Stem</h2>

                <div className="flex justify-between mt-2">
                  <h6 className=" text-lg">Height</h6>
                  <div className="w-1/2 mx-4">
                    <Slider
                      className="ml-10 "
                      value={sliderValue.height}
                      onChange={(event, newValue) =>
                        handleSliderChange(event, newValue, "height")
                      }
                      min={0}
                      max={300}
                      size="medium"
                      sx={{
                        "& .MuiSlider-thumb": {
                          backgroundColor: "#47c5fb", // Change the color of the slider thumb to blue
                        },
                        "& .MuiSlider-track": {
                          color: "#47c5fb", // Change the color of the slider track to blue
                        },
                      }}
                    />
                  </div>
                  <div>
                    <p className="border-gray-300 border rounded-xl px-8 py-1">
                      {sliderValue.height}ft
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <h6 className=" text-lg">Top</h6>
                  <div className="w-1/2 mx-4">
                    <Slider
                      className="ml-12"
                      value={sliderValue.top}
                      onChange={(event, newValue) =>
                        handleSliderChange(event, newValue, "top")
                      }
                      min={0}
                      max={100}
                      size="medium"
                      sx={{
                        "& .MuiSlider-thumb": {
                          backgroundColor: "#47c5fb", // Change the color of the slider thumb to blue
                        },
                        "& .MuiSlider-track": {
                          color: "#47c5fb", // Change the color of the slider track to blue
                        },
                      }}
                    />
                  </div>
                  <div>
                    <p className="border-gray-300 border rounded-xl px-8 py-1">
                      {sliderValue.top}ft
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <h6 className=" text-lg">Bottom </h6>
                  <div className="w-1/2 mx-4">
                    <Slider
                      className="ml-8"
                      value={sliderValue.bottom}
                      onChange={(event, newValue) =>
                        handleSliderChange(event, newValue, "bottom")
                      }
                      min={0}
                      max={100}
                      size="medium"
                      sx={{
                        "& .MuiSlider-thumb": {
                          backgroundColor: "#47c5fb", // Change the color of the slider thumb to blue
                        },
                        "& .MuiSlider-track": {
                          color: "#47c5fb", // Change the color of the slider track to blue
                        },
                      }}
                    />
                  </div>

                  <div>
                    <p className="border-gray-300 border rounded-xl px-8 py-1">
                      {sliderValue.bottom}ft
                    </p>
                  </div>
                </div>

                <h2 className="text-lg font-bold">Base</h2>

                <div className="flex justify-between mt-2">
                  <h6 className=" text-lg">Total Length</h6>
                  <div className="w-1/2 mx-4">
                    <Slider
                      className="ml-2"
                      value={sliderValue.totalLength}
                      onChange={(event, newValue) =>
                        handleSliderChange(event, newValue, "totalLength")
                      }
                      min={0}
                      max={100}
                      size="medium"
                      sx={{
                        "& .MuiSlider-thumb": {
                          backgroundColor: "#47c5fb", // Change the color of the slider thumb to blue
                        },
                        "& .MuiSlider-track": {
                          color: "#47c5fb", // Change the color of the slider track to blue
                        },
                      }}
                    />
                  </div>
                  <div>
                    <p className="border-gray-300 border rounded-xl px-7 py-1">
                      {sliderValue.totalLength}ft
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <h6 className=" text-lg">Toe Length</h6>
                  <div className="w-1/2 mx-4">
                    <Slider
                      className="ml-4"
                      value={sliderValue.toeLength}
                      onChange={(event, newValue) =>
                        handleSliderChange(event, newValue, "toeLength")
                      }
                      min={0}
                      max={100}
                      size="medium"
                      sx={{
                        "& .MuiSlider-thumb": {
                          backgroundColor: "#47c5fb", // Change the color of the slider thumb to blue
                        },
                        "& .MuiSlider-track": {
                          color: "#47c5fb", // Change the color of the slider track to blue
                        },
                      }}
                    />
                  </div>
                  <div>
                    <p className="border-gray-300 border rounded-xl px-8 py-1">
                      {sliderValue.toeLength}ft
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <h6 className=" text-lg">Thickness </h6>
                  <div className="w-1/2 mx-4">
                    <Slider
                      className="ml-5"
                      value={sliderValue.thickness}
                      onChange={(event, newValue) =>
                        handleSliderChange(event, newValue, "thickness")
                      }
                      min={0}
                      max={100}
                      size="medium"
                      sx={{
                        "& .MuiSlider-thumb": {
                          backgroundColor: "#47c5fb", // Change the color of the slider thumb to blue
                        },
                        "& .MuiSlider-track": {
                          color: "#47c5fb", // Change the color of the slider track to blue
                        },
                      }}
                    />
                  </div>

                  <div>
                    <p className="border-gray-300 border rounded-xl px-6 py-1">
                      {sliderValue.thickness}ft
                    </p>
                  </div>
                </div>
                <h2 className="text-lg font-bold">Shear Key </h2>

                <div className="flex justify-between mt-2">
                  <h6 className=" text-lg">Length</h6>
                  <div className="w-1/2 mx-4">
                    <Slider
                      className="ml-10"
                      value={sliderValue.shearKeyLength}
                      onChange={(event, newValue) =>
                        handleSliderChange(event, newValue, "shearKeyLength")
                      }
                      min={0}
                      max={100}
                      size="medium"
                      sx={{
                        "& .MuiSlider-thumb": {
                          backgroundColor: "#47c5fb", // Change the color of the slider thumb to blue
                        },
                        "& .MuiSlider-track": {
                          color: "#47c5fb", // Change the color of the slider track to blue
                        },
                      }}
                    />
                  </div>
                  <div>
                    <p className="border-gray-300 border rounded-xl px-8 py-1">
                      {sliderValue.shearKeyLength}ft
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <h6 className=" text-lg">Toe Distance</h6>
                  <div className="w-1/2 mx-2">
                    <Slider
                      className="ml-3"
                      value={sliderValue.toeDistance}
                      onChange={(event, newValue) =>
                        handleSliderChange(event, newValue, "toeDistance")
                      }
                      min={0}
                      max={100}
                      size="medium"
                      sx={{
                        "& .MuiSlider-thumb": {
                          backgroundColor: "#47c5fb", // Change the color of the slider thumb to blue
                        },
                        "& .MuiSlider-track": {
                          color: "#47c5fb", // Change the color of the slider track to blue
                        },
                      }}
                    />
                  </div>
                  <div>
                    <p className="border-gray-300 border rounded-xl px-8 py-1">
                      {sliderValue.toeDistance}ft
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <h6 className=" text-lg">Thickness</h6>
                  <div className="w-1/2 mx-8">
                    <Slider
                      className="ml-6"
                      value={sliderValue.shearKeyThickness}
                      onChange={(event, newValue) =>
                        handleSliderChange(event, newValue, "shearKeyThickness")
                      }
                      min={0}
                      max={100}
                      size="medium"
                      sx={{
                        "& .MuiSlider-thumb": {
                          backgroundColor: "#47c5fb", // Change the color of the slider thumb to blue
                        },
                        "& .MuiSlider-track": {
                          color: "#47c5fb", // Change the color of the slider track to blue
                        },
                      }}
                    />
                  </div>

                  <div>
                    <p className="border-gray-300 border rounded-xl px-8 py-1">
                      {sliderValue.shearKeyThickness}ft
                    </p>
                  </div>
                </div>
                <div className="flex py-10 gap-4">
                  <button className="text-black font-bold  rounded-xl">
                    Advanced
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="24"
                    fill="#47c5fb"
                    className="font-bold bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className=" py-10">
            <div>
              <div className="flex justify-end">
                <div className="flex gap-4">
                  <button className="bg-grey font-bold text-black px-4 py-2 rounded-xl">
                    Excel
                  </button>
                  <button
                    className="bg-black text-white px-4 py-2 rounded-xl"
                    onClick={handleDownloadPDF}
                  >
                    Download PDF
                  </button>
                </div>
              </div>
              <h1 className="text-2xl font-lg mt-20 mx-20 max-w-[400px] ">
                Unlock
                <span className="font-bold"> efficiency</span> with
                <span className="font-bold"> intelligent automation </span>
                for stability and strength design
              </h1>
              <div className="flex flex-row  mt-10 mx-20">
                <p className="text-lg font-medium">INSTANT ANALYSIS</p>
                <hr className="w-20 mx-4 my-4  border-black border-t-2" />
              </div>

              <div className="bg-gray-200 bg-opacity-25 rounded-2xl border-gray-200 p-10 my-20 ml-10 ">
                <div className="flex items-center justify-center  gap-2 mt-6">
                  <button className="bg-black text-white px-10 py-2 rounded-xl">
                    Stability
                  </button>
                  <button className="bg-gray-200 text-black px-10 font-bold py-2 rounded-xl">
                    Strength
                  </button>
                </div>
                <div className="my-20">
                  <h2 className="text-lg font-bold">Static</h2>
                  <div className="mt-2">
                    <div className="flex justify-between">
                      <h6 className="mr-2 text-sm">overturning </h6>
                      <hr className="w-60 my-2 ml-4 border-4 border-gray-300 rounded" />
                      <p className="ml-2">1.2</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Compression</h6>
                      <hr className="w-60 my-2 ml-1 border-4 border-gray-300 rounded" />
                      <p className="ml-2">1.4</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Bearing</h6>
                      <hr className="w-60 ml-12 my-2 border-4 border-gray-300 rounded" />
                      <p className="ml-2">1.3</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Sliding</h6>
                      <hr className="w-60 my-2 ml-16 border-4 border-gray-300 rounded" />
                      <p className="ml-2">2.4</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Flotation</h6>
                      <hr className="w-60 my-2 ml-10 border-4 border-gray-300 rounded" />
                      <p className="ml-2">5.1</p>
                    </div>
                  </div>
                  <h2 className="text-lg font-bold mt-10">Seismic</h2>
                  <div className="mt-2">
                    <div className="flex justify-between">
                      <h6 className="mr-2 text-sm">overturning </h6>
                      <hr className="w-60 my-2 ml-4 border-4 border-gray-300 rounded" />
                      <p className="ml-2">1.2</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Compression</h6>
                      <hr className="w-60 my-2 ml-1 border-4 border-gray-300 rounded" />
                      <p className="ml-2">1.4</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Bearing</h6>
                      <hr className="w-60 ml-12 my-2 border-4 border-gray-300 rounded" />
                      <p className="ml-2">1.3</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Sliding</h6>
                      <hr className="w-60 my-2 ml-16 border-4 border-gray-300 rounded" />
                      <p className="ml-2">2.4</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Flotation</h6>
                      <hr className="w-60 my-2 ml-10 border-4 border-gray-300 rounded" />
                      <p className="ml-2">5.1</p>
                    </div>
                  </div>
                  <h2 className="text-lg font-bold mt-10">
                    Peak Maximum Flow (PMF)
                  </h2>
                  <div className="mt-2">
                    <div className="flex justify-between">
                      <h6 className="mr-2 text-sm">overturning </h6>
                      <hr className="w-60 my-2 ml-4 border-4 border-gray-300 rounded" />
                      <p className="ml-2">1.2</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Compression</h6>
                      <hr className="w-60 my-2 ml-1 border-4 border-gray-300 rounded" />
                      <p className="ml-2">1.4</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Bearing</h6>
                      <hr className="w-60 ml-12 my-2 border-4 border-gray-300 rounded" />
                      <p className="ml-2">1.3</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Sliding</h6>
                      <hr className="w-60 my-2 ml-16 border-4 border-gray-300 rounded" />
                      <p className="ml-2">2.4</p>
                    </div>
                    <div className="flex  justify-between mt-2">
                      <h6 className="mr-2 text-sm">Flotation</h6>
                      <hr className="w-60 my-2 ml-10 border-4 border-gray-300 rounded" />
                      <p className="ml-2">5.1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RetainingWall;
