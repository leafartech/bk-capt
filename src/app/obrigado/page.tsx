export default function Page() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-zinc-100">
            <div className="flex flex-col items-center text-center gap-2 sm:gap-3 py-12 px-4 sm:px-12 sm:py-16 border rounded-xl bg-white">
                <img src="./images/logo-black.png" alt="" className="w-40 sm:w-56" />
                <h1 className="text-xl sm:text-3xl font-bold">Muito obrigado por se cadastrar</h1>
                <p className="text-zinc-600 text-sm max-w-xs sm:max-w-xl sm:text-lg ">Nossa equipe comercial irá entrar em contato o quanto antes.</p>
            </div>  
        </div>
    )
}