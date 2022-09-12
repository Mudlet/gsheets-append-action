import * as dotenv from "dotenv";
dotenv.config();
import { info, getInput } from "@actions/core";
import { JWT } from "google-auth-library";
import { google } from "googleapis";
const sheets = google.sheets("v4");

const user = getInput("GOOGLE_USER_MAIL", {
  required: true,
});
const key = getInput("GOOGLE_USER_KEY", {
  required: true,
});
const googleAuth = new JWT(user, null, key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);
const spreadsheetId = getInput("SPREADSHEET", {
  required: true,
});
const tableStartCell = getInput("TABLE_START_CELL") || "A1";
const dataEnvironmentVariableName = getInput("DATA_ENV_NAME", {
  required: true,
});

const data = process.env[dataEnvironmentVariableName]
  .split("\n")
  .map((dataRow) => dataRow.split(","));

info("Uploading data...");
await sheets.spreadsheets.values.append({
  auth: googleAuth,
  spreadsheetId: spreadsheetId,
  range: tableStartCell,
  valueInputOption: "RAW",
  requestBody: {
    majorDimension: "ROWS",
    range: tableStartCell,
    values: data,
  },
});
info("Done.");
