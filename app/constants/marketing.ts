export const PLAY_STORE_APP_URL =
  "https://play.google.com/store/apps/details?id=com.nafiziqbal.QuranicApp";

export function getPlayStoreUrl(params?: {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}) {
  if (!params) return PLAY_STORE_APP_URL;

  const url = new URL(PLAY_STORE_APP_URL);
  const { utm_source, utm_medium, utm_campaign } = params;

  if (utm_source) url.searchParams.set("utm_source", utm_source);
  if (utm_medium) url.searchParams.set("utm_medium", utm_medium);
  if (utm_campaign) url.searchParams.set("utm_campaign", utm_campaign);

  return url.toString();
}
