const BASE_API = {
  PROD: "https:careerbox.letseduvate.com/qbox",
  STAGE: "https:cvbox.stage-gke.letseduvate.com/qbox",
};

let ENV = "";
if (typeof window !== "undefined") {
  const host = window.location.hostname;
  if (host === "careerbox.letseduvate.com") {
    ENV = "PROD";
  } else if (host === "cvbox.stage-gke.letseduvate.com") {
    ENV = "STAGE";
  } else {
    ENV = "STAGE";
  }
}

const BASE = BASE_API[ENV];
const APIS = {
  BASE_URL: BASE,
  LOGIN_API: `/authenticate/login/`,
  PROFILE_API: `/authenticate/employee_user_info/`,
};

export default APIS;
