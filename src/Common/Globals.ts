// const URL = "http://192.168.0.104/"
// const URL = "http://localhost/"
// const URL = "http://localhost:8001/"
// const URL = "http://13.127.82.144/"
const URL = "https://normal-user-api.aimsibs.com/";
const API_BASE_URL = URL + "normal-user/api/";
export const BLOG_URL = API_BASE_URL + "blog/";
export const BLOG_FILTER_URL = API_BASE_URL + "blog/?search=blogs";
export const NEWS_AND_EVENTS_FILTER_URL =
  API_BASE_URL + "blog/?search=news_and_events";
export const COMMENT_URL = {
  URL: `${API_BASE_URL}comment/`,
  FILTER_BLOG: ({ blogId }: { blogId: string }) =>
    `${API_BASE_URL}comment/?blog=${blogId}`,
  UPVOTE_ID: ({ id }: { id: number }) => `${API_BASE_URL}comment/${id}/upvote/`,
  UPVOTE_URL: ({ url }: { url: string }) => `${url}upvote/`,
  DOWNVOTE_ID: ({ id }: { id: number }) =>
    `${API_BASE_URL}comment/${id}/downvote/`,
  DOWNVOTE_URL: ({ url }: { url: string }) => `${url}downvote/`,
};

const DEFAULT_SCOPE = "normal-user-read normal-user-write";

const FORM_EMAIL_URL = {
  popup_email: API_BASE_URL + "popup-form-submission/",
  request_email: API_BASE_URL + "request-form-submission/",
  feedback_email: API_BASE_URL + "feedback-form-submission/",
  grievance_email: API_BASE_URL + "grievance-form-submission/",
};

export const COURSE_URL = {
  URL: `${API_BASE_URL}course/`,
};
export const PROGRAM_URL = {
  URL: `${API_BASE_URL}program/`,
};

export const PDF_BASE_URL = `${API_BASE_URL}pdf/`;
export const PDF_DOWNLOADS_FILTER_URL = `${PDF_BASE_URL}?search=downloads`;
export const LOAEOA_DOWNLOADS_FILTER_URL = `${PDF_BASE_URL}?search=loaeoa`;

const ROUTES = {
  HOMEPAGE: "/",
  "INDUSTRY INTEGRATED PROGRAM": "/industry-integrated-program",
  "MBA (BANGALORE UNIVERSITY)": "/mba-bangalore-university",
  PGDM: "/pgdm",
  PGPM: "/pgpm",
  "CERTIFICATION COURSES": "/certification-courses",
  // "B. COM++ (BANGALORE UNIVERSITY)" : '/b-com-plus',
  "B. COM Accelerator +": "/b-com-accelerator-plus",
  "PLACEMENT INSIGHTS": "/placement-insights",
  "PLACEMENT RECORDS": "/placement-records",
  "PLACEMENT RECRUITERS": "/placement-recruiters",
  "KEY DIFFERENTIATORS": "/key-differentiators",
  "RANKINGS CREDENTIALS OUR STRENGHTS": "/rankings-credentials-our-strenghts",
  "INDUSTRY RELEVANT CERTIFICATIONS": "/industry-relevant-certifications",
  "VALUE ADDED PROGRAMS AND PEDAGOGY": "/value-added-programs-pedagogy",
  "ADMISSION PROCESS": "/admission-process",
  // "APPLY ONLINE": 'https://aimsibs.nopaperforms.com/aims-ibs-application',
  "PAY ONLINE": "/pay-online",
  "GLOBAL EXPOSURE": "/global-exposure",
  "INTERNATIONAL ASSOCIATIONS": "/international-associations",
  "CONTACT US": "/contact-us",
  "OUR B SCHOOL": "/our-b-school",
  "WELCOME NOTE": "/welcome-note",
  "RANKINGS CREDENTIALS": "/rankings-credentials",
  "INDUSTRY/KNOWLEDGE PARTNERS": "/industry-knowledge-partners",
  GALLERY: "/gallery",
  TESTIMONIALS: "/testimonial",
  "INTERNSHIP INSIGHTS": "/internship-insights",
  "INTERNSHIPS RECORDS": "/internships-records",
  "INTERNSHIP RECRUITERS": "/internship-recruiters",
  FACULTY: "/faculty",
  "INTERNATIONAL FACULTY": "/faculty/#international-faculty",
  "INDUSTRY EXPERTS": "/faculty/#industry-experts",
  FAQS: "/faqs",
  "EXPERIENCE AIMS IBS": "/experience-aims-ibs",

  BLOG: "/blog",
  BLOG_WITH_PARAMS: "/blog/:blogId/:blogSlug?",

  NEWS_AND_EVENTS: "/news-events",
  NEWS_AND_EVENTS_WITH_PARAMS: "/news-events/:blogId/:blogSlug?",

  DOWNLOADS: "/downloads",

  GRIEVANCE: "/grievance",
  FEEDBACK: "/feedback",
  LOAANDEOA: "/loaandeoa",

  CancellationandRefundPolicy: "/cancellationandrefundpolicy",
  TermsandConditions: "/termsandconditions",
  PrivacyPolicy: "/privacypolicy",
  PaymentSuccess: "/payment/success",
  PaymentFailure: "/payment/failure",
  Payment: "/payment",
  PaymentCallback: "/payment/return",

  NOT_FOUND: "/404",
};

export { ROUTES, URL, FORM_EMAIL_URL, DEFAULT_SCOPE };
