import { Skeleton } from "@/components/ui/skeleton"

export default function ReportDetailLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Breadcrumb Skeleton */}
        <div className="bg-slate-50 dark:bg-slate-900 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-4 mx-2" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-4 mx-2" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
        </div>

        {/* Report Hero Section Skeleton */}
        <section className="bg-white dark:bg-slate-950 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-2/3">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-20" />
                </div>
                <Skeleton className="h-12 w-full mb-4" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-6" />
                <div className="flex flex-wrap gap-6 mb-8">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-5 w-20" />
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  <Skeleton className="h-8 w-20 rounded-full" />
                  <Skeleton className="h-8 w-24 rounded-full" />
                  <Skeleton className="h-8 w-28 rounded-full" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Skeleton className="h-12 w-40" />
                  <Skeleton className="h-12 w-40" />
                  <Skeleton className="h-12 w-24" />
                </div>
              </div>
              <div className="md:w-1/3">
                <Skeleton className="w-full aspect-[4/3] rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Report Content Preview Skeleton */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Skeleton className="h-8 w-40 mb-4" />
                <div className="space-y-3">
                  {Array(8)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-center">
                        <Skeleton className="h-6 w-6 rounded-full mr-2" />
                        <Skeleton className="h-6 w-full" />
                      </div>
                    ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <Skeleton className="h-8 w-40 mb-6" />
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 mb-8">
                  <div className="space-y-4">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="flex items-start">
                          <Skeleton className="mt-1 h-6 w-6 rounded-full mr-3" />
                          <Skeleton className="h-6 w-full" />
                        </div>
                      ))}
                  </div>
                </div>

                <Skeleton className="h-8 w-48 mb-6" />
                <div className="space-y-4 mb-8">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-3/4" />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-6 mb-8">
                  <Skeleton className="h-6 w-60 mb-4" />
                  <div className="space-y-3">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="flex items-center">
                          <div className="h-5 w-5 mr-2 flex-shrink-0">
                            <Skeleton className="h-full w-full" />
                          </div>
                          <Skeleton className="h-5 w-full" />
                        </div>
                      ))}
                  </div>
                  <Skeleton className="h-10 w-40 mt-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Reports Section Skeleton */}
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-48 mb-8" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow">
                    <Skeleton className="w-full aspect-[4/3]" />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <Skeleton className="h-6 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-3/4 mb-4" />
                      <Skeleton className="h-8 w-28 mt-2" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section Skeleton */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <Skeleton className="h-8 w-3/4 mx-auto mb-4" />
                <Skeleton className="h-5 w-full mx-auto mb-2" />
                <Skeleton className="h-5 w-2/3 mx-auto mb-6" />
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Skeleton className="h-10 w-40 mx-auto sm:mx-0" />
                  <Skeleton className="h-10 w-40 mx-auto sm:mx-0" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
