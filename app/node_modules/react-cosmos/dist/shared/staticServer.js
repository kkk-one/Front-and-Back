import express from 'express';
import path from 'path';
export function serveStaticDir(app, staticPath, publicUrl) {
    const relStaticPath = path.relative(process.cwd(), staticPath);
    console.log(`[Cosmos] Serving static files from ${relStaticPath}`);
    app.use(removeLeadingDot(publicUrl), express.static(staticPath, {
        // Ensure Playground index loads instead an index.html found in the
        // static path
        index: false,
    }));
}
function removeLeadingDot(fromPath) {
    return fromPath.indexOf('.') === 0 ? fromPath.slice(1) : fromPath;
}
