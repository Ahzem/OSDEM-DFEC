import axios from 'axios';

const SHEET_ID = 'YOUR_SHEET_ID'; // Replace with your actual Google Sheet ID
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

const fetchTeamData = async () => {
  const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`);
  const rows = response.data.values;

  // Transform the rows into the desired format
  const teamData = rows.slice(1).map(row => ({
    name: row[0],
    subject: row[1],
    education: row[2].split(','),
    image: row[3],
    facebook: row[4],
    twitter: row[5],
    linkedin: row[6]
  }));

  return teamData;
};

export default fetchTeamData;
