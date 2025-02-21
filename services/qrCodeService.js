import QRCode from "qrcode";

export const generateQRCode = async (ticketId) => {
    try {
        return await QRCode.toDataURL(ticketId);
    } catch (err) {
        console.error(err);
    }
};
