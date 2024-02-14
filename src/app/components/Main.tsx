

type MainProps = {
  children: React.ReactNode
}

export function Main({children}: MainProps){

  return(
    <main className="flex min-h-screen flex-col items-center gap-3 p-10">
      {children}
    </main>
  )
}