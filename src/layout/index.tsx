import Nav from "./nav";

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({children}: AppLayoutProps) => {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}

export default AppLayout