import Nav from "./nav";

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({children}: AppLayoutProps) => {
    return (
        <div>
            <Nav />
            <div className="mt-25 py-12.5 px-30 bg-tangerine">
                {children}
            </div>
        </div>
    )
}

export default AppLayout