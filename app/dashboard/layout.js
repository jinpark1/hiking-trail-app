export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <div>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </div>
  );
}
