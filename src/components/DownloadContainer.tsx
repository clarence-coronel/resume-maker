import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Function from chatgpt
function generatePDF() {
  const doc = new jsPDF();

  // Get the HTML element to be converted to PDF using its ID
  const content: HTMLElement | null = document.getElementById("livePreview");

  if (content) {
    // Use html2canvas to render the HTML element as an image
    html2canvas(content, { scale: 1 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Add the image to the PDF document
      doc.addImage(
        imgData,
        "PNG",
        0,
        0,
        doc.internal.pageSize.getWidth(),
        doc.internal.pageSize.getHeight()
      );

      // Save the PDF document
      doc.save("generated-resume.pdf");
    });
  } else {
    console.error("Element not found: #livePreview");
  }
}

export default function DownloadContainer() {
  return (
    <div className="flex flex-col-reverse sm:flex-row-reverse flex-wrap w-full gap-3 p-5 bg-white rounded-lg border-2 border-gray-200 shadow">
      <button
        onClick={generatePDF}
        className="flex-1 hover:bg-green-500 duration-200 flex flex-row flex-nowrap items-center justify-center gap-1 px-4 py-2 bg-green-600 text-white rounded-md font-bold"
      >
        Download Resume
      </button>
      {/* <button className="flex-1 hover:bg-neutral-400 duration-200 flex flex-row flex-nowrap items-center justify-center gap-1 px-4 py-2 bg-neutral-300 text-white rounded-md font-bold">Sample Resume</button> */}
    </div>
  );
}
