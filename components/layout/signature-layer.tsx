export function SignatureLayer() {
  return (
    <div aria-hidden className="signature-layer pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <span className="signature-triangle signature-triangle-a" />
      <span className="signature-triangle signature-triangle-b" />
      <span className="signature-frame frame-top-left" />
      <span className="signature-frame frame-bottom-right" />
      <span className="signature-grid" />
    </div>
  );
}
