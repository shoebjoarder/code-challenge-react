export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-4 py-4 text-xs text-muted-foreground sm:px-6">
        <p>
          Copyright @{" "}
          <a
            href="https://www.ikim.uk-essen.de"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Institut für Künstliche Intelligenz in der Medizin
          </a>{" "}
          {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
}
