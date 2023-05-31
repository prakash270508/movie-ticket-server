const PDFDocument = require("pdfkit");

exports.downLoadTicket = async (req, res, next) => {
  const { ticketItem } = req.body;
  const doc = new PDFDocument();
  doc.pipe(res); // Send the PDF as the response

  

  ticketItem.forEach((item) => {
    doc.fontSize(18).text("Your Ticket", { align: "center" });
    doc.moveDown();

    doc.fontSize(12).text(`Price: ${item.seatDetails.price}`);
    doc.fontSize(12).text(`Cinema: ${item.theater}`);
    doc.moveDown();

    doc.fontSize(12).text(`Seat Numbers:- ${item.seatDetails.seatNumber}`);
  });

  doc.end();
};
