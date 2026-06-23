import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Header } from "./Header"

type LayoutDefaultProps = {
  children: ReactNode
  className?: string  
}

export function LayoutDefault({
  children,
  className  
}: LayoutDefaultProps) {

  return (
    <div className="relative h-dvh overflow-hidden bg-background text-foreground">
      <Header />
      <main
        className={cn(
          "mx-auto flex w-full max-w-6xl flex-1 py-10",
          className
        )}
      >
        {children}
      </main>
    </div>
  )
}


// import type { ReactNode } from "react"

// import { Button } from "@/components/ui/button"
// import { useTheme } from "@/components/theme-provider"
// import { cn } from "@/lib/utils"

// type LayoutDefaultProps = {
//   children: ReactNode
//   title?: string
//   description?: string
//   headerSlot?: ReactNode
//   className?: string
// }

// export function LayoutDefault({
//   children,
//   title = "4llves.dev",
//   description = "Base layout da aplicacao.",
//   headerSlot,
//   className,
// }: LayoutDefaultProps) {
//   const { theme, setTheme } = useTheme()
//   const isDark = theme === "dark"

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary/.12),transparent_40%)]" />

//       <div className="relative flex min-h-screen flex-col">
//         <header className="border-b border-border/60 backdrop-blur">
//           <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5">
//             <div className="space-y-1">
//               <span className="font-heading text-lg font-semibold tracking-tight">
//                 {title}
//               </span>
//               <p className="text-sm text-muted-foreground">{description}</p>
//             </div>

//             <div className="flex items-center gap-3">
//               {headerSlot}
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => setTheme(isDark ? "light" : "dark")}
//               >
//                 {isDark ? "Modo claro" : "Modo escuro"}
//               </Button>
//             </div>
//           </div>
//         </header>

//         <main
//           className={cn(
//             "mx-auto flex w-full max-w-6xl flex-1 px-6 py-10",
//             className
//           )}
//         >
//           {children}
//         </main>

//         <footer className="border-t border-border/60">
//           <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 text-sm text-muted-foreground">
//             <span>Layout padrao da aplicacao</span>
//             <span>Frontend React + Tailwind</span>
//           </div>
//         </footer>
//       </div>
//     </div>
//   )
// }