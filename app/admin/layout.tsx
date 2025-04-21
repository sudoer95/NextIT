export default function AdminPage({children,}: Readonly<{children: React.ReactNode;}>){
    return (
        <html lang="en">
            <body className="antialiased">
                <div className="min-h-screen">{children}</div>
            </body>
        </html>
    );
}