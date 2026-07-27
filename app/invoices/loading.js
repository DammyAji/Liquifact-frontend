/**
 * @file app/invoices/loading.js
 * Next.js route-level loading UI for the /invoices page.
 *
 * Rendered automatically by the Next.js App Router while the page segment
 * is streaming. Delegates the nav header to NavMenuSkeleton and the upload
 * area to UploadSkeleton so all three stay in sync with their real counterparts.
 *
 * @see components/NavMenuSkeleton.jsx — reusable nav skeleton
 * @see components/UploadSkeleton.jsx  — reusable upload skeleton
 */
import NavMenuSkeleton from "../../components/NavMenuSkeleton";
import UploadSkeleton from "../../components/UploadSkeleton";

export default function InvoicesLoading() {
  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-100"
      aria-busy="true"
      data-testid="invoices-loading"
    >
      {/* ---- Reusable nav skeleton ---- */}
      <NavMenuSkeleton />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* ---- Page title ---- */}
        <div className="h-7 w-28 rounded bg-slate-700 animate-pulse mb-6" />
        {/* ---- Subtitle lines ---- */}
        <div className="h-4 w-full max-w-xl rounded bg-slate-800 animate-pulse mb-2" />
        <div className="h-4 w-2/3 max-w-lg rounded bg-slate-800 animate-pulse mb-8" />

        {/* ---- Reusable upload skeleton ---- */}
        <UploadSkeleton isBusy={true} />
      </main>
    </div>
  );
}
