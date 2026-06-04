export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    event: eventName,
    ...params,
    page_path: window.location.pathname,
    timestamp: Date.now(),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
