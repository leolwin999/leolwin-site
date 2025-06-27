export const SITE = {
  website: "https://leolwin.netlify.app/", // replace this with your deployed domain
  author: "Leo Lwin",
  profile: "",
  desc: "A seafarer's journey into self-taught tech — shared one blog at a time :)",
  title: "Leo Lwin",
  ogImage: "og-leolwin.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Spotted a Mistake?",
    url: "https://github.com/leolwin999/leolwin-site/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Yangon", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
