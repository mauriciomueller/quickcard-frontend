export const LogoComponent = () => {
    return (
        <div className="flex items-center" data-testid="logo">
            <img 
                data-testid="logoSymbol" 
                className="w-auto h-8 mr-2" 
                src="/img/quick-card-logo.svg" 
                alt="QuickCard logo" 
            />
            <p data-testid="logoText" className="font-sans font-bold text-3xl">QuickCard</p>
        </div>
    )
}