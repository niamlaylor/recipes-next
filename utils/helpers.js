export function formattedDomain (website) {
  const url = new URL(website).hostname;
  const prettyUrl = url.split('www.')[1];
  return prettyUrl;
};