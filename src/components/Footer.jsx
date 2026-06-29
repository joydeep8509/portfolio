import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <section>
            <footer className="py-7 px-4 relative mt-12 pt-8 flex flex-wrap justify-between items-center border-t border-border bg-card/40 backdrop-blur-md shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.05)] dark:shadow-[0_-10px_40px_-10px_rgba(255,255,255,0.02)]">
                <p className="text-sm text-muted-foreground"> 
                    &copy; {new Date().getFullYear()} Joydeep All rights reserved.
                </p>
                
                <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                    <ArrowUp size={20}/>
                </a>
            </footer>
        </section>
    );
};
