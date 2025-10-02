// export const BASE_URL = import.meta.env.VITE_BASE_URL;
// export const USER_API = `${BASE_URL}/user`;
// export const JOBS_API = `${BASE_URL}/jobs`;
// export const COMPANY_API = `${BASE_URL}/companies`;
// export const APPLICATION_API = `${BASE_URL}/applications`;

const BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://itconnectbackend.onrender.com/api/v1"
    : "http://localhost:5000/api/v1";

export const USER_API = `${BASE_URL}/user`;
export const JOBS_API = `${BASE_URL}/jobs`;
export const COMPANY_API = `${BASE_URL}/companies`;
export const APPLICATION_API = `${BASE_URL}/applications`;
