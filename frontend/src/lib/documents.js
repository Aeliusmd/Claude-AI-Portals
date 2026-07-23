export const SAMPLE_DOCUMENT_URL = "/sample.pdf";

export function openDocumentInNewTab(url = SAMPLE_DOCUMENT_URL) {
  window.open(url, "_blank", "noopener,noreferrer");
}
