import axios from "axios";

import { Resource } from "@/api/types";

const getPDFDownloads = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const path = process.env.VUE_APP_DATA_PATH_PDF_DOWNLOADS;
  const response = await axios.get(`${baseUrl}${path}`);
  return response.data as Resource[];
};

export default getPDFDownloads;
