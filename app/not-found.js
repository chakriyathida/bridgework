import Link from "next/link";

export default function NotFound() {
  return (
    <div className="narrow section">
      <div className="stack stack-4">
        <p className="eyebrow">404</p>
        <h1 style={{ fontSize: 30 }}>That page isn&apos;t here</h1>
        <p className="muted">The link may be old, or the simulation was removed.</p>
        <div className="row">
          <Link href="/student" className="btn btn-primary">Browse topics</Link>
          <Link href="/careers" className="btn btn-ghost">Explore careers</Link>
        </div>
      </div>
    </div>
  );
}
