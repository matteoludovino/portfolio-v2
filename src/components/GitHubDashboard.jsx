import { useState, useEffect, useCallback } from 'react';

function timeAgo(dateString) {
  const diff = Math.floor((Date.now() - new Date(dateString)) / 1000);
  if (diff < 60)  return `${diff} segundo${diff !== 1 ? 's' : ''} atrás`;
  if (diff < 3600) {
    const m = Math.floor(diff / 60);
    return `${m} minuto${m !== 1 ? 's' : ''} atrás`;
  }
  if (diff < 86400) {
    const h = Math.floor(diff / 3600);
    return `${h} hora${h !== 1 ? 's' : ''} atrás`;
  }
  const d = Math.floor(diff / 86400);
  return `${d} dia${d !== 1 ? 's' : ''} atrás`;
}

function formatTime(date) {
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function StatusIndicator({ status }) {
  const map = {
    online:   { label: 'Online',       cls: 'gh-status-dot--green'  },
    degraded: { label: 'Degradado',    cls: 'gh-status-dot--yellow' },
    offline:  { label: 'Indisponível', cls: 'gh-status-dot--red'    },
    loading:  { label: 'Verificando…', cls: 'gh-status-dot--grey'   },
  };
  const { label, cls } = map[status] ?? map.loading;
  return (
    <span className="gh-status-badge">
      <span className={`gh-status-dot ${cls}`}></span>
      {label}
    </span>
  );
}

function Skeleton({ width = '100%', height = '14px' }) {
  return (
    <span
      className="gh-skeleton"
      style={{ width, height, display: 'block', borderRadius: '4px' }}
    />
  );
}

export default function GitHubDashboard() {
  const [apiStatus, setApiStatus]   = useState({
    status:    'loading',
    latency:   null,
    checkedAt: null,
    error:     false,
  });

  const [commit, setCommit] = useState({
    loading:   true,
    error:     false,
    message:   null,
    repo:      null,
    author:    null,
    date:      null,
    url:       null,
    sha:       null,
  });

  const fetchStatus = useCallback(async () => {
    setApiStatus((prev) => ({ ...prev, status: 'loading', error: false }));
    try {
      const t0  = performance.now();
      const res = await fetch('https://www.githubstatus.com/api/v2/status.json');
      const ms  = Math.round(performance.now() - t0);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();

      const indicator = data?.status?.indicator ?? 'critical';
      const statusMap = {
        none:     'online',
        minor:    'degraded',
        major:    'degraded',
        critical: 'offline',
      };

      setApiStatus({
        status:    statusMap[indicator] ?? 'offline',
        latency:   ms,
        checkedAt: formatTime(new Date()),
        error:     false,
      });
    } catch {
      setApiStatus({
        status:    'offline',
        latency:   null,
        checkedAt: formatTime(new Date()),
        error:     true,
      });
    }
  }, []);

  const fetchCommit = useCallback(async () => {
    setCommit((prev) => ({ ...prev, loading: true, error: false }));
    try {
      const res = await fetch(
        'https://api.github.com/repos/matteoludovino/portfolio-v2/commits?per_page=1'
      );
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const [data] = await res.json();

      setCommit({
        loading: false,
        error:   false,
        message: data.commit.message,
        repo:    'matteoludovino/portfolio-v2',
        author:  data.commit.author.name,
        date:    data.commit.author.date,
        url:     data.html_url,
        sha:     data.sha.slice(0, 7),
      });
    } catch {
      setCommit((prev) => ({ ...prev, loading: false, error: true }));
    }
  }, []);

  useEffect(() => {
    fetchStatus();
    fetchCommit();
    const interval = setInterval(fetchStatus, 60_000);
    return () => clearInterval(interval);
  }, [fetchStatus, fetchCommit]);

  return (
    <section id="github-dashboard" className="gh-dashboard-section">
      <div className="gh-dashboard-wrapper">
        <h2 className="gh-dashboard-title">GitHub Status</h2>

        <div className="gh-dashboard-grid">

          <div className="gh-card">
            <div className="gh-card__header">
              <span className="gh-card__label">API Status</span>
              <button
                className="gh-refresh-btn"
                onClick={fetchStatus}
                title="Atualizar"
                aria-label="Atualizar status"
              >
                <i className="fas fa-rotate-right"></i>
              </button>
            </div>

            <div className="gh-card__body">
              <StatusIndicator status={apiStatus.status} />

              <div className="gh-card__meta">
                {apiStatus.latency !== null ? (
                  <span className="gh-meta-item">
                    <i className="fas fa-bolt gh-meta-icon"></i>
                    Latência: <strong>{apiStatus.latency}ms</strong>
                  </span>
                ) : (
                  apiStatus.status === 'loading' && <Skeleton width="120px" />
                )}

                {apiStatus.checkedAt ? (
                  <span className="gh-meta-item">
                    <i className="fas fa-clock gh-meta-icon"></i>
                    Verificado às <strong>{apiStatus.checkedAt}</strong>
                  </span>
                ) : (
                  apiStatus.status === 'loading' && <Skeleton width="140px" />
                )}

                {apiStatus.error && (
                  <span className="gh-meta-item gh-meta-item--error">
                    <i className="fas fa-triangle-exclamation gh-meta-icon"></i>
                    Falha ao conectar
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="gh-card">
            <div className="gh-card__header">
              <span className="gh-card__label">Último Commit</span>
              <button
                className="gh-refresh-btn"
                onClick={fetchCommit}
                title="Atualizar"
                aria-label="Atualizar commit"
              >
                <i className="fas fa-rotate-right"></i>
              </button>
            </div>

            <div className="gh-card__body">
              {commit.loading && (
                <div className="gh-skeleton-group">
                  <Skeleton width="90%" height="16px" />
                  <Skeleton width="60%" height="12px" />
                  <Skeleton width="75%" height="12px" />
                </div>
              )}

              {!commit.loading && commit.error && (
                <span className="gh-meta-item gh-meta-item--error">
                  <i className="fas fa-triangle-exclamation gh-meta-icon"></i>
                  Repositório indisponível
                </span>
              )}

              {!commit.loading && !commit.error && (
                <>
                  <p className="gh-commit-message">
                    {commit.message}
                  </p>

                  <div className="gh-card__meta">
                    <span className="gh-meta-item">
                      <i className="fab fa-github gh-meta-icon"></i>
                      <strong>{commit.repo}</strong>
                    </span>
                    <span className="gh-meta-item">
                      <i className="fas fa-user gh-meta-icon"></i>
                      {commit.author}
                      {' · '}
                      <span title={commit.date}>
                        {timeAgo(commit.date)}
                      </span>
                    </span>
                    <span className="gh-meta-item gh-meta-item--sha">
                      <i className="fas fa-code-commit gh-meta-icon"></i>
                      {commit.sha}
                    </span>
                  </div>

                  <a
                    href={commit.url}
                    target="_blank"
                    rel="noreferrer"
                    className="gh-commit-link"
                  >
                    Ver no GitHub
                    <i className="fas fa-arrow-right gh-link-arrow"></i>
                  </a>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
