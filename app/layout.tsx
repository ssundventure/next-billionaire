export const metadata = {
  title: {
    template: "%s | Next Billionaire",
    default: "Next Billionaire",
  },
  description: "About Billionaires",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
