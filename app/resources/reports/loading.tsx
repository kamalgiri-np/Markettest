import { Skeleton } from "@/components/ui/skeleton"

export default function ReportsLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-12 w-2/3" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-5/6" />
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Skeleton className="h-10 w-32" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
              <Skeleton className="mx-auto aspect-video h-60 w-full" />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Skeleton className="h-6 w-20 mx-auto" />
                <Skeleton className="h-10 w-[300px] mx-auto" />
                <Skeleton className="h-6 w-[500px] mx-auto" />
                <Skeleton className="h-6 w-[450px] mx-auto" />
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
              <Skeleton className="h-10 w-full md:w-1/3" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <Skeleton className="h-48 w-full rounded" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
