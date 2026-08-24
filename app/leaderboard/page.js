"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getLeaderboard, getSession, subscribe } from "@/lib/store";

export default function LeaderboardPage() {
  const [rows, setRows] = useState([]);
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => {
      setRows(getLeaderboard());
      setUser(getSession());
    };
    sync();
    setReady(true);
    return subscribe(sync);
  }, []);

  if (!ready) return <div className="container section" />;

  const mine = rows.findIndex((r) => !r.sample && r.email === user?.email);

  return (
    <div className="container section">
      <div className="stack stack-8" style={{ maxWidth: 760 }}>
        <div className="stack stack-3">
          <p className="eyebrow">Leaderboard</p>
          <h1 style={{ fontSize: 34 }}>Who&apos;s tried the most</h1>
          <p className="muted" style={{ maxWidth: 600 }}>
            You get points for every simulation you finish — your best score counts, so running one
            again to fix a mistake only ever helps you.
          </p>
        </div>

        {!user && (
          <div className="card card-pad-lg">
            <div className="stack stack-3">
              <strong>You&apos;re not on the board yet</strong>
              <p className="small muted">
                Create an account and finish a simulation to get a score.
              </p>
              <div>
                <Link href="/login" className="btn btn-primary btn-sm">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="scroll-x">
          <table className="board">
            <thead>
              <tr>
                <th style={{ width: 48 }}>#</th>
                <th>Student</th>
                <th>Grade</th>
                <th style={{ textAlign: "right" }}>Done</th>
                <th style={{ textAlign: "right" }}>Points</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const isMe = !r.sample && r.email === user?.email;
                return (
                  <tr key={r.email || `sample-${i}`} className={isMe ? "me" : ""}>
                    <td className="mono">{i + 1}</td>
                    <td>
                      <span style={{ fontWeight: isMe ? 700 : 500 }}>{r.name}</span>
                      {isMe && <span className="pill pill-brand" style={{ marginLeft: 8 }}>You</span>}
                      {r.sample && (
                        <span className="pill" style={{ marginLeft: 8 }}>
                          Sample
                        </span>
                      )}
                    </td>
                    <td className="muted small">{r.grade}</td>
                    <td className="mono" style={{ textAlign: "right" }}>{r.completed}</td>
                    <td className="mono" style={{ textAlign: "right", fontWeight: 600 }}>{r.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {mine >= 0 && (
          <p className="small muted">
            You&apos;re {mine === 0 ? "top of the board" : `number ${mine + 1}`}. Finish another
            simulation to move up.
          </p>
        )}

        <p className="small muted">
          Rows marked <strong>Sample</strong> are example classmates included so a new student can
          see how the board works. In a real deployment these come from the school&apos;s own accounts.
        </p>
      </div>
    </div>
  );
}
