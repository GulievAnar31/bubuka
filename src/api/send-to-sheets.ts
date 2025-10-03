import { google } from "googleapis";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { name, phone } = req.body;

        if (!name || !phone) {
            return res.status(400).json({ error: "Name and phone required" });
        }

        const auth = new google.auth.JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "Лист1!A:C", // A=Name, B=Phone, C=Дата
            valueInputOption: "RAW",
            requestBody: {
                values: [[name, phone, new Date().toLocaleString("ru-RU")]],
            },
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Google Sheets Error:", error);
        return res.status(500).json({ error: "Failed to save to sheet" });
    }
}