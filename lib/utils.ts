import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchMedicines() {
  const options = {
  method: 'GET',
  url: 'https://ema-medicines-data-api.p.rapidapi.com/api/medicines/',
  headers: {
    'x-rapidapi-key': 'b9574fbb25msh90d8b72a00e52c3p108159jsn866165a8357a',
    'x-rapidapi-host': 'ema-medicines-data-api.p.rapidapi.com'
  }
};

  try {
    const response = await axios.request(options);
    return response.data
  } catch(error) {
    console.log(`Error: ${error}`)
  }
}