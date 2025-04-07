const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <body>{children}</body>
    </div>
  );
};
export default AuthLayout;
